// var ul = $('ul.list-box');
// function renderList(list) {
//   ul.empty();
//   ul.append(list.map(item => '<li>' + item + '</li>'));
// }

function renderList(list) {
  while (ulDOM.firstChild) {
    ulDOM.removeChild(ulDOM.firstChild)
  }
  for (var i = 0, l = list.length; i < l; i++) {
    var node = document.createElement('LI');
    node.innerText = list[i];
    ulDOM.appendChild(node)
  }
}

function searchWikipedia(term) {
  return $.ajax({
    url: 'http://en.wikipedia.org/w/api.php',
    dataType: 'jsonp',
    data: {
      action: 'opensearch',
      format: 'json',
      search: term
    }
  }).promise();
}