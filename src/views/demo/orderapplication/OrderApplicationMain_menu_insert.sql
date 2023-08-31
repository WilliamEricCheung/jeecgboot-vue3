-- 注意：该页面对应的前台目录为views/orderapplication文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('2023082903286200130', NULL, '电商采购月度申请表', '/orderapplication/orderApplicationMainList', 'orderapplication/OrderApplicationMainList', NULL, NULL, 0, NULL, '1', 0.00, 0, NULL, 1, 0, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2023-08-29 15:28:13', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023082903286200131', '2023082903286200130', '添加电商采购月度申请表', NULL, NULL, 0, NULL, NULL, 2, 'orderapplication:order_application_main:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-08-29 15:28:13', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023082903286200132', '2023082903286200130', '编辑电商采购月度申请表', NULL, NULL, 0, NULL, NULL, 2, 'orderapplication:order_application_main:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-08-29 15:28:13', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023082903286200133', '2023082903286200130', '删除电商采购月度申请表', NULL, NULL, 0, NULL, NULL, 2, 'orderapplication:order_application_main:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-08-29 15:28:13', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023082903286200134', '2023082903286200130', '批量删除电商采购月度申请表', NULL, NULL, 0, NULL, NULL, 2, 'orderapplication:order_application_main:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-08-29 15:28:13', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023082903286200135', '2023082903286200130', '导出excel_电商采购月度申请表', NULL, NULL, 0, NULL, NULL, 2, 'orderapplication:order_application_main:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-08-29 15:28:13', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023082903286200136', '2023082903286200130', '导入excel_电商采购月度申请表', NULL, NULL, 0, NULL, NULL, 2, 'orderapplication:order_application_main:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-08-29 15:28:13', NULL, NULL, 0, 0, '1', 0);
-- 提交
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023082903286200137', '2023082903286200130', '提交电商采购月度申请表', NULL, NULL, 0, NULL, NULL, 2, 'orderapplication:order_application_main:submit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-08-29 15:28:13', NULL, NULL, 0, 0, '1', 0);
-- 撤回
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023082903286200138', '2023082903286200130', '撤回电商采购月度申请表', NULL, NULL, 0, NULL, NULL, 2, 'orderapplication:order_application_main:revoke', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-08-29 15:28:13', NULL, NULL, 0, 0, '1', 0);
-- 批量撤回
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023082903286200139', '2023082903286200130', '批量撤回电商采购月度申请表', NULL, NULL, 0, NULL, NULL, 2, 'orderapplication:order_application_main:revokeBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-08-29 15:28:13', NULL, NULL, 0, 0, '1', 0);
-- 审核
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023082903286200140', '2023082903286200130', '审核电商采购月度申请表', NULL, NULL, 0, NULL, NULL, 2, 'orderapplication:order_application_main:audit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-08-29 15:28:13', NULL, NULL, 0, 0, '1', 0);
