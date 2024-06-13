chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {
            tabId: tab.id,
        },
        files: ["contentScript.js"],
    });
});

chrome.commands.onCommand.addListener((command, tab) => {
    if (command == "skipAd") {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id,
            },
            files: ["contentScript.js"],
        });
    }
});
