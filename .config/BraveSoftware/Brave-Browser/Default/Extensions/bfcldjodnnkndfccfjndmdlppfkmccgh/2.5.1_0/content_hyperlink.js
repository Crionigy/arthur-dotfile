chrome.storage.local.get(["hyperlinkColor"]).then(e=>{var t=document.createElement("style");t.textContent=`shreddit-post p a, shreddit-comment p a, .a.post-link, shreddit-profile-comment p a {
                                    color: ${e.hyperlinkColor} !important;
                                }`,document.head.insertBefore(t,document.head.firstChild)});
