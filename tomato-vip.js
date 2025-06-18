// tomato-vip.js
let body = $response.body;
let url = $request.url;

if (url.includes('/vip/user/info')) {
    let obj = JSON.parse(body);
    obj.data = {
        ...obj.data,
        is_vip: true,
        vip_expire_time: "2099-12-31 23:59:59",
        is_svip: true,
        svip_expire_time: "2099-12-31 23:59:59"
    };
    $done({
        body: JSON.stringify(obj)
    });
} else if (url.includes('/resource')) {
    // 屏蔽广告资源
    $done({
        body: JSON.stringify({
            code: 0,
            data: [],
            msg: "广告已清空"
        })
    });
} else {
    $done({});
}

// 弹窗提醒
$notify("番茄小说VIP模块已运行", "成功伪装VIP+去广告");
