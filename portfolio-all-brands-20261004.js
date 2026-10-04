'use strict';

// All original work is retained. These additions describe proposed thinking,
// not campaigns, client engagements, or measured outcomes.
const PROJECTS = [
  {id:'food',title:'Foodtastic',category:'management',label:'Actual Facebook page work',board:'facebook-food-board.jpg',intro:'An existing Facebook page-management example from my portfolio, with the original page overview and content screenshots.',role:'Page management, content planning, creation, and publishing, as documented in the original portfolio board.',shows:'The page setup, food content, and a consistent visual direction.',boundary:'These screenshots document page work. They do not establish follower growth, sales, inquiries, or campaign performance.'},
  {id:'floral',title:'Be happy.',category:'management',label:'Actual Facebook page work',board:'facebook-floral-board.jpg',intro:'An existing Facebook page-management example from my portfolio, showing the original personal and lifestyle page and its content.',role:'Page management, content planning, creation, and publishing, as documented in the original portfolio board.',shows:'The page setup and a varied collection of lifestyle and personal content.',boundary:'These screenshots document page work. They do not establish follower growth, sales, inquiries, or campaign performance.'},
  {id:'brew',title:'Brew & Bean',category:'social',label:'Concept project · Self-initiated',board:'brew-bean-concept-20261002.png',intro:'A self-initiated café concept built around specialty coffee, food pairings, and an inviting space. The original Instagram board is preserved below.',objective:'Help someone understand the café, choose an order, and plan a visit.',audience:'Hypothesis: people near the café looking for a coffee stop or somewhere to spend time.',direction:'Forest green, warm neutrals, readable type, and real café photography.',pillars:'What to order · Café experience · Behind the counter · Plan a visit',voice:'Warm and straightforward',monogram:'B&B'},
  {id:'glow',title:'Glow Theory',category:'social',label:'Concept project · Self-initiated',board:'glow-theory-concept-20261002.png',intro:'A self-initiated skincare concept exploring product presentation, approved information, and a calm visual identity. The original designs are retained.',objective:'Encourage visits to approved product information and specific product inquiries.',audience:'Hypothesis: people comparing skincare products who want straightforward information before choosing.',direction:'Soft neutrals, botanical tones, product photography, and readable editorial type.',pillars:'Product details · Routine information · Brand identity · Questions & next steps',voice:'Clear, calm, and approachable',monogram:'GT'},
  {id:'style',title:'Style Muse',category:'social',label:'Concept project · Self-initiated',board:'style-muse-concept-20261002.png',intro:'A self-initiated fashion concept combining product imagery, styling ideas, and a consistent editorial feed. The original designs are retained.',objective:'Encourage collection visits and specific item, sizing, or availability inquiries.',audience:'Hypothesis: people looking for wearable outfit ideas and pieces they can picture in their own wardrobes.',direction:'Warm neutrals, outfit photography, simple layouts, and an editorial feel.',pillars:'Collection details · Styling ideas · Accessories & details · Questions & next steps',voice:'Confident, simple, and welcoming',monogram:'SM'},
  {id:'sam',title:'Stronger With Sam',category:'social',label:'Concept project · Self-initiated',board:'stronger-with-sam-concept-20261002.png',intro:'A self-initiated fitness concept exploring training content, everyday consistency, and a strong visual identity. The original designs are retained.',objective:'Encourage relevant questions about the confirmed offering and its inquiry process.',audience:'Hypothesis: people interested in strength training who want clearer expectations before exploring support.',direction:'Dark neutrals, green accents, training photography, and clear hierarchy.',pillars:'Training context · Everyday consistency · Support & expectations · Questions & next steps',voice:'Supportive and direct',monogram:'SS'},
  {id:'pastry',title:'Pastry Order App',category:'ui',label:'Personal project · Figma UI design',intro:'My original welcome, login, and menu screens for a pastry-ordering app. This is an additional example of my digital design work.',role:'Personal Figma UI design',shows:'A coordinated visual style across an introductory flow and a product menu.',boundary:'These are interface designs. A working ordering system, user testing, and business results are not represented.'}
];

