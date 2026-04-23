/* ============================================
   Gmail Clone — Navigation Drawer
   ============================================ */

const DRAWER_ICONS = {
  allInboxes: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z"/></svg>`,
  inbox: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"/></svg>`,
  promo: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/></svg>`,
  social: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
  updates: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>`,
  snoozed: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
  important: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>`,
  purchases: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/></svg>`,
  sent: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`,
  scheduled: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 3H6.95C5.32 3 4 4.37 4 6v1h16V6c0-1.63-1.32-3-2.95-3zM4 8v10c0 1.63 1.32 3 2.95 3h10.1c1.63 0 2.95-1.37 2.95-3V8H4zm7 8H9v-2h2v2zm0-4H9v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>`,
  outbox: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>`,
  drafts: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"/></svg>`,
  allMail: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>`,
  spam: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`,
  bin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`
};

const Drawer = {
  isOpen: false,

  init() {
    this.render();
    this.bindEvents();
  },

  render() {
    const nav = document.getElementById('drawer-nav');
    if (!nav) return;

    const mainItems = NAV_ITEMS.filter(i => i.section === 'main');
    const labelItems = NAV_ITEMS.filter(i => i.section === 'labels');

    let html = '';

    mainItems.forEach(item => { html += this.renderItem(item); });

    html += `<hr class="drawer__divider divider">`;
    html += `<div class="drawer__section-label">All labels</div>`;

    labelItems.forEach(item => { html += this.renderItem(item); });

    nav.innerHTML = html;
  },

  renderItem(item) {
    const iconSvg = DRAWER_ICONS[item.icon] || '';
    const activeClass = item.active ? 'active' : '';
    let countHtml = '';

    if (item.count) {
      if (item.isNew) {
        countHtml = `<span class="badge badge--new">${item.count}</span>`;
      } else {
        countHtml = `<span class="drawer__item__count">${item.count}</span>`;
      }
    }

    return `
      <div class="drawer__item ${activeClass}" data-nav-id="${item.id}">
        <div class="drawer__item__icon">${iconSvg}</div>
        <span class="drawer__item__label">${item.label}</span>
        ${countHtml}
      </div>
    `;
  },

  bindEvents() {
    document.getElementById('drawer-overlay')?.addEventListener('click', () => this.close());

    const drawer = document.getElementById('drawer');
    if (drawer) {
      drawer.addEventListener('click', (e) => {
        const item = e.target.closest('.drawer__item');
        if (item) {
          drawer.querySelectorAll('.drawer__item').forEach(el => el.classList.remove('active'));
          item.classList.add('active');
          setTimeout(() => this.close(), 200);
        }
      });

      // Swipe to close
      let touchStartX = 0;
      drawer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
      }, { passive: true });

      drawer.addEventListener('touchmove', (e) => {
        if (e.touches[0].clientX - touchStartX < -40) this.close();
      }, { passive: true });
    }
  },

  open() {
    this.isOpen = true;
    document.getElementById('drawer')?.classList.add('open');
    document.getElementById('drawer-overlay')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  close() {
    this.isOpen = false;
    document.getElementById('drawer')?.classList.remove('open');
    document.getElementById('drawer-overlay')?.classList.remove('active');
    document.body.style.overflow = '';
  }
};
