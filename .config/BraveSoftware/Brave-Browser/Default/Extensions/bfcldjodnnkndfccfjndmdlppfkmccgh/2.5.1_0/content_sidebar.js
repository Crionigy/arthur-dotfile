document.getElementById("left-sidebar-container")&&setTimeout(function(){console.log("element found, running remove sidebar script");var t=document.createElement("style");t.textContent=`shreddit-app #left-sidebar-container {
                display: none !important;
            }
            pdp-back-button {
                position: static !important;
            }`,document.getElementById("subreddit-right-rail__partial")&&(t.textContent+=`shreddit-app .grid-container {
                grid-template-columns: 0 1fr !important;
            }`),document.head.insertBefore(t,document.head.firstChild)},1e3);
