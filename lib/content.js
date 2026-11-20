// Training programmes: copy comes from the client's requirements document.
export const TRAINING = [
  {
    slug: 'dental-cpd-emergency-training',
    title: 'Dental CPD & Emergency Training',
    img: '/img/train-dental.jpg',
    lead: 'Practical, hands-on training for dental teams that builds confidence and saves lives.',
    intro: [
      'Practical training designed by clinicians, for clinicians.',
      'We believe confidence comes from practical experience — not simply completing an online course.',
      'Our hands-on training helps dental teams meet regulatory requirements whilst developing the knowledge and practical skills needed to respond confidently in real clinical situations.',
      'Although our expertise is rooted in dentistry, many of our emergency training programmes are also available to businesses, schools, organisations and individuals.',
    ],
    list: ['Basic Life Support (Dental & General)', 'Emergency First Aid at Work (EFAW)', 'Medical Emergencies in Dentistry (including facial aspects)', 'CPR & AED Training', 'Enhanced Hands-on Verifiable CPD', 'Bespoke Practice Training'],
    who: ['Dentists', 'Dental Nurses', 'Therapists & Hygienists', 'Doctors & Nurses', 'Businesses, schools & organisations'],
    closing: 'Helping teams stay compliant, prepared and confident.',
  },
  {
    slug: 'regenerative-aesthetic-education',
    title: 'Regenerative & Aesthetic Education',
    img: '/img/train-regen.jpg',
    lead: 'Master advanced treatments and deliver natural, confident results.',
    intro: [
      'Learn the science. Master the technique.',
      "Develop practical skills in today's most advanced regenerative and aesthetic treatments through clinician-led, hands-on education focused on patient safety and exceptional results.",
    ],
    list: ['PRP (Platelet Rich Plasma)', 'PRF (Platelet Rich Fibrin)', 'Polynucleotides', 'Skin Boosters', 'Biofillers', 'Consultation & Treatment Planning', 'Patient Assessment & Selection', 'Safe Clinical Practice & Complication Management'],
    who: ['Dentists', 'Doctors & Nurses', 'Aesthetic Practitioners', 'Therapists & Hygienists'],
    closing: 'Designed to help practitioners introduce advanced treatments with confidence.',
  },
  {
    slug: 'start-grow-your-clinic',
    title: 'Start & Grow Your Clinic',
    img: '/img/train-grow.jpg',
    lead: 'Practical mentoring to help you build, launch and scale a successful business.',
    intro: [
      'Practical mentoring to help you build, launch and scale a successful business.',
      'From the first decisions about treatments and devices to patient journeys and growth, you are supported by clinicians who have built and run clinics.',
    ],
    list: ['Starting Your Clinic', 'Choosing Treatments & Devices', 'Product & Supplier Selection', 'Pricing & Profitability', 'Branding & Marketing', 'Social Media Strategy', 'Patient Journey Design', 'Clinical Documentation', 'Business Systems', 'Growth & Scaling', 'One-to-One Mentoring'],
    who: ['Clinic Owners', 'Start-ups & Individuals', 'Aesthetic Practitioners'],
    closing: 'Learn. Practise. Apply. Grow.',
  },
];

// Skin Health Journal articles.
// DRAFT copy written from the clinic's own treatment descriptions. The clinic should review before publishing.
export const ARTICLES = [
  {
    slug: 'facial-treatments',
    title: 'Choosing the right facial for your skin',
    cat: 'Facial Treatments',
    read: '3 min read',
    img: '/img/journal-1.jpg',
    dek: 'A facial should start with your skin, not a treatment menu. Here is how the main options differ.',
    sections: [
      ['Start with your skin', ['The best facial is the one chosen around your skin, your concerns and your goals — not the one that is most popular. That is why every pathway at Jade Orchid begins with an assessment before any treatment is recommended.']],
      ['Hydrate and cleanse: the HydrO₂ Facial', ['The 3D HydrO₂ Facial combines hydrodermabrasion, oxygen therapy and targeted serums to deeply cleanse, exfoliate and hydrate the skin. Express, Advanced and Ultimate levels allow the intensity to be adjusted for your skin.', 'It suits skin that feels dehydrated, dull or tired, with uneven tone or congestion.']],
      ['Renew and support collagen: the Million Dollar Facial', ['The Million Dollar Facial system combines dermaplaning, lymphatic drainage, microneedling and targeted serums to rejuvenate the skin and support collagen. It is offered as a Mini, Signature or Miracle Mask facial.']],
      ['Peels: gentle resurfacing', ['Peels encourage the skin to renew itself. Medik8 offers a Universal AHA peel for brightness and tone, a Clarity peel for congestion-prone skin, and a Retinol peel for fine lines and texture. The Sea Algae Peel is a natural resurfacing treatment, commonly performed as a course of three.']],
      ['Look after it between appointments', ['Professional skincare helps maintain hydration, strengthen the skin barrier and support the results of your facials.']],
    ],
  },
  {
    slug: 'skin-tips',
    title: 'Skin tips that actually matter',
    cat: 'Skin Tips',
    read: '3 min read',
    img: '/img/journal-2.jpg',
    dek: 'Less noise, more consistency: six principles we come back to with almost every client.',
    sections: [
      ['1. Get your skin explained', ['Many people own a drawer of products they hardly use. A skin analysis and consultation shows what your skin actually needs, so you can stop guessing.']],
      ['2. Think in courses, not moments', ['Lasting skin confidence is rarely created in a single appointment. It develops through knowledge, consistency and clinical guidance.']],
      ['3. Look at the inside too', ['Skin health is influenced by nutrition, gut health and the skin microbiome. Where appropriate, targeted nutritional support can work alongside your skincare.']],
      ['4. Protect your barrier and keep it hydrated', ['A healthy barrier and good hydration underpin almost every skin goal, from texture to tone.']],
      ['5. Keep a record', ['Your Skin Passport records treatments, skincare recommendations and progress, so your plan can be refined as your skin improves.']],
      ['6. Be wary of trends', ['We choose treatments with purpose, not because they are fashionable. If something is right for your skin, we will tell you; if it is not, we will say that too.']],
    ],
  },
  {
    slug: 'skin-treatments',
    title: 'Advanced skin treatments, explained simply',
    cat: 'Skin Treatments',
    read: '4 min read',
    img: '/img/journal-3.jpg',
    dek: 'What microneedling, PRP, polynucleotides and skin boosters are each for, and how they differ.',
    sections: [
      ['Microneedling', ['Microneedling creates controlled micro-channels in the skin to trigger collagen and elastin production. This natural repair process helps soften acne scars, refine pores and smooth texture. SkinPen is designed to deliver precise, consistent stimulation with minimal trauma to the skin.']],
      ['PRP and PRF', ['These regenerative treatments use your own natural growth factors. A small blood sample is processed to isolate platelet-rich plasma or fibrin, which is then applied or injected to encourage collagen production and support natural repair.']],
      ['Polynucleotides', ['Polynucleotides are regenerative injectables made from purified DNA fragments. They support hydration, the skin barrier and collagen, focusing on skin quality and repair rather than adding volume. Lumi Eyes is a specialised treatment for the delicate under-eye area.']],
      ['Skin boosters', ['Skin boosters such as Profhilo and Jalupro deliver hydrating hyaluronic acid into the skin to improve hydration, elasticity and overall quality. Unlike dermal fillers, they do not change facial structure.']],
      ['Which is right for you?', ['That depends on your skin, your goals and your timeline. A consultation is the best first step, and we will build a plan around you.']],
    ],
  },
];
