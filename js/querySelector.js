// query selector only returns theh first match
var el = document.querySelector('li.hot');
el.className = 'cool';

// querySelectorAll returns Nodelist
// The second matching element (the third list item)(the third list item) is selected and changed
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';
