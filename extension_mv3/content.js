chrome.storage.sync.get(['hiddenUsers', 'isEnabled'], (data) => {
  if (data.isEnabled) {
    const hiddenUsers = data.hiddenUsers || [];
    hiddenUsers.forEach(user => {
      const style = document.createElement('style');
      style.textContent = `
        @-moz-document domain("teams.cloud.microsoft") {
          div[class*="fui-ChatMessage"]:has(img[src*="${user}"]) div[data-message-content],
          empty {
            display: none;
          }
        }
      `;
      document.head.appendChild(style);
    });
  }
});