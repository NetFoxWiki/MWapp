const Clubcolor = [
    '#000000',
    '#9ede7c',
    '#f1ca17',
    '#75b7d8',
    '#b38ae7',
    '#d69b59',
    '#eec090',
    '#ec5952'
]
const Ships = [
    '无',
    '轻型巡航舰',
    '护卫舰',
    '驱逐舰',
    '巡洋舰',
    '战列舰',
    '航空母舰',
    '潜艇',
    '地效飞行器',
    '突击航空母舰',
    '空天航母'
]
const Title = [
    '<font color="#0f59a4">无</font>',
    '<font color="#ff9900">英雄</font>',
    '<font color="#931fff">传奇</font>',
    '<font color="#931fff">教官</font>',
    '<font color="#931fff">创作者</font>',
    '<font color="#931fff">管理员</font>',
    '<font color="#931fff">高级管理员</font>',
    '<font color="#931fff">Discord 管理员</font>'
]

function titlejs(value) {
    document.getElementById("show-title").innerHTML = Title[value]
}

function idHidjs(value) {
    var gameid = $("#gameid").val()
    if (value) {
        document.getElementById("show-gameid").innerText = gameid.substring(0, 7) + "****（隐私）"
    } else {
        document.getElementById("show-gameid").innerText = gameid
    }
}

function shipsjs(value) {
    document.getElementById("show-ships").innerHTML = Ships[value]
}

function leveljs(value) {
    if (value > 61) {
        valuelevel = 61
        document.getElementById("show-level").innerHTML = valuelevel
    } else if (value < 1) {
        valuelevel = 1
        document.getElementById("show-level").innerHTML = valuelevel
    } else {
        document.getElementById("show-level").innerHTML = value
    }
}

function clubcolorjs(value) {
    document.getElementById("show-clubcolor").color = Clubcolor[value]
}