const BREW_POSTS = [
  {title:'The signature latte',pillar:'What to order',purpose:'Make the first order feel familiar by showing a specific drink instead of an abstract promise.',objective:'Help a new visitor choose an order.',cta:'Save for your next coffee stop.',signal:'Saves and profile visits',caption:'Your next coffee stop, sorted. A closer look at the signature latte from this concept menu. Save this for the next time you’re deciding what to order.'},
  {title:'Good coffee, good company',pillar:'Café experience',purpose:'Show the atmosphere so a visitor can picture spending time at the café.',objective:'Make the space part of the decision.',cta:'Share with your coffee companion.',signal:'Shares and profile visits',caption:'A coffee break with someone you’ve been meaning to catch up with. Send this to your coffee companion and keep the idea for your next visit.'},
  {title:'A relatable coffee moment',pillar:'Café experience',purpose:'Use a light brand moment between useful product and visit posts. It should support the mix, rather than dominate it.',objective:'Build familiarity with the brand voice.',cta:'Reply with your usual coffee order.',signal:'Relevant replies and comments',caption:'Some days call for a coffee break. What’s your usual order when you need a moment to yourself?'},
  {title:'Coffee + pastry pairing',pillar:'What to order',purpose:'Give people a concrete pairing idea. Confirm menu items and availability before using the caption for a real café.',objective:'Help someone picture a complete order.',cta:'Save your pairing idea.',signal:'Saves and menu inquiries',caption:'Coffee and something on the side. Save this pairing idea for your next café visit. The menu and availability would be confirmed before this sample is published.'},
  {title:'An offer with clear terms',pillar:'Plan a visit',purpose:'The original artwork demonstrates a promotion layout. Eligibility, dates, and redemption terms would need approval before publication.',objective:'Make an approved offer easy to understand.',cta:'Check the confirmed offer details.',signal:'Offer questions and trackable redemptions, if recorded',caption:'Sample offer copy: an approved caption would explain the eligible drinks, promotion dates, and how to redeem. The offer in this artwork is illustrative and is not available to claim.'},
  {title:'Behind the counter',pillar:'Behind the counter',purpose:'Show a preparation detail and the care behind the drink, using a real explanation from the business.',objective:'Make the preparation process visible.',cta:'Tell us what you’d like to see next.',signal:'Meaningful comments and shares',caption:'A closer look at what happens behind the counter. Which part of making your coffee would you like to see next?'},
  {title:'A recognizable product detail',pillar:'What to order',purpose:'Return to a recognizable drink image. Vary the angle or information instead of repeating the same message.',objective:'Help people remember a menu choice.',cta:'Keep this as an order idea.',signal:'Saves and menu inquiries',caption:'Keeping your next order in mind? Save this drink idea for later. For a real café, the caption would include its approved name and menu details.'},
  {title:'The community side of a café',pillar:'Café experience',purpose:'Express the concept’s welcoming identity without inventing customer stories or testimonials.',objective:'Connect the visual identity to the experience.',cta:'Share with someone you’d meet for coffee.',signal:'Shares and relevant comments',caption:'Great coffee. Good company. Who would you bring along for your next coffee break?'},
  {title:'A thank-you with a useful question',pillar:'Questions & community',purpose:'Use a community message to invite useful feedback. A real thank-you would reflect actual activity, not an invented milestone.',objective:'Learn what the audience wants to know.',cta:'Leave a menu or visit question.',signal:'Useful questions for the next plan',caption:'Sample community message: what would you like to know before visiting a café for the first time? Leave a menu or visit question so the next post can answer it.'}
];

