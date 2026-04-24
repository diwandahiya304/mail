/* ============================================
   Gmail Clone — Mock Data
   ============================================ */

const MOCK_EMAILS = [
  {
    id: 101,
    sender: 'Internshala',
    senderEmail: 'isp@internshala.com',
    avatarLetter: 'I',
    avatarColor: 'blue',
    subject: 'Dabur & Sony invite you to AINCAT',
    preview: 'Dear All, We are pleased to announce th...',
    isHtml: true,
    body: `
      <div style="color: #ea4335; font-weight: 500; margin-bottom: 16px;">
        Deadline has to be strictly followed. Late registration will not be entertained.
      </div>
      <div style="font-size: 32px; font-weight: 600; color: #a8c7fa; margin-bottom: 24px;">
        Register Here
      </div>
      <div style="margin-bottom: 16px; color: #e8eaed;">
        Regards,<br>Team TPO.
      </div>
      <div style="color: #9aa0a6; font-size: 13px; line-height: 1.4;">
        --<br>
        You received this message because you are subscribed to the Google Groups "Placements 2k26" group.<br>
        To unsubscribe from this group and stop receiving emails from it, send an email to <a href="#" style="color: #a8c7fa; text-decoration: none;">placements2k26+unsubscribe@googlegroups.com</a>.<br>
        To view this discussion visit <a href="#" style="color: #a8c7fa; text-decoration: none;">https://groups.google.com/d/msgid/placements2k26/CAPy2NAzFPtBQb-LLNvPL%2Bnq10gDWKutB99gYEFm32bLCsRUCeg%40mail.gmail.com</a>.
      </div>
    `,
    time: '12 Apr',
    date: '12 Apr',
    isUnread: true,
    isStarred: false,
    category: 'primary',
    hasAttachment: true,
    attachments: [
      { type: 'pdf', name: 'HR_Campus_Hiring_Deck (1).pdf', url: './my-actual-file.pdf', size: '2MB' }
    ]
  },
  {
    id: 102,
    sender: 'Naukri Campus',
    senderEmail: 'placements2k26@googlegroups.com',
    avatarLetter: 'N',
    avatarColor: 'blue',
    subject: 'Diwan, is Your English ready for interviews?',
    preview: 'Dear All, PFB the list of shortlisted stude...',
    body: `Saarthee || Recruitment Drive details...`,
    time: '11 Apr',
    date: '11 Apr',
    isUnread: false,
    isStarred: true,
    category: 'primary',
    hasAttachment: true,
    attachments: [
      { type: 'excel', name: 'Saarthee OA S...', url: './my-actual-file.pdf', size: '1MB' }
    ]
  },
  {
    id: 103,
    sender: 'Naukri Campus',
    senderEmail: 'eventnc@naukri.com',
    avatarLetter: 'N',
    avatarColor: 'orange',
    subject: 'Update: An IT Giant is Hiring | Confirm your application!',
    preview: 'Dear All, We are pleased to announce th...',
    body: `Shree Cement Limited || Recruitment Drive details...`,
    time: '9 Apr',
    date: '9 Apr',
    isUnread: false,
    isStarred: true,
    category: 'primary',
    hasAttachment: true,
    attachments: [
      { type: 'pdf', name: 'GET_Civil', url: '#', size: '1MB' },
      { type: 'pdf', name: 'GET_Mecha...', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy1', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy2', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy3', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy4', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy5', url: '#', size: '1MB' }
    ]
  },
  {
    id: 104,
    sender: 'Placement 2k26',
    senderEmail: 'placements2k26@googlegroups.com',
    avatarLetter: 'P',
    avatarColor: 'orange',
    subject: 'Ekincare || Recruitment Drive',
    preview: 'Dear All, The Pre-Placement Talk[PPT] of...',
    body: `Ekincare || Recruitment Drive details...`,
    time: '9 Apr',
    date: '9 Apr',
    isUnread: false,
    isStarred: true,
    category: 'primary',
    hasAttachment: true,
    attachments: [
      { type: 'excel', name: 'Salary Break...', url: '#', size: '1MB' },
      { type: 'word', name: 'ASDE_JD_St...', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy1', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy2', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy3', url: '#', size: '1MB' },
      { type: 'pdf', name: 'dummy4', url: '#', size: '1MB' }
    ]
  },
  {
    id: 1,
    sender: 'Bank of Haryana',
    senderEmail: 'alerts@bankofharyana.in',
    avatarLetter: 'B',
    avatarColor: 'pink',
    subject: 'Transaction with SHGB',
    preview: 'Dear Customer, Your A/c No xx 1026 debi...',
    body: `Dear Customer,

Your A/c No xx 1026 has been debited with Rs. 2,450.00 on 23-Apr-2026 at POS/AMAZON. Available balance is Rs. 45,230.50.

If you have not done this transaction, please call our helpline immediately at 1800-233-4526.

Regards,
Bank of Maharashtra
Digital Banking Department`,
    time: '3:19 pm',
    date: 'Today',
    isUnread: true,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 2,
    sender: 'The Core',
    senderEmail: 'newsletter@thecore.in',
    avatarLetter: 'I',
    avatarColor: 'teal',
    subject: 'Update: Diwan, google job application status is here',
    preview: '+ Tesla tries to boost weak India sales ...',
    body: `Biogas Targets, Missing Feedstock

India's ambitious biogas targets face a critical challenge: there simply isn't enough feedstock to meet production goals. Despite the government's push to set up 5,000 compressed biogas plants by 2026, only a fraction are operational.

Tesla tries to boost weak India sales
Tesla is reportedly considering price cuts for the Indian market as initial sales figures fall below expectations. The company launched in India earlier this year with the Model 3 and Model Y.

Apple's Succession Signals
Tim Cook's recent organizational changes hint at succession planning at Apple. Key executives have been given expanded roles, suggesting the company is preparing for its next chapter of leadership.`,
    time: '8:00 am',
    date: 'Today',
    isUnread: false,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 3,
    sender: 'LinkedIn',
    senderEmail: 'notifications@linkedin.com',
    avatarLetter: 'in',
    avatarColor: 'linkedin',
    subject: 'Complete your profile',
    preview: 'Update your job preferences to get bette...',
    body: `Hi there,

Complete your profile to get better job recommendations.

Your profile is 70% complete. Add these sections to stand out:
• Skills (add at least 5)
• Summary
• Current position details

Profiles with all sections completed receive 40x more opportunities.

Update your profile now to unlock your full potential.

- The LinkedIn Team`,
    time: '22 Apr',
    date: '22 Apr',
    isUnread: true,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 4,
    sender: 'World Economic Forum Strate...',
    senderEmail: 'community@weforum.org',
    avatarLetter: 'N',
    avatarColor: 'blue',
    subject: 'SoftSensor.ai is hiring for Associate Data Scientist',
    preview: 'Join us at 15:00 CET to learn how authen...',
    body: `Starting in 1 hour | Discussing Authenticity in the Age of AI

Dear Member,

Join us at 15:00 CET to learn how authenticity is being redefined in the age of AI-generated content.

Panel Speakers:
• Dr. Sarah Chen — MIT Media Lab
• James Morrison — Reuters Institute
• Priya Sharma — Google DeepMind

Topics we'll cover:
- The trust gap in AI-generated media
- Tools for verification and provenance
- Building authentic brands in a synthetic world

Click here to join the session.

Best regards,
WEF Strategic Intelligence Team`,
    time: '22 Apr',
    date: '22 Apr',
    isUnread: true,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 5,
    sender: 'Netlify',
    senderEmail: 'privacy@netlify.com',
    avatarLetter: 'N',
    avatarColor: 'cyan',
    subject: "Updating Netlify's privacy statement",
    preview: "Netlify does not use customer data for A...",
    body: `Hi there,

We're writing to let you know about updates to Netlify's privacy statement, effective May 1, 2026.

Key changes:
• Netlify does not use customer data for AI model training
• Enhanced data protection measures for EU customers
• Clearer language around data retention policies
• Updated third-party sub-processor list

You can review the full updated privacy statement on our website.

Thank you for building with Netlify.

The Netlify Team`,
    time: '22 Apr',
    date: '22 Apr',
    isUnread: false,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 6,
    sender: 'The Core',
    senderEmail: 'newsletter@thecore.in',
    avatarLetter: 'I',
    avatarColor: 'teal',
    subject: "Apple's Succession Signa...",
    preview: "+ The 'diamonds are forever' narrative is...",
    body: `Apple's Succession Signals

Tim Cook's organizational shakeup has everyone talking about who's next in line at Apple. Recent promotions suggest a clear succession strategy is forming.

The 'diamonds are forever' narrative is crumbling
Lab-grown diamonds are disrupting the natural diamond industry at an unprecedented pace. De Beers reported a 20% drop in rough diamond sales as consumers increasingly opt for sustainable alternatives.

India's EV charging infrastructure gaps
Despite ambitious targets, India's EV charging network remains patchy outside major metros. A new government initiative aims to address this with 10,000 new charging stations by 2027.`,
    time: '22 Apr',
    date: '22 Apr',
    isUnread: false,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 7,
    sender: 'Tata 1mg',
    senderEmail: 'care@1mg.com',
    avatarLetter: 'Q',
    avatarColor: 'red',
    subject: 'Quora: A note of gratitude as Tata 1mg turns 11',
    preview: 'Dear Customer, Tata 1mg completes 11 years...',
    body: `Dear Customer,

Tata 1mg completes 11 years of serving customers across India.

Over the years, everything we have built has been shaped by your trust, your feedback and your continued support. You have helped us grow, improve and stay committed to building better healthcare experiences every day.

As we reflect on this journey, we feel deeply grateful for every order you placed, every health check-up you booked, and every time you chose us for your family's well-being.

Thank you for being part of our story. Here's to many more years of good health — together.

With gratitude,
The Tata 1mg Team`,
    time: '21 Apr',
    date: '21 Apr',
    isUnread: false,
    isStarred: false,
    category: 'promotions',
    hasAttachment: false
  },
  {
    id: 8,
    sender: 'GitHub',
    senderEmail: 'noreply@github.com',
    avatarLetter: 'G',
    avatarColor: 'purple',
    subject: 'Your repository has new issues',
    preview: '3 new issues were opened in your reposit...',
    body: `Your repository has new issues

3 new issues were opened in your repository "my-project":

#142 - Bug: Login fails on Safari
Opened by @user1234

#143 - Feature: Add dark mode support
Opened by @designer_pro

#144 - Docs: Update API reference
Opened by @contributor55

View all issues on GitHub.`,
    time: '21 Apr',
    date: '21 Apr',
    isUnread: true,
    isStarred: true,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 9,
    sender: 'Spotify',
    senderEmail: 'no-reply@spotify.com',
    avatarLetter: 'F',
    avatarColor: 'green',
    subject: 'Top roles near you. But we need your location 🌐',
    preview: 'We made a playlist just for you based on...',
    body: `Your Weekly Discovery

We made a playlist just for you based on your recent listening.

Discover Weekly — 30 songs, updated every Monday

Top picks this week:
• "Midnight City" — M83
• "Blinding Lights" — The Weeknd
• "Levitating" — Dua Lipa
• "Heat Waves" — Glass Animals

Listen now on Spotify.

Enjoy your music,
The Spotify Team`,
    time: '20 Apr',
    date: '20 Apr',
    isUnread: false,
    isStarred: false,
    category: 'promotions',
    hasAttachment: false
  },
  {
    id: 10,
    sender: 'Amazon',
    senderEmail: 'shipment-tracking@amazon.in',
    avatarLetter: 'A',
    avatarColor: 'orange',
    subject: 'Your order has been shipped!',
    preview: 'Your order #402-1234567 is on its way...',
    body: `Your order has been shipped!

Order #402-1234567-8901234
Estimated delivery: April 25, 2026

Items in this shipment:
• USB-C Hub 7-in-1 (Qty: 1)

Tracking ID: AMZN-TRK-789456123
Carrier: Amazon Logistics

Track your package for real-time updates.

Thank you for shopping with us!
Amazon.in`,
    time: '20 Apr',
    date: '20 Apr',
    isUnread: false,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 11,
    sender: 'Figma',
    senderEmail: 'updates@figma.com',
    avatarLetter: 'F',
    avatarColor: 'purple',
    subject: "What's new in Figma — April 2026",
    preview: 'AI-powered auto layout, new plugin API...',
    body: `What's new in Figma — April 2026

We've been busy shipping features you've asked for:

AI-powered Auto Layout
Let AI suggest optimal layout configurations based on your design patterns.

New Plugin API v3
Build more powerful plugins with access to new APIs including real-time collaboration hooks.

Improved Dev Mode
Hand-off is easier than ever with inline code snippets and asset export improvements.

Try these features today in Figma.

— The Figma Team`,
    time: '19 Apr',
    date: '19 Apr',
    isUnread: false,
    isStarred: true,
    category: 'updates',
    hasAttachment: false
  },
  {
    id: 12,
    sender: 'Google',
    senderEmail: 'no-reply@accounts.google.com',
    avatarLetter: 'G',
    avatarColor: 'blue',
    subject: 'Security alert: New sign-in',
    preview: 'A new sign-in was detected on your Google...',
    body: `Security alert

A new sign-in was detected on your Google Account.

Device: Windows Desktop
Location: Mumbai, India
Time: April 19, 2026, 2:34 PM IST

If this was you, no further action is needed.

If you don't recognize this activity, please secure your account immediately.

— Google Accounts Team`,
    time: '19 Apr',
    date: '19 Apr',
    isUnread: true,
    isStarred: false,
    category: 'primary',
    hasAttachment: false
  },
  {
    id: 13,
    sender: 'Swiggy',
    senderEmail: 'offers@swiggy.in',
    avatarLetter: 'S',
    avatarColor: 'orange',
    subject: '60% OFF on your next order!',
    preview: 'Use code SWIGGY60 to get 60% off up to...',
    body: `Hungry? We've got you covered!

Use code SWIGGY60 to get 60% off up to ₹120 on your next order.

Valid until: April 30, 2026
Minimum order: ₹199

Order your favorites now:
🍕 Pizza  🍔 Burgers  🍜 Noodles  🍛 Biryani

Order now on Swiggy!

Terms & Conditions apply.`,
    time: '18 Apr',
    date: '18 Apr',
    isUnread: false,
    isStarred: false,
    category: 'promotions',
    hasAttachment: false
  },
  {
    id: 14,
    sender: 'Sakshi HR',
    senderEmail: 'info@x.com',
    avatarLetter: 'S',
    avatarColor: 'indigo',
    subject: 'Reminder: Induction Session Today at 6:00 PM IST Innovexis Internship',
    preview: 'sk sent you a connection request...',
    body: `sk wants to connect with you on X.

"Hey! Saw your recent post about web development. Would love to connect and discuss more."

View profile and respond on X.

— X Team`,
    time: '18 Apr',
    date: '18 Apr',
    isUnread: false,
    isStarred: false,
    category: 'social',
    hasAttachment: false
  },
  {
    id: 15,
    sender: 'Vercel',
    senderEmail: 'notifications@vercel.com',
    avatarLetter: 'V',
    avatarColor: 'indigo',
    subject: 'Deployment successful',
    preview: 'Your project my-app was deployed success...',
    body: `Deployment Successful ✓

Project: my-app
Branch: main
Commit: feat: add dark mode support
Status: Ready

Production URL: https://my-app.vercel.app
Preview URL: https://my-app-git-main.vercel.app

Build Duration: 42s
Functions: 3 serverless functions deployed

— Vercel`,
    time: '17 Apr',
    date: '17 Apr',
    isUnread: false,
    isStarred: false,
    category: 'updates',
    hasAttachment: false
  }
];

const CATEGORIES = {
  // promotions: {
  //   name: 'Promotions',
  //   icon: 'promo',
  //   latestPreview: 'Jules — Help us build the next version of...',
  //   count: null
  // },
  // social: {
  //   name: 'Social',
  //   icon: 'social',
  //   latestPreview: 'sk — I want to connect',
  //   count: '1 new'
  // }
};

const NAV_ITEMS = [
  { id: 'all-inboxes', label: 'All inboxes', icon: 'allInboxes', count: null, section: 'main' },
  { id: 'primary', label: 'Primary', icon: 'inbox', count: '99+', section: 'main', active: true },
  { id: 'promotions', label: 'Promotions', icon: 'promo', count: null, section: 'main' },
  { id: 'social', label: 'Social', icon: 'social', count: '1 new', section: 'main', isNew: true },
  { id: 'updates', label: 'Updates', icon: 'updates', count: null, section: 'main' },
  { id: 'starred', label: 'Starred', icon: 'star', count: null, section: 'labels' },
  { id: 'snoozed', label: 'Snoozed', icon: 'snoozed', count: null, section: 'labels' },
  { id: 'important', label: 'Important', icon: 'important', count: '244', section: 'labels' },
  { id: 'purchases', label: 'Purchases', icon: 'purchases', count: '11', section: 'labels' },
  { id: 'sent', label: 'Sent', icon: 'sent', count: null, section: 'labels' },
  { id: 'scheduled', label: 'scheduled', icon: 'scheduled', count: null, section: 'labels' },
  { id: 'outbox', label: 'Outbox', icon: 'outbox', count: null, section: 'labels' },
  { id: 'drafts', label: 'Drafts', icon: 'drafts', count: null, section: 'labels' },
  { id: 'all-mail', label: 'All mail', icon: 'allMail', count: '99+', section: 'labels' },
  { id: 'spam', label: 'Spam', icon: 'spam', count: '18', section: 'labels' },
  { id: 'bin', label: 'Bin', icon: 'bin', count: null, section: 'labels' }
];

const RECENT_SEARCHES = [
  'chidvilas',
  'chidvilar',
  'samsung',
  'eatclub',
  'seema.ai',
  'sigma',
  'open'
];
