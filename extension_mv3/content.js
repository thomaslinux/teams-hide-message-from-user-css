// Injects the CSS to hide the messages
chrome.storage.sync.get(['hiddenUsers', 'isEnabled'], (data) => {
  if (data.isEnabled) {
    const hiddenUsers = data.hiddenUsers || [];
    const cssLines = hiddenUsers.map(user => 
      `div[class*="fui-ChatMessage"]:has(img[src*="${user}"]) div[data-message-content]`
    );
    
    const style = document.createElement('style');
    style.textContent = `
      @-moz-document domain("teams.cloud.microsoft") {
        ${cssLines.join(',\n')}
        empty {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
  }
});