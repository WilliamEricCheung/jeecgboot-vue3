import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '创建日期',
    align:"center",
    dataIndex: 'createTime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '签收单位',
    align:"center",
    dataIndex: 'receiver'
   },
   {
    title: '供应单位',
    align:"center",
    dataIndex: 'provider'
   },
   {
    title: '账号或发票号',
    align:"center",
    dataIndex: 'receiptNumber'
   },
   {
    title: '电商采购月度申请主表ID',
    align:"center",
    dataIndex: 'orderApplicationMainId'
   },
   {
    title: '库别',
    align:"center",
    dataIndex: 'repository'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "签收单位",
      field: "receiver",
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "供应单位",
      field: "provider",
      component: 'Input',
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '创建日期',
    field: 'createTime',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入创建日期!'},
          ];
     },
  },
  {
    label: '签收单位',
    field: 'receiver',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入签收单位!'},
          ];
     },
  },
  {
    label: '供应单位',
    field: 'provider',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入供应单位!'},
          ];
     },
  },
  {
    label: '账号或发票号',
    field: 'receiptNumber',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入账号或发票号!'},
          ];
     },
  },
  {
    label: '电商采购月度申请主表ID',
    field: 'orderApplicationMainId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入电商采购月度申请主表ID!'},
          ];
     },
  },
  {
    label: '库别',
    field: 'repository',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入库别!'},
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
export const receiptListColumns: JVxeColumn[] = [
    {
      title: '材料名称',
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
      title: '规格型号',
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
      title: '计量单位',
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
      title: '应收数量',
      key: 'receivable',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '实收数量',
      key: 'receipt',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '购入单价',
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
      title: '购入金额',
      key: 'totalPrice',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: 0,
      validateRules: [
        { required: true, message: '${title}不能为空' },
      ],
      disabled: true,
      slots: {
        default: ({ row }) => {
          return `${row.price * row.receipt}`;
        },
      },
    },
    {
      title: '目录单价',
      key: 'libPrice',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '目录金额',
      key: 'libPriceTotal',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue: '',
      disabled: true,
      slots: {
        default: ({ row }) => {
          return `${row.libPrice * row.receipt}`;
        },
      },
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
