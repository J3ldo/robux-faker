let totalstr = "";
let loaded = false;
let incoming = "";

chrome.storage.sync.get("fullrobux", function(items){
    let fullRobux = items["fullrobux"];
})


function OnBalanceExist(){
    if (document.getElementsByClassName("balance-label icon-robux-container")[0]
    && document.getElementsByClassName("balance-label icon-robux-container")[0].children[0].innerHTML != `<span class="shimmer-line"></span>`){
        document.getElementsByClassName("balance-label icon-robux-container")[0].children[0].innerHTML = `My Balance: <span class="icon-robux-16x16"></span>${fullRobux}`;

        chrome.storage.sync.get("incoming", function(items){
            total = 0;
            element = document.getElementsByClassName("amount icon-robux-container");
        
            incoming = items["incoming"];
            element[2].children[2].innerHTML = incoming;

            
            for (i=0; i<6; i++){
                total += parseInt(element[i].children[2].innerHTML.split('.').join("").split(",").join(""))
                if (i == 5)
                    continue;
            }
            totalstr = total.toLocaleString("US-en");
            loaded = true;

	    if (element.length == 9) element[6].children[2].innerHTML = totalstr;
            else element[7].children[2].innerHTML = totalstr;
        })
    }
    else {
        setTimeout(OnBalanceExist, 1);
    }
}

function OnBalanceChange(){
    if (loaded &&
    document.getElementsByClassName("amount icon-robux-container")[7].children[2].innerHTML != totalstr){
        total = 0;
        element = document.getElementsByClassName("amount icon-robux-container");
        
        element[2].innerHTML = `<span></span><span class="icon-robux-16x16"></span><span>${incoming}</span>`;
            
        for (i=0; i<6; i++){
            total += parseInt(element[i].children[2].innerHTML.split('.').join("").split(",").join(""))
            if (i == 5)
                continue;
        }
        totalstr = total.toLocaleString("US-en");
        loaded = true;
        
        if (element.length == 9) element[6].children[2].innerHTML = totalstr;
        else element[7].children[2].innerHTML = totalstr;
    }
    
    else {
        setTimeout(OnBalanceChange, 10);
    }
}

OnBalanceExist();
OnBalanceChange();