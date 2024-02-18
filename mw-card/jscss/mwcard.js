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
    '<img class="avatar" src="./Avatar/AvatarPortrait_MWPress_Widget.png" />'
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
    '<b><font color="#931fff">传奇</font></b>',
    '<b><font color="#931fff">神枪手</font></b>',
    '<b><font color="#931fff">财神爷</font></b>',
    '<b><font color="#931fff">奖牌得主</font></b>',
    '<b><font color="#931fff">冰霜狂欢</font></b>',
    '<b><font color="#931fff">滑雪能手</font></b>',
    '<b><font color="#931fff">年兽防御者</font></b>',
    '<b><font color="#931fff">圣诞老人助手</font></b>'
]
class Profile {
    constructor(avatar, freeavatar, freeavatarQQ, name, title, gameid, gameidon, about, level, club, clubcolor, site) {
        this.avatar = Avatar[avatar]
        this.freeavatar = freeavatar
        this.freeavatarQQ = freeavatarQQ
        this.name = name
        this.title = Title[title]
        if (gameid != "" && gameidon == "on") {
            this.gameid = gameid.substring(0, 7) + "****（隐私）"
        } else if (gameid != "") {
            this.gameid = gameid
        } else {
            this.gameid = ""
        }
        //this.gameid = gameid
        this.about = About[about]
        this.level = level
        this.club = club
        if (clubcolor == '') {
            this.clubcolor = 1
        } else {
            this.clubcolor = Clubcolor[clubcolor]
        }
        this.site = Site[site]
    }
}
function showResult(profile) {
    console.log(profile)
    if (profile.avatar == '') {
        if (profile.freeavatar != '') {
            document.querySelector("#avatar").innerHTML = '<img class="avatar" src="' + profile.freeavatar + '" />'
        } else if (profile.freeavatarQQ != '') {
            document.querySelector("#avatar").innerHTML = '<img class="avatar" src="https://q.qlogo.cn/headimg_dl?dst_uin=' + profile.freeavatarQQ + '&spec=640&img_type=jpg" />'
        } else {
            document.querySelector("#avatar").innerHTML = '<img class="avatar" src="./Avatar/info.png" />'
        }
    } else {
        document.querySelector("#avatar").innerHTML = profile.avatar
    }
    document.querySelector("#name").innerText = profile.name
    document.querySelector("#title").innerHTML = profile.title
    document.querySelector("#gameid").innerText = profile.gameid
    document.querySelector("#about").innerHTML = '<font color="#686868">最擅长舰种：</font>' + profile.about
    if (profile.level <= 30) {
        document.querySelector("#level").innerHTML = '<font color="#686868">游戏等级：</font><font color="#63bbd0">' + profile.level + '</font>'
    } else {
        document.querySelector("#level").innerHTML = '<font color="#686868">游戏等级：</font><font color="#ff9900">' + profile.level + '</font>'
    }
    if (profile.club != '') {
        document.querySelector("#club").innerHTML = '<font color="#686868">所在舰队：</font><font color="' + profile.clubcolor + '">' + profile.club + '</font>'
    }
    document.querySelector("#site").innerHTML = profile.site
    document.querySelector("#link").innerHTML = '<input type="text" value="' + window.location.href + '" readonly />'
}
function tryGetParam(params, prop) {
    if (params.has(prop)) {
        return params.get(prop)
    }
    return ""
}
async function savePicture() {
    await html2canvas(document.querySelector("#main"), {
        windowHeight: 700,
        windowWidth: 452,
        scale: 2
    }).then(
        async function (canvas) {
            canvas = canvas.toDataURL("image/png", 1);
            console.log(canvas);
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
    tryGetParam(urlParams, 'gameid'),
    tryGetParam(urlParams, 'gameidon'),
    tryGetParam(urlParams, 'about'),
    tryGetParam(urlParams, 'level'),
    tryGetParam(urlParams, 'club'),
    tryGetParam(urlParams, 'clubcolor'),
    tryGetParam(urlParams, 'site')
)
showResult(prof)