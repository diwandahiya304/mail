/* ============================================
   Gmail Clone — Inbox Screen
   ============================================ */

const Inbox = {
  init() {
    this.render();
    this.bindEvents();
  },

  render() {
    const container = document.getElementById('inbox-email-list');
    if (!container) return;

    const primaryEmails = MOCK_EMAILS.filter(e => e.category === 'primary');

    let html = '';

    // Category rows
    html += this.renderCategoryRow('promotions');
    html += this.renderCategoryRow('social');

    // Email items
    primaryEmails.forEach(email => {
      html += this.renderEmailItem(email);
    });

    container.innerHTML = html;
    this.initSwipeGestures();
  },

  renderCategoryRow(categoryKey) {
    const cat = CATEGORIES[categoryKey];
    if (!cat) return '';

    const badgeHtml = cat.count
      ? `<span class="badge badge--new">${cat.count}</span>`
      : '';

    let iconSvg = '';
    if (categoryKey === 'promotions') {
      iconSvg = `<svg viewBox="0 0 24 24" fill="#4caf50"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/></svg>`;
    } else if (categoryKey === 'social') {
      iconSvg = `<svg viewBox="0 0 24 24" fill="#4285f4"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`;
    }

    return `
      <div class="category-row" data-category="${categoryKey}">
        <div class="category-row__icon">
          ${iconSvg}
        </div>
        <div class="category-row__content">
          <div class="category-row__title">${cat.name}</div>
          <div class="category-row__preview truncate">${cat.latestPreview}</div>
        </div>
        <div class="category-row__meta">
          ${badgeHtml}
        </div>
      </div>
    `;
  },

  renderEmailItem(email) {
    const unreadClass = email.isUnread ? 'email-item--unread' : '';
    const starSvg = email.isStarred
      ? `<svg viewBox="0 0 24 24" fill="#f4b400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="#9aa0a6"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>`;
    const starClass = email.isStarred ? 'starred' : '';
    const unreadDot = email.isUnread ? '<span class="unread-dot"></span>' : '';

    return `
      <div class="email-item-wrapper" data-email-id="${email.id}">
        <div class="email-item-swipe-bg email-item-swipe-bg--archive">
          <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"/></svg>
        </div>
        <div class="email-item-swipe-bg email-item-swipe-bg--delete" style="display:none;">
          <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
        </div>
        <div class="email-item ${unreadClass}" data-email-id="${email.id}">
          <div class="email-item__avatar">
            <div class="avatar avatar--${email.avatarColor}">${email.avatarLetter}</div>
          </div>
          <div class="email-item__content">
            <div class="email-item__top-row">
              <span class="email-item__sender truncate">${email.sender}</span>
              <span class="email-item__time">${email.time}${unreadDot}</span>
            </div>
            <div class="email-item__subject truncate">${email.subject}</div>
            <div class="email-item__bottom-row">
              <span class="email-item__preview truncate">${email.preview}</span>
              <div class="email-item__actions">
                <button class="star-btn ${starClass} email-item__star" data-star-id="${email.id}" aria-label="Star">
                  ${starSvg}
                </button>
              </div>
            </div>
            ${email.hasAttachment && email.attachments ? this.renderAttachmentChips(email.attachments) : ''}
          </div>
        </div>
      </div>
    `;
  },

  renderAttachmentChips(attachments) {
    if (!attachments || attachments.length === 0) return '';
    let chipsHtml = attachments.slice(0, 2).map(att => {
      let icon = '';
      if (att.type === 'pdf') {
        icon = `<span class="att-icon att-icon--pdf">PDF</span>`;
      } else if (att.type === 'excel') {
        icon = `<span class="att-icon att-icon--excel">X</span>`;
      } else if (att.type === 'word') {
        icon = `<span class="att-icon att-icon--word">W</span>`;
      }
      return `<div class="att-chip">${icon}<span class="att-chip-name truncate">${att.name}</span></div>`;
    }).join('');
    
    if (attachments.length > 2) {
      chipsHtml += `<div class="att-chip-more">+${attachments.length - 2}</div>`;
    }
    
    return `<div class="email-item__attachments">${chipsHtml}</div>`;
  },

  bindEvents() {
    // Search bar tap — only the text area
    const searchBar = document.getElementById('inbox-search-bar');
    if (searchBar) {
      searchBar.addEventListener('click', (e) => {
        if (e.target.closest('#inbox-hamburger') || e.target.closest('.search-bar__avatar')) return;
        App.navigate('search');
      });
    }

    // Hamburger
    const hamburger = document.getElementById('inbox-hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        Drawer.open();
      });
    }

    // Compose FAB
    const fab = document.getElementById('compose-fab');
    if (fab) {
      fab.addEventListener('click', () => App.navigate('compose'));
    }

    // Email list — delegated events
    const list = document.getElementById('inbox-email-list');
    if (list) {
      list.addEventListener('click', (e) => {
        // Star toggle
        const starBtn = e.target.closest('.star-btn');
        if (starBtn) {
          e.preventDefault();
          e.stopPropagation();
          const emailId = parseInt(starBtn.dataset.starId);
          this.toggleStar(starBtn, emailId);
          return;
        }

        // Email item tap — only if not mid-swipe
        const wrapper = e.target.closest('.email-item-wrapper');
        if (wrapper && !wrapper.classList.contains('is-swiping')) {
          const emailId = parseInt(wrapper.dataset.emailId);
          if (emailId) App.navigate('detail', { emailId });
        }
      });
    }
  },

  toggleStar(btn, emailId) {
    const email = MOCK_EMAILS.find(e => e.id === emailId);
    if (!email) return;

    email.isStarred = !email.isStarred;
    btn.classList.toggle('starred');
    btn.innerHTML = email.isStarred
      ? `<svg viewBox="0 0 24 24" fill="#f4b400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="#9aa0a6"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>`;

    btn.style.transform = 'scale(1.3)';
    setTimeout(() => { btn.style.transform = ''; }, 200);
  },

  initSwipeGestures() {
    const wrappers = document.querySelectorAll('.email-item-wrapper');
    wrappers.forEach(wrapper => this.addSwipeListeners(wrapper));
  },

  addSwipeListeners(wrapper) {
    const emailItem = wrapper.querySelector('.email-item');
    const archiveBg = wrapper.querySelector('.email-item-swipe-bg--archive');
    const deleteBg = wrapper.querySelector('.email-item-swipe-bg--delete');

    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let isDragging = false;
    let isHorizontal = null; // null = undetermined, true = horizontal, false = vertical
    const threshold = 100;
    const startThreshold = 15; // minimum px before we consider it a swipe

    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      currentX = 0;
      isDragging = true;
      isHorizontal = null;
      emailItem.style.transition = 'none';
    };

    const onTouchMove = (e) => {
      if (!isDragging) return;

      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;

      // Determine direction on first significant movement
      if (isHorizontal === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
        isHorizontal = Math.abs(dx) > Math.abs(dy);
        if (isHorizontal) {
          wrapper.classList.add('is-swiping');
        }
      }

      if (!isHorizontal) return;

      currentX = dx;
      const clampedX = Math.max(-200, Math.min(200, currentX));
      emailItem.style.transform = `translateX(${clampedX}px)`;

      if (clampedX > 0) {
        archiveBg.style.display = 'flex';
        deleteBg.style.display = 'none';
      } else if (clampedX < 0) {
        archiveBg.style.display = 'none';
        deleteBg.style.display = 'flex';
      }

      e.preventDefault();
    };

    const onTouchEnd = () => {
      if (!isDragging) return;
      isDragging = false;

      emailItem.style.transition = 'transform 0.3s ease';

      if (isHorizontal && Math.abs(currentX) > threshold) {
        const direction = currentX > 0 ? 1 : -1;
        emailItem.style.transform = `translateX(${direction * 400}px)`;
        setTimeout(() => {
          wrapper.style.height = wrapper.offsetHeight + 'px';
          wrapper.style.transition = 'height 0.3s ease, opacity 0.3s ease';
          requestAnimationFrame(() => {
            wrapper.style.height = '0';
            wrapper.style.opacity = '0';
            wrapper.style.overflow = 'hidden';
          });
          setTimeout(() => {
            const emailId = parseInt(wrapper.dataset.emailId);
            const idx = MOCK_EMAILS.findIndex(e => e.id === emailId);
            if (idx > -1) MOCK_EMAILS.splice(idx, 1);
            wrapper.remove();
          }, 300);
        }, 200);
      } else {
        emailItem.style.transform = 'translateX(0)';
        archiveBg.style.display = 'flex';
        deleteBg.style.display = 'none';
      }

      // Remove swiping flag after a tick so click still gets blocked for this cycle
      setTimeout(() => wrapper.classList.remove('is-swiping'), 50);

      currentX = 0;
      isHorizontal = null;
    };

    emailItem.addEventListener('touchstart', onTouchStart, { passive: true });
    emailItem.addEventListener('touchmove', onTouchMove, { passive: false });
    emailItem.addEventListener('touchend', onTouchEnd);
  }
};
