/*Handle requests from background.html*/
function handleRequest(
  //The object data with the request params
  request,
  //These last two ones isn't important for this example, if you want know more about it visit: http://code.google.com/chrome/extensions/messaging.html
  sender,
  sendResponse
) {
  if (request.callFunction == "toggleSidebar") toggleSidebar();
}
chrome.extension.onRequest.addListener(handleRequest);

var sidebarOpen = false;
function toggleSidebar() {
  if (sidebarOpen) {
    var el = document.getElementById("mySidebar");
    el.parentNode.removeChild(el);
    sidebarOpen = false;
  } else {
    var element = document.getElementsByClassName("tEhMVd")[0]; //this is the whole calendar view element
    var sidebar = document.createElement("div");
    sidebar.id = "mySidebar";
    sidebar.innerHTML = `<iframe width="100%" height="100%" frameborder="0" id="twainFetcher"></iframe>`;
    sidebar.style.cssText =
      "\
	  display: flex;\
	  width:300px;\
	  background-color: #c4c4c4;\
	  ";
    element.appendChild(sidebar); //append a sidebar element to the calendar.
    const iframe = document.getElementById("twainFetcher");
    iframe.src = chrome.extension.getURL("index.html");
    sidebarOpen = true;
  }
}
