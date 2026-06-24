(function () {
  'use strict';

  // --- Theme toggle ---------------------------------------------------------
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // --- Mobile navigation ----------------------------------------------------
  var navToggle = document.querySelector('.site-nav__toggle');
  var navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // --- Copy buttons on code blocks -----------------------------------------
  document.querySelectorAll('div.highlighter-rouge, figure.highlight').forEach(function (block) {
    var pre = block.querySelector('pre');
    if (!pre) return;

    var button = document.createElement('button');
    button.className = 'copy-btn';
    button.type = 'button';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy code to clipboard');

    button.addEventListener('click', function () {
      var code = block.querySelector('code') || pre;
      var text = code.innerText;
      navigator.clipboard.writeText(text).then(function () {
        button.textContent = 'Copied!';
        setTimeout(function () { button.textContent = 'Copy'; }, 1600);
      }).catch(function () {
        button.textContent = 'Error';
        setTimeout(function () { button.textContent = 'Copy'; }, 1600);
      });
    });

    block.appendChild(button);
  });
})();
