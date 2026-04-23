/* ============================================
   Gmail Clone — App Router & Initialization
   ============================================ */

const App = {
  currentScreen: null,
  screenHistory: [],

  init() {
    Drawer.init();
    Inbox.init();
    Search.init();
    Detail.init();
    Compose.init();

    window.addEventListener('hashchange', () => this.handleHashChange());
    
    if (window.location.hash) {
      this.handleHashChange();
    } else {
      this.screenHistory = ['inbox'];
      this.showScreen('inbox');
      window.history.replaceState(null, '', '#inbox');
    }
    
    this.bindBottomNav();
    this.registerServiceWorker();
  },

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(registration => {
          console.log('SW registered: ', registration.scope);
        }).catch(err => {
          console.log('SW registration failed: ', err);
        });
      });
    }
  },

  handleHashChange() {
    const rawHash = window.location.hash.substring(1) || 'inbox';
    const parts = rawHash.split('?');
    const screen = parts[0];
    
    let params = this.navParams || {};
    this.navParams = null; // consume

    if (parts[1]) {
      const urlParams = new URLSearchParams(parts[1]);
      for (const [key, value] of urlParams) {
        if (!params[key]) params[key] = value;
      }
    }

    this.transitionToScreen(screen, params);
  },

  navigate(screen, params = {}) {
    this.navParams = params;
    let hash = `#${screen}`;
    if (params.emailId) {
      hash += `?emailId=${params.emailId}`;
    }
    
    if (window.location.hash === hash) return;
    window.location.hash = hash;
  },

  navigateBack() {
    window.history.back();
  },

  transitionToScreen(screen, params = {}) {
    // Check if we're hitting 'back' or navigating to a previous screen by checking history array
    const isBack = this.screenHistory.length > 1 && this.screenHistory[this.screenHistory.length - 2] === screen;
    
    if (screen === this.currentScreen && screen !== 'detail') return;

    if (isBack) {
      this.screenHistory.pop();
      const leaving = this.currentScreen;
      const leavingEl = document.getElementById(`screen-${leaving}`);
      if (leavingEl) {
        if (leaving === 'compose') {
          leavingEl.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
          leavingEl.style.transform = 'translateY(100%)';
        } else {
          leavingEl.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
          leavingEl.style.transform = 'translateX(100%)';
        }
        setTimeout(() => {
          leavingEl.style.display = 'none';
          leavingEl.style.transition = '';
          leavingEl.style.transform = '';
        }, 310);
      }
    } else {
      // It's a forward push or new history state
      if (this.currentScreen !== screen) {
        this.screenHistory.push(screen);
      }
      const nextEl = document.getElementById(`screen-${screen}`);
      if (!nextEl) return;

      if (['detail', 'search', 'compose'].includes(screen)) {
        nextEl.style.display = 'flex';
        nextEl.style.zIndex = screen === 'compose' ? '120' : '110';
        if (screen === 'compose') {
          nextEl.style.transform = 'translateY(100%)';
          requestAnimationFrame(() => {
            nextEl.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            nextEl.style.transform = 'translateY(0)';
          });
        } else {
          nextEl.style.transform = 'translateX(100%)';
          requestAnimationFrame(() => {
            nextEl.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            nextEl.style.transform = 'translateX(0)';
          });
        }
      } else {
        document.querySelectorAll('.screen').forEach(el => {
          if (!['screen-detail', 'screen-search', 'screen-compose'].includes(el.id)) {
            el.style.display = 'none';
          }
        });
        nextEl.style.display = 'flex';
        nextEl.style.transform = '';
        nextEl.style.transition = '';
      }
    }

    this.currentScreen = screen;

    // Screen-specific hooks
    if (screen === 'search') Search.focus();
    if (screen === 'detail' && params.emailId) Detail.show(parseInt(params.emailId));
    if (screen === 'compose') Compose.show(params);

    // Hide/show bottom nav + FAB for overlay screens
    const bottomNav = document.getElementById('bottom-nav');
    const fab = document.getElementById('compose-fab');
    if (['detail', 'compose'].includes(screen)) {
      if (bottomNav) bottomNav.style.display = 'none';
      if (fab) fab.style.display = 'none';
    } else {
      if (bottomNav) bottomNav.style.display = '';
      if (fab) fab.style.display = '';
    }
  },

  showScreen(screen) {
    document.querySelectorAll('.screen').forEach(el => {
      el.style.display = 'none';
    });
    const el = document.getElementById(`screen-${screen}`);
    if (el) {
      el.style.display = 'flex';
      el.style.transform = '';
    }
    this.currentScreen = screen;
  },

  bindBottomNav() {
    const nav = document.getElementById('bottom-nav');
    if (nav) {
      nav.addEventListener('click', (e) => {
        const item = e.target.closest('.bottom-nav__item');
        if (!item) return;
        nav.querySelectorAll('.bottom-nav__item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
      });
    }
  },

  showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed; bottom: 72px; left: 50%; transform: translateX(-50%);
      background: #323232; color: #e8eaed; padding: 12px 24px; border-radius: 8px;
      font-size: 14px; font-family: 'Google Sans', sans-serif; z-index: 200;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4); opacity: 0;
      transition: opacity 0.2s ease;
    `;
    document.getElementById('app').appendChild(toast);
    requestAnimationFrame(() => { toast.style.opacity = '1'; });
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 200);
    }, 2500);
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