// Purpose and CTA examples attached to the supplied artwork, not past results.
const OTHER_POSTS = {
  "glow": [
    {
      "title": "A product introduction",
      "pillar": "Product details",
      "purpose": "Make the product category visible through a clear product image.",
      "objective": "Help visitors understand what is being shown.",
      "cta": "Open approved product information.",
      "signal": "Product-information link taps and relevant questions",
      "caption": "Meet Glow Theory: a skincare concept with a calm visual direction. Before choosing a product, look for the full ingredient list, approved directions, and pack details. What information would you want to see first?"
    },
    {
      "title": "A routine setting",
      "pillar": "Routine information",
      "purpose": "Place the product imagery in a recognizable everyday context.",
      "objective": "Make the creative direction feel coherent.",
      "cta": "Save the visual inspiration.",
      "signal": "Saves and routine-information questions",
      "caption": "A quieter moment in the everyday. What would make product information easier for you to follow: a short checklist, a clear label photo, or a question-and-answer post?"
    },
    {
      "title": "An education-led design",
      "pillar": "Routine information",
      "purpose": "Demonstrate a layout for useful information. Any skincare claims would need source and brand review.",
      "objective": "Make approved information readable.",
      "cta": "Read the verified product guidance.",
      "signal": "Saves and questions about approved directions",
      "caption": "Keep the product information close: its full ingredient list, approved directions, and any stated cautions. Save this reminder for when you are comparing product details."
    },
    {
      "title": "An ingredient-led layout",
      "pillar": "Product details",
      "purpose": "Show how an ingredient topic could be presented. The artwork does not establish product ingredients or benefits.",
      "objective": "Help visitors locate confirmed information.",
      "cta": "Check the approved ingredient list.",
      "signal": "Ingredient-information link taps and specific questions",
      "caption": "Curious about an ingredient mentioned in a product? Start with the complete ingredient list and the brand’s approved information. Which detail would you like explained more clearly?"
    },
    {
      "title": "A product packaging detail",
      "pillar": "Product details",
      "purpose": "Bring a closer product image into the mix without inventing its specifications or benefits.",
      "objective": "Support product consideration.",
      "cta": "Read approved product information.",
      "signal": "Product-detail inquiries and information-link taps",
      "caption": "A closer look at the packaging. The image is a starting point; the product details should answer the practical questions. Ask about the confirmed pack size, ingredients, or directions."
    },
    {
      "title": "A brand message",
      "pillar": "Brand identity",
      "purpose": "Support the visual identity without treating a slogan as evidence of a product result.",
      "objective": "Build recognition of the brand voice.",
      "cta": "Explore approved product details.",
      "signal": "Relevant comments about information needs",
      "caption": "Calm visuals. Clear information. That is the direction behind this concept. What do you usually want to know before considering a skincare product?"
    },
    {
      "title": "A lifestyle image",
      "pillar": "Brand identity",
      "purpose": "Add visual variety alongside practical product information.",
      "objective": "Keep the content mix recognizable.",
      "cta": "Share what you’d like explained next.",
      "signal": "Useful questions and shares",
      "caption": "Making space for a slower moment. Which topic would you like the next post to explain: product details, approved directions, or how to find the right information?"
    },
    {
      "title": "An everyday routine idea",
      "pillar": "Routine information",
      "purpose": "Demonstrate an editorial routine topic; advice would require appropriate product guidance.",
      "objective": "Organize information clearly.",
      "cta": "Save the approved routine information.",
      "signal": "Saves and routine-information questions",
      "caption": "A routine post should make the information easier to find. Keep the approved product directions somewhere you can revisit, and ask if anything on the label needs explaining."
    },
    {
      "title": "A product consideration post",
      "pillar": "Product details",
      "purpose": "Bring attention back to the product category without promising skin outcomes.",
      "objective": "Help visitors find the next useful step.",
      "cta": "Ask for product information.",
      "signal": "Relevant product inquiries and information-link taps",
      "caption": "Before adding another product to your shelf, make room for the details. Read the approved product information and leave a specific question if something is unclear."
    }
  ],
  "style": [
    {
      "title": "A collection introduction",
      "pillar": "Collection details",
      "purpose": "Make the collection category easy to recognize.",
      "objective": "Help visitors understand the offering.",
      "cta": "Explore the confirmed collection.",
      "signal": "Collection-link taps and item inquiries",
      "caption": "A new outfit idea starts with the pieces you can picture wearing. Explore this concept’s neutral collection direction, and check confirmed item and sizing details before choosing."
    },
    {
      "title": "A styling idea",
      "pillar": "Styling ideas",
      "purpose": "Give the product context through an outfit detail.",
      "objective": "Help someone picture how they could wear it.",
      "cta": "Save the styling idea.",
      "signal": "Saves and outfit-related comments",
      "caption": "A neutral knit, a hat, and an easy starting point for an outfit. What would you pair with this look from your own wardrobe? Save the idea for later."
    },
    {
      "title": "A styling tip",
      "pillar": "Styling ideas",
      "purpose": "Add useful information alongside the outfit photography.",
      "objective": "Make the content worth returning to.",
      "cta": "Save for later.",
      "signal": "Saves and useful styling questions",
      "caption": "Start with a neutral base and choose the detail you want to stand out. Save this styling idea, then try it with pieces you already reach for."
    },
    {
      "title": "An accessory detail",
      "pillar": "Accessories & details",
      "purpose": "Bring attention to one part of an outfit.",
      "objective": "Support a considered product choice.",
      "cta": "Ask about the featured item.",
      "signal": "Accessory inquiries and saves",
      "caption": "Sometimes the finishing detail brings the outfit together. Which accessory would you choose first? Ask for the confirmed item details if you want a closer look."
    },
    {
      "title": "A sample promotion",
      "pillar": "Collection details",
      "purpose": "Demonstrate an offer layout. Terms and availability would require approval.",
      "objective": "Explain an approved offer clearly.",
      "cta": "Read the confirmed promotion details.",
      "signal": "Offer questions; attributed orders only if recorded",
      "caption": "Illustrative promotion: a real sale caption would list eligible items, dates, exclusions, and the approved shopping link. The offer in this concept artwork is not available to claim."
    },
    {
      "title": "An outfit in context",
      "pillar": "Styling ideas",
      "purpose": "Show how the visual direction works in an everyday setting.",
      "objective": "Help someone picture the overall look.",
      "cta": "Share with someone who likes this style.",
      "signal": "Shares, saves, and relevant outfit comments",
      "caption": "An outfit idea to keep for another day. What would you keep as it is, and what would you swap to make it feel more like you? Share it with someone who enjoys this style."
    },
    {
      "title": "A texture detail",
      "pillar": "Collection details",
      "purpose": "Give a closer look at material and visual texture without inventing product specifications.",
      "objective": "Support product consideration.",
      "cta": "Ask for confirmed product details.",
      "signal": "Material, sizing, and item-detail inquiries",
      "caption": "Look a little closer. Texture and small details help you picture a piece beyond the full outfit. Ask for the approved material, measurements, and care information."
    },
    {
      "title": "A brand message",
      "pillar": "Questions & next steps",
      "purpose": "Create a recognizable editorial pause within a more useful content mix.",
      "objective": "Build familiarity with the brand voice.",
      "cta": "Reply with a personal style preference.",
      "signal": "Relevant styling preferences and comments",
      "caption": "Good style can start with what you already own. Which piece in your wardrobe do you keep coming back to? Tell us what you would like styled next."
    },
    {
      "title": "A community message",
      "pillar": "Questions & next steps",
      "purpose": "Demonstrate a thank-you layout without claiming a customer milestone.",
      "objective": "Invite input for future content.",
      "cta": "Share what you’d like to see next.",
      "signal": "Useful requests for future styling content",
      "caption": "A sample community note: what would you like to see more of here—outfit combinations, accessories, or clearer item details? Your question can help shape the next idea."
    }
  ],
  "sam": [
    {
      "title": "A training theme",
      "pillar": "Training context",
      "purpose": "Introduce the concept’s strength-training focus through its original photography.",
      "objective": "Make the account topic clear.",
      "cta": "Share a training-content question.",
      "signal": "Relevant training-content questions and profile visits",
      "caption": "A stronger routine starts with a clearer conversation. What would you like fitness content to explain: the training focus, the support available, or how a first conversation works?"
    },
    {
      "title": "Training equipment in focus",
      "pillar": "Training context",
      "purpose": "Show the visual context of the concept. This is stock imagery, not proof of owned equipment or a client session.",
      "objective": "Support the proposed visual direction.",
      "cta": "Ask about the confirmed offering.",
      "signal": "Equipment or service-format questions",
      "caption": "Equipment is one part of the picture. Before exploring support, ask what the format involves and which equipment, if any, you would need. What would you want clarified first?"
    },
    {
      "title": "A workout layout",
      "pillar": "Training context",
      "purpose": "Demonstrate a structured information layout. Programming would need qualified review before use.",
      "objective": "Make approved information easy to follow.",
      "cta": "Save the approved training information.",
      "signal": "Questions for reviewed training content",
      "caption": "This concept shows how a workout topic could be organized. A real training post would need qualified review and clear context. Which training question would you like an appropriate provider to explain?"
    },
    {
      "title": "An everyday habit theme",
      "pillar": "Everyday consistency",
      "purpose": "Show where an everyday-habits topic could fit without inventing nutrition outcomes.",
      "objective": "Add variety to the content pillars.",
      "cta": "Share a habit-related content question.",
      "signal": "Everyday-planning questions and relevant replies",
      "caption": "Making room for a routine can raise practical questions about time and planning. Which topic would be useful to discuss next? This sample does not offer a nutrition plan."
    },
    {
      "title": "A training-space theme",
      "pillar": "Training context",
      "purpose": "Demonstrate a potential environment topic. The stock image is not proof of a facility or recorded coaching session.",
      "objective": "Make the proposed content mix more concrete.",
      "cta": "Tell us what you’d like explained.",
      "signal": "Questions about the real environment or format",
      "caption": "The setting is part of what someone may want to understand before starting. For a real service, we would show its actual environment and confirmed format. What would help you picture it?"
    },
    {
      "title": "A consistency message",
      "pillar": "Everyday consistency",
      "purpose": "Use motivation between practical topics instead of making it the whole strategy.",
      "objective": "Build familiarity with the voice.",
      "cta": "Reply with a content preference.",
      "signal": "Relevant planning preferences and comments",
      "caption": "A motivational line is a starting point for a conversation. What would help the next post feel more useful: clearer expectations, a planning question, or an explanation of the support?"
    },
    {
      "title": "Equipment in focus",
      "pillar": "Training context",
      "purpose": "Use a recognizable detail to establish the theme. No equipment or facility ownership is implied.",
      "objective": "Make the content category recognizable.",
      "cta": "Ask a question for future content.",
      "signal": "Specific equipment or format questions",
      "caption": "A closer look at the training theme. Equipment shown here is part of the concept artwork. Ask about the confirmed setup and requirements before making a decision."
    },
    {
      "title": "An everyday routine message",
      "pillar": "Everyday consistency",
      "purpose": "Demonstrate a simple editorial message without making fitness or health promises.",
      "objective": "Support the concept’s tone.",
      "cta": "Share a routine-related question.",
      "signal": "Useful routine-related content questions",
      "caption": "What would make your routine easier to plan around: a clearer schedule, more information about the format, or a useful first conversation? Share a topic you would like explained."
    },
    {
      "title": "A next-step message",
      "pillar": "Questions & next steps",
      "purpose": "Show a CTA layout. Any service details would be confirmed before publishing.",
      "objective": "Invite a relevant conversation.",
      "cta": "Ask about the proposed support.",
      "signal": "Relevant service-scope and availability inquiries",
      "caption": "Thinking about training support? Start with the details: who provides it, what is included, the format, and the availability. Ask a specific question before choosing a next step."
    }
  ]
};

