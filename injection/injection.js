//= require ./global.js
//= require ./html5shiv
//= require ./header/header
//= require ./global-nav/nav
//= require ./footer/footer

var loadEvents = function() {
    UOMinjectHeader();
    UOMinjectFooter();
    UOMinjectGlobalNav();
};

if (window.attachEvent) {
  window.attachEvent('onload', loadEvents);
} else {
  document.addEventListener('DOMContentLoaded', loadEvents);
}
