import {defHttp} from '/@/utils/http/axios';
import { useMessage } from "/@/hooks/web/useMessage";

const { createConfirm } = useMessage();

enum Api {
  list = '/orderapplication/orderApplicationMain/list',
  save='/orderapplication/orderApplicationMain/add',
  edit='/orderapplication/orderApplicationMain/edit',
  audit='/orderapplication/orderApplicationMain/audit',
  printOne = '/orderapplication/orderApplicationMain/print',
  submitOne = '/orderapplication/orderApplicationMain/submit',
  revokeOne = '/orderapplication/orderApplicationMain/revoke',
  revokeBatch = '/orderapplication/orderApplicationMain/revokeBatch',
  deleteOne = '/orderapplication/orderApplicationMain/delete',
  deleteBatch = '/orderapplication/orderApplicationMain/deleteBatch',
  importExcel = '/orderapplication/orderApplicationMain/importExcel',
  exportXls = '/orderapplication/orderApplicationMain/exportXls',
  orderApplicationListList = '/orderapplication/orderApplicationMain/queryOrderApplicationListByMainId',
}
/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;

/**
 * 导入api
 */
export const getImportUrl = Api.importExcel;
/**
 * 查询子表数据
 * @param params
 */
export const orderApplicationListList = Api.orderApplicationListList;
/**
 * 列表接口
 * @param params
 */
export const list = (params) =>
  defHttp.get({url: Api.list, params});

/**
 * 打印单个
 */
export const printOne = (params,handleSuccess) => {
  return defHttp.post({url: Api.printOne, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}

/**
 * 提交单个
 */
export const submitOne = (params,handleSuccess) => {
  return defHttp.post({url: Api.submitOne, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}

/**
 * 撤回单个
 */
export const revokeOne = (params,handleSuccess) => {
  return defHttp.post({url: Api.revokeOne, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}
/**
 * 批量撤回
 * @param params
 */
export const batchRevoke = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认撤回',
    content: '是否撤回选中申请',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.post({url: Api.revokeBatch, data: params}, {joinParamsToUrl: true}).then(() => {
        handleSuccess();
      });
    }
  });
}

/**
 * 删除单个
 */
export const deleteOne = (params,handleSuccess) => {
  return defHttp.delete({url: Api.deleteOne, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}
/**
 * 批量删除
 * @param params
 */
export const batchDelete = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({url: Api.deleteBatch, data: params}, {joinParamsToUrl: true}).then(() => {
        handleSuccess();
      });
    }
  });
}
/**
 * 保存或者更新
 * @param params
 */
export const saveOrUpdate = (params, isUpdate) => {
  let url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({url: url, params});
}

/**
 * 更新审核
 * @param params
 */
export const audit = (params) => {
  return defHttp.post({url: Api.audit, params});
}
