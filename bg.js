self.addEventListener('message', function(e) {
    self.postMessage(this.document.getElementById("nav-robux-amount"));
}, false)