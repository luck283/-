// TomatoVIP_659_notify.js
// 版本：v1.3 | 作者：luck283 & ChatGPT | 支持小火箭/Surge

try {
  let body = JSON.parse($response.body);
  const nickname = body?.data?.nickname || "用户";

  // 安全检查
  if (!body?.data || typeof body.data !== 'object') {
    console.log("❌ data 节点不存在或格式不对");
    $done({});
    return;
  }

  // 若已是 VIP，则提示无需重复设置
  if (body.data?.isVip === true) {
    console.log("✅ 已是 VIP 用户，无需重复设置");
    $notify("🍅 TomatoVIP", "", `${nickname} 已是 VIP 用户`);
    $done({ body: JSON.stringify(body) });
    return;
  }

  // 开始伪装 VIP
  body.data.isVip = true;
  body.data.vipLevel = 6;
  body.data.vipExpireTime = "2099-12-31 23:59:59";
  body.data.adFree = true;
  body.data.freeBookCount = 999;
  body.data.readCoupons = 9999;
  body.data.nickname = nickname + "💎VIP";

  console.log("🎉 TomatoVIP 伪装完成，VIP等级6，有效期2099-12-31");

  $notify("🎉 TomatoVIP 脚本执行成功", `${nickname} 已伪装为 VIP`, "等级6｜到期：2099-12-31");
  $done({ body: JSON.stringify(body) });
} catch (e) {
  console.log("❌ TomatoVIP 脚本运行出错：" + e);
  $done({});
}