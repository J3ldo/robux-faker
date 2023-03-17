chrome.storage.sync.get("robux", function(items){
    if (items["robux"] == undefined) return;

    document.getElementById("robux").value = items["robux"];
});

document.getElementById("robux").addEventListener("input", function(evt){
    chrome.storage.sync.set({"robux": document.getElementById("robux").value});
})

chrome.storage.sync.get("fullrobux", function(items){
    if (items["fullrobux"] == undefined) return;

    document.getElementById("fullrobux").value = items["fullrobux"];
});

document.getElementById("fullrobux").addEventListener("input", function(evt){
    chrome.storage.sync.set({"fullrobux": document.getElementById("fullrobux").value});
})

chrome.storage.sync.get("incoming", function(items){
    if (items["incoming"] == undefined) return;

    document.getElementById("incoming").value = items["incoming"];
});

document.getElementById("incoming").addEventListener("input", function(evt){
    chrome.storage.sync.set({"incoming": document.getElementById("incoming").value});
})