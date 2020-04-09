

!function () {
  var o, s, chalakhIframe ;


  function createContainer() { //<div id="chalakhd-widget-container" style="position: absolute; z-index: 2147483647;"></div>
    var e = document.createElement("div");
    // e.setAttribute("style", "-webkit-overflow-scrolling: touch");
    e.id = "iframeAnchorID"; // used to be class - should be id
    e.style.position = "absolute"; // similar to drift
    e.style.overflow = 'auto';
    //  e.style['-webkit-overflow-scrolling'] = 'touch'; THIS DOES NOT WORK; i hides the iframe COMPLETELY
    return e;
  };

  function createFrame () {  //// s = <iframe id="chalakh-widget" src="" title="Drift Messenger" role="complementary" style="border: none; display: none;"></iframe>
    var e = document.createElement("iframe");
    e.id = "ChalakhIframe";
    e.src = "";        // all the default settings that do not change - when toggling from narrow to wide
    e.style.border = "none";
    e.style.display = "none";
    e.style.position ="fixed";
    e.style.zIndex= "1000";
    // e.style['-webkit-overflow-scrolling'] = 'touch'; This ALSO does not work.
    return e;
  };

  // make sure parents dom has been loaded before execution
  function createContainerAndiFrame() {

    function createiFrameSourceURL() {
      var rfrr = document.referrer,
        pttl = document.title,
        trid = getPageURLParams('trid');
      if (trid != undefined)
        src = "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/if-aws.html?rfrr=" + rfrr + "&pttl=" + pttl + "&trid=" + trid; // pass to the iframe parent parameters; AND tracking id if in url
      else
        src = "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/if-aws.html?rfrr=" + rfrr + "&pttl=" + pttl;
      return src;
    }
    // height of the bot is the Top+NavBar+Conversationstream; = 5% +10vh+ 85%; need to change navbar to percent? - since for position fixed, % is vh;
    o = createContainer();
    s = createFrame();
    o.appendChild(s);
    document.body.appendChild(o);
    var src = createiFrameSourceURL();
    s.src = src;

    chalakhIframe = document.getElementById('ChalakhIframe');
  };

  function getPageURLParams(paramName)  { // this is the iframes url to which init may have added "trid"

    var url = window.location.search.substring(1); //get rid of "?" in querystring
    var qArray = url.split('&'); //get key-value pairs
    for (var i = 0; i < qArray.length; i++)
    {
      var pArr = qArray[i].split('='); //split key and value
      if (pArr[0] == paramName)
        return pArr[1]; //return value
    }
  } // given a parameter in search string returns the value

  function getPageURL () {
    var purl = document.location.href; // "https://www.chalakh.ai/abc.html?csid=cs_23"; "https://go.pmmi.com/?utm_media=email&csid=cd_23; "https://www.chalakh.ai/?utm_media=email&csid=cd_23"
    purl = purl.split("?")[0]; // remove query string https://go.pmmi.com/; https://www.chalakh.ai/
    purl = purl.replace(/\/$/, ""); // remove trailing "/"; https://go.pmmi.com; https://www.chalakh.ai
    purl = purl.split("//")[1]; // remove leading "https://" - left with www.chalakh.ai/abc.html; go.pmmi.com; chalakh.ai;
    return purl;

  } // returns s3.us-east-2.amazonaws.com/chalakh-bot-js/ifaws1215.html; if href is https://s3.us-east-2.amazonaws.com/chalakh-bot-js/ifaws1215.html?rfrr=&pttl=Chalakh%20%E2%80%93%20An%20Intelligent%20Adaptive%20Website%20Assistant

  function hideIframe( ) {
    chalakhIframe.style.display = "none";
  }

  function makeIframeWide( deviceType) {

    if (deviceType == 'mobile') {
      chalakhIframe.width = "100%"; // important,
      chalakhIframe.style.left = "auto";
    } else if (deviceType == 'desktop') {
      chalakhIframe.width = "45%";  // this is save as 45vw - width of viewport)
      chalakhIframe.style.left = "55%"; // important - so 55 % of the parent is now visible

    } else { // it is a tablet
      chalakhIframe.width = "55%";  // allocate a slightly bigger frame than for desktop
      chalakhIframe.style.left = "45%";
    }
    chalakhIframe.height = "100%";
    chalakhIframe.style.top= 0; // cui__bot__container varies the gap by changing its top; so can occupy the full screen for cell; 08-12 - this use to be % change it to viewport height; this dictates how much from the top does the bot show; reduced it from 10% to 5%;
    chalakhIframe.style.bottom = "auto";
    chalakhIframe.style.right = "auto";
    chalakhIframe.style.display = "block";
    chalakhIframe.style.touchAction = "auto"; // copied from drift to see if it reduces the jerkiness
    document.body.style.margin = 0; // important - all browsers create a margin of 8 around the body; remove it
    // document.addEventListener('touchstart', {}); // to make bot more touch sensitive
  }

  function makeIframeNarrow(deviceType ) {

    console.log('device type is ' + deviceType);
    if (deviceType == 'mobile') {
      chalakhIframe.width = "70%"; // important! maybe need to be made wider to 80%,
      chalakhIframe.height = "30%";
      console.log('setting iframe width to ' + chalakhIframe.width);
    } else if (deviceType == 'desktop') {
      chalakhIframe.width = "30%"; // used to be 15, 15 - too small for tool tip; everything below is put in iframe ChalakhIframe__wide class
      chalakhIframe.height = "30%";

    } else { // it is a tablet
      chalakhIframe.width = "30%"; // used to be 15, 15 - too small for tool tip; everything below is put in iframe ChalakhIframe__wide class
      chalakhIframe.height = "30%";
    }

    chalakhIframe.style.display = "block";

    chalakhIframe.style.bottom = "0px";
    chalakhIframe.style.right = "0px";
    chalakhIframe.style.top = "auto";
    chalakhIframe.style.left = "auto";
    document.body.style.margin = 0;
    //  document.addEventListener('touchstart', {}); // to make bot more touch sensitive
    console.log('setting iframe width to ' + chalakhIframe.width);
  }

  function sendReferrer( ) {
    sendMessage(document.referrer);

  } // not required, since rfrr and pttl are sent as parameters in iframe url; so anlytics code can get those params

  function processMessage (event) {
    var requestType = event.data.requestType,
      requestParam = event.data.requestParam;

    console.log(requestType,requestParam);

    switch (requestType) {
      case "wideFrame":
        makeIframeWide(requestParam); // device type is param
        break;
      case "narrowFrame":
        makeIframeNarrow(requestParam); // device type is param
        break;
      case "hideFrame":
        hideIframe( );
        break;
      case "sendReferrer":
        sendReferrer( );
        break;
      default: console.log("unknown message type" + event.data);

    }
    event.stopPropagation();
    return false;

  }

  function sendMessage (msg) { // Send a message to the child iframe; Make sure you are sending a string, and to stringify JSON
    chalakhIframe.contentWindow.postMessage(msg, '*');
  };

  window.addEventListener("message", processMessage);

  if ((document.readyState === "complete") || (document.readyState === "interactive")) { // dom is ready
    createContainerAndiFrame();
    console.log('initaws: parent dom was ready');
  }
  else {
    var domReady = false; // this is to make sure that the iframe is not created twice; when ready state is fired once for complete and once for interactive;
    document.onreadystatechange = function () {
      if (((document.readyState === "complete") || (document.readyState === "interactive")) && !(domReady)) {
        createContainerAndiFrame();
        domReady = true;
        console.log('initaws: parent dom was NOT ready');
      }
    }
  }



}();