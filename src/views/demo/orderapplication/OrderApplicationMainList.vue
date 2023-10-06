<template>
  <div>
    <!--引用表格-->
   <BasicTable @register="registerTable" :rowSelection="rowSelection">
     <!--插槽:table标题-->
      <template #tableTitle>
          <a-button type="primary" @click="handleAdd" preIcon="ant-design:plus-outlined" v-if="hasPermission('orderapplication:order_application_main:add')"> 新增</a-button>
          <a-button  type="primary" preIcon="ant-design:export-outlined" @click="onExportXls" v-if="hasPermission('orderapplication:order_application_main:exportXls')"> 导出</a-button>
          <j-upload-button  type="primary" preIcon="ant-design:import-outlined" @click="onImportXls" v-if="hasPermission('orderapplication:order_application_main:importExcel')">导入</j-upload-button>
          <a-dropdown v-if="selectedRowKeys.length > 0">
              <template #overlay>
                <a-menu>
                  <a-menu-item key="0" @click="batchHandleRevoke" v-if="hasPermission('orderapplication:order_application_main:revokeBatch')">
                    <Icon icon="ant-design:disconnect-outlined"></Icon>
                    撤回
                  </a-menu-item>
                  <a-menu-item key="1" @click="batchHandleDelete" v-if="hasPermission('orderapplication:order_application_main:deleteBatch')">
                    <Icon icon="ant-design:delete-outlined"></Icon>
                    删除
                  </a-menu-item>
                </a-menu>
              </template>
              <a-button>批量操作
                <Icon icon="mdi:chevron-down"></Icon>
              </a-button>
        </a-dropdown>
      </template>
       <!--操作栏-->
      <template #action="{ record }">
        <TableAction :actions="getTableAction(record)" :dropDownActions="getDropDownAction(record)"/>
      </template>
      <!--字段回显插槽-->
      <template #htmlSlot="{text}">
         <div v-html="text"></div>
      </template>
      <!--省市区字段回显插槽-->
      <template #pcaSlot="{text}">
        {{ getAreaTextByCode(text) }}
      </template>
      <template #fileSlot="{text}">
         <span v-if="!text" style="font-size: 12px;font-style: italic;">无文件</span>
         <a-button v-else :ghost="true" type="primary" preIcon="ant-design:download-outlined" size="small" @click="downloadFile(text)">下载</a-button>
      </template>
    </BasicTable>
    <!-- 表单区域 -->
    <OrderApplicationMainModal @register="registerModal" @success="handleSuccess"></OrderApplicationMainModal>
    <OrderApplicationMainModalAudit @register="registerModalAudit" @success="handleSuccess"></OrderApplicationMainModalAudit>
  </div>
</template>

