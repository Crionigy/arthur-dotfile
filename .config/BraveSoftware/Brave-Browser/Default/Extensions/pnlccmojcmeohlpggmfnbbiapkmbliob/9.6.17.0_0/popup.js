// Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.
(self.rf_vlu7ce9uien=self.rf_vlu7ce9uien||[]).push([[887],{208:function(a,b,c){"use strict"
;var d=c(36758),e=c.n(d),f=c(40935),g=c.n(f),h=c(20062),i=c.n(h),j=new URL(c(99831),c.b),k=new URL(c(59212),c.b),l=new URL(c(81869),c.b),m=new URL(c(99110),c.b),n=new URL(c(26310),c.b),o=new URL(c(21727),c.b),p=new URL(c(18417),c.b),q=new URL(c(73688),c.b),r=new URL(c(31072),c.b),s=new URL(c(23261),c.b),t=new URL(c(91742),c.b),u=new URL(c(9255),c.b),v=new URL(c(48005),c.b),w=new URL(c(35214),c.b),x=new URL(c(19566),c.b),y=new URL(c(75223),c.b),z=new URL(c(16296),c.b),A=new URL(c(97410),c.b),B=new URL(c(10627),c.b),C=new URL(c(7963),c.b),D=new URL(c(24659),c.b),E=new URL(c(6456),c.b),F=new URL(c(18871),c.b),G=new URL(c(6343),c.b),H=new URL(c(57541),c.b),I=new URL(c(77537),c.b),J=new URL(c(80515),c.b),K=new URL(c(3083),c.b),L=new URL(c(91219),c.b),M=new URL(c(23643),c.b),N=new URL(c(43446),c.b),O=new URL(c(32983),c.b),P=new URL(c(70447),c.b),Q=new URL(c(30221),c.b),R=new URL(c(50535),c.b),S=new URL(c(31996),c.b),T=new URL(c(33437),c.b),U=new URL(c(40214),c.b),V=new URL(c(78244),c.b),W=new URL(c(84249),c.b),X=new URL(c(84817),c.b),Y=new URL(c(25224),c.b),Z=new URL(c(70162),c.b),aa=new URL(c(44112),c.b),ab=new URL(c(25116),c.b),ac=new URL(c(58863),c.b),ad=g()(e()),ae=i()(j),af=i()(k),ag=i()(l),ah=i()(m),ai=i()(n),aj=i()(o),ak=i()(p),al=i()(q),am=i()(r),an=i()(s),ao=i()(t),ap=i()(u),aq=i()(v),ar=i()(w),as=i()(x),at=i()(y),au=i()(z),av=i()(A),aw=i()(B),ax=i()(C),ay=i()(D),az=i()(E),aA=i()(F),aB=i()(G),aC=i()(H),aD=i()(I),aE=i()(J),aF=i()(K),aG=i()(L),aH=i()(M),aI=i()(N),aJ=i()(O),aK=i()(P),aL=i()(Q),aM=i()(R),aN=i()(S),aO=i()(T),aP=i()(U),aQ=i()(V),aR=i()(W),aS=i()(X),aT=i()(Y),aU=i()(Z),aV=i()(aa),aW=i()(ab),aX=i()(ac)
;ad.push([a.id,`/* Highlighting founded search parts */\n.found-text {\n    font-weight: bold;\n}\n/* The same width of the pages */\n.page-common-width {\n    width: 381px;    \n}\n\n/* Back button at the top of the page. Arrow icon */\n.back-button {\n    width: 36px;\n    height: 36px;\n }\n\n.back-button-icon {\n    background: url(${ae}) no-repeat center;\n}\n\n.back-button:hover {\n    background-color: #eeeeee;\n    background-color: var(--button-hover-color);\n}\n\n/* Show new progress svg on action after delay */\n.action-progress-overlay-circle {\n    display: flex;\n\n    /* show at the center of the parent */\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n\n    /* 48px by default*/\n    width: 100%;\n    height: 100%;\n    background: url(${af}) no-repeat center;\n}\n\n.progress-position-relative {\n    position: relative;\n    top: auto;\n    left: auto;\n    transform: none; \n}\n\ninput[type="button"].blue {\n    min-width: 85px;\n    min-height: 20px;\n    cursor: pointer;\n    border: 1px solid #2962ff;\n    background: #2979ff;\n}\n\ninput[type="button"].blue:focus {\n    outline: none;\n}\n\ninput[type="button"].blue::-moz-focus-inner {\n    border: 0;\n}\n\ninput[type="button"].white {\n    min-width: 85px;\n    min-height: 20px;\n\n    cursor: pointer;\n\n    color: #000000;\n    color: var(--white-button-text-color);\n\n    border: 1px solid #d8dce0;\n    border: 1px solid var(--white-button-border-color);\n\n    background: #ffffff;\n    background: var(--white-button-background-color);\n}\n\ninput[type="button"].white:focus {\n    outline: none;\n    border: 1px solid;\n    border-color: #82b1ff;\n    border-color: var(--white-button-focus-border-color);\n}\n\n\ninput[type="button"].white::-moz-focus-inner {\n    border: 0;\n}\n\ninput[type="button"].white:hover {\n    background-color: #e5f1fb;\n    background-color: var(--white-button-hover-background-color);\n}\n\ninput[type="button"].white:active {\n    border: 1px solid #d8dce0;\n    border: 1px solid var(--white-button-active-border-color);\n\n    background: #d8dce0;\n    background: var(--white-button-active-background-color);\n}\n\ninput[type="button"].white:disabled {\n    color: #838383;\n    color: var(--white-button-disabled-text-color);\n\n    border: 1px solid #cccccc;\n    border: 1px solid var(--white-button-disabled-border-color);\n}\n\n/* Horizontal progress bar */\n.progress {\n    height: 32px;\n\n    position: relative;\n    overflow: hidden;\n\n    border: 1px solid #bcbcbc;\n    border: 1px solid var(--progress-border-color);\n\n    background: #e1e1e1;\n    background: var(--progress-background-color);\n}\n\n.progress div {\n    height: 100%;\n\n    background: #06b025;\n    background: var(--progress-indicator-color);\n}\n\n@keyframes progress-indicator-marquee-animation {\n    from {\n        left: -125px;\n    }\n    to {\n        left: 100%;\n    }\n}\n\n.progress.marquee div {\n    margin: 1px;\n    height: calc(100% - 2px);\n\n    position: absolute;\n\n    width: 125px;\n\n    background: #06b025;\n    background: var(--progress-indicator-color);\n\n    animation: progress-indicator-marquee-animation 3s linear infinite;\n}\n\n/* data item types icons */\n.login-icon {\n    background-image: url(${ag});\n}\n\n.dark-theme .login-icon {\n    background-image: url(${ah});\n}\n\n.bookmark-icon {\n    background-image: url(${ai});\n}\n\n.dark-theme .bookmark-icon {\n    background-image: url(${aj});\n}\n\n.searchcard-icon {\n    background-image: url(${ak});\n}\n\n.blocking-passcard-icon {\n    background-image: url(${al});\n}\n\n.identity-icon {\n    background-image: url(${am});\n}\n\n.dark-theme .identity-icon {\n    background-image: url(${an});\n}\n\n.contact-icon {\n    background-image: url(${ao});\n}\n\n.dark-theme .contact-icon {\n    background-image: url(${ap});\n}\n\n.safenote-icon {\n    background-image: url(${aq});\n}\n\n.dark-theme .safenote-icon {\n    background-image: url(${ar});\n}\n\n.folder-icon {\n    background-image: url(${as});\n}\n\n.dark-theme .folder-icon {\n    background-image: url(${at});\n}\n\n\n.icon-overlay-limited {\n    background-image: url(${au});\n}\n\n.icon-overlay-regular {\n    background-image: url(${av});\n}\n\n.icon-overlay-manager {\n    background-image: url(${aw});\n}\n\n.icon-overlay-granted {\n    background-image: url(${ax});\n}\n\n.icon-overlay-received {\n    background-image: url(${ay});\n}\n\n.icon-overlay-login-only {\n    background-image: url(${az});\n}\n\n/* YES/NO toggle button for Consent Firefox page */\n.switcher {\n    display: flex;\n    flex-direction: row;\n    border: 1px solid var(--toggle-on-button-background-color);\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.switcher .left-button,\n.switcher .right-button {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    padding: 10px;\n    background-color: #e1e1e1;\n    background-color: var(--toggle-off-button-background-color);\n    color: var(--toggle-off-button-text-color);\n    border-radius: 8px;\n    border-width: 1px;\n    min-width: 40px;\n}\n\n.switcher .left-button {\n    border-right-style: solid;\n    border-color: #2979ff;\n    border-color: var(--toggle-on-button-background-color);\n}\n\n.switcher .right-button {\n    margin-left: -30px;\n    border-left-style: solid;\n    border-color:#adadad;\n    border-color: var(--toggle-off-button-border-color);\n}\n\n.switcher .left-button.highlighted,\n.switcher .right-button.highlighted {\n    background-color: #2979ff;\n    background-color: var(--toggle-on-button-background-color);\n    color: #ffffff;\n    color: var(--toggle-on-button-text-color);\n}\n\n.switcher.left-button-selected .right-button,\n.switcher.right-button-selected .left-button\n{\n    visibility: hidden;\n}\n\n.switcher-disabled {\n    border: 1px solid var(--toggle-disabled-border-color);\n    background-color: var(--toggle-disabled-background-color);\n}\n\n.switcher-disabled.highlighted {\n    border-color: var(--toggle-disabled-border-color);\n}\n\n.switcher-disabled .left-button,\n.switcher-disabled .left-button.highlighted,\n.switcher-disabled .right-button.highlighted,\n.switcher-disabled .right-button {\n    background-color: var(--toggle-on-button-disabled-background-color ,rgba(214, 214, 214, 1));\n    color: var(--toggle-on-button-disabled-text-color, rgba(159, 159, 159, 1));\n    border-color: var(--toggle-disabled-border-color);\n}\n\n.switcher-disabled .right-button {\n    border-color: var(--toggle-off-button-disabled-border-color);\n}\n\n\n/** Common styles for items lists:\n * - Recent/Popular/Pinned Logins\n * - Fill section (matches, identities)\n * - Search results\n * - Show all Matches(Identities)\n */\n.list {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.list-padding {\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\n.list .list-item {\n    display: flex;\n    flex-direction: row;\n    flex-shrink: 0;\n    cursor: default;\n}\n\n.list .list-item > *:hover {\n    background-color: var(--list-item-hover-background-color);\n}\n\n.list .list-item.selected .icon-text,\n.list .list-item.highlighted .icon-text {\n    background-color: var(--list-item-accented-background-color);\n}\n\n.list .list-item.selected .icon-text .text,\n.list .list-item.highlighted .icon-text .text {\n    color: var(--list-item-accented-text-color);\n}\n\n.list .list-item.selected .icon-text .text b,\n.list .list-item.highlighted .icon-text .text b {\n    color: var(--list-item-accented-bold-text-color);\n}\n\n.list .list-item.selected  .text .folder-text,\n.list .list-item.highlighted  .text .folder-text {\n    color: var(--list-item-accented-folder-text-color);\n}\n\n.list .list-item.selected  .text .folder-text .found-text,\n.list .list-item.highlighted  .text .folder-text .found-text,\n.list .list-item.selected  .text .name-text .found-text,\n.list .list-item.highlighted  .text .name-text .found-text {\n    color: var(--list-item-accented-bold-text-color);\n}\n\n.list .list-item.selected  .text .name-text,\n.list .list-item.highlighted  .text .name-text {\n    color: var(--list-item-accented-text-color);\n}\n\n.list .list-item.selected  .text .name-text b,\n.list .list-item.highlighted  .text .name-text b {\n    color: var(--list-item-accented-bold-text-color);\n}\n\n.list .list-item .icon-text {\n    padding-left: 14px;\n    width: 100%;\n    min-height: 34px;\n    box-sizing: border-box;\n    cursor: default;\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    border-top-right-radius: 15px;\n    border-bottom-right-radius: 15px;\n}\n\n.list .list-item .icon-text .icon-section {\n    width: 26px;\n    height: 26px;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid transparent;\n    border-radius: 6px;\n    box-sizing: border-box;\n}\n\n.list .list-item .icon-text .with-border {\n    border: 1px solid var(--list-item-round-border-color);\n}\n\n.list .list-item .icon-text .icon {\n    width: 24px;\n    height: 24px;\n    background-size: 24px 24px;\n    align-items: center;\n    justify-content: center;\n    border-radius: 3px;\n}\n\n/* Enterprise/Consumer sharing overlay icon */\n.list .list-item .icon .icon-overlay,\n.list .icon-section .icon-overlay {\n    margin-top: -9px;\n    margin-left: 18px;\n    width: 12px;\n    height: 12px;\n    background-size: 12px 12px;\n}\n\n.list .list-item .icon-text .text {\n    /* font-weight: 500; */\n    flex: 1;\n    padding: 1px 0px 3px 14px;\n    color: var(--list-item-text-color);\n\n    /* display: -webkit-box;\n    -webkit-box-orient: vertical; */\n    overflow: hidden;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-word;\n}\n\n/* for long item name-path, show max 2 lines*/\n.list .list-item .icon-text .short-path {\n    -webkit-line-clamp: 2;\n}\n\n/* for search we can show max 4 lines*/\n.list .list-item .icon-text .long-path {\n    -webkit-line-clamp: 4;\n}\n\n/* Login action (>) icon */\n\n.list .list-item .action-icon {\n    visibility: hidden;\n    padding-right: 0.7em;\n    background-size: 20px;\n    width: 24px;\n    height: 24px;\n    opacity: 0.5;\n}\n\n.list .list-item .icon-text:hover .action-icon {\n    visibility: visible;\n    display: block;\n}\n\n.list .list-item .login-action-icon {\n    background-image: url(${aA});\n}\n.platform-mac:not(.dark-theme) .list .list-item:hover .login-action-icon {\n    background-image: url(${aB});\n}\n/* .dark-theme .list .list-item .login-action-icon {\n    background-image: url("../res/menu-login-dark.svg");\n} */\n\n.list .list-item .goto-action-icon {\n    background-image: url(${aC});\n}\n.platform-mac:not(.dark-theme) .list .list-item:hover .goto-action-icon {\n    background-image: url(${aD});\n}\n/* .dark-theme .list .list-item .goto-action-icon {\n    background-image: url("../res/menu-goto-dark.svg");\n} */\n\n.list .list-item .view-action-icon {\n    background-image: url(${aE});\n}\n.platform-mac:not(.dark-theme) .list .list-item:hover .view-action-icon {\n    background-image: url(${aF});\n}\n/* .dark-theme .list .list-item .view-action-icon {\n    background-image: url("../res/menu-view-dark.svg");\n} */\n\n.list .list-item .fill-action-icon {\n    background-image: url(${aG});\n}\n.platform-mac:not(.dark-theme) .list .list-item:hover .fill-action-icon {\n    background-image: url(${aH});\n}\n/* .dark-theme .list .list-item .fill-action-icon {\n    background-image: url("../res/menu-fill-dark.svg");\n} */\n\n\n/* More actions(3dots) button for list item */\n\n.list .list-item .more-actions-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 30px;\n    min-height: 30px;\n}\n\n.list .list-item .more-actions-button:hover > *:first-child {\n    border-radius: 50%;\n    background-color: var(--list-item-hover-background-color);\n}\n\n.list .list-item .more-actions-button .icon {\n    display: flex;\n    min-height: 28px;\n    min-width: 28px;\n    align-items: center;\n    justify-content: center;\n}\n\n.list .list-item:hover .more-actions-button .more-actions-icon,\n.list .list-item .more-actions-button.highlighted .more-actions-icon {\n    background-image: url(${aI});\n}\n\n.list .list-item .more-actions-button:hover .more-actions-icon {\n    background-image: url(${aJ});\n}\n\n.dark-theme .list .list-item:hover .more-actions-button .more-actions-icon,\n.dark-theme .list .list-item .more-actions-button.highlighted .more-actions-icon {\n    background-image: url(${aK});\n}\n\n.list .list-item .compromised-mark-icon {\n    background-image: url(${aL});\n}\n\n\n/* show All identities */\n.list-item .show-all {\n    display: flex;\n    width: 100%;\n    text-indent: 14px;\n    align-items: center;\n    color: var(--list-item-show-all-text-color);\n}\n\n/* counter of items */\n.list .list-item .counter-section {\n    display: flex;\n    width: 26px;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n}\n\n.list .list-item .counter-section .counter {\n    display: flex;\n    min-height: 24px;\n    min-width: 24px;\n    border-radius: 24px;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.9em;\n    opacity: 0.9;\n    box-sizing: border-box;\n\n    color: var(--items-counter-text-color);\n    background: var(--items-counter-background-color);\n    border: 1px solid var(--items-counter-border-color);\n}\n\n/* 'Add New..' list item: PLUS sign with text  */\n.list .list-item .add-circle {\n    border-radius: 50%;\n    width: 24px;\n    height: 24px;\n    background-color: var(--list-item-addnew-circle-background-color);\n    border: 1px solid var(--list-item-addnew-circle-border-color);\n}\n\n.list .list-item .add-circle::before {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    height: 24px;\n    width: 24px;\n    font-size: 2em;\n    /* font-weight: bold; */\n    font-family: courier;\n    content: "+";\n    color: var(--list-item-addnew-circle-plus-color);\n}\n\n.list .list-item .icon-text .add-text {\n    padding-left: 10px;\n}\n\n.list .list-item .text .folder-text {\n    color: var(--list-item-folder-text-color);\n}\n\n.list .list-item .text .folder-text .found-text,\n.list .list-item .text .name-text .found-text {\n    color: var(--list-item-bold-text-color);\n}\n\n.list .list-item .text .name-text {\n    padding-left: 0.3em\n}\n\n.list .list-item .text .name-text b {\n    color: var(--list-item-bold-text-color);\n}\n\n\n/*\n *  Back button at the top of the pages with Arrow icon:\n *  - Setup pages \n *  - Show all matches, identities\n *  - Password Generator\n * Add padding left for back icon or text: some dialogs \n * does not have back icon\n */\n\n.header-section {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    box-sizing: border-box;\n    width: 100%;\n    border-bottom: 1px solid var(--back-section-border-bottom-color);\n    background-color: var(--back-section-background-color);\n    min-height: 40px;\n    padding: 0 5px;\n}\n\n.header-text-section {\n    display: flex;\n    flex-direction: row;\n}\n\n.header-back-button {\n    min-width: 36px;\n    min-height: 36px;\n    position: absolute;\n}\n\n.back-icon {\n    background: url(${aM}) no-repeat center;\n}\n\n.dark-theme .back-icon {\n    background: url(${aN}) no-repeat center;\n}\n\n.header-back-button:hover {\n    border-radius: 20px;\n    cursor: pointer;\n    background-color: var(--back-button-hover-color);\n}\n\n/** \n    Main text with average weight, size....\n*/\n.normal-text {\n    display: flex;\n    text-align: justify;\n    font-weight: normal;\n    font-size: 1.1em;\n    color: var(--main-text-color);\n}\n\n/** \n    Hint text, with smaller font than \n    normal or title text. Also not so\n    bright in color.\n*/\n.hint-text {\n    display: flex;\n    flex-direction: row;\n    text-align: center;\n    justify-content: center;\n    font-size: 0.9em;\n    color: var(--hint-text-color);\n}\n\n/** \n    Error text\n*/\n.error-text {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 95%;\n    font-size: 1em;\n    letter-spacing: 0.01em;\n    padding: 2px 0;\n    min-height: 25px;\n    color: var(--error-text-color);\n    overflow-y: auto;\n}\n\n/** \n  Big bold text style for titles\n*/\n.title-text {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    font-size: 1.6em;\n    /* font-weight: 600; */\n    /* letter-spacing: 0.15px; */\n    color: var(--main-text-color);\n}\n\n/** \n    Copyright text at the bottom of the most setup pages.\n    Should be combined with hint-text in styles\n*/\n.copyright-text {\n    flex-basis: 30px;\n    width: 100%;\n}\n\n.text-ellipsis {\n    display: block;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.text-break-word {\n    /* -webkit-line-clamp: 4;\n    -webkit-box-orient: vertical;\n    display: -webkit-box; */\n    overflow: hidden;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n}\n\n/** \n  wide input for editing\n*/\n.extension-normal-input {\n    min-height: 52px;\n    min-width: 315px;\n    border-radius: 3px;\n    text-indent: 10px;\n    box-sizing: content-box;\n\n    outline: none;\n    -webkit-appearance: none;\n\n    background-color: var(--edit-background-color);\n    border: 1px solid var(--edit-border-color);\n    color: var(--edit-text-color);    \n    caret-color: var(--edit-caret-color);\n}\n\n.input-with-hint {\n    min-height: 40px;\n    padding-top: 12px;\n}\n\n.extension-normal-input:hover:not(:focus):not(:disabled) {\n    border: 1px solid var(--edit-hover-border-color);\n}\n\n.extension-normal-input:focus {\n    border: 1px solid var(--edit-focused-border-color);\n}\n\n.extension-normal-input:disabled {\n    border: 1px solid var(--edit-disabled-border-color);\n    background-color: var(--edit-disabled-background-color);\n    color: var(--edit-disabled-text-color);    \n}\n\n.extension-normal-input:disabled::placeholder {\n    color: var(--edit-disabled-placeholder-color);\n}\n\n.extension-normal-input[type="password"]::-ms-reveal {\n    display: none;\n}\n\n.extension-normal-input::placeholder {\n    font-size: 15px;\n    /* letter-spacing: 0.15px; */\n    color: var(--edit-placeholder-color);\n    /* font-weight: 500; */\n}\n\n.input-hint {\n    position: relative;\n    opacity: 0.8;\n    text-indent: 14px;\n    /* letter-spacing: 0.07em; */\n    /* font-weight: 450; */\n    justify-content: left;\n    top: 12px;\n    line-height: 0px;\n}\n\n.select-hint {\n    position: relative;\n    opacity: 0.8;\n    text-indent: 14px;\n    /* letter-spacing: 0.07em; */\n    /* font-weight: 450; */\n    justify-content: left;\n    top: 14px;\n    line-height: 0px;\n}\n\n\n/** \n    Input with placeholder which will move up\n    and became less in height on input focus\n*/\n\n.input-with-placeholder {\n    display: flex;\n    flex-flow: column;\n    min-height: 58px;\n    padding-bottom: 20px;\n    position: relative;\n}\n\n.input-with-placeholder .input-placeholder {\n    position: absolute;\n    text-indent: 14px;\n    /* font-weight: 450; */\n    justify-content: left;\n    top: 28px;\n    line-height: 0px;\n    font-size: 1.2em;\n    order: -1;\n    pointer-events: none;\n    transition: all 0.3s ease-in;\n    opacity: 1;\n}\n\n.input-with-placeholder input:disabled:not([value=""]),\n.input-with-placeholder input:valid,\n.input-with-placeholder input:focus {\n    min-height: 40px;\n    line-height: 40px;\n    padding-top: 13px;\n}\n\n.input-with-placeholder input:disabled:not([value=""]) + .input-placeholder,\n.input-with-placeholder input:valid + .input-placeholder,\n.input-with-placeholder input:focus + .input-placeholder {\n    top: 12px;\n    font-size: 0.9em;\n    opacity: 0.9;\n}\n\n/** \n  Buttons styles concerning width size, for now: \n  - normal (min-width:90px)\t (for Password Generator Page, min-wdith:110px)\n  - wide   (min-width:272px)\t\t\n*/\n.normal-button {\n    min-width: 90px;\n    min-height: 36px;\n    border-radius: 3px;\n\n    padding-left: 4px;\n    padding-right: 4px;\n\n    font-size: 1.1em;  \n    font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;\n    /* letter-spacing: 0.5px; */\n}\n\n.wide-button {\n    min-width: 272px;\n    min-height: 50px;\n    border-radius: 8px;\n\n    padding-left: 8px;\n    padding-right: 8px;\n\n    font-size: 1.3em; \n    font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;\n    /* letter-spacing: 0.4px;  */\n}\n\n/** \n  Buttons styles concerning color, for now:\n  - Important button(blue background)\n  - Regular   button\n  - Low emphasis button\n    white background for light-theme\n    balck background for dark-theme\n*/\n\n/** Regular button */\n.regular-button {\n    justify-content: center;\n    font-style: normal;\n    font-weight: 600;\n    cursor: pointer;\n\n    color: var(--regular-button-text-color);\n    background: var(--regular-button-background-color);\n    border: 1px solid var(--regular-button-border-color);\n}\n\n.regular-button:hover {\n    background: var(--regular-button-hover-color);\n    border: 1px solid var(--regular-button-hover-border-color);\n}\n\n.regular-button:active {\n    background: var(--regular-button-active-color);\n    border: 1px solid var(--regular-button-active-border-color);\n}\n\n.regular-button:disabled {\n    background: var(--regular-button-disabled-color);\n    border: 1px solid var(--regular-button-disabled-border-color);\n    color: var(--regular-button-disabled-text-color);\n    cursor: default;\n}\n\n.regular-button:focus {\n    outline: none;\n    background: var(--regular-button-active-color);\n}\n\n.regular-button::-moz-focus-inner {\n    border: 0;\n}\n\n/** Important button, for now with blue background */\n.important-button {\n    justify-content: center;\n    font-style: normal;\n    font-weight: 600;\n    cursor: pointer;\n\n    color: var(--important-button-text-color);\n    background: var(--important-button-background-color);\n    border: 1px solid var(--important-button-border-color);\n}\n\n.important-button:hover {\n    background: var(--important-button-hover-color);\n    border-color: var(--important-button-hover-color);\n}\n\n.important-button:active {\n    background: var(--important-button-active-color);\n    border-color: var(--important-button-active-color);\n}\n\n.important-button:disabled {\n    border: 1px solid var(--important-button-disabled-border-color);\n    background: var(--important-button-disabled-color);\n    color: var(--important-button-disabled-text-color);\n    cursor: default;\n}\n\n.important-button:focus {\n    outline: none;\n    background: var(--important-button-active-color);\n    border-color: var(--important-button-active-color);\n}\n\n.important-button::-moz-focus-inner {\n    border: 0;\n}\n\n/** Low emphasis button */\n.low-emphasis-button {\n    justify-content: center;\n    font-style: normal;\n    font-weight: 600;\n    cursor: pointer;\n\n    color: var(--low-emphasis-button-text-color);\n    background-color: transparent;\n    border: 0;\n}\n\n.low-emphasis-button:hover {\n    background: var(--low-emphasis-button-hover-color);\n}\n\n.low-emphasis-button:active {\n    background: var(--low-emphasis-button-active-color);\n}\n\n.low-emphasis-button:disabled {\n    color: var(--low-emphasis-button-disabled-text-color);\n    cursor: default;\n}\n\n.low-emphasis-button:focus {\n    outline: none;\n    background: var(--low-emphasis-button-focused-color);\n}\n\n.low-emphasis-button::-moz-focus-inner {\n    border: 0;\n}\n\n\n/** \n  A(anchor) element action as a button\n*/\n.flat-link {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-decoration: none;\n    min-height: 25px;\n\n    /*font-weight: 600;\n    font-size: 1.3em;*/\n\n    /* font-weight: 400; */\n    font-size: 1.2em;\n\n    color: var(--flat-link-text-color);\n}\n\n.flat-link:hover {\n    color: var(--flat-link-hover-text-color);\n}\n\n.flat-link:focus {\n    outline: none;\n    color: var(--flat-link-hover-text-color);\n}\n\n.flat-link.disabled { \n    pointer-events: none; \n    cursor: default; \n    color: var(--flat-link-disabled-text-color);\n}\n\n/** \n RoboForm Robot logo with RoboForm text logo, \n common for most setup pages and in About page\n*/\n.logo-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding-top: 40px;\n}\n\n.logo-section .logo {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n}\n\n.logo-section .robot-logo {\n    min-height: 80px;\n    background: url(${aO}) no-repeat center;\n}\n\n.dark-theme .logo-section .robot-logo {\n    background: url(${aP}) no-repeat center;\n}\n\n.logo-section .name-logo {\n    min-height: 40px;\n    background: url(${aQ}) no-repeat center;\n}\n\n.dark-theme .logo-section .name-logo {\n    background: url(${aR}) no-repeat center;\n}\n\n\n/** \n    Password score control: shield with text below\n*/\n.password-score {\n    text-align: center;\n}\n\n.password-score-meter {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    column-gap: 8px;\n}\n\n.password-score-img {\n    display: flex;\n    min-width: 24px;\n    height: 24px;\n}\n\n.password-score-meter .password-score-img {\n    min-width: 19px;\n    height: 19px;\n}\n\n.password-score-weak .password-score-img {\n    background: url(${aS}) no-repeat center;\n}\n\n.password-score-weak .password-score-text {\n    color: var(--password-weak-strength-color);\n}\n\n.password-score-medium .password-score-img {\n    background: url(${aT}) no-repeat center;\n}\n\n.password-score-medium .password-score-text {\n    color: var(--password-medium-strength-color);\n}\n\n.password-score-good .password-score-img {\n    background: url(${aU}) no-repeat center;\n}\n\n.password-score-good .password-score-text {\n    color: var(--password-good-strength-color);\n}\n\n.password-score-strong .password-score-img {\n    background: url(${aV}) no-repeat center;\n}\n\n.password-score-strong .password-score-text {\n    color: var(--password-strong-strength-color);\n}\n\n/* Notification area */\n.notification {\n    display: flex;\n    flex-direction: row;\n    min-height: 30px;\n    min-width: 150px;\n    border-radius: 5px;\n    max-width: 90%;\n    align-items: center;\n    padding: 5px 7px;\n    opacity: 0.7;\n\n    visibility: hidden;\n    opacity: 0;    \n\n    transition: visibility 0.7s linear, opacity 0.7s linear;   \n}\n\n.notification.visible {\n    visibility: visible;\n    opacity: 0.95;\n}\n\n.notification .text {\n    flex-grow: 1;\n    display: block;\n    font-size: 1em;\n    max-width: 100%;\n    padding-right: 15px;\n\n    overflow: hidden;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-word;\n    text-overflow: ellipsis;    \n}\n\n.notification.information {\n    background-color: var(--notification-info-background-color);\n    color: var(--notification-info-text-color);\n}\n\n.notification.warning {\n    background-color: var(--notification-warning-background-color);\n    color: var(--notification-warning-text-color);\n}\n\n.notification.error {\n    background-color: var(--notification-error-background-color);\n    color: var(--notification-error-text-color);\n}\n\n.notification .icon {\n    flex-shrink: 0;\n    width: 16px;\n    height: 16px;\n    background-size: 16px 16px;\n    cursor: pointer;\n}\n\n.notification.information .close-icon,\n.dark-theme .notification.information .close-icon,\n.notification.error .close-icon,\n.dark-theme .notification.error .close-icon {\n    background: url(${aW}) no-repeat center;\n}\n\n.notification.warning .close-icon,\n.dark-theme .notification.warning .close-icon {\n    background: url(${aX}) no-repeat center;\n}\n\n.page-flexy-space {\n    flex-grow: 1;\n}\n\n/** \n    (dis)allow select text\n*/\n.unselectable {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.selectable {\n    -webkit-user-select: text;\n    -webkit-user-drag: auto;\n    -moz-user-select: text;\n    -ms-user-select: text;\n    user-select: text;\n}\n\n\n.hidden {\n    display: none !important;\n}\n\n.image {\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n/** \n    common styles for images\n*/\n.size16 {\n    width: 16px;\n    height: 16px;\n    background-size: 16px;\n}\n\n.size18 {\n    width: 18px;\n    height: 18px;\n    background-size: 18px;\n}\n\n.size20 {\n    width: 20px;\n    height: 20px;\n    background-size: 20px;\n}\n\n.size24 {\n    width: 24px;\n    height: 24px;\n    background-size: 24px;\n}\n\n.size28 {\n    width: 28px;\n    height: 28px;\n    background-size: 28px;\n}\n\n.size32 {\n    width: 32px;\n    height: 32px;\n    background-size: 32px;\n}\n\n.size48 {\n    width: 48px;\n    height: 48px;\n    background-size: 48px;\n}\n\n.size64 {\n    width: 64px;\n    height: 64px;\n    background-size: 64px;\n}\n\n.flex-row {\n    display: flex;\n    flex-flow: row nowrap;\n}\n\n.flex-row-wrap {\n    display: flex;\n    flex-flow: row wrap;\n}\n\n.flex-column {\n    display: flex;\n    flex-flow: column nowrap;\n}\n\n.flex-column-wrap {\n    display: flex;\n    flex-flow: column wrap;\n}\n\n.flex-cell {\n    flex-shrink: 1;\n    flex-grow: 1;\n}\n\n.flex-cell-grow {\n    flex-shrink: 0;\n    flex-grow: 1;\n}\n\n.monospace {\n\tfont-family: Consolas, "Lucida Console", Monaco, monospace;\n}\n\n.icon-by-data-item-path {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n    text-align: center;\n    color: white;\n    border-radius: 100%;\n    height: 100%;\n}\n\n.icon-by-data-item-path.bg-color-1 {\n    background-color: #5bb254;\n}\n\n.icon-by-data-item-path.bg-color-2 {\n    background-color: #ff8888;\n}\n\n.icon-by-data-item-path.bg-color-3 {\n    background-color: #c781ff;\n}\n\n.icon-by-data-item-path.bg-color-4 {\n    background-color: #fab900;\n}\n\n.icon-by-data-item-path.fav-identity {\n    background-color: #448aff;\n}\n\n.report-an-issue-row-for-dialog {\n    display: flex; \n    justify-content: flex-end;\n    padding: 0em;\n    margin-left: 0px;\n    margin-right: 12px;\n}\n\n.report-an-issue-link {\n    color: #999;\n    text-decoration: underline;\n}\n\n.report-an-issue-link:hover {\n    text-decoration: none;\n}\n\n.report-an-issue-link:active {\n    color: #149ab5;\n    text-decoration: none;\n}\n\n.report-an-issue-row-for-popup {\n    display: flex; \n    flex-direction: row;\n    justify-content: left;\n    width: 100%;\n    padding-left: 17px;\n    margin: 0px;\n    min-height: 34px;\n    line-height: 34px;\n    align-self: start; /* override .main-page { align-items: center; } */\n    background-color: var(--main-page-header-background-color);\n}\n\n.report-an-issue-row-for-popup .report-an-issue-link {\n    color: var(--main-page-tab-selector-text-color);\n}\n\n.report-an-issue-row-for-popup .report-an-issue-link:active {\n    color: #149ab5;\n}\n`,""])
},74350:function(a,b,c){"use strict";var d=c(36758),e=c.n(d),f=c(40935),g=c.n(f)()(e())
;g.push([a.id,"body.light-theme,\nbody .light-theme {\n    \n    /* remove later */\n    --white-button-text-color: #000000;\n    --white-button-border-color: #d8dce0;\n    --white-button-background-color: #ffffff;\n    --white-button-hover-background-color: #e5f1fb;\n    --white-button-focus-border-color: #82b1ff;\n    --white-button-active-border-color: #d8dce0;\n    --white-button-active-background-color: #d8dce0;\n    --white-button-disabled-text-color: #838383;\n    --white-button-disabled-border-color: #cccccc;\n\n    --main-background-color: #ffffff;\n\n    /* text */\n    --main-text-color: #000000;\n    --title-text-color: #4f5254;\n    --main-text-disabled-color: #838383;\n    --hint-text-color: hsl(0, 0%, 55%);\n    --error-text-color: #ff0000;\n    --regular-link-color: #31a629;\n\n    --login-page-text-color: rgba(0, 0, 0, 0.87);\n    --login-page-link-color: #2979ff;\n    --login-page-input-border-color: #afb3b6;\n    --login-page-input-focused-border-color: #5d5fef;\n    --login-page-hint-color: rgba(0, 0, 0, 0.4);\n\n    --separator-color: rgba(224, 224, 224, 1);\n    --button-hover-color: rgba(0, 0, 0, 0.12);\n    --overlay-mask-color: rgba(0, 0, 0, 0.1);\n\n    /* Page Header: Start button, search, settings button */\n    --main-page-header-background-color: rgba(236, 237, 237, 1);\n\n    /* Main page tabs */\n    --main-page-tab-selector-text-color: rgba(0, 0, 0, 0.9);\n    --main-page-tab-selector-hover-color: rgba(247, 247, 247, 1);\n    --main-page-tab-selector-selected-color: rgba(255, 255, 255, 1);\n    --main-page-tab-selector-separator-color: rgba(0, 0, 0, 0.4);\n\n    /* Main page list mode selectors */\n    --list-mode-selectors-background-color: rgba(255, 255, 255, 1);\n    --list-mode-selector-text-color: rgba(0, 0, 0, 0.54);\n    --list-mode-selector-selected-text-color: #2962FF;\n    --list-mode-selector-selected-border-color: #2962FF;\n    --list-mode-selector-hover-color: rgba(0, 0, 0, 0.05);\n\n    /* Main page upgrade messages */\n    --main-page-upgrade-background-color: #EEF4FF;\n    --main-page-upgrade-color: rgb(0, 0, 0, 87%);\n    --main-page-upgrade-links-separator-color: rgb(0, 0, 0, 16%);\n    --main-page-upgrade-link-color: #2979FF;\n    --main-page-upgrade-close-button-color: rgb(0, 0, 0, 87%);\n    --main-page-upgrade-close-button-hover-color: #2979FF;\n    --main-page-upgrade-close-button-active-color: #2979FF;\n    \n    /* Main page scroll bars */\n    --vscroll-bar-width: 1em;\n    --hscroll-bar-height: 1em;\n    --scroll-bar-color: transparent;\n    --scroll-bar-active-color: rgb(0, 0, 0, 0.05);\n    --scroll-bar-hover-color: rgb(0, 0, 0, 0.05);\n    --scroll-bar-thumb-border-radius: 0.5em;\n    --scroll-bar-thumb-color: rgb(0, 0, 0, 0.05);\n    --scroll-bar-thumb-active-color: rgb(0, 0, 0, 0.1);\n    --scroll-bar-thumb-hover-color: rgb(0, 0, 0, 0.3);\n\n    /* Identity View */\n    --identity-view-background-color: rgba(0, 0, 0, 0.01);\n    --identity-view-field-captions-color: rgba(0, 0, 0, 0.50);\n    --identity-view-separator-color:  rgba(0, 0, 0, 0.2);\n    --identity-view-instance-radio-hover-color: rgba(0, 0, 0, 0.1);\n\n    /* anchor as a button */\n    --flat-link-text-color: rgba(32, 32, 32, 1);\n    --flat-link-hover-text-color: rgba(96, 96, 96, 1);\n    --flat-link-disabled-text-color: rgba(153, 153, 153, 1);\n\n    /* On/Off Yes/No toogle button for Firefox consent pages*/\n    --toggle-border-color: rgba(173, 173, 173, 1);\n    --toggle-off-button-border-color: rgba(173, 173, 173, 1);\n    --toggle-off-button-text-color: rgba(0, 0, 0, 1);\n    --toggle-off-button-background-color: rgba(225, 225, 225, 1);\n    --toggle-on-button-background-color: rgba(41, 121, 255, 1);\n    --toggle-on-button-text-color: rgba(255, 255, 255, 1);\n\n    --toggle-disabled-border-color: rgba(217, 217, 217, 1);\n    --toggle-disabled-background-color: rgba(241, 241, 241, 1);\n    --toggle-on-button-disabled-background-color: rgba(214, 214, 214, 1);\n    --toggle-on-button-disabled-text-color: rgba(159, 159, 159, 1);\n    --toggle-off-button-disabled-border-color: rgba(225, 225, 225, 1);\n\n    /* Important(blue) button */\n    --important-button-text-color: rgba(255, 255, 255, 1);\n    --important-button-background-color: #31a629;\n    --important-button-border-color: #31a629;\n\n    --important-button-hover-color: #207b1a;\n    --important-button-active-color: #207b1a;\n\n    --important-button-disabled-color:rgba(0, 0, 0, 0.08);\n    --important-button-disabled-text-color:rgba(0, 0, 0, 0.38);\n    --important-button-disabled-border-color:rgba(0, 0, 0, 0.08);\n\n    /* Regular(white) button */\n    --regular-button-text-color: rgba(0, 0, 0, 0.87);\n    --regular-button-background-color: rgba(255, 255, 255, 1);\n    --regular-button-border-color: rgba(0, 0, 0, 0.16);\n\n    --regular-button-hover-color: rgba(41, 121, 255, 0.04);\n    --regular-button-hover-border-color: rgba(0, 0, 0, 0.16);\n    \n    --regular-button-active-color: rgba(41, 121, 255, 0.24);\n    --regular-button-active-border-color: rgba(0, 0, 0, 0.16);\n\n    --regular-button-disabled-color: rgba(255, 255, 255, 1);\n    --regular-button-disabled-border-color: rgba(0, 0, 0, 0.15);\n    --regular-button-disabled-text-color: rgba(0, 0, 0, 0.38);\n\n    /* Low emphasis button */\n    --low-emphasis-button-text-color: rgba(0, 0, 0, 0.60);\n    --low-emphasis-button-hover-color: rgba(41, 121, 255, 0.04);\n    --low-emphasis-button-focused-color: rgba(41, 121, 255, 0.12);\n    --low-emphasis-button-active-color: rgba(41, 121, 255, 0.24);\n    --low-emphasis-button-disabled-text-color: rgba(0, 0, 0, 0.38);\n\n    /* Input for editing text */\n    --edit-background-color: rgba(255, 255, 255, 1);\n    --edit-placeholder-color: rgba(0, 0, 0, 0.54);\n    --edit-border-color: rgba(0, 0, 0, 0.54);\n    --edit-caret-color: rgba(0, 0, 0, 0.87);\n    --edit-text-color: rgba(0, 0, 0, 0.87);\n\n    --edit-disabled-border-color: hsl(0, 0%, 80%);\n    --edit-disabled-text-color: hsl(0, 0%, 77%);\n    --edit-disabled-background-color: hsl(0, 0%, 85%);\n    --edit-disabled-placeholder-color: hsl(0, 0%, 60%);\n\n    --edit-focused-border-color: rgba(49, 166, 41, 1);\n    --edit-focused-placeholder-color: rgba(49, 166, 41, 1);\n    --edit-hover-border-color: rgba(49, 166, 41, 0.87);\n\n    /* Password generator input and select */\n    --passgen-edit-border-color: hsl(0, 0%, 50%);\n    --passgen-edit-hover-border-color: hsl(0, 0%, 60%);\n    --passgen-edit-background-color: white;\n    --passgen-blue-active-elements-color: rgba(41, 121, 255, 1);\n    --passgen-toggle-color: rgba(51, 51, 51, 1);\n    --passgen-fill-btn-color-focus: rgba(229, 239, 255, 1);\n    --passgen-fill-btn-color-hover: rgba(247, 250, 255, 1);\n    --passgen-fill-btn-color-active: rgba(204, 223, 255, 1);\n    --passgen-dropdown-arrow-color: rgba(0, 0, 0, 0.87);\n    --passgen-history-color: rgba(0, 0, 0, 0.36);\n    --passgen-password-hover-color: rgba(0, 0, 0, 0.08);\n    --passgen-restore-and-bitstrength-color: rgba(0, 0, 0, 0.36);\n    --passgen-button-disabled-text-color: rgba(0, 0, 0, 0.38);\n    --main-page-passgen-background-color: rgba(242, 243, 247, 1);\n    --main-page-passgen-separator-color: rgba(0, 0, 0, 0.2);\n\n    /* switch button - SaveForms dialog */\n    --switch-button-inactive-background-color: hsl(0, 0%, 93%);\n    --switch-button-inactive-text-color: hsl(0, 0%, 60%);\n    --switch-button-active-text-color: hsl(0, 0%, 0%);\n    --switch-button-active-border-color: hsl(0, 0%, 89%);\n    --switch-button-active-background-color: hsl(0, 0%, 100%);\n    --switch-button-active-hover-color: hsl(0, 0%, 98%);\n\n    /* treeview - SaveForms dialog */\n    --tree-background-color: hsl(0, 0%, 100%);\n    --tree-item-selected-color: hsl(0, 0%, 87%);\n    --tree-item-hover-color: hsl(0, 0%, 94%);\n\n    /* drop-down list:editable - SaveForms dialog */\n    --select-editable-border-color: rgba(0, 0, 0, 0.54);\n    --select-editable-background-color: rgba(255, 255, 255, 1);\n\n    /* drop-down list:readonly - Password Generator dialog */\n    --select-readonly-border-color: hsl(0, 0%, 93%);\n    --select-readonly-background-color: hsl(0, 0%, 93%);\n    --select-dropdown-button-border-color: hsl(0, 0%, 55%);\n    --select-list-background-color: hsl(0, 0%, 100%);\n    --select-list-border-color: hsl(0, 0%, 65%);\n    --select-list-item-hover-color: hsl(0, 0%, 92%);\n\n    /* Header back section */\n    --back-section-background-color: rgba(242, 243, 247, 1);\n    --back-section-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);\n    --back-section-border-bottom-color: #E0E0E0;\n    --back-button-hover-color: rgba(0, 0, 0, 0.12);\n\n    /* Progress bar section */\n\t--progress-border-color: #bcbcbc;\n    --progress-background-color: #e1e1e1;\n    --progress-indicator-color: #06b025;\n\n    /* Search input and search results text color(bold, folder) */\n    --search-input-background-color:  rgba(255, 255, 255, 1);\n    --search-input-text-color: rgba(0, 0, 0, 0.87);\n    --search-input-placeholder-color: rgba(0, 0, 0, 0.42);\n    --search-input-focused-border-color: #c3c3c3;\n    --search-input-border-color: rgba(0, 0, 0, 0.16);\n    --search-input-hover-border-color: rgba(0, 0, 0, 0.32);\n\n    /* list item (search, matches, popular logins...) */\n    --list-background--color: rgba(255, 255, 255, 1);\n    --list-item-hover-background-color: rgba(41, 121, 255, 0.08);\n    --list-item-accented-background-color: rgba(41, 121, 255, 0.16);\n    --list-item-text-color: rgba(0, 0, 0, 0.87);\n    --list-item-show-all-text-color: rgba(65, 61, 61, 1);\n    --list-item-more-actions-hover-background-color: rgba(0, 0, 0, 0.12);\n    --list-item-addnew-circle-plus-color: rgba(0, 0, 0, 0.60);\n    --list-item-addnew-circle-border-color: rgba(0, 0, 0, 0.60);\n    --list-item-addnew-circle-background-color: rgba(255, 255, 255, 1);\n    --list-item-round-border-color: rgba(234, 234, 234, 1);\n    --list-item-folder-text-color: rgba(0, 0, 0, 0.50);\n    --list-item-bold-text-color: rgba(0, 0, 0, 1);\n    --list-item-accented-text-color: var(--list-item-text-color);\n    --list-item-accented-folder-text-color: var(--list-item-folder-text-color);\n    --list-item-accented-bold-text-color: var(--list-item-bold-text-color);\n\n    /* list item matches/identites counter */\n    --items-counter-text-color: rgba(0, 0, 0, 0.54);\n    --items-counter-background-color: rgba(250, 250, 250, 1);\n    --items-counter-border-color: rgba(0, 0, 0, 0.32);\n\n    /* Options page, refactor later */\n    --options-section-background-color: #f1f1f1;\n    --options-section-selected-color: #3399ee;\n    --options-section-border-color: #000000;\n    --options-caption-text-color: #808080;\n\n    --settings-view-notification-background-color: rgb(45, 48, 55);\n    --settings-view-notification-text-color: white;\n\n    /* Fill button matches counter and matching logins section */\n    --fill-indicator-text-color: #fafbfc;\n    --fill-indicator-active-text-color: white;\n    --fill-indicator-background-color: #ee8585;\n    --fill-indicator-active-background-color: rgba(242, 67, 56, 1);\n    --fill-indicator-active-border-color: white;\n\n    --matches-logins-bottom-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.20);\n    --items-dropdown-button-border-color: hsl(0, 0%, 85%);\n    --items-dropdown-active-button-border-color: hsl(0, 0%, 70%);\n\n    /* Main page, navigation section: Folder selector */\n    --folder-selector-separator-color: rgba(0, 0, 0, 0.2);\n    --folder-selector-text-color:rgba(0, 0, 0, 0.54);\n    --folder-selector-text-hover-color: rgba(0, 0, 0, 0.87);\n\n    /* Popup menu */\n    --popup-menu-background-color: #fafafa;\n    --popup-menu-item-hover-color: rgba(0, 0, 0, 0.08);\n    --popup-menu-item-text-hover-color: #2979FF;\n    --popup-menu-item-highlighted-color: #31a629;\n\n    --message-box-modal-mask-color: #0000007f;\n    --message-box-border-color: #000000;\n    --message-box-background-color: #ffffff;\n\n    /* Password strength weak/medium/good/strong */\n    --password-weak-strength-color: rgb(244, 67, 54);\n    --password-medium-strength-color: rgb(253, 152, 60);\n    --password-good-strength-color: rgb(154, 199, 58);\n    --password-strong-strength-color: rgb(91, 178, 84);\n\n    /* Main page notification area */\n    --notification-info-background-color: #008200;\n    --notification-warning-background-color: rgb(240, 218, 141);\n    --notification-error-background-color: rgb(244, 70, 68);\n    --notification-info-text-color: white;\n    --notification-warning-text-color: rgb(37, 37, 37);\n    --notification-error-text-color: white;\n\n    /* Inside webpage RoboForm dialogs */\n    --inpage-dialog-border-color: rgba(216, 220, 224, 1);\n    --inpage-dialog-background-color: rgba(255, 255, 255, 1);\n    --inpage-dialog-header-background: rgba(91, 178, 84, 1);\n    --inpage-dialog-header-text-color: rgba(255, 255, 255, 1);\n    --inpage-dialog-content-text-color: rgba(0, 0, 0, 1);\n\n    --inpage-dialog-background-color2: #f7f7f7;\n    --inpage-dialog-header-text-color2: rgba(0, 0, 0, 0.6);\n\n    /* bottom section with shortcuts */\n    --shortcuts-section-background-color: rgba(245, 245, 245, 1);\n    --shortcuts-section-border-color: rgba(224, 224, 224, 1);\n    --shortcuts-section-text-color: rgba(0, 0, 0, 0.87);\n    --shortcuts-section-hover-background-color: rgba(0, 0, 0, 0.05);\n\n    /* How to create first RoboForm item*/\n    --create-first-instructions-link-color: #2979FF;\n    --create-first-instructions-circle-background-color: #2979FF;\n    --create-first-instructions-circle-plus-color: white;\n\n    /* Settings View */\n    --settings-view-background-color: #fafafa;\n    --settings-view-text-color: rgba(0, 0, 0, 0.87);\n    --settings-view-sheet-header-color: #fafafa;\n    --settings-view-settings-header-title-text-color: rgba(0, 0, 0, 0.54);\n    --settings-view-sheet-selector-button-hover-color: rgba(41, 121, 255, 0.08);\n    --settings-view-sheet-selector-button-selected-color: rgba(41, 121, 255, 0.16);\n    --settings-view-sheet-selector-button-text-color: rgba(0, 0, 0, 0.87);\n    --settings-view-settings-header-color: #fafafa;\n    --settings-view-settings-header-sheet-title-text-color: rgba(0, 0, 0, 0.54);\n    --settings-view-settings-header-action-button-color: #448aff;\n    --settings-view-settings-header-action-button-text-color: #ffffff;\n    --settings-view-settings-separator-color: rgba(0, 0, 0, 0.16);\n    --settings-view-setting-title-text: rgba(0, 0, 0, 0.87);\n    --settings-view-hint-text-color: rgba(0, 0, 0, 0.4);\n    --settings-view-action-button-color: #fafafa;\n    --settings-view-dialog-button-color: #ffffff;\n    --settings-view-action-button-text-color: rgba(0, 0, 0, 0.7);\n    --settings-view-action-button-border-color: rgba(0, 0, 0, 0.16);\n    --settings-view-action-button-hover-color: rgba(41, 121, 255, 0.08);\n    --settings-view-action-button-active-color: rgba(41, 121, 255, 0.16);\n    --settings-view-action-button-disabled-color: rgba(0, 0, 0, 0.08);\n    --settings-view-action-button-disabled-text-color: rgba(0, 0, 0, 0.4);\n    --settings-view-info-button-text-color: #2979ff;\n    --settings-view-info-button-hover-text-color: #448aff;\n    --settings-view-info-button-active-text-color: #2962ff;\n    --settings-view-info-button-disabled-text-color: rgba(0, 0, 0, 0.4);\n    --settings-view-tooltip-color: rgb(238, 244, 255);\n    --settings-view-tooltip-text-color: rgba(0, 0, 0, 0.87);\n    --settings-view-modal-dialog-background-color: #ffffff;\n    --settings-view-modal-dialog-colored-title-color: rgba(41, 121, 255, 0.04);\n    --settings-view-accented-button-text-color: rgba(0, 0, 0, 0.87);\n    --settings-view-accented-button-color: rgba(235, 87, 87, 0.2);\n    --settings-view-accented-button-hover-color: rgba(235, 87, 87, 0.32);\n    --settings-view-accented-button-pressed-color: rgba(235, 87, 87, 0.44);\n    --settings-view-accented-button-border-color: rgba(0, 0, 0, 0.16);\n    --settings-view-special-button-text-color: rgba(41, 121, 255, 1);\n    --settings-view-special-button-color: rgba(41, 121, 255, 0.08);\n    --settings-view-special-button-hover-color: rgba(68, 138, 255, 1);\n    --settings-view-special-button-hover-text-color: #ffffff;\n    --settings-view-special-button-pressed-color: rgba(41, 98, 255, 1);\n    --settings-view-special-button-pressed-text-color: #ffffff;\n    --settings-view-special-button-border-color: rgba(41, 121, 255, 0.16);\n    --settings-view-disabled-button-text-color: rgba(0, 0, 0, 0.4);\n    --settings-view-disabled-button-color: rgba(0, 0, 0, 0.08);\n    --settings-view-important-text-color: #2979ff;\n    --settings-view-star-button-color: rgba(41, 121, 255, 0.08);\n    --settings-view-star-button-text-color: #2979ff;\n    --settings-view-star-button-border-color: rgba(41, 121, 255, 0.16);\n    --settings-view-star-button-hover-color: #448aff;\n    --settings-view-star-button-text-hover-color: #ffffff;\n    --settings-view-star-button-active-color: #2962ff;\n    --settings-view-star-button-text-active-color: #ffffff;\n    --settings-view-important-button-text-color: #2979ff;\n    --settings-view-important-button-hover-text-color: #448aff;\n    --settings-view-important-button-active-text-color: #2962ff;\n\n    --settings-view-control-color: #fafafa;\n    --settings-view-control-text-color: #000000;\n    --settings-view-control-border-color: rgba(0, 0, 0, 0.32);\n    --settings-view-keyboard-shortcuts-odd-background-color: rgba(0, 0, 0, 0.04);\n    --settings-view-edit-selected-color: #2962ff;\n    --settings-view-editable-line-hover-color: rgba(41, 121, 255, 0.08);\n    --settings-view-editable-line-placeholder-text-color: rgba(0, 0, 0, 0.4);\n    --settings-view-select-text-color: rgba(0, 0, 0, 0.87);\n    --settings-view-select-border-color: rgba(0, 0, 0, 0.32);\n    --settings-view-select-active-border-color: #2962ff;\n    --settings-view-select-option-text-color: rgba(0, 0, 0, 0.87);\n    --settings-view-select-option-active-text-color: #2979ff;\n    --settings-view-select-scrollbar-color: #2979ff;\n    --settings-view-overlay-mask-color: rgba(255,255,255,0.5);\n    --settings-view-unchecked-setting-text-color: rgba(0, 0, 0, 0.54);\n    --settings-view-important-text-border-color: rgba(41, 121, 255, 0.54);\n    --settings-view-business-trial-button-text-color: #5075b2;\n    --settings-view-business-trial-button-hover-text-color: #7092cc;\n    --settings-view-business-trial-button-active-text-color: #3d5f99;\n    --settings-view-notimportant-title-text-color: #999999;\n    --settings-view-error-text-color: #eb5757;\n    --settings-view-data-input-placeholder-text-color: rgba(0, 0, 0, 0.4);\n    --settings-view-data-input-border-color: rgba(0, 0, 0, 0.32);\n    --settings-view-confirmation-highlighted-button-color: #2979ff;\n    --settings-view-confirmation-highlighted-button-text-color: #ffffff;\n    --settings-view-confirmation-highlighted-button-hover-color: #448aff;\n    --settings-view-confirmation-highlighted-button-active-color: #2962ff;\n    --settings-view-confirmation-highlighted-disabled-button-color: rgba(0, 0, 0, 0.08);\n    --settings-view-confirmation-highlighted-disabledbutton-text-color: rgba(0, 0, 0, 0.4);\n    --settings-view-agreement-text-color: rgba(0, 0, 0, 0.4);\n    --settings-view-this-devices-text-color: #31A629;\n    --settings-view-free-devices-text-color: rgba(0, 0, 0, 0.54);\n    --settings-view-free-devices-background-color: rgba(91, 178, 84, 0.32);\n    --settings-view-readonly-devices-text-color: rgba(0, 0, 0, 0.54);\n    --settings-view-readonly-devices-background-color: rgba(0, 0, 0, 0.08);\n    --settings-view-devices-info-title: rgba(0, 0, 0, 0.4);\n    --settings-view-remove-device-warning-action-color: #2979ff;\n    --settings-view-remove-device-warning-action-hover-color: #448aff;\n    --settings-view-remove-device-warning-action-active-color: #2962ff;\n    --settings-view-enrollment-status-title-color: rgba(0, 0, 0, 0.7);\n    --settings-view-header-controls-text-color: rgba(0, 0, 0, 0.87);\n    --settings-view-header-controls-border-color: rgba(0, 0, 0, 0.16);\n    --settings-view-header-controls-hover-color: #e9f0fa;\n    --settings-view-header-controls-active-color: #d9e5fb;\n    --settings-view-backup-accounts-list-item-background-color: rgba(0, 0, 0, 0.04);\n    --settings-view-backup-accounts-list-item-shadow-color: rgba(0, 0, 0, 0.08);\n    --settings-view-backup-accounts-selected-list-item-shadow-color: rgba(41, 121, 255, 0.4);\n    --settings-view-backup-backups-list-item-background-color: #ffffff;\n    --settings-view-backup-backups-list-item-background-selected-color: rgba(204, 223, 255);\n    --settings-view-backup-backups-expanded-list-item-background-color: #eef4ff;\n    --settings-view-item-hover-color: #ddeaff;\n    --settings-view-search-underline-color: rgba(0, 0, 0, 0.32);\n    --settings-view-search-text-color: rgba(0, 0, 0, 0.87);\n    --settings-view-search-placeholder-color: rgba(0, 0, 0, 0.4);\n    --settings-view-search-highlight-color: #2979ff;\n\n    --save-forms-edit-border-color: #d6d6d6;\n    --save-forms-separator-color: rgba(0, 0, 0, 0.1);\n    --save-forms-caption-color: rgba(0, 0, 0, 0.60);\n    --save-forms-active-switch-background-color: #2979FF;\n    --save-forms-active-switch-text-color: #FFF;\n    --save-forms-inactive-switch-hover-color: rgba(41, 121, 255, 0.08);\n    --save-forms-inactive-switch-text-color: rgba(0, 0, 0, 0.54);\n    --save-forms-switch-border-color: rgba(0, 0, 0, 0.16);\n    --save-forms-switch-text-color: rgba(0, 0, 0, 0.7);\n    --post-save-notification-success-mark-color: #5bb254;\n    --post-save-notification-success-title-text-color: #31a629;\n    --post-save-notification-success-text-color: #444444;\n    --login-required-content-border-color: #d6d6d6;\n\n    --duplicates-item-hover-color: #d8dce0;\n\n    --totp-timer-normal-color: darkgray;\n    --totp-timer-warning-color: #EB5757;\n\n    --create-new-button-color: #2979FF;\n    --create-new-button-plus-color: #ffffff;\n}\n\nbody.dark-theme,\nbody .dark-theme {\n    --white-button-text-color: #000000;\n    --white-button-border-color: #d8dce0;\n    --white-button-background-color: #ffffff;\n    --white-button-hover-background-color: #e5f1fb;\n    --white-button-focus-border-color: #82b1ff;\n    --white-button-active-border-color: #d8dce0;\n    --white-button-active-background-color: #d8dce0;\n    --white-button-disabled-text-color: #838383;\n    --white-button-disabled-border-color: #cccccc;\n    \n    --main-background-color: rgba(33, 33, 33, 1);\n\n    /* text */\n    --title-text-color: #dcdcdc;\n    --main-text-color: #F1F1F1;\n    --main-text-disabled-color: #838383;\n    --hint-text-color: hsl(0, 0%, 50%);\n    --error-text-color: hsl(0, 81%, 73%);\n    --regular-link-color: #31a629;\n\n    --login-page-text-color: rgba(255, 255, 255, 0.87);\n    --login-page-link-color: #2979ff;\n    --login-page-input-border-color: #afb3b6;\n    --login-page-input-focused-border-color: #5d5fef;\n    --login-page-hint-color: rgba(255, 255, 255, 0.4);\n\n    --separator-color: rgba(255, 255, 255, 0.08);\n    --button-hover-color: rgba(255, 255, 255, 0.18);\n    --overlay-mask-color: rgba(0, 0, 0, 0.1);\n\n    /* Page Header: Start button, search, settings button */\n    --main-page-header-background-color: rgba(18, 18, 18, 1);\n\n    /* Main page tabs */\n    --main-page-tab-selector-text-color: rgba(255, 255, 255, 95%);\n    --main-page-tab-selector-hover-color: rgba(255, 255, 255, 11%);\n    --main-page-tab-selector-selected-color: rgba(33, 33, 33, 1);\n    --main-page-tab-selector-separator-color: rgba(255, 255, 255, 25%);\n\n    /* List mode selectors */\n    --list-mode-selectors-background-color: rgba(0, 0, 0, 0.06);\n    --list-mode-selector-text-color: rgba(255, 255, 255, 0.54);\n    --list-mode-selector-selected-text-color: rgba(255, 255, 255, 1);\n    --list-mode-selector-selected-border-color: rgba(68, 138, 255, 1);\n    --list-mode-selector-hover-color: rgba(255, 255, 255, 0.11);\n\n    /* Main page upgrade messages */\n    --main-page-upgrade-background-color: rgba(18, 18, 18, 1);\n    --main-page-upgrade-color: rgb(255, 255, 255, 75%);\n    --main-page-upgrade-links-separator-color: rgb(255, 255, 255, 16%);\n    --main-page-upgrade-link-color: #2979FF;\n    --main-page-upgrade-close-button-color: rgb(255, 255, 255, 75%);\n    --main-page-upgrade-close-button-hover-color: #2979FF;\n    --main-page-upgrade-close-button-active-color: #2979FF;\n\n    /* Main page scroll bars */\n    --vscroll-bar-width: 1em;\n    --hscroll-bar-height: 1em;\n    --scroll-bar-color: transparent;\n    --scroll-bar-active-color: rgb(255, 255, 255, 0.05);\n    --scroll-bar-hover-color: rgb(255, 255, 255, 0.05);\n    --scroll-bar-thumb-border-radius: 0.5em;\n    --scroll-bar-thumb-color: rgb(255, 255, 255, 0.05);\n    --scroll-bar-thumb-active-color: rgb(255, 255, 255, 0.1);\n    --scroll-bar-thumb-hover-color: rgb(255, 255, 255, 0.3);\n\n    --identity-view-background-color: rgba(255, 255, 255, 3%);\n    --identity-view-separator-color:  rgba(255, 255, 255, 0.1%);\n    --identity-view-instance-radio-hover-color:  rgba(255, 255, 255, 0.11);\n\n\n    /* anchor as a button */\n    --flat-link-text-color: #e1e1e1;\n    --flat-link-hover-text-color: #d1d1d1;\n    --flat-link-disabled-text-color: #838383;\n\n    /* Yes/No toogle button for Firefox consent pages*/\n    --toggle-border-color: #adadad;\n    --toggle-off-button-border-color: #adadad;\n    --toggle-off-button-text-color: #000000;\n    --toggle-off-button-background-color: #e1e1e1;\n    --toggle-on-button-background-color: #2979ff;\n    --toggle-on-button-text-color: #ffffff;\n\n    --toggle-disabled-border-color: rgba(217, 217, 217, 1);\n    --toggle-disabled-background-color: rgba(241, 241, 241, 1);\n    --toggle-on-button-disabled-background-color: rgba(214, 214, 214, 1);\n    --toggle-on-button-disabled-text-color: rgba(159, 159, 159, 1);\n    --toggle-off-button-disabled-border-color: rgba(225, 225, 225, 1);\n\n    /* Important(blue) button */\n    --important-button-text-color: #ffffff;\n    --important-button-background-color:  rgba(49, 166, 41, 1);\n    --important-button-border-color: rgba(49, 166, 41, 1);\n    --important-button-hover-color: rgba(32, 123, 26, 1);\n    --important-button-active-color: rgba(32, 123, 26, 1);\n    --important-button-disabled-color:rgba(255, 255, 255, 5%);\n    --important-button-disabled-text-color:rgba(255, 255, 255, 20%);\n    --important-button-disabled-border-color:rgba(255, 255, 255, 4%);\n\n    /* Regular(black) button */\n    --regular-button-text-color: rgba(255, 255, 255, 100%);\n    --regular-button-background-color: rgba(34, 34, 34, 100%);\n    --regular-button-border-color: rgba(56, 56, 56, 100%);\n\n    --regular-button-hover-color: rgba(41, 121, 255, 12%);\n    --regular-button-hover-border-color: rgba(56, 56, 56, 100%);\n\n    --regular-button-active-color: rgba(41, 121, 255, 24%);\n    --regular-button-active-border-color: rgba(56, 56, 56, 100%);\n\n    --regular-button-disabled-color: rgba(50, 50, 50, 1);\n    --regular-button-disabled-border-color: rgba(161, 161, 161, 1);\n    --regular-button-disabled-text-color: rgba(161, 161, 161, 1);\n\n    /* Low emphasis button */\n    --low-emphasis-button-text-color: rgba(255, 255, 255, 0.60);\n    --low-emphasis-button-hover-color: rgba(68, 138, 255, 0.04);\n    --low-emphasis-button-focused-color: rgba(68, 138, 255, 0.12);\n    --low-emphasis-button-active-color: rgba(68, 138, 255, 0.24);\n    --low-emphasis-button-disabled-text-color: rgba(255, 255, 255, 0.38);\n\n    /* Input for editing text, mostly for Setup pages */\n    --edit-background-color: rgba(255, 255, 255, 14%);\n    --edit-border-color: rgba(255, 255, 255, 4%);\n    --edit-caret-color: rgba(223, 223, 223, 100%);\n    --edit-text-color: rgba(223, 223, 223, 100%);\n    --edit-placeholder-color: rgba(255, 255, 255, 54%);\n\n    --edit-disabled-border-color: rgba(255, 255, 255, 18%);\n    --edit-disabled-text-color: rgba(197, 197, 197, 100%);\n    --edit-disabled-background-color: rgba(255, 255, 255, 28%);\n    --edit-disabled-placeholder-color: rgba(255, 255, 255, 44%);\n\n    --edit-hover-border-color: rgba(255, 255, 255, 20%);\n    --edit-focused-border-color: rgba(49, 166, 41, 1);\n    --edit-focused-placeholder-color: rgba(49, 166, 41, 1);\n\n    /* Password generator input and select */\n    --passgen-edit-border-color: rgba(255, 255, 255, 14%);\n    --passgen-edit-hover-border-color: rgba(255, 255, 255, 14%);\n    --passgen-edit-background-color: rgba(56, 56, 56, 1);\n    --passgen-blue-active-elements-color: rgba(41, 121, 255, 1);\n    --passgen-toggle-color: rgba(238, 238, 238, 1);\n    --passgen-fill-btn-color-focus: rgba(37, 46, 60, 1);\n    --passgen-fill-btn-color-hover: rgba(34, 37, 42, 1);\n    --passgen-fill-btn-color-active: rgba(41, 58, 86, 1);\n    --passgen-dropdown-arrow-color: rgba(255, 255, 255, 0.87);\n    --passgen-history-color: rgba(255, 255, 255, 0.65);\n    --passgen-restore-and-bitstrength-color: rgba(255, 255, 255, 0.36);\n    --passgen-password-hover-color: rgba(255, 255, 255, 0.08);\n    --passgen-button-disabled-text-color: rgba(255, 255, 255, 0.38);\n    --main-page-passgen-background-color: rgba(255, 255, 255, 0.04);\n    --main-page-passgen-separator-color: rgba(255, 255, 255, 25%);\n\n    /* switch button - SaveForms dialog */\n    --switch-button-inactive-background-color: rgba(255, 255, 255, 14%);\n    --switch-button-inactive-text-color: rgba(255, 255, 255, 54%);\n    --switch-button-active-text-color: rgba(223, 223, 223, 100%);\n    --switch-button-active-border-color: rgba(255, 255, 255, 4%);\n    --switch-button-active-background-color: rgba(255, 255, 255, 20%);\n    --switch-button-active-hover-color: rgba(255, 255, 255, 17%);\n\n    /* treeview - SaveForms dialog */\n    --tree-background-color: hsl(0, 0%, 10%);\n    --tree-item-selected-color: hsl(0, 0%, 25%);\n    --tree-item-hover-color: hsl(0, 0%, 17%);\n\n    /* drop-down list:editable - SaveForms dialog */\n    --select-editable-border-color: rgba(0, 0, 0, 0.34);\n    --select-editable-background-color: rgba(33, 33, 33, 1);\n\n    /* drop-down list - SaveForms/Password Generator dialogs */\n    --select-readonly-border-color: hsl(0, 0%, 34%);\n    --select-readonly-background-color: hsl(200, 3%, 19%);\n    --select-dropdown-button-border-color: hsl(0, 0%, 65%);\n    --select-list-background-color: hsl(0, 0%, 10%);\n    --select-list-border-color: hsl(0, 0%, 45%);\n    --select-list-item-hover-color: rgba(255, 255, 255, 0.08);\n\n    /* Header back section */\n    --back-section-background-color: rgba(255, 255, 255, 0.04);\n    --back-section-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.24), 0px 2px 2px rgba(0, 0, 0, 0.22), 0px 1px 3px rgba(0, 0, 0, 0.3);\n    --back-section-border-bottom-color: rgba(255, 255, 255, 0.08);\n    --back-button-hover-color: #448AFF;\n\n    /* Progress bar section */\n    --progress-border-color: #dddddd;\n    --progress-background-color: #e1e1e1;\n    --progress-indicator-color: #06b025;\n\n    /* Search input and search results text color(bold, folder) */\n    --search-input-background-color: #505050; \n    --search-input-placeholder-color: rgba(255, 255, 255, 0.44);\n    --search-input-text-color: #E1E1E1;\n    --search-input-border-color: #303030;\n    --search-input-focused-border-color: #6c78fb;\n    --search-input-hover-border-color: rgba(0, 0, 0, 0.32);\n\n    /* list item (search, matches, popular logins...) */\n    --list-background--color: rgba(255, 255, 255, 0.06);\n    --list-item-hover-background-color: rgba(255, 255, 255, 0.11);\n    --list-item-accented-background-color: rgba(255, 255, 255, 0.16);\n    --list-item-text-color: hsl(0, 0%, 87%);\n    --list-item-show-all-text-color: hsl(0, 0%, 70%);\n    --list-item-more-actions-hover-background-color: rgba(255, 255, 255, 0.18);\n    --list-item-addnew-circle-plus-color: rgba(255,255,255, 0.75);\n    --list-item-addnew-circle-border-color: rgba(255,255,255, 0.75);\n    --list-item-addnew-circle-background-color: #212121;\n    --list-item-round-border-color: rgba(255, 255, 255, 0.13);\n    --list-item-folder-text-color: rgba(255, 255, 255, 0.42);\n    --list-item-bold-text-color: rgba(255, 255, 255, 0.98);\n    --list-item-accented-text-color: var(--list-item-text-color);\n    --list-item-accented-folder-text-color: var(--list-item-folder-text-color);\n    --list-item-accented-bold-text-color: var(--list-item-bold-text-color);\n\n    --items-counter-text-color: hsl(0, 0%, 60%);\n    --items-counter-background-color: rgba(255, 255, 255, 0.08);\n    --items-counter-border-color: hsl(0, 0%, 60%);\n\n    --options-section-background-color: #f1f1f1;\n    --options-section-selected-color: #3399ee;\n    --options-section-border-color: #6b6b6b;\n    --options-caption-text-color: #808080;\n\n    --settings-view-notification-background-color:  rgba(255, 255, 255, 100%);\n    --settings-view-notification-text-color:rgba(34, 34, 34, 100%);\n\n    /* Fill button matches counter and matching logins section */\n    --fill-indicator-text-color: rgba(250, 251, 252, 1);\n    --fill-indicator-active-text-color: rgba(255, 255, 255, 1);\n    --fill-indicator-background-color: rgba(238, 133, 133, 1);\n    --fill-indicator-active-background-color: rgba(235, 87, 87, 1);\n    --fill-indicator-active-border-color: white;\n\n    --matches-logins-bottom-shadow: 0 4px 2px -2px rgba(255, 255, 255, 0.20);\n    --items-dropdown-button-border-color: hsl(0, 0%, 50%);\n    --items-dropdown-active-button-border-color: hsl(0, 0%, 70%);\n\n    /* Main page, navigation section: Folder selector */\n    --folder-selector-separator-color: rgba(255, 255, 255, 25%);\n    --folder-selector-text-color:rgba(255, 255, 255, 0.54);\n    --folder-selector-text-hover-color: rgba(255, 255, 255, 1);\n\n    /* Popup menu */\n    --popup-menu-background-color: #2E3031;\n    --popup-menu-item-hover-color: rgba(255, 255, 255, 0.08);\n    --popup-menu-item-text-hover-color: #ffffff;\n    --popup-menu-item-highlighted-color: #31a629;\n\n    --message-box-modal-mask-color: #0000007f;\n    --message-box-border-color: #000000;\n    --message-box-background-color: #ffffff;\n\n    /* Password strength weak/medium/good/strong */\n    --password-weak-strength-color: rgb(244, 67, 54);\n    --password-medium-strength-color: rgb(253, 152, 60);\n    --password-good-strength-color: rgb(154, 199, 58);\n    --password-strong-strength-color: rgb(91, 178, 84);\n\n    /* Main page notification area */\n    --notification-info-background-color: #00a700;\n    --notification-warning-background-color: rgb(240, 218, 141);\n    --notification-error-background-color: rgb(244, 70, 68);\n    --notification-info-text-color: white;\n    --notification-warning-text-color:  rgb(25, 25, 25);\n    --notification-error-text-color: white;\n\n    /* Inside webpage RoboForm dialogs */\n    --inpage-dialog-border-color: rgba(216, 220, 224, 1);\n    --inpage-dialog-background-color: rgba(255, 255, 255, 1);\n    --inpage-dialog-header-background: rgba(91, 178, 84, 1);\n    --inpage-dialog-header-text-color: rgba(255, 255, 255, 1);\n    --inpage-dialog-content-text-color: rgba(255, 255, 255, 1);\n\n    --inpage-dialog-background-color2:rgba(33, 33, 33, 1);\n    --inpage-dialog-header-text-color2: rgba(255, 255, 255, 0.6);\n\n    /* bottom section with shortcuts */\n    --shortcuts-section-background-color: rgba(33, 33, 33, 1);\n    --shortcuts-section-border-color: rgba(64, 64, 64, 1);\n    --shortcuts-section-text-color: rgba(241, 241, 241, 1);\n    --shortcuts-section-hover-background-color: rgba(255, 255, 255, 0.11);\n\n    /* How to create first RoboForm item*/\n    --create-first-instructions-link-color: #2979FF;\n    --create-first-instructions-circle-background-color: #2979FF;\n    --create-first-instructions-circle-plus-color: white;\n\n    /* Settings View */\n    --settings-view-background-color: #212121;\n    --settings-view-text-color: rgba(255, 255, 255, 0.87);\n    --settings-view-sheet-header-color: #2c2c2c;\n    --settings-view-settings-header-title-text-color: rgba(255, 255, 255, 0.54);\n    --settings-view-sheet-selector-button-hover-color: rgba(255, 255, 255, 0.08);\n    --settings-view-sheet-selector-button-selected-color: rgba(255, 255, 255, 0.16);\n    --settings-view-sheet-selector-button-text-color: rgba(255, 255, 255, 0.87);\n    --settings-view-settings-header-color: #212121;\n    --settings-view-settings-header-sheet-title-text-color: rgba(255, 255, 255, 0.54);\n    --settings-view-settings-header-action-button-color: #448aff;\n    --settings-view-settings-header-action-button-text-color: #ffffff;\n    --settings-view-settings-separator-color: rgba(255, 255, 255, 0.16);\n    --settings-view-setting-title-text: rgba(255, 255, 255, 0.87);\n    --settings-view-hint-text-color: rgba(255, 255, 255, 0.4);\n    --settings-view-action-button-color: #212121;\n    --settings-view-dialog-button-color: #212121;\n    --settings-view-action-button-text-color: rgba(255, 255, 255, 0.7);\n    --settings-view-action-button-border-color: rgba(255, 255, 255, 0.16);\n    --settings-view-action-button-hover-color: rgba(255, 255, 255, 0.08);\n    --settings-view-action-button-active-color: rgba(255, 255, 255, 0.16);\n    --settings-view-action-button-disabled-color: rgba(255, 255, 255, 0.08);\n    --settings-view-action-button-disabled-text-color: rgba(255, 255, 255, 0.4);\n    --settings-view-info-button-text-color: #2979ff;\n    --settings-view-info-button-hover-text-color: #448aff;\n    --settings-view-info-button-active-text-color: #2962ff;\n    --settings-view-info-button-disabled-text-color: rgba(0, 0, 0, 0.4);\n    --settings-view-tooltip-color: rgb(69, 69, 69);\n    --settings-view-tooltip-text-color: rgb(255, 255, 255);\n    --settings-view-modal-dialog-background-color: #383838;\n    --settings-view-modal-dialog-colored-title-color: rgba(255, 255, 255, 0.04);\n    --settings-view-accented-button-text-color: rgba(255, 255, 255, 0.87);\n    --settings-view-accented-button-color: rgba(235, 87, 87, 0.2);\n    --settings-view-accented-button-hover-color: rgba(235, 87, 87, 0.32);\n    --settings-view-accented-button-pressed-color: rgba(235, 87, 87, 0.44);\n    --settings-view-accented-button-border-color: rgba(255, 255, 255, 0.16);\n    --settings-view-special-button-text-color: rgba(68, 138, 255, 1);\n    --settings-view-special-button-color: rgba(41, 121, 255, 0.16);\n    --settings-view-special-button-hover-color: rgba(68, 138, 255, 1);\n    --settings-view-special-button-hover-text-color: #ffffff;\n    --settings-view-special-button-pressed-color: rgba(41, 98, 255, 1);\n    --settings-view-special-button-pressed-text-color: #ffffff;\n    --settings-view-special-button-border-color: rgba(41, 121, 255, 0.16);\n    --settings-view-disabled-button-text-color: rgba(255, 255, 255, 0.4);\n    --settings-view-disabled-button-color: rgba(255, 255, 255, 0.08);\n    --settings-view-important-text-color: #2979ff;\n    --settings-view-star-button-color: rgba(41, 121, 255, 0.2);\n    --settings-view-star-button-text-color: #448aff;\n    --settings-view-star-button-border-color: rgba(41, 121, 255, 0.16);\n    --settings-view-star-button-hover-color: #448aff;\n    --settings-view-star-button-text-hover-color: #ffffff;\n    --settings-view-star-button-active-color: #2962ff;\n    --settings-view-star-button-text-active-color: #ffffff;\n    --settings-view-important-button-text-color: #448aff;\n    --settings-view-important-button-hover-text-color: #609cff;\n    --settings-view-important-button-active-text-color: #2962ff;\n\n    --settings-view-control-color: #121212;\n    --settings-view-control-text-color: rgb(197, 203, 206);\n    --settings-view-control-border-color: rgba(255, 255, 255, 0.32);\n    --settings-view-keyboard-shortcuts-odd-background-color: rgba(255, 255, 255, 0.04);\n    --settings-view-edit-selected-color: rgba(255, 255, 255, 0.7);\n    --settings-view-select-text-color: rgba(255, 255, 255, 0.87);\n    --settings-view-select-border-color: rgba(255, 255, 255, 0.32);\n    --settings-view-select-active-border-color: rgba(255, 255, 255, 0.7);\n    --settings-view-select-option-text-color: rgba(255, 255, 255, 0.54);\n    --settings-view-select-option-active-text-color: rgba(255, 255, 255, 0.87);\n    --settings-view-select-scrollbar-color: rgba(255, 255, 255, 0.87);\n    --settings-view-editable-line-hover-color: rgba(255, 255, 255, 0.08);\n    --settings-view-editable-line-placeholder-text-color: rgba(255, 255, 255, 0.4);\n    --settings-view-overlay-mask-color: rgba(255,255,255,0.5);\n    --settings-view-unchecked-setting-text-color: rgba(255, 255, 255, 0.54);\n    --settings-view-important-text-border-color: rgba(41, 121, 255, 0.54);\n    --settings-view-business-trial-button-text-color: #5075b2;\n    --settings-view-business-trial-button-hover-text-color: #7092cc;\n    --settings-view-business-trial-button-active-text-color: #3d5f99;\n    --settings-view-notimportant-title-text-color: #999999;\n    --settings-view-error-text-color: #eb5757;\n    --settings-view-data-input-placeholder-text-color: rgba(255, 255, 255, 0.4);\n    --settings-view-data-input-border-color: rgba(255, 255, 255, 0.32);\n    --settings-view-confirmation-highlighted-button-color: #2979ff;\n    --settings-view-confirmation-highlighted-button-text-color: #ffffff;\n    --settings-view-confirmation-highlighted-button-hover-color: #448aff;\n    --settings-view-confirmation-highlighted-button-active-color: #2962ff;\n    --settings-view-confirmation-highlighted-disabled-button-color: rgba(255, 255, 255, 0.08);\n    --settings-view-confirmation-highlighted-disabledbutton-text-color: rgba(255, 255, 255, 0.4);\n    --settings-view-agreement-text-color: rgba(255, 255, 255, 0.4);\n    --settings-view-this-devices-text-color: #31A629;\n    --settings-view-free-devices-text-color: rgba(255, 255, 255, 0.54);\n    --settings-view-free-devices-background-color: rgba(91, 178, 84, 0.32);\n    --settings-view-readonly-devices-text-color: rgba(0, 0, 0, 0.08);\n    --settings-view-readonly-devices-background-color: rgba(0, 0, 0, 0.87);\n    --settings-view-devices-info-title: rgba(255, 255, 255, 0.4);\n    --settings-view-remove-device-warning-action-color: #639dff;\n    --settings-view-remove-device-warning-action-hover-color: #82b1ff;\n    --settings-view-remove-device-warning-action-active-color: #448aff;\n    --settings-view-enrollment-status-title-color: rgba(255, 255, 255, 0.7);\n    --settings-view-header-controls-text-color: rgba(255, 255, 255, 0.87);\n    --settings-view-header-controls-border-color: rgba(255, 255, 255, 0.16);\n    --settings-view-header-controls-hover-color: #484848;\n    --settings-view-header-controls-active-color: #585858;\n    --settings-view-backup-accounts-list-item-background-color: rgba(255, 255, 255, 0.04);\n    --settings-view-backup-accounts-list-item-shadow-color: rgba(255, 255, 255, 0.08);\n    --settings-view-backup-accounts-selected-list-item-shadow-color: rgba(41, 121, 255, 0.4);\n    --settings-view-backup-backups-list-item-background-color: #343434;\n    --settings-view-backup-backups-list-item-background-selected-color: #545454;\n    --settings-view-backup-backups-expanded-list-item-background-color: #343434;\n    --settings-view-item-hover-color: #444444;\n    --settings-view-search-underline-color: rgba(255, 255, 255, 0.32);\n    --settings-view-search-text-color: rgba(255, 255, 255, 0.87);\n    --settings-view-search-placeholder-color: rgba(255, 255, 255, 0.4);\n    --settings-view-search-highlight-color: #2979ff;\n\n    --save-forms-edit-border-color: rgba(255, 255, 255, 0.24);\n    --save-forms-separator-color: rgba(255, 255, 255, 0.1);\n    --save-forms-caption-color: rgba(255, 255, 255, 0.60);\n    --save-forms-active-switch-background-color: #448aff;\n    --save-forms-active-switch-text-color: #000;\n    --save-forms-inactive-switch-hover-color: rgba(255, 255, 255, 0.08);\n    --save-forms-inactive-switch-text-color:  rgba(255, 255, 255, 0.54);\n    --save-forms-switch-border-color: rgba(255, 255, 255, 0.16);\n    --save-forms-switch-text-color: rgba(255, 255, 255, 0.7);\n    --post-save-notification-success-mark-color: #31a629;\n    --post-save-notification-success-title-text-color: #e1e1e1;\n    --post-save-notification-success-text-color: #e1e1e1;\n    --login-required-content-border-color: rgba(0, 0, 0, 0.1);\n\n    --duplicates-item-hover-color: hsl(0, 0%, 22%);\n\n    --totp-timer-normal-color: darkgray;\n    --totp-timer-warning-color: #EB5757;\n\n    --create-new-button-color: #2979FF;\n    --create-new-button-plus-color: #ffffff;\n}",""])
},21566:function(a,b,c){"use strict";var d=c(36758),e=c.n(d),f=c(40935),g=c.n(f)()(e())
;g.push([a.id,"/*\n   AskConsentToCollectDataPage\n */\n.ask-consent-page {\n    display: flex;\n}\n\n.ask-consent-page .content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n    box-sizing: border-box;\n    width: 500px;\n}\n\n.ask-consent-page .title {\n    font-size: 24px;\n    /* font-weight: bold; */\n    cursor: default;\n    color: #4f5254;\n    color: var(--title-text-color);\n}\n\n.ask-consent-page .data-section {\n    display: flex;\n    flex-direction: column;\n}\n\n.ask-consent-page .data-section > div:not(:first-child),\n.ask-consent-page .data-section > ul:not(:first-child) {\n    margin-top: 10px;\n}\n\n.ask-consent-page .data-section-title,\n.ask-consent-page .personal-section-title,\n.ask-consent-page .technical-section-title {\n    align-self: flex-start;\n}\n\n.ask-consent-page .personal-data-section-title,\n.ask-consent-page .technical-data-section-title {\n    display: inline;\n    /* font-weight: bold; */\n}\n\n.ask-consent-page .personal-data-description,\n.ask-consent-page .technical-data-description {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.ask-consent-page .important-button {\n    margin-top: 25px;\n    padding: 0 30px;\n}\n\n.ask-consent-page ul {\n    margin: 0;\n}\n\n.ask-consent-page .content > div:not(:first-child):not(:last-child) {\n    margin-top: 20px;\n}\n\n.ask-consent-page .footer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.ask-consent-page .flexy-space {\n    flex-grow: 1;\n    min-width: 10px;\n}\n\n.ask-consent-page .disabled-state {\n    opacity: 0.5;\n}\n\n/* \n    PermissionsRejectedPage\n */\n.need-user-consent-page {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n    box-sizing: border-box;\n    width: 500px;\n}\n\n.need-user-consent-page > div:not(:first-child):not(:last-child) {\n    margin-top: 20px;\n}\n\n.consent-required-message {\n    text-align: justify;\n}\n\n.need-user-consent-page .title {\n    font-size: 24px;\n    /* font-weight: bold; */\n    cursor: default;\n    color: #4f5254;\n    color: var(--title-text-color);\n}\n\n.need-user-consent-page .footer {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n}\n\n.need-user-consent-page .flexy-space {\n    flex-grow: 1;\n    min-width: 10px;\n}\n\n.need-user-consent-page .normal-button {\n    padding: 0px 15px;\n    max-width: 300px;\n    white-space: normal;\n}",""])
},92292:function(){},94844:function(a,b,c){"use strict"
;var d=c(65760),e=c(18540),f=c(53707),g=c(66423),h=c(42285),i=c(5197),j=c(52965),k=c(78440);c(13117);const l=(0,e.pw)(),m=(0,
f.j8)(),n=(0,f.mV)(),o=(0,f.G5)(),p=(0,f.i0)();(0,k.uT)((async()=>{await l.Init(null),n.Init();const a=await(0,
d.d)(l,o,p,m,n,(0,g.S)(),(0,h.w)(),(0,i.T)(),(0,j.c)()),b=(0,k.f4)(null,null,null);await a.ShowUI(b)})(),"Popup:Init")},
10364:function(a,b,c){"use strict";c.d(b,{j:function(){return l}})
;var d=c(47333),e=c(67793),f=c(13113),g=c(78440),h=c(69893),i=c(4153),j=(c(13117),c(97514)),k=c(91764)._;function l(a){
const{service:b,viewApi:c,app:l}=a;let m=null;return{Create:async function(a,g){
const h=await c.LocalizeString("AboutPage_Title"),i=await c.LocalizeString("About_Version2"),r=await c.LocalizeString("About_Sync2"),s=await c.LocalizeString("Dialog_Label_Back"),t=await b.GetRFOnlineUserId(),u=t.userId,v=await l.GetLicenseInfoPresentation()
;let w=t.serverUrl||e.s8;(0,f.GG)(w)||(w="https://"+w);const x=(0,j.KZ)(),y=k("div",{className:"about-page unselectable"
},k("div",{className:"header-section"},k("div",{className:"header-back-button back-icon",role:"button",ariaLabel:s,onclick:n
}),k("div",{className:"header-text-section"},k("div",{className:"title-text"},h))),k("div",{className:"logo-section"},k("div",{
className:"logo robot-logo"}),k("div",{className:"logo name-logo"})),k("div",{className:"content"},k("div",{className:"text"
},i),k("div",{className:"text hint selectable"},"9.6.17.0"),k("div",{className:"text hint selectable"},x),k("div",{
className:"account-section"},k("div",{className:"hint user-section"},k("div",{className:"user-caption"},r),k("div",{
className:"text hint padding"},u)),(0,e.l5)(w)?null:k("div",{className:"hint"},k("div",{className:"text hint padding"},(0,
d.oC)(w))),k("div",{className:"hint license"},v)),k("div",{className:"flexy-space"}),k("div",{className:"social-section"
},k("div",{className:"icons-section"},k("div",{className:"icon twitter-icon",onclick:p}),k("div",{
className:"icon facebook-icon",onclick:o}))),k("div",{className:"roboform-link",onclick:q},"www.roboform.com"),k("div",{
className:"hint-text copyright-text"},"Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.")));return m=g,y},
OnAfterShow:function(){},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){}};function n(){(0,i.TT)(m)((0,h.JS)())
}function o(){return(0,g.fI)(c.OpenUrl({url:d.w2,newTab:!0,reuseExisting:!0},null)),l.ClosePopup()}function p(){return(0,
g.fI)(c.OpenUrl({url:d.po,newTab:!0,reuseExisting:!0},null)),l.ClosePopup()}function q(){return(0,g.fI)(c.OpenUrl({url:d.l$,
newTab:!0,reuseExisting:!1},null)),l.ClosePopup()}}},65760:function(a,b,c){"use strict";c.d(b,{d:function(){return I}});c(92292)
;var d=c(48798),e=c(61625),f=c(62172),g=c(37694),h=c(41699),i=c(9958),j=c(16007),k=c(56218),l=c(40364),m=c(62806),n=c(10637),o=c(10364),p=(c(47836),
c(78448)),q=c(80022),r=c(12072),s=c(23097),t=c(18939),u=c(3566),v=c(47333),w=c(95697),x=c(12131),y=c(67793),z=c(60954),A=c(95239),B=c(54811),C=c(70346),D=c(31173),E=c(69893),F=c(78440),G=c(4153),H=c(12190)
;c(13117);async function I(a,b,c,I,J,K,L,M,N){const O=await async function(b){for(let d=0;d<10;d++){try{
return await a.CallBackgroundScript("GetApplicationData",null,b)}catch(c){}await(0,F.xy)(1e3)}throw(0,E.XB)()}(null),P=await(0,
z.y)(a);let Q=null;const R=Object.assign(Object.assign({},P.commands),{ShowLoginUI:O.standalone?a=>(0,
G.TT)(Q).ShowSALoginPage(a):a=>(0,G.TT)(Q).ShowNMLoginPage(P.commands.ShowLoginUI,a)})
;return Q=function(a,b,c,z,I,J,K,L,M,N,O,P){const Q=b,R=c,S=z;let T;const U=I,V=K,W=(0,v.au)(Q.data,S),X=(0,
B.I9)(Q.data,Q.service,Q.rfo,J,S),Y=(0,A.BO)(z),Z=M,aa=N,ab=O,ac=P,ad=(0,t.n)(),ae=(0,t.n)()
;let af=!1,ag=!1,ah=!1,ai=!1,aj=!1,ak=!0,al=!1,am=!0,an=!1,ao=!1,ap=null,aq=null,ar=null,as=null,at=!0;const au={Init:av,
UnInit:aw,ShowUI:ax,IsAccountCreationAllowed:ay,IsAccountCompanyAdmin:az,GetLicenseInfoPresentation:aA,
GetUpgradeMessagesUIInfo:aB,HaveActivePaidConsumerLicense:aC,GetUsageInfoListItems:aH,ShouldActivateFillUI:aI,
GetFillOptionsListForCurrentTab:aJ,GetAutoFunctionsModesForCurrentTab:aK,BlockAutoFunctionsForCurrentTabDomain:aL,
ShowBlockedAutoFillForCurrentPage:aM,GetCurrentTabUrl:aG,GetFoldersList:aO,GetAllIdentities:aN,SearchItemsInFolder:aP,
GetSearchEngines:aQ,GetKeyboardShortcuts:aR,CopyTextToClipboardWithAutoClear:aS,ShowInitialPage:aY,ShowMainPage:aX,
ClosePopup:aT,CloseNativeMenu:aU,SetPersistentPage:a5,GetPersistentPage:a6,ClearPersistentPage:a7,RestorePersistentPage:a8,
ShowNativeItemsList:a9,LoginItemAction:be,SafenoteItemAction:bf,BookmarkItemAction:bg,ShowSaveFormsPage:ba,
ShowAskForUpgradePage:a2,GetCommandsForMainDotsMenu:bb,IsNativeUIAvailable:aD,IsNativeApp:aE,GetPopupRect:bn,
GetPopupScreenRect:bo,GetPopupMonitorRect:bp,IsReportAnIssueSupported:aF,ShowSALoginPage:aZ,ShowNMLoginPage:a0};return au
;async function av(){var b,c,d,e,f,g,h,i,j;aw(),T=await U.GetPlatformOS(),(0,G.TT)(Q.data).onDataChanged.Add(bj),
Q.options.AddOnChangeListener(bk),S.storage.AddOnChangeListener(bl),S.onNotificationFromBackgroundScript.Add(bi),
ag=null!==(b=a.standalone)&&void 0!==b&&b,ah=null!==(c=a.needNativeRfUpgrade)&&void 0!==c&&c,
ai=null!==(d=a.desktopAppIsUpdating)&&void 0!==d&&d,aj=null!==(e=a.desktopAppIsClosed)&&void 0!==e&&e,
ak=null!==(f=a.useNativeMenus)&&void 0!==f&&f,al=null!==(g=a.isNativeApp)&&void 0!==g&&g,
am=null!==(h=a.isReportAnIssueSupported)&&void 0!==h&&h,an=null!==(i=a.isBreachMonSupported)&&void 0!==i&&i,
ao=null!==(j=a.setupAccountOnStartPage)&&void 0!==j&&j,ae.Init(document.body,null,[]),ad.Init((0,
G.TT)(document.getElementById("main")),(0,u.Eg)(),[()=>{document.body.classList.remove("body-initial-size")}]),
window.matchMedia("(prefers-color-scheme: dark)").matches?(ae.SetTheme("dark-theme"),
ad.SetTheme("dark-theme")):(ae.SetTheme("light-theme"),ad.SetTheme("light-theme")),ae.SetPlatformSpecificStyles(T),
ad.SetPlatformSpecificStyles(T),W.Init(),X.Init(),document.body.addEventListener("mousemove",bm,!1),
window.oncontextmenu=function(){return!1},ai||aj||(an&&(ar=(0,C.v)(S),await ar.Init(),as=ar),await(0,v.sJ)(Q.options,S,ag)),
af=!0}function aw(){af&&(ar&&(ar.UnInit(),ar=null,as=null),X.UnInit(),W.Init(),S.onNotificationFromBackgroundScript.Remove(bi),
(0,G.TT)(Q.data).onDataChanged.Remove(bj),Q.options.RemoveOnChangeListener(bk),S.storage.RemoveOnChangeListener(bl),
document.body.removeEventListener("mousemove",bm),window.oncontextmenu=null,af=!1)}async function ax(a){const b=await a6()
;return b?a8(b,a):aY(a)}async function ay(){if(ag)return!0;const a=await(0,G.TT)(Q.policies).Get({SelfHostedServer:!1,
CustomEverywhereServiceLocation:""}),b=a.SelfHostedServer,c=a.CustomEverywhereServiceLocation;return!b&&!c}async function az(){
return(await(0,G.TT)(Q.options).Get({AccountCompanyAdmin:!1})).AccountCompanyAdmin}async function aA(){
return S.CallBackgroundScript("GetLicenseInfoPresentation",null,null)}async function aB(a){
return S.CallBackgroundScript("GetUpgradeMessagesUIInfo",null,a)}async function aC(){
return S.CallBackgroundScript("HaveActivePaidConsumerLicense",null,null)}function aD(){return ak}function aE(){return al}
function aF(){return am}async function aG(a){return S.CallBackgroundScript("GetCurrentTabUrl",null,a)}async function aH(a,b,c){
return S.CallBackgroundScript("GetUsageInfoListItems",null,c,a,b)}async function aI(a){
return S.CallBackgroundScript("ShouldActivateFillUI",null,a)}async function aJ(a){
return S.CallBackgroundScript("GetFillOptionsListForCurrentTab",null,a)}async function aK(a){
return S.CallBackgroundScript("GetAutoFunctionsModesForCurrentTab",null,a)}async function aL(a,b,c){
return S.CallBackgroundScript("BlockAutoFunctionsForCurrentTabDomain",null,c,a,b)}async function aM(a){
return S.CallBackgroundScript("ShowBlockedAutoFillForCurrentPage",null,a)}async function aN(a){
return S.CallBackgroundScript("GetAllIdentities",null,a)}async function aO(a){
return S.CallBackgroundScript("GetFoldersList",null,a)}async function aP(a,b,c,d){
return S.CallBackgroundScript("SearchItemsInFolder",null,d,a,b,c)}async function aQ(){
return S.CallBackgroundScript("GetSearchEngines",null,null)}async function aR(){
return S.CallBackgroundScript("GetKeyboardShortcuts",null,null)}async function aS(a,b){return await Z.WriteText(a),
S.CallBackgroundScript("ClearTextInClipboardAfterDelay",null,null,a,b)}function aT(){window.close()}async function aU(){
if(aD())return S.CallBackgroundScript("CloseNativeMenu",null,null)}async function aV(a,b){
const c=await S.storage.GetValue("ServerUrl",y.s8)
;if((null==a?void 0:a.companyInvitations)&&a.companyInvitations.length>0&&await d(a.companyInvitations,c,b),
null==a?void 0:a.emergencyAccess){const d=a.emergencyAccess,g=d.filter((a=>1===a.status&&1===a.accessStatus))
;g.length>0&&await e(g,c,b);const h=d.filter((a=>void 0===a.status||0===a.status));h.length>0&&await f(h,c,b)}
if(null==a?void 0:a.accounts){const d=a.accounts.filter((a=>!a.accepted&&!a.company));d.length>0&&await g(d,c,b)}
if(null==a?void 0:a.files){const d=a.files.filter((a=>!a.accepted));d.length>0&&await l(d,c,b)}async function d(a,b,c){
const d=(0,k.Y)({viewApi:S,rfCompany:(0,G.TT)(Q.enterprise),serverUrl:b,invitations:a});await ad.ShowViewAndWaitResult(d,!1,c)}
async function e(a,b,c){const d=(0,j.N)({requests:a,ea:(0,G.TT)(Q.emergencyAccess),viewApi:S,serverUrl:b})
;await ad.ShowViewAndWaitResult(d,!1,c)}async function f(a,b,c){const d=(0,j.N)({invitations:a,ea:(0,G.TT)(Q.emergencyAccess),
viewApi:S,serverUrl:b});await ad.ShowViewAndWaitResult(d,!1,c)}async function g(a,b,c){const d=(0,h.j)({folders:a,sharing:(0,
G.TT)(Q.sharing),viewApi:S,serverUrl:b});await ad.ShowViewAndWaitResult(d,!1,c)}async function l(a,b,c){const d=(0,i.c)({
files:a,sharing:(0,G.TT)(Q.sharing),viewApi:S,serverUrl:b});await ad.ShowViewAndWaitResult(d,!1,c)}}async function aW(a,b){
const c=(0,l.U)(a,S);return ad.ShowViewAndWaitResult(c,!1,b)}async function aX(){const a=(0,d.H)({app:au,viewNavigator:ad,
service:Q.service,data:Q.data,dataItemDisplayNameProvider:W,initialIdentityProvider:X,usageInfo:Q.usageInfo,commands:R,
securityWarningsManager:Q.securityWarningsManager,sharing:Q.sharing,passwordsHistory:Q.passwordsHistory,breachMon:as,
options:Q.options,settings:Q.settings,policies:Q.policies,view:S,extensionInfo:V,os:await U.GetPlatformOS(),clipboard:Z,
screenshot:aa,http:ab,rng:ac,canUseWin32LoginsAndBookmarks:!ag&&"win"===T});return ad.ShowView(a,!1)}async function aY(a){
if(ah)return ad.ShowView((0,n.cB)(S,(()=>{(0,F.fI)(S.OpenUrl({newTab:!0,reuseExisting:!0,url:v.Ui},null)),au.ClosePopup()})),!1)
;if(ai||aj){const b=(0,e.A)();await ad.ShowView(b,!1)
;if(!await S.CallBackgroundScript("StartDesktopAppIfInstallationOrUpdateCompleted",null,a))return ai?ad.ShowView((0,s.J)({
localization:S}),!1):void aT();an&&(ar=(0,C.v)(S),await ar.Init(),as=ar),await(0,v.sJ)(Q.options,S,ag)}try{if(ag){
const f=await bw(a),g=await bv(a);if(f)return await R.OpenStartPage(null),void aT();g&&await bx(null,a);let h=!1
;const i=Q.service.GetGlobalStatus();if(!i.m_connected_to_server||!i.m_logged_in||!i.m_storage_connected){let f=null
;if(Q.service.GetGlobalStatus().m_connected_to_server)try{await(0,F.mC)((async()=>Q.service.Login({},a)),1e3,(()=>((0,
F.fI)(ad.ShowView((0,e.A)(),!0)),()=>{})))}catch(c){if((0,E.NR)(c))try{
await(0,q.V)(b,c.authInfo,null,bz(c.authInfo),S).Execute((0,F.f4)(null,null,null)),await a7(),await Q.service.Login({},a),h=!0
}catch(d){await a7(),f=await a1(a),h=!0}else if((0,x.tM)(c,15)){if(2===await a3())return a2(!1,a)}else(0,
x.u7)(c)?await bh():(f=await a1(a),h=!0)}else f=await a1(a),h=!0;const g=await a3();if(2===g)return a2(!1,a);if(0===g){
const b=await bv(a);if(await bw(a))return await R.OpenStartPage(null),void aT();b&&await bx(f,a)}}const j=await a3()
;if(2===j)return a2(!1,a);if(0===j){const b=await Q.service.GetSyncPendingItems(a);await aV(b,a)}const k=await bt(a)
;if(k.length>0){const b=await aW(k,a);if(0===b)await bu(k,a);else if(1===b){const b=(0,e.A)();await ad.ShowView(b,!1),
await bq(a)}}if(h&&await bh(),0===j){const b=await br();b&&await by(b,a)}}else{const b=Q.service.GetGlobalStatus()
;b.m_connected_to_server&&b.m_logged_in&&b.m_storage_connected||await R.ShowLoginUI(a);if(2===await a3())return a2(!1,a)}
}catch(c){if(!(0,x.tM)(15))throw c;if(2===await a3())return a2(!1,a)}return void await aX()}async function aZ(a){
await a1(null!=a?a:(0,F.f4)(null,null,null))}async function a0(a,b){const c=(0,e.A)();return await ad.ShowView(c,!1),(0,
F.W0)((async(b,c,d)=>{Q.data.onDataChanged.Add(e);try{await a(d)}catch(f){Q.data.onDataChanged.Remove(e)}function e(a){let c=!1
;for(const b of a){switch(b.event){case 2:case 3:case 1:c=!0}if(c)break}if(c){const a=Q.service.GetGlobalStatus()
;a.m_connected_to_server&&a.m_storage_connected&&a.m_logged_in&&((0,G.TT)(Q.data).onDataChanged.Remove(e),b())}}}),null!=b?b:(0,
F.f4)(null,null,null))}async function a1(a){var c;if(Q.service.GetGlobalStatus().m_connected_to_server){
const d=await Q.service.GetRFOnlineUserId();at=!1;const e=await Q.rfo.GetLoginMethod(d.userId,a);if("sso"===e.type){const h=(0,
g.C8)("login-page",S,d.userId,null!==(c=(0,v.sU)(d.serverUrl))&&void 0!==c?c:"",(0,
v.ju)("Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved."),{async SSOLogin(c){for(;;)try{
await Y.LoginToAccountViaSSO(c,(0,G.TT)(e.sso),!1,null,a)}catch(d){if((0,E.NR)(d)){try{await(0,
q.V)(b,d.authInfo,null,bz(d.authInfo),S).Execute(a);continue}catch(d){await a7(),await ad.ShowViewAndWaitResult(f,!0,a)}
return null}if((0,x.tM)(d,15))return null;if(!(0,x.u7)(d))throw d;await bh()}},ChangeAccount:async()=>{
await R.ShowAccountSetupDialog({rfoServerUrl:d.serverUrl}),aT()}});return await ad.ShowViewAndWaitResult(h,!0,a),null}
const f=(0,g.cx)("login-page",!0,(0,v.ju)("Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved."),!1,{
GetAccountDisplayInfo:async()=>{var a;return{userId:d.userId,serverTitle:null!==(a=(0,v.sU)(d.serverUrl))&&void 0!==a?a:""}},
OnLogin:async(a,c)=>{try{await Q.service.Login({email:d.userId,password:a},c)}catch(e){if((0,E.NR)(e)){try{await(0,
q.V)(b,e.authInfo,null,bz(e.authInfo),S).Execute((0,F.f4)(null,null,null)),await a7(),await Q.service.Login({email:d.userId,
password:a},c)}catch(e){await a7(),await ad.ShowViewAndWaitResult(f,!0,c)}return a}if((0,x.tM)(e,15))return a;if(!(0,
x.u7)(e))throw e;await bh()}return a},onForgotPassword:async()=>{await S.OpenUrl({newTab:!1,url:v.i0},null),aT()},
onChangeAccount:async()=>(await R.ShowAccountSetupDialog({rfoServerUrl:d.serverUrl}),aT(),null)
},S,Z),h=await ad.ShowViewAndWaitResult(f,!0,a);return at=!0,h}return await R.OpenStartPage(null),aT(),null}
async function a2(a,b){const c=await(0,G.TT)(Q.options).Get({AccountEnterprise:!1,AccountCompanyAdmin:!1,AccountLicenseTrial:!1,
AccountClientReadOnly:!1,AccountClientBlocked:!1,AccountOneFreeDevice:!1,AccountCanSwitchToFreeMode:!1,
AccountCanSetFreeDevice:!1,AccountFreeDeviceSwitchesLeft:0,AccountInitialFreeDeviceSwitch:!1,AccountOneFreeDeviceId:"",
AccountOneFreeDeviceName:"",AccountCanSetReadonlyDevice:!1,AccountReadOnlyDevicesLimitReached:!1})
;return!c.AccountEnterprise||c.AccountCompanyAdmin||c.AccountCanSwitchToFreeMode||c.AccountCanSetFreeDevice||c.AccountCanSetReadonlyDevice?ad.ShowViewAndWaitResult((0,
n.J_)(!0,a,c,S,{async Upgrade(a){await R.OpenPaymentPage({action:"buy"},a),au.ClosePopup()},async Renew(a){
await R.OpenPaymentPage({action:"renew"},a),au.ClosePopup()},async InstallDesktop(a){await R.OpenSwitchToDesktopPage(a),
au.ClosePopup()},async MakeThisDeviceFree(a){await(0,G.TT)(Q.rfo).UpdateUserDevices({devices:[{thisDevice:!0,freeDevice:!0}]
},a),(0,F.fI)(R.SyncInBackground(null))},async MakeThisDeviceReadOnly(a){await(0,G.TT)(Q.rfo).UpdateUserDevices({devices:[{
thisDevice:!0,readOnly:!0}]},a),(0,F.fI)(R.SyncInBackground(null))},showError:null}),!1,b):ad.ShowViewAndWaitResult((0,n.sG)({
showBackButton:a,viewApi:S}),!1,b)}async function a3(){return(0,w.z)(await a4())}async function a4(){return(0,
G.TT)(Q.options).Get({AccountClientReadOnly:!1,AccountClientBlocked:!1})}async function a5(a){return S.sessionStorage.Set({
"persistent-popup-page":a})}async function a6(){return(await S.sessionStorage.Get({"persistent-popup-page":null
}))["persistent-popup-page"]}async function a7(){return S.sessionStorage.Remove("persistent-popup-page")}async function a8(a,c){
if("otp"===a.m_type){if(at=!1,!a.m_otp_data)return void await aY(c)
;const e=a.m_otp_data.m_otp_info,f=a.m_otp_data.m_otp_dialog_params;try{await(0,q.V)(b,e,f,bz(e),S).Execute((0,
F.f4)(null,null,null)),await a7(),await Q.service.Login({},c)}catch(d){await a7(),await a1(c)}return at=!0,aY(c)}throw(0,
x.rb)(9,"Unknown page type: "+a.m_type)}async function a9(a,b){if(aD()){const c=bn(),d=bo(),e=bp()
;2===b?await S.CallBackgroundScript("ShowNativeBookmarksList",null,null,(0,
H.gv)(a),c,d,e):7===b?await S.CallBackgroundScript("ShowNativeSafenotesList",null,null,(0,
H.gv)(a),c,d,e):5===b?await S.CallBackgroundScript("ShowNativeIdentitiesList",null,null,(0,
H.gv)(a),c,d,e):await S.CallBackgroundScript("ShowNativeLoginsList",null,null,(0,H.gv)(a),c,d,e)}else;}async function ba(a){
const b=await S.CallBackgroundScript("CollectSaveFormsData",null,a),c=(0,f.wn)({view:S,service:Q.service,dataStorage:Q.data,
usageInfo:Q.usageInfo,settings:Q.settings,policies:Q.policies,commands:R,passwordHistory:Q.passwordsHistory,data:b})
;return ad.ShowViewAndWaitResult(c,!0,a)}async function bb(a){const c=await Q.policies.Get({NoSecurityCenter:!1,
DisableEmergencyAccess:!1,DisableSync:!1,NoPasscards:!1,NoBookmarks:!1,DisableCreateLogins:!1,DisableCreateBookmarks:!1,
SelfHostedServer:!1,DisableLogoff:!1}),d=await(0,G.TT)(Q.options).Get({AccountEnterprise:!1,AccountEnterpriseLicenseActive:!1,
AccountCompanyAdmin:!1,AccountGroupManager:!1,AccountLicenseActive:!1,AccountLicenseTrial:!1,AccountClientBlocked:!1,
AccountClientReadOnly:!1}),f=0!==(0,w.z)(d)?await S.LocalizeString("Menu_BlockedItem_Upgrade"):void 0,g=[];g.push({
title:await S.LocalizeString("Cmd_Password_Generator_Flat"),imageClass:"command-generate-icon",blockedText:f,
onCommand:bc((async(a,b)=>{const c=(0,m.Ms)({view:S,options:Q.options,settings:Q.settings,passwordsHistory:Q.passwordsHistory,
commands:R,clipboard:Z,http:ab,rng:ac,isNativeApp:al});await ad.ShowViewAndWaitResult(c,!0,b)}))}),g.push({
title:await S.LocalizeString("Cmd_Authenticator"),imageClass:"command-authenticator-icon",blockedText:f,
onCommand:bc((async(a,b)=>{await R.OpenAuthenticator(null),aT()}))}),g.push({
title:await S.LocalizeString("Cmd_SharingCenter_Flat"),imageClass:"command-sharing-center-icon",blockedText:f,
onCommand:bc((async(a,b)=>{await R.OpenSharingCenter({direction:"shared-with-me"}),aT()}))}),c.NoSecurityCenter||g.push({
title:await S.LocalizeString("Cmd_PasswordAuditRun_Key"),imageClass:"command-security-center-icon",blockedText:f,
onCommand:bc((async(a,b)=>{await R.OpenSecurityCenter({view:"all"}),aT()}))}),c.DisableEmergencyAccess||g.push({
title:await S.LocalizeString("Cmd_EmergencyAccess_Key"),imageClass:"command-emergency-access-icon",blockedText:f,
onCommand:bc((async(a,b)=>{await R.OpenEmergencyAccess({direction:"my-contacts"}),aT()}))}),al&&g.push({
title:await S.LocalizeString("Cmd_OpenDesktopEditor"),imageClass:"command-desktop-editor-icon",onCommand:async(a,b)=>{
await R.OpenDesktopEditor(b),aT()}}),g.push("separator"),!ag&&c.DisableSync||g.push({
title:await S.LocalizeString("Cmd_ToolBarSync"),imageClass:"command-sync-icon",hideMenuAfterExecution:!!ag,
onCommand:async(a,b)=>{if(!ag)return await R.StartSyncWithUI({viewRect:bn(),screenRect:bo(),monitorRect:bp()},b),aT()
;a.UpdateIcon(null,"command-sync-icon sync-progress-action",null),a.UpdateText(await S.LocalizeString("RfSyncProgress_Syncing"))
;try{await bq(b)}catch(c){if((0,E.r5)(c,E.rS)||(0,E.r5)(c,E.JI))(0,F.fI)(async function(){at=!1,await a1(b),at=!0
;const a=await a3();if(0!==a){const a=await bv(b);if(await bw(b))return await R.OpenStartPage(null),void aT()
;a&&await bx(null,b)}if(await bh(),0!==a){const a=await Q.service.GetSyncPendingItems(b);await aV(a,b)}const c=await bt(b)
;if(c.length>0){const a=await aW(c,b);if(0===a)await bu(c,b);else if(1===a){const a=(0,e.A)();await ad.ShowView(a,!1),
await bq(b)}}await aX()}());else{if(!(0,x.tM)(c,15))throw c;(0,F.fI)(a2(!1,b))}}finally{
a.UpdateIcon(null,"command-sync-icon",null),a.UpdateText(await S.LocalizeString("Cmd_ToolBarSync"))}}}),g.push({
title:await S.LocalizeString("Cmd_Settings_Flat"),imageClass:"command-settings-icon",onCommand:async(a,b)=>{
await R.OpenExtensionSettings({newTab:!0,reuseExisting:!0},b),aT()}
}),d.AccountEnterprise&&(d.AccountCompanyAdmin||d.AccountGroupManager)&&g.push({
title:await S.LocalizeString("Cmd_Sync_OpenAdminCenter"),imageClass:"command-admin-center-icon",blockedText:f,
onCommand:bc((async(a,b)=>{const c=await Q.service.GetRoboFormAccountInfo(b);return await R.OpenAdminCenter({view:"dashboard",
companyCreatedTime:null==c?void 0:c.createdTime},b),aT()}))}),g.push({title:await S.LocalizeString("Cmd_RunImport_Flat"),
imageClass:"command-import-icon",blockedText:f,onCommand:bc((async(a,b)=>{await R.ShowImportDialog(!1),aT()}))}),al||g.push({
title:await S.LocalizeString("Cmd_ScanQRCode_Key"),imageClass:"command-qr-scan-icon",blockedText:f,onCommand:async(a,b)=>{
const c=await aa.CaptureScreenshotForActiveTabAsDataUrl()
;if(!c)throw(0,E.ZU)(E.V2,await S.LocalizeString("Cmd_ScanQRCode_CouldNotCaptureScreenShot",null,"Could not capture screenshot"))
;const d=await(0,D.zC)(c,null,b)
;if(!d)throw(0,E.ZU)(E.V2,await S.LocalizeString("Cmd_ScanQRCode_CouldNotCaptureScreenShot",null,"Could not capture screenshot"))
;await R.ScanQRCode(d,null,b),aT()}});const h=T;ag?"win"!==h&&"mac"!==h||g.push({
title:await S.LocalizeString("SA_LimitedMode_LinkRF_Text"),imageClass:"command-install-icon",onCommand:async(a,b)=>{
await R.OpenSwitchToDesktopPage(b),aT()}}):"win"===h&&g.push({title:await S.LocalizeString("Cmd_OpenDesktopEditor"),
imageClass:"command-desktop-editor-icon",onCommand:async(a,b)=>{await R.OpenDesktopEditor(b),aT()}}),g.push("separator")
;const i=await bd();g.push({title:await S.LocalizeString("Cmd_Help_Flat"),imageClass:"command-help-icon",type:"submenu",
submenu:i}),d.AccountEnterprise&&d.AccountEnterpriseLicenseActive||d.AccountLicenseActive&&!d.AccountLicenseTrial||g.push({
title:await S.LocalizeString("Cmd_License_BuyNow"),imageClass:"command-upgrade-icon",onCommand:async(a,b)=>{
await R.OpenPaymentPage({action:"buy"},b),aT()}});let j=g.length;if(!c.DisableLogoff){const a=g.push({
title:await S.LocalizeString("Cmd_Logoff_Flat"),imageClass:"command-logoff-icon",onCommand:async(a,b)=>{
await Q.service.Logoff(b),aT()}});j=a-1}return d.AccountEnterprise||c.SelfHostedServer||(0,F.fI)((async()=>{
await b.rfo.IsReferralsDataAvailable(null)&&(g.splice(j,0,{title:await S.LocalizeString("Cmd_RenewalRewards_Flat"),
imageClass:"command-renewal-rewards-icon",onCommand:async(a,b)=>{await R.OpenSettingsPage(null,10,b),aT()}}),a.CallAllSync())
})()),al&&(g.push("separator"),g.push({title:await S.LocalizeString("Mac_Menu_App_QuitRoboForm"),imageClass:"command-quit-icon",
onCommand:async(a,b)=>{await R.QuitRoboForm(b),aT()}})),g}function bc(a){return async(b,c)=>{const d=await a3()
;return 0!==d?a2(1===d,c):a(b,c)}}async function bd(){const a=await Q.policies.Get({SelfHostedServer:!1}),b=!1,c=[];c.push({
title:await S.LocalizeString("Cmd_Help_Manual_Key"),onCommand:async(a,b)=>{await S.OpenUrl({newTab:!0,reuseExisting:!1,url:(0,
v.nF)("manual",await I.GetPlatformOS())},b),aT()}}),c.push({title:await S.LocalizeString("Cmd_Help_FaqAll_Key"),
onCommand:async(a,b)=>{await S.OpenUrl({newTab:!0,reuseExisting:!1,url:v.qP},b),aT()}}),b||c.push({
title:await S.LocalizeString("Cmd_Help_HomePage_Key"),onCommand:async(a,b)=>{await S.OpenUrl({newTab:!0,reuseExisting:!1,
url:v.l$},b)}}),c.push("separator"),c.push({title:await S.LocalizeString("Cmd_Help_ForgotPassword_Key"),onCommand:async(a,b)=>{
await S.OpenUrl({newTab:!1,url:v.i0},b),aT()}}),c.push("separator");let d=!1;return a.SelfHostedServer||(c.push({
title:await S.LocalizeString("Cmd_Help_ContactSupport_Key"),onCommand:async(a,b)=>(await R.ContactSupport({
reportType:"ContactSupport"},b),aT())}),am&&c.push({title:await S.LocalizeString("Popup_ReportAnIssue_Command_Text"),
onCommand:async(a,b)=>(await R.ContactSupport({reportType:"WebPage"},b),aT())}),d=!0),ag||"win"!==T||(c.push({
title:await S.LocalizeString("Cmd_Help_ProblemStepsRecorder_Key"),onCommand:async(a,b)=>(await R.RunProblemStepsRecorder(),aT())
}),d=!0),d&&c.push("separator"),al&&(c.push({title:await S.LocalizeString("Cmd_Help_UpdateCheck_Key"),onCommand:async(a,b)=>{
await R.CheckForUpdate(b),aT()}}),c.push("separator")),c.push({title:await S.LocalizeString("Cmd_About_Key"),
onCommand:async(a,b)=>{const c=(0,o.j)({viewApi:S,service:Q.service,app:au});await ad.ShowViewAndWaitResult(c,!0,b)}}),c}
async function be(a,b,c){if(b){const b=await Q.data.GetInfo(a,0,null),d=await(0,G.TT)(Q.policies).Get({
DisableFillWithoutSubmit:!1}),e=await(0,G.TT)(Q.options).Get({MatchingPasscardsCausesSubmit:!0,FillEmptyFieldsOnlyPasscard:!1
}),f=c||e.MatchingPasscardsCausesSubmit||d.DisableFillWithoutSubmit||b.hidePasswords||!1;(0,F.fI)(R.FillForms({path:a,
identity:!1,submit:f,fillEmptyFieldsOnly:e.FillEmptyFieldsOnlyPasscard},null))}else{const b=await(0,G.TT)(Q.options).Get({
ToolbarOpensNewWindow:!0});(0,F.fI)(R.GoFillSubmit({navigate:!0,path:a,submit:!0,newTab:b.ToolbarOpensNewWindow},null))}
return aT()}async function bf(a){return(0,F.fI)(R.OpenFile(a,{mode:"edit"})),aT()}async function bg(a){const b=await(0,
G.TT)(Q.options).Get({ToolbarOpensNewWindow:!0});return(0,F.fI)(R.GoTo(a,{newTab:b.ToolbarOpensNewWindow})),aT()}
async function bh(){
await Q.options.GetValue("OpenStartPageOnLoginFromExtension",!0)&&await S.CallBackgroundScript("OpenStartPageOnLoginFromPopup",null,null)
}function bi(a,...b){if("ClosePopupToolbar"===a)aT()}function bj(a){for(const b of a)switch(b.event){case 10:case 11:
if(at)return void aT()}}async function bk(a){var b,c;let d=!1;for(const e in a)switch(e){case"AccountClientReadOnly":
case"AccountClientBlocked":{const f=null!==(b=a[e].oldValue)&&void 0!==b&&b
;(null!==(c=a[e].newValue)&&void 0!==c&&c)!==f&&(d=!0)}}d&&(0,F.fI)(async function(){2===await a3()?await a2(!1,(0,
F.f4)(null,null,null)):await aY((0,F.f4)(null,null,null))}())}async function bl(a){
for(const b in a)if("UseNativeMenus"===b)ag||(ak=void 0===a[b].newValue||a[b].newValue)}function bm(a){
if(void 0!==a.screenX&&void 0!==a.screenY&&void 0!==a.clientX&&void 0!==a.clientY&&0!==a.screenX&&0!==a.screenY){
ap=a.screenX-a.clientX,aq=a.screenY-a.clientY;{const a=window.screen.availTop
;window&&window.screen&&window.screen.height&&a&&window.devicePixelRatio&&(window.devicePixelRatio>1&&a>100&&a<500||a<-100&&a>-500)&&(aq-=a)
}}}function bn(){return(0,H.gv)(document.body.getBoundingClientRect())}function bo(){
if((null===ap||null===aq)&&!ag&&"mac"===T&&top){
const a=void 0!==top.screenLeft?top.screenLeft:top.screenX,b=void 0!==top.screenTop?top.screenTop:top.screenY
;let c=(top.outerWidth-top.innerWidth)/2;0;const d=a+c,e=b+c,f=(0,H.gv)(document.body.getBoundingClientRect());return(0,
H.DS)(f,d,e)}if(null!==ap&&null!==aq){const a=(0,H.gv)(document.body.getBoundingClientRect());return(0,H.DS)(a,ap,aq)}}
function bp(){{const a=window.screen.availLeft;if(window&&window.screen&&a&&a>0&&void 0!==window.screen.availWidth){const b=bo()
;if(!b)return;const c=window.screen.width-a-window.screen.availWidth;return(0,H.DS)(b,c,0)}}}async function bq(a){at=!1
;const b=await R.SyncInBackground(a);if(!b)return;b.forceMasterPasswordChange&&await bx(null,a),await aV(b.pendingItems,a)
;const c=b.syncParts.filter((a=>!a.main&&3===a.syncStatus&&a.syncError));if(c.length>0){const b=await aW(c,a)
;if(0===b)await bu(c,a);else if(1===b){const b=(0,e.A)();await ad.ShowView(b,!1),await bq(a)}}}function br(){
return S.CallBackgroundScript("GetPendingItemDuplicates",null,null)}function bs(){
return S.CallBackgroundScript("ClearPendingItemDuplicates",null,null)}function bt(a){
return S.CallBackgroundScript("GetPendingSyncErrors",null,a)}function bu(a,b){
return S.CallBackgroundScript("ClearPendingSyncErrors",null,b,a)}function bv(a){
return S.CallBackgroundScript("ShouldForceMasterPasswordChange",null,a)}async function bw(a){try{
if((await Q.service.GetRoboFormAccountInfo(a)).loginMethodToSwitch)return!0}catch(b){}return!1}async function bx(a,b){
const c=await(0,B.dt)(Q.policies),d=await Q.service.GetRFOnlineUserId(),e={IsPasswordCompromised:async(a,b)=>{if(!ar)return!1
;const c=await ar.GetCachedUserDataBreaches({password:a},null,b);return!(!c||0===c.length)&&c.some((a=>1===a.m_type))},
WasNewMasterPasswordAlreadyUsed:async(a,b,c)=>{if(!await Q.options.GetValue("AccountEnterprise",!1))return!1
;const d=await Q.policies.GetValue("EnforceMPHistory",0);return 0!==d&&Q.service.WasNewMasterPasswordAlreadyUsed(a,b,d,c)},
ChangeMasterPassword:async(a,b,c)=>{await Q.rfo.ChangeAccountPassword(a,b,c),await Q.service.Login({email:d.userId,password:a
},c)},Login:async(a,b)=>{await Q.service.Login({email:d.userId,password:a},b)}};await ad.ShowViewAndWaitResult((0,
r.qz)(a,c,"login-page",e,S,b),!0,b)}async function by(a,b){
const c=(0,p.e)(S,Q.data,a.m_change_event,a.m_duplicates,a.m_item_icon_url);await ad.ShowViewAndWaitResult(c,!1,b),await bs()}
function bz(a){return{ShowConnectingScreen:b,ShowOtpScreen:c,ShowError:d};function b(a,b,c){return(0,F.Mj)({
action:async(d,e,f)=>{f.onTaskCancel.Add((a=>{e(a)}));const h=(0,g.iM)("login-page",c,a,b,S);await ad.ShowView(h,!0)}})}
async function c(b,c){await a5({m_type:"otp",m_otp_data:{m_otp_info:a,m_otp_dialog_params:b}});const d=(0,
g.sf)(b,"login-page",S,{onContextMenu:null});return ad.ShowViewAndWaitResult(d,!0,c)}async function d(a,b,c){const d=(0,
g.QK)("login-page",a,b,S);return ad.ShowViewAndWaitResult(d,!0,c)}}}(O,P,R,a,b,c,I,0,K,L,M,N),await Q.Init(),Q}},
56218:function(a,b,c){"use strict";c.d(b,{Y:function(){return h}});var d=c(47333),e=c(63956),f=c(4153),g=(c(13117),c(91764)._)
;function h(a){const{invitations:b,rfCompany:c,viewApi:h,serverUrl:i}=a;let j="",k=null,l=null,m=null,n=null,o=null,p=null
;const q=[];return{Create:async function(a,c){
const e=(0,d.sU)(i)||"",f=1===b.length?await h.LocalizeString("CompanyInvitationConfirmation_Title"):await h.LocalizeString("CompanyInvitationConfirmationMultiple_Title"),u=await h.LocalizeString("Cmd_Accept_Key"),v=1===b.length?await h.LocalizeString("SharedFolderSettings_RejectSharedFolder"):await h.LocalizeString("Cmd_RejectAll_Flat"),w=await h.LocalizeString("Cmd_Skip_Flat"),x=[]
;for(const[d,i]of b.entries()){
const a=i.name||i.companyId,b=await h.LocalizeString("CompanyInvitationToConfirm_WithSender_Info",[a]);let c;const e=g("div",{
className:"item-row"},c=g("input",{type:"radio",name:"radio",className:"item-radio",value:i.companyId,id:i.companyId,
checked:0===d,onchange:()=>{j=i.companyId}}),g("label",{className:"normal-text item-name-text",htmlFor:i.companyId},b))
;x.push(e),q.push(c)}b.length>0&&(j=b[0].companyId);const y=g("div",{
className:"company-invite-page setup-page receive-invite-page"},g("div",{className:"header-section"},g("div",{
className:"header-text-section"},g("div",{className:"title-text"},"RoboForm"))),p=g("div",{
className:"action-progress-overlay-circle size64 hidden"}),g("div",{className:"hint-text rfo-server-title-text"
},e||""),g("div",{className:"normal-text invite-text"},f),g("div",{className:"items-container"},x),o=g("div",{
className:"error-text"}),g("div",{className:"page-flexy-space"}),g("div",{className:"buttons-section"},g("div",{
className:"padding-div"}),l=g("input",{type:"button",className:"important-button normal-button",value:u,onclick:r
}),m=g("input",{type:"button",className:"regular-button normal-button",value:v,onclick:s}),n=g("input",{type:"button",
className:"regular-button normal-button",value:w,onclick:t})));return k=a,y},OnAfterShow:function(){},OnBeforeHide:function(){},
Focus:function(){(0,f.TT)(l).focus()},Dispose:function(){}};function r(){x(),(0,e.D$)((()=>async function(){try{
await c.JoinCompany(j,null)}catch(a){return void w((0,d.Qo)(a))}(0,f.TT)(k)()}()),y,500,u)}function s(){x(),(0,
e.D$)((()=>async function(){try{for(let a=0;a<b.length;a++){const d=b[a];await c.LeaveCompany(d.companyId,null)}}catch(a){
return void w((0,d.Qo)(a))}(0,f.TT)(k)()}()),y,500,u)}function t(){(0,f.TT)(k)()}function u(){return(0,
f.TT)(p).classList.remove("hidden"),v}function v(){(0,f.TT)(p).classList.add("hidden")}function w(a){(0,f.TT)(o).textContent=a}
function x(){(0,f.TT)(o).textContent=""}function y(){return A(l),A(m),A(n),q.forEach(A),z}function z(){B(l),B(m),B(n),
q.forEach(B)}function A(a){(0,f.TT)(a).setAttribute("disabled","disabled")}function B(a){(0,f.TT)(a).removeAttribute("disabled")
}}},19390:function(a,b,c){"use strict";c.d(b,{I:function(){return l}})
;var d=c(47333),e=c(4234),f=c(73863),g=c(4153),h=c(63956),i=c(69893),j=(c(13117),c(91764)._);const k=255;function l(a){
const{basePath:b,data:c,viewApi:l}=a;let m=null,n=null,o=null,p=null,q=null,r=null,s=null,t=null,u=null;let v="",w="",x="",y=""
;return{Create:async function(b,c){
const d=await l.LocalizeString("Cmd_NewFolder_Title"),e=await l.LocalizeString("NewSharedFolder_Title"),f=await l.LocalizeString("Cmd_Ok_Flat"),h=await l.LocalizeString("Cmd_Cancel_Flat"),i=await a.viewApi.LocalizeString("Dialog_Label_Back")
;v=await l.LocalizeString("NameInvalidCharacter_Error2"),w=await l.LocalizeString("WrongNameLenght_Error",[(0,g.bf)(k)]),
x=await l.LocalizeString("Cmd_NewFolder_Exist_Error"),y=await l.LocalizeString("AlreadyExists_Error2");const E=j("div",{
className:"create-folder-page unselectable"},u=j("div",{className:"action-progress-overlay-circle size48 hidden"}),j("div",{
className:"header-section"},j("div",{className:"header-back-button back-icon",onclick:D,role:"button",ariaLabel:i}),j("div",{
className:"header-text-section"},j("div",{className:"title-text"},d))),o=j("div",{className:"content"},j("div",{
className:"normal-text"},e),p=j("input",{className:"extension-normal-input",type:"text",value:"",onkeypress:z,oninput:A
}),q=j("div",{className:"error-text"})),j("div",{className:"page-flexy-space"}),r=j("div",{className:"bottom-section"},j("div",{
className:"button-padding"},t=j("input",{type:"button",className:"normal-button regular-button",value:h,onclick:C
})),s=j("input",{type:"button",className:"normal-button important-button",value:f,onclick:B})));return m=b,n=c,E},
OnAfterShow:function(){},OnBeforeHide:function(){},Focus:function(){(0,g.TT)(p).focus()},Dispose:function(){}};function z(a){
"Enter"===a.key&&B()}function A(){O()}function B(){O();const a=(0,g.TT)(p).value,j=(0,e.KF)(a,null);return j?j.length>k?(N(w),
void(0,g.TT)(p).focus()):void(0,h.D$)((()=>async function(a){const e=b+"/"+a;let h=null;try{h=await c.GetInfo(e,1,null)
}catch(j){if(!(0,i.r5)(j,i.Y$))return void N((0,d.Qo)(j))}if(h)return 8===h.type?N((0,f.FJ)(x,a)):N((0,f.FJ)(y,"Item",a)),
void(0,g.TT)(p).focus();try{await c.CreateFolder(e,null)}catch(j){return void N((0,d.Qo)(j))}(0,g.TT)(m)(a)}(j)),G,1e3,E):(N(v),
void(0,g.TT)(p).focus())}function C(){(0,g.TT)(n)((0,i.JS)())}function D(){(0,g.TT)(n)((0,i.JS)())}function E(){return(0,
g.TT)(u).classList.remove("hidden"),F}function F(){(0,g.TT)(u).classList.add("hidden")}function G(){return L(t),L(s),L(p),J(r),
J(o),window.addEventListener("mousedown",I,!0),H}function H(){M(t),M(s),M(p),K(r),K(o),
window.removeEventListener("mousedown",I,!0)}function I(a){a.preventDefault(),a.stopPropagation()}function J(a){(0,
g.TT)(a).classList.add("disabled-state")}function K(a){(0,g.TT)(a).classList.remove("disabled-state")}function L(a){(0,
g.TT)(a).setAttribute("disabled","disabled")}function M(a){(0,g.TT)(a).removeAttribute("disabled")}function N(a){(0,
g.TT)(q).innerText=a}function O(){(0,g.TT)(q).innerText=""}}},47287:function(a,b,c){"use strict";c.d(b,{f:function(){return l}})
;var d=c(47333),e=c(4234),f=c(97490),g=c(13113),h=c(63956),i=c(78440),j=c(69893),k=c(91764)._;function l(a,b,c,l,m){
const n=a,o=l.LocalizeString,p=(0,f.i2)(),q=(0,i.f4)(null,null,null);p.OnCleanup((()=>q.Cancel()));const[r,s]=(0,
f.Uw)(null),[t,u]=(0,f.Uw)(0);return{Create:async function(a,h){return k("div",{className:"delete-folder-page"},k("div",{
className:"header"},k("div",{className:"back-button",onclick:()=>h((0,j.JS)()),role:"button",
ariaLabel:await o("Dialog_Label_Back")}),k("div",{className:"title"},(0,g.XE)(n.path,!0,void 0))),n.sharedFolder&&!(0,
g.fA)(n.path)?n.sharedGroup?function(){return async a=>{const c=r(a);return[k("div",{className:"content"},k("div",{
className:"warning"},o("DeleteGroup_Confirmation",[(0,g.XE)(n.path,!0,void 0)])),null!==c?k("div",{className:"error-text"},(0,
d.Qo)(c)):null,k("div",{className:"flexy"}),k("div",{className:"footer"},k("input",{type:"button",
className:"normal-button regular-button",value:await o("Btn_No"),onclick:()=>h((0,j.JS)())}),k("input",{type:"button",
className:"normal-button important-button",value:await o("Btn_Yes"),onclick:()=>v(b)})))]};async function b(b){s(null),
await m.DeleteSharedFolder(n.path,b),a(!1)}}():function(){const b=(0,f.Q_)(p,{},e)[0];return async c=>{const e=b(c),f=r(c)
;return[k("div",{className:"content"},k("div",{className:"warning"
},void 0===e.m_revoke?e.m_error?"":o("Loading_Status_Text"):e.m_revoke?o("RejectSharedFolder_Consumer_WarningMessage",[(0,
g.XE)(n.path,!0,void 0)]):o("StartPage_Sharing_DeleteFolder_Confirmation2",[(0,
g.XE)(n.path,!0,void 0)])),null!==f||e.m_error?k("div",{className:"error-text"},(0,d.Qo)(null!=f?f:e.m_error)):null,k("div",{
className:"flexy"}),void 0!==e.m_revoke?k("div",{className:"footer"},k("input",{type:"button",
className:"normal-button regular-button",value:await o("Btn_No"),onclick:()=>h((0,j.JS)())}),k("input",{type:"button",
className:"normal-button important-button",value:e.m_revoke?await o("SharedFolderSettings_Remove_Me"):await o("Btn_Yes"),
onclick:()=>v(i)})):null)];async function i(b){var c
;s(null),e.m_revoke?await m.RejectSharedFolder(n.path,b):await m.DeleteSharedFolder(n.path,b),
a(null!==(c=e.m_revoke)&&void 0!==c&&c)}};async function e(a){try{
const b=await m.GetSharedFolderInfoAndRecipients(n.path,!0,a),d=await c.GetRFOnlineUserId();return{
m_revoke:b.info.sender!==d.userId&&b.info.senderEmail!==d.userId}}catch(b){return{m_error:b}}}}():function(){const c=(0,
f.Q_)(p,{},m)[0];return async a=>{const b=c(a),e=r(a);let f
;if(void 0===b.m_item_counts)f=b.m_error?await o("Cmd_Delete_Confirm",[await o("RoboformType_Folder"),(0,
g._p)(n.path)]):await o("Loading_Status_Text");else{const a=await i(b.m_item_counts)
;f=a?await o("Cmd_DeleteFolder_Confirm",[`'${(0,
g._p)(n.path)}'`,"\n"+a]):await o("Cmd_Delete_Confirm",[await o("RoboformType_Folder"),(0,g._p)(n.path)])}return[k("div",{
className:"content"},k("div",{className:"warning"},f),null!==e||b.m_error?k("div",{className:"error-text"},(0,
d.Qo)(null!=e?e:b.m_error)):null,k("div",{className:"flexy"}),k("div",{className:"footer"},k("input",{type:"button",
className:"normal-button regular-button",value:await o("Btn_No"),onclick:()=>h((0,j.JS)())}),k("input",{type:"button",
className:"normal-button important-button",value:await o("Btn_Yes"),onclick:()=>v(l)})))]};async function i(a){
const b=a.filter((a=>a.count>0)),c=[];for(const d of b){const a=`-${d.count.toString()} ${await o((0,e.Y5)(d.type,d.count>1))}`
;c.push(a)}return c.join("\n")}async function l(c){s(null),await b.DeleteFolder(n.path,c),a(!1)}async function m(a){try{return{
m_item_counts:await b.GetCounts(n.path,a)}}catch(c){return{m_error:c}}}}(),(i=t,async a=>{switch(i(a)){case 0:return[];case 1:
return[k("div",{className:"disable-ui-overlay"})];case 2:return[k("div",{className:"progress-overlay"}),k("div",{
className:"action-progress-overlay-circle"})]}}));var i},OnAfterShow:()=>{},OnBeforeHide:()=>{},Focus:()=>{},Dispose:function(){
p.Remove()}};function v(a){return(0,h.PQ)((()=>a((0,i.f4)(null,q,null))),(function(){return u(1),()=>u(0)}),500,(function(){
return u(2),()=>u(0)}),(a=>s(a)))}}},21132:function(a,b,c){"use strict";c.d(b,{C:function(){return j}})
;var d=c(47333),e=c(4234),f=c(63956),g=c(4153),h=c(69893),i=(c(13117),c(91764)._);function j(a){
const{itemInfo:b,viewApi:c,rfDataStorage:j,rfCommands:k}=a;let l=null,m=null,n=null,o=null,p=null,q=null,r=null;return{
Create:async function(d,f){
const g=(0,e.em)(b.path),h=(0,e.XE)(b.path,!1),j=await a.viewApi.LocalizeString("Dialog_Label_Back"),k=await c.LocalizeString("DeleteItemPage_Confirmation_Text",[h]),v=await c.LocalizeString("Btn_No"),w=await c.LocalizeString("Btn_Yes"),x=i("div",{
className:"delete-item-page unselectable"},r=i("div",{className:"action-progress-overlay-circle size48 hidden"}),i("div",{
className:"header-section"},i("div",{className:"header-back-button back-icon",onclick:u,role:"button",ariaLabel:j}),i("div",{
className:"header-text-section"},i("div",{className:"title-text"},i("div",{className:"text-ellipsis"},g)))),n=i("div",{
className:"content"},i("div",{className:"warning-section"},i("div",{className:"normal-text text-break-word"},k)),o=i("div",{
className:"error-text"}),i("div",{className:"page-flexy-space"}),i("div",{className:"bottom-section"},i("div",{
className:"button-padding"},q=i("input",{type:"button",className:"normal-button regular-button",value:v,onclick:t
})),p=i("input",{type:"button",className:"normal-button important-button",value:w,onclick:s}))));return l=d,m=f,x},
OnAfterShow:function(){},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){}};function s(){(0,
f.D$)((()=>async function(){(0,g.TT)(o).innerText="";try{
k?await(0,d.e2)(j,k.CheckItemDuplicates,b.path,null):await j.DeleteFile(b.path,null)}catch(a){return void((0,
g.TT)(o).innerText=(0,d.Qo)(a))}(0,g.TT)(l)()}()),x,1e3,v)}function t(){(0,g.TT)(m)((0,h.JS)())}function u(){(0,g.TT)(m)((0,
h.JS)())}function v(){return(0,g.TT)(r).classList.remove("hidden"),w}function w(){(0,g.TT)(r).classList.add("hidden")}
function x(){return A(p),A(q),(0,g.TT)(n).classList.add("disabled-state"),window.addEventListener("mousedown",z,!0),y}
function y(){B(p),B(q),(0,g.TT)(n).classList.remove("disabled-state"),window.removeEventListener("mousedown",z,!0)}
function z(a){a.preventDefault(),a.stopPropagation()}function A(a){(0,g.TT)(a).setAttribute("disabled","disabled")}
function B(a){(0,g.TT)(a).removeAttribute("disabled")}}},78448:function(a,b,c){"use strict";c.d(b,{e:function(){return n}})
;var d=c(47333),e=c(3566),f=c(4234),g=c(63956),h=c(13113),i=c(4153),j=c(69893),k=c(78440),l=(c(13117),c(91764)._)
;function m(a,b,c,m,n,o){const p=a.LocalizeString,q=b,r=c,s=m,t=n,u=o;let v=null,w=null,x=null,y=null,z=null,A=null,B=null
;const C=new Map;let D=new Set,E=!1;return{Create:async function(a,b){const c=await F();let d,f;switch(r.event){case 6:
d=await p("DuplicatesDialog_ApplyChanges_Button"),f=await p("DuplicatesDialog_Cancel_Button");break;case 8:
d=await p("DuplicatesDialog_Rename_Button"),f=await p("DuplicatesDialog_CancelRename_Button");break;case 7:
d=await p("DuplicatesDialog_Delete_Button"),f=await p("DuplicatesDialog_CancelDelete_Button");break;default:throw(0,
j.ZU)(j.V2,`Unknown change event ${r.event}`)}
const g=await p("DuplicatesDialog_Delete_Text"),h=await p("DuplicatesDialog_Undo_Text"),k=[];for(const i of s){let a,b,c=null
;if(7!==r.event){const a=l("div",{className:"delete-button",onclick:()=>{E||(a.classList.add("hidden"),
e.classList.remove("hidden"),d.classList.add("removed"),b.checked=!1,b.disabled=!0,H(i))}},g),e=l("div",{
className:"keep-button hidden",onclick:()=>{E||(e.classList.add("hidden"),a.classList.remove("hidden"),
d.classList.remove("removed"),b.disabled=!1,I(i))}},h);c=[a,e]}const d=l("div",{className:"duplicate"},l("div",{
className:"checkbox"},l("label",null,b=l("input",{type:"checkbox",onchange:()=>{Q(),L()}}),l("div",{className:"checkbox-check"
}),a=t?l("div",{className:"icon"}):null,l("div",{className:"checkbox-text"},(0,e.v$)(i,200,100,!0)),l("div",{className:"flexy"
}))),c);t&&a&&(a.style.backgroundImage=`url(${t})`),k.push(d);const f={m_el:d,m_checkbox_el:b};C.set(i,f)}return w=l("div",{
className:"duplicates-view"},x=l("div",{className:"title"},c),l("div",{className:"duplicates-list"},k),A=l("div",{
className:"error-message hidden"}),l("div",{className:"flexy"}),l("div",{className:"footer"},y=l("input",{type:"button",
className:"button normal-button important-button",disabled:!0,value:d,onclick:J}),l("div",{className:"footer-space"
}),z=l("input",{type:"button",className:"button normal-button regular-button",value:f,onclick:K}))),v=a,(0,i.TT)(w)},
OnAfterShow:function(){q.onDataChanged.Add(G)},OnBeforeHide:function(){q.onDataChanged.Remove(G)},Focus:function(){},
Dispose:function(){}};function F(){const a=(0,h.XE)((0,i.TT)(r.path),!1,200);switch(r.event){case 6:
return p("DuplicatesDialog_MessageText",[a]);case 8:{const b=(0,h.XE)((0,i.TT)((0,i.TT)(r.to).path),!1,200)
;return p("DuplicatesDialog_RenameMessageText",[a,b])}case 7:return p("DuplicatesDialog_DeleteMessageText",[a]);default:throw(0,
j.ZU)(j.V2,`Unknown change event ${r.event}`)}}function G(a){let b=!1;for(const c of a){switch(c.event){case 2:return void(0,
i.TT)(v)();case 7:if(6===r.event){if(c.path===(0,i.TT)(r.to).path)return void(0,i.TT)(v)()
}else if(c.path===r.path)return void(0,i.TT)(v)();break;case 8:if(8===r.event&&c.path===(0,i.TT)(r.to).path){if((0,
i.TT)(c.to).path===r.path)return void(0,i.TT)(v)();(0,i.TT)(r.to).path=(0,i.TT)(c.to).path,b=!0}}switch(c.event){case 7:case 8:
case 6:{const a=C.get((0,i.TT)(c.path));if(a){if(a.m_el.remove(),C.delete((0,i.TT)(c.path)),0===C.size)return void(0,i.TT)(v)()
;L()}}}}b&&(0,k.fI)(async function(){const a=await F();(0,i.TT)(x).innerText=a}())}function H(a){D.add(a),L()}function I(a){
D.delete(a),L()}function J(){const a=[];for(const[b,c]of C)c.m_checkbox_el.checked&&a.push(b);Q(),(0,
g.D$)((()=>async function(a){const b=new Set,c=[];for(const k of a)switch(r.event){case 6:try{await q.CopyFile((0,
i.TT)(r.path),k,null),b.add(k)}catch(g){const a=(0,j.EB)(g);c.push(a)}break;case 8:{const a=(0,h.fA)(k)+"/"+(0,h._p)((0,
i.TT)((0,i.TT)(r.to).path));if(!(0,i.RA)(k,a))try{await q.GetInfo(a,0,null);const b=await p("AlreadyExists_Error2",[(0,d.Y5)((0,
f.hF)(k),!1),(0,h.XE)(a,!1,void 0)]);c.push(b);break}catch(g){(0,j.r5)(g,j.Y$)}try{await q.MoveFile(k,a,null),b.add(k)}catch(g){
const a=(0,j.EB)(g);c.push(a)}}break;case 7:try{await q.DeleteFile(k,null),b.add(k)}catch(g){const a=(0,j.EB)(g);c.push(a)}break
;default:throw(0,j.ZU)(j.V2,`Unknown change event ${r.event}`)}const e=new Set;for(const d of D)if(!b.has(d))try{
await q.DeleteFile(d,null),b.add(d)}catch(g){const a=(0,j.EB)(g);c.push(a),e.add(d)}D=e;for(const d of b){(0,
i.TT)(C.get(d)).m_el.remove(),C.delete(d)}if(L(),c.length>0){!function(a){const b=l("div",{className:"error-message"},a);(0,
i.TT)(A).replaceWith(b),A=b,R()}(c.join("\n")),R()}else(0,i.TT)(v)()}(a)),M,500,O)}function K(){(0,i.TT)(v)()}function L(){
let a=!1;if(0!==D.size)a=!0;else for(const b of C.values())if(b.m_checkbox_el.checked){a=!0;break}(0,i.TT)(y).disabled=!a}
function M(){E=!0,(0,i.TT)(y).disabled=!0,(0,i.TT)(z).disabled=!0;for(const a of C.values())a.m_checkbox_el.disabled=!0;return N
}function N(){E=!1;for(const a of C.values())a.m_checkbox_el.disabled=!1;(0,i.TT)(z).disabled=!1,L()}function O(){if(B)return P
;const a=l("div",{className:"action-progress-overlay-circle size48"});return(0,i.TT)(w).appendChild(a),B=a,P}function P(){
null==B||B.remove(),B=null}function Q(){(0,i.TT)(A).innerText="",(0,i.TT)(A).classList.add("hidden"),R()}function R(){
if(!u)return;const a=(0,i.TT)(w).getBoundingClientRect();u(a.width,a.height)}}function n(a,b,c,d,e){
const f=a.LocalizeString,g=m(a,b,c,d,e);return{Create:async function(a,b){const c=await g.Create(a,b);return l("div",{
className:"duplicates-page setup-page"},l("div",{className:"header-section"},l("div",{className:"header-text-section"},l("div",{
className:"title-text"},await f("DuplicatesDialog_WindowTitle")))),c)},OnAfterShow:function(){g.OnAfterShow()},
OnBeforeHide:function(){g.OnBeforeHide()},Focus:function(){g.Focus()},Dispose:function(){}}}},16007:function(a,b,c){"use strict"
;c.d(b,{N:function(){return i}});var d=c(47333),e=c(32105),f=c(63956),g=c(4153),h=(c(13117),c(91764)._);function i(a){var b
;const{invitations:c,requests:i,ea:j,viewApi:k,serverUrl:l}=a;let m=null
;const n=!!i,o=null!==(b=n?i:c)&&void 0!==b?b:[],p=new Set;let q=null,r=null,s=null,t=null,u=null;const v=[];return{
Create:async function(a,b){
const c=(0,d.sU)(l),f=await k.LocalizeString("EmergencyAccess_Title"),g=await k.LocalizeString("EmergencyAccessContactConfirmationDescription_Text"),i=await k.LocalizeString("EmergencyAccessDataAccessConfirmationDescription_Text"),j=n?await k.LocalizeString("EmergencyAccess_GrantAccess_Title"):await k.LocalizeString("Cmd_Accept_Key"),A=n?await k.LocalizeString("EmergencyAccess_DenyAccess_Text"):await k.LocalizeString("Cmd_Reject_Key"),B=await k.LocalizeString("Cmd_Later_Flat"),C=[]
;for(const d of o){const a=d.name,b=d.email,c=a?a===b?a:a+" ("+b+")":b;let f;const g=h("div",{className:"item-row"},f=h(e.b_,{
text:c,checked:!0,onchange:()=>{f.GetChecked()?p.add(d):p.delete(d),z()}}));C.push(g),v.push(f),p.add(d)}const D=h("div",{
className:"ea-invites-page setup-page receive-invite-page"},h("div",{className:"header-section"},h("div",{
className:"header-text-section"},h("div",{className:"title-text"},f))),u=h("div",{
className:"action-progress-overlay-circle size64 hidden"}),h("div",{className:"hint-text rfo-server-title-text"
},c||""),h("div",{className:"normal-text invite-text"},n?i:g),h("div",{className:"items-container"},C),t=h("div",{
className:"error-text"}),h("div",{className:"page-flexy-space"}),h("div",{className:"buttons-section"},h("div",{
className:"padding-div"}),q=h("input",{type:"button",className:"important-button normal-button",value:j,onclick:w
}),r=h("input",{type:"button",className:"regular-button normal-button",value:A,onclick:x}),s=h("input",{type:"button",
className:"regular-button normal-button",value:B,onclick:y})));return m=a,D},OnAfterShow:function(){},OnBeforeHide:function(){},
Focus:function(){(0,g.TT)(q).focus()},Dispose:function(){}};function w(){D(),(0,f.D$)((()=>async function(){try{
for(const a of p)if(n){const b=a.accountId;await j.GrantEmergencyAccess(b,null)}else{const b=a.accountId
;await j.AcceptEmergencyContactInvitation(b,null)}}catch(a){return void C((0,d.Qo)(a))}(0,g.TT)(m)()}()),E,500,A)}function x(){
D(),(0,f.D$)((()=>async function(){try{for(const a of p)if(n){const b=a.accountId;await j.RevokeEmergencyAccess(b,null)}else{
const b=a.accountId;await j.RejectEmergencyContactInvitation(b,null)}}catch(a){return void C((0,d.Qo)(a))}(0,g.TT)(m)()
}()),E,500,A)}function y(){(0,f.D$)((()=>async function(){(0,g.TT)(m)()}()),E,500,A)}function z(){const a=0===p.size;(0,
g.TT)(q).disabled=a,(0,g.TT)(r).disabled=a}function A(){return(0,g.TT)(u).classList.remove("hidden"),B}function B(){(0,
g.TT)(u).classList.add("hidden")}function C(a){(0,g.TT)(t).textContent=a}function D(){(0,g.TT)(t).textContent=""}function E(){
return(0,g.TT)(q).disabled=!0,(0,g.TT)(r).disabled=!0,(0,g.TT)(s).disabled=!0,v.forEach((a=>a.Enable(!1))),F}function F(){(0,
g.TT)(q).disabled=!1,(0,g.TT)(r).disabled=!1,(0,g.TT)(s).disabled=!1,v.forEach((a=>a.Enable(!0)))}}},61625:function(a,b,c){
"use strict";c.d(b,{A:function(){return e}});var d=c(91764)._;function e(){return{Create:async function(){return d("div",{
id:"loading-page",className:"loading-page-fixed-size"},d("div",{className:"action-progress-overlay-circle size64"}))},
OnAfterShow:function(){},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){}}}},48798:function(a,b,c){"use strict"
;c.d(b,{H:function(){return R}})
;var d=c(62806),e=c(50790),f=c(19390),g=c(79607),h=c(21132),i=c(47287),j=c(83131),k=c(87965),l=c(3566),m=c(47333),n=c(95697),o=c(4234),p=c(62376),q=c(78949),r=c(67793),s=c(88579),t=c(71644),u=c(54811),v=c(12131),w=c(62851),x=c(84479),y=c(59283),z=c(31173),A=c(63956),B=c(32105),C=c(58605),D=c(74363),E=c(21176),F=c(88262),G=c(13113),H=c(12190),I=c(69893),J=c(78440),K=c(37495),L=c(73863),M=c(4153),N=c(40371),O=c(95399),P=(c(13117),
c(84224)),Q=c(91764)._;function R(a){
const{app:b,viewNavigator:c,service:R,data:S,dataItemDisplayNameProvider:T,initialIdentityProvider:U,usageInfo:V,commands:W,securityWarningsManager:X,sharing:Y,passwordsHistory:Z,breachMon:aa,options:ab,settings:ac,policies:ad,view:ae,os:af,extensionInfo:ag,clipboard:ah,screenshot:ai,http:aj,rng:ak,canUseWin32LoginsAndBookmarks:al}=a
;let am,an=!1,ao=!1,ap=!0,aq=0,ar=null,as=!1,at=!0,au=null,av=null,aw="",ax=null,ay=!1,az=1,aA=null,aB=null,aC=null,aD=null,aE=!1,aF=null,aG=null,aH=null,aI="",aJ="",aK="",aL="",aM="",aN="",aO="",aP="",aQ=null,aR=null,aS=null,aT=null,aU=null,aV=null,aW=null,aX=null,aY=!1,aZ=!1,a0=null,a1=""
;const a2=(0,J.tG)(),a3=(0,J.tG)();let a4=!1,a5=null,a6=0,a7=null,a8=2,a9=null;const ba=new Map,bb=new Map;let bc=1,bd=null
;const be=new Map,bf=new Map
;let bg,bh=null,bi=null,bj=null,bk="",bl="",bm="",bn="",bo="",bp=null,bq=!1,br=!1,bs=null,bt=2,bu=null,bv="",bw=null,bx=null
;const by=(0,J.tG)(),bz=new Map;let bA="",bB="",bC="",bD="",bE="",bF="",bG="",bH="",bI="",bJ="",bK="",bL="",bM=""
;const bN=100,bO=100,bP=400;let bQ=null;const bR="undefined"!=typeof IntersectionObserver;let bS=null;const bT=(0,J.E5)()
;let bU=null;let bV=!1,bW=null,bX="",bY=null,bZ=null,b0=null,b1=null,b2=null,b3=null;const b4=(0,J.tG)(),b5=100,b6=100
;let b7="",b8="",b9="",ca="",cb="",cc="",cd="",ce="",cf=!1,cg=null,ch=0,ci="",cj=null,ck=null,cl=null,cm=null,cn=null,co=null,cp=null,cq=!1,cr=!1,cs=!1,ct=null
;const cu=(0,J.tG)();let cv=null,cw=null,cx=null;const cy=(0,J.tG)();let cz=[],cA="",cB="",cC="",cD="",cE="",cF="";const cG=(0,
J.tG)();let cH=null,cI=0,cJ=null,cK=null,cL=null,cM=null,cN=null,cO=null,cP=null,cQ=null;const cR=new Map,cS="popup-search-"+(0,
L.Be)(),cT=(0,J.tG)();let cU=null,cV=null,cW=null,cX=null;const cY=(0,J.tG)(),cZ=(0,M.kA)()
;let c0=null,c1=null,c2=null,c3=!0,c4="",c5="",c6="",c7="",c8="",c9="",da="",db="",dc="",dd="",de=[],df="",dg="";const dh=(0,
J.tG)(),di=new Map,dj=new WeakSet;let dk=null;const dl=1e3,dm=1e3
;let dn=null,dp=!1,dq="",dr="",ds="",dt="",du="",dv=null,dw="",dx="";const dy=(0,J.tG)()
;let dz=null,dA=null,dB=!1,dC=null,dD=null,dE=!1,dF=null,dG=null;const dH=(0,l.Eg)();let dI="",dJ="",dK=null,dL=!1
;const dM=["mousedown","wheel","keydown"];function dN(a){dL=!0,dM.forEach((a=>window.removeEventListener(a,dN,!0)))}
dM.forEach((a=>window.addEventListener(a,dN,!0)));const dO={Create:async function(){var a;an=await gb(),ao=b.IsNativeApp(),
at&&await async function(){let a=await ab.GetValue("RoboFormOpensWith",1);const b=await ae.storage.Get({MainPageState:null,
LastPopupCloseTime:null}),c=b.LastPopupCloseTime,d=b.MainPageState;if(null!==c&&d){(0,O.t2)()-c<120&&(a=0)}switch(a){case 1:
bt=2,a6=0;break;case 2:bt=2,a6=1;break;case 3:bt=1,a6=0;break;case 4:bt=1,a6=1;break;case 5:bt=0;break;default:bt=function(a){
switch(null==a?void 0:a.itemsListType){case 0:return 0;case 1:return 1;case 2:default:return 2;case 3:return 3;case 4:return 4
;case 5:return 5}}(d),a6=function(a){switch(null==a?void 0:a.itemsListMode){case 0:default:return 0;case 1:return 1;case 2:
return 2}}(d)}ch=function(a){switch(null==a?void 0:a.fillIdViewType){case 0:default:return 0;case 2:return 2;case 1:return 1
;case 3:return 3}}(d),ci=function(a){var b;return null!==(b=null==a?void 0:a.fillIdPath)&&void 0!==b?b:""}(d)}()
;const c=await ab.Get({ShowBookmarksAndLoginsTogether:!1,FillEmptyFieldsOnlyIdentity:!1,DontShowCompromisedDataIcons:!1,
AccountClientReadOnly:!1,AccountClientBlocked:!1});aq=(0,n.z)(c),cq=c.FillEmptyFieldsOnlyIdentity,cr=cq,
bq=c.ShowBookmarksAndLoginsTogether,3===bt&&bq&&(bt=2);const e=null!==(a=c.DontShowCompromisedDataIcons)&&void 0!==a&&a;ap=!e
;const f=await ae.LocalizeString("Cmd_StartPage_Tip"),g=await ae.LocalizeString("MainPage_Settings_Button_Tip")
;aw=await ae.LocalizeString("MainPage_LoginsTab_Search_Placeholder"),aI=await ae.LocalizeString("MainPage_ShowAll_Logins_Text"),
aJ=await ae.LocalizeString("MainPage_ShowAll_Identities_Text"),aK=await ae.LocalizeString("MainPage_ShowAll_Bookmarks_Text"),
aL=await ae.LocalizeString("MainPage_ShowAll_Safenotes_Text"),
aM=await ae.LocalizeString("MainPage_ShowAll_NativeMenu_Tip",[await ae.LocalizeString((0,m.Y5)(1,!0))]),
aN=await ae.LocalizeString("MainPage_ShowAll_NativeMenu_Tip",[await ae.LocalizeString((0,m.Y5)(5,!0))]),
aO=await ae.LocalizeString("MainPage_ShowAll_NativeMenu_Tip",[await ae.LocalizeString((0,m.Y5)(2,!0))]),
aP=await ae.LocalizeString("MainPage_ShowAll_NativeMenu_Tip",[await ae.LocalizeString((0,m.Y5)(7,!0))]),
c8=await ae.LocalizeString("Page_ListItem_MoreActions_Tip"),c9=await ae.LocalizeString("Item_ClickToFill_Tip"),
da=await ae.LocalizeString("Item_ClickToLogin_Tip"),db=await ae.LocalizeString("Identity_ClickToView_Tip"),
dc=await ae.LocalizeString("Safenote_ClickToView_Tip"),dd=await ae.LocalizeString("Item_ClickToOpen_Tip"),
bB=await ae.LocalizeString("Cmd_Logins_Flat"),bA=await ae.LocalizeString("MainPage_Pinned_Header_Text"),
bC=await ae.LocalizeString("RoboformType_Identities"),bD=await ae.LocalizeString("RoboformType_Bookmarks"),
bE=await ae.LocalizeString("RoboformType_Safenotes"),bF=await ae.LocalizeString("Editor_Cmd_Selector_All_Flat"),
bG=await ae.LocalizeString("MainPage_Items_Button_Pinned_Tip"),bH=await ae.LocalizeString("MainPage_Items_Button_Logins_Tip"),
bI=await ae.LocalizeString("MainPage_Items_Button_Identities_Tip"),
bJ=await ae.LocalizeString("MainPage_Items_Button_Bookmarks_Tip"),
bK=await ae.LocalizeString("MainPage_Items_Button_Safenotes_Tip"),bL=await ae.LocalizeString("MainPage_Items_Button_All_Tip"),
bM=await ae.LocalizeString("CompromisedItemButton_Tooltip"),df=await ae.LocalizeString("Login_OneTimeCode_Text"),
dg=await ae.LocalizeString("Login_OneTimeCode_Copy_Tip")
;const h=await ae.LocalizeString("MainPage_Recent_Header_Text"),i=await ae.LocalizeString("MainPage_Popular_Header_Text"),j=await ae.LocalizeString("MainPage_AllItems_Header_Text"),k="tab-all",o="all-tabpanel",p=await ae.LocalizeString("MainPage_FillLogins_Button_Text"),q=await ae.LocalizeString("MainPage_FillLogins_Button_Tip")
;b7=await ae.LocalizeString("MainPage_FillLoginsTab_NoLoginsForPage_Text"),
b8=await ae.LocalizeString("MainPage_FillLoginsTab_NoLoginsForDomain_Text"),
b9=await ae.LocalizeString("MainPage_CreateLoginInstruction_Top_Text"),
ca=await ae.LocalizeString("MainPage_CreateLoginInstruction_Option1_Text"),
cb=await ae.LocalizeString("MainPage_CreateLoginInstruction_Option2_Text"),
cc=await ae.LocalizeString("MainPage_CreateLoginInstruction_Option3_Text"),
cd=await ae.LocalizeString("MainPage_CreateLoginInstruction_Option3_Import_Text"),
ce=await ae.LocalizeString("MainPage_CreateLoginInstruction_LearnMore_Link")
;const r=await ae.LocalizeString("Dropdown_Items_Label"),s="tab-fill-logins",t="fill-logins-tabpanel"
;a1=await ae.LocalizeString("MainPage_FillIdentities_Button_Text"),cC=await ae.LocalizeString("MainPage_Create_Identity_Tip"),
cD=await ae.LocalizeString("MainPage_ViewAllIdentities_Tip"),
ao?(cE=await ae.LocalizeString("MainPage_FillIdentitiesTab_IdentityView_Native_Top_Text"),
cF=await ae.LocalizeString("MainPage_FillIdentitiesTab_IdentityView_Limited_Native_Top_Text")):(cE=await ae.LocalizeString("MainPage_FillIdentitiesTab_IdentityView_Top_Text"),
cF=await ae.LocalizeString("MainPage_FillIdentitiesTab_IdentityView_Limited_Top_Text"))
;const u=await ae.LocalizeString("Cmd_FillForms_Flat"),v=await ae.LocalizeString("Cmd_Edit_Flat"),w=await ae.LocalizeString("Cmd_FillEmptyOnly_Key")
;cA=await ae.LocalizeString("MainPage_FillIdentitiesTab_EmptyMatch_Text"),
cB=await ae.LocalizeString("MainPage_FillIdentitiesTab_CreateFirst_Text")
;const x=await ae.LocalizeString("MainPage_FillIdentitiesTab_Identity_Dropdown_Label"),y=await ae.LocalizeString("MainPage_FillIdentitiesTab_Identity_Options_Label"),z=await ae.LocalizeString("MainPage_FillIdentitiesTab_Identity_Region_Label"),A="tab-fill-identity",C="fill-id-tabpanel"
;bk=await ae.LocalizeString("MainPage_FillLoginsTab_Search_Placeholder"),
bl=await ae.LocalizeString("MainPage_FillLoginsTabDomain_Search_Placeholder"),
bm=await ae.LocalizeString("MainPage_FillLoginsTabAll_Search_Placeholder"),
bo=await ae.LocalizeString("MainPage_FillIdentitiesTabAll_Search_Placeholder"),
bn=await ae.LocalizeString("MainPage_FillIdentitiesTabMatch_Search_Placeholder"),
dq=await ae.LocalizeString("MainPage_CreateNewButton_File_Tip"),
dr=await ae.LocalizeString("MainPage_CreateNewButton_Login_Tip"),
ds=await ae.LocalizeString("MainPage_CreateNewButton_Bookmark_Tip"),
dt=await ae.LocalizeString("MainPage_CreateNewButton_Safenote_Tip"),
du=await ae.LocalizeString("MainPage_CreateNewButton_Identity_Tip"),
dw=await ae.LocalizeString("MainPage_SaveButton_SaveForms_Tip"),
dx=await ae.LocalizeString("MainPage_SaveButton_SaveBookmark_Tip")
;const D=await ae.LocalizeString("Search_Dialog_ResultList_Text"),E=await ae.LocalizeString("PassGen_Generated_Tip")
;c4=await ae.LocalizeString("PassAud_PwdStrengthStrong"),c5=await ae.LocalizeString("PassAud_PwdStrengthGood"),
c6=await ae.LocalizeString("PassAud_PwdStrengthMedium"),c7=await ae.LocalizeString("PassAud_PwdStrengthWeak")
;const F=await ae.LocalizeString("PassGen_Copy_Tip"),G=await ae.LocalizeString("PassGen_Generate"),H=await ae.LocalizeString("PassGen_ShowAdvanced")
;dI=await ae.LocalizeString("Notification_Password_Copied_Text"),
dJ=await ae.LocalizeString("Notification_Password_Filled_Text"),de=[...await Z.GetHistory(null)],
de.length>0?(c3=0===de[0].m_generator_type,await ac.SetValue("PassGenIsWord",c3)):c3=await ac.GetValue("PassGenIsWord",!0)
;let I,J,K,L,N,P,R,T,U,V,W;cX=(0,d.hE)(ae,c3,gh,gi,null),ar=Q("div",{className:"main-page unselectable",onkeypress:e2,
onkeydown:e0},dk=Q("div",{className:"action-progress-overlay-circle size48 hidden"}),Q("div",{className:"page-header"},Q("div",{
className:"button-section"},Q("div",{className:"start-button",title:f,role:"button",ariaLabel:f,onclick:fl},Q("div",{
className:"icon icon-start"}))),au=Q("div",{className:"search-query"},av=Q("input",{className:"search-input",type:"search",
placeholder:aw,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1,oninput:eK,onfocus:eF,onblur:eG,
onkeydown:eZ,onkeypress:e1,onmouseout:eH,onmouseover:eI,oncontextmenu:eJ})),Q("div",{className:"button-section"},Q("div",{
className:"password-generator-button",title:await ae.LocalizeString("Cmd_Password_Generator_Flat"),onclick:fm,role:"button",
ariaLabel:await ae.LocalizeString("Cmd_Password_Generator_Flat")},Q("div",{className:"icon icon-password-generator"
})),ax=Q("div",{className:"settings-button",title:g,role:"button",ariaHasPopup:"true",ariaLabel:g,onclick:fn},Q("div",{
className:"icon icon-3dots"})))),Q("div",{className:"navigation"},aF=Q("div",{className:"items-native-menu-button",onclick:fo
},aG=Q("div",{className:"icon icon-logins"}),aH=Q("div",{className:"text"},aI),Q("div",{className:"menu-icon"})),aA=Q("div",{
className:"tab-selector",role:"tablist"},aB=Q("div",{className:"tab-button items-lists",id:k,role:"tab","aria-controls":o,
title:bH},Q("div",{className:"button button-with-dropdown",onclick:dP},aD=Q("div",{className:"icon icon-logins"}),aC=Q("div",{
className:"text"},bB),Q("div",{className:"dropdown-button dropdown-icon",role:"button",ariaHasPopup:"true",ariaLabel:r
}))),Q("div",{className:"tab-button-separator"}),aR=Q("div",{className:"tab-button fill-logins",id:s,role:"tab",
"aria-controls":t,title:q,onclick:e4},Q("div",{className:"button"},Q("div",{className:"icon icon-fill"},aS=Q("div",{
className:"fill-indicator hidden"})),Q("div",{className:"text"},p))),U=Q("div",{className:"tab-button-separator"}),aT=Q("div",{
className:"tab-button fill-id",id:A,role:"tab","aria-controls":C,onclick:ed},Q("div",{className:"button button-with-dropdown"
},aU=Q("div",{className:"icon fill-identity-icon"},a0=Q("div",{className:"fill-indicator hidden"})),Q("div",{
className:"identity-name-placeholder-container"},aW=Q("div",{className:"text identity-name-placeholder"},a1),Q("div",{
className:"identity-name-container"},aV=Q("div",{className:"text identity-name"},a1),aX=Q("div",{
className:"dropdown-button dropdown-icon",role:"button",ariaHasPopup:"true",ariaLabel:x})))))),a5=Q("div",{
className:"list-mode-selectors"},a7=Q("div",{className:"items-lists list-mode-selector hidden",role:"tablist"},I=Q("div",{
className:"list-mode-selector-button",role:"tab",onclick:()=>dX(0)},Q("div",{className:"list-mode-selector-text"
},i)),J=Q("div",{className:"list-mode-selector-button",role:"tab",onclick:()=>dX(1)},Q("div",{
className:"list-mode-selector-text"},h)),K=Q("div",{className:"list-mode-selector-button",role:"tab",onclick:()=>dX(2)
},Q("div",{className:"list-mode-selector-text"},j))),a9=Q("div",{className:"fill-logins list-mode-selector hidden",
role:"tablist"},L=Q("div",{className:"list-mode-selector-button",role:"tab",onclick:()=>e6(0)},Q("div",{
className:"list-mode-selector-text"},await ae.LocalizeString("MainPage_FillLoginsTab_MatchingLogins_Button_Text"))),N=Q("div",{
className:"list-mode-selector-button",role:"tab",onclick:()=>e6(1)},Q("div",{className:"list-mode-selector-text"
},await ae.LocalizeString("MainPage_FillLoginsTab_SameDomain_Button_Text"))),P=Q("div",{className:"list-mode-selector-button",
role:"tab",onclick:()=>e6(2)},Q("div",{className:"list-mode-selector-text"
},await ae.LocalizeString("MainPage_FillLoginsTab_AllLogins_Button_Text")))),bd=Q("div",{
className:"fill-id list-mode-selector hidden",role:"tablist"},R=Q("div",{className:"list-mode-selector-button",role:"tab",
onclick:()=>eh(0)},Q("div",{className:"list-mode-selector-text"
},await ae.LocalizeString("MainPage_FillIdentitiesTab_MatchingIdentities_Button_Text"))),T=Q("div",{
className:"list-mode-selector-button",role:"tab",onclick:()=>eh(1)},Q("div",{className:"list-mode-selector-text"
},await ae.LocalizeString("MainPage_FillIdentitiesTab_AllIdentities_Button_Text")))))),bh=Q("div",{
className:"fill-search-query-section hidden"},bi=Q("div",{className:"fill-search-query"},bj=Q("input",{
className:"fill-search-input",type:"search",placeholder:"",autocomplete:"off",autocorrect:"off",autocapitalize:"off",
spellcheck:!1,oninput:eQ,onfocus:eL,onblur:eM,onkeydown:eZ,onkeypress:e1,onmouseout:eN,onmouseover:eO,oncontextmenu:eP
}))),bp=Q("div",{className:"tab-views"},bs=Q("div",{id:o,role:"tabpanel","aria-labelledby":k,
className:"items-lists tab-view hidden"},bu=Q("div",{className:"loading-view"},Q("div",{
className:"action-progress-overlay-circle size48"})),bw=Q("div",{className:"list"})),bW=Q("div",{id:t,role:"tabpanel",
"aria-labelledby":s,className:"fill-logins tab-view hidden"},bY=Q("div",{className:"loading-view"},Q("div",{
className:"action-progress-overlay-circle size48"})),bZ=Q("div",{className:"list hidden"}),b0=Q("div",{className:"list hidden"
}),b2=Q("div",{className:"folder-selector hidden"}),b1=Q("div",{className:"list hidden"})),cg=Q("div",{id:C,role:"tabpanel",
"aria-labelledby":A,className:"fill-id tab-view hidden"},cj=Q("div",{className:"loading-view"},Q("div",{
className:"action-progress-overlay-circle size48"})),ck=Q("div",{className:"identity-view hidden"},Q("div",{
className:"identity-view-actions"},Q("div",{className:"header flex-row"},cp=Q("div",{
className:"identity-view-top-text flex-cell"},cE),cl=Q("div",{className:"more-actions-button",role:"button",ariaHasPopup:"true",
ariaLabel:y},Q("div",{className:"more-actions-icon image size20"}))),V=Q("div",{className:"buttons"},Q("div",{
className:"button-section"},cn=Q("button",{className:"normal-button regular-button",onclick:ez},u)),Q("div",{
className:"button-section"},co=Q("button",{className:"normal-button regular-button",onclick:eA},v))),W=Q("div",{
className:"fill-empty-section"},Q("div",{className:"check-label"},cm=Q(B.b_,{checked:cr,text:w,disabled:0!==aq,onchange:eB
})))),ct=Q("div",{className:"identity-data-view",role:"region",ariaLabel:z})),cw=Q("div",{className:"list hidden"}),cv=Q("div",{
className:"list hidden"})),dv=Q("div",{className:"save-button hidden",title:dw,role:"button",ariaLabel:dw,onclick:fE
}),dn=Q("div",{className:"create-new-button hidden",title:dq,role:"button",ariaLabel:dq,onclick:fy})),cJ=Q("div",{
className:"search-results-section hidden",role:"region",ariaLabel:D},cK=Q("div",{className:"loading-view hidden"},Q("div",{
className:"action-progress-overlay-circle size48"})),cL=Q("div",{className:"search-results-view hidden"},cM=Q("div",{
className:"list"}))),cU=Q("div",{className:"passgen-section hidden"},Q("div",{className:"passgen-filling-option",onclick:ge
},Q("div",{className:"passgen-icon",title:c9}),Q("div",{className:"generated-password-container",title:c9},Q("div",{
className:"generated-password-title"},E),cV=Q("div",{className:"generated-password"},"")),Q("div",{className:"passgen-buttons"
},Q("div",{className:"button passgen-copy-button",title:F,role:"button",onclick:gf}),c1=Q("div",{
className:"button passgen-new-button",title:G,role:"button",onclick:gg}),Q("div",{className:"button passgen-settings-button",
title:H,role:"button",onclick:fm})),cW=Q(l.Xi,{className:"passgen-score-meter hidden",state:"weak",text:""})),Q("div",{
className:"passgen-settings"},await cX.Create())),dz=Q("div",{className:"manage-auto-fill-on-domain flex-row hidden"
}),dC=Q("div",{className:"manage-auto-save-on-domain flex-row hidden"}),dF=Q("div",{className:"rate-extension flex-row hidden"
}),dG=Q("div",{className:"upgrade-messages flex-row hidden"}),dH),ao&&(gu(dv),gu(aR),gu(U),(0,M.TT)(aT).style.maxWidth="60%",
gu(V),gu(W));if(bz.clear(),bz.set(0,I),bz.set(1,J),bz.set(2,K),ba.clear(),ba.set(0,L),ba.set(1,N),ba.set(2,P),be.clear(),
be.set(0,R),be.set(1,T),at){const a=await b.ShouldActivateFillUI(null);a.m_activate_logins?(a8=0,e5(),
bc=0):a.m_activate_identities?(bc=0,ef(),a8=2):a.m_password_generator?(ef(),bc=0,a8=2):dQ()}else fU();return fp(),fO(),fP(),
fS(),fT(),dV(),dY(),dR(),e7(),e8(),el(),ei(),ej(),fk(),fD(),fB(),fN(),fi(),fj(),ek(),gm(),
ae.onNotificationFromBackgroundScript.Add(f3),S.onDataChanged.Add(f4),ab.AddOnChangeListener(f5),as=!0,(0,M.TT)(ar)},
OnAfterShow:function(){b.IsNativeUIAvailable()&&"mac"===af&&window.addEventListener("mousedown",fq,!0)},OnBeforeHide:function(){
window.removeEventListener("mousedown",fq),dH.Hide(),dK&&(dK.Hide(0),dK=null);dh.Cancel()},Focus:function(){(0,M.TT)(av).focus()
},Dispose:function(){cR.clear(),cx=null,b3=null,bQ=null,bx=null,ae.onNotificationFromBackgroundScript.Remove(f3),
S.onDataChanged.Remove(f4),ab.RemoveOnChangeListener(f5),cT.Cancel(),by.Cancel(),cG.Cancel(),b4.Cancel(),cu.Cancel(),
cy.Cancel(),dy.Cancel(),cY.Cancel(),as=!1}};return dO;function dP(a){1===az?function(a){aE||function(){aE=!0;const a=(0,
M.TT)(aB).getBoundingClientRect(),b=a.bottom+1,c=a.left+7,d={height:0,width:0,top:b,bottom:b,y:b,x:c,right:c,left:c}
;function e(){const a=(0,k.NI)((0,M.TT)(aB));return a.onHide=g,a.onShow=f,a}function f(a){}function g(a){setTimeout((function(){
aE=!1,(0,M.TT)(aB).classList.remove("highlighted")}),300)}dK=(0,k.Lj)(d,(()=>async function(){const a=[]
;(await V.GetUsageInfoList(0,1,null)).length>0&&(a.push(ec(0)),a.push("separator"));a.push(ec(1)),a.push(ec(2)),
bq||a.push(ec(3));return a.push(ec(4)),a.push("separator"),a.push(ec(5)),a}()),e(),(function(a,b){return(0,
M.TT)(ar).style.width=(0,z.Md)(a),(0,M.TT)(ar).style.height=(0,z.Md)(b),(0,M.TT)(aB).getBoundingClientRect()}),gn)}(),
a.stopPropagation()}(a):dQ()}function dQ(){az=1,gc(),eY(),dV(),fp(),dR(),fD(),fB(),fN(),dZ(bt,a6)}function dR(){
1===az&&br&&gu(bu)}function dS(){const a=br;br=!0,a||dR()}function dT(a){bg=a,1===az&&(bg?gv(a5):gu(a5))}async function dU(a){
let b;try{b=0!==(await S.List("",0,a)).length}catch(c){if((0,I.r5)(c,I.kd))throw c;b=!1}dT(b)}function dV(){const a=eb(bt)
;gr(aC,a.m_button_text),gq(aB,a.m_button_tooltip||""),gs(aB,a.m_button_tooltip||""),dW((0,M.TT)(aD),"icon-",a.m_button_style),
em()}function dW(a,b,c){const d=a.classList;for(let e=0;e<d.length;e++){const a=d[e];if(a.startsWith(b)){d.remove(a),d.add(c)
;break}}}function dX(a){a6!==a&&(a6=a,gc(),dY(),dZ(bt,a6))}function dY(){
for(const[a,b]of bz)a===a6?(b.classList.add("selected"),gt(b,"true")):(b.classList.remove("selected"),gt(b,"false"))}
function dZ(a,b){by.Start((async c=>{await async function(a,b,c){if(0===a)return d0(a,1,c);switch(b){case 0:return d0(a,3,c)
;case 1:return d0(a,0,c);case 2:return async function(a,b){var c;let d,e=!1,f=!1
;bQ&&bQ.m_list_mode===a6&&bQ.m_items_type===bt?(e=!0,d=Object.assign({},bQ)):f=!0;const g=await S.List(bv,0,b);let h
;const i=d1(a);switch(i){case 1:h=bq?new Set([8,1,2]):new Set([8,1]);break;case 0:case 9:h=new Set([8,1,2,3,4,5,6,7]);break
;default:h=new Set([8,i])}const j=g.filter((a=>h.has(a.type)));if(b.ThrowIfShouldStop(),0===j.length&&!bv)return d5(),
await d9(),bQ=null,dS(),void await dU(b);dT(!0),f&&d5();const k=new Map,m=[];for(let n=0;n<j.length;n++){const a=j[n]
;if(e&&d&&n<d.m_items.length){const b=d.m_items[n];if(b.m_path===a.path&&b.m_mod_time===a.mod&&b.m_received===a.received){
m.push(b);const a=d.m_views.get(b.m_element);a&&k.set(b.m_element,a);continue}}const b=fr(a),f=gw(a.type,a.path)
;let g,h,i,o,p,q,r;const s=1===a.type||2===a.type?"icon-section with-border":"icon-section",t=Q("div",{
className:"list-item multiple-rows"},Q("div",{className:"list-item-main-row"},g=8===a.type?Q("div",{className:"icon-text",
role:8===a.type?"button":"link",onclick:()=>{8===a.type&&(bv=a.path,dZ(bt,2))},oncontextmenu:b=>fV(a.path,t,b,!1)},Q("div",{
className:s,ariaHidden:"true"},h=(0,l.AG)(a.path,a.type),null!==b?Q("div",{className:b}):null),Q("div",{className:"path-view"
},Q("div",{className:"text"},Q("span",null,(0,G.tM)((0,G._p)(a.path),bO))))):Q("div",{className:"icon-text",role:"link",
onclick:()=>{fW(a,!1,!1)},oncontextmenu:b=>fV(a.path,t,b,!1)},Q("div",{className:s,ariaHidden:"true"},h=f?(0,
l.qc)(a.path,a.type,gx):(0,l.AG)(a.path,a.type),null!==b?Q("div",{className:b}):null),Q("div",{className:"path-view"},f?(0,
l.Xl)(a.path,bO,bN,!1,gx):(0,l.v$)(a.path,bO,bN,!1)),1===a.type&&Q("div",{className:"action-icon image login-action-icon"
})||2===a.type&&Q("div",{className:"action-icon image goto-action-icon"})||Q("div",{
className:"action-icon image view-action-icon"})),p=go(Q("div",{className:"more-actions-button hidden",title:df,role:"button"
},Q("div",{className:"icon"},q=Q("div",{className:"totp-timer"}))),!1,(()=>t)),r=ap?(0,l.oG)(a,bM,f2):null,i=Q("div",{
className:"more-actions-button",title:c8,role:"button",ariaHasPopup:"true",ariaLabel:c8,onclick:b=>f1(b,t,i,a.path,!1)
},Q("div",{className:"icon more-actions-icon image"}))),o=1===a.type?Q("div",{className:"list-item-data-row hidden"}):null)
;if(m.push({m_path:a.path,m_mod_time:a.mod,m_received:a.received,m_element:t}),f)(0,J.fI)((async()=>{
const b=await gx(a.path),c=b.length>200;fs(g,a.type,!1,c,(0,G.tM)(b,bP))})());else{const b=8===a.type?(0,G._p)(a.path):(0,
G.HE)((0,G._p)(a.path)),c=b.length>200;fs(g,a.type,!1,c,(0,G.tM)(b,bP))}if(k.set(t,{m_item_el:t,m_item_icon_text_el:g,
m_item_icon_el:h,m_item_data_view_el:o,m_item_data_view_expand_button_el:p,m_totp_timer:q,m_compromised_button_el:r,
m_item_info:a}),!e||!d||n>=d.m_items.length)fu((0,M.TT)(bw),t);else{const a=d.m_items[n].m_element
;null===(c=a.parentElement)||void 0===c||c.replaceChild(t,a)}}if(e&&d&&d.m_items.length>j.length){
for(let a=j.length;a<d.m_items.length;a++){d.m_items[a].m_element.remove()}fw((0,M.TT)(bw))}if(bv){
if(!d||d.m_all_items_selected_folder!==bv){d4();const a=[],b=bv.split("/");for(let c=0;c<b.length;c++){
const d=b[c],e=0===c?await ae.LocalizeString("HomeFolder"):d,f=Q("div",{className:"folder-part"},Q("div",{
className:"folder-name",onclick:function(){const a=b.slice(0,c+1).join("/");a!==bv&&(bv=a,dZ(bt,2))}
},e),c!==b.length-1?Q("div",{className:"folder-separator"},">"):null);a.push(f)}bx=Q("div",{className:"folder-selector"},a),(0,
M.TT)(bs).insertBefore((0,M.TT)(bx),(0,M.TT)(bw))}}else d4();dS(),bQ={m_list_mode:a6,m_items_type:bt,
m_all_items_selected_folder:bv,m_items:m,m_views:k},bs&&bw&&0!==k.size&&(0,J.fI)(fx(bw,k,[dv,dn],b));em()}(a,c)}}(a,b,c)}))}
async function d0(a,c,d){var e;let f,g=!1,h=!1;bQ&&bQ.m_list_mode===a6&&bQ.m_items_type===bt?(g=!0,f=Object.assign({},bQ)):h=!0
;const i=d1(a),j=await b.GetUsageInfoListItems(1===i&&bq?[1,2]:[i],c,d);if(d.ThrowIfShouldStop(),d4(),
0===j.length)return 0===a?(bt=2,gc(),dV(),fp(),fD(),fB(),fN(),void dZ(bt,a6)):(d5(),await d9(),bQ=null,dS(),void await dU(d))
;dT(!0),h&&d5();const k=(0,m.Z7)(j),n=new Map,o=[];for(let b=0;b<j.length;b++){const a=j[b],c=a.path
;if(g&&f&&b<f.m_items.length){const d=f.m_items[b];if(d.m_path===c&&d.m_mod_time===a.mod&&d.m_received===a.received){o.push(d)
;const a=f.m_views.get(d.m_element);a&&n.set(d.m_element,a);continue}}const d=(0,G.HE)((0,G._p)(c)),h=fr(a),i=gw(a.type,c)
;let m,p,q,r,s,t,u;const v=1===a.type||2===a.type?"icon-section with-border":"icon-section",w=Q("div",{
className:"list-item multiple-rows"},Q("div",{className:"list-item-main-row"},m=Q("div",{className:"icon-text",role:"link",
onclick:()=>fW(a,!1,!1),oncontextmenu:a=>fV(c,w,a,!1)},Q("div",{className:v,ariaHidden:"true"},p=i?(0,l.qc)(c,a.type,gx):(0,
l.AG)(c,a.type),null!==h?Q("div",{className:h}):null),Q("div",{className:"path-view"},i?(0,l.Xl)(c,bO,bN,0!==k.size,gx):(0,
l.v$)(c,bO,bN,0!==k.size)),1===a.type&&Q("div",{className:"action-icon image login-action-icon"})||2===a.type&&Q("div",{
className:"action-icon image goto-action-icon"})||Q("div",{className:"action-icon image view-action-icon"})),r=go(Q("div",{
className:"more-actions-button hidden",title:df,role:"button"},Q("div",{className:"icon"},s=Q("div",{className:"totp-timer"
}))),!1,(()=>w)),t=ap?(0,l.oG)(a,bM,f2):null,u=Q("div",{className:"more-actions-button",title:c8,role:"button",
ariaHasPopup:"true",ariaLabel:c8,onclick:a=>f1(a,w,u,c,!1)},Q("div",{className:"icon more-actions-icon image"
}))),q=1===a.type?Q("div",{className:"list-item-data-row hidden"}):null);o.push({m_path:a.path,m_mod_time:a.mod,
m_received:a.received,m_element:w});const x=0!==k.size,y=(0,G.HE)((0,G._p)(c)).length>bO||x&&(0,G.fA)(c).length>bN
;if(fs(m,a.type,!1,y,(0,G.tM)(d,bP)),n.set(w,{m_item_el:w,m_item_icon_text_el:m,m_item_icon_el:p,m_item_data_view_el:q,
m_item_data_view_expand_button_el:r,m_totp_timer:s,m_compromised_button_el:t,m_item_info:a}),!g||!f||b>=f.m_items.length)fu((0,
M.TT)(bw),w);else{const a=f.m_items[b].m_element;null===(e=a.parentElement)||void 0===e||e.replaceChild(w,a)}}
if(g&&f&&f.m_items.length>j.length){for(let a=j.length;a<f.m_items.length;a++){f.m_items[a].m_element.remove()}fw((0,M.TT)(bw))}
dS(),bQ={m_list_mode:a6,m_items_type:bt,m_all_items_selected_folder:null,m_items:o,m_views:n},bw&&0!==n.size&&(0,
J.fI)(fx(bw,n,[dv,dn],d)),em()}function d1(a){switch(a){case 2:return 1;case 3:return 2;case 4:return 7;case 5:return 5;case 1:
case 0:return 9}}function d2(a,b,c){if(a&&c&&function(a,b){const c=a.getBoundingClientRect(),d=b.getBoundingClientRect()
;return function(a,b){return(0,H.tZ)(b.top,b.bottom,a.top-7,a.bottom+7)}(c,d)}(c,b)){
const a=b.getBoundingClientRect(),d=c.getBoundingClientRect();(0,H.X4)(a)||(0,H.X4)(d)||function(a,b,c){
if(""===b.style.marginRight&&!(0,H.X4)(a)&&a.right>c.left){const d=(0,z.Md)(a.right-c.left+7);return b.style.marginRight=d,!0}
}(a,b,d)}}function d3(a){a.style.marginRight&&(a.style.marginRight="")}function d4(){bx&&((0,M.TT)(bs).removeChild(bx),bx=null)}
function d5(){(0,A.h9)((0,M.TT)(bw))}function d6(a){return Q("div",{className:"instruction-section"},Q("div",{className:"text"
},b9),Q("ul",{className:"instruction-options"},Q("li",{className:"instruction-option"},Q("span",{className:"text"},ca)),Q("li",{
className:"instruction-option"},Q("span",{className:"text"},d7(cb,ea))),Q("li",{className:"instruction-option"},Q("span",{
className:"text"},(0,L.SI)(cc,"%1").before),Q("span",{className:"link",onclick:()=>fZ((async()=>{await W.ShowImportDialog(!1),
b.ClosePopup()}))},cd),Q("span",{className:"text"},(0,L.SI)(cc,"%1").after))),a?Q("div",{className:"link",onclick:d8},ce):null)}
function d7(a,b){const c=(0,L.SI)(a,"%1");let d;return d=c.found?Q("span",null,Q("span",{className:"text"},c.before),Q("span",{
className:"circle plus",onclick:a=>null==b?void 0:b(a)}),Q("span",{className:"text"},c.after)):Q("span",null,Q("span",{
className:"text"},a)),d}function d8(){return(0,J.fI)(ae.OpenUrl({newTab:!0,reuseExisting:!0,url:m.em},null)),b.ClosePopup()}
async function d9(){let a="";const b=d();switch(b){case 2:case 5:case 7:a=(0,L.bt)("big-icon"," ",(0,l.mQ)(b));break;case 1:
case 9:a=(0,L.bt)("big-icon"," ",(0,l.mQ)(1))}const c=Q("div",{className:"create-first-item-section"},Q("div",{
className:"big-icon-section"},Q("div",{className:a})),await async function(){const a=d();switch(a){case 7:case 5:gu(dv)
;return Q("div",{className:"instruction-section"
},d7(7===a?await ae.LocalizeString("MainPage_CreateFirstSafenoteInstructions_Text"):await ae.LocalizeString("MainPage_FillIdentitiesTab_CreateFirst_Text"),ea))
;case 2:ao||gv(dv);return Q("div",{className:"instruction-section"
},d7(await ae.LocalizeString("MainPage_CreateFirstBookmarkInstructions_Text"),ea));default:return ao||gv(dv),d6(!0)}}())
;return void(0,M.TT)(bw).appendChild(c);function d(){switch(bt){case 1:return 9;case 4:return 7;case 3:return 2;case 5:return 5
;default:return 1}}}function ea(a){fz(!1)}function eb(a){switch(a){case 0:return{m_button_tooltip:bG,m_button_text:bA,
m_button_style:"icon-pinned",m_menu_css:"command-show-pinned"};case 1:return{m_button_tooltip:bL,m_button_text:bF,
m_button_style:"icon-all",m_menu_css:"command-show-all"};case 2:return{m_button_tooltip:bH,m_button_text:bB,
m_button_style:"icon-logins",m_menu_css:"command-show-logins"};case 3:return{m_button_tooltip:bJ,m_button_text:bD,
m_button_style:"icon-bookmarks",m_menu_css:"command-show-bookmarks"};case 4:return{m_button_tooltip:bK,m_button_text:bE,
m_button_style:"icon-safenotes",m_menu_css:"command-show-safenotes"};case 5:return{m_button_tooltip:bI,m_button_text:bC,
m_button_style:"icon-identities",m_menu_css:"command-show-identities"}}}function ec(a){const b=eb(a);return{
title:b.m_button_text,imageClass:b.m_menu_css,onCommand:async(b,c)=>{bt!==a&&(bt=a,gc(),fT(),dV(),fp(),dR(),fD(),fB(),fN(),
dZ(bt,a6))}}}function ed(a){return 3===az&&aZ?function(a){aY||function(){aY=!0;const a=(0,
M.TT)(aT).getBoundingClientRect(),b=a.bottom+1,c=a.right,d={height:0,width:0,top:b,bottom:b,y:b,x:c,right:c,left:c}
;function e(){const a=(0,k.NI)((0,M.TT)(aT));return a.onHide=g,a.onShow=f,a}function f(a){}function g(a){setTimeout((function(){
aY=!1,(0,M.TT)(aT).classList.remove("highlighted")}),300)}dK=(0,k.Lj)(d,(()=>async function(){const a=[],b=cz.slice(0,5)
;for(const d of b){const b=(0,M.TT)(cH).m_matching_identities.find((a=>a.path===d.path));await eE(a,d,void 0!==b)}
const c=cz.length;return a.push("separator"),a.push({
title:await ae.LocalizeString("Editor_Indicator_Show_AllIdentities",[c.toString()]),onCommand:async(a,b)=>{
2===ch&&1===bc||(ch=2,bc=1,gc(),fT(),ei(),el(),ej(),fD(),fB(),fN(),eg(0))}}),a}()),e(),(function(a,b){return(0,
M.TT)(ar).style.width=(0,z.Md)(a),(0,M.TT)(ar).style.height=(0,z.Md)(b),(0,M.TT)(aT).getBoundingClientRect()}),gn)}(),
a.stopPropagation()}(a):ef()}function ee(a){ci=a,ch=1,ef()}function ef(){az=3,gc(),fT(),fk(),el(),ei(),ej(),fD(),fB(),fN(),eg(0)
}function eg(a){switch(ch){case 0:eY(),ep(a);break;case 2:{const b=(0,M.TT)(bj).value;if(b)gv(bh),fR(bc,!0),
eR(b,2,0);else switch(eY(),bc){case 1:ep(a);break;case 0:!function(a){cy.Start((async b=>{0!==a&&await(0,J.Gu)(a,b),en()}))}(a)}
}break;case 1:case 3:eY(),c=a,cu.Start((async a=>{0!==c&&await(0,J.Gu)(c,a),await async function(a){var c,d,e,f,g,h,i,j,k,l,n,p
;const q=null!==(c=await ae.GetLanguageTag(a))&&void 0!==c?c:"en";let r,s,t,u;if(3===ch){r=!1,s=!1
;const a=await U.GetInitialIdentity(null);u=(0,m.eQ)(a,{}),t=await(0,m.D5)(a,{},ae),cl&&(cl.title=c8,cl.onclick=a=>{
ew(a,null,(0,M.TT)(cl),!0,"")})}else{const b=await S.GetInfo(ci,1,a);r=b.readOnly||!1,s=b.hidePasswords||!1,
t=await T.GetDisplayNameByPath(b.path,null),u=await S.GetDataItem(ci,3,null,null),cl&&(cl.title=c8,cl.onclick=a=>{ew(a,null,(0,
M.TT)(cl),!1,ci)})}
s?(gr(cp,cF),gu(co)):(gr(cp,cE),gr(co,r?await ae.LocalizeString("Cmd_View_Flat"):await ae.LocalizeString("Cmd_Edit_Flat")),
gv(co)),gq(cn,await ae.LocalizeString("MainPage_FillIdentitiesTab_IdentityView_FillBtn_Tip",[t]))
;const v=await ae.LocalizeString("Notification_Copied_ToClipboard_Text"),w=await ae.LocalizeString("MainPage_FillIdentitiesTab_IdentityView_CopyDrag_Tip"),x=await ae.LocalizeString("MainPage_FillIdentitiesTab_IdentityView_Copy_Tip"),B=(null===(d=u.m_options)||void 0===d?void 0:d["World Regions"])||"United States",C=[],D=new Map(u.m_groups.map((a=>[a.m_name,a]))),E=["Person","Location","Credit Card","Bank Account","Business","Passport","Car"]
;for(const m of E){const a=D.get(m);if(!a)continue;if(0===a.m_instances.length)continue;const c=a.m_instances
;if(s&&1===c.length)continue;let d;if(1===c.length)switch(m){case"Credit Card":
d=null===(e=c[0].m_fields.find((a=>"Card Type"===a.m_name)))||void 0===e?void 0:e.m_value;break;case"Bank Account":
d=null===(f=c[0].m_fields.find((a=>"Bank Name"===a.m_name)))||void 0===f?void 0:f.m_value}const r=await(0,
y.hq)(m,ae),t="identity-group-"+m.toLowerCase().replace(" ","-")+"-icon",u=new Map,A=new Map;for(const b of c){
const a=new Map(b.m_fields.filter((a=>a.m_name)).map((a=>{var b;return[(0,M.TT)(a.m_name),null!==(b=a.m_value)&&void 0!==b?b:""]
})));u.set(b,a);const c=(await(0,o.hX)(b.m_name,m,a,B,ae)).m_name;A.set(b,{m_display_name:c,m_expired:(0,y.y5)(m,a,B,q)})}
const E=[...c];let F;E.sort(((a,b)=>{const c=(0,M.TT)(A.get(a)),d=(0,M.TT)(A.get(b))
;return c.m_expired!==d.m_expired?c.m_expired?1:-1:c.m_display_name.localeCompare(d.m_display_name)}));const G=Q("div",{
className:"identity-fields-group"},Q("div",{className:"header"},Q("div",{className:"instance-icon "+t}),Q("div",{
className:"name"},r),d?Q("div",{className:"aux-instance-name"},d):null,1===c.length?Q("div",{className:"icon-copy",title:x,
role:"button",ariaLabel:x,onclick:()=>{s||(0,J.fI)((async()=>{const a=await ex(m,E[0],B)
;await b.CopyTextToClipboardWithAutoClear(a,120),fL(v,3,null)})())}}):null),F=Q("div",{className:"instances"}));let H=!1
;const I=a.m_current_instance&&(null===(g=a.m_instances.find((b=>b.m_name===a.m_current_instance)))||void 0===g?void 0:g.m_name)||""
;for(const e of E){const a=e.m_name,d=(0,M.TT)(u.get(e));let f=0!==d.size?await(0,y.yG)(B,m,d,ae,!1):[]
;if(1===c.length&&0===f.length)continue;H||(C.push(G),H=!0);const g=I?a===I:null!==(h=e.m_is_default)&&void 0!==h&&h;let o,q,r,t
;switch(m){case"Credit Card":r=d.get("Card Type"),t="Card Type";break;case"Bank Account":r=d.get("Bank Name"),t="Bank Name"}
if(c.length>1){const c=(0,M.TT)(A.get(e)).m_display_name;if(r){const a=(0,L.v$)(r.toLowerCase());(0,
L.v$)(c.toLowerCase()).includes(a)&&(r=void 0)}let h="";if("Credit Card"===m){const a=d.get("Card Type"),b=a?(0,K.G3)(a):null
;null!==b&&(h=`logo-${b}`)}o=Q("div",{className:"instance"},Q("div",{className:"header"},Q("label",{className:"radio"
},Q("input",{type:"radio",className:"radio-button",name:m,value:a,checked:g}),Q("div",{className:"instance-name"
},"Credit Card"===m&&Q("div",{className:`card-logo ${h}`}),c),r?Q("div",{className:"aux-instance-name"
},r):null,0===f.length||s?null:Q("div",{className:"icon-copy",title:x,role:"button",ariaLabel:x,onclick:a=>{a.preventDefault(),
a.stopPropagation(),(0,J.fI)((async()=>{const a=await ex(m,e,B);await b.CopyTextToClipboardWithAutoClear(a,120),fL(v,3,null)
})())}}))),q=Q("div",{className:"fields"}))}else o=Q("div",{className:"instance"},q=Q("div",{className:"fields"}));if(!s){
t&&(d.delete(t),f=await(0,y.yG)(B,m,d,ae,!1));const a=[[]];for(let b=0;b<f.length;b++){const c=f[b]
;3===c.m_type?b<f.length-1&&a.push([]):a[a.length-1].push(c)}const c=[]
;for(const b of a)if(0!==b.length)if(0===b[0].m_type)if(0===c.length)c.push([b]);else{const a=c[c.length-1],d=a[a.length-1]
;0===d[0].m_type&&d.length===b.length?a.push(b):c.push([b])}else c.push([b]);for(const d of c){if(0===d.length)continue
;const a=Q("div",{className:d.length>1?"grid":"line"});for(const c of d){let e=""
;const f=1!==d.length&&!a.style.gridTemplateColumns;let g,h=!1;for(const d of c)switch(d.m_type){case 0:{const b=Q("div",{
className:"caption"},null!==(i=d.m_display_value)&&void 0!==i?i:"",":");a.appendChild(b),f&&(e=(0,L.bt)(e," ","auto")),g=b,h=!0}
break;case 2:if(g)if(h)d.m_display_value&&(g.textContent+=d.m_display_value);else{const a=Q("div",{className:"separator"
},null!==(k=null===(j=d.m_display_value)||void 0===j?void 0:j.trim())&&void 0!==k?k:"");g.appendChild(a)}break;case 1:{
const c=null!==(n=null!==(l=d.m_actual_value)&&void 0!==l?l:d.m_display_value)&&void 0!==n?n:"",i=c===(null!==(p=d.m_display_value)&&void 0!==p?p:"")
;let j,k,m,o=!1,q=s||!i?"text":"text selectable";d.m_can_copy&&(q=(0,L.bt)(q," ","monospace")),d.m_expired&&(q=(0,
L.bt)(q," ","expired-warning"));const r=Q("div",{className:"cell"},j=Q("div",{className:"value"
},!s&&d.m_actual_value&&d.m_display_value&&d.m_actual_value!==d.m_display_value?m=Q("div",{className:"icon-eye open",
onclick:()=>{o?(o=!1,ev(k,d.m_display_value,d.m_display_chunk_length,!0),m.classList.remove("closed"),m.classList.add("open"),
k.classList.remove("selectable")):(o=!0,ev(k,d.m_actual_value,d.m_display_chunk_length,!1),m.classList.remove("open"),
m.classList.add("closed"),k.classList.add("selectable"))}}):null,k=Q("div",{className:q,ondblclick:a=>{i&&((0,z.rv)(k),
a.preventDefault())}},eu(d.m_display_value,d.m_display_chunk_length,!i)),d.m_can_copy?Q("div",{className:"icon-copy",title:w,
role:"button",ariaLabel:w,onclick:()=>{s||(0,J.fI)(async function(){await b.CopyTextToClipboardWithAutoClear(c,120),fL(v,3,null)
}())},draggable:!s,ondragstart:a=>{var b;null===(b=a.dataTransfer)||void 0===b||b.setData("text/plain",c)}}):null))
;a.appendChild(r),f&&(e=(0,L.bt)(e," ","auto")),g=j,h=!1}}f&&e&&(a.style.gridTemplateColumns=e)}q.appendChild(a)}}
F.appendChild(o)}}(0,A.h9)((0,M.TT)(ct)),C.forEach((a=>(0,M.TT)(ct).appendChild(a))),ey()}(a)}))}var c}function eh(a){
bc!==a&&(bc=a,ei(),fT(),fS(),eg(0),ej())}function ei(){for(const[a,b]of be)a===bc?(b.classList.add("selected"),
gt(b,"true")):(b.classList.remove("selected"),gt(b,"false"))}function ej(){if(3===az&&cf)switch(gu(cj),ch){case 0:gu(bd),gu(cv),
gu(ck),gv(cw);break;case 1:case 3:gu(bd),gu(cw),gu(cv),gv(ck);break;default:gv(bd),gu(ck),1===bc?(gu(cv),gv(cw)):(gu(cw),gv(cv))
}}function ek(){a2.Start((async a=>{await async function(a){const c=await V.GetUsageInfoList(5,3,a)
;const d=await b.GetAllIdentities(a);if(function(a,b){const c=new Map(a.map((a=>[a.path,a])));b.forEach((a=>{const b=a.path
;c.has(b)||c.set(b,a)})),cz=[...c.values()]}(c,d),0===cz.length){if(!await(0,u.h$)(ad)){const a=ch;return ch=0,ey(),el(),
fR(1,!1),fR(0,!1),fS(),void(3===az&&ch!==a&&(eq(),er(),cx=null))}ch=3,ci=""}else{if(""!==ci){const a=cz.filter((a=>a.path===ci))
;a&&0!==a.length||(ch=0,ci="")}if(0===ch||3===ch){const a=cz[0].path;ci=a,ch=1}}el(),ej(),3===az&&eg(0)}(a)}))}function el(){
if(a3.Cancel(),
0===ch||2===ch)aU&&(aU.className="icon fill-identity-icon",aU.firstChild&&aU.firstChild!==a0&&aU.removeChild(aU.firstChild)),
0===ch?(gr(aV,a1),gr(aW,a1),gq(aT,cC),gs(aT,cC),gu(aX),aZ=!1,ci="",bc=1):(gr(aV,a1),gr(aW,a1),gq(aT,cD),gs(aT,cD),aZ=!0,
gv(aX));else if(3===ch)a("","",""),a3.Start((async b=>{const c=await U.GetInitialIdentity(b),d=await(0,m.D5)(c,{},ae)
;b.ThrowIfShouldStop(),a("",d,d)}));else{if(gw(5,ci))a(ci,"",""),a3.Start((async b=>{const c=await gx(ci);b.ThrowIfShouldStop(),
a(ci,c,c)}));else{const b=(0,G.HE)((0,G._p)(ci));a(ci,ci,b)}}return;function a(a,b,c){if(aU){aU.className="icon",
aU.firstChild&&aU.firstChild!==a0&&aU.removeChild(aU.firstChild);const c=(0,l.kH)(b,(0,l.Q0)(a)).Element()
;aU.insertBefore(c,aU.firstChild)}const d=(0,G.tM)(c,bO);gr(aV,d),gr(aW,d),fs((0,M.TT)(aT),5,!1,!0,(0,G.tM)(c,bP)),
cz.length<2?(aZ=!1,gu(aX)):(aZ=!0,gv(aX)),em()}}function em(){if(ar){const a=window.getComputedStyle(ar),b=(0,
z.i7)(a.minWidth),c=(0,z.i7)(a.maxWidth),d=ar.getBoundingClientRect();d&&d.width>b&&d.width<=c&&(ar.style.minWidth=(0,
z.Md)(Math.ceil(d.width)))}}function en(){var a;if(!cH)return;const b=cH.m_matching_identities;if(0===b.length)return fR(0,!1),
fS(),eo(),es(),cx=null,void ey();b.length>5?fR(0,!0):fR(0,!1),fS();let c=[];cx&&0===cx.m_list_type?c=cx.m_items:eo()
;const d=[],e=(0,m.Z7)(b);for(let f=0;f<b.length;f++){const g=b[f],h=g.path;if(f<c.length){const a=c[f]
;if(a.m_path===h&&a.m_mod_time===g.mod&&a.m_received===g.received){d.push(a);continue}}const i=(0,G.HE)((0,
G._p)(h)),j=fr(g),k=gw(g.type,h);let m,n;const o=Q("div",{className:"list-item",onmouseenter:()=>{
m.offsetWidth<m.scrollWidth&&gq(m,i),d2(cv,o,dn),d2(cv,o,dv)},onmouseleave:()=>{d3(o)}},Q("div",{className:"icon-text",title:c9,
role:"button",onclick:a=>et(a,g.path),oncontextmenu:a=>fV(g.path,o,a,!1)},Q("div",{className:"icon-section"},k?(0,
l.qc)(g.path,g.type,gx):(0,l.AG)(g.path,g.type),j?Q("div",{className:j}):null),m=k?(0,l.Xl)(h,b6,b5,0!==e.size,gx):(0,
l.v$)(h,b6,b5,0!==e.size),Q("div",{className:"action-icon image fill-action-icon"})),n=Q("div",{className:"more-actions-button",
title:c8,role:"button",ariaHasPopup:"true",ariaLabel:c8,onclick:a=>f1(a,o,n,g.path,!0)},Q("div",{
className:"icon more-actions-icon image"})));if(d.push({m_path:g.path,m_mod_time:g.mod,m_received:g.received,m_element:o}),
f>=c.length)(0,M.TT)(cv).appendChild(o);else{const b=c[f].m_element;null===(a=b.parentElement)||void 0===a||a.replaceChild(o,b)}
}if(c.length>b.length)for(let f=b.length;f<c.length;f++){c[f].m_element.remove()}ey(),cx={m_items:d,m_list_type:0}}
function eo(){(0,A.h9)((0,M.TT)(cv))}function ep(a){cy.Start((async c=>{0!==a&&await(0,J.Gu)(a,c),await async function(a){var c
;let d=[],e=!1;cx&&1===cx.m_list_type?d=cx.m_items:e=!0;const f=await b.GetAllIdentities(a);if(a.ThrowIfShouldStop(),
0===f.length)return fR(1,!1),fS(),eq(),er(),ey(),void(cx=null);f.length>5?fR(1,!0):fR(1,!1);fS(),e&&eq();const g=[],h=(0,
m.Z7)(f);for(let b=0;b<f.length;b++){const a=f[b],e=a.path;if(b<d.length){const c=d[b]
;if(c.m_path===e&&c.m_mod_time===a.mod&&c.m_received===a.received){g.push(c);continue}}const i=(0,G.HE)((0,
G._p)(e)),j=fr(a),k=gw(a.type,e);let m,n;const o=Q("div",{className:"list-item",onmouseenter:()=>{
m.offsetWidth<m.scrollWidth&&gq(m,i),d2(cw,o,dn),d2(cw,o,dv)},onmouseleave:()=>{d3(o)}},Q("div",{className:"icon-text",title:c9,
role:"button",onclick:b=>et(b,a.path),oncontextmenu:b=>fV(a.path,o,b,!1)},Q("div",{className:"icon-section"},k?(0,
l.qc)(a.path,a.type,gx):(0,l.AG)(a.path,a.type),j?Q("div",{className:j}):null),m=k?(0,l.Xl)(e,b6,b5,0!==h.size,gx):(0,
l.v$)(e,b6,b5,0!==h.size),Q("div",{className:"action-icon image fill-action-icon"})),n=Q("div",{className:"more-actions-button",
title:c8,role:"button",ariaHasPopup:"true",ariaLabel:c8,onclick:b=>f1(b,o,n,a.path,!0)},Q("div",{
className:"icon more-actions-icon image"})));if(g.push({m_path:a.path,m_mod_time:a.mod,m_received:a.received,m_element:o}),
b>=d.length)(0,M.TT)(cw).appendChild(o);else{const a=d[b].m_element;null===(c=a.parentElement)||void 0===c||c.replaceChild(o,a)}
}if(d.length>f.length)for(let b=f.length;b<d.length;b++){d[b].m_element.remove()}ey(),cx={m_items:g,m_list_type:1}}(c)}))}
function eq(){(0,A.h9)((0,M.TT)(cw))}function er(){const a=Q("div",{className:"empty-list"},Q("div",{
className:"big-icon-section"},Q("div",{className:"big-icon identity-icon"})),Q("div",{className:"instruction-section"
},d7(cB,ea)));(0,M.TT)(cw).appendChild(a)}function es(){const a=Q("div",{className:"empty-list"},Q("div",{className:"text"},cA))
;(0,M.TT)(cv).appendChild(a)}function et(a,b){fX((async()=>ee(b)))}function eu(a,b,c){
return a?b&&!a.match(c?/[^0-9\u25cf]/:/[^0-9]/)?(0,L.GI)(a,b).map((a=>Q("span",{className:"chunk"},a))):a:""}
function ev(a,b,c,d){if(b)if(c&&!b.match(d?/[^0-9\u25cf]/:/[^0-9]/)){const d=(0,L.GI)(b,c);let e=0
;for(;e<a.children.length;e++)a.children[e].textContent=d[e];for(;e<d.length;e++)a.appendChild(Q("span",{className:"chunk"
},d[e]))}else a.textContent=b;else a.textContent=""}function ew(a,d,e,f,h){a4?a.stopPropagation():function(a,d,e,f){
const h=d.getBoundingClientRect();function i(){let b=null;return{onShow:e=>{(0,k.dB)(d,!0),a&&(0,k.dB)(a,!0)
;let f=d.parentElement;for(;null!==f;)f.addEventListener("scroll",c),f=f.parentElement;b=e,a4=!0},onHide:()=>{(0,k.dB)(d,!1),
a&&(0,k.dB)(a,!1);let e=d.parentElement;for(;null!==e;)e.removeEventListener("scroll",c),e=e.parentElement;b=null,
setTimeout((function(){a4=!1}),300)}};function c(){null==b||b.Hide(4)}}dK=(0,k.Lj)(h,(async()=>{if(e)return async function(a){
const d=[],e=0!==await fA()?await ae.LocalizeString("Menu_BlockedItem_Upgrade"):void 0;ao||d.push({
title:await ae.LocalizeString("Cmd_FillForms_Flat"),imageClass:"command-fill-icon",blockedText:e,onCommand:async(b,c)=>{
a?fZ((()=>eD())):(ci="",ch=3,ef())}});return d.push("separator"),d.push({title:await ae.LocalizeString("Cmd_Edit_Flat"),
imageClass:"command-edit-icon",blockedText:e,onCommand:fI((async(a,c)=>((0,J.fI)(W.OpenInitialIdentity({mode:"edit"})),
b.ClosePopup())))}),d.push({title:await ae.LocalizeString("Cmd_Rename_Flat"),imageClass:"command-rename-icon",blockedText:e,
onCommand:fI((async(a,b)=>{const d=await U.GetInitialIdentity(null),e=(0,g.z)({data:{itemPath:d.m_path,itemType:5,
groupName:null,instanceName:null,instanceDisplayName:null,initialIdentity:d},dataStorage:S,dataItemDisplayNameProvider:T,
sharing:Y,commands:W,viewApi:ae}),f=(0,J.f4)(null,null,null),h=await c.ShowViewAndWaitResult(e,!0,f);ci="/"+h+(0,o.kd)(5),ch=1,
el();const i=await(0,m.D5)(d,{},ae);fL(await ae.LocalizeString("Notification_Item_Renamed_Text",[i,h]),null,null)}))}),d}(!0)
;return fH(await S.GetInfo(f,36,null),!0)}),i(),(function(a,b){return(0,M.TT)(ar).style.width=(0,z.Md)(a),(0,
M.TT)(ar).style.height=(0,z.Md)(b),d.getBoundingClientRect()}),gn)}(d,e,f,h)}async function ex(a,b,c){var d,e
;const f=b.m_fields,g=new Map;for(const k of f)k.m_name&&g.set(k.m_name,k.m_value||"");const h=await(0,y.yG)(c,a,g,ae,!0)
;let i="",j=!1;for(const k of h){const a=null!==(e=null!==(d=k.m_actual_value)&&void 0!==d?d:k.m_display_value)&&void 0!==e?e:""
;switch(k.m_type){case 0:i+=a,j=!0;break;case 3:i+="\n",j=!1;break;default:j?i=(0,L.bt)(i,": ",a):i+=a,j=!1}}return i}
function ey(){const a=cf;cf=!0,a||ej()}function ez(){fZ(3===ch?()=>eD():()=>eC()),(0,M.TT)(cn).blur()}function eA(){
return 3===ch?(0,J.fI)(W.OpenInitialIdentity({mode:"view"})):(0,J.fI)(W.OpenFile(ci,{mode:"view"})),b.ClosePopup()}
function eB(){cr=(0,M.TT)(cm).GetChecked(),cs=!0}async function eC(){const a=ci;let c=await S.GetDataItem(a,3,null,null)
;const d=await S.GetInfo(a,1,null),e=new Map;for(const b of c.m_groups){const a=b.m_name
;if("Custom"===a||"Default Password"===a)continue;if(b.m_instances.length<=1)continue;const c=(0,
M.TT)(ct).getElementsByClassName("radio-button");for(let b=0;b<c.length;b++){const d=c[b],f=d.getAttribute("name")
;if(f===a&&d.checked){const a=d.getAttribute("value");a&&e.set(f,a);break}}}const[f,g]=(0,m.jJ)(c,e)
;cq!==cr&&(await ac.SetValue("FillEmptyFieldsOnlyIdentity",cr),cq=cr),g&&f&&(await S.PutDataItem(a,f,null),c=f)
;const h=[],i=Object.assign(Object.assign({},c),{m_groups:h});for(const b of c.m_groups){const a=b.m_name
;if("Custom"===a||"Default Password"===a){h.push(b);continue}if(b.m_instances.length<=1){h.push(b);continue}
const c=b.m_current_instance||"",d=b.m_instances.filter((a=>a.m_name===c));h.push(Object.assign(Object.assign({},b),{
m_instances:d}))}const j=await(0,m.EN)(a,i,d.lastUsedTime,d.mod,d.cre,void 0,void 0,void 0);(0,J.fI)(W.FillForms({
userDataItem:j.m_data,identity:!0,submit:!1,fillEmptyFieldsOnly:cr,verifyCustomFieldsConflicts:!0},null)),b.ClosePopup()}
async function eD(){const a=await U.GetInitialIdentity(null);cq!==cr&&(await ac.SetValue("FillEmptyFieldsOnlyIdentity",cr),
cq=cr),(0,J.fI)(W.FillForms({userDataItem:a,identity:!0,submit:!1,fillEmptyFieldsOnly:cr,verifyCustomFieldsConflicts:!0,
dontAddToRecentlyUsedAndLogs:!0},null)),b.ClosePopup()}async function eE(a,b,c){const d=b.path,e=gw(5,d),f=e?await gx(d):(0,
G.HE)((0,G._p)(d)),g=e?(0,l.kH)(f,(0,l.Q0)(d)):(0,l.kH)(d,(0,l.Q0)(d));a.push({title:(0,G.tM)(f,25),type:c?"fillable":"normal",
imageEl:g.Element(),onCommand:async(a,c)=>{1===ch&&ci===b.path||ee(b.path)}})}function eF(){eU(au),fq()}function eG(){eS(au)}
function eH(){document.activeElement!==(0,M.TT)(av)&&eS(au)}function eI(){document.activeElement!==(0,M.TT)(av)&&eT(au)}
function eJ(a){a.stopPropagation()}function eK(){const a=(0,M.TT)(av).value;if(!a)return eY(),void fU();eR(a,1,300)}
function eL(){eU(bi),fq()}function eM(){eS(bi)}function eN(){document.activeElement!==(0,M.TT)(bj)&&eS(bi)}function eO(){
document.activeElement!==(0,M.TT)(av)&&eT(bi)}function eP(a){a.stopPropagation()}function eQ(){const a=(0,M.TT)(bj).value
;if(!a)return eY(),void fU();eR(a,2,300)}function eR(a,b,c){cI!==b&&(cI=b,function(){switch(cI){default:case 1:gu(aF),gu(aA),
gu(a5),gu(bh);case 2:}gu(bp),gu(cU),fC(),gu(cL),gv(cK),gv(cJ)}()),eV(a,c)}function eS(a){
const b=document.querySelector(".main-page");(0,M.TT)(a).style.borderColor=window.getComputedStyle((0,
M.TT)(b)).getPropertyValue("--search-input-border-color")||"initial"}function eT(a){const b=document.querySelector(".main-page")
;(0,
M.TT)(a).style.borderColor=window.getComputedStyle((0,M.TT)(b)).getPropertyValue("--search-input-hover-border-color")||"initial"
}function eU(a){const b=document.querySelector(".main-page");(0,M.TT)(a).style.borderColor=window.getComputedStyle((0,
M.TT)(b)).getPropertyValue("--search-input-focused-border-color")||"initial"}function eV(a,b){cT.Start((async c=>{
0!==b&&await(0,J.Gu)(b,c),await async function(a,b){try{if(!a)return;(0,A.h9)((0,M.TT)(cM)),cN=[],cQ=null,cO=[],cP=new Map,a=(0,
L.I6)(a),await async function(a,b){let c;let d,f,g=!1;switch(cI){case 0:c=[];break;case 1:{const e=await eW(a,b)
;b&&await b.YieldToUI(30),c=e.items,d=e.searchParts,f=e.matchesPerItem}break;case 2:switch(az){case 1:c=[];break;case 2:
switch(a8){case 0:if(c=await eX((0,M.TT)(cH).m_matching_logins,a),0===c.length){const e=await eW(a,b);b&&await b.YieldToUI(30),
d=e.searchParts,f=e.matchesPerItem,c=e.items.filter((a=>1===a.type)),0!==c.length&&(g=!0)}break;case 1:if(c=await eX([...(0,
M.TT)(cH).m_matching_logins,...(0,M.TT)(cH).m_domain_logins],a),0===c.length){const e=await eW(a,b);b&&await b.YieldToUI(30),
d=e.searchParts,f=e.matchesPerItem,c=e.items.filter((a=>1===a.type)),0!==c.length&&(g=!0)}break;case 2:{const e=await eW(a,b)
;b&&await b.YieldToUI(30),d=e.searchParts,f=e.matchesPerItem,c=e.items.filter((a=>1===a.type))}}break;case 3:
if(2===ch&&0===bc)c=await eX((0,M.TT)(cH).m_matching_identities,a);else{const e=await eW(a,b);b&&await b.YieldToUI(30),
d=e.searchParts,f=e.matchesPerItem,c=e.items.filter((a=>5===a.type))}}}if(!d){d=(0,t.HE)(a,{wholePhrase:!1,wholeWords:!1,
caseSensitive:!1,allWords:!1}).searchParts}if(g){
const a=0===a8?await ae.LocalizeString("MainPage_FillLoginsTab_Search_NoMatchingLogins"):await ae.LocalizeString("MainPage_FillLoginsTab_Search_NoSameDomainLogins"),b=Q("div",{
className:"empty-search-match-results"},Q("div",{className:"empty-matches"},a),Q("div",{className:"general-results"
},await ae.LocalizeString("MainPage_FillLoginsTab_Search_GeneralResults")));(0,M.TT)(cO).push(b)}
const h=new Map(0!==c.length?function(a,b,c,d){var f;if(!cN||!cO||!cP)return[];const g=[];for(let h=0;h<a.length;h++){
const b=a[h],i=b.path,j=fr(b),k=(0,G.HE)((0,G._p)(i));let m,n,o,p,q,r,s;const t=Q("div",{className:"list-item multiple-rows"
},Q("div",{className:"list-item-main-row"},m=Q("div",{className:"icon-text",onclick:a=>fW(b,d,a.ctrlKey),
oncontextmenu:a=>fV(b.path,t,a,d)},Q("div",{className:"icon-section"},n=(0,l.AG)(b.path,b.type),j?Q("div",{className:j
}):null),Q("div",{className:"path-view"},(0,e._)(b.path,null!==(f=c[h])&&void 0!==f?f:[],!1,!1)),d&&Q("div",{
className:"action-icon image fill-action-icon"})||1===b.type&&Q("div",{className:"action-icon image login-action-icon"
})||2===b.type&&Q("div",{className:"action-icon image goto-action-icon"})||Q("div",{
className:"action-icon image view-action-icon"})),p=go(Q("div",{className:"more-actions-button hidden",title:df,role:"button"
},Q("div",{className:"icon"},q=Q("div",{className:"totp-timer"}))),!1,(()=>t)),r=ap?(0,l.oG)(b,bM,f2):null,s=Q("div",{
className:"more-actions-button",title:c8,role:"button",ariaHasPopup:"true",ariaLabel:c8,onclick:a=>f1(a,t,s,i,2===az)},Q("div",{
className:"icon more-actions-icon image"}))),o=1===b.type?Q("div",{className:"list-item-data-row hidden"}):null);cO.push(t),
fs(m,b.type,d,!1,(0,G.tM)(k,bP)),g.push({m_item_el:t,m_item_icon_text_el:m,m_item_icon_el:n,m_item_data_view_el:o,
m_item_data_view_expand_button_el:p,m_totp_timer:q,m_compromised_button_el:r,m_item_info:b});const u=cN.length;cN.push(b),
cP.set(u,t)}return g}(c,0,null!=f?f:[],2===cI).map((a=>[a.m_item_el,a])):[]);if(function(){switch(cI){default:case 1:gu(aF),
gu(aA),gu(a5),gu(bh);case 2:}gu(bp),gu(cU),gu(cK),gv(cL),gv(cJ)}(),0===c.length){const b=Q("div",{
className:"empty-search-results"},Q("div",{className:"first-string"},Q("div",{className:"search-empty-text-before"
},"No results found for "),Q("div",{className:"search-query"},Q("b",null,a),".")),Q("div",{className:"search-empty-text-after"
},"Please change the search term."));return void(0,M.TT)(cM).appendChild(b)}for(const e of(0,M.TT)(cO))(0,
M.TT)(cM).appendChild(e);0!==c.length&&null===cQ&&e3(0);cM&&0!==h.size&&(0,J.fI)(fx(cM,h,[dv,dn],b));return}(a,b),
null==b||b.ThrowIfShouldStop(),em()}finally{}}(a,c)}))}async function eW(a,b){for(let d=1;d<=10;d++)try{
const c=await R.FindInPathNames(cS,a,{caseSensitive:!1,wholePhrase:!1,wholeWords:!1,allWords:!1},0,20,b)
;return 0===c.firstItemIndex&&c.totalFoundItemsNum===c.items.length&&cR.set(a.toLowerCase(),c.items),c}catch(c){if((0,
I.r5)(c,I.m))continue;break}return{items:[],firstItemIndex:0,totalFoundItemsNum:0,searchParts:[]}}async function eX(a,b){
const c=(0,t.HE)(b,{caseSensitive:!1,wholePhrase:!1,wholeWords:!1,allWords:!1});return a.reduce(((a,b)=>{const d=(0,t.zM)(c,b)
;return d&&a.push(d),a}),[]).sort(t.x3).map((a=>a.itemInfo))}function eY(){cT.Cancel(),cI=0,gu(cJ),gu(cL),gu(cK),an&&gv(aF),
gv(aA),gv(bp),fT(),fD(),fB(),fN()}function eZ(a){switch(a.key){case P.U.ArrowDown:!function(){if(!cN||0===cN.length)return
;null===cQ?e3(0):cQ<cN.length-1&&e3(cQ+1)}(),a.preventDefault(),a.stopPropagation();break;case P.U.ArrowUp:!function(){
if(!cN||0===cN.length)return;null===cQ?e3(0):cQ>0&&e3(cQ-1)}(),a.preventDefault(),a.stopPropagation();break;case P.U.PageUp:
a.ctrlKey?e3(0):e3((null!=cQ?cQ:0)-8),a.preventDefault(),a.stopPropagation();break;case P.U.PageDown:a.ctrlKey?function(){
if(!cN||0===cN.length)return;e3(cN.length-1)}():e3((null!=cQ?cQ:0)+8),a.preventDefault(),a.stopPropagation();break
;case P.U.Escape:a.target.value||b.ClosePopup()}}function e0(a){eZ(a)}function e1(a){switch(a.key){case P.U.Enter:!function(){
if(!cN||0===cN.length||null===cQ)return;const a=cN[cQ];if(!a)return;fW(a,2===cI,!1)}(),a.preventDefault(),a.stopPropagation()
;break;case P.U.Escape:a.target.value&&(a.target.value=""),eY(),a.preventDefault(),a.stopPropagation()}}function e2(a){e1(a)}
function e3(a){if(!cN||0===cN.length||!cP)return;if(a<0&&(a=0),a>cN.length-1&&(a=cN.length-1),a===cQ)return
;const b=null!==cQ&&cP.get(cQ);b&&b.classList.remove("selected");const c=cP.get(a);c&&(c.classList.add("selected"),cQ=a,
c.scrollIntoView({block:"nearest"}))}function e4(){2!==az&&e5()}function e5(){az=2,gc(),fT(),fk(),e7(),e8(),fD(),fB(),fN(),e9(0)
}function e6(a){a8!==a&&(a8=a,e7(),fT(),fS(),e8(),e9(0))}function e7(){for(const[a,b]of ba)a===a8?(b.classList.add("selected"),
gt(b,"true")):(b.classList.remove("selected"),gt(b,"false"))}function e8(){if(2===az&&bV)switch(gu(bY),gv(a9),a8){case 0:gv(bZ),
gu(b0),gu(b1),gu(b2);break;case 1:gu(bZ),gv(b0),gu(b1),gu(b2);break;default:gu(bZ),gu(b0),gv(b1)}}function e9(a){const b=(0,
M.TT)(bj).value;if(b)gv(bh),fQ(a8,!0),eR(b,2,0);else switch(eY(),a8){case 0:!function(a){b4.Start((async b=>{0!==a&&await(0,
J.Gu)(a,b),function(a){var b;if(!cH)return;const c=cH.m_matching_logins;if(0===c.length)return fQ(0,!1),fS(),fd(),
0!==cH.m_domain_logins.length?fe():ff(),b3=null,void fa();c.length>5?(fT(),fQ(0,!0)):fQ(0,!1);fS();let d=[]
;b3&&0===b3.m_list_mode?d=b3.m_items:fd();const e=(0,m.Z7)(c),f=new Map,g=[];for(let h=0;h<c.length;h++){const a=c[h],i=a.path
;if(h<d.length){const b=d[h];if(b.m_path===i&&b.m_mod_time===a.mod&&b.m_received===a.received){g.push(b);continue}}const j=(0,
G.HE)((0,G._p)(i)),k=fr(a);let m,n,o,p,q,r,s,t;const u=Q("div",{className:"list-item multiple-rows",onmouseenter:()=>{
o.offsetWidth<o.scrollWidth&&gq(o,j)}},Q("div",{className:"list-item-main-row"},m=Q("div",{className:"icon-text",title:c9,
role:"button",onclick:b=>fW(a,!0,b.ctrlKey),oncontextmenu:b=>fV(a.path,u,b,!0)},Q("div",{className:"icon-section"},n=(0,
l.AG)(a.path,a.type),k?Q("div",{className:k}):null),Q("div",{className:"path-view"},o=(0,l.v$)(i,b6,b5,0!==e.size)),Q("div",{
className:"action-icon image fill-action-icon"})),q=go(Q("div",{className:"more-actions-button hidden",title:df,role:"button"
},Q("div",{className:"icon"},r=Q("div",{className:"totp-timer"}))),!1,(()=>u)),s=ap?(0,l.oG)(a,bM,f2):null,t=Q("div",{
className:"more-actions-button",title:c8,role:"button",ariaHasPopup:"true",ariaLabel:c8,onclick:b=>f1(b,u,t,a.path,!0)
},Q("div",{className:"icon more-actions-icon image"}))),p=1===a.type?Q("div",{className:"list-item-data-row hidden"}):null)
;if(g.push({m_path:a.path,m_mod_time:a.mod,m_received:a.received,m_element:u}),f.set(u,{m_item_el:u,m_item_icon_text_el:m,
m_item_icon_el:n,m_item_data_view_el:p,m_item_data_view_expand_button_el:q,m_totp_timer:r,m_compromised_button_el:s,
m_item_info:a}),h>=d.length)fu((0,M.TT)(bZ),u);else{const a=d[h].m_element
;null===(b=a.parentElement)||void 0===b||b.replaceChild(u,a)}}if(d.length>c.length){for(let a=c.length;a<d.length;a++){
d[a].m_element.remove()}fw((0,M.TT)(bZ))}fa(),b3={m_list_mode:0,m_all_logins_selected_folder:bX,m_items:g,m_views:f},
bZ&&0!==f.size&&(0,J.fI)(fx(bZ,f,[dv,dn],a))}(b)}))}(a);break;case 1:!function(a){b4.Start((async b=>{0!==a&&await(0,J.Gu)(a,b),
function(a){var b;if(!cH)return;const c=cH.m_domain_logins;const d=[...cH.m_matching_logins,...c]
;if(0===d.length)return fQ(1,!1),fS(),fg(),fh(),b3=null,void fa();d.length>5?(fT(),fQ(1,!0)):fQ(1,!1);fS();let e=[]
;b3&&1===b3.m_list_mode?e=b3.m_items:fg();const f=(0,m.Z7)(d),g=new Map,h=[];for(let i=0;i<d.length;i++){const a=d[i],c=a.path
;if(i<e.length){const b=e[i];if(b.m_path===c&&b.m_mod_time===a.mod&&b.m_received===a.received){h.push(b);continue}}const j=(0,
G.HE)((0,G._p)(c)),k=fr(a);let m,n,o,p,q,r,s,t;const u=Q("div",{className:"list-item multiple-rows",onmouseenter:()=>{
o.offsetWidth<o.scrollWidth&&gq(o,j)}},Q("div",{className:"list-item-main-row"},m=Q("div",{className:"icon-text",title:c9,
role:"button",onclick:b=>fW(a,!0,b.ctrlKey),oncontextmenu:b=>fV(a.path,u,b,!0)},Q("div",{className:"icon-section"},n=(0,
l.AG)(a.path,a.type),k?Q("div",{className:k}):null),Q("div",{className:"path-view"},o=(0,l.v$)(c,b6,b5,0!==f.size)),Q("div",{
className:"action-icon image fill-action-icon"})),q=go(Q("div",{className:"more-actions-button hidden",title:df,role:"button"
},Q("div",{className:"icon"},r=Q("div",{className:"totp-timer"}))),!1,(()=>u)),s=ap?(0,l.oG)(a,bM,f2):null,t=Q("div",{
className:"more-actions-button",title:c8,role:"button",ariaHasPopup:"true",ariaLabel:c8,onclick:b=>f1(b,u,t,a.path,!0)
},Q("div",{className:"icon more-actions-icon image"}))),p=1===a.type?Q("div",{className:"list-item-data-row hidden"}):null)
;if(h.push({m_path:a.path,m_mod_time:a.mod,m_received:a.received,m_element:u}),g.set(u,{m_item_el:u,m_item_icon_text_el:m,
m_item_icon_el:n,m_item_data_view_el:p,m_item_data_view_expand_button_el:q,m_totp_timer:r,m_compromised_button_el:s,
m_item_info:a}),i>=e.length)fu((0,M.TT)(b0),u);else{const a=e[i].m_element
;null===(b=a.parentElement)||void 0===b||b.replaceChild(u,a)}}if(e.length>d.length){for(let a=d.length;a<e.length;a++){
e[a].m_element.remove()}fw((0,M.TT)(b0))}fa(),b3={m_list_mode:1,m_all_logins_selected_folder:bX,m_items:h,m_views:g},
b0&&0!==g.size&&(0,J.fI)(fx(b0,g,[dv,dn],a))}(b)}))}(a);break;case 2:fb(a)}}function fa(){const a=bV;bV=!0,a||e8()}
function fb(a){b4.Start((async b=>{0!==a&&await(0,J.Gu)(a,b),await async function(a){var b;let c=[],d=null,e=!1
;b3&&2===b3.m_list_mode?(c=b3.m_items,d=b3.m_all_logins_selected_folder):e=!0
;const f=await S.List(bX,0,a),g=new Set([8,1]),h=f.filter((a=>g.has(a.type)));if(a.ThrowIfShouldStop(),
0===h.length&&!bX)return fQ(2,!1),fS(),fc(),function(){const a=Q("div",{className:"empty-list"},Q("div",{
className:"big-icon-section"},Q("div",{className:"big-icon login-icon"})),d6(!1));(0,M.TT)(b1).appendChild(a)}(),gu(b2),b3=null,
void fa();bX||h.length>5?(fT(),fQ(2,!0)):fQ(2,!1);fS(),e&&fc();const i=new Map,j=[];for(let k=0;k<h.length;k++){
const a=h[k],d=a.path;if(k<c.length){const b=c[k];if(b.m_path===d&&b.m_mod_time===a.mod&&b.m_received===a.received){j.push(b)
;continue}}const e=8===a.type?(0,G._p)(d):(0,G.HE)((0,G._p)(d)),f=(0,G.tM)(e,bO),g=fr(a);let m,n,o,p,q,r,s,t;const u=Q("div",{
className:"list-item multiple-rows",onmouseenter:()=>{o.offsetWidth<o.scrollWidth&&gq(o,e)}},Q("div",{
className:"list-item-main-row"},m=Q("div",{className:"icon-text",title:8===a.type?"":c9,role:"button",onclick:b=>{
8===a.type?(bX=a.path,fb(0)):fW(a,!0,b.ctrlKey)},oncontextmenu:b=>fV(a.path,u,b,!0)},Q("div",{className:"icon-section"},n=(0,
l.AG)(a.path,a.type),g?Q("div",{className:g}):null),Q("div",{className:"path-view"},o=Q("div",{className:"text"
},f)),1===a.type?Q("div",{className:"action-icon image fill-action-icon"}):null),q=go(Q("div",{
className:"more-actions-button hidden",title:df,role:"button"},Q("div",{className:"icon"},r=Q("div",{className:"totp-timer"
}))),!1,(()=>u)),s=ap?(0,l.oG)(a,bM,f2):null,t=Q("div",{className:"more-actions-button",title:c8,role:"button",
ariaHasPopup:"true",ariaLabel:c8,onclick:b=>f1(b,u,t,a.path,!0)},Q("div",{className:"icon more-actions-icon image"
}))),p=1===a.type?Q("div",{className:"list-item-data-row hidden"}):null);if(j.push({m_path:a.path,m_mod_time:a.mod,
m_received:a.received,m_element:u}),i.set(u,{m_item_el:u,m_item_icon_text_el:m,m_item_icon_el:n,m_item_data_view_el:p,
m_item_data_view_expand_button_el:q,m_totp_timer:r,m_compromised_button_el:s,m_item_info:a}),k>=c.length)fu((0,
M.TT)(b1),u);else{const a=c[k].m_element;null===(b=a.parentElement)||void 0===b||b.replaceChild(u,a)}}if(c.length>h.length){
for(let a=h.length;a<c.length;a++){c[a].m_element.remove()}fw((0,M.TT)(b1))}if(bX){if(d!==bX){(0,A.h9)((0,M.TT)(b2))
;const a=[],b=bX.split("/");for(let c=0;c<b.length;c++){const d=b[c],e=0===c?await ae.LocalizeString("HomeFolder"):d,f=Q("div",{
className:"folder-part"},Q("div",{className:"folder-name",onclick:function(){const a=b.slice(0,c+1).join("/");a!==bX&&(bX=a,
fb(0))}},e),c!==b.length-1?Q("div",{className:"folder-separator"},">"):null);a.push(f)}for(const c of a)(0,
M.TT)(b2).appendChild(c);gv(b2)}}else gu(b2);fa(),b3={m_list_mode:2,m_all_logins_selected_folder:bX,m_items:j,m_views:i},
b1&&0!==i.size&&(0,J.fI)(fx(b1,i,[dv,dn],a))}(b)}))}function fc(){(0,A.h9)((0,M.TT)(b1))}function fd(){(0,A.h9)((0,M.TT)(bZ))}
function fe(){const a=Q("div",{className:"empty-list"},Q("div",{className:"text"},b7));(0,M.TT)(bZ).appendChild(a)}
function ff(){const a=Q("div",{className:"empty-list"},Q("div",{className:"big-icon-section"},Q("div",{
className:"big-icon login-icon"})),Q("div",{className:"caption"},b8),d6(!1));(0,M.TT)(bZ).appendChild(a)}function fg(){(0,
A.h9)((0,M.TT)(b0))}function fh(){const a=Q("div",{className:"empty-list"},Q("div",{className:"big-icon-section"},Q("div",{
className:"big-icon login-icon"})),Q("div",{className:"caption"},b8),d6(!1));(0,M.TT)(b0).appendChild(a)}function fi(){
cG.Start((async a=>{await async function(a){if(await async function(a){const c=await b.GetFillOptionsListForCurrentTab(a)
;if(a.ThrowIfShouldStop(),c){
const a=c.m_matching_logins.filter((a=>a.m_client_data)).map((a=>a.m_client_data)),b=c.m_matching_identities.filter((a=>a.m_client_data)).map((a=>a.m_client_data)),d=c.m_domain_logins.filter((a=>a.m_client_data)).map((a=>a.m_client_data))
;cH={m_matching_logins:a,m_domain_logins:d,m_matching_identities:b,m_activate_fill_logins_tab:c.m_activate_fill_logins_ui,
m_activate_fill_id_tab:c.m_activate_fill_identities_ui,m_show_password_generator:c.m_password_generator}}else cH={
m_matching_logins:[],m_domain_logins:[],m_matching_identities:[],m_activate_fill_logins_tab:!1,m_activate_fill_id_tab:!1,
m_show_password_generator:!1}}(a),!cH)return;fk(),await async function(){c0||c3||(c0=await(0,F.$)("pwd-gen-words.json",null,aj))
;if(c3){const a=(0,d.H5)(),b=await ab.Get({PassGenCharNumber:a.m_length,PassGenExcludeSimilar:a.m_exclude_similar_chars,
PassGenUseHexChars:a.m_hex_digits_only,PassGenCheckUpper:a.m_include_upper_case_chars,
PassGenCheckLower:a.m_include_lower_case_chars,PassGenCheckNumber:a.m_include_digits,
PassGenCheckSpecial:a.m_include_specific_chars,PassGenCharSet:a.m_specific_chars}),c={m_length:b.PassGenCharNumber,
m_include_digits:b.PassGenCheckNumber,m_include_upper_case_chars:b.PassGenCheckUpper,
m_include_lower_case_chars:b.PassGenCheckLower,m_include_specific_chars:b.PassGenCheckSpecial,m_specific_chars:b.PassGenCharSet,
m_min_digits:-1,m_hex_digits_only:b.PassGenUseHexChars,m_exclude_similar_chars:b.PassGenExcludeSimilar};(0,
M.TT)(cX).SetValues(c)}else{const a=(0,d.CZ)(),b=await ab.Get({PassphraseGenCharNumber:a.m_length,
PassphraseGenExcludeSimilar:a.m_exclude_similar_chars,PassphraseGenUseHexChars:a.m_hex_digits_only,
PassphraseGenCheckUpper:a.m_include_upper_case_chars,PassphraseGenCheckLower:a.m_include_lower_case_chars,
PassphraseGenCheckNumber:a.m_include_digits,PassphraseGenCheckSpecial:a.m_include_specific_chars,
PassphraseGenCharSet:a.m_specific_chars}),c={m_length:b.PassphraseGenCharNumber,m_include_digits:b.PassphraseGenCheckNumber,
m_include_upper_case_chars:b.PassphraseGenCheckUpper,m_include_lower_case_chars:b.PassphraseGenCheckLower,
m_include_specific_chars:b.PassphraseGenCheckSpecial,m_specific_chars:b.PassphraseGenCharSet,m_min_digits:-1,
m_hex_digits_only:b.PassphraseGenUseHexChars,m_exclude_similar_chars:b.PassphraseGenExcludeSimilar};(0,M.TT)(cX).SetValues(c)}
let a="";de=[...await Z.GetHistory(null)],de.length>0&&(a=de[0].m_password);a?c2&&c2===a||(c2=a):c2="";if(c2)(0,
M.TT)(cV).textContent=c2,await gl();else try{await gk()}catch(b){await gj(),await gk()}}(),gd(),
0===cH.m_matching_identities.length&&(eo(),es());0===cH.m_matching_logins.length&&(fd(),0!==cH.m_domain_logins.length?fe():ff())
;0===cH.m_domain_logins.length&&0===cH.m_matching_logins.length&&(fg(),fh());if(at||!dL)cH.m_activate_fill_logins_tab?(a8=0,
e5()):cH.m_activate_fill_id_tab?3===az&&2===ch&&0===bc?en():(bc=0,ef()):cH.m_show_password_generator&&ef(),
cH.m_activate_fill_logins_tab||0===cH.m_domain_logins.length||(a8=1);else switch(az){case 2:switch(a8){case 0:case 1:e9(0)}break
;case 3:if(2===ch)if(0===bc)eg(0)}return void(at=!1)}(a)}))}function fj(){dy.Start((async a=>{await async function(a){
const c=await b.GetAutoFunctionsModesForCurrentTab(a);0===(null==c?void 0:c.m_auto_fill_mode)&&dB&&(await f(!1),dB=!1)
;0===(null==c?void 0:c.m_auto_save_mode)&&dE&&(await g(!1),dE=!1);if(!c)return;const d=c.m_auto_fill_blocked_on_domain
;if(0===c.m_auto_fill_mode);else if(dB){
!(0,M.TT)(dA).GetChecked()!==d&&(0,M.TT)(dA).SetChecked(!c.m_auto_fill_blocked_on_domain)}else d&&(await f(!0),dB=!0,
await b.ShowBlockedAutoFillForCurrentPage(a));const e=c.m_auto_save_blocked_on_domain;if(0===c.m_auto_save_mode);else if(dE){
!(0,M.TT)(dD).GetChecked()!==e&&(0,M.TT)(dD).SetChecked(!c.m_auto_save_blocked_on_domain)}else e&&(await g(!0),dE=!0)
;async function f(a){let b;if(a){const a=await ae.LocalizeString("MainPage_EnableInpageIconsOnDomain_Text");b=Q("div",{
className:"manage-auto-fill-on-domain flex-row"},dA=Q(B.b_,{checked:!1,text:a,onchange:h}))}else b=Q("div",{
className:"manage-auto-fill-on-domain flex-row hidden"});(0,M.TT)(dz).replaceWith(b),dz=b}async function g(a){let b;if(a){
const a=await ae.LocalizeString("MainPage_EnableAutoSaveOnDomain_Text");b=Q("div",{
className:"manage-auto-save-on-domain flex-row"},dD=Q(B.b_,{checked:!1,text:a,onchange:i}))}else b=Q("div",{
className:"manage-auto-save-on-domain flex-row hidden"});(0,M.TT)(dC).replaceWith(b),dC=b}function h(){const a=(0,
M.TT)(dA).GetChecked();(0,A.PQ)((()=>b.BlockAutoFunctionsForCurrentTabDomain(!a,void 0,null)),f8,dl,f6,(a=>fL((0,m.Qo)(a),5,2)))
}function i(){const a=(0,M.TT)(dD).GetChecked()
;(0,A.PQ)((()=>b.BlockAutoFunctionsForCurrentTabDomain(void 0,!a,null)),f8,dl,f6,(a=>fL((0,m.Qo)(a),5,2)))}}(a)}))}
function fk(){if(!cH)return;let a=!1,b=!1;0!==cH.m_matching_logins.length&&(a=!0),0!==cH.m_matching_identities.length&&(b=!0),
cH.m_show_password_generator&&(a||b||(b=!0)),a?gv(aS):gu(aS),b?gv(a0):gu(a0)}function fl(){(0,J.fI)(W.OpenStartPage(null)),
b.ClosePopup()}function fm(){const a=(0,d.Ms)({view:ae,options:ab,settings:ac,passwordsHistory:Z,commands:(0,M.TT)(W),
clipboard:ah,http:aj,rng:ak,isNativeApp:ao});fY((async()=>c.ShowViewAndWaitResult(a,!0,(0,J.f4)(null,null,null))))}
function fn(a){ay||function(){ay=!0;const a=(0,M.TT)(ax).getBoundingClientRect(),c=(0,N.dU)();c.Add(f)
;const d=b.GetCommandsForMainDotsMenu(c);function e(){const a=(0,k.NI)((0,M.TT)(ax));return a.onHide=h,a.onShow=g,a}
function f(){null==dK||dK.Hide(),dK=(0,k.Lj)(a,(()=>d),e(),(function(a,b){return(0,M.TT)(ar).style.width=(0,z.Md)(a),(0,
M.TT)(ar).style.height=(0,z.Md)(b),(0,M.TT)(ax).getBoundingClientRect()}),gn)}function g(a){(0,k.dB)((0,M.TT)(ax),!0)}
function h(a){(0,k.dB)((0,M.TT)(ax),!1),setTimeout((function(){ay=!1}),300)}dK=(0,k.Lj)(a,(()=>d),e(),(function(a,b){return(0,
M.TT)(ar).style.width=(0,z.Md)(a),(0,M.TT)(ar).style.height=(0,z.Md)(b),(0,M.TT)(ax).getBoundingClientRect()}),gn)}(),
a.stopPropagation()}function fo(){const a=(0,M.TT)(aF).getBoundingClientRect();let c;switch(bt){case 0:case 1:case 2:c=1;break
;case 4:c=7;break;case 3:c=2;break;case 5:c=5}fZ((()=>b.ShowNativeItemsList(a,c)))}function fp(){switch(bt){default:case 2:
case 1:case 0:gr(aH,aI),dW((0,M.TT)(aG),"icon-","icon-logins"),gq(aF,aM);break;case 3:gr(aH,aK),dW((0,
M.TT)(aG),"icon-","icon-bookmarks"),gq(aF,aO);break;case 4:gr(aH,aL),dW((0,M.TT)(aG),"icon-","icon-safenotes"),gq(aF,aP);break
;case 5:gr(aH,aJ),dW((0,M.TT)(aG),"icon-","icon-identities"),gq(aF,aN)}an?gv(aF):gu(aF)}function fq(){
b.IsNativeUIAvailable()&&"mac"===af&&(0,J.fI)(b.CloseNativeMenu())}function fr(a){if(a.sharedGroup){
if(a.granted)return"icon-overlay icon-overlay-manager";if(a.readOnly)return"icon-overlay icon-overlay-limited"
;if(a.received)return"icon-overlay icon-overlay-regular"}else if(a.sharedFolder){
if(a.granted)return"icon-overlay icon-overlay-granted";if(a.readOnly)return"icon-overlay icon-overlay-login-only"
;if(a.received)return"icon-overlay icon-overlay-received"}else{if(a.granted)return"icon-overlay icon-overlay-granted"
;if(a.readOnly)return"icon-overlay icon-overlay-login-only";if(a.received)return"icon-overlay icon-overlay-received"}return null
}function fs(a,b,c,d,e){if(5===b){gq(a,db+" '"+e+"'")}else if(2===b){gq(a,d?dd+" '"+e+"'":dd)}else if(7===b){
gq(a,d?dc+" '"+e+"'":dc)}else if(1===b){const b=c?c9:da;gq(a,d?b+" '"+e+"'":b)}}async function ft(a,b){switch(a.type){case 1:
case 2:break;default:return null}let c=a.gotoUrl,d=a.matchUrl;if(void 0===c){const e=await S.GetInfo(a.path,4,b);c=e.gotoUrl,
d=e.matchUrl}if(!c)return null;const e=await async function(a){if(void 0===am)try{const b=await(0,m.AT)(R);am=await(0,
m.UJ)(b,aj,a)}catch(b){if((0,I.bf)(b))throw b;am=r.s8+"/icons"}return am}(b);return e?(0,m.m9)((0,w.g4)(c,d),a.type,e):null}
function fu(a,b){let c=a.lastElementChild;if(!c||c.childElementCount>=21){const b=Q("div",{className:"list-items-group"})
;b.style.display="flex",b.style.flexDirection="column",b.style.width="100%",a.append(b),c=b}c.appendChild(b)}function fv(a,b){
var c,d;const e=b.nextElementSibling;if(e)return e;const f=b.parentElement
;return f!==a&&f&&null!==(d=null===(c=f.nextElementSibling)||void 0===c?void 0:c.firstElementChild)&&void 0!==d?d:null}
function fw(a){for(let b=a.lastElementChild;b&&0===b.childElementCount;b=b.previousElementSibling)b.remove()}
async function fx(a,c,d,e){if(bR){bS&&(bS.disconnect(),bS=null),bU&&(bU(),bU=null),await bT.Stop()
;const i=new IntersectionObserver(t,{root:a,rootMargin:"0px 0px 80px 0px"});a.addEventListener("scroll",v,{capture:!1,passive:!0
}),bU=()=>a.removeEventListener("scroll",v,{capture:!1});let k=!1;for(const[y,A]of c.entries())switch(A.m_item_info.type){
case 1:case 2:case 4:case 3:case 5:i.observe(y),k=!0}if(e&&await e.YieldToUI(50),!as)return;k&&(bS=i,t(i.takeRecords()))
;let l,n,p,q,r=new WeakMap,s=new WeakMap;function t(a){(0,J.fI)(u(a))}async function u(a){for(const b of a)if(b.isIntersecting){
const a=b.target,d=c.get(a);if(d){i.unobserve(a),await f(d);const b=d.m_item_info;1===b.type&&d.m_item_data_view_el&&(0,
J.fI)(g(d)),aa&&d.m_compromised_button_el&&(1===b.type&&!b.readOnly&&!b.hidePasswords||5===b.type&&!b.readOnly)&&(0,J.fI)(h(d))}
}}function v(a){w()}function w(){(0,J.fI)(bT.Execute({action:x},null))}async function x(b){await(0,
J.Gu)(c.size>300?1e3:300,b,!1),await(0,z.KK)(null,b);const e=a.getBoundingClientRect(),f=null!=p?p:p=a.clientWidth
;e.width!==l?(r=new Map,s=new Map,l=e.width,n=e.height,q=void 0):e.height!==n&&(q=void 0,n=e.height)
;const g=null!=q?q:(q=d.filter((a=>null!==a)).map((a=>(0,M.TT)(a).getBoundingClientRect())).filter((a=>!(0,
H.X4)(a)))).filter((a=>a.top<e.bottom));if(0===g.length)return;const h=g.reduce(((a,b)=>b.top<a?b.top:a),e.bottom)-7,i=(0,
z.Md)(f-g[0].left+7);let j,k=null;for(let c=function(a){const b=a.firstElementChild
;return(null==b?void 0:b.classList.contains("list-items-group"))?b.firstElementChild:b}(a);c;c=fv(a,c)){
let a=c.getBoundingClientRect();if(!(0,H.X4)(a)&&(0,H.kF)(a,e)){k=c,c.style.marginRight&&(s.set(c,a.height),await(0,z.Xb)(b),
c.style.marginRight="",await(0,z.KK)(null,b),a=c.getBoundingClientRect()),r.set(c,a.height),j=a.top;break}}let m=!1
;for(let c=k,d=j;c&&void 0!==d&&d<e.bottom;){let f;if(f=c.style.marginRight?s.get(c):r.get(c),void 0===f){m&&(await(0,
z.KK)(null,b),m=!1);const a=c.getBoundingClientRect();if((0,H.X4)(a)||!(0,H.kF)(a,e))break
;c.style.marginRight?s.set(c,a.height):r.set(c,a.height),f=a.height}if(d+f>=h){if(c.style.marginRight!==i&&(await(0,z.Xb)(b),
c.style.marginRight=i,m=!0),f=s.get(c),void 0===f){m&&(await(0,z.KK)(null,b),m=!1);const a=c.getBoundingClientRect();if((0,
H.X4)(a)||!(0,H.kF)(a,e))break;s.set(c,a.height),f=a.height}}else if(""!==c.style.marginRight&&(await(0,z.Xb)(b),
c.style.marginRight="",m=!0),f=r.get(c),void 0===f){m&&(await(0,z.KK)(null,b),m=!1);const a=c.getBoundingClientRect();if((0,
H.X4)(a)||!(0,H.kF)(a,e))break;r.set(c,a.height),f=a.height}c=fv(a,c),d+=f}}w()}return;async function f(a){
const b=await ft(a.m_item_info,null);b&&(a.m_item_icon_el.style.backgroundImage="url("+b+")")}async function g(a){var c
;if(!a.m_item_data_view_el)return;const d=await S.GetDataItem(a.m_item_info.path,3,null,null),e=(0,o.JG)(d),f=e?(0,
D.A8)(e):null,g=f?(0,C.sr)(f):void 0;if(e&&f&&g){let c,d;const h=Q("div",{className:"totp-section",title:dg,onclick:a=>{
a.preventDefault(),a.stopPropagation(),(0,J.fI)((async()=>{const a=(0,C.sr)(f)
;a&&(await b.CopyTextToClipboardWithAutoClear(a,120),fL(await ae.LocalizeString("Login_OneTimeCode_Copied_Text"),3,null))})())}
},Q("div",{className:"totp-title"},df),Q("div",{className:"totp-code monospace"
},c=Q("span",null,g.substring(0,3)),d=Q("span",null,g.substring(3))),Q("div",{className:"icon-copy",title:dg,role:"button",
ariaLabel:dg}))
;gv(a.m_item_data_view_expand_button_el),a.m_item_data_view_el.firstChild?a.m_item_data_view_el.firstChild.replaceWith(h):a.m_item_data_view_el.appendChild(h),
gv(a.m_item_data_view_el),di.set(a.m_item_el,{m_totp_timer:a.m_totp_timer,m_totp_code_el1:c,m_totp_code_el2:d,
m_totp_key_or_uri:e,m_otp_auth_info:f,m_last_interval_start_utc_msec:null}),dj.add(a.m_item_el),dh.IsExecuting()||dh.Start((0,
j.s)((async(a,b)=>{var c,d;let e=0;for(const[f,g]of di){if(dj.has(f)){const h=(0,
j._)(a,g.m_otp_auth_info.period,g.m_last_interval_start_utc_msec);if(await(0,z.Xb)(b),h.generate){const a=(0,
C.sr)(g.m_otp_auth_info);g.m_totp_code_el1.textContent=null!==(c=null==a?void 0:a.substring(0,3))&&void 0!==c?c:"",
g.m_totp_code_el2.textContent=null!==(d=null==a?void 0:a.substring(3))&&void 0!==d?d:"",
g.m_last_interval_start_utc_msec=h.startTimeUTCmsec
}else h.progressPercents<70?(g.m_totp_timer.style.background=`conic-gradient(transparent ${h.progressPercents}%, var(--totp-timer-normal-color) 0 100%)`,
g.m_totp_timer.style.borderColor="var(--totp-timer-normal-color)"):(g.m_totp_timer.style.background=`conic-gradient(transparent ${h.progressPercents}%, var(--totp-timer-warning-color) 0 100%)`,
g.m_totp_timer.style.borderColor="var(--totp-timer-warning-color)");await(0,z.KK)(30,b);const i=f.getBoundingClientRect();(0,
H.X4)(i)||e++}else di.delete(f);b.ThrowIfShouldStop()}return 0!==e}),300))
}else null===(c=a.m_item_data_view_el.firstChild)||void 0===c||c.remove(),gu(a.m_item_data_view_el)}async function h(a){
if(!aa)return;const b=await aa.GetUpdateUserDataItemBreaches(a.m_item_info.path,null);if(b&&0!==b.m_breaches.length){
if(await X.GetSecurityWarningEnabledForDataItem(a.m_item_info.path,[0],null)){if(1===a.m_item_info.type){
if(a.m_compromised_button_el){const c=b.m_breaches.some(m.e7)
;a.m_compromised_button_el.title=c?await ae.LocalizeString("CompromisedItemButton_Tooltip"):await ae.LocalizeString("CompromisedLoginEmailButton_Tooltip")
}
}else 5===a.m_item_info.type&&a.m_compromised_button_el&&(a.m_compromised_button_el.title=await ae.LocalizeString("CompromisedIdentityEmailButton_Tooltip"))
;gv(a.m_compromised_button_el)}}}}function fy(a){dp||fz(!0),a.stopPropagation()}function fz(a){fZ((()=>async function(a){
const d=await ad.Get({DisableCreateLogins:!1,DisableCreateBookmarks:!1,NoPasscards:!1,DisableCreateIdentities:!1,
DisableCreateSafenotes:!1,DisableNonGroupData:!1}),e=await ab.Get({AccountEnterprise:!1,AccountCompanyAdmin:!1,
AccountClientReadOnly:!1,AccountClientBlocked:!1
}),g=e.AccountCompanyAdmin,h=d.DisableNonGroupData,i=e.AccountEnterprise,j=d.NoPasscards||d.DisableCreateLogins,l=d.DisableCreateIdentities,n=d.DisableCreateBookmarks,o=d.DisableCreateSafenotes,p=function(){
if(1===az&&0!==bt&&2===a6&&bv)return bv;if(2===az&&2===a8&&bX)return bX;return""}();switch(az){case 3:return A(l,5,"identity")
;case 2:return A(j,1,"login");case 1:switch(bt){case 2:return A(j,1,"login");case 3:return A(n,2,"bookmark");case 4:
return A(o,7,"safenote");case 5:return A(l,5,"identity");case 1:case 0:if(!a)return A(j,1,"login")}}
if(1!==az||1!==bt&&0!==bt)throw(0,I.ZU)(I.V2,"Unexpected");const q=[];j||q.push({
title:await ae.LocalizeString("RoboformType_Login"),imageClass:"command-create-login",onCommand:fI((async(a,b)=>{
await A(j,1,"login")}))});l||q.push({title:await ae.LocalizeString("RoboformType_Identity"),
imageClass:"command-create-identity",onCommand:fI((async(a,b)=>{await A(l,5,"identity")}))});o||q.push({
title:await ae.LocalizeString("RoboformType_Safenote"),imageClass:"command-create-safenote",onCommand:fI((async(a,b)=>{
await A(o,7,"safenote")}))});q.push({title:await ae.LocalizeString("RoboformType_Folder"),imageClass:"command-create-folder",
onCommand:fI((async(a,b)=>{if(!await y())return void fL(await ae.LocalizeString("Policy_DisableNonGroupData_Message"),5,2)
;const d=(0,f.I)({basePath:p,data:S,viewApi:ae});await c.ShowViewAndWaitResult(d,!0,b),az=1,bt=1,a6=2,bv=p,gc(),dY(),dV(),fN(),
dZ(bt,a6),await c.ShowView(dO,!1);const e=(0,m.Y5)(8,!1),g=await ae.LocalizeString(e)
;fL(await ae.LocalizeString("Notification_Item_Created_Text",[g]),null,null)}))}),i&&g&&q.push({
title:await ae.LocalizeString("SharedFolderSettings_Group"),imageClass:"command-create-group",onCommand:fI((async(a,c)=>{(0,
J.fI)(W.OpenFolder(p,{mode:"share"})),b.ClosePopup()}))});dp=!0
;const r=(0,M.TT)(dn).getBoundingClientRect(),s=r.top+r.height/2,t=r.left+5,u={height:0,width:0,top:s,bottom:s,y:s,x:t,
right:r.right,left:t};function v(){const a=(0,k.NI)((0,M.TT)(dn));return a.onHide=x,a.onShow=w,a}function w(a){}function x(a){
setTimeout((function(){dp=!1}),300)}async function y(){if(h&&!g){if(!(await S.GetInfo(p,1,null)).sharedGroup)return!1}return!0}
async function A(a,c,d){if(a)fL(await ae.LocalizeString("Policy_FileCreationProhibited_Text",[await ae.LocalizeString((0,
m.Y5)(c,!1))]),5,2);else{if(await y())return fZ((()=>async function(a,c){const d={startPage:!0};c&&(d.folderPath=c)
;if("bookmark"===a){const a=await b.GetCurrentTabUrl(null);a&&(d.url=a)}(0,J.fI)(W.CreateNew(a,d)),b.ClosePopup()}(d,p)))
;fL(await ae.LocalizeString("Policy_DisableNonGroupData_Message"),5,2)}}dK=(0,k.Lj)(u,(async()=>q),v(),(function(a,b){return(0,
M.TT)(ar).style.width=(0,z.Md)(a),(0,M.TT)(ar).style.height=(0,z.Md)(b),(0,M.TT)(dn).getBoundingClientRect()}),gn)}(a)))}
async function fA(){return(0,n.z)(await async function(){return ab.Get({AccountClientReadOnly:!1,AccountClientBlocked:!1})}())}
function fB(){if(dn)switch(az){case 3:gq(dn,du);break;case 2:gq(dn,dr);break;case 1:switch(bt){case 3:gq(dn,ds);break;case 4:
gq(dn,dt);break;case 2:gq(dn,dr);break;case 5:gq(dn,du);break;default:gq(dn,dq)}}}function fC(){
0!==cI||3===az&&(1===ch||3===ch)?(gu(dv),gu(dn)):(gv(dn),ao?gu(dv):1!==az||5!==bt&&4!==bt?gv(dv):gu(dv))}function fD(){
dv&&gq(dv,1===az&&3===bt?dx:dw)}function fE(){fY((()=>async function(a){const c=await b.ShowSaveFormsPage(a),d=(0,m.Y5)(c,!1)
;fL(await ae.LocalizeString("Notification_Item_Created_Text",[await ae.LocalizeString(d)]),null,null)}((0,
J.f4)(null,null,null))))}async function fF(a,d){let e;try{e=await S.GetInfo(a,36,null)}catch(f){if(!(0,v.tM)(f,4))throw f;e={
path:a,type:(0,o.hF)(a),error:f}}switch(e.type){case 8:return async function(a){const d=[],e=await ab.Get({SyncIsOn:!1,
AccountCompanyAdmin:!1,AccountClientReadOnly:!1,AccountClientBlocked:!1}),f=e.AccountCompanyAdmin,h=e.SyncIsOn,j=0!==(0,
n.z)(e)?await ae.LocalizeString("Menu_BlockedItem_Upgrade"):void 0,k=await ad.Get({SelfHostedServer:!1,DisableSharing:!1
}),l=k.SelfHostedServer,m=k.DisableSharing,p=a.readOnly&&a.sharedFolder,q=a.sharedGroup||!1,r=a.sharedFolder||!1,s=(0,
G.Y0)(a.path),t=""===s;if(q){if(p)return t&&await v(),d;return a.granted||!1?(t?(await w(),f&&await x(),await v()):(await w(),
await x()),d):(t?await v():(await w(),await x()),d)}if(r)return p?t?(await w(),await x(),await u(),d):d:(await w(),await x(),
t&&await u(),d);if(await w(),await x(),t&&h&&!l&&!m){d.push("separator")
;const c=f?await ae.LocalizeString("Cmd_ConvertFolderToGroup_Key"):await ae.LocalizeString("StartPage_Sharing_ShareFolder_Title")
;d.push({title:c,imageClass:"command-share-icon",blockedText:j,onCommand:fI((async(c,d)=>((0,J.fI)(W.OpenFolder(a.path,{
mode:"share"})),b.ClosePopup())))})}return d;async function u(){d.push({
title:await ae.LocalizeString("Cmd_SharedFolderSettings_Key"),imageClass:"command-share-icon",blockedText:j,
onCommand:fI((async(c,d)=>(await W.ShowSharedFolderDialog(a.path),b.ClosePopup())))})}async function v(){d.push({
title:await ae.LocalizeString("Cmd_GroupSettingsFlat"),imageClass:"command-share-icon",blockedText:j,
onCommand:fI((async(c,d)=>(await W.ShowSharedFolderDialog(a.path),b.ClosePopup())))})}async function w(){d.push({
title:await ae.LocalizeString("Cmd_Rename_Flat"),imageClass:"command-rename-icon",blockedText:j,onCommand:fI((async(b,d)=>{
const e=(0,g.z)({data:{itemPath:a.path,itemType:a.type,groupName:null,instanceName:null,instanceDisplayName:null,
initialIdentity:null},dataStorage:S,dataItemDisplayNameProvider:T,sharing:Y,commands:W,viewApi:ae
}),f=await c.ShowViewAndWaitResult(e,!0,d);if((0,o.QC)(a.path,ci)){const b=(0,G.fA)(a.path)+"/"+f;ci=ci.replace(a.path,b)}
const h=(0,o.em)(a.path);fL(await ae.LocalizeString("Notification_Item_Renamed_Text",[h,f]),null,null)}))})}async function x(){
d.push({title:await ae.LocalizeString("Cmd_Delete_Flat"),imageClass:"command-delete-icon",blockedText:j,
onCommand:fI((async(b,d)=>{const e=(0,i.f)(a,S,R,ae,Y),f=await c.ShowViewAndWaitResult(e,!0,d),g=(0,
G.XE)(a.path,8===a.type,void 0)
;fL(r&&t?a.sharedGroup?await ae.LocalizeString("StartPage_DeleteGroup_Notification"):f?await ae.LocalizeString("StartPage_RemoveSharedFolder_Notification"):await ae.LocalizeString("StartPage_DeleteSharedFolder_Notification"):await ae.LocalizeString("Notification_File_Deleted_Text",[g]),null,null)
}))})}}(e);case 2:return async function(a){
const d=a.error&&(0,v.tM)(a.error,4),e=a.readOnly&&a.sharedFolder,f=fG(a.gotoUrl,a.matchUrl),i=0!==await fA()?await ae.LocalizeString("Menu_BlockedItem_Upgrade"):void 0,j=[]
;(null==f?void 0:f.canGoTo)&&(j.push({title:await ae.LocalizeString("Cmd_Goto_Flat"),imageClass:"command-goto-icon",
highlighted:!0,blockedText:i,onCommand:fI((async(c,e)=>{if(d)fL((0,m.Qo)(a.error),5,2);else{if(!f.unsafeToOpenInBrowser){
const c=await ab.GetValue("ToolbarOpensNewWindow",!0);return(0,J.fI)(W.GoTo(a.path,{newTab:c})),b.ClosePopup()}
fL(await ae.LocalizeString("CannotOpenUrlForSecurityReasons"),5,2)}}))}),j.push("separator"));if((null==f?void 0:f.url)&&!e){
const a=f.url;j.push({title:await ae.LocalizeString("Cmd_Copy_URL_Flat"),imageClass:"command-copy-icon",onCommand:async(c,d)=>{
await b.CopyTextToClipboardWithAutoClear(a,120);fL(await ae.LocalizeString("Notification_URL_Copied_Text"),null,null)}}),
j.push("separator")}e||(j.push({title:await ae.LocalizeString("Cmd_View_Flat"),imageClass:"command-view-icon",
onCommand:async(c,d)=>((0,J.fI)(W.OpenFile(a.path,{mode:"view"})),b.ClosePopup())}),a.readOnly||j.push({
title:await ae.LocalizeString("Cmd_Edit_Flat"),imageClass:"command-edit-icon",blockedText:i,onCommand:fI((async(c,d)=>((0,
J.fI)(W.OpenFile(a.path,{mode:"edit"})),b.ClosePopup())))}),j.push({title:await ae.LocalizeString("Cmd_Rename_Flat"),
imageClass:"command-rename-icon",blockedText:i,onCommand:fI((async(b,d)=>{const e=(0,g.z)({data:{itemPath:a.path,
itemType:a.type,groupName:null,instanceName:null,instanceDisplayName:null,initialIdentity:null},dataStorage:S,
dataItemDisplayNameProvider:T,sharing:Y,commands:W,viewApi:ae
}),f=(0,J.f4)(null,null,null),h=await c.ShowViewAndWaitResult(e,!0,f),i=(0,o.em)(a.path)
;fL(await ae.LocalizeString("Notification_Item_Renamed_Text",[i,h]),null,null)}))}),j.push({
title:await ae.LocalizeString("Cmd_Delete_Flat"),imageClass:"command-delete-icon",blockedText:i,onCommand:fI((async(b,d)=>{
const e=(0,h.C)({itemInfo:a,rfCommands:W,rfDataStorage:S,viewApi:ae});await c.ShowViewAndWaitResult(e,!0,d);const f=(0,
G.XE)(a.path,!1,void 0);fL(await ae.LocalizeString("Notification_File_Deleted_Text",[f]),null,null)}))}),j.push("separator"))
;return await fJ(a,j),await fK(a,j),j}(e);case 1:case 3:case 4:return async function(a,d){const e=a.error&&(0,
v.tM)(a.error,4),f=a.readOnly&&a.sharedFolder,i=await ab.Get({ToolbarOpensNewWindow:!0,AccountClientReadOnly:!1,
AccountClientBlocked:!1
}),j=i.ToolbarOpensNewWindow,k=0!==(0,n.z)(i)?await ae.LocalizeString("Menu_BlockedItem_Upgrade"):void 0,l=fG(a.gotoUrl,a.matchUrl),p=[]
;let q=!1;4!==a.type?d?(ao||(p.push(await s()),q=!0,f||p.push(await r())),(null==l?void 0:l.canGoTo)&&(p.push(await t()),
f||p.push(await w()))):((null==l?void 0:l.canGoTo)&&(p.push(await t()),q=!0,f||(p.push(await u()),p.push(await w()))),
ao||f||p.push(await r())):!f&&(null==l?void 0:l.canGoTo)&&p.push(await w());if(0!==p.length){if(q){const a=p[0]
;a&&"separator"!==a&&(a.highlighted=!0)}p.push("separator")}if(e||4===a.type);else{let c=!1
;const d=await S.GetDataItem(a.path,3,null,null);if(!f){const a=fM(d,x.Df);a&&(p.push({
title:await ae.LocalizeString("Cmd_Copy_Username_Flat"),imageClass:"command-copy-icon",onCommand:async(c,d)=>{
await b.CopyTextToClipboardWithAutoClear(a,120),fL(await ae.LocalizeString("Notification_Username_Copied_Text"),null,null)}}),
c=!0);const e=fM(d,x.Aq);e&&(p.push({title:await ae.LocalizeString("Cmd_Copy_Password_Flat"),imageClass:"command-copy-icon",
onCommand:async(a,c)=>{
await b.CopyTextToClipboardWithAutoClear(e,120),fL(await ae.LocalizeString("Notification_Password_Copied_Text"),null,null)}}),
c=!0)}const e=(0,o.JG)(d);e&&(p.push({title:await ae.LocalizeString("Login_OneTimeCode_Copy"),imageClass:"command-copy-icon",
onCommand:async(a,c)=>{const d=(0,C._b)(e);d&&(await b.CopyTextToClipboardWithAutoClear(d,120),
fL(await ae.LocalizeString("Login_OneTimeCode_Copied_Text"),3,null))}}),c=!0),c&&p.push("separator")}f||(p.push({
title:await ae.LocalizeString("Cmd_View_Flat"),imageClass:"command-view-icon",onCommand:async(c,d)=>((0,
J.fI)(W.OpenFile(a.path,{mode:"view"})),b.ClosePopup())}),a.readOnly||p.push({title:await ae.LocalizeString("Cmd_Edit_Flat"),
imageClass:"command-edit-icon",blockedText:k,onCommand:fI((async(c,d)=>((0,J.fI)(W.OpenFile(a.path,{mode:"edit"})),
b.ClosePopup())))}),p.push({title:await ae.LocalizeString("Cmd_Rename_Flat"),imageClass:"command-rename-icon",blockedText:k,
onCommand:fI((async(b,d)=>{const e=(0,g.z)({data:{itemPath:a.path,itemType:a.type,groupName:null,instanceName:null,
instanceDisplayName:null,initialIdentity:null},dataStorage:S,dataItemDisplayNameProvider:T,sharing:Y,commands:W,viewApi:ae
}),f=await c.ShowViewAndWaitResult(e,!0,d),h=(0,o.em)(a.path)
;fL(await ae.LocalizeString("Notification_Item_Renamed_Text",[h,f]),null,null)}))}),p.push({
title:await ae.LocalizeString("Cmd_Delete_Flat"),imageClass:"command-delete-icon",blockedText:k,onCommand:fI((async(b,d)=>{
const e=(0,h.C)({itemInfo:a,rfCommands:W,rfDataStorage:S,viewApi:ae});await c.ShowViewAndWaitResult(e,!0,d);const f=(0,
G.XE)(a.path,!1,void 0);fL(await ae.LocalizeString("Notification_File_Deleted_Text",[f]),null,null)}))}),p.push("separator"),
e||4===a.type||ao||(p.push({title:await ae.LocalizeString("Cmd_ScanQRCode_Key"),imageClass:"command-qr-scan-icon",
onCommand:async(c,d)=>{const e=await ai.CaptureScreenshotForActiveTabAsDataUrl();if(!e)throw(0,
I.ZU)(I.V2,await ae.LocalizeString("Cmd_ScanQRCode_CouldNotCaptureScreenShot",null,"Could not capture screenshot"))
;const f=await(0,z.zC)(e,null,d)
;if(!f)throw(0,I.ZU)(I.V2,await ae.LocalizeString("Cmd_ScanQRCode_CouldNotCaptureScreenShot",null,"Could not capture screenshot"))
;await W.ScanQRCode(f,a.path,d),b.ClosePopup()}}),p.push("separator")));return await fJ(a,p),await fK(a,p),p;async function r(){
return{title:await ae.LocalizeString("Cmd_FillForms_Flat"),imageClass:"command-fill-icon",blockedText:k,
onCommand:fI((async function(c,d){if(!e)return(0,J.fI)(W.FillForms({identity:!1,path:a.path,submit:!1},d)),b.ClosePopup();fL((0,
m.Qo)(a.error),5,2)}))}}async function s(){return{title:await ae.LocalizeString("AutoFill_FillSubmit"),
imageClass:"command-fillsubmit-icon",blockedText:k,onCommand:fI((async function(c,d){if(!e)return(0,J.fI)(W.FillForms({
identity:!1,path:a.path,submit:!0},d)),b.ClosePopup();fL((0,m.Qo)(a.error),5,2)}))}}async function t(){return{
title:await ae.LocalizeString("Cmd_Login_Flat"),imageClass:"command-login-icon",blockedText:k,onCommand:fI((async function(c,d){
if(e)fL((0,m.Qo)(a.error),5,2);else{if(!(null==l?void 0:l.unsafeToOpenInBrowser))return(0,J.fI)(W.GoFillSubmit({navigate:!0,
path:a.path,newTab:j,submit:!0},d)),b.ClosePopup();fL(await ae.LocalizeString("CannotOpenUrlForSecurityReasons"),5,2)}}))}}
async function u(){return{title:await ae.LocalizeString("Cmd_GoFill_Flat"),imageClass:"command-gofill-icon",blockedText:k,
onCommand:fI((async function(c,d){if(e)fL((0,m.Qo)(a.error),5,2);else{if(!(null==l?void 0:l.unsafeToOpenInBrowser))return(0,
J.fI)(W.GoFillSubmit({navigate:!0,path:a.path,newTab:j,submit:!1},d)),b.ClosePopup()
;fL(await ae.LocalizeString("CannotOpenUrlForSecurityReasons"),5,2)}}))}}async function w(){return{
title:await ae.LocalizeString("Cmd_Goto_Flat"),imageClass:"command-goto-icon",blockedText:k,onCommand:fI((async(c,d)=>{
if(e)fL((0,m.Qo)(a.error),5,2);else{if(!(null==l?void 0:l.unsafeToOpenInBrowser))return(0,J.fI)(W.GoTo(a.path,{newTab:j})),
b.ClosePopup();fL(await ae.LocalizeString("CannotOpenUrlForSecurityReasons"),5,2)}}))}}}(e,d);case 5:case 6:return fH(e,!1)
;case 7:return async function(a){const d=a.readOnly&&a.sharedFolder,e=[];e.push({title:await ae.LocalizeString("Cmd_View_Flat"),
imageClass:"command-view-icon",highlighted:!0,onCommand:async(c,d)=>((0,J.fI)(W.OpenFile(a.path,{mode:"view"})),b.ClosePopup())
});try{const c=(await S.GetDataItem(a.path,3,null,null)).m_note;c&&e.push({
title:await ae.LocalizeString("Cmd_Safenote_CopyClipboard_Flat"),imageClass:"command-copy-icon",onCommand:async(a,d)=>{(0,
J.fI)(b.CopyTextToClipboardWithAutoClear(c,120)),fL(await ae.LocalizeString("Notification_Copied_ToClipboard_Text"),3,null)}})
}catch(f){}if(e.push("separator"),!d){const b=0!==await fA()?await ae.LocalizeString("Menu_BlockedItem_Upgrade"):void 0;e.push({
title:await ae.LocalizeString("Cmd_Rename_Flat"),imageClass:"command-rename-icon",blockedText:b,onCommand:fI((async(b,d)=>{
const e=(0,g.z)({data:{itemPath:a.path,itemType:a.type,groupName:null,instanceName:null,instanceDisplayName:null,
initialIdentity:null},dataStorage:S,dataItemDisplayNameProvider:T,sharing:Y,commands:W,viewApi:ae
}),f=await c.ShowViewAndWaitResult(e,!0,d),h=(0,o.em)(a.path)
;fL(await ae.LocalizeString("Notification_Item_Renamed_Text",[h,f]),null,null)}))}),e.push({
title:await ae.LocalizeString("Cmd_Delete_Flat"),imageClass:"command-delete-icon",blockedText:b,onCommand:fI((async(b,d)=>{
const e=(0,h.C)({itemInfo:a,rfCommands:W,rfDataStorage:S,viewApi:ae});await c.ShowViewAndWaitResult(e,!0,d);const f=(0,
G.XE)(a.path,!1,void 0);fL(await ae.LocalizeString("Notification_File_Deleted_Text",[f]),null,null)}))}),e.push("separator")}
return await fJ(a,e),await fK(a,e),e}(e);default:throw(0,I.Lh)()}}function fG(a,b){return{url:a=(0,w.PH)(a,b),canGoTo:!!a&&(!(0,
s.HB)(a)||al),unsafeToOpenInBrowser:!!a&&(0,z.oK)(a)}}async function fH(a,d){const e=[],f=a.error&&(0,
v.tM)(a.error,4),i=a.readOnly&&a.sharedFolder,j=0!==await fA()?await ae.LocalizeString("Menu_BlockedItem_Upgrade"):void 0
;if(ao||e.push({title:await ae.LocalizeString("Cmd_FillForms_Flat"),imageClass:"command-fill-icon",blockedText:j,
onCommand:async(b,c)=>{f?fL((0,m.Qo)(a.error),5,2):d?fZ((()=>eC())):ee(a.path)}}),e.push("separator"),!i){a.readOnly?e.push({
title:await ae.LocalizeString("Cmd_View_Flat"),imageClass:"command-view-icon",onCommand:async(c,d)=>((0,
J.fI)(W.OpenFile(a.path,{mode:"view"})),b.ClosePopup())}):e.push({title:await ae.LocalizeString("Cmd_Edit_Flat"),
imageClass:"command-edit-icon",blockedText:j,onCommand:fI((async(c,d)=>((0,J.fI)(W.OpenFile(a.path,{mode:"edit"})),
b.ClosePopup())))}),e.push({title:await ae.LocalizeString("Cmd_Rename_Flat"),imageClass:"command-rename-icon",blockedText:j,
onCommand:fI((async(b,d)=>{const e=(0,g.z)({data:{itemPath:a.path,itemType:a.type,groupName:null,instanceName:null,
instanceDisplayName:null,initialIdentity:null},dataStorage:S,dataItemDisplayNameProvider:T,sharing:Y,commands:W,viewApi:ae
}),f=(0,J.f4)(null,null,null),h=await c.ShowViewAndWaitResult(e,!0,f);a.path===ci&&(ci=(0,G.fA)(a.path)+"/"+h+(0,o.kd)(a.type))
;const i=(0,o.em)(a.path);fL(await ae.LocalizeString("Notification_Item_Renamed_Text",[i,h]),null,null)}))});await(0,
u.B9)(S,null)&&e.push({title:await ae.LocalizeString("Cmd_Delete_Flat"),imageClass:"command-delete-icon",blockedText:j,
onCommand:fI((async(b,d)=>{const e=(0,h.C)({itemInfo:a,rfCommands:W,rfDataStorage:S,viewApi:ae})
;await c.ShowViewAndWaitResult(e,!0,d);const f=(0,G.XE)(a.path,!1,void 0)
;fL(await ae.LocalizeString("Notification_File_Deleted_Text",[f]),null,null)}))}),e.push("separator")}return await fJ(a,e),
await fK(a,e),e}function fI(a){return async(c,d)=>{const e=await fA();return 0!==e?b.ShowAskForUpgradePage(1===e,d):a(c,d)}}
async function fJ(a,c){const d=a.error&&(0,v.tM)(a.error,4),e=await ab.Get({SyncIsOn:!1,AccountClientBlocked:!1,
AccountClientReadOnly:!1}),f=await ad.Get({SelfHostedServer:!1,DisableSharing:!1,NoEmailingDataFiles:!1
}),g=f.SelfHostedServer,h=f.DisableSharing,i=e.SyncIsOn,j=f.NoEmailingDataFiles,k=0!==(0,
n.z)(e)?await ae.LocalizeString("Menu_BlockedItem_Upgrade"):void 0,l=(0,G.Y0)(a.path),o=await S.GetInfo(l,0,null)
;j||g||a.received||h||o.received||c.push({title:await ae.LocalizeString("Cmd_SendFile_Key"),imageClass:"command-send-icon",
blockedText:k,onCommand:fI((async(c,e)=>{if(!d)return await W.ShowSendFileDialog([a.path]),b.ClosePopup();fL((0,
m.Qo)(a.error),5,2)}))}),h||g||o.received||!i||c.push({title:await ae.LocalizeString("Cmd_SharedFileSettings_Key"),
imageClass:"command-share-icon",blockedText:k,onCommand:fI((async(c,e)=>{if(!d)return await W.ShowSharedFileSettings(a.path),
b.ClosePopup();fL((0,m.Qo)(a.error),5,2)}))})}async function fK(a,b){
const c=0!==await fA()?await ae.LocalizeString("Menu_BlockedItem_Upgrade"):void 0;a.favorite?b.push({
title:await ae.LocalizeString("Cmd_Unpin_Flat"),imageClass:"command-unpin-icon",blockedText:c,onCommand:fI((async function(b,c){
await V.SetUsageInfo(a.path,1,!1,c);const d=(0,m.Y5)(a.type,!1)
;fL(await ae.LocalizeString("Notification_ItemType_UnPinned_Text",[await ae.LocalizeString(d)]),null,null)}))}):b.push({
title:await ae.LocalizeString("Cmd_AddToPinned_Flat"),imageClass:"command-add-to-pinned-icon",blockedText:c,
onCommand:fI((async function(b,c){await V.SetUsageInfo(a.path,1,!0,c);const d=(0,m.Y5)(a.type,!1)
;fL(await ae.LocalizeString("Notification_ItemType_Pinned_Text",[await ae.LocalizeString(d)]),null,null)}))})}
function fL(a,b,c){dH.Show(a,b,c)}function fM(a,b){let c,d,e,f=-1;const g=a.m_fields||[];for(let h=0;h<g.length;h++){
const a=g[h];b===a.m_name&&(c=(0,M.TT)(a.m_value)),a.m_name===x.Df?d=(0,M.TT)(a.m_value):a.m_name!==x.Aq&&2!==a.m_type||(e=(0,
M.TT)(a.m_value),f=h)}return void 0===d&&f>0&&g[f-1]&&(d=(0,M.TT)(g[f-1].m_value)),b===x.Df?d:b===x.Aq?e:c}function fN(){fO(),
fP(),fS(),function(){switch(az){case 1:gu(bW),gu(cg),gv(bs);break;case 2:gu(bs),gu(cg),gv(bW);break;case 3:gu(bs),gu(bW),gv(cg)}
}(),fC(),gd()}function fO(){switch(az){case 1:a(aR),a(aT),b(aB);break;case 2:a(aB),a(aT),b(aR);break;case 3:a(aB),a(aR),b(aT)}
function a(a){(0,M.TT)(a).classList.remove("selected"),(0,M.TT)(a).ariaSelected="false"}function b(a){(0,
M.TT)(a).classList.add("selected"),(0,M.TT)(a).ariaSelected="true"}}function fP(){switch(az){case 1:if(0===bt)gu(a7);else gv(a7)
;gu(a9),gu(bd),bg?gv(a5):gu(a5);break;case 2:gv(a9),gu(a7),gu(bd),gv(a5);break;case 3:switch(ch){case 0:case 1:case 3:gu(a5)
;break;case 2:gu(a7),gu(a9),gv(bd),gv(a5)}}}function fQ(a,b){bb.set(a,b)}function fR(a,b){bf.set(a,b)}function fS(){switch(az){
case 1:gu(bh);break;case 2:{const a=bb.get(a8);void 0===a||(a?gv(bh):gu(bh))}break;case 3:switch(ch){case 0:case 1:case 3:gu(bh)
;break;case 2:{const a=bf.get(bc);void 0===a||(a?gv(bh):gu(bh))}}}}function fT(){switch(az){case 1:break;case 2:switch(a8){
case 0:gp(bj,bk);break;case 1:gp(bj,bl);break;default:gp(bj,bm)}break;case 3:gp(bj,2===ch&&0===bc?bn:bo)}}function fU(){
switch(az){case 2:e5();break;case 3:ef();break;default:dQ()}}function fV(a,b,c,d){if(2!==c.button)return
;const e=b.getBoundingClientRect(),f={height:e.height,top:e.top,bottom:e.bottom,y:e.top,width:0,x:c.clientX,right:c.clientX,
left:c.clientX};dK=(0,k.Lj)(f,(()=>fF(a,d)),(0,k.NI)(b),(function(a,c){return(0,M.TT)(ar).style.width=(0,z.Md)(a),(0,
M.TT)(ar).style.height=(0,z.Md)(c),b.getBoundingClientRect()}),gn)}function fW(a,c,d){if((0,v.tM)(a.error,4))fL((0,
m.Qo)(a.error),5,2);else if(1===a.type||3===a.type)(0,J.fI)((async()=>{if(1===await fA())fX((async()=>{await W.OpenFile(a.path,{
mode:"view"}),b.ClosePopup()}));else{const e=fG(a.gotoUrl,a.matchUrl);if(null==e?void 0:e.unsafeToOpenInBrowser)return void(0,
J.fI)((async()=>fL(await ae.LocalizeString("CannotOpenUrlForSecurityReasons"),5,2))());fZ((()=>b.LoginItemAction(a.path,c,d)))}
})());else if(7===a.type||6===a.type)fX((()=>b.SafenoteItemAction(a.path)));else if(2===a.type||4===a.type){
const c=fG(a.gotoUrl,a.matchUrl);if(null==c?void 0:c.unsafeToOpenInBrowser)return void(0,
J.fI)((async()=>fL(await ae.LocalizeString("CannotOpenUrlForSecurityReasons"),5,2))());fZ((()=>b.BookmarkItemAction(a.path)))
}else 5===a.type&&(c?ee(a.path):fX((async()=>{await async function(a){return(0,J.fI)(W.OpenFile(a,{mode:"view"})),b.ClosePopup()
}(a.path),b.ClosePopup()})))}function fX(a){(0,A.D$)(a,f8,dl,f6)}function fY(a){(0,A.D$)((async()=>{try{await f0(a)}finally{
await c.ShowView(dO,!1)}}),f8,dl,f6)}function fZ(a){(0,A.D$)((()=>f0(a)),f8,dl,f6)}async function f0(a){const d=await fA()
;if(0===d)try{await a()}catch(e){if((0,I.r5)(e,I.kd))throw e;fL((0,m.Qo)(e),5,2)}else try{
await b.ShowAskForUpgradePage(1===d,(0,J.f4)(null,null,null))}catch(e){(0,I.r5)(e,I.kd)||fL((0,m.Qo)(e),5,2)}finally{
await c.ShowView(dO,!1)}}function f1(a,b,c,d,e){d!==aQ?function(a,b,c,d){const e=b.getBoundingClientRect();function f(){
let d=null;return{onShow:f=>{(0,k.dB)(b,!0),a&&(0,k.dB)(a,!0);let g=b.parentElement
;for(;null!==g;)g.addEventListener("scroll",e),g=g.parentElement;d=f,aQ=c},onHide:()=>{(0,k.dB)(b,!1),a&&(0,k.dB)(a,!1)
;let f=b.parentElement;for(;null!==f;)f.removeEventListener("scroll",e),f=f.parentElement;d=null,setTimeout((function(){
c===aQ&&(aQ=null)}),300)}};function e(){null==d||d.Hide(4)}}dK=(0,k.Lj)(e,(()=>fF(c,d)),f(),(function(a,c){return(0,
M.TT)(ar).style.width=(0,z.Md)(a),(0,M.TT)(ar).style.height=(0,z.Md)(c),b.getBoundingClientRect()}),gn)
}(b,c,d,e):a.stopPropagation()}function f2(a){fX((async()=>{await W.OpenFile(a.path,{mode:"view",startPage:!0}),b.ClosePopup()
}))}function f3(a,...b){switch(a){case"UpdateFillOptions":fi();break;case"AutoFillModesChanged":fj()}}function f4(a){var b
;let c=!1,d=!1,e=!1,f=!1,g=!1,h=!1;for(const i of a)switch(i.event){case 1:case 2:case 3:c=!0,d=!0,e=!0,f=!0;break;case 5:
case 11:c=!0,d=!0,e=!0;break;case 7:case 8:c=!0,d=!0,e=!0,8===i.type&&i.path&&(0,o.QC)(i.path,bv)&&(bv=""),
8===i.type&&i.path&&(0,
o.QC)(i.path,bX)&&(bX=""),5===i.type&&i.path&&8===i.event&&ci===i.path&&(ci=(null===(b=i.to)||void 0===b?void 0:b.path)||"",
g=!0);break;case 10:h=!0;break;case 12:d=!0}if(!h){if(c&&cR.clear(),d||e)if(0!==cI){if(e){let a;switch(cI){default:case 1:a=(0,
M.TT)(av).value;break;case 2:a=(0,M.TT)(bj).value}eV(a,dm)}}else switch(az){case 1:dZ(bt,a6);break;case 2:e9(dm);break;case 3:
eg(dm)}g&&el(),f&&gm()}}function f5(a){let b=!1;for(const c in a)switch(c){case"FillEmptyFieldsOnlyIdentity":
cq=void 0!==a[c].newValue&&a[c].newValue,cs||(cr=cq,cm&&cm.SetChecked(cr));break;case"AccountCreatedTime":b=!0}b&&(0,
J.fI)(async function(){an=await gb(),an?gv(aF):gu(aF)}())}function f6(){return gv(dk),f7}function f7(){gu(dk)}function f8(){
return(0,M.TT)(bp).classList.add("disabled-state"),(0,M.TT)(ar).addEventListener("mousedown",ga,!0),f9}function f9(){(0,
M.TT)(bp).classList.remove("disabled-state"),(0,M.TT)(ar).removeEventListener("mousedown",ga,!0)}function ga(a){
a.preventDefault(),a.stopPropagation()}async function gb(){return!!b.IsNativeUIAvailable()&&(0,p.uO)(ab)}function gc(){(0,
J.uT)(async function(a,b){await a.Set({MainPageState:b})}(ae.storage,{itemsListType:bt,itemsListMode:a6,fillIdViewType:ch,
fillIdPath:ci}),"MainPage:_PersistState")}function gd(){switch(az){case 1:gu(cU);break;case 2:case 3:
(null==cH?void 0:cH.m_show_password_generator)?gv(cU):gu(cU)}}function ge(){if(!c2)return;const a=c2;fZ((async()=>{var b
;const c=await W.FillFieldsWithGeneratedPassword(a,null);if(c&&0!==c.filledFieldsCount){
const c=await ae.CallBackgroundScript("GetCurrentTabUrl",null,null),d=(0,G.vN)(c),e=null!==(b=(null==d?void 0:d.m_host)&&(0,
G.an)(d.m_host))&&void 0!==b?b:"";for(let b=0;b<de.length;b++)if(de[b].m_password===a){const a=de[b],c={m_domain:e,
m_time_utc_secs:(0,O.t2)()};a.m_fill_history?a.m_fill_history.unshift(c):a.m_fill_history=[c],(0,
J.fI)(Z.UpdatePasswordData(a,null));break}fL(dJ,3,null)}}))}function gf(a){c2&&((0,J.fI)(async function(){
await b.CopyTextToClipboardWithAutoClear(c2,120);for(let a=0;a<de.length;a++)if(de[a].m_password===c2){const b=de[a]
;b.m_time_last_copied_utc_secs=(0,O.t2)(),(0,J.fI)(Z.UpdatePasswordData(b,null));break}fL(dI,3,null)}()),a.stopPropagation())}
function gg(a){(0,J.fI)(gk()),a.stopPropagation()}function gh(a){cY.Start((async b=>{await ac.Set({PassGenCharNumber:a.m_length,
PassGenExcludeSimilar:a.m_exclude_similar_chars,PassGenUseHexChars:a.m_hex_digits_only,
PassGenCheckUpper:a.m_include_upper_case_chars,PassGenCheckLower:a.m_include_lower_case_chars,
PassGenCheckNumber:a.m_include_digits,PassGenCheckSpecial:!!a.m_specific_chars,PassGenCharSet:a.m_specific_chars}),
b.ThrowIfShouldStop(),function(){const a=(0,M.TT)(cX).GetValues()
;a.m_hex_digits_only||a.m_include_upper_case_chars||a.m_include_lower_case_chars||a.m_include_digits||a.m_specific_chars?(0,
M.TT)(c1).classList.remove("disabled"):(0,M.TT)(c1).classList.add("disabled")}()}))}function gi(){fX((()=>gj()))}
async function gj(){
c3?(await ac.Remove(["PassGenCharNumber","PassGenExcludeSimilar","PassGenUseHexChars","PassGenCheckUpper","PassGenCheckLower","PassGenCheckNumber","PassGenCheckSpecial","PassGenCharSet"]),
(0,
M.TT)(cX).SetValues((0,d.H5)())):(await ac.Remove(["PassphraseGenCharNumber","PassphraseGenExcludeSimilar","PassphraseGenUseHexChars","PassphraseGenCheckUpper","PassphraseGenCheckLower","PassphraseGenCheckNumber","PassphraseGenCheckSpecial","PassphraseGenCharSet"]),
(0,M.TT)(cX).SetValues((0,d.CZ)()))}async function gk(){(0,M.TT)(cX).CorrectInputValues();const a=(0,M.TT)(cX).GetValues();let b
;if(c3)b={m_password:(0,E.Zf)(a.m_length,a,ak),m_generator_type:0,m_time_generated_utc_secs:(0,O.t2)()};else{const c=(0,
M.TT)(c0).words;b={m_password:(0,E.e3)(a.m_length,a,c),m_generator_type:1,m_time_generated_utc_secs:(0,O.t2)()}}
await Z.AddPassword(b,null),de=[...await Z.GetHistory(null)],(0,M.TT)(cV).textContent=b.m_password,c2=b.m_password,await gl()}
async function gl(){if(!c2)return void gu(cW);const a=(0,q.im)(c2,[],null,await async function(a){
return cZ.GetOnce((async()=>(0,q.v5)(await(0,F.$)("pwd-dict.json",a,aj))))}(null));let b,c;a>75?(b=c4,c="strong"):a>50?(b=c5,
c="good"):a>25?(b=c6,c="medium"):(b=c7,c="weak"),(0,M.TT)(cW).SetState(c,b),gv(cW)}function gm(){(0,J.fI)((async()=>{
await async function(a){var c;const d=await b.GetUpgradeMessagesUIInfo(a);if(!d.showUpgradeUI)return gu(dG),!1
;if(d.readOnlyMode);else{const a=(0,O.t2)(),b=await(0,m.TI)(ae.storage),c=86400,e=28*c
;if(b.closedTime)if(d.licenseExpirationTime){const f=d.licenseExpirationTime-a;if(f>e)return gu(dG),!1
;const g=d.licenseExpirationTime-b.closedTime;if(g<=c)return gu(dG),!1;if(d.licenseTrial){const d=c
;if(a-b.closedTime<d)return gu(dG),!1}else if(2*f>g)return gu(dG),!1}else{const d=3*c;if(a-b.closedTime<d)return gu(dG),!1}
if(d.licenseExpirationTime&&d.licenseExpirationTime-a>e)return gu(dG),!1}
const e=d.enterprise?d.licenseTrial?await ae.LocalizeString("UpgradeMessage_RoboFormEnterpriseTrialExpires"):await ae.LocalizeString("UpgradeMessage_RoboFormEnterpriseExpires"):await ae.LocalizeString("UpgradeMessage_RoboFormWillSwitchToFreeMode"),f=null!==(c=await ae.GetLanguageTag(null))&&void 0!==c?c:"",g=Q("div",{
className:"upgrade-messages flex-row"},Q("div",{className:"content flex-cell"},d.readOnlyMode?Q("div",{className:"message"
},await ae.LocalizeString("UpgradeMessage_RoboFormIsInReadOnlyMode")):d.licenseExpirationTime?Q("div",{className:"message"
},Q("span",null,(0,L.SI)(e,"%1").before),Q("span",{className:"date"},(0,O.Io)(d.licenseExpirationTime,f)),Q("span",null,(0,
L.SI)(e,"%1").after)):Q("div",{className:"message"},await ae.LocalizeString("UpgradeMessage_RoboFormIsInFreeMode")),Q("div",{
className:"links-row flex-row"},Q("a",{className:"learn-more link",href:"#",onclick:()=>fX((async()=>{try{await ae.OpenUrl({
newTab:!0,reuseExisting:!0,url:d.enterprise?m.Nd:m.EJ},null)}catch(a){if(!(0,I.r5)(a,I.kd))return void fL((0,m.Qo)(a),5,2)}
b.ClosePopup()}))},await ae.LocalizeString("UpgradeMessage_LearnMore")),Q("div",{className:"links-separator"}),Q("a",{
className:"upgrade link",href:"#",onclick:()=>fX((async()=>{try{await W.OpenPaymentPage({action:"buy"},null)}catch(a){if(!(0,
I.r5)(a,I.kd))return void fL((0,m.Qo)(a),5,2)}b.ClosePopup()}))
},await ae.LocalizeString("Cmd_License_BuyNow")))),d.readOnlyMode?null:Q("div",{className:"close-button",onclick:()=>{gu(dG),(0,
J.fI)((async()=>{const a=(0,O.t2)();await(0,m.CG)({updatedTime:a,closedTime:a},ae.storage)})())}},"✖"))
;return null==dG||dG.replaceWith(g),dG=g,!0}(null)?gu(dF):ag&&await async function(){var a,c,d;const e=86400,f=30*e,g=60*e
;if(!await b.HaveActivePaidConsumerLicense())return
;const h=await(0,m.iK)(ae.storage),i=null!==(a=h.state)&&void 0!==a?a:0,j=null!==(c=h.sessionsCount)&&void 0!==c?c:1,k=(0,
O.t2)(),l=null!==(d=h.sessionsStartTimes)&&void 0!==d?d:[k],n=(0,M.TT)(ag).GetExtensionWebStoreInfo().id,o=await(0,
m.D8)(ab,n),q=l.reduce(((a,b)=>k-b<7*e?a+1:a),0);switch(i){case 0:switch(o){case p.VR.Enjoyed:return await v(2),s()
;case p.VR.NotEnjoyed:return y();case p.VR.Rated:return x()}return void 0!==h.delayUntil?k>h.delayUntil?(await v(1),
r()):void 0:q<3?void 0===h.state?v(0):void 0:(await v(1),r());case 1:switch(o){case p.VR.Enjoyed:return await v(2),s()
;case p.VR.NotEnjoyed:return y();case p.VR.Rated:return x()}return void 0!==h.delayUntil?k>h.delayUntil?(await v(1),
r()):void 0:j<=3?r():w(1,f);case 2:switch(o){case p.VR.NotEnjoyed:return y();case p.VR.Rated:return x()}
return void 0!==h.delayUntil?k>h.delayUntil?(await v(2),s()):void 0:j<=1?s():w(2,g);case 3:
return o===p.VR.Rated?x():j<=1?t():y();case 4:case 5:return}return;async function r(){const a=Q("div",{
className:"rate-extension flex-row"},Q("div",{className:"text text-break-word flex-cell"
},await ae.LocalizeString("MainPage_EnjoyUsing",["RoboForm"])),Q("div",{className:"important-button button",onclick:()=>(0,
J.fI)((async()=>{const a=(0,M.TT)(ag).GetExtensionWebStoreInfo().id;await(0,m.sp)(p.VR.Enjoyed,ac,a),await s(),await v(2)})())
},await ae.LocalizeString("Yes")),Q("div",{className:"regular-button button",onclick:()=>(0,J.fI)((async()=>{const a=(0,
M.TT)(ag).GetExtensionWebStoreInfo().id;await(0,m.sp)(p.VR.NotEnjoyed,ac,a),await t(),await v(3)})())
},await ae.LocalizeString("No")),Q("div",{className:"close-button",onclick:()=>(0,J.fI)((async()=>{await u(),await w(1,g)})())
},"✖"));null==dF||dF.replaceWith(a),dF=a}async function s(){const a=Q("div",{className:"rate-extension flex-row"},Q("div",{
className:"text text-break-word flex-cell"},await ae.LocalizeString("MainPage_PleaseRateUs")),Q("div",{
className:"important-button button",onclick:()=>(0,J.fI)((async()=>{await u(),await x();const a=(0,
M.TT)(ag).GetExtensionWebStoreInfo().id;await(0,m.sp)(p.VR.Rated,ac,a),await z()})())
},await ae.LocalizeString("MainPage_RateUs_Btn_Text",["RoboForm"])),Q("div",{className:"regular-button button",onclick:()=>(0,
J.fI)((async()=>{await u(),await w(2,f)})())},await ae.LocalizeString("MainPage_RemindMeLater_Btn_Text")),Q("div",{
className:"close-button",onclick:()=>(0,J.fI)((async()=>{await u(),await w(2,g)})())},"✖"));null==dF||dF.replaceWith(a),dF=a}
async function t(){const a=Q("div",{className:"rate-extension flex-row"},Q("div",{className:"text text-break-word flex-cell"
},await ae.LocalizeString("MainPage_WouldYouLikeReportAnIssue")),Q("div",{className:"regular-button button",onclick:()=>(0,
J.fI)((async()=>{await u(),await y()})())},await ae.LocalizeString("No")),Q("div",{className:"regular-button button",
onclick:()=>(0,J.fI)((async()=>{await u(),await y(),await async function(){await W.ContactSupport({reportType:"WebPage"},null),
b.ClosePopup()}()})())},await ae.LocalizeString("Yes")));null==dF||dF.replaceWith(a),dF=a}async function u(){gu(dF)}
async function v(a){const b=(0,O.t2)();return(0,m.bY)({state:a,stateSetTime:b,sessionsCount:1,sessionsStartTimes:[b],
updatedTime:b},ae.storage)}async function w(a,b){const c=(0,O.t2)();return(0,m.bY)({state:a,stateSetTime:c,delayUntil:c+b,
updatedTime:c},ae.storage)}async function x(){return(0,m.bY)({state:4,stateSetTime:(0,O.t2)()},ae.storage)}async function y(){
return(0,m.bY)({state:5,stateSetTime:(0,O.t2)()},ae.storage)}async function z(){return(0,J.fI)(ae.OpenUrl({url:(0,
M.TT)(ag).GetExtensionWebStoreInfo().url,newTab:!0,reuseExisting:!0},null)),b.ClosePopup()}}()})())}function gn(a,b){const d=(0,
J.f4)(null,null,null);fX((async()=>{try{await a(b,d)}catch(e){(0,I.r5)(e,I.kd)||fL((0,m.Qo)(e),5,2)}finally{
await c.ShowView(dO,!1)}}))}function go(a,b,c){let d=b;return a.onclick=()=>{d?(d=!1,function(a){
null==a||a.classList.remove("expanded")}(c())):(d=!0,function(a){null==a||a.classList.add("expanded")}(c()))},a}
function gp(a,b){null==a||a.setAttribute("placeholder",b)}function gq(a,b){(0,M.TT)(a).title=b}function gr(a,b){(0,
M.TT)(a).innerText=b}function gs(a,b){(0,M.TT)(a).setAttribute("aria-label",b)}function gt(a,b){(0,
M.TT)(a).setAttribute("aria-selected",b)}function gu(a){null==a||a.classList.add("hidden")}function gv(a){
null==a||a.classList.remove("hidden")}function gw(a,b){if(5===a||6===a){return 0!==(0,o.Wi)(b).type}return!1}
async function gx(a){return T.GetDisplayNameByPath(a,null)}}},41699:function(a,b,c){"use strict";c.d(b,{j:function(){return h}})
;var d=c(47333),e=c(63956),f=c(4153),g=(c(13117),c(91764)._);function h(a){const{folders:b,sharing:c,viewApi:h,serverUrl:i}=a
;let j=null;const k=new Set;let l=null,m=null,n=null,o=null;const p=[];let q=null;return{Create:async function(a,c){const e=(0,
d.sU)(i),f=await h.LocalizeString("SharedFoldersConfirmation_Title"),v=await h.LocalizeString("Cmd_Accept_Key"),w=await h.LocalizeString("Cmd_Reject_Key"),x=await h.LocalizeString("Cmd_Skip_Flat"),y=[]
;for(const d of b){const a=d.name||"folder";let b,c=""
;c=d.senderName&&d.senderName!==d.senderEmail?`${d.senderName} <${d.senderEmail}>`:d.senderName?d.senderName:d.senderEmail
;const e=g("div",{className:"checkbox item-row"},g("label",{className:"flex-cell"},g("div",{className:"icon-section item-icon"
}),g("div",{className:"text-section"},g("div",{className:"normal-text item-name-text"},a),g("div",{
className:"hint-text sender-name-text"},c)),g("div",{className:"flex-cell"}),g("div",{className:"item-check"},b=g("input",{
type:"checkbox",checked:!0,onchange:()=>{b.checked?k.add(d):k.delete(d),u()}}),g("div",{className:"checkbox-check"}))))
;y.push(e),p.push(b),k.add(d)}const z=g("div",{className:"received-accounts-page setup-page receive-invite-page"},g("div",{
className:"header-section"},g("div",{className:"header-text-section"},g("div",{className:"title-text"},"RoboForm"))),q=g("div",{
className:"action-progress-overlay-circle size64 hidden"}),g("div",{className:"hint-text rfo-server-title-text"
}," ",e||""," "),g("div",{className:"normal-text invite-text"},f),g("div",{className:"items-container"},y),o=g("div",{
className:"error-text"}),g("div",{className:"page-flexy-space"}),g("div",{className:"buttons-section"},g("div",{
className:"padding-div"}),l=g("input",{type:"button",className:"important-button normal-button",value:v,onclick:r
}),m=g("input",{type:"button",className:"regular-button normal-button",value:w,onclick:s}),n=g("input",{type:"button",
className:"regular-button normal-button",value:x,onclick:t})));return j=a,z},OnAfterShow:function(){},OnBeforeHide:function(){},
Focus:function(){(0,f.TT)(l).focus()},Dispose:function(){}};function r(){y(),(0,e.D$)((()=>async function(){try{
for(const a of k){const b=a.accountId;await c.AcceptSharedAccount(b,null)}}catch(a){return void x((0,d.Qo)(a))}(0,f.TT)(j)()
}()),z,500,v)}function s(){y(),(0,e.D$)((()=>async function(){try{for(const a of k){const b=a.accountId
;await c.RejectSharedAccount(b,null)}}catch(a){return void x((0,d.Qo)(a))}(0,f.TT)(j)()}()),z,500,v)}function t(){z(),(0,
f.TT)(j)()}function u(){const a=0===k.size;(0,f.TT)(l).disabled=a,(0,f.TT)(m).disabled=a}function v(){return(0,
f.TT)(q).classList.remove("hidden"),w}function w(){(0,f.TT)(q).classList.add("hidden")}function x(a){(0,f.TT)(o).textContent=a}
function y(){(0,f.TT)(o).textContent=""}function z(){return B(l),B(m),B(n),p.forEach(B),A}function A(){C(l),C(m),C(n),
p.forEach(C)}function B(a){(0,f.TT)(a).setAttribute("disabled","disabled")}function C(a){(0,f.TT)(a).removeAttribute("disabled")
}}},9958:function(a,b,c){"use strict";c.d(b,{c:function(){return k}})
;var d=c(47333),e=c(4234),f=c(54811),g=c(63956),h=c(4153),i=c(73863),j=(c(13117),c(91764)._);function k(a){
const{files:b,sharing:c,viewApi:k,serverUrl:l}=a;let m=null;const n=new Set,o=[];let p=null,q=null,r=null,s=null,t=null;return{
Create:async function(a,c){
const g=(0,d.sU)(l)||"",h=await k.LocalizeString("SharedFilesConfirmation_Title"),y=await k.LocalizeString("Cmd_Accept_Key"),z=await k.LocalizeString("Cmd_Reject_Key"),A=await k.LocalizeString("Cmd_Skip_Flat"),B=[]
;for(const d of b){const a=d.name||"";if(!a)continue;const b=(0,e.em)(a),c=(0,e.hF)(a);let g,h=""
;d.grantorName&&d.grantorEmail&&d.grantorName!==d.grantorEmail?h=`${d.grantorName} <${d.grantorEmail}>`:d.grantorName?h=d.grantorName:d.grantorEmail&&(h=d.grantorEmail)
;const k=j("div",{className:"checkbox item-row"},j("label",{className:"flex-cell"},j("div",{className:(0,
i.bt)("icon-section"," ",(0,f._m)(c))}),j("div",{className:"text-section"},j("div",{className:"normal-text item-name-text"
},b),j("div",{className:"hint-text sender-name-text"},h)),j("div",{className:"flex-cell"}),j("div",{className:"item-check"
},g=j("input",{type:"checkbox",checked:!0,onchange:()=>{g.checked?n.add(d):n.delete(d),x()}}),j("div",{
className:"checkbox-check"}))));B.push(k),o.push(g),n.add(d)}const C=j("div",{
className:"received-files-page setup-page receive-invite-page"},j("div",{className:"header-section"},j("div",{
className:"header-text-section"},j("div",{className:"title-text"},"RoboForm"))),t=j("div",{
className:"action-progress-overlay-circle size64 hidden"}),j("div",{className:"hint-text rfo-server-title-text"
}," ",g||""," "),j("div",{className:"normal-text invite-text"}," ",h," "),j("div",{className:"items-container"},B),s=j("div",{
className:"error-text"}),j("div",{className:"page-flexy-space"}),j("div",{className:"buttons-section"},j("div",{
className:"padding-div"}),p=j("input",{type:"button",className:"important-button normal-button",value:y,onclick:u
}),q=j("input",{type:"button",className:"regular-button normal-button",value:z,onclick:v}),r=j("input",{type:"button",
className:"regular-button normal-button",value:A,onclick:w})));return m=a,C},OnAfterShow:function(){},OnBeforeHide:function(){},
Focus:function(){(0,h.TT)(p).focus()},Dispose:function(){}};function u(){B(),(0,g.D$)((()=>async function(){try{
for(const a of n)await c.AcceptSharedFile(a,null)}catch(a){return void A((0,d.Qo)(a))}(0,h.TT)(m)()}()),C,500,y)}function v(){
B(),(0,g.D$)((()=>async function(){try{for(const a of n)await c.RejectSharedFile(a,null)}catch(a){return void A((0,d.Qo)(a))}(0,
h.TT)(m)()}()),C,500,y)}function w(){C(),(0,h.TT)(m)()}function x(){const a=0===n.size;(0,h.TT)(p).disabled=a,(0,
h.TT)(q).disabled=a}function y(){return(0,h.TT)(t).classList.remove("hidden"),z}function z(){(0,h.TT)(t).classList.add("hidden")
}function A(a){(0,h.TT)(s).textContent=a}function B(){(0,h.TT)(s).textContent=""}function C(){E(p),E(q),E(r)
;for(const a of o)E(a);return D}function D(){F(p),F(q),F(r);for(const a of o)F(a)}function E(a){(0,
h.TT)(a).setAttribute("disabled","disabled")}function F(a){(0,h.TT)(a).removeAttribute("disabled")}}},40364:function(a,b,c){
"use strict";c.d(b,{U:function(){return f}});var d=c(47333),e=(c(13117),c(91764)._);function f(a,b){const c=a,f=b.LocalizeString
;return{Create:async function(a,b){var h,i;const j=[];for(const f of c){const a=e("div",{className:"sync-error"},e("div",{
className:"account"},e("div",null,e("div",{className:"icon folder-icon"}),e("div",{className:g(f)})),e("div",{
className:"account-name"},null!==(h=f.accountName)&&void 0!==h?h:"")),e("div",{className:"error"},e("div",{
className:"error-icon"}),e("div",{className:"text"},(0,d.Qo)(null!==(i=f.syncError)&&void 0!==i?i:""))));j.push(a)}
return e("div",{className:"sync-errors-page setup-page"},e("div",{className:"header"},f("RFOSync_ErrorSheet_Title")),e("div",{
className:"content"},e("div",{className:"sync-result"},e("div",{className:"sync-result-icon"}),e("div",{
className:"sync-result-text"},f("RFOSync_CompletedWithErrors"))),e("div",{className:"errors"},j),e("div",{className:"flexy"
}),e("div",{className:"footer"},e("input",{type:"button",className:"normal-button regular-button",
value:await f("Cmd_Retry_Flat"),onclick:()=>a(1)}),e("input",{type:"button",className:"normal-button regular-button",
value:await f("Cmd_Ok_Flat"),onclick:()=>a(0)}))))},OnAfterShow:()=>{},OnBeforeHide:()=>{},Focus:()=>{},Dispose:()=>{}}
;function g(a){
return void 0!==a.company?a.readOnly?"icon-overlay icon-overlay-limited":"icon-overlay icon-overlay-manager":a.readOnly?"icon-overlay icon-overlay-login-only":"icon-overlay icon-overlay-granted"
}}},23097:function(a,b,c){"use strict";c.d(b,{J:function(){return e}});var d=c(91764)._;function e(a){
const b=a.localization.LocalizeString;return{Create:async function(){return d("div",{className:"desktop-app-is-updating-page"
},d("div",{className:"logo"},d("div",{className:"icon icon-robot"}),d("div",{className:"icon icon-name"})),d("div",{
className:"updating-text unselectable"},await b("DesktopAppIsUpdating_Text")))},OnAfterShow:function(){},
OnBeforeHide:function(){},Focus:function(){},Dispose:function(){}}}},47836:function(a,b,c){"use strict";c.d(b,{m:function(){
return i},o:function(){return j}});var d=c(3566),e=c(63956),f=c(69893),g=c(4153),h=(c(13117),c(21566),c(208),c(74350),
c(91764)._);function i(a,b,c,f){let i=null,j=null,k=null,l=null,m=null,n=null;let o=b,p=c;return{Create:async function(b,c){
const e=await a.LocalizeString("AskConsentToCollectData_Title"),f=await a.LocalizeString("AskConsentToCollectData_SectionTitleStart_Text"),g=await a.LocalizeString("AskConsentToCollectData_PersonalDataSection_Text"),v=await a.LocalizeString("AskConsentToCollectData_TechnicalDataSection_Text"),w=await a.LocalizeString("AskConsentToCollectData_UrlsAndSearchTerms_Text"),x=await a.LocalizeString("AskConsentToCollectData_ActionsAndFilledInformation_Text"),y=await a.LocalizeString("AskConsentToCollectData_PersonalRejectionImpact_Text"),z=await a.LocalizeString("AskConsentToCollectData_TechnicalRejectionImpact_Text"),A=await a.LocalizeString("AskConsentToCollectData_Details_Text"),B=await a.LocalizeString("AskConsentToCollectData_PrivacyPolicy_Link_Text"),C=await a.LocalizeString("AskConsentToCollectData_ContinueButton_Text"),D=await a.LocalizeString("AskConsentToCollectData_YesSwitcher_Text"),E=await a.LocalizeString("AskConsentToCollectData_NoSwitcher_Text"),F=h("div",{
className:"ask-consent-page unselectable"},j=h("div",{className:"content"},h("div",{className:"title"},e),h("div",{
className:"data-section"},h("div",{className:"data-section-title"},f,h("div",{className:"personal-data-section-title"
},g)),h("div",{className:"personal-data-description"},h("ul",null,h("li",{className:"urls-and-search-terms"},w)),h("div",{
className:"flexy-space"}),k=h(d.ij,{leftValue:E,rightValue:D,default:o?"right":"left",highlighted:"right",onSwitch:s
})),h("div",{className:"personal-data-reject-impact"},y)),h("div",{className:"data-section"},h("div",{
className:"technical-section-title"},f,h("div",{className:"technical-data-section-title"},v)),h("div",{
className:"technical-data-description"},h("ul",null,h("li",{className:"technical-data"},x)),h("div",{className:"flexy-space"
}),l=h(d.ij,{leftValue:E,rightValue:D,default:p?"right":"left",highlighted:"right",onSwitch:t})),h("div",{
className:"technical-data-reject-impact"},z)),h("div",{className:"permissions-text"},A,h("a",{href:"#",onclick:q
},B),"."),m=h("input",{type:"button",value:C,className:"important-button normal-button",onclick:r})),n=h("div",{
className:"action-progress-overlay-circle size64 hidden"}));return u(),i=b,F},OnAfterShow:function(){},
OnBeforeHide:function(){},Focus:function(){},Dispose:function(){}};function q(){(0,e.D$)((()=>f()),x,1e3,v)}function r(){
const a={m_have_consent_for_personal_data:o,m_have_consent_for_technical_data:p};x(),(0,g.TT)(i)(a)}function s(a){o="right"===a,
u()}function t(a){p="right"===a,u()}function u(){o&&p?(0,g.TT)(m).removeAttribute("disabled"):(0,
g.TT)(m).setAttribute("disabled","disabled")}function v(){return(0,g.TT)(n).classList.remove("hidden"),w}function w(){(0,
g.TT)(n).classList.add("hidden")}function x(){return(0,g.TT)(m).setAttribute("disabled","disabled"),(0,
g.TT)(l).classList.add("switcher-disabled"),(0,g.TT)(k).classList.add("switcher-disabled"),(0,
g.TT)(j).classList.add("disabled-state"),window.addEventListener("mousedown",z,!0),y}function y(){u(),(0,
g.TT)(l).classList.remove("switcher-disabled"),(0,g.TT)(k).classList.remove("switcher-disabled"),(0,
g.TT)(j).classList.remove("disabled-state"),window.removeEventListener("mousedown",z,!0)}function z(a){a.preventDefault(),
a.stopPropagation()}}function j(a,b){const c=b;let d=null,i=null,j=null,k=null;return{Create:async function(b,c){
const e=await a.LocalizeString("AskConsentToCollectData_RoboFormCannotWorkWithoutPermissions_Text"),f=await a.LocalizeString("AskConsentToCollectData_RemoveExtensionButton_Text"),g=await a.LocalizeString("AskConsentToCollectData_RevisitConsentsButton_Text"),n=h("div",{
className:"need-user-consent-page unselectable"},h("div",{className:"title"},"Privacy"),h("div",{
className:"consent-required-message"},e),h("div",{className:"footer"},i=h("input",{type:"button",value:f,
className:"normal-button regular-button",onclick:l}),h("div",{className:"flexy-space"}),j=h("input",{type:"button",value:g,
className:"important-button normal-button",onclick:m})),k=h("div",{className:"action-progress-overlay-circle size48 hidden"}))
;return d=c,n},OnAfterShow:function(){},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){}};function l(){(0,
e.D$)((()=>c.UninstallExtension()),p,1e3,n)}function m(){p(),(0,g.TT)(d)((0,f.JS)())}function n(){return(0,
g.TT)(k).classList.remove("hidden"),o}function o(){(0,g.TT)(k).classList.add("hidden")}function p(){return(0,
g.TT)(i).setAttribute("disabled","disabled"),(0,g.TT)(j).setAttribute("disabled","disabled"),
window.addEventListener("mousedown",r,!0),q}function q(){(0,g.TT)(i).removeAttribute("disabled"),(0,
g.TT)(j).removeAttribute("disabled"),window.removeEventListener("mousedown",r,!0)}function r(a){a.preventDefault(),
a.stopPropagation()}}},42285:function(a,b,c){"use strict";c.d(b,{w:function(){return d}});c(13117);function d(){const a=chrome
;return{CaptureScreenshotForActiveTabAsDataUrl:async function(){try{const b={origins:["<all_urls>"]}
;if(!await a.permissions.contains(b)&&!await a.permissions.request(b))return;return await a.tabs.captureVisibleTab({
format:"jpeg",quality:70})}catch(b){return}}}}},40935:function(a){"use strict";a.exports=function(a){var b=[]
;return b.toString=function(){return this.map((function(b){var c="",d=void 0!==b[5]
;return b[4]&&(c+="@supports (".concat(b[4],") {")),b[2]&&(c+="@media ".concat(b[2]," {")),
d&&(c+="@layer".concat(b[5].length>0?" ".concat(b[5]):""," {")),c+=a(b),d&&(c+="}"),b[2]&&(c+="}"),b[4]&&(c+="}"),c})).join("")
},b.i=function(a,c,d,e,f){"string"==typeof a&&(a=[[null,a,void 0]]);var g={};if(d)for(var h=0;h<this.length;h++){
var i=this[h][0];null!=i&&(g[i]=!0)}for(var j=0;j<a.length;j++){var k=[].concat(a[j])
;d&&g[k[0]]||(void 0!==f&&(void 0===k[5]||(k[1]="@layer".concat(k[5].length>0?" ".concat(k[5]):""," {").concat(k[1],"}")),
k[5]=f),c&&(k[2]?(k[1]="@media ".concat(k[2]," {").concat(k[1],"}"),k[2]=c):k[2]=c),
e&&(k[4]?(k[1]="@supports (".concat(k[4],") {").concat(k[1],"}"),k[4]=e):k[4]="".concat(e)),b.push(k))}},b}},20062:function(a){
"use strict";a.exports=function(a,b){return b||(b={}),a?(a=String(a.__esModule?a.default:a),
/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1)),
b.hash&&(a+=b.hash),/["'() \t\n]|(%20)/.test(a)||b.needQuotes?'"'.concat(a.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):a):a}},
36758:function(a){"use strict";a.exports=function(a){return a[1]}},31996:function(a,b,c){"use strict"
;a.exports=c.p+"back-action-button-dark.svg"},50535:function(a,b,c){"use strict";a.exports=c.p+"back-action-button.svg"},
99831:function(a,b,c){"use strict";a.exports=c.p+"back-button.png"},73688:function(a,b,c){"use strict"
;a.exports=c.p+"blocking-passcard.ico"},21727:function(a,b,c){"use strict";a.exports=c.p+"bookmark-dark.svg"},
26310:function(a,b,c){"use strict";a.exports=c.p+"bookmark.svg"},30221:function(a,b,c){"use strict"
;a.exports=c.p+"compromised-item-mark-24.svg"},9255:function(a,b,c){"use strict";a.exports=c.p+"contact-dark.svg"},
91742:function(a,b,c){"use strict";a.exports=c.p+"contact.svg"},75223:function(a,b,c){"use strict"
;a.exports=c.p+"folder-dark.svg"},19566:function(a,b,c){"use strict";a.exports=c.p+"folder.svg"},23261:function(a,b,c){
"use strict";a.exports=c.p+"identity-dark.svg"},31072:function(a,b,c){"use strict";a.exports=c.p+"identity.svg"},
70447:function(a,b,c){"use strict";a.exports=c.p+"list-item-more-actions-dark.svg"},32983:function(a,b,c){"use strict"
;a.exports=c.p+"list-item-more-actions-hover.svg"},43446:function(a,b,c){"use strict";a.exports=c.p+"list-item-more-actions.svg"
},99110:function(a,b,c){"use strict";a.exports=c.p+"login-dark.svg"},81869:function(a,b,c){"use strict"
;a.exports=c.p+"login.svg"},91219:function(a,b,c){"use strict";a.exports=c.p+"menu-fill-default.svg"},23643:function(a,b,c){
"use strict";a.exports=c.p+"menu-fill.svg"},57541:function(a,b,c){"use strict";a.exports=c.p+"menu-goto-default.svg"},
77537:function(a,b,c){"use strict";a.exports=c.p+"menu-goto.svg"},18871:function(a,b,c){"use strict"
;a.exports=c.p+"menu-login-default.svg"},6343:function(a,b,c){"use strict";a.exports=c.p+"menu-login.svg"},
80515:function(a,b,c){"use strict";a.exports=c.p+"menu-view-default.svg"},3083:function(a,b,c){"use strict"
;a.exports=c.p+"menu-view.svg"},59212:function(a,b,c){"use strict";a.exports=c.p+"progress-circle.svg"},84249:function(a,b,c){
"use strict";a.exports=c.p+"roboform-name-logo-dark.svg"},78244:function(a,b,c){"use strict"
;a.exports=c.p+"roboform-name-logo.svg"},40214:function(a,b,c){"use strict";a.exports=c.p+"roboform-robot-logo-dark.svg"},
33437:function(a,b,c){"use strict";a.exports=c.p+"roboform-robot-logo.svg"},35214:function(a,b,c){"use strict"
;a.exports=c.p+"safenote-dark.svg"},48005:function(a,b,c){"use strict";a.exports=c.p+"safenote.svg"},18417:function(a,b,c){
"use strict";a.exports=c.p+"searchcard.ico"},7963:function(a,b,c){"use strict";a.exports=c.p+"sharing-overlay-granted.svg"},
16296:function(a,b,c){"use strict";a.exports=c.p+"sharing-overlay-limited.svg"},6456:function(a,b,c){"use strict"
;a.exports=c.p+"sharing-overlay-login-only.svg"},10627:function(a,b,c){"use strict";a.exports=c.p+"sharing-overlay-manager.svg"
},24659:function(a,b,c){"use strict";a.exports=c.p+"sharing-overlay-received.svg"},97410:function(a,b,c){"use strict"
;a.exports=c.p+"sharing-overlay-regular.svg"},25116:function(a,b,c){"use strict";a.exports=c.p+"editor-close-light.svg"},
58863:function(a,b,c){"use strict";a.exports=c.p+"editor-close.svg"},70162:function(a,b,c){"use strict"
;a.exports=c.p+"shield-good.svg"},25224:function(a,b,c){"use strict";a.exports=c.p+"shield-medium.svg"},44112:function(a,b,c){
"use strict";a.exports=c.p+"shield-strong.svg"},84817:function(a,b,c){"use strict";a.exports=c.p+"shield-weak.svg"},
44974:function(){},49701:function(){},29165:function(){}},function(a){a.O(0,[612],(function(){return b=94844,a(a.s=b);var b}))
;a.O()}]);