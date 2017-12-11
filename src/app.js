document.querySelectorAll('.ellipsify').forEach(function (elem) {
  if (parseFloat(window.getComputedStyle(elem).width) === parseFloat(window.getComputedStyle(elem.parentElement).width)) {
    elem.setAttribute('title', elem.textContent);
  }
});