// main.js
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for internal links
  document.querySelectorAll('.nav-link, a[href^="#"]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
        }
      }
    });
  });

  // subscribe form handler
  var form = document.getElementById('subscribeForm');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var email = this.querySelector('input[type="email"]').value.trim();
      if (!email) {
        alert('Please enter email');
        return;
      }
      this.reset();
      alert('Subscribed: ' + email);
    });
  }
});