const byId = Object.fromEntries(PROJECTS.map(project => [project.id, project]));
const asset = file => 'assets/' + file;
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const q = (selector, root = document) => root.querySelector(selector);
const qa = (selector, root = document) => [...root.querySelectorAll(selector)];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// One choice controls the strategy, audit, and month plan. The complete
// content remains in the HTML so it can be read without JavaScript.
function selectBrand(id, announce = false) {
  if (!byId[id] || byId[id].category !== 'social') return false;
  qa('[data-brand-panel]').forEach(panel => {panel.hidden = panel.dataset.brandPanel !== id;});
  qa('[data-select-brand]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.selectBrand === id)));
  if (announce) q('#brand-status').textContent = `${byId[id].title} selected. Its strategy, sample audit, and 30-day plan are now shown.`;
  return true;
}

function initTabs(root = document) {
  qa('[data-tabs]', root).forEach(list => {
    if (list.dataset.ready) return;
    list.dataset.ready = 'true';
    const buttons = qa('[role="tab"]', list);
    const activate = (index, focus = false) => {
      buttons.forEach((button, i) => {
        const selected = i === index;
        button.setAttribute('aria-selected', String(selected));
        button.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(button.getAttribute('aria-controls'));
        if (panel) panel.hidden = !selected;
      });
      if (focus) buttons[index].focus({preventScroll:true});
    };
    buttons.forEach((button, i) => button.addEventListener('click', () => activate(i)));
    list.addEventListener('keydown', event => {
      const index = buttons.indexOf(document.activeElement);
      if (index < 0) return;
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % buttons.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + buttons.length) % buttons.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = buttons.length - 1;
      if (next !== undefined) {event.preventDefault(); activate(next, true);}
    });
    activate(Math.max(0, buttons.findIndex(button => button.getAttribute('aria-selected') === 'true')));
  });
}

