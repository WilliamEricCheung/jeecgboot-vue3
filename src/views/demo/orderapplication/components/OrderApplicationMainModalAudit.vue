<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :defaultFullscreen="true" destroyOnClose :title="title" :width="896" @ok="handleSubmit">
      <BasicForm @register="registerForm" ref="formRef"/>
  <!-- 子表单区域 -->
    <a-tabs v-model:activeKey="activeKey" animated @change="handleChangeTabs">
      <a-tab-pane tab="电商采购月度申请表采购物资具体要求" key="orderApplicationList" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="orderApplicationList"
          :loading="orderApplicationListTable.loading"
          :columns="orderApplicationListTable.columns"
          :dataSource="orderApplicationListTable.dataSource"
          :height="340"
          :rowNumber="true"
          :rowSelection="false"
          :disabled="formDisabled"
          :toolbar="false"
          />
      </a-tab-pane>
    </a-tabs>
  </BasicModal>
</template>

<script lang="ts" setup>
    import {ref, computed, unref,reactive} from 'vue';
    import {BasicModal, useModalInner} from '/@/components/Modal';
    import {BasicForm, useForm} from '/@/components/Form/index';
    import { JVxeTable } from '/@/components/jeecg/JVxeTable'
    import { useJvxeMethod } from '/@/hooks/system/useJvxeMethods.ts'
    import {formSchema,orderApplicationListColumns} from '../OrderApplicationMainAudit.data';
    import {audit, orderApplicationListList} from '../OrderApplicationMain.api';
    import { VALIDATE_FAILED } from '/@/utils/common/vxeUtils'
    import {useUserStore} from "@/store/modules/user";
    // Emits声明
    const emit = defineEmits(['register','success']);
    const isUpdate = ref(true);
    const isDetail = ref(false);
    const formDisabled = ref(false);
    const refKeys = ref(['orderApplicationList', ]);
    const activeKey = ref('orderApplicationList');
    const orderApplicationList = ref();
    const tableRefs = {orderApplicationList, };
    const orderApplicationListTable = reactive({
          loading: false,
          dataSource: [],
          columns:orderApplicationListColumns
    })
    //表单配置
    const [registerForm, {setProps,resetFields, setFieldsValue, validate}] = useForm({
        //labelWidth: 150,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: {span: 12}
    });
     //表单赋值
    const [registerModal, {setModalProps, closeModal}] = useModalInner(async (data) => {
        //重置表单
        await reset();
        setModalProps({confirmLoading: false,showCancelBtn:data?.showFooter,showOkBtn:data?.showFooter});
        isUpdate.value = !!data?.isUpdate;
        isDetail.value = !!data?.isDetail;
        formDisabled.value = !data?.showFooter;
        if (unref(isUpdate)) {
            //表单赋值
            await setFieldsValue({
                ...data.record,
            });
             requestSubTableData(orderApplicationListList, {id:data?.record?.id}, orderApplicationListTable)
        }
        // 隐藏底部时禁用整个表单
       setProps({ disabled: !data?.showFooter })
    });
    //方法配置
    const [handleChangeTabs,handleSubmit,requestSubTableData,formRef] = useJvxeMethod(requestAudit,classifyIntoFormData,tableRefs,activeKey,refKeys);

    //设置标题
    const title = computed(() => (unref(isDetail) ? '详情' : '审核'));

    async function reset(){
      await resetFields();
      activeKey.value = 'orderApplicationList';
      orderApplicationListTable.dataSource = [];
    }
    function classifyIntoFormData(allValues) {
         let main = Object.assign({}, allValues.formValue)
         return {
           ...main, // 展开
           orderApplicationListList: allValues.tablesValue[0].tableData,
         }
       }
    //表单提交事件
    async function requestAudit(values) {
        try {
            values.updateTime = values.createTime;
            setModalProps({confirmLoading: true});
            //提交表单
            await audit(values);
            //关闭弹窗
            closeModal();
            //刷新列表
            emit('success');
        } finally {
            setModalProps({confirmLoading: false});
        }
    }
</script>

<style lang="less" scoped>
	/** 时间和数字输入框样式 */
    :deep(.ant-input-number){
		width: 100%
	}

	:deep(.ant-calendar-picker){
		width: 100%
	}
</style>
