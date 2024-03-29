let totalstr = "";
let loaded = false;
let incoming = "";

chrome.storage.sync.get("fullrobux", function(items){
    let fullRobux = items["fullrobux"];
})

function setTotal() {
    for (i=0; i<6; i++){
        total += parseInt(element[i].children[2].innerHTML.split('.').join("").split(",").join(""))
        if (i == 5)
            continue;
    }
    totalstr = total.toLocaleString("en-150");
    loaded = true;
    element[7].children[2].innerHTML = totalstr
}


function OnBalanceExist(){
    if (document.getElementsByClassName("balance-label icon-robux-container")[0]
    && document.getElementsByClassName("balance-label icon-robux-container")[0].children[0].innerHTML != `<span class="shimmer-line"></span>`){
        document.getElementsByClassName("balance-label icon-robux-container")[0].children[0].innerHTML = `My Balance: <span class="icon-robux-16x16"></span>${fullRobux}`;
        
        chrome.storage.sync.get("incoming", function(items){
            element = document.getElementsByClassName("amount icon-robux-container");
            total = 0;
        
            incoming = items["incoming"];
            element[2].innerHTML = `<span></span><span class="icon-robux-16x16"></span><span>${incoming}</span>`;
            
            setTotal();
        })

        chrome.storage.sync.get("pending", function(items){
            element = document.getElementsByClassName("amount icon-robux-container");
            total = 0;
        
            pending = items["pending"];
            element[5].innerHTML = `<span></span><span class="icon-robux-16x16"></span><span>${pending}</span>`;
            
            setTotal();
        })

        chrome.storage.sync.get("bought", function(items){
            element = document.getElementsByClassName("amount icon-robux-container");
            total = 0;
        
            bought = items["bought"];
            element[1].innerHTML = `<span></span><span class="icon-robux-16x16"></span><span>${bought}</span>`;
            
            setTotal();
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
            
        setTotal()
    }
    
    else {
        setTimeout(OnBalanceChange, 1);
    }
}

OnBalanceExist();
OnBalanceChange();
