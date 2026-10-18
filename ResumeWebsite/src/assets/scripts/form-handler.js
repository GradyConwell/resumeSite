// Contact Modal & Unlock Handler
(function () {
  const formLoadTime = Date.now();
  const contactModal = document.getElementById('contact-dialog');
  const popupButton = document.getElementById('popup-button');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const formSection = document.getElementById('modal-form-section');
  const unlockedSection = document.getElementById('modal-unlocked-section');
  const emailForm = document.getElementById('contact-email-form');
  const copyBtn = document.getElementById('copy-email-btn');
  const emailVal = document.getElementById('unlocked-email-value');

  if (!contactModal) return;

  function isUnlocked() {
    return localStorage.getItem('contact_unlocked') === 'true';
  }

  function showUnlockedState() {
    if (formSection) formSection.style.display = 'none';
    if (unlockedSection) unlockedSection.style.display = 'block';
  }

  function showFormState() {
    if (formSection) formSection.style.display = 'block';
    if (unlockedSection) unlockedSection.style.display = 'none';
  }

  function openModal() {
    if (isUnlocked()) {
      showUnlockedState();
    } else {
      showFormState();
    }
    if (typeof contactModal.showModal === 'function') {
      contactModal.showModal();
    } else {
      contactModal.style.display = 'block';
    }
  }

  function closeModal() {
    if (typeof contactModal.close === 'function') {
      contactModal.close();
    } else {
      contactModal.style.display = 'none';
    }
  }

  if (popupButton) {
    popupButton.addEventListener('click', openModal);
  }

  // Allow other triggers (like the button in contact.md) to open it,
  // except those marked as external links (e.g. GitHub)
  document.addEventListener('click', function (e) {
    const btn = e.target && e.target.closest ? e.target.closest('.contact-trigger-btn') : null;
    if (btn && btn.id !== 'popup-button-2' && btn.id !== 'popup-button-linkedin') {
      openModal();
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  // Close on backdrop click
  contactModal.addEventListener('click', function (e) {
    const rect = contactModal.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      closeModal();
    }
  });

  // Handle Form Submission
  if (emailForm) {
    emailForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const submitBtn = emailForm.querySelector('button[type="submit"]');
      const emailInput = document.getElementById('contact-email-input');
      const honeypotInput = document.getElementById('contact-honeypot');

      const userEmail = emailInput ? emailInput.value.trim() : '';
      const honeypot = honeypotInput ? honeypotInput.value : '';
      const elapsed = (Date.now() - formLoadTime) / 1000;

      if (!userEmail) return;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      try {
        const response = await fetch('/.netlify/functions/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: userEmail, honeypot: honeypot, elapsed: elapsed })
        });

        if (response.ok) {
          const resData = await response.json();
          if (resData.contact && resData.contact.email && emailVal) {
            emailVal.textContent = resData.contact.email;
            emailVal.href = 'mailto:' + resData.contact.email;
          }
        }
      } catch (err) {
        console.warn('Direct function endpoint unavailable, falling back gracefully:', err);
      }

      // Mark unlocked in localStorage
      localStorage.setItem('contact_unlocked', 'true');
      showUnlockedState();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Reveal Contact Info';
      }
    });
  }

  // Copy Email Handler
  if (copyBtn && emailVal) {
    copyBtn.addEventListener('click', function () {
      const emailText = emailVal.textContent || 'gradyconwell@icloud.com';
      navigator.clipboard.writeText(emailText).then(function () {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        setTimeout(function () {
          copyBtn.textContent = originalText;
          copyBtn.classList.remove('copied');
        }, 2000);
      }).catch(function () {
        window.location.href = 'mailto:' + emailText;
      });
    });
  }
})();
