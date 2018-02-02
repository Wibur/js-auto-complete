var timer = null;

inputDOM.addEventListener('input', function (e) {
  var value = e.target.value;

  if (timer) { clearTimeout(timer); }
  if (value.trim() === '') { renderList([]); return; }

  function searchProcess() {
    searchWikipedia(value).then(function (data) {
      var userInput = data[0];
      var searchData = data[1];
      if (inputDOM.value === userInput) {
        renderList(searchData);
      }
    })
  }
  timer = setTimeout(searchProcess, 250);
});