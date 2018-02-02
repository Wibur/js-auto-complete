// var ul = $('.list-box');
// function renderList(list) {
//   ul.empty();
//   ul.append(list.map(item => '<li>' + item + '</li>'));
// }

var ulDOM = document.querySelector('.list-box');

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

var timer = null;
var inputDOM = document.querySelector('input.auto-complete');
inputDOM.addEventListener('input', function (e) {
  if (timer) {
    clearTimeout(timer);
  }
  var value = e.target.value;
  timer = setTimeout(function () {
    searchWikipedia(value).then(function (data) {
      var userInput = data[0];
      var searchData = data[1];
      if (inputDOM.value === userInput) {
        renderList(searchData);
      }
    })
  }, 250);
});