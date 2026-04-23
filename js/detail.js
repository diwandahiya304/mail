/* ============================================
   Gmail Clone — Email Detail Screen
   ============================================ */

const Detail = {
  currentEmail: null,

  init() {
    this.bindEvents();
  },

  show(emailId) {
    const email = MOCK_EMAILS.find(e => e.id === emailId);
    if (!email) return;

    this.currentEmail = email;
    email.isUnread = false;
    this.renderContent(email);
  },

  renderContent(email) {
    const subjectEl = document.getElementById('detail-subject-text');
    if (subjectEl) {
      subjectEl.innerHTML = `${email.subject} <span class="badge--inbox">Inbox</span>`;
    }

    const starBtn = document.getElementById('detail-star');
    if (starBtn) {
      starBtn.classList.toggle('starred', email.isStarred);
      starBtn.innerHTML = email.isStarred
        ? `<svg viewBox="0 0 24 24" fill="#f4b400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`
        : `<svg viewBox="0 0 24 24" fill="#9aa0a6"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>`;
    }

    const senderName = document.getElementById('detail-sender-name');
    const senderTime = document.getElementById('detail-sender-time');
    const senderAvatar = document.getElementById('detail-sender-avatar');

    if (senderName) senderName.textContent = email.sender;
    if (senderTime) senderTime.textContent = email.time;
    if (senderAvatar) {
      senderAvatar.className = `avatar avatar--${email.avatarColor}`;
      senderAvatar.textContent = email.avatarLetter;
    }

    // Populate expanded details
    const expFromName = document.getElementById('detail-exp-from-name');
    const expFromEmail = document.getElementById('detail-exp-from-email');
    const expReply = document.getElementById('detail-exp-reply');
    const expTo = document.getElementById('detail-exp-to');
    const expDate = document.getElementById('detail-exp-date');

    // Generate a fake email address from the sender name
    const mockEmailStr = email.sender.toLowerCase().replace(/[^a-z0-9]/g, '') + '@google.com';

    if (expFromName) expFromName.textContent = email.sender;
    if (expFromEmail) expFromEmail.textContent = mockEmailStr;
    if (expReply) expReply.textContent = mockEmailStr;
    if (expTo) expTo.textContent = 'biradarpramod12@gmail.com';
    // Let's use the actual time prop but add a mock full date format as seen in screenshot
    if (expDate) expDate.textContent = `20 Apr 2026, ${email.time}`;

    const bodyEl = document.getElementById('detail-email-body');
    if (bodyEl) {
      const bodyContent = email.isHtml ? email.body : email.body.split('\n\n').map(p =>
        `<p>${p.replace(/\n/g, '<br>')}</p>`
      ).join('');

      let attachmentsHtml = '';
      if (email.hasAttachment && email.attachments) {
        attachmentsHtml = email.attachments.map(att => `
          <div class="detail-attachment-card">
            <div class="detail-attachment-preview">
              <a href="${att.url}" target="_blank" style="display:flex; width:100%; height:100%; align-items:center; justify-content:center; text-decoration:none;">
                <div class="detail-attachment-placeholder">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#d2e3fc">
                    <path d="M6 2C4.895 2 4.01 2.895 4.01 4L4 20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V8L14 2H6ZM13 9V3.5L18.5 9H13Z" />
                  </svg>
                </div>
              </a>
            </div>
            <div class="detail-attachment-info">
              <span class="att-icon att-icon--${att.type}">${att.type === 'pdf' ? 'PDF' : att.type === 'excel' ? 'X' : 'W'}</span>
              <span class="detail-attachment-name truncate">${att.name}</span>
              <div class="detail-attachment-actions">
                <a href="${att.url}" download="${att.name}" target="_blank" class="icon-btn" aria-label="Download" style="display:flex;align-items:center;justify-content:center;">
                  <svg viewBox="0 0 24 24" fill="#9aa0a6" width="20" height="20"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                </a>
                <button class="icon-btn" aria-label="Save to Drive">
                  <svg viewBox="0 0 24 24" fill="#9aa0a6" width="20" height="20"><path d="M7.71,3.5L1.15,15L4.58,21L11.13,9.5M9.73,15L6.3,21H19.42L22.85,15M22.28,14L15.42,2H8.57L15.43,14H22.28Z"/></svg>
                </button>
              </div>
            </div>
          </div>
        `).join('');
      }

      bodyEl.innerHTML = bodyContent + attachmentsHtml;
    }
  },

  bindEvents() {
    document.getElementById('detail-back')?.addEventListener('click', () => {
      App.navigateBack();
      Inbox.render();
    });

    document.getElementById('detail-star')?.addEventListener('click', () => {
      if (!this.currentEmail) return;
      this.currentEmail.isStarred = !this.currentEmail.isStarred;
      const btn = document.getElementById('detail-star');
      btn.classList.toggle('starred', this.currentEmail.isStarred);
      btn.innerHTML = this.currentEmail.isStarred
        ? `<svg viewBox="0 0 24 24" fill="#f4b400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`
        : `<svg viewBox="0 0 24 24" fill="#9aa0a6"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>`;
      btn.style.transform = 'scale(1.3)';
      setTimeout(() => { btn.style.transform = ''; }, 200);
    });

    document.getElementById('detail-reply')?.addEventListener('click', () => {
      if (this.currentEmail) App.navigate('compose', { replyTo: this.currentEmail });
    });

    document.getElementById('detail-forward')?.addEventListener('click', () => {
      if (this.currentEmail) App.navigate('compose', { forwardEmail: this.currentEmail });
    });

    const toBtn = document.getElementById('detail-sender-to-btn');
    const expCard = document.getElementById('detail-expanded-card');
    const chevron = document.getElementById('detail-chevron-icon');

    // Remove any previous listeners by replacing the element (simplest approach for SPA)
    if (toBtn && expCard) {
      const newToBtn = toBtn.cloneNode(true);
      toBtn.parentNode.replaceChild(newToBtn, toBtn);

      newToBtn.addEventListener('click', () => {
        const isHidden = expCard.style.display === 'none';
        expCard.style.display = isHidden ? 'block' : 'none';

        const newChevron = document.getElementById('detail-chevron-icon');
        if (newChevron) {
          newChevron.classList.toggle('rotate', isHidden);
        }
      });
    }

    // Reset expanded card state on every load
    if (expCard) {
      expCard.style.display = 'none';
    }
    if (document.getElementById('detail-chevron-icon')) {
      document.getElementById('detail-chevron-icon').classList.remove('rotate');
    }
  }
};
