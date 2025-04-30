chrome.storage.local.get(["cardColor"]).then(e=>{var t=document.createElement("style");t.textContent=`shreddit-post.bg-neutral-background {
        background-color: ${e.cardColor};
    }`,document.head.insertBefore(t,document.head.firstChild)});
