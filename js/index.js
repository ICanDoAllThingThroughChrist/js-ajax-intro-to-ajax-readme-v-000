// your code here
function getRepositories() {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}

function showRepositories() {
  var repos = JSON.parse(this.responseText);
  let repoList = '<ul>';
  for (var i = 0; i < this.responseText.length; i++){
    repoList += '<li>' + this.responseText[i]['name'] + '</li>';
  }
  repoList += '</ul>';
  document.getElementById('repositories').innerHTML = repoList;
}
