// TODO(rbnsl): Create constants file for localStorage keys

chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (currentTab) => {
    chrome.storage.sync.get(["wait-for-it-hn"], (result) => {
      if (!result["wait-for-it-hn"]) return;
      if (currentTab.url.includes("news.ycombinator")) {
        chrome.scripting.executeScript({
          files: ["./foreground.js"],
          target: {
            tabId: tab.tabId,
          },
        });
      }
    });
  });
});
