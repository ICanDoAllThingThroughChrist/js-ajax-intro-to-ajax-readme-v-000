// your code here
function getRepositories() {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}

function showRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(
      r => 
      '<li>' +
      r.name + 
      '- <a href="#" data-repo="' +
    )
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}
