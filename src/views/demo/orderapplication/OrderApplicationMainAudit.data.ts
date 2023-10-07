import {FormSchema} from '/@/components/Table';
import {useUserStore} from '/@/store/modules/user';
import {JVxeColumn, JVxeTypes} from '/@/components/jeecg/JVxeTable/types'
import {getUserRoleSet} from "@/views/system/user/user.api";

const userRoleSet = await getUserRoleSet({username: useUserStore().getUserInfo.username});
const userRole = userRoleSet[0]
const managerDisabled = userRole == 'leader';
const leaderDisabled = userRole == 'manager';
const managerOpinionType = managerDisabled? JVxeTypes.normal: JVxeTypes.select;
const leaderOpinionType = leaderDisabled? JVxeTypes.normal: JVxeTypes.select;

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '部门编码',
    field: 'sysOrgCode',
    component: 'Input',
    defaultValue: useUserStore().getUserInfo.orgCode,
    dynamicRules: ({model, schema}) => {
      return [
        {required: true, message: '请输入申请部门!'},
      ];
    },
    dynamicDisabled: true
  },
  {
    label: '申请时间',
    field: 'createTime',
    component: 'DatePicker',
    defaultValue: new Date(),
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    },
    dynamicDisabled: true
  },
  {
    label: '经办人',
    field: 'createBy',
    component: 'Input',
    defaultValue: useUserStore().getUserInfo.username,
    dynamicRules: ({model, schema}) => {
      return [
        {required: true, message: '请输入经办人!'},
      ];
    },
    dynamicDisabled: true
  },
  {
    label: '部门主管',
    field: 'managerUsername',
    component: 'JSelectUserByDept',
    componentProps: {
      labelKey: 'realname',
    },
    dynamicRules: ({model, schema}) => {
      return [
        {required: true, message: '请输入部门主管!'},
      ];
    },
    dynamicDisabled: true
  },
  {
    label: '分管领导',
    field: 'leaderUsername',
    component: 'JSelectUserByDept',
    componentProps: {
      labelKey: 'realname',
    },
    dynamicRules: ({model, schema}) => {
      return [
        {required: true, message: '请输入分管领导!'},
      ];
    },
    dynamicDisabled: true
  },
  {
    label: '申请理由',
    field: 'reason',
    component: 'InputTextArea',
    dynamicRules: ({model, schema}) => {
      return [
        {required: true, message: '请输入申请理由!'},
      ];
    },
    dynamicDisabled: true,
  },
  // TODO 主键隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false
  },
  {
    label: '',
    field: 'departmentName',
    component: 'Input',
    show: false
  },
];
//子表单数据
//子表表格配置
export const orderApplicationListColumns: JVxeColumn[] = [
  {
    title: '部门主管意见',
    key: 'managerOpinion',
    type: managerOpinionType,
    defaultValue: '未审批',
    width: "200px",
    // 下拉选项
    options: [
      { title: '同意', value: '同意' },
      { title: '不同意', value: '不同意' },
    ],
    validateRules: [
      {required: true, message: '${title}不能为空'},
    ],
    placeholder: '请选择',
  },
  {
    title: '分管领导意见',
    key: 'leaderOpinion',
    type: leaderOpinionType,
    defaultValue: '未审批',
    width: "200px",
    // 下拉选项
    options: [
      { title: '同意', value: '同意' },
      { title: '不同意', value: '不同意' },
    ],
    validateRules: [
      {required: true, message: '${title}不能为空'},
    ],
    placeholder: '请选择',
  },
  {
    title: '品名',
    key: 'materialName',
    type: JVxeTypes.normal,
    width: "200px",
    placeholder: '请输入${title}',
    defaultValue: '',
    validateRules: [
      {required: true, message: '${title}不能为空'},
    ],
    dynamicDisabled: true,
  },
  {
    title: '生产厂家或品牌',
    key: 'brandName',
    type: JVxeTypes.normal,
    width: "200px",
    placeholder: '请输入${title}',
    defaultValue: '',
    validateRules: [
      {required: true, message: '${title}不能为空'},
    ],
    dynamicDisabled: true,
  },
  {
    title: '规格及型号',
    key: 'specification',
    type: JVxeTypes.normal,
    width: "200px",
    placeholder: '请输入${title}',
    defaultValue: '',
    validateRules: [
      {required: true, message: '${title}不能为空'},
    ],
    dynamicDisabled: true,
  },
  {
    title: '单位',
    key: 'unit',
    type: JVxeTypes.normal,
    width: "200px",
    placeholder: '请输入${title}',
    defaultValue: '',
    validateRules: [
      {required: true, message: '${title}不能为空'},
    ],
    dynamicDisabled: true,
  },
  {
    title: '库存',
    key: 'storage',
    type: JVxeTypes.normal,
    width: "200px",
    placeholder: '请输入${title}',
    defaultValue: '',
    validateRules: [
      {required: true, message: '${title}不能为空'},
    ],
    dynamicDisabled: true,
  },
  {
    title: '数量',
    key: 'number',
    type: JVxeTypes.normal,
    width: "200px",
    placeholder: '请输入${title}',
    defaultValue: '',
    validateRules: [
      {required: true, message: '${title}不能为空'},
    ],
    dynamicDisabled: true,
  },
  {
    title: '单价',
    key: 'price',
    type: JVxeTypes.normal,
    width: "200px",
    placeholder: '请输入${title}',
    defaultValue: '',
    validateRules: [
      {required: true, message: '${title}不能为空'},
    ],
    dynamicDisabled: true,
  },
  {
    title: '总价',
    key: 'totalPrice',
    type: JVxeTypes.normal,
    width: "200px",
    placeholder: '请输入${title}',
    defaultValue: '',
    validateRules: [
      {required: true, message: '${title}不能为空'},
    ],
    dynamicDisabled: true,
  },
  {
    title: '用途及使用场所',
    key: 'purpose',
    type: JVxeTypes.normal,
    width: "200px",
    placeholder: '请输入${title}',
    defaultValue: '',
    validateRules: [
      {required: true, message: '${title}不能为空'},
    ],
    dynamicDisabled: true,
  },
  {
    title: '电商平台物资编码',
    key: 'materialCode',
    type: JVxeTypes.normal,
    width: "200px",
    placeholder: '请输入${title}',
    defaultValue: '',
    validateRules: [
      {required: true, message: '${title}不能为空'},
    ],
    dynamicDisabled: true,
  },
]


/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
// 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
