/* ============================================
   Gmail Clone — Search Screen
   ============================================ */

const Search = {
  init() {
    this.render();
    this.bindEvents();
  },

  render() {
    const list = document.getElementById('search-recent-list');
    if (!list) return;

    let html = '';
    RECENT_SEARCHES.forEach(term => {
      html += `
        <div class="search-recent-item" data-search-term="${term}">
          <div class="search-recent-item__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#9aa0a6"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>
          </div>
          <span class="search-recent-item__text">${term}</span>
        </div>
      `;
    });

    list.innerHTML = html;
  },

  bindEvents() {
    document.getElementById('search-back')?.addEventListener('click', () => {
      App.navigateBack();
    });

    const list = document.getElementById('search-recent-list');
    list?.addEventListener('click', (e) => {
      // Handle both recent item and result card clicks
      const recentItem = e.target.closest('.search-recent-item');
      if (recentItem) {
        const term = recentItem.dataset.searchTerm;
        if (term) {
          const input = document.getElementById('search-input');
          if (input) {
            input.value = term;
            this.handleInput(term);
          }
        }
      }

      const resultItem = e.target.closest('.search-result-card');
      if (resultItem) {
        const emailId = parseInt(resultItem.dataset.resultEmailId);
        App.navigate('detail', { emailId });
      }
    });

    const input = document.getElementById('search-input');
    input?.addEventListener('input', (e) => {
      this.handleInput(e.target.value);
    });

    const clearBtn = document.getElementById('search-clear-btn');
    clearBtn?.addEventListener('click', () => {
      if (input) {
        input.value = '';
        this.handleInput('');
        input.focus();
      }
    });
  },

  handleInput(val) {
    const voiceBtn = document.getElementById('search-voice-btn');
    const clearBtn = document.getElementById('search-clear-btn');
    
    if (val) {
      if (voiceBtn) voiceBtn.style.display = 'none';
      if (clearBtn) clearBtn.style.display = 'inline-flex';
    } else {
      if (voiceBtn) voiceBtn.style.display = 'inline-flex';
      if (clearBtn) clearBtn.style.display = 'none';
    }
    
    this.performSearch(val);
  },

  performSearch(query) {
    const list = document.getElementById('search-recent-list');
    const header = document.querySelector('.search-recent-header');
    if (!list) return;

    if (!query.trim()) {
      if (header) header.style.display = 'block';
      this.render();
      return;
    }

    if (header) header.style.display = 'none';

    const q = query.toLowerCase();

    // 1. Suggestions mock matching the screenshot exactly
    let suggestionsHtml = '';
    const suggestions = [];
    suggestions.forEach(term => {
      suggestionsHtml += `
        <div class="search-recent-item" data-search-term="${term}">
          <div class="search-recent-item__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#9aa0a6"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </div>
          <span class="search-recent-item__text" style="font-size: 16px;">${term}</span>
        </div>
      `;
    });

    // 2. Results
    const results = MOCK_EMAILS.filter(e =>
      e.sender.toLowerCase().includes(q) ||
      e.subject.toLowerCase().includes(q) ||
      e.preview.toLowerCase().includes(q)
    );

    let html = `
      <div class="search-suggestions-container" style="background:var(--bg-surface); margin: 0 8px 16px; border-radius:16px; padding: 4px 0; overflow:hidden;">
        ${suggestionsHtml}
      </div>
    `;

    if (results.length > 0) {
      html += `<div style="padding: 0 16px 8px; font-size: 14px; color: var(--text-secondary); font-family: var(--font-family);">Quick results</div>`;
    } else {
      html += `<div style="padding: 16px; text-align: center; color: var(--text-secondary); font-size: 14px;">No results found</div>`;
    }

    let resultsHtml = '';
    results.forEach(email => {
      // Highlight helper
      const highlight = (text) => {
        if (!text) return '';
        const regex = new RegExp('(' + q + ')', 'gi');
        return text.replace(regex, '<mark class="search-highlight">$1</mark>');
      };

      const subj = highlight(email.subject);
      const prev = highlight(email.preview);

      resultsHtml += `
        <div class="search-result-card" data-result-email-id="${email.id}">
          <div class="email-item__avatar" style="padding-top: 0; padding-right: 16px;">
            <div class="avatar avatar--${email.avatarColor}">${email.avatarLetter}</div>
          </div>
          <div class="email-item__content" style="flex:1; min-width:0;">
            <div class="email-item__top-row" style="display:flex; justify-content:space-between; margin-bottom:2px;">
              <span class="email-item__sender truncate" style="color:var(--text-secondary); font-size:16px;">${email.sender}</span>
              <span class="email-item__time" style="font-size:12px; color:var(--text-secondary);">${email.time}</span>
            </div>
            <div class="email-item__subject truncate" style="font-size:14px; margin-bottom:2px; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${subj}</div>
            <div class="email-item__bottom-row" style="display:flex; justify-content:space-between; align-items:center;">
              <span class="email-item__preview truncate" style="font-size:14px; color:var(--text-secondary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; flex:1; min-width:0;">${prev}</span>
              <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
                <span class="badge--inbox" style="background-color: #3f51b5; color: white; padding: 2px 6px; border-radius: 4px; font-size: 11px;">Inbox</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#9aa0a6"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    list.innerHTML = html + resultsHtml;
  },

  focus() {
    const input = document.getElementById('search-input');
    if (input) {
      input.value = '';
      this.render();
      setTimeout(() => input.focus(), 350);
    }
  }
};
