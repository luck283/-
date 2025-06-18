let obj = JSON.parse($response.body || '{}');

obj.data = obj.data || {};

obj.data.vip_status = 1;
obj.data.is_vip = true;
obj.data.vip_expire_time = 4102415999;
obj.data.vip_level = 3;
obj.data.vip_type = "premium";
obj.data.rights = {
  read_without_ads: true,
  download_allowed: true,
  exclusive_content: true,
  watch_vip_video: true
};
obj.data.can_read = true;
obj.data.can_download = true;
obj.data.has_vip_privileges = true;

$done({body: JSON.stringify(obj)});