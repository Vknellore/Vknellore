document.querySelectorAll('.menu-btn').forEach((btn) => {
  const nav = btn.parentElement.querySelector('.main-nav');
  if (nav) btn.addEventListener('click', () => nav.classList.toggle('open'));
});

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

document.querySelectorAll('.formspree-form').forEach((form) => {
  const statusEl = form.querySelector('.booking-status');
  if (!statusEl) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    statusEl.textContent = 'Sending...';
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        statusEl.textContent = 'Thank you! Your request has been sent successfully.';
        form.reset();
      } else {
        statusEl.textContent = 'Something went wrong. Please try again.';
      }
    } catch {
      statusEl.textContent = 'Network error. Please try again in a moment.';
    }
  });
});