function galleryPosts(id) {
  if (id === 'brew') return BREW_POSTS;
  return OTHER_POSTS[id];
}

function initGallery(root) {
  if (root.dataset.ready) return;
  const id = root.dataset.gallery;
  if (!byId[id] || byId[id].category !== 'social') return;
  root.dataset.ready = 'true';
  const posts = galleryPosts(id);
  let index = 0;
  const thumbnails = q('[data-slide-thumbnails]', root);
  if (thumbnails) thumbnails.innerHTML = posts.map((post, i) => `<button type="button" data-slide-index="${i}" aria-label="Show post ${i+1}: ${escapeHTML(post.title)}" aria-pressed="${i===0}"><img src="${asset(`posts/${id}-${i+1}.webp`)}" alt="" width="44" height="44" loading="lazy"></button>`).join('');
  const update = next => {
    index = (next + posts.length) % posts.length;
    const post = posts[index];
    const img = q('[data-slide-image]', root);
    img.src = asset(`posts/${id}-${index+1}.webp`);
    img.alt = `${byId[id].title} original concept design: ${post.title}`;
    ['title','pillar','purpose','objective','cta','signal','caption'].forEach(field => {
      const target = q(`[data-slide-${field}]`, root);
      if (target) target.textContent = post[field] || '';
    });
    const position = q('[data-slide-position]', root);
    if (position) position.textContent = `Post ${index+1} of ${posts.length}`;
    const phonePosition = q('[data-phone-position]', root);
    if (phonePosition) phonePosition.textContent = `${String(index+1).padStart(2,'0')} / 09`;
    qa('[data-slide-index]', root).forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.slideIndex) === index)));
    if (!reducedMotion.matches && typeof img.animate === 'function') img.animate([{opacity:.65},{opacity:1}],{duration:240,easing:'ease-out'});
  };
  q('[data-slide-prev]', root)?.addEventListener('click', () => update(index-1));
  q('[data-slide-next]', root)?.addEventListener('click', () => update(index+1));
  thumbnails?.addEventListener('click', event => {
    const button = event.target.closest('[data-slide-index]');
    if (button) update(Number(button.dataset.slideIndex));
  });
  update(0);
}

