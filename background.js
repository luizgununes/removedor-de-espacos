var idioma = {
  en: {
    name: "Portuguese",
    nativeName: "Portugu\u00eas"
  }
};

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function click(info) {

  chrome.storage.sync.get(function () {

    var montarURL = {
      'url': info.selectionText.replace(/\s+/g, '')
    }

    chrome.tabs.create(montarURL)
  });
}

chrome.storage.sync.get(function () {
  chrome.contextMenus.removeAll();
  chrome.contextMenus.create({
    "id": "tr_parent",
    "title": chrome.i18n.getMessage("contextmenu"),
    "contexts": ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  click(info, tab);
});