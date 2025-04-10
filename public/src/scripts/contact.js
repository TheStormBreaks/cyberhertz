// Form submission functionality
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());

      // In a real application, you would send this data to a server
      console.log('Form submitted with values:', formValues);

      // Show success message (simple alert for demo purposes)
      alert('Thank you for your message! We will get back to you soon.');

      // Reset the form
      contactForm.reset();
    });
  }
});