function galleryMarkup(project) {
  const first = galleryPosts(project.id)[0];
  return `<div class="sample-gallery" data-gallery="${project.id}"><div class="gallery-heading"><h3>Explore individual posts.</h3><p>Original artwork with sample captions, proposed objectives, and calls to action.</p></div><div class="gallery-layout"><div class="sample-phone"><div class="phone-speaker" aria-hidden="true"></div><div class="phone-profile"><span class="phone-avatar" aria-hidden="true">${project.monogram}</span><div><strong>${escapeHTML(project.title)}</strong><small>Concept content preview</small></div></div><div class="phone-post"><img data-slide-image src="${asset(`posts/${project.id}-1.webp`)}" alt="${escapeHTML(first.title)}" width="463" height="463"></div><div class="phone-footer"><span>Self-initiated project</span><span data-phone-position>01 / 09</span></div></div><div class="gallery-copy"><span class="badge" data-slide-pillar></span><h4 data-slide-title></h4><p data-slide-purpose></p><dl class="gallery-details"><div><dt>Objective</dt><dd data-slide-objective></dd></div><div><dt>Format</dt><dd>Static Instagram concept post</dd></div><div><dt>Proposed CTA</dt><dd data-slide-cta></dd></div><div><dt>Measurement</dt><dd data-slide-signal></dd></div></dl><div class="caption-box"><span>Sample caption · Not published</span><p data-slide-caption></p></div><div class="gallery-controls"><button type="button" data-slide-prev aria-label="Previous ${escapeHTML(project.title)} sample post">← Previous</button><span class="gallery-position" data-slide-position role="status">Post 1 of 9</span><button type="button" data-slide-next aria-label="Next ${escapeHTML(project.title)} sample post">Next →</button></div><div class="gallery-thumbnails" data-slide-thumbnails aria-label="Choose a sample post"></div></div></div></div>`;
}

function evidenceMarkup(project) {
  const kind = project.id === 'food' ? 'food' : 'floral';
  return `<div class="evidence-tabs tabs" data-tabs="evidence" role="tablist" aria-label="Browse original Facebook evidence"><button id="evidence-tab-board" role="tab" aria-selected="true" aria-controls="evidence-board">Original board</button><button id="evidence-tab-profile" role="tab" aria-selected="false" aria-controls="evidence-profile">Page overview</button><button id="evidence-tab-content" role="tab" aria-selected="false" aria-controls="evidence-content">Content screenshots</button></div><div id="evidence-board" role="tabpanel" aria-labelledby="evidence-tab-board" tabindex="0"><img class="evidence-image" src="${asset(project.board)}" alt="${escapeHTML(project.title)} original Facebook page-management board"><p class="evidence-caption">The original portfolio board is retained as supplied.</p></div><div id="evidence-profile" role="tabpanel" aria-labelledby="evidence-tab-profile" tabindex="0"><img class="evidence-image" src="${asset(`facebook-${kind}-profile.png`)}" alt="${escapeHTML(project.title)} original Facebook page overview"><p class="evidence-caption">Original page screenshot. Profile figures are shown in their original context and are not presented as growth achieved.</p></div><div id="evidence-content" role="tabpanel" aria-labelledby="evidence-tab-content" tabindex="0"><img class="evidence-image" src="${asset(`facebook-${kind}-posts.png`)}" alt="${escapeHTML(project.title)} original Facebook content screenshots"><p class="evidence-caption">Original content screenshot. Post activity alone is not a campaign performance report.</p></div>`;
}

const dialog = q('#project-dialog');
let activeProject = 'food';
let dialogOrder = PROJECTS.map(project => project.id);
let lastOpener = null;
let activeFilter = 'all';

