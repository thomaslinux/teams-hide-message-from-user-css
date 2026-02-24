document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  const addUserButton = document.getElementById('addUser');
  const removeUserButton = document.getElementById('removeUser');
  const userList = document.getElementById('userList');
  const toggleCheckbox = document.getElementById('toggle');

  chrome.storage.sync.get('hiddenUsers', (data) => {
    data.hiddenUsers.forEach(user => {
      const li = document.createElement('li');
      li.innerText = user;
      userList.appendChild(li);
    });
  });

  addUserButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
      chrome.storage.sync.get('hiddenUsers', (data) => {
        data.hiddenUsers.push(username);
        chrome.storage.sync.set({ hiddenUsers: data.hiddenUsers });
        location.reload();
      });
    }
  });

  removeUserButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    chrome.storage.sync.get('hiddenUsers', (data) => {
      const index = data.hiddenUsers.indexOf(username);
      if (index > -1) {
        data.hiddenUsers.splice(index, 1);
        chrome.storage.sync.set({ hiddenUsers: data.hiddenUsers });
        location.reload();
      }
    });
  });

  toggleCheckbox.addEventListener('change', () => {
    chrome.storage.sync.set({ isEnabled: toggleCheckbox.checked });
  });
});