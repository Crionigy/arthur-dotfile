document.addEventListener('DOMContentLoaded', startApp);

// lookup current tab index:
let thisTabIndex = 0;
browser.tabs.query({active: true, lastFocusedWindow: true}).then(([tab]) => thisTabIndex = tab.index);

function buildElement(name, attrs, childNodesOpt) {
  const node = name === 'svg' || name === 'path' ? document.createElementNS('http://www.w3.org/2000/svg', name) : document.createElement(name);   // SVG requires createElementNS because the default one would lowercase element names
  if (attrs) {
    if (typeof attrs === 'string') attrs = {textContent: attrs};    // allow using text content as second parameter
    Object.entries(attrs).forEach(([key, value]) => {
      switch (key) {
        case 'text':  // falls through
        case 'textContent': node[key] = value; break;                   // todo: find out why do we use this instead of "setAttribute"
        case 'handlers': Object.assign(node, attrs.handlers); break;    // event handlers can be set only using `Object.assign` function!
        default: node.setAttribute(key, value); break;                  // everything else using `setAttribute` function - NOTE: this can handle "data-stuff" AND read-only "width" in SVG nodes!
      }
    });
  }
  if (childNodesOpt) {
    if (!Array.isArray(childNodesOpt)) childNodesOpt = [childNodesOpt];
    childNodesOpt.forEach(childNode => {if (childNode) node.appendChild(childNode)});
  }
  return node;
}

async function startApp() {
  window.addEventListener('contextmenu', e => e.preventDefault(), true);     // lock right-click
  window.addEventListener('mousedown', e => {if (e.button === 1) e.preventDefault();}, true);     // lock middle-click
  await redraw();
}

async function redraw() {
  const tabs = await browser.tabs.query({lastFocusedWindow: true});
  const fragment = document.createDocumentFragment();
  // build header:
  fragment.appendChild(buildElement('header', {}, [
    buildElement('div', {class: 'extension-name', title: HELP_TEXT}, [
      buildElement('img', {draggable: false, src: '/128.png'}),
      buildElement('div', {textContent: 'Unload Tab ' + browser.runtime.getManifest().version}),
    ]),
    buildElement('img', {draggable: false, title: 'Unload left tabs',                       handlers: {onclick: e => discard(e, 'left')},   src: '/svg/left.svg'}),
    buildElement('img', {draggable: false, title: 'Unload right tabs',                      handlers: {onclick: e => discard(e, 'right')},  src: '/svg/right.svg'}),
    buildElement('img', {draggable: false, title: 'Unload all tabs in this window',         handlers: {onclick: e => discard(e, 'both')},   src: '/svg/left-right.svg'}),
    buildElement('img', {draggable: false, title: 'Unload all tabs in all windows',         handlers: {onclick: e => discard(e, 'all')},    src: '/svg/all.svg'}),
  ]));
  tabs.forEach(tab => {
    const node = buildElement('div', {
      class: tab.discarded ? 'discarded' : '',
      handlers: {
        onauxclick: async e => {
          e.preventDefault();
          switch (e.button) {
            case 1: await browser.tabs.remove(tab.id); break;
            case 2: await browser.tabs.discard(tab.id); break;
          }
          await redraw();
        },
        onclick: e => {
          if (tab.discarded) return;
          browser.tabs.discard(tab.id);
          setCheckAndExit(node.querySelector('img'));
        },
      }}, [
      buildElement('img', {src:
          tab.url.startsWith('chrome://extensions') || tab.favIconUrl?.startsWith('chrome-extension') ? '/svg/extension.svg' :
          tab.url.startsWith('chrome://settings') ? '/svg/settings.svg' :
          tab.url.startsWith('chrome://') ? '/svg/chrome.svg' :
          tab.favIconUrl || '/svg/globe.svg', alt: ''}),
      buildElement('div', {textContent: tab.title, class: tab.active ? 'bold' : ''}),
    ]);
    fragment.appendChild(node);
  });
  document.body.replaceChildren(fragment);
}

async function discard(e, direction) {
  switch (direction) {
    case 'left':  return browser.tabs.query({currentWindow: true}).then(tabs => tabs.filter(tab => tab.index < thisTabIndex)).then(discardSuitableTabs);
    case 'right': return browser.tabs.query({currentWindow: true}).then(tabs => tabs.filter(tab => tab.index > thisTabIndex)).then(discardSuitableTabs);
    case 'both':  return browser.tabs.query({currentWindow: true}).then(discardSuitableTabs);
    case 'all':   return browser.tabs.query({}).then(discardSuitableTabs);
  }

  function discardSuitableTabs(tabs) {
    tabs
      .filter(tab => !tab.active && !tab.discarded)
      .forEach(tab => browser.tabs.discard(tab.id));
    setCheckAndExit(e.target);
  }
}

function setCheckAndExit(target) {
  window.setTimeout(() => window.close(), 200);
  target.src = '/svg/check.svg';
  target.parentElement.classList.add('discarded');
}

const HELP_TEXT = `Click on the tabs below:
Left click - discard and close this popup
Right click - discard
Middle click - close tab`;