function showProject(id) {
  const project = byId[id];
  if (!project) return;
  activeProject = id;
  q('#dialog-title').textContent = project.title;
  q('#dialog-category').textContent = project.label;
  q('#dialog-position').textContent = `${dialogOrder.indexOf(id)+1} / ${dialogOrder.length}`;
  let body;
  if (project.category === 'social') {
    body = `<div class="dialog-intro"><div><p>${escapeHTML(project.intro)}</p><a class="text-link" href="#strategy-${id}" data-strategy-brand="${id}">Explore the full sample strategy ↗</a></div><dl class="definition-grid"><div><dt>Proposed objective</dt><dd>${escapeHTML(project.objective)}</dd></div><div><dt>Audience hypothesis</dt><dd>${escapeHTML(project.audience)}</dd></div><div><dt>Brand voice</dt><dd>${escapeHTML(project.voice)}</dd></div><div><dt>Visual direction</dt><dd>${escapeHTML(project.direction)}</dd></div></dl></div><p class="dialog-notice">Self-initiated concept, not client work. Profile details, follower counts, offers, and example claims in the original mockup are illustrative. The proposed thinking below has not been tested in a live campaign.</p>${galleryMarkup(project)}<div class="dialog-artwork"><p class="eyebrow">Original concept board · Preserved artwork</p><img src="${asset(project.board)}" alt="${escapeHTML(project.title)} original concept board with its Instagram phone mockup and nine post designs" loading="lazy"><p class="evidence-caption">Stock photography credits are included in photo-credits.txt. The illustrative profile counts are not portfolio results.</p><a class="text-link" href="${asset(project.board)}" target="_blank" rel="noopener noreferrer">Open full-size original board ↗</a></div>`;
  } else if (project.category === 'management') {
    body = `<div class="dialog-intro"><div><p>${escapeHTML(project.intro)}</p></div><dl class="definition-grid"><div><dt>Work shown</dt><dd>${escapeHTML(project.role)}</dd></div><div><dt>What this demonstrates</dt><dd>${escapeHTML(project.shows)}</dd></div></dl></div><p class="dialog-notice">${escapeHTML(project.boundary)}</p>${evidenceMarkup(project)}`;
  } else {
    body = `<div class="dialog-intro"><div><p>${escapeHTML(project.intro)}</p></div><dl class="definition-grid"><div><dt>My role</dt><dd>${escapeHTML(project.role)}</dd></div><div><dt>What this demonstrates</dt><dd>${escapeHTML(project.shows)}</dd></div></dl></div><p class="dialog-notice">${escapeHTML(project.boundary)}</p><div class="ui-screens"><figure><img src="${asset('pastry-welcome.png')}" alt="Original pastry app welcome interface"><figcaption>Welcome · Introducing the visual identity</figcaption></figure><figure><img src="${asset('pastry-login.png')}" alt="Original pastry app login interface"><figcaption>Login · A coordinated entry screen</figcaption></figure><figure><img src="${asset('pastry-menu.png')}" alt="Original pastry app menu interface"><figcaption>Menu · A product-browsing layout</figcaption></figure></div>`;
  }
  q('#dialog-body').innerHTML = body;
  initTabs(q('#dialog-body'));
  qa('[data-gallery]', q('#dialog-body')).forEach(initGallery);
  const single = dialogOrder.length < 2;
  q('#previous-project').disabled = single;
  q('#next-project').disabled = single;
  dialog.scrollTop = 0;
}

document.addEventListener('click', event => {
  const link = event.target.closest('a[data-project]');
  if (!link || typeof dialog.showModal !== 'function' || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const id = link.dataset.project;
  if (!byId[id]) return;
  event.preventDefault();
  lastOpener = link;
  dialogOrder = PROJECTS.filter(project => activeFilter==='all' || project.category===activeFilter).map(project => project.id);
  if (!dialogOrder.includes(id)) dialogOrder = PROJECTS.map(project => project.id);
  showProject(id);
  document.body.classList.add('modal-open');
  dialog.showModal();
  q('.close-dialog').focus({preventScroll:true});
});

q('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  lastOpener?.focus({preventScroll:true});
});
dialog.addEventListener('click', event => {
  const strategyLink = event.target.closest('[data-strategy-brand]');
  if (strategyLink && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
    selectBrand(strategyLink.dataset.strategyBrand, true);
    dialog.close();
    document.getElementById(`strategy-${strategyLink.dataset.strategyBrand}`)?.focus({preventScroll:true});
  }
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom) dialog.close();
  }
});
q('#previous-project').addEventListener('click', () => showProject(dialogOrder[(dialogOrder.indexOf(activeProject)-1+dialogOrder.length)%dialogOrder.length]));
q('#next-project').addEventListener('click', () => showProject(dialogOrder[(dialogOrder.indexOf(activeProject)+1)%dialogOrder.length]));

qa('[data-filter]').forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  qa('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item===button)));
  let count = 0;
  qa('.project', q('#project-grid')).forEach(card => {
    card.hidden = activeFilter!=='all' && card.dataset.category!==activeFilter;
    if (!card.hidden) count++;
  });
  q('#work-count').textContent = `${count} project${count===1?'':'s'}`;
}));

const menuToggle = q('.menu-toggle');
const navigation = q('#navigation');
const closeMenu = () => {navigation.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false');};
menuToggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navigation.addEventListener('click', event => {if (event.target.closest('a')) closeMenu();});
document.addEventListener('click', event => {if (!event.target.closest('.header')) closeMenu();});
document.addEventListener('keydown', event => {
  if (event.key==='Escape' && menuToggle.getAttribute('aria-expanded')==='true') {closeMenu(); menuToggle.focus();}
});
window.matchMedia('(min-width:801px)').addEventListener('change', closeMenu);

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    try {await navigator.clipboard.writeText(value); return true;} catch (_) { /* Try a local-file compatible fallback. */ }
  }
  const active = document.activeElement;
  const field = document.createElement('textarea');
  field.value = value;
  field.setAttribute('readonly','');
  field.style.cssText = 'position:fixed;top:0;left:-9999px;opacity:0';
  document.body.append(field);
  field.select();
  let copied = false;
  try {copied = document.execCommand('copy');} catch (_) {copied=false;}
  field.remove();
  active?.focus({preventScroll:true});
  return copied;
}

