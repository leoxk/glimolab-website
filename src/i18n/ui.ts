/**
 * GlimoLab i18n — UI string translations
 *
 * Supported locales: en (English), fil (Filipino), id (Indonesian)
 * English is the default locale and is NOT prefixed in the URL.
 */

export const languages = {
  en: 'English',
  fil: 'Filipino',
  id: 'Bahasa Indonesia',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/**
 * UI translation dictionary. Every key must exist in every locale.
 * When adding new keys, update all locale objects.
 */
export const ui = {
  en: {
    // --- Navigation ---
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // --- Header / CTA ---
    'cta.getStarted': 'Get Started',
    'cta.contactUs': 'Contact Us',
    'cta.contactSales': 'Contact Sales',
    'cta.sectionTitle': 'Ready to Transform Your Content?',
    'cta.sectionSubtitle': 'Let our AI-powered studio bring your vision to life — faster, smarter, and at scale.',
    'cta.startProject': 'Start a Project',

    // --- Hero (homepage) ---
    'hero.badge': 'AI-Powered Video Production',
    'hero.title': 'Crafting Intelligent Video at the Speed of Thought',
    'hero.subtitle':
      'GlimoLab blends artificial intelligence with cinematic craft to produce premium commercial video for Southeast Asian brands.',
    'hero.exploreWork': 'Explore Our Work',
    'hero.startProject': 'Start a Project',

    // --- Sections (generic) ---
    'section.ourServices': 'Our Services',
    'section.featuredWork': 'Featured Work',
    'section.latestInsights': 'Latest Insights',
    'section.whyGlimoLab': 'Why GlimoLab',

    // --- Homepage Services Section ---
    'services.sectionTitle': 'What We Do',
    'services.aiVideo.title': 'AI Video Production',
    'services.aiVideo.desc': 'Generate stunning video content from text or images using cutting-edge AI models.',
    'services.ecommerce.title': 'E-Commerce Content',
    'services.ecommerce.desc': 'Product videos, lifestyle clips, and shoppable content at scale.',
    'services.localization.title': 'Multilingual Localization',
    'services.localization.desc': 'Adapt your videos to 10+ languages with AI voiceover and subtitles.',
    'services.social.title': 'Social Media Campaigns',
    'services.social.desc': 'Platform-optimized video content for TikTok, Reels, Shorts, and more.',

    // --- How It Works ---
    'howItWorks.sectionTitle': 'How It Works',
    'howItWorks.step1.title': 'Share Your Brief',
    'howItWorks.step1.desc': 'Tell us your goals, brand guidelines, and target audience.',
    'howItWorks.step2.title': 'AI Generation',
    'howItWorks.step2.desc': 'Our AI engine produces video drafts in minutes, not weeks.',
    'howItWorks.step3.title': 'Review & Iterate',
    'howItWorks.step3.desc': 'Refine the output with our collaborative review platform.',
    'howItWorks.step4.title': 'Deliver & Scale',
    'howItWorks.step4.desc': 'Get final assets optimized for every channel and locale.',

    // --- Stats ---
    'stats.costReduction': 'Cost Reduction',
    'stats.turnaround': 'Turnaround',
    'stats.languages': 'Languages',
    'stats.videosMonthly': 'Videos / Month',

    // --- Testimonials ---
    'testimonials.sectionTitle': 'What Our Clients Say',
    'testimonials.quote1': 'GlimoLab cut our video production time by 80%. The quality rivals top agencies at a fraction of the cost.',
    'testimonials.name1': 'Sarah Chen',
    'testimonials.role1': 'Head of Marketing',
    'testimonials.company1': 'TechVentures',
    'testimonials.quote2': 'Their multilingual localization pipeline is game-changing. We launched in 12 markets simultaneously.',
    'testimonials.name2': 'Marco Rodriguez',
    'testimonials.role2': 'VP of Growth',
    'testimonials.company2': 'ShopEase',
    'testimonials.quote3': 'The AI-generated videos are indistinguishable from traditionally produced content. Truly impressive.',
    'testimonials.name3': 'Leo Xiang',
    'testimonials.role3': 'CEO',
    'testimonials.company3': 'Baby Pro Asia',

    // --- Featured Work ---
    'work.sectionTitle': 'Featured Work',
    'work.viewAll': 'View All Projects',
    'work.project1.category': 'Luxury Brand Film',
    'work.project1.title': 'Eternité Paris Luxury Film',
    'work.project1.client': 'Concept showcase',
    'work.project2.category': 'E-Commerce',
    'work.project2.title': 'Headphone Product Ad',
    'work.project2.client': 'Concept showcase',
    'work.project3.category': 'Automotive',
    'work.project3.title': 'AMG GT XX Concept Film',
    'work.project3.client': 'Concept showcase',

    // --- Footer ---
    'footer.aboutTitle': 'GlimoLab',
    'footer.aboutText':
      'AI-driven video production studio crafting cinematic content for brands worldwide.',
    'footer.servicesTitle': 'Services',
    'footer.resourcesTitle': 'Resources',
    'footer.contactTitle': 'Get in Touch',
    'footer.quickLinks': 'Quick Links',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // --- Services labels ---
    'service.aiVideo.title': 'AI Video Generation',
    'service.aiVideo.desc': 'Text-to-video and image-to-video powered by frontier models.',
    'service.motion.title': 'Motion Graphics',
    'service.motion.desc': 'Dynamic animations and brand-consistent motion design.',
    'service.editing.title': 'Post-Production',
    'service.editing.desc': 'Editing, color grading, and sound design that elevates every frame.',
    'service.localization.title': 'Localization',
    'service.localization.desc': 'Multi-language voiceover and subtitle pipelines at scale.',

    // --- Status ---
    'status.comingSoon': 'Coming Soon',
    'status.stayTuned': 'Something amazing is in the works. Stay tuned.',

    // --- Pricing Page ---
    'pricing.badge': 'Launch Pricing',
    'pricing.title': 'Premium AI-Assisted Video Production',
    'pricing.subtitle': 'Commercial video production in vertical, horizontal, and 4K cinematic formats, starting from $360 for first-video launch clients.',
    'pricing.launchNote': '50% launch discount applies to each client’s first single-project video only.',
    'pricing.singleTitle': 'Single Project Pricing',
    'pricing.singleSubtitle': 'Compare the key differences: resolution, finished length, localization, and digital human customization.',
    'pricing.monthlyTitle': 'Monthly Campaign Packages',
    'pricing.monthlySubtitle': 'Compare monthly packages by resolution, video length, monthly quantity, localization support, and digital human continuity.',
    'pricing.launchPrice': 'Launch price',
    'pricing.requestQuote': 'Request Quote',
    'pricing.badgePopular': 'Recommended',
    'pricing.spec.resolution': 'Resolution',
    'pricing.spec.length': 'Length',
    'pricing.spec.quantity': 'Quantity',
    'pricing.spec.localization': 'Localization',
    'pricing.spec.digitalHuman': 'Digital human',
    'pricing.localization.englishOnly': 'English only',
    'pricing.localization.included': 'Included',
    'pricing.digitalHuman.notIncluded': 'Not included',
    'pricing.digitalHuman.included': 'Included',
    'pricing.digitalHuman.monthlyAddOn': 'Available as add-on',
    'pricing.digitalHuman.monthlyContinuity': 'Character continuity',
    'pricing.digitalHuman.monthlyCustom': 'Custom digital human',
    'pricing.faqTitle': 'Frequently Asked Questions',
    'pricing.faqSubtitle': 'Everything you need to know about launch pricing, monthly packages, and production scope.',
    'pricing.bottomCtaTitle': 'Not sure which tier fits?',
    'pricing.bottomCtaSubtitle': "Share your campaign goal and we'll recommend the right production plan.",

    // --- FAQ ---
    'faq.q1': 'How long is launch pricing available?',
    'faq.a1': 'Launch pricing is an early-client offer. The 50% single-project discount applies only to each client’s first video, and the offer may change as production capacity fills.',
    'faq.q2': 'Should I choose a single project or a monthly package?',
    'faq.a2': 'Choose a single project for one campaign, product launch, or brand video. Choose a monthly package when you need recurring short-form assets for TikTok, Reels, Shorts, e-commerce, or always-on campaigns.',
    'faq.q3': 'Can you create digital human videos?',
    'faq.a3': 'Yes. We can custom-build digital human characters based on founders, brand ambassadors, sales presenters, or product educators for consistent spokesperson-style content.',
    'faq.q4': 'Do you support multiple languages and local markets?',
    'faq.a4': 'Yes. Localization, subtitles, voiceover, and market adaptation can be added based on target platforms, language versions, and regional campaign needs.',
    'faq.q5': 'Why are prices listed in USD?',
    'faq.a5': 'USD is our quote currency. PHP and IDR are shown as reference conversions only, using approximately 1 USD to PHP 61 and IDR 17,900. Formal proposals can refresh the exchange rate.',
    'faq.q6': 'What video formats do you deliver?',
    'faq.a6': 'We deliver standard video formats such as MP4 and MOV, with aspect ratios and exports prepared for the target platform, including social media, web, e-commerce, and presentation use.',

    // --- Blog Page ---
    'blog.badge': 'Blog',
    'blog.title': 'Insights & Updates',
    'blog.subtitle': 'Expert perspectives on AI video production, content localization, and digital marketing.',
    'blog.readMore': 'Read More',
    'blog.noPosts': 'No articles yet. Check back soon!',
    'blog.backToBlog': 'Back to Blog',
    'blog.relatedPosts': 'Related Articles',

    // --- Contact Page ---
    'contact.badge': 'Get in Touch',
    'contact.title': "Let's Create Something Amazing",
    'contact.subtitle': 'Tell us about your project and we\'ll get back to you within 24 hours.',
    'contact.infoTitle': 'Contact Information',
    'contact.infoSubtitle': 'Reach out through any of these channels — we respond fast.',
    'contact.office': 'Office',
    'contact.followUs': 'Follow Us',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.service': 'Service Interest',
    'contact.form.selectService': 'Select a service',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us about your project, goals, and timeline...',
    'contact.form.submit': 'Send Message',
    'contact.service.singleProject': 'Single Project Video',
    'contact.service.monthlyPackage': 'Monthly Campaign Package',
    'contact.service.digitalHuman': 'Digital Human Video',
    'contact.service.aiVideo': 'AI Video Generation',
    'contact.service.motion': 'Motion Graphics',
    'contact.service.editing': 'Post-Production',
    'contact.service.localization': 'Localization',
    'contact.service.other': 'Other',
  },

  fil: {
    // --- Navigation ---
    'nav.home': 'Home',
    'nav.about': 'Tungkol',
    'nav.services': 'Mga Serbisyo',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Presyo',
    'nav.blog': 'Blog',
    'nav.contact': 'Makipag-ugnayan',

    // --- Header / CTA ---
    'cta.getStarted': 'Magsimula',
    'cta.contactUs': 'Makipag-ugnayan',
    'cta.contactSales': 'Makipag-ugnayan sa Benta',
    'cta.sectionTitle': 'Handa Na Bang Baguhin ang Iyong Content?',
    'cta.sectionSubtitle': 'Hayaan ang aming AI-powered studio na bigyang-buhay ang iyong vision — mas mabilis, mas matalino, at sa scale.',
    'cta.startProject': 'Magsimula ng Proyekto',

    // --- Hero (homepage) ---
    'hero.badge': 'AI-Powered na Produksyon ng Video',
    'hero.title': 'Gumagawa ng Intelihenteng Video sa Bilis ng Isip',
    'hero.subtitle':
      'Pinagsasama ng GlimoLab ang AI at sinematikong craft para gumawa ng premium commercial video para sa Southeast Asian brands.',
    'hero.exploreWork': 'Tignan ang Aming Gawain',
    'hero.startProject': 'Magsimula ng Proyekto',

    // --- Sections (generic) ---
    'section.ourServices': 'Aming Mga Serbisyo',
    'section.featuredWork': 'Mga Tampok na Gawain',
    'section.latestInsights': 'Mga Pinakabagong Insight',
    'section.whyGlimoLab': 'Bakit GlimoLab',

    // --- Homepage Services Section ---
    'services.sectionTitle': 'Ano ang Ginagawa Namin',
    'services.aiVideo.title': 'AI Video Production',
    'services.aiVideo.desc': 'Lumikha ng kahanga-hangang video content mula sa teksto o imahe gamit ang pinakabagong AI models.',
    'services.ecommerce.title': 'E-Commerce Content',
    'services.ecommerce.desc': 'Mga product video, lifestyle clips, at shoppable content sa scale.',
    'services.localization.title': 'Multilingual Lokalisasyon',
    'services.localization.desc': 'I-adapt ang iyong mga video sa 10+ wika gamit ang AI voiceover at subtitle.',
    'services.social.title': 'Social Media Campaigns',
    'services.social.desc': 'Platform-optimized na video content para sa TikTok, Reels, Shorts, at iba pa.',

    // --- How It Works ---
    'howItWorks.sectionTitle': 'Paano Ito Gumagana',
    'howItWorks.step1.title': 'Ibahagi ang Iyong Brief',
    'howItWorks.step1.desc': 'Sabihin sa amin ang iyong mga layunin, brand guidelines, at target audience.',
    'howItWorks.step2.title': 'AI Generation',
    'howItWorks.step2.desc': 'Ang aming AI engine ay gumagawa ng video drafts sa loob ng ilang minuto.',
    'howItWorks.step3.title': 'Review at Iterate',
    'howItWorks.step3.desc': 'I-refine ang output gamit ang aming collaborative review platform.',
    'howItWorks.step4.title': 'Deliver at Scale',
    'howItWorks.step4.desc': 'Kunin ang mga final asset na optimized para sa bawat channel at locale.',

    // --- Stats ---
    'stats.costReduction': 'Pagbawas sa Gastos',
    'stats.turnaround': 'Turnaround',
    'stats.languages': 'Mga Wika',
    'stats.videosMonthly': 'Mga Video / Buwan',

    // --- Testimonials ---
    'testimonials.sectionTitle': 'Ano ang Sinasabi ng Aming mga Kliyente',
    'testimonials.quote1': 'Binawasan ng GlimoLab ang aming video production time ng 80%. Ang kalidad ay katumbas ng mga top agency sa maliit na halaga.',
    'testimonials.name1': 'Sarah Chen',
    'testimonials.role1': 'Head of Marketing',
    'testimonials.company1': 'TechVentures',
    'testimonials.quote2': 'Ang kanilang multilingual localization pipeline ay game-changing. Nag-launch kami sa 12 market nang sabay-sabay.',
    'testimonials.name2': 'Marco Rodriguez',
    'testimonials.role2': 'VP of Growth',
    'testimonials.company2': 'ShopEase',
    'testimonials.quote3': 'Ang AI-generated na mga video ay hindi makilala mula sa tradisyonal na produced content. Tunay na impressive.',
    'testimonials.name3': 'Leo Xiang',
    'testimonials.role3': 'CEO',
    'testimonials.company3': 'Baby Pro Asia',

    // --- Featured Work ---
    'work.sectionTitle': 'Mga Tampok na Gawain',
    'work.viewAll': 'Tingnan Lahat ng Proyekto',
    'work.project1.category': 'Luxury Brand Film',
    'work.project1.title': 'Eternité Paris Luxury Film',
    'work.project1.client': 'Concept showcase',
    'work.project2.category': 'E-Commerce',
    'work.project2.title': 'Headphone Product Ad',
    'work.project2.client': 'Concept showcase',
    'work.project3.category': 'Automotive',
    'work.project3.title': 'AMG GT XX Concept Film',
    'work.project3.client': 'Concept showcase',

    // --- Footer ---
    'footer.aboutTitle': 'GlimoLab',
    'footer.aboutText':
      'AI-driven na studio sa paggawa ng video na lumilikha ng sinematikong content para sa mga brand sa buong mundo.',
    'footer.servicesTitle': 'Mga Serbisyo',
    'footer.resourcesTitle': 'Mga Mapagkukunan',
    'footer.contactTitle': 'Makipag-ugnayan',
    'footer.quickLinks': 'Mga Quick Link',
    'footer.rights': 'Lahat ng karapatan ay nakalaan.',
    'footer.privacy': 'Patakaran sa Privacy',
    'footer.terms': 'Tuntunin ng Serbisyo',

    // --- Services labels ---
    'service.aiVideo.title': 'AI Video Generation',
    'service.aiVideo.desc': 'Text-to-video at image-to-video na pinapagana ng frontier models.',
    'service.motion.title': 'Motion Graphics',
    'service.motion.desc': 'Dinamikong animasyon at motion design na tumutugma sa brand.',
    'service.editing.title': 'Post-Production',
    'service.editing.desc': 'Pag-edit, color grading, at sound design na nagtataas ng bawat frame.',
    'service.localization.title': 'Lokalisasyon',
    'service.localization.desc': 'Multi-language na voiceover at subtitle pipelines sa scale.',

    // --- Status ---
    'status.comingSoon': 'Malapit Na',
    'status.stayTuned': 'May something amazing na ginagawa. Abangan.',

    // --- Pricing Page ---
    'pricing.badge': 'Launch Pricing',
    'pricing.title': 'Premium AI-Assisted Video Production',
    'pricing.subtitle': 'Commercial video production sa vertical, horizontal, at 4K cinematic formats, simula sa $360 para sa first-video launch clients.',
    'pricing.launchNote': 'Ang 50% launch discount ay para lang sa unang single-project video ng bawat client.',
    'pricing.singleTitle': 'Single Project Pricing',
    'pricing.singleSubtitle': 'Ikumpara ang key differences: resolution, finished length, localization, at digital human customization.',
    'pricing.monthlyTitle': 'Monthly Campaign Packages',
    'pricing.monthlySubtitle': 'Ikumpara ang monthly packages ayon sa resolution, video length, monthly quantity, localization support, at digital human continuity.',
    'pricing.launchPrice': 'Launch price',
    'pricing.requestQuote': 'Humingi ng Quote',
    'pricing.badgePopular': 'Recommended',
    'pricing.spec.resolution': 'Resolution',
    'pricing.spec.length': 'Length',
    'pricing.spec.quantity': 'Quantity',
    'pricing.spec.localization': 'Localization',
    'pricing.spec.digitalHuman': 'Digital human',
    'pricing.localization.englishOnly': 'English only',
    'pricing.localization.included': 'Included',
    'pricing.digitalHuman.notIncluded': 'Not included',
    'pricing.digitalHuman.included': 'Included',
    'pricing.digitalHuman.monthlyAddOn': 'Available as add-on',
    'pricing.digitalHuman.monthlyContinuity': 'Character continuity',
    'pricing.digitalHuman.monthlyCustom': 'Custom digital human',
    'pricing.faqTitle': 'Mga Madalas Itanong',
    'pricing.faqSubtitle': 'Lahat ng kailangan mong malaman tungkol sa launch pricing, monthly packages, at production scope.',
    'pricing.bottomCtaTitle': 'Hindi sigurado kung anong tier ang bagay?',
    'pricing.bottomCtaSubtitle': 'I-share ang campaign goal at irerekomenda namin ang tamang production plan.',

    // --- FAQ ---
    'faq.q1': 'Gaano katagal available ang launch pricing?',
    'faq.a1': 'Ang launch pricing ay early-client offer. Ang 50% single-project discount ay para lang sa unang video ng bawat client, at maaaring magbago ito kapag napuno ang production capacity.',
    'faq.q2': 'Single project ba o monthly package ang dapat piliin?',
    'faq.a2': 'Piliin ang single project para sa isang campaign, product launch, o brand video. Piliin ang monthly package kung kailangan ng recurring short-form assets para sa TikTok, Reels, Shorts, e-commerce, o always-on campaigns.',
    'faq.q3': 'Makakagawa ba kayo ng digital human videos?',
    'faq.a3': 'Oo. Maaari kaming gumawa ng custom digital human characters batay sa founders, brand ambassadors, sales presenters, o product educators para sa consistent spokesperson-style content.',
    'faq.q4': 'Sinusuportahan ba ninyo ang maraming wika at local markets?',
    'faq.a4': 'Oo. Maaaring idagdag ang localization, subtitles, voiceover, at market adaptation depende sa target platforms, language versions, at regional campaign needs.',
    'faq.q5': 'Bakit USD ang presyo?',
    'faq.a5': 'USD ang quote currency namin. Ang PHP at IDR ay reference conversions lamang, gamit ang humigit-kumulang 1 USD to PHP 61 at IDR 17,900. Puwedeng i-refresh ang exchange rate para sa formal proposals.',
    'faq.q6': 'Anong video formats ang idinedeliver ninyo?',
    'faq.a6': 'Nagde-deliver kami ng standard video formats tulad ng MP4 at MOV, kasama ang aspect ratios at exports na handa para sa target platform, kabilang ang social media, web, e-commerce, at presentation use.',

    // --- Blog Page ---
    'blog.badge': 'Blog',
    'blog.title': 'Mga Insight at Update',
    'blog.subtitle': 'Mga dalubhasang pananaw sa AI video production, content lokalisasyon, at digital marketing.',
    'blog.readMore': 'Magbasa Pa',
    'blog.noPosts': 'Wala pang mga artikulo. Subukan muli mamaya!',
    'blog.backToBlog': 'Bumalik sa Blog',
    'blog.relatedPosts': 'Kaugnay na Artikulo',

    // --- Contact Page ---
    'contact.badge': 'Makipag-ugnayan',
    'contact.title': 'Tayo ay Lumikha ng Kamangha-mangha',
    'contact.subtitle': 'Ikwento ang iyong proyekto at babalikan ka namin sa loob ng 24 oras.',
    'contact.infoTitle': 'Impormasyon ng Pakikipag-ugnayan',
    'contact.infoSubtitle': 'Makipag-ugnayan sa alinmang channel na ito — mabilis kami mag-reply.',
    'contact.office': 'Opisina',
    'contact.followUs': 'Sundan Kami',
    'contact.form.name': 'Pangalan',
    'contact.form.email': 'Email',
    'contact.form.company': 'Kumpanya',
    'contact.form.service': 'Interes sa Serbisyo',
    'contact.form.selectService': 'Pumili ng serbisyo',
    'contact.form.message': 'Mensahe',
    'contact.form.messagePlaceholder': 'Ikwento ang iyong proyekto, mga layunin, at timeline...',
    'contact.form.submit': 'Ipadala ang Mensahe',
    'contact.service.singleProject': 'Single Project Video',
    'contact.service.monthlyPackage': 'Monthly Campaign Package',
    'contact.service.digitalHuman': 'Digital Human Video',
    'contact.service.aiVideo': 'AI Video Generation',
    'contact.service.motion': 'Motion Graphics',
    'contact.service.editing': 'Post-Production',
    'contact.service.localization': 'Lokalisasyon',
    'contact.service.other': 'Iba Pa',
  },

  id: {
    // --- Navigation ---
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.services': 'Layanan',
    'nav.portfolio': 'Portofolio',
    'nav.pricing': 'Harga',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontak',

    // --- Header / CTA ---
    'cta.getStarted': 'Mulai Sekarang',
    'cta.contactUs': 'Hubungi Kami',
    'cta.contactSales': 'Hubungi Tim Penjualan',
    'cta.sectionTitle': 'Siap Mengubah Konten Anda?',
    'cta.sectionSubtitle': 'Biarkan studio AI kami mewujudkan visi Anda — lebih cepat, lebih cerdas, dan dalam skala besar.',
    'cta.startProject': 'Mulai Proyek',

    // --- Hero (homepage) ---
    'hero.badge': 'Produksi Video Berbasis AI',
    'hero.title': 'Menciptakan Video Cerdas secepat Pikiran',
    'hero.subtitle':
      'GlimoLab memadukan AI dengan craft sinematik untuk menghasilkan video komersial premium bagi brand di Asia Tenggara.',
    'hero.exploreWork': 'Jelajahi Karya Kami',
    'hero.startProject': 'Mulai Proyek',

    // --- Sections (generic) ---
    'section.ourServices': 'Layanan Kami',
    'section.featuredWork': 'Karya Pilihan',
    'section.latestInsights': 'Wawasan Terbaru',
    'section.whyGlimoLab': 'Mengapa GlimoLab',

    // --- Homepage Services Section ---
    'services.sectionTitle': 'Apa yang Kami Lakukan',
    'services.aiVideo.title': 'Produksi Video AI',
    'services.aiVideo.desc': 'Buat konten video menakjubkan dari teks atau gambar menggunakan model AI mutakhir.',
    'services.ecommerce.title': 'Konten E-Commerce',
    'services.ecommerce.desc': 'Video produk, klip gaya hidup, dan konten belanja dalam skala besar.',
    'services.localization.title': 'Lokalisasi Multibahasa',
    'services.localization.desc': 'Adaptasi video Anda ke 10+ bahasa dengan voiceover dan subtitle AI.',
    'services.social.title': 'Kampanye Media Sosial',
    'services.social.desc': 'Konten video yang dioptimalkan untuk TikTok, Reels, Shorts, dan lainnya.',

    // --- How It Works ---
    'howItWorks.sectionTitle': 'Cara Kerjanya',
    'howItWorks.step1.title': 'Bagikan Brief Anda',
    'howItWorks.step1.desc': 'Ceritakan tujuan, panduan brand, dan target audiens Anda.',
    'howItWorks.step2.title': 'Generasi AI',
    'howItWorks.step2.desc': 'Mesin AI kami menghasilkan draf video dalam hitungan menit.',
    'howItWorks.step3.title': 'Review & Iterasi',
    'howItWorks.step3.desc': 'Sempurnakan output dengan platform review kolaboratif kami.',
    'howItWorks.step4.title': 'Kirim & Skalakan',
    'howItWorks.step4.desc': 'Dapatkan aset final yang dioptimalkan untuk setiap saluran dan lokal.',

    // --- Stats ---
    'stats.costReduction': 'Pengurangan Biaya',
    'stats.turnaround': 'Waktu Pengerjaan',
    'stats.languages': 'Bahasa',
    'stats.videosMonthly': 'Video / Bulan',

    // --- Testimonials ---
    'testimonials.sectionTitle': 'Apa Kata Klien Kami',
    'testimonials.quote1': 'GlimoLab memangkas waktu produksi video kami sebesar 80%. Kualitasnya menyaingi agensi top dengan biaya jauh lebih rendah.',
    'testimonials.name1': 'Sarah Chen',
    'testimonials.role1': 'Head of Marketing',
    'testimonials.company1': 'TechVentures',
    'testimonials.quote2': 'Pipeline lokalisasi multibahasa mereka mengubah segalanya. Kami meluncurkan di 12 pasar secara bersamaan.',
    'testimonials.name2': 'Marco Rodriguez',
    'testimonials.role2': 'VP of Growth',
    'testimonials.company2': 'ShopEase',
    'testimonials.quote3': 'Video yang dihasilkan AI tidak bisa dibedakan dari konten yang diproduksi secara tradisional. Benar-benar mengesankan.',
    'testimonials.name3': 'Leo Xiang',
    'testimonials.role3': 'CEO',
    'testimonials.company3': 'Baby Pro Asia',

    // --- Featured Work ---
    'work.sectionTitle': 'Karya Pilihan',
    'work.viewAll': 'Lihat Semua Proyek',
    'work.project1.category': 'Luxury Brand Film',
    'work.project1.title': 'Eternité Paris Luxury Film',
    'work.project1.client': 'Concept showcase',
    'work.project2.category': 'E-Commerce',
    'work.project2.title': 'Headphone Product Ad',
    'work.project2.client': 'Concept showcase',
    'work.project3.category': 'Automotive',
    'work.project3.title': 'AMG GT XX Concept Film',
    'work.project3.client': 'Concept showcase',

    // --- Footer ---
    'footer.aboutTitle': 'GlimoLab',
    'footer.aboutText':
      'Studio produksi video berbasis AI yang menciptakan konten sinematik untuk brand di seluruh dunia.',
    'footer.servicesTitle': 'Layanan',
    'footer.resourcesTitle': 'Sumber Daya',
    'footer.contactTitle': 'Hubungi Kami',
    'footer.quickLinks': 'Tautan Cepat',
    'footer.rights': 'Hak cipta dilindungi.',
    'footer.privacy': 'Kebijakan Privasi',
    'footer.terms': 'Ketentuan Layanan',

    // --- Services labels ---
    'service.aiVideo.title': 'Generasi Video AI',
    'service.aiVideo.desc': 'Text-to-video dan image-to-video yang didukung model mutakhir.',
    'service.motion.title': 'Motion Graphics',
    'service.motion.desc': 'Animasi dinamis dan desain motion yang konsisten dengan brand.',
    'service.editing.title': 'Pasca-Produksi',
    'service.editing.desc': 'Editing, color grading, dan sound design yang meningkatkan setiap frame.',
    'service.localization.title': 'Lokalisasi',
    'service.localization.desc': 'Pipeline voiceover dan subtitle multi-bahasa dalam skala besar.',

    // --- Status ---
    'status.comingSoon': 'Segera Hadir',
    'status.stayTuned': 'Sesuatu yang luar biasa sedang dalam pengerjaan. Nantikan.',

    // --- Pricing Page ---
    'pricing.badge': 'Harga Launch',
    'pricing.title': 'Produksi Video Premium dengan Bantuan AI',
    'pricing.subtitle': 'Produksi video komersial dalam format vertical, horizontal, dan 4K cinematic, mulai dari $360 untuk first-video launch clients.',
    'pricing.launchNote': 'Diskon launch 50% hanya berlaku untuk video single-project pertama setiap client.',
    'pricing.singleTitle': 'Harga Single Project',
    'pricing.singleSubtitle': 'Bandingkan key differences: resolution, finished length, localization, dan digital human customization.',
    'pricing.monthlyTitle': 'Paket Campaign Bulanan',
    'pricing.monthlySubtitle': 'Bandingkan paket bulanan berdasarkan resolution, video length, monthly quantity, localization support, dan digital human continuity.',
    'pricing.launchPrice': 'Harga launch',
    'pricing.requestQuote': 'Minta Quote',
    'pricing.badgePopular': 'Direkomendasikan',
    'pricing.spec.resolution': 'Resolution',
    'pricing.spec.length': 'Length',
    'pricing.spec.quantity': 'Quantity',
    'pricing.spec.localization': 'Localization',
    'pricing.spec.digitalHuman': 'Digital human',
    'pricing.localization.englishOnly': 'English only',
    'pricing.localization.included': 'Included',
    'pricing.digitalHuman.notIncluded': 'Not included',
    'pricing.digitalHuman.included': 'Included',
    'pricing.digitalHuman.monthlyAddOn': 'Available as add-on',
    'pricing.digitalHuman.monthlyContinuity': 'Character continuity',
    'pricing.digitalHuman.monthlyCustom': 'Custom digital human',
    'pricing.faqTitle': 'Pertanyaan yang Sering Diajukan',
    'pricing.faqSubtitle': 'Semua yang perlu Anda ketahui tentang harga launch, paket bulanan, dan ruang lingkup produksi.',
    'pricing.bottomCtaTitle': 'Belum yakin tier mana yang cocok?',
    'pricing.bottomCtaSubtitle': 'Bagikan tujuan campaign Anda dan kami akan merekomendasikan production plan yang tepat.',

    // --- FAQ ---
    'faq.q1': 'Berapa lama harga launch tersedia?',
    'faq.a1': 'Harga launch adalah penawaran untuk early clients. Diskon single-project 50% hanya berlaku untuk video pertama setiap client, dan penawaran dapat berubah ketika kapasitas produksi mulai penuh.',
    'faq.q2': 'Saya sebaiknya memilih single project atau paket bulanan?',
    'faq.a2': 'Pilih single project untuk satu campaign, product launch, atau brand video. Pilih paket bulanan jika membutuhkan aset short-form berulang untuk TikTok, Reels, Shorts, e-commerce, atau always-on campaigns.',
    'faq.q3': 'Apakah bisa membuat video digital human?',
    'faq.a3': 'Ya. Kami dapat membuat digital human characters custom berdasarkan founders, brand ambassadors, sales presenters, atau product educators untuk konten spokesperson-style yang konsisten.',
    'faq.q4': 'Apakah mendukung banyak bahasa dan pasar lokal?',
    'faq.a4': 'Ya. Localization, subtitles, voiceover, dan market adaptation dapat ditambahkan berdasarkan target platform, versi bahasa, dan kebutuhan campaign regional.',
    'faq.q5': 'Mengapa harga ditampilkan dalam USD?',
    'faq.a5': 'USD adalah mata uang quote kami. PHP dan IDR hanya ditampilkan sebagai reference conversions, menggunakan sekitar 1 USD ke PHP 61 dan IDR 17,900. Proposal formal dapat menggunakan kurs terbaru.',
    'faq.q6': 'Format video apa saja yang dikirimkan?',
    'faq.a6': 'Kami mengirim format video standar seperti MP4 dan MOV, dengan aspect ratio dan export yang disiapkan untuk target platform, termasuk social media, web, e-commerce, dan presentation use.',

    // --- Blog Page ---
    'blog.badge': 'Blog',
    'blog.title': 'Wawasan & Pembaruan',
    'blog.subtitle': 'Perspektif ahli tentang produksi video AI, lokalisasi konten, dan pemasaran digital.',
    'blog.readMore': 'Baca Selengkapnya',
    'blog.noPosts': 'Belum ada artikel. Periksa kembali nanti!',
    'blog.backToBlog': 'Kembali ke Blog',
    'blog.relatedPosts': 'Artikel Terkait',

    // --- Contact Page ---
    'contact.badge': 'Hubungi Kami',
    'contact.title': 'Mari Ciptakan Sesuatu yang Luar Biasa',
    'contact.subtitle': 'Ceritakan proyek Anda dan kami akan merespons dalam 24 jam.',
    'contact.infoTitle': 'Informasi Kontak',
    'contact.infoSubtitle': 'Hubungi melalui salah satu saluran ini — kami merespons dengan cepat.',
    'contact.office': 'Kantor',
    'contact.followUs': 'Ikuti Kami',
    'contact.form.name': 'Nama',
    'contact.form.email': 'Email',
    'contact.form.company': 'Perusahaan',
    'contact.form.service': 'Layanan yang Diminati',
    'contact.form.selectService': 'Pilih layanan',
    'contact.form.message': 'Pesan',
    'contact.form.messagePlaceholder': 'Ceritakan proyek, tujuan, dan timeline Anda...',
    'contact.form.submit': 'Kirim Pesan',
    'contact.service.singleProject': 'Single Project Video',
    'contact.service.monthlyPackage': 'Monthly Campaign Package',
    'contact.service.digitalHuman': 'Digital Human Video',
    'contact.service.aiVideo': 'Generasi Video AI',
    'contact.service.motion': 'Motion Graphics',
    'contact.service.editing': 'Pasca-Produksi',
    'contact.service.localization': 'Lokalisasi',
    'contact.service.other': 'Lainnya',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
