let robux = "";
let fullRobux = "";
chrome.storage.sync.get("fullrobux", function(items){
	fullRobux = items["fullrobux"];
})


function OnRobuxMade() {
  if (document.getElementById('nav-robux-amount')) {
   	chrome.storage.sync.get("robux", function(items){
    		if (items["robux"] == undefined) return;
		
		element = document.getElementById("nav-robux-amount")

		element.innerHTML = items["robux"];
		
		robux = items["robux"];
		OnRobuxChange();
	})
  } 
  else {
    	setTimeout(OnRobuxMade, 5);
  }
}

function OnRobuxChange() {
	if (document.getElementById('nav-robux-amount').innerHTML != robux){
		document.getElementById('nav-robux-amount').innerHTML = robux;
		OnRobuxChange();
	}
	else {
    		setTimeout(OnRobuxChange, 1);
	}

}
function OnFullShow() {
	if (document.getElementById('nav-robux-balance') != null && 
	document.getElementById('nav-robux-balance').innerHTML != `<span>${fullRobux} Robux</span>`){
		element = document.getElementById('nav-robux-balance');
		element.innerHTML = `<span>${fullRobux} Robux</span>`;
		element.title = fullRobux;
		element.count = fullRobux;

		OnFullShow();
	}
	else {
		setTimeout(OnFullShow, 1);
	}
}

OnRobuxMade();
OnFullShow();
