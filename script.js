document.querySelectorAll('.menu-btn').forEach((btn) => {
  const nav = btn.parentElement.querySelector('.main-nav');
  if (nav) btn.addEventListener('click', () => nav.classList.toggle('open'));
});

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const bookingForm = document.getElementById('bookingForm');
const bookingStatus = document.getElementById('bookingStatus');
if (bookingForm && bookingStatus) {
  bookingForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    bookingStatus.textContent = 'Sending...';
    const formData = new FormData(bookingForm);
    try {
      const response = await fetch(bookingForm.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });
      if (response.ok) {
        bookingStatus.textContent = 'Thank you! Your booking request has been sent successfully.';
        bookingForm.reset();
      } else {
        bookingStatus.textContent = 'Something went wrong. Please try again.';
      }
    } catch {
      bookingStatus.textContent = 'Network error. Please try again in a moment.';
    }
  });
}
