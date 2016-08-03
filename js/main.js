function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
  if (!hasClass(ele,cls)) ele.className += ' ' + cls;
}

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

function toggleClass(ele, cls) {
  if (hasClass(ele, cls)) {
    removeClass(ele, cls);
  } else {
    addClass(ele, cls);
  }
}

var mobileNav = document.getElementById('mobile-nav-btn');
var container = document.getElementById('container');
var body      = document.getElementsByTagName('BODY')[0];

mobileNav.addEventListener('click', function() {
  toggleClass(body, 'open');
});

container.addEventListener('click', function() {
  removeClass(body, 'open');
});