q('#copy-email').addEventListener('click', async () => {
  const copied = await copyText('magalemae@gmail.com');
  q('#copy-status').textContent = copied ? 'Email address copied.' : 'Please select and copy the email address above, or open the email link.';
});

const form = q('#brief-form');
const briefStatus = q('#brief-status');
function messageDetails() {
  const business = q('#business-name').value.trim();
  const support = q('#support-type').value;
  const link = q('#business-link').value.trim();
  const message = q('#business-message').value.trim();
  return {
    subject:`Social media support for ${business}`,
    body:`Hi Mae,\n\nMy business: ${business}\nSupport I’m interested in: ${support}\n${link ? `Website or socials: ${link}\n` : ''}\n${message}\n\nI’d like to discuss a sensible starting point.`,
    business,message
  };
}
function validBrief() {
  const details = messageDetails();
  q('#business-name').setCustomValidity(details.business ? '' : 'Please tell me your business name or what you do.');
  q('#business-message').setCustomValidity(details.message ? '' : 'Please add a little context about the support you need.');
  return form.reportValidity();
}
qa('input,textarea', form).forEach(field => field.addEventListener('input', () => field.setCustomValidity('')));
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!validBrief()) return;
  const details = messageDetails();
  const href = `mailto:magalemae@gmail.com?subject=${encodeURIComponent(details.subject)}&body=${encodeURIComponent(details.body)}`;
  form.dataset.draftHref = href;
  briefStatus.textContent = 'Your draft is ready. If your email app doesn’t open, use “Copy this message instead” and email me directly.';
  window.location.href = href;
});
q('#copy-brief').addEventListener('click', async () => {
  if (!validBrief()) return;
  const details = messageDetails();
  const copied = await copyText(`To: magalemae@gmail.com\nSubject: ${details.subject}\n\n${details.body}`);
  briefStatus.textContent = copied ? 'Message copied. Paste it into your email app, review it, and send it to magalemae@gmail.com.' : 'Copying isn’t available here. Please use the email link and include your business details.';
});
qa('[data-service]').forEach(link => link.addEventListener('click', () => {q('#support-type').value = link.dataset.service;}));
q('[type="submit"]', form).disabled = false;
q('#copy-brief').disabled = false;

initTabs();
qa('[data-gallery]').forEach(initGallery);
qa('[data-select-brand]').forEach(button => button.addEventListener('click', () => {
  const id = button.dataset.selectBrand;
  if (selectBrand(id, true)) {
    try {window.history?.replaceState(null, '', `#strategy-${id}`);} catch (_) { /* Selection also works in restricted local-file previews. */ }
  }
}));
selectBrand('brew');
document.documentElement.classList.add('enhanced');

function openHashContent() {
  if (window.location.hash === '#education') q('#education').open = true;
  const id = window.location.hash.slice(1);
  if (!id) return;
  const target = document.getElementById(id);
  const brandPanel = target?.closest('[data-brand-panel]');
  if (brandPanel) selectBrand(brandPanel.dataset.brandPanel);
  const tab = qa('[role="tab"]').find(button => button.getAttribute('aria-controls') === id);
  if (tab) tab.click();
  target?.scrollIntoView?.({block:'start'});
}
window.addEventListener('hashchange', openHashContent);
openHashContent();

if ('IntersectionObserver' in window) {
  if (!reducedMotion.matches) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target);}
    }),{threshold:.08,rootMargin:'0px 0px 35px 0px'});
    qa('[data-reveal]').forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) {element.classList.add('will-reveal'); revealObserver.observe(element);}
    });
    reducedMotion.addEventListener('change', event => {
      if (event.matches) {qa('.will-reveal').forEach(element => element.classList.add('is-visible')); revealObserver.disconnect();}
    });
  }
  const navLinks = qa('a[href^="#"]', navigation);
  const navObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => a.boundingClientRect.top-b.boundingClientRect.top);
    if (!visible.length) return;
    navLinks.forEach(link => {
      if (link.hash === '#'+visible[0].target.id) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  },{rootMargin:'-88px 0px -55% 0px',threshold:0});
  navLinks.forEach(link => {const section = document.getElementById(link.hash.slice(1)); if(section) navObserver.observe(section);});
}
