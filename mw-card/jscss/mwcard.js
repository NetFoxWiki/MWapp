/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑     屎山代码     永无BUG
 */

//控制弹窗

let visibleModal = null;
const isOpenClass = "modal-is-open";
const openingClass = "modal-is-opening";
const closingClass = "modal-is-closing";
const scrollbarWidthCssVar = "--pico-scrollbar-width";
const animationDuration = 400;

const toggleModal = (event) => {
    event.preventDefault();
    const modal = document.getElementById(event.currentTarget.dataset.target);
    if (!modal) return;
    modal && (isModalOpen(modal) ? closeModal(modal) : openModal(modal));
};
const isModalOpen = (modal) => modal.hasAttribute("open") && modal.getAttribute("open") !== "false";
const openModal = (modal) => {
    const { documentElement: html } = document;
    const scrollbarWidth = getScrollbarWidth();
    if (scrollbarWidth) {
        html.style.setProperty(scrollbarWidthCssVar, `${scrollbarWidth}px`);
    }
    html.classList.add(isOpenClass, openingClass);
    setTimeout(() => {
        visibleModal = modal;
        html.classList.remove(openingClass);
    }, animationDuration);
    modal.setAttribute("open", true);
};
const closeModal = (modal) => {
    visibleModal = null;
    const { documentElement: html } = document;
    html.classList.add(closingClass);
    setTimeout(() => {
        html.classList.remove(closingClass, isOpenClass);
        html.style.removeProperty(scrollbarWidthCssVar);
        modal.removeAttribute("open");
    }, animationDuration);
};
const getScrollbarWidth = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    return scrollbarWidth;
};
const isScrollbarVisible = () => {
    return document.body.scrollHeight > screen.height;
};

//网站运行

