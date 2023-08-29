import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '姓名',
    dataIndex: 'name'
   },
   {
    title: '关键词',
    dataIndex: 'keyWord'
   },
   {
    title: '打卡时间',
    dataIndex: 'punchTime'
   },
   {
    title: '工资',
    dataIndex: 'salaryMoney'
   },
   {
    title: '奖金',
    dataIndex: 'bonusMoney'
   },
   {
    title: '性别 {男:1,女:2}',
    dataIndex: 'sex'
   },
   {
    title: '年龄',
    dataIndex: 'age'
   },
   {
    title: '生日',
    dataIndex: 'birthday'
   },
   {
    title: '邮箱',
    dataIndex: 'email'
   },
   {
    title: '个人简介',
    dataIndex: 'content'
   },
   {
    title: '所属部门编码',
    dataIndex: 'sysOrgCode'
   },
   {
    title: 'tenantId',
    dataIndex: 'tenantId'
   },
   {
    title: '乐观锁测试',
    dataIndex: 'updateCount'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '姓名',
    field: 'name',
    component: 'Input'
  },
 {
    label: '关键词',
    field: 'keyWord',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '姓名',
    field: 'name',
    component: 'Input',
  },
  {
    label: '关键词',
    field: 'keyWord',
    component: 'Input',
  },
  {
    label: '打卡时间',
    field: 'punchTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: '工资',
    field: 'salaryMoney',
    component: 'InputNumber',
  },
  {
    label: '奖金',
    field: 'bonusMoney',
    component: 'InputNumber',
  },
  {
    label: '性别 {男:1,女:2}',
    field: 'sex',
    component: 'Input',
  },
  {
    label: '年龄',
    field: 'age',
    component: 'InputNumber',
  },
  {
    label: '生日',
    field: 'birthday',
    component: 'DatePicker'
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
  },
  {
    label: '个人简介',
    field: 'content',
    component: 'Input',
  },
  {
    label: '所属部门编码',
    field: 'sysOrgCode',
    component: 'Input',
  },
  {
    label: 'tenantId',
    field: 'tenantId',
    component: 'InputNumber',
  },
  {
    label: '乐观锁测试',
    field: 'updateCount',
    component: 'InputNumber',
  },
];
