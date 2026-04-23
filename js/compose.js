/* ============================================
   Gmail Clone — Compose Screen
   ============================================ */

const Compose = {
  init() {
    this.bindEvents();
  },

  show(params = {}) {
    const toInput = document.getElementById('compose-to');
    const subjectInput = document.getElementById('compose-subject-input');
    const bodyTextarea = document.getElementById('compose-body-textarea');

    if (toInput) toInput.value = '';
    if (subjectInput) subjectInput.value = '';
    if (bodyTextarea) bodyTextarea.value = '';

    if (params.replyTo) {
      const email = params.replyTo;
      if (toInput) toInput.value = email.senderEmail;
      if (subjectInput) subjectInput.value = `Re: ${email.subject}`;
      if (bodyTextarea) {
        bodyTextarea.value = `\n\n--- Original Message ---\nFrom: ${email.sender} <${email.senderEmail}>\nDate: ${email.date}\nSubject: ${email.subject}\n\n${email.body}`;
        bodyTextarea.setSelectionRange(0, 0);
      }
      setTimeout(() => bodyTextarea?.focus(), 350);
    } else if (params.forwardEmail) {
      const email = params.forwardEmail;
      if (subjectInput) subjectInput.value = `Fwd: ${email.subject}`;
      if (bodyTextarea) {
        bodyTextarea.value = `\n\n--- Forwarded Message ---\nFrom: ${email.sender} <${email.senderEmail}>\nDate: ${email.date}\nSubject: ${email.subject}\n\n${email.body}`;
        bodyTextarea.setSelectionRange(0, 0);
      }
      setTimeout(() => toInput?.focus(), 350);
    } else {
      setTimeout(() => toInput?.focus(), 350);
    }
  },

  bindEvents() {
    document.getElementById('compose-close')?.addEventListener('click', () => {
      App.navigateBack();
    });

    document.getElementById('compose-send')?.addEventListener('click', () => {
      this.showSentFeedback();
    });
  },

  showSentFeedback() {
    const sendBtn = document.getElementById('compose-send');
    if (sendBtn) {
      sendBtn.style.transform = 'scale(1.2)';
      setTimeout(() => {
        sendBtn.style.transform = '';
        App.navigateBack();
        App.showToast('Message sent');
      }, 300);
    }
  }
};
