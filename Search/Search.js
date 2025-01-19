const url = new URL(window.location.href);

var search = url.searchParams.get("for");
var searchup = search.toUpperCase();
var links = document.querySelectorAll('a');
var i = 0;

links.forEach(l => {
  var cont = l.textContent;
  var up = cont.toUpperCase();
  var ta = up.indexOf(searchup);
  if (ta == -1) {
    if (l.textContent != "Home") {
      l.remove();
    }
    i++;
    
  }
});