<script lang="ts" name="orderapplication-orderApplicationMain" setup>
  import { usePermission } from '/@/hooks/web/usePermission';
  const { hasPermission, isDisabledAuth } = usePermission();
  import {ref, computed, unref} from 'vue';
  import {BasicTable, useTable, TableAction} from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage'
  import {useModal} from '/@/components/Modal';
  import OrderApplicationMainModal from './components/OrderApplicationMainModal.vue'
  import OrderApplicationMainModalAudit from './components/OrderApplicationMainModalAudit.vue'
  import {columns, searchFormSchema} from './OrderApplicationMain.data';
  import {list, printOne, submitOne, revokeOne, batchRevoke, deleteOne, batchDelete, getImportUrl,getExportUrl} from './OrderApplicationMain.api';
  import {downloadFile} from '/@/utils/common/renderUtils';
  import {getToken} from "@/utils/auth";
  const checkedKeys = ref<Array<string | number>>([]);
  //注册model
  const [registerModal, {openModal}] = useModal();
  const [registerModalAudit, {openModal: openModalAudit}] = useModal();
   //注册table数据
  const { prefixCls,tableContext,onExportXls,onImportXls } = useListPage({
      tableProps:{
           title: '电商采购月度申请表',
           api: list,
           columns,
           canResize:false,
           formConfig: {
                //labelWidth: 120,
                schemas: searchFormSchema,
                autoSubmitOnEnter:true,
                showAdvancedButton:true,
                fieldMapToNumber: [
                ],
                fieldMapToTime: [
                ],
            },
           actionColumn: {
               width: 120,
               fixed:'right'
           },
        },
        exportConfig: {
            name:"电商采购月度申请表",
            url: getExportUrl,
        },
        importConfig: {
            url: getImportUrl,
            success: handleSuccess
        },
    })

  const [registerTable, {reload},{ rowSelection, selectedRowKeys }] = tableContext

   /**
    * 新增事件
    */
  function handleAdd() {
     openModal(true, {
       isUpdate: false,
       showFooter: true,
     });
  }
   /**
    * 编辑事件
    */
  function handleEdit(record: Recordable) {
     openModal(true, {
       record,
       isUpdate: true,
       showFooter: true,
     });
   }
  /**
   * 审核事件
   */
  function handleAudit(record: Recordable) {
    openModalAudit(true, {
      record,
      isUpdate: true,
      showFooter: true,
    });
  }
   /**
    * 详情
    */
  function handleDetail(record: Recordable) {
     openModal(true, {
       record,
       isUpdate: true,
       showFooter: false,
     });
   }

  /**
   * 打印申请事件
   */
  async function handlePrint(record) {
    // await printOne({id: record.id}, handleSuccess);
    let token = getToken();
    let url = `${window._CONFIG['domianURL']}/jmreport/view/857474803385208832?token=${token}&id=${record.id}`;
    window.location.href = url
  }

   /**
    * 提交申请事件
    */
   async function handleSubmit(record) {
    await submitOne({id: record.id}, handleSuccess);
   }

   /**
    * 撤回申请事件
    */
  async function handleRevoke(record) {
    await revokeOne({id: record.id}, handleSuccess);
   }

  /**
   * 批量撤回申请时间
   */
  async function batchHandleRevoke() {
    await batchRevoke({ids: selectedRowKeys.value},handleSuccess);
  }

   /**
    * 删除事件
    */
  async function handleDelete(record) {
     await deleteOne({id: record.id}, handleSuccess);
   }
   /**
    * 批量删除事件
    */
  async function batchHandleDelete() {
     await batchDelete({ids: selectedRowKeys.value},handleSuccess);
   }
   /**
    * 成功回调
    */
  function handleSuccess() {
      (selectedRowKeys.value = []) && reload();
   }
   /**
      * 操作栏
      */
  function getTableAction(record){
       return [
         {
           label: '提交',
           popConfirm: {
             title: '是否确认提交，提交后无法编辑',
             confirm: handleSubmit.bind(null, record)
           },
           auth: 'orderapplication:order_application_main:submit',
           disabled: !(record.applicationStatus == 'applicant_not_submitted' || record.applicationStatus == 'applicant_revoked')
         },
         {
           label: '审核',
           onClick: handleAudit.bind(null, record),
           auth: 'orderapplication:order_application_main:audit'
         }
       ]
   }


  /**
   * 下拉操作栏
   */
  function getDropDownAction(record){
    return [
      {
        label: '详情',
        onClick: handleDetail.bind(null, record),
      },
      {
        label: '打印',
        onClick: handlePrint.bind(null, record),
        auth: 'orderapplication:order_application_main:print',
        disabled: !(record.applicationStatus == 'leader_confirmed_all' || record.applicationStatus == 'leader_confirmed_part')
      },
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
        auth: 'orderapplication:order_application_main:edit',
        disabled: !(record.applicationStatus == 'applicant_not_submitted' || record.applicationStatus == 'applicant_revoked')
      },
      {
        label: '撤回',
        popConfirm: {
          title: '是否确认撤回申请',
          confirm: handleRevoke.bind(null, record),
        },
        // 仅有申请人可以撤回
        auth: 'orderapplication:order_application_main:revoke',
        disabled: record.applicationStatus == 'applicant_revoked'
      },{
        label: '删除',
        popConfirm: {
          title: '是否确认删除',
          confirm: handleDelete.bind(null, record),
        },
        auth: 'orderapplication:order_application_main:delete',
        disabled: !(record.applicationStatus == 'applicant_not_submitted' || record.applicationStatus == 'applicant_revoked')
      }
    ]
  }

</script>

<style scoped>

</style>
