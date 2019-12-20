$(function () {

	// 加载设置
	var defaultConfig = {
		color: 'white'
	}; // 默认配置
	chrome.storage.sync.get(defaultConfig, function (items) {
		document.body.style.backgroundColor = items.color;
	});

});

// 获取当前选项卡ID
function getCurrentTabId(callback) {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function (tabs) {
		if (callback) callback(tabs.length ? tabs[0].id : null);
	});
}
// 向content-script注入JS片段
function executeScriptToCurrentTab(code) {
	getCurrentTabId((tabId) => {
		chrome.tabs.executeScript(tabId, {
			code: code
		});
	});
}

$('#draw_grad').click(() => {
	executeScriptToCurrentTab('init();');
	executeScriptToCurrentTab('console.log("hello world");');
});

$('#screen_screenshot').click(() => {
	executeScriptToCurrentTab('document.body.style.backgroundColor="red";')
});