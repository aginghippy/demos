"use strict";

!function(g){function n(a){this.r=1;if(a&&a.length)for(var b=0;b<a.length;b++)this.push(a[b])}var e=function(){return{initCasQ:function(){e.checkForBot()||g.Chalakh.casq.r||(g.Chalakh.casq=new n(g.Chalakh.casq))},createHitString:function(a,b){a=e.objectToString(a);return window.Chalakh.runtime.casAppURL+"?"+a},transportHitString:function(a,b){e.checkForBot()||((new Image(1,1)).src=a)},send:function(a,b,c){"object"!=typeof b&&(b={});b.htyp=a;c=e.createHitString(b,c);console.log("hit type "+a+"  hitstring "+
    c);e.transportHitString(c)},recordPageView:function(){var a={};a.cuid=window.Chalakh.runtime._i;a.tid=d.tid;a.cbst=d.cbuster;a.purl=e.getPageURL();a.pttl=window.Chalakh.runtime.pttl;g.Chalakh.casq.push(["send","pview",a]);window.Chalakh.runtime.currentURL=a.purl},recordTrafficSource:function(){var a={},b=null,c=window.Chalakh.runtime.referrerURLString;a.cuid=window.Chalakh.runtime._i;a.tid=d.tid;a.cbst=d.cbuster;null!=c&&(b=e.checkIfFromSearchOrSocial(c));null==b&&(b=e.getUTMSource());null==b&&(b=
    c);if(null==b||""==b)b="direct";a.trsrc=b;window.Chalakh.runtime.trafficSource=b;g.Chalakh.casq.push(["send","tsrc",a])},recordUTMParamsInQueryString:function(){var a={};a.cuid=window.Chalakh.runtime._i;a.tid=d.tid;a.cbst=d.cbuster;a.utm_source=a.utm_medium=a.utm_campaign=a.utm_term=a.utm_content=null;a=e.getUTMParams(a);null!=a&&(a.utm_source=a.utm_source,a.utm_medium=a.utm_medium,a.utm_campaign=a.utm_campaign,a.utm_term=a.utm_term,a.utm_content=a.utm_content,g.Chalakh.casq.push(["send","uprm",a]),
    window.Chalakh.runtime.utm_source=a.utm_source,window.Chalakh.runtime.utm_medium=a.utm_medium,window.Chalakh.runtime.utm_campaign=a.utm_campaign,window.Chalakh.runtime.utm_term=a.utm_term,window.Chalakh.runtime.utm_content=a.utm_content)},recordVisitorTechProfile:function(){var a={};a.cuid=window.Chalakh.runtime._i;a.tid=d.tid;a.cbst=d.cbuster;a.ugnt=navigator.userAgent;a.avsn=navigator.appVersion;a.lang=navigator.language;a.cook=navigator.cookieEnabled;a.pltf=navigator.platform;a.vndr=navigator.vendor;
    a.scht=screen.height;a.scwd=screen.width;a.dtyp=function(){var a=!1;if(null!=navigator.userAgent.match(/iPad/i))return"ipad";if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,
      4)))a=!0;return a?"mobile":"desktop"}();a.brow=function(){var a=window.chrome,c=window.navigator,f=c.vendor,e="undefined"!==typeof window.opr,d=-1<c.userAgent.indexOf("Edge");return"Chrome"==(c.userAgent.match("CriOS")?"Chrome":null!==a&&"undefined"!==typeof a&&"Google Inc."===f&&!1===e&&!1===d?"Chrome":"notChrome")?"Chrome":-1!=(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR"))?"Opera":-1!=navigator.userAgent.indexOf("Edge")?"Edge":-1!=navigator.userAgent.indexOf("Firefox")?
      "Firefox":-1!=navigator.userAgent.indexOf("Safari")?"Safari":-1!=navigator.userAgent.indexOf("MSIE")||1==!!document.documentMode?"IE":"unknown"}();window.Chalakh.runtime.device=a.dtyp;window.Chalakh.runtime.browser=a.brow;window.Chalakh.runtime.language=a.lang;console.log("device is "+window.Chalakh.runtime.device);console.log("language is "+window.Chalakh.runtime.language);console.log("current node is "+window.Chalakh.runtime.currentNode);g.Chalakh.casq.push(["send","tview",a])},recordReferrer:function(a){var b=
    {};b.cuid=window.Chalakh.runtime._i;b.tid=d.tid;b.cbst=d.cbuster;b.rfrr=a;g.Chalakh.casq.push(["send","prfrr",b])},createURLParamObject:function(){var a=e.getPageURLString();window.Chalakh.runtime.urlParamObj={};if(a)var b=e.convertURLStringToObject(a);return b.params},startHeartBeatMonitor:function(){function a(){var a=new Date,f=Math.abs(a.getTime()),p=Math.abs(window.Chalakh.runtime.lastHeartBeatDate.getTime());f=(f-p)/1E3;f>d.heartBeatWindow?(e.recordHeartBeat(),window.Chalakh.runtime.lastHeartBeatDate=
    a):(void 0!=b&&null!=b&&clearTimeout(b),b=setTimeout(function(){e.recordHeartBeat();window.Chalakh.runtime.lastHeartBeatDate=a;b=null},1E3*(d.heartBeatWindow-f)))}var b;window.onmousemove=a;window.onmousedown=a;window.ontouchstart=a;window.onclick=a;window.onkeypress=a;window.addEventListener("scroll",a,!0)},recordHeartBeat:function(){var a={};a.cuid=window.Chalakh.runtime._i;a.tid=d.tid;a.cbst=d.cbuster;co.cookieVisitDuration(d.heartBeatWindow);g.Chalakh.casq.push(["send","hbeat",a]);window.Chalakh.runtime.lastHeartBeatDate=
    new Date},getUID:function(){window.Chalakh.runtime._i||(window.Chalakh.runtime._i=e.getItem(g.Chalakh["static"].uidKey))||(window.Chalakh.runtime._i=e.getNewUID(),e.setItem(g.Chalakh["static"].uidKey,window.Chalakh.runtime._i,g.Chalakh["static"].longExpirationPeriod,g.Chalakh["static"].cookiePath));return window.Chalakh.runtime._i},recordAndGetParentsReferral:function(){(function(){window.addEventListener("message",function(a){console.log("referrer is"+a.data);e.recordReferrer(a.data);window.Chalakh.runtime.referrerURLString=
    a.data;window.Chalakh.runtime.receivedReferral=!0},!1);window.parent.postMessage({requestType:"sendReferrer",requestParam:null},"*")})()},getPageURL:function(){var a=document.referrer;a=a.split("?")[0];a=a.replace(/\/$/,"");return a=a.split("//")[1]},checkIfFromSearchOrSocial:function(a){var b={Google:{d:/^((?!accounts).*)\.?google\.\S{2,3}(.\S{2,3})?$/,q:"q"},Yahoo:{d:/search\.yahoo\.\S{2,3}(.\S{2,3})?$/,q:"p"},MSN:{d:/search\.msn\.\S{2,3}(.\S{2,3})?$/,q:"q"},AOL:{d:/search\.aol\.\S{2,3}(.\S{2,3})?$/,
      q:"query"},Dogpile:{d:/dogpile\.\S{2,3}(.\S{2,3})?$/,q:"/dogpile/ws/results/Web/",t:"path"},A9:{d:/a9\.\S{2,3}(.\S{2,3})?$/,q:"/"},Bing:{d:/bing\.\S{2,3}(.\S{2,3})?$/,q:"q"},Yandex:{d:/yandex\.\S{2,3}(.\S{2,3})?$/,q:"text"},Facebook:{d:/facebook\.\S{2,3}(.\S{2,3})?$/,q:"text"},LinkedIn:{d:/linkedin\.\S{2,3}(.\S{2,3})?$/,q:"text"},Twitter:{d:/t\.\S{2,3}(.\S{2,3})?$/,q:"text"}},c=null,f;for(f in b){var d=b[f];if("object"==typeof d){var g=e.convertURLStringToObject(a,d.t&&"path"==d.t),m=g.params?g.params:
    [],h=d.d,k=g.host;k&&(k=k.toLowerCase().replace(/www\./gi,""));k&&null!==k.match(h)&&(h=null,"/"==d.q.substr(0,1)?g.path&&0===g.path.indexOf(d.q)&&(h=g.path.substr(d.q.length),d=h.indexOf("/"),-1!==d&&(h=h.substr(0,d)),h=e.ue(h)):h=m[d.q],null!==h&&(c={name:f,terms:h||"not provided"}))}}return c},getUTMSource:function(){return window.Chalakh.runtime.utm_source},getUTMParams:function(a){var b=e.getPageURLString();if(b&&(b=e.convertURLStringToObject(b),b.params))return b.params.utm_source&&(a.utm_source=
    b.params.utm_source),b.params.utm_medium&&(a.utm_medium=b.params.utm_medium),b.params.utm_campaign&&(a.utm_campaign=b.params.utm_campaign),b.params.utm_term&&(a.utm_term=b.params.utm_term),b.params.utm_content&&(a.utm_content=b.params.utm_content),b.params.gclid&&(b.params.utm_medium||(a.utm_medium="paid")),a},getBrowser:function(){var a=navigator.userAgent;return g.opera?"opera":/msie/i.test(a)?"ie":/AppleWebKit/.test(navigator.appVersion)?"safari":/mozilla/i.test(a)&&!/compatible|webkit/i.test(a)?
    "firefox":"unknown"},sendNodeImpression:function(a){var b={};b.cuid=window.Chalakh.runtime._i;b.tid=d.tid;b.cbst=d.cbuster;b.botID=a.botID;b.nodID=a.nodID;b.etyp=a.eventType;b.edsc1=a.nodcat;g.Chalakh.casq.push(["send","bevent",b])},sendErrorCode:function(a){var b={};b.cuid=window.Chalakh.runtime._i;b.tid=d.tid;b.cbst=d.cbuster;b.botID=a.botID;b.nodID=a.nodID;b.edsc1=a.errorCode;b.etyp=a.eventType;g.Chalakh.casq.push(["send","bevent",b])},sendConversationData:function(a){var b={};b.cuid=window.Chalakh.runtime._i;
    b.tid=d.tid;b.cbst=d.cbuster;b.botID=a.botID;b.nodID=a.nodID;b.etyp=a.eventType;b.edsc1=a.initiationMode;g.Chalakh.casq.push(["send","bevent",b])},sendExitData:function(a){var b={};b.cuid=window.Chalakh.runtime._i;b.tid=d.tid;b.cbst=d.cbuster;b.botID=a.botID;b.nodID=a.nodID;b.etyp=a.eventType;b.edsc1=a.exitType;g.Chalakh.casq.push(["send","bevent",b])},sendConversionData:function(a){var b={};b.cuid=window.Chalakh.runtime._i;b.tid=d.tid;b.cbst=d.cbuster;b.botID=a.botID;b.nodID=a.nodID;b.etyp=a.eventType;
    b.edsc1=a.cxEventState;b.edsc2=a.cxProbeSegment;g.Chalakh.casq.push(["send","bevent",b])},sendMediaUsageData:function(a){var b={};b.cuid=window.Chalakh.runtime._i;b.tid=d.tid;b.cbst=d.cbuster;b.botID=a.botID;b.nodID=a.nodID;b.etyp=a.eventType;b.edsc1=a.mediaType;b.edsc2=a.mediaFile;g.Chalakh.casq.push(["send","bevent",b])},sendUserSelectionData:function(a){var b={};b.cuid=window.Chalakh.runtime._i;b.tid=d.tid;b.cbst=d.cbuster;b.botID=a.botID;b.nodID=a.nodID;b.etyp=a.eventType;b.selquestion=a.selectionQuestion;
    a=a.selectionsObject;for(var c in a)b[c]=a[c];g.Chalakh.casq.push(["send","bevent",b])},sendUserDemographicData:function(a){var b={};b.cuid=window.Chalakh.runtime._i;b.tid=d.tid;b.cbst=d.cbuster;b.botID=a.botID;b.nodID=a.nodID;b.etyp=a.eventType;b.demoquestion=a.demoQuestion;a=a.demoValuesObject;for(var c in a)b[c]=a[c];g.Chalakh.casq.push(["send","bevent",b])},sendExitEvent:function(a){var b={};b.cuid=window.Chalakh.runtime._i;b.tid=d.tid;b.cbst=d.cbuster;b.botID=a.botID;b.nodID=a.nodID;b.etyp="botClosed";
    g.Chalakh.casq.push(["send","bevent",b])},convertHitStringToObject:function(a){a+="";var b,c={};c.src=a;var f=/^(.*?):\/\//;if(b=f.exec(a))c.scheme=c.protocol=b[1],a=a.replace(f,"");f=/(.*?)(\/|$)/;if(b=f.exec(a))b=b[1].split(":"),c.host=b[0],c.port=b[1],a=a.replace(f,"/");f=/(.*?)(\?|$|#)/;if(b=f.exec(a))c.path=b[1],a=a.replace(f,b[2]);f=/^\?(.*?)($|#)/;if(b=f.exec(a))c.query=b[1],a=a.replace(f,b[2]);f=/^#(.*)/;if(b=f.exec(a))c.anchor=b[1];return c},convertURLStringToObject:function(a,b){if(!a)return{};
    var c=e.convertHitStringToObject(a);if(!c)return[];var f={},d=!1,g=[];c.query&&g.push(c.query.split("&"));b&&c.path&&g.push(c.path.split("/"));for(var m=0;m<g.length;m++)for(var h=g[m],k=0;k<h.length;k++)if(-1!=h[k].indexOf("=")){var l=h[k].split("=");d=l[0];l=l[1];d=e.youE(d);l=e.youE(l);f[d]=l;d=!0}c.params=d?f:[];return c},getPageURLString:function(){return document.referrer},getNewUID:function(){var a=e.getRandomDigit(6);return d.chalakhUidValueString+"-"+a+"-"+ +new Date},objectToString:function(a){var b=
    [],c;for(c in a){var f=a[c];var d=!1;"function"!=typeof f&&(null===f?f="":"object"==typeof f&&("function"==typeof f.join?f=f.join(","):d=!0),d||b.push(encodeURIComponent(c)+"="+encodeURIComponent(f)))}return b.join("&")},getRandomDigit:function(a){var b=11;if(a>b)return e.getRandomDigit(b)+e.getRandomDigit(a-b);b=Math.pow(10,a+1);a=b/10;return(""+(Math.floor(Math.random()*(b-a+1))+a)).substring(1)},compareURL:function(a,b,c){b||(b=e.getPageURLString());c?0==a.indexOf("/")||0==b.indexOf("/")?(a=e.youShun(a.toLowerCase()),
    b=e.youShun(b.toLowerCase())):(c=/^https?:\/\//i,a.match(c)&&b.match(c)||(a=e.youSP(a.toLowerCase()),b=e.youSP(b.toLowerCase())),e.youShash(a).replace(/^www\./,""),e.youShash(b).replace(/^www\./,"")):(a=e.youShun(a.toLowerCase()),b=e.youShun(b.toLowerCase()));if(a==b)return!0;a=a.split("?");c=b.split("?");if(!e.smile(e.youSI(a[0]),e.youSI(c[0])))return!1;b=e.youQueP(a[1]);a=e.youQueP(c[1]);for(var f in b)if(c=b[f],"function"!=typeof c)if("*"==c){if(!a[f])return!1}else if(a[f]!=c)return!1;return!0},
  checkForBot:function(a){a||(a=navigator.userAgent);return a.match(/bot|spider|crawl|mediapartners|archive|slurp|agent|grab/i)?!0:!1},timeStamp:function(){return Math.round((new Date).getTime()/1E3)},trackFormOn:function(a,b,c,f){},trackSubmit:function(a,b,c){},trackForm:function(a,b,c){},trackClickOnOutboundLink:function(a,b,c){},trackClick:function(a,b,c){},trackVisualTrigger:function(a){},listenForTrigger:function(a,b){},_triggerOnThisPage:function(a){},addEventHandler:function(a,b,c,f){},_processEvent:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         b){},calculateProps:function(a){},_calculateProp:function(a){},_getDynamicPropInfo:function(a){},identify:function(a){},mergeIdentify:function(a){},alias:function(a,b){},_doIdentify:function(a,b){},clearIdentity:function(){},youE:function(a){if(a){for(var b in d.UES)"string"==typeof d.UES[b]&&(a=a.split(d.UES[b]).join(b));a=decodeURIComponent(a)}return a},beeD:function(a){a=a.toLowerCase().replace(/^www\./,"").split(".");for(var b=[],c=a.length-1;0<=c&&(b.push(a[c]),-1!=" ac ad ae aero af ag ai al am an ao aq ar arpa as asia at au aw ax az ba bb bd be bf bg bh bi biz bj bm bn bo br bs bt bv bw by bz ca cat cc cd cf cg ch ci ck cl cm cn co com coop cr cu cv cx cy cz de dj dk dm do dz ec edu ee eg er es et eu fi fj fk fm fo fr ga gb gd ge gf gg gh gi gl gm gn gov gp gq gr gs gt gu gw gy hk hm hn hr ht hu id ie il im in info int io iq ir is it je jm jo jobs jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md me mg mh mil mk ml mm mn mo mobi mp mq mr ms mt mu museum mv mw mx my mz na name nc ne net nf ng ni nl no np nr nu nz om org pa pe pf pg ph pk pl pm pn pr pro ps pt pw py qa re ro rs ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sv sy sz tc td tel tf tg th tj tk tl tm tn to tp tr travel tt tv tw tz ua ug uk us uy uz va vc ve vg vi vn vu wf ws xxx ye yt za zm zw ".indexOf(" "+
    a[c]+" "));c--);return b.reverse().join(".")},_selectorMatchesElement:function(a,b){var c;try{if(b)if(c=b.matches||b.matchesSelector||b.webkitMatchesSelector||b.mozMatchesSelector||b.msMatchesSelector||b.oMatchesSelector)for(;b;){if(c.call(b,a))return!0;b=b.parentNode}else{var f=(b.document||b.ownerDocument).querySelectorAll(a);for(f=Array.prototype.slice.call(f);b;){if(-1!==f.indexOf(b))return!0;b=b.parentNode}}}catch(p){}return!1},youQueP:function(a){if(!a)return{};a=a.split("&");for(var b=a.length,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 c={},f=0;f<b;f++){var d=a[f].split("=");c[e.youE(d[0])]=e.youE(d[1])}return c},youShash:function(a){return a.replace(/#.*/,"")},youShun:function(a){a=a.replace(/^https?/i,"");a=a.replace(/^:\/\//i,"");a=a.match(/\//)?a.replace(/^.*?\//,"/"):"";0!=a.indexOf("/")&&(a="/"+a);return e.youShash(a)},youSI:function(a){a=a.replace(/\/(index|home)(.html|$)/,"/");return"/"==a.charAt(a.length-1)||"*"==a.charAt(a.length-1)?a:a+"/"},youSP:function(a){a=a.replace(/^https?:\/\//i,"");return e.youShash(a)},smile:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                b){if(-1==a.indexOf("*"))return a==b;if(a==b)return!0;if(0==a.length)return!1;for(var c="*"==a.substr(0,1),f="*"==a.substr(a.length-1,1),d=a.split("*"),e=0;e<d.length;e++)if(d[e]){var g=c||0<e?b.lastIndexOf(d[e]):b.indexOf(d[e]);if(-1!=g){if(0==e&&!c&&0!=g)return!1;b=b.substring(g+d[e].length)}else return!1}return f?!0:b?!1:!0},getWindowOrID:function(a){return"object"==typeof a?a:document.getElementById(a.replace("#",""))},getItem:function(a){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+
    encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(a,b,c,d,e,g){if(!a||/^(?:expires|max\-age|path|domain|secure)$/i.test(a))return!1;var f="";if(c)switch(c.constructor){case Number:f=c===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+c;break;case String:f="; expires="+c;break;case Date:f="; expires="+c.toUTCString()}return document.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+f+(e?"; domain="+e:"")+(d?"; path="+d:
    "")+(g?"; secure":""),!0}}}();n.prototype.push=function(a){if(a)if("object"==typeof a&&a.length){var b=a.splice(0,1);e[b]&&e[b].apply(e,a)}else"function"==typeof a&&a()};"undefined"==typeof g.Chalakh.casq&&(g.Chalakh.casq=[]);(function(){g.Chalakh["static"]={KM_COOKIE_DOMAIN:"",cbuster:"ytoday",heartBeatWindow:3E4,UES:{"'":"%27","(":"%28",")":"%29","*":"%2A","~":"%7E","!":"%21","%20":"+"},casHTTP:"http://ana.chalakh.ai/api/analytics",casHTTPS:"https://ana.chalakh.ai/api/analytics",drdy:!1,dr:!1,rq:[],
  lc:{},triggerEventTypes:{ClickTrigger:"mousedown",SubmitTrigger:"submit"},_eventTriggers:{},chalakhUidValueString:"uid",uidKey:"_cuid",cookiePath:"/",longExpirationPeriod:63113904,chalakhAnalyticsKey:"_cass"};var a={casAppURL:0==e.getPageURLString().toLowerCase().indexOf("https")?g.Chalakh["static"].casHTTPS:g.Chalakh["static"].casHTTP,receivedReferral:!1};void 0!=window.Chalakh.runtime?(window.Chalakh.runtime=$.extend(window.Chalakh.runtime,a),console.log("analytics merging its runtime params with w.Chalakh.runtime, created by chat.js")):
  (window.Chalakh.runtime=a,console.log("analytics initializing w.Chalakh.runtime"))})();var d=g.Chalakh["static"];(function(){function a(a){for(var b=window.location.search.substring(1).split("&"),d=0;d<b.length;d++){var e=b[d].split("=");if(e[0]==a)return e[1]}}window.Chalakh.runtime.pttl=a("pttl");window.Chalakh.runtime.referrerURLString=a("rfrr");window.Chalakh.runtime._i=e.getUID();e.recordReferrer(window.Chalakh.runtime.referrerURLString);window.Chalakh.runtime.urlParamObj=e.createURLParamObject();
  (function(){var a=window.Chalakh.runtime.urlParamObj,c;for(c in a)switch(c){case "trid":g.Chalakh["static"].tid=a.trid;break;case "acmd":var d="preview";break;default:console.log("not a trackingid or activation mode")}"preview"==d?null==g.Chalakh["static"].tid&&(g.Chalakh["static"].tid=g.Chalakh.c_so.cso_tid,console.log("preview mode but no tracking id")):g.Chalakh["static"].tid=g.Chalakh.c_so.cso_tid})();e.recordPageView();e.recordUTMParamsInQueryString();e.recordVisitorTechProfile();window.Chalakh.runtime.lastHeartBeatDate=
    new Date;e.recordTrafficSource();sessionStorage.setItem(d.chalakhAnalyticsKey,1);window.Chalakh.runtime.casLaunched=!0})();(function(){function a(){d.drdy||(d.drdy=!0,setTimeout(function(){e.initCasQ()},1E3))}function b(){var b=document;return"complete"==b.readyState||b.addEventListener&&"loaded"==b.readyState?(a(),!0):!1}function c(){var c=document,d=window;c.addEventListener("DOMContentLoaded",a,!0);c.addEventListener("readystatechange",b,!0);d.addEventListener("load",a,!0)}0==b()?c():e.initCasQ()})();
  !0}(window);