//素材
const Site = [
    '<br /><div class= "qr"><img width="110" height="100%" src="./img/qr.png"></div><hgroup><h3>现代战舰资料卡生成</h3><p><b>扫描二维码体验<br />https://mwapp.mwdocs.info/mw-card/</br></p></hgroup>',
    ''
]
const Clubcolor = [
    '#000000',
    '#9ede7c',
    '#c9c93b',
    '#75b7d8',
    '#b38ae7',
    '#d69b59',
    '#eec090',
    '#ec5952'
]
const About = [
    '<b>无</b>',
    '<b><font color="#0f59a4">轻型巡航舰</font></b>',
    '<b><font color="#0f59a4">护卫舰</font></b>',
    '<b><font color="#0f59a4">驱逐舰</font></b>',
    '<b><font color="#0f59a4">巡洋舰</font></b>',
    '<b><font color="#0f59a4">战列舰</font></b>',
    '<b><font color="#0f59a4">航空母舰</font></b>',
    '<b><font color="#0f59a4">潜艇</font></b>',
    '<b><font color="#0f59a4">地效飞行器</font></b>',
    '<b><font color="#0f59a4">突击航空母舰</font></b>',
    '<b><font color="#0f59a4">空天航母</font></b>'
]
const Avatar = [
    '<span></span>',
    '',
    '<img class="avatar" src="./Avatar/AvatarPortrait_AlfaTesters_Widget.png" />',
    '<img class="avatar" src="./Avatar/AvatarPortrait_CloseBetaTest_Widget.png" />',
    '<img class="avatar" src="./Avatar/AvatarPortrait_CommunityTournament_Winner_Widget.png" />',
    '<img class="avatar" src="./Avatar/AvatarPortrait_DrawingCompetitionWinner_Widget.png" />',
    '<img class="avatar" src="./Avatar/AvatarPortrait_GameModerators_Widget.png" />',
    '<img class="avatar" src="./Avatar/AvatarPortrait_GodofFortuneLNY24_Widget.png" />',
    '<img class="avatar" src="./Avatar/AvatarPortrait_GoldHunt_Common_Widget.png" />',
    '<img class="avatar" src="./Avatar/AvatarPortrait_Hacker_Widget.png" />',
    '<img class="avatar" src="./Avatar/AvatarPortrait_MWPress_Widget.png" />',
    '<img class="avatar" src="./Avatar/AvatarPortrait_MWGameDevelopersMale_Widget.png" />',
]
const Title = [
    '',
    '<b><font color="#0f59a4">舞蹈之心</font></b>',
    '<b><font color="#ff9900">英雄</font></b>',
    '<b><font color="#ff9900">禄星</font></b>',
    '<b><font color="#ff9900">食心人</font></b>',
    '<b><font color="#ff9900">糖果之王</font></b>',
    '<b><font color="#ff9900">派对大亨</font></b>',
    '<b><font color="#ff9900">冬季冠军</font></b>',
    '<b><font color="#ff9900">黄金大师</font></b>',
    '<b><font color="#ff9900">连队领航员</font></b>',
    '<b><font color="#931fff">传奇</font></b>',
    '<b><font color="#931fff">神枪手</font></b>',
    '<b><font color="#931fff">财神爷</font></b>',
    '<b><font color="#931fff">祖灵之者</font></b>',
    '<b><font color="#931fff">沙漠刺客</font></b>',
    '<b><font color="#931fff">财富猎人</font></b>',
    '<b><font color="#931fff">奖牌得主</font></b>',
    '<b><font color="#931fff">冰霜狂欢</font></b>',
    '<b><font color="#931fff">滑雪能手</font></b>',
    '<b><font color="#931fff">年兽防御者</font></b>',
    '<b><font color="#931fff">圣诞老人助手</font></b>',

]
const TitleWork = [
    '',
    '<b><font color="#686868">游戏职位：</font><font color="#931fff">教官</font></b>',
    '<b><font color="#686868">游戏职位：</font><font color="#931fff">创作者</font></b>',
    '<b><font color="#686868">游戏职位：</font><font color="#931fff">管理员</font></b>',
    '<b><font color="#686868">游戏职位：</font><font color="#931fff">高级管理员</font></b>',
    '<b><font color="#686868">游戏职位：</font><font color="#931fff">Discord 管理员</font></b>'
]
//分类
class Profile {
    constructor(avatar, freeavatar, freeavatarQQ, name, title, titlework, gameid, gameidon, about, level, club, clubcolor, site, bgcolor) {
        this.avatar = Avatar[avatar]
        this.title = title
        this.titleavatar = avatar
        this.freeavatar = freeavatar
        this.freeavatarQQ = freeavatarQQ
        this.name = name
        this.title = Title[title]
        this.titlework = TitleWork[titlework]
        //隐私判断
        if (gameid != "" && gameidon == "on") {
            this.gameid = gameid.substring(0, 7) + "****（隐私）"
        } else if (gameid != "") {
            this.gameid = gameid
        } else {
            this.gameid = ""
        }
        //this.gameid = gameid
        this.about = About[about]
        //等级大小判断
        if (level < 0) {
            this.level = 1
        } else if (level > 61) {
            this.level = 61
        } else {
            this.level = level
        }
        this.club = club
        //舰队颜色判断
        if (clubcolor == '') {
            this.clubcolor = 1
        } else {
            this.clubcolor = Clubcolor[clubcolor]
        }
        this.site = Site[site]
        this.bgcolor = bgcolor
    }
}
//输入
function showResult(profile) {
    console.log(profile)
    //头衔判断
    if (profile.avatar == '') {
        if (profile.freeavatar != '') {
            if (profile.title == '<b><font color="#ff9900">英雄</font></b>' && profile.titleavatar == 1) {
                document.querySelector("#avatar").innerHTML = '<img class="avatar" src="' + profile.freeavatar + '" />' + '<div class="avatar-right"><img src="./title/PlayerRarityHero.png" width="50" height="100%" /></div>'
            } else if (profile.title == '<b><font color="#931fff">传奇</font></b>' && profile.titleavatar == 1) {
                document.querySelector("#avatar").innerHTML = '<img class="avatar" src="' + profile.freeavatar + '" />' + '<div class="avatar-right"><img src="./title/PlayerRarityLegend.png" width="50" height="100%" /></div>'
            } else {
                document.querySelector("#avatar").innerHTML = '<img class="avatar" src="' + profile.freeavatar + '" />'
            }
        } else if (profile.freeavatarQQ != '') {
            if (profile.title == '<b><font color="#ff9900">英雄</font></b>' && profile.titleavatar == 1) {
                document.querySelector("#avatar").innerHTML = '<img class="avatar" src="https://q.qlogo.cn/headimg_dl?dst_uin=' + profile.freeavatarQQ + '&spec=640&img_type=jpg" />' + '<div class="avatar-right"><img src="./title/PlayerRarityHero.png" width="50" height="100%" /></div>'
            } else if (profile.title == '<b><font color="#931fff">传奇</font></b>' && profile.titleavatar == 1) {
                document.querySelector("#avatar").innerHTML = '<img class="avatar" src="https://q.qlogo.cn/headimg_dl?dst_uin=' + profile.freeavatarQQ + '&spec=640&img_type=jpg" />' + '<div class="avatar-right"><img src="./title/PlayerRarityLegend.png" width="50" height="100%" /></div>'
            } else {
                document.querySelector("#avatar").innerHTML = '<img class="avatar" src="https://q.qlogo.cn/headimg_dl?dst_uin=' + profile.freeavatarQQ + '&spec=640&img_type=jpg" />'
            }
        } else {
            if (profile.title == '<b><font color="#ff9900">英雄</font></b>' && profile.titleavatar == 1) {
                document.querySelector("#avatar").innerHTML = '<img class="avatar" src="./Avatar/info.png" />' + '<div class="avatar-right"><img src="./title/PlayerRarityHero.png" width="50" height="100%" /></div>'
            } else if (profile.title == '<b><font color="#931fff">传奇</font></b>' && profile.titleavatar == 1) {
                document.querySelector("#avatar").innerHTML = '<img class="avatar" src="./Avatar/info.png" />' + '<div class="avatar-right"><img src="./title/PlayerRarityLegend.png" width="50" height="100%" /></div>'
            } else {
                document.querySelector("#avatar").innerHTML = '<img class="avatar" src="./Avatar/info.png" />'
            }
        }
    } else {
        if (profile.title == '<b><font color="#ff9900">英雄</font></b>' && profile.titleavatar != 0) {
            document.querySelector("#avatar").innerHTML = profile.avatar + '<div class="avatar-right"><img src="./title/PlayerRarityHero.png" width="50" height="100%" /></div>'
        } else if (profile.title == '<b><font color="#931fff">传奇</font></b>' && profile.titleavatar != 0) {
            document.querySelector("#avatar").innerHTML = profile.avatar + '<div class="avatar-right"><img src="./title/PlayerRarityLegend.png" width="50" height="100%" /></div>'
        } else {
            document.querySelector("#avatar").innerHTML = profile.avatar
        }
    }
    document.querySelector("#name").innerHTML = '<font color="#686868">游戏昵称：</font>' + profile.name
    document.querySelector("#title").innerHTML = '<font color="#686868">[' + profile.title + ']</font>'
    document.querySelector("#titlework").innerHTML = profile.titlework
    document.querySelector("#gameid").innerText = profile.gameid
    document.querySelector("#about").innerHTML = '<font color="#686868">最擅长舰种：</font>' + profile.about
    //等级与舰队颜色判断
    if (profile.level <= 30) {
        document.querySelector("#level").innerHTML = '<font color="#686868">游戏等级：</font><font color="#63bbd0">' + profile.level + '</font>'
    } else {
        document.querySelector("#level").innerHTML = '<font color="#686868">游戏等级：</font><font color="#ff9900">' + profile.level + '</font>'
    }
    if (profile.club != '') {
        document.querySelector("#club").innerHTML = '<font color="#686868">所在舰队：</font><font color="' + profile.clubcolor + '">' + profile.club + '</font>'
    }
    document.querySelector("#site").innerHTML = profile.site
    document.getElementById("bgcolor").style.backgroundColor = profile.bgcolor
    document.querySelector("#link").innerHTML = '<input type="text" value="' + window.location.href + '" readonly />'
}
//链接
function tryGetParam(params, prop) {
    if (params.has(prop)) {
        return params.get(prop)
    }
    return ""
}
//图片生成
async function savePicture() {
    await html2canvas(document.querySelector("#main"), {
        windowHeight: 700,
        windowWidth: 452,
        scale: 2
    }).then(
        async function (canvas) {
            canvas = canvas.toDataURL("image/png", 1);
            document.getElementById("download").setAttribute("href", canvas);
            document.getElementById("download").click();
        }
    );
}
const urlParams = new URL(window.location.href).searchParams
let prof = new Profile(
    tryGetParam(urlParams, 'avatar'),
    tryGetParam(urlParams, 'freeavatar'),
    tryGetParam(urlParams, 'freeavatarQQ'),
    tryGetParam(urlParams, 'name'),
    tryGetParam(urlParams, 'title'),
    tryGetParam(urlParams, 'titlework'),
    tryGetParam(urlParams, 'gameid'),
    tryGetParam(urlParams, 'gameidon'),
    tryGetParam(urlParams, 'about'),
    tryGetParam(urlParams, 'level'),
    tryGetParam(urlParams, 'club'),
    tryGetParam(urlParams, 'clubcolor'),
    tryGetParam(urlParams, 'site'),
    tryGetParam(urlParams, 'bgcolor'),
)
showResult(prof)