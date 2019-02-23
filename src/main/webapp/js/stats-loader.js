function fetchStats() {
  const url = '/stats';
  fetch(url).then((response) => {
    return response.json();
  }).then((stats) => {
    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = '';
    const messageCountElement = buildStatElement('Message count: ' + stats.messageCount);
    const userCountElement = buildStatElement('User count: ' + stats.userCount);
    statsContainer.appendChild(messageCountElement);
    statsContainer.appendChild(userCountElement);
  })
}

function buildStatElement(statString) {
  const statElement = document.createElement('p');
  statElement.appendChild(document.createTextNode(statString));
  return statElement;
}

function buildUI() {
  fetchStats()
}