// 番茄小说 VIP 伪装优化脚本
let body = $response.body;
let obj;

try {
  obj = JSON.parse(body);
} catch (e) {
  $done({});
  return;
}

if (obj?.data) {
  obj.data.vip_type = 1;
  obj.data.vip_status = 1;
  obj.data.is_vip = true;
  obj.data.vip_level = 3;
  obj.data.expire_time = 4102415999;
  obj.data.vip_expire_time = 4102415999;
  obj.data.surplus_days = 999;
  obj.data.can_read = true;
  obj.data.can_download = true;
  obj.data.auto_renewal = true;

  obj.data.rights = {
    read_without_ads: true,
    download_allowed: true,
    exclusive_content: true,
    listen_books: true,
    vip_video: true
  };

  obj.data.user_subscription = {
    is_vip: true,
    level: 3,
    expire_time: 4102415999,
    surplus_days: 999,
    rights: obj.data.rights
  };

  obj.data.has_vip_privileges = true;
  obj.data.vip_label = "高级会员";
  obj.data.vip_name = "超级番茄 VIP";

  $done({ body: JSON.stringify(obj) });
} else {
  $done({});
}