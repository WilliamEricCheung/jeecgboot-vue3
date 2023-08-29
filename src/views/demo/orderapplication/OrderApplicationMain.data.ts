import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { useUserStore } from '/@/store/modules/user';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '申请部门',
    align:"center",
    dataIndex: 'sysOrgCode'
   },
   {
    title: '申请时间',
    align:"center",
    dataIndex: 'createTime'
   },
   {
    title: '经办人',
    align:"center",
    dataIndex: 'createBy'
   },
   {
    title: '更新时间',
    align:"center",
    dataIndex: 'updateTime'
   },
   {
    title: '部门主管',
    align:"center",
    dataIndex: 'managerUsername_dictText'
   },
   {
    title: '分管领导',
    align:"center",
    dataIndex: 'leaderUsername_dictText'
   },
   {
    title: '申请理由',
    align:"center",
    dataIndex: 'reason'
   },
   {
    title: '申请状态',
    align:"center",
    dataIndex: 'applicationStatus'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "申请部门",
      field: "sysOrgCode",
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "经办人",
      field: "createBy",
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '申请部门',
    field: 'sysOrgCode',
    component: 'Input',
    defaultValue: useUserStore().getUserInfo.orgCode,
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入申请部门!'},
          ];
     },
    dynamicDisabled:true
  },
  {
    label: '申请时间',
    field: 'createTime',
    component: 'DatePicker',
    defaultValue: new Date(),
    componentProps: {
       showTime:true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicDisabled:true
  },
  {
    label: '经办人',
    field: 'createBy',
    component: 'Input',
    defaultValue: useUserStore().getUserInfo.realname,
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入经办人!'},
          ];
     },
    dynamicDisabled:true
  },
  {
    label: '部门主管',
    field: 'managerUsername',
    component: 'JSelectUserByDept',
    componentProps:{
        labelKey:'realname',
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入部门主管!'},
          ];
     },
  },
  {
    label: '分管领导',
    field: 'leaderUsername',
    component: 'JSelectUserByDept',
    componentProps:{
        labelKey:'realname',
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入分管领导!'},
          ];
     },
  },
  {
    label: '申请理由',
    field: 'reason',
    component: 'InputTextArea',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入申请理由!'},
          ];
     },
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
//子表单数据
//子表表格配置
export const orderApplicationListColumns: JVxeColumn[] = [
    {
      title: '品名',
      key: 'materialName',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '生产厂家或品牌',
      key: 'brandName',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '规格及型号',
      key: 'specification',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '单位',
      key: 'unit',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '数量',
      key: 'number',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '单价',
      key: 'price',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '总价',
      key: 'totalPrice',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '用途及使用场所',
      key: 'purpose',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '电商平台物资编码',
      key: 'materialCode',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
  ]


/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
// 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
