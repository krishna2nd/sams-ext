/* global chrome */

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: '#3aa757' }, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: '.*' }
          })
        ],
        //actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
});


// Application pages 

function openApp() {
	chrome.tabs.create({
		url: chrome.extension.getURL('application/index.html'),
		selected: true
	});
}

chrome.browserAction.onClicked.addListener(function() {
	openApp();
});

// Listen for tabs getting created.
chrome.tabs.onCreated.addListener(function(tab) {
	// If a new tab is opened (without any URL), check user's
	// replace Tab setting and act accordingly. Default is false.
	if (tab.url === 'chrome://newtab/') {
		chrome.storage.sync.get(
			{
				replaceNewTab: false
			},
			function(items) {
				if (items.replaceNewTab) {
					chrome.tabs.update(
						tab.id,
						{
							url: chrome.extension.getURL('index.html')
						},
						function callback() {
							console.log('Welcome...');
						}
					);
				}
			}
		);
	}
});

chrome.runtime.onInstalled.addListener(function callback(details) {
	if (details.reason === 'install') {
		openApp();
	}
	if (details.reason === 'update') {
		if ((details.previousVersion + '').indexOf('1.') === 0) {
			openApp();
		}
	}
});

chrome.runtime.setUninstallURL('https://sams.com.mx/uninstall/');

chrome.extension.onConnect.addListener(function(port) {
  console.log("Connected .....");
  port.onMessage.addListener(function(msg) {
    chrome.browserAction.setBadgeText({
      text: 'new'
    }, () => {
      console.log("badge..")
    })
       console.log("message recieved" + msg);
       port.postMessage("Hi Popup.js");
  });
})


// chrome.contextMenus.create({

// }, () => {
//   console.log('menu created')
// })