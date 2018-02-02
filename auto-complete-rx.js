Rx.Observable
  .fromEvent(inputRxDOM, 'input')
  .debounceTime(250)
  .map(e => e.target.value)
  .switchMap(value => {
    return value.trim() === '' ? Rx.Observable.of([]) :
      Rx.Observable.from(searchWikipedia(value)).map(res => res[1])
  })
  .subscribe(value => { renderList(value) });
