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
      'GlimoLab blends artificial intelligence with cinematic craft to produce video content that captivates, converts, and scales.',
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
    'services.localization.desc': 'Adapt your videos to 30+ languages with AI voiceover and subtitles.',
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
    'testimonials.name3': 'Yuki Tanaka',
    'testimonials.role3': 'Creative Director',
    'testimonials.company3': 'Nova Digital',

    // --- Featured Work ---
    'work.sectionTitle': 'Featured Work',
    'work.viewAll': 'View All Projects',
    'work.project1.category': 'Brand Story',
    'work.project1.title': 'Nova Digital Brand Film',
    'work.project1.client': 'Client: Nova Digital',
    'work.project2.category': 'E-Commerce',
    'work.project2.title': 'ShopEase Product Launch',
    'work.project2.client': 'Client: ShopEase',
    'work.project3.category': 'Social Campaign',
    'work.project3.title': 'TrendSet Viral Series',
    'work.project3.client': 'Client: TrendSet',

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
    'pricing.badge': 'Pricing',
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Choose the plan that fits your content needs.',
    'pricing.compareTitle': 'Feature Comparison',
    'pricing.compareSubtitle': 'See exactly what you get with each plan.',
    'pricing.faqTitle': 'Frequently Asked Questions',
    'pricing.faqSubtitle': 'Everything you need to know about our pricing and services.',
    'pricing.bottomCtaTitle': 'Not sure which plan?',
    'pricing.bottomCtaSubtitle': "Let's talk and find the perfect fit for your business.",

    // --- FAQ ---
    'faq.q1': 'Can I switch plans at any time?',
    'faq.a1': 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. If you upgrade mid-cycle, we\'ll prorate the difference.',
    'faq.q2': 'What happens if I exceed my video limit?',
    'faq.a2': 'We\'ll notify you when you\'re approaching your limit. If you need more videos, you can upgrade to a higher plan or purchase additional video credits at a per-video rate.',
    'faq.q3': 'Is there a long-term contract?',
    'faq.a3': 'No, all plans are month-to-month with no long-term commitment. You can cancel anytime. Enterprise clients may opt for annual contracts with volume discounts.',
    'faq.q4': 'How does the localization process work?',
    'faq.a4': 'Provide your source video and we handle translation, voiceover generation, subtitle timing, and cultural adaptation. Turnaround depends on the number of languages and plan level.',
    'faq.q5': 'Do you offer a free trial?',
    'faq.a5': 'We offer a free consultation and sample video for new clients so you can evaluate quality before committing. Contact us to get started.',
    'faq.q6': 'What video formats do you deliver?',
    'faq.a6': 'We deliver in all standard formats including MP4, MOV, and WebM. Each video is optimized for its target platform — social media, web, or broadcast. Custom aspect ratios are included.',

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
      'Pinagsasama ng GlimoLab ang artipisyal na intelligence sa sinematikong sining upang makagawa ng video content na nakaka-engganyo, nakaka-convert, at nakaka-scale.',
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
    'services.localization.desc': 'I-adapt ang iyong mga video sa 30+ wika gamit ang AI voiceover at subtitle.',
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
    'testimonials.name3': 'Yuki Tanaka',
    'testimonials.role3': 'Creative Director',
    'testimonials.company3': 'Nova Digital',

    // --- Featured Work ---
    'work.sectionTitle': 'Mga Tampok na Gawain',
    'work.viewAll': 'Tingnan Lahat ng Proyekto',
    'work.project1.category': 'Brand Story',
    'work.project1.title': 'Nova Digital Brand Film',
    'work.project1.client': 'Kliyente: Nova Digital',
    'work.project2.category': 'E-Commerce',
    'work.project2.title': 'ShopEase Product Launch',
    'work.project2.client': 'Kliyente: ShopEase',
    'work.project3.category': 'Social Campaign',
    'work.project3.title': 'TrendSet Viral Series',
    'work.project3.client': 'Kliyente: TrendSet',

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
    'pricing.badge': 'Presyo',
    'pricing.title': 'Simple at Transparent na Presyo',
    'pricing.subtitle': 'Piliin ang planong akma sa iyong pangangailangan sa content.',
    'pricing.compareTitle': 'Paghahambing ng Tampok',
    'pricing.compareSubtitle': 'Tingnan kung ano ang kasama sa bawat plano.',
    'pricing.faqTitle': 'Mga Madalas Itanong',
    'pricing.faqSubtitle': 'Lahat ng kailangan mong malaman tungkol sa aming presyo at serbisyo.',
    'pricing.bottomCtaTitle': 'Hindi sigurado sa plano?',
    'pricing.bottomCtaSubtitle': 'Makipag-usap tayo at hanapin ang pinakamagandang akma sa iyong negosyo.',

    // --- FAQ ---
    'faq.q1': 'Maaari ba akong magpalit ng plano anumang oras?',
    'faq.a1': 'Oo, maaari kang mag-upgrade o mag-downgrade ng plano anumang oras. Ang mga pagbabago ay magiging epektibo sa simula ng susunod mong billing cycle. Kung mag-upgrade ka sa gitna ng cycle, ipro-prorate namin ang diperensya.',
    'faq.q2': 'Ano ang mangyayari kung lumampas ako sa aking video limit?',
    'faq.a2': 'Ipaalam namin sa iyo kapag malapit ka na sa iyong limit. Kung kailangan mo ng mas maraming video, maaari kang mag-upgrade sa mas mataas na plano o bumili ng karagdagang video credits.',
    'faq.q3': 'May long-term na kontrata ba?',
    'faq.a3': 'Wala, lahat ng plano ay buwanang walang long-term na commitment. Maaari kang mag-cancel anumang oras. Ang mga Enterprise na kliyente ay maaaring pumili ng taunang kontrata na may volume discount.',
    'faq.q4': 'Paano gumagana ang proseso ng lokalisasyon?',
    'faq.a4': 'Ibigay ang iyong source video at hahawakan namin ang pagsasalin, paggawa ng voiceover, pag-time ng subtitle, at cultural adaptation. Ang turnaround ay nakadepende sa bilang ng wika at antas ng plano.',
    'faq.q5': 'Nag-aalok ba kayo ng libreng trial?',
    'faq.a5': 'Nag-aalok kami ng libreng konsultasyon at sample video para sa mga bagong kliyente upang mavaluyahan ang kalidad bago mag-commit. Makipag-ugnayan upang magsimula.',
    'faq.q6': 'Anong mga video format ang idinedeliver ninyo?',
    'faq.a6': 'Nagdedeliver kami sa lahat ng standard na format kabilang ang MP4, MOV, at WebM. Bawat video ay optimized para sa target platform nito — social media, web, o broadcast.',

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
      'GlimoLab memadukan kecerdasan buatan dengan keterampilan sinematik untuk menghasilkan konten video yang memikat, mengonversi, dan dapat diskalakan.',
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
    'services.localization.desc': 'Adaptasi video Anda ke 30+ bahasa dengan voiceover dan subtitle AI.',
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
    'testimonials.name3': 'Yuki Tanaka',
    'testimonials.role3': 'Creative Director',
    'testimonials.company3': 'Nova Digital',

    // --- Featured Work ---
    'work.sectionTitle': 'Karya Pilihan',
    'work.viewAll': 'Lihat Semua Proyek',
    'work.project1.category': 'Brand Story',
    'work.project1.title': 'Film Brand Nova Digital',
    'work.project1.client': 'Klien: Nova Digital',
    'work.project2.category': 'E-Commerce',
    'work.project2.title': 'Peluncuran Produk ShopEase',
    'work.project2.client': 'Klien: ShopEase',
    'work.project3.category': 'Kampanye Sosial',
    'work.project3.title': 'Serial Viral TrendSet',
    'work.project3.client': 'Klien: TrendSet',

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
    'pricing.badge': 'Harga',
    'pricing.title': 'Harga Sederhana dan Transparan',
    'pricing.subtitle': 'Pilih paket yang sesuai dengan kebutuhan konten Anda.',
    'pricing.compareTitle': 'Perbandingan Fitur',
    'pricing.compareSubtitle': 'Lihat apa saja yang Anda dapatkan di setiap paket.',
    'pricing.faqTitle': 'Pertanyaan yang Sering Diajukan',
    'pricing.faqSubtitle': 'Semua yang perlu Anda ketahui tentang harga dan layanan kami.',
    'pricing.bottomCtaTitle': 'Belum yakin pilih paket mana?',
    'pricing.bottomCtaSubtitle': 'Mari berbicara dan temukan paket yang tepat untuk bisnis Anda.',

    // --- FAQ ---
    'faq.q1': 'Apakah saya bisa berganti paket kapan saja?',
    'faq.a1': 'Ya, Anda bisa upgrade atau downgrade paket kapan saja. Perubahan berlaku di awal siklus penagihan berikutnya. Jika Anda upgrade di tengah siklus, kami akan memproratasi selisihnya.',
    'faq.q2': 'Apa yang terjadi jika saya melebihi batas video?',
    'faq.a2': 'Kami akan memberitahu saat Anda mendekati batas. Jika butuh lebih banyak video, Anda bisa upgrade ke paket lebih tinggi atau membeli kredit video tambahan.',
    'faq.q3': 'Apakah ada kontrak jangka panjang?',
    'faq.a3': 'Tidak, semua paket berbasis bulanan tanpa komitmen jangka panjang. Anda bisa membatalkan kapan saja. Klien Enterprise dapat memilih kontrak tahunan dengan diskon volume.',
    'faq.q4': 'Bagaimana proses lokalisasi bekerja?',
    'faq.a4': 'Berikan video sumber Anda dan kami akan menangani terjemahan, pembuatan voiceover, pengaturan waktu subtitle, dan adaptasi budaya. Waktu penyelesaian bergantung pada jumlah bahasa dan tingkat paket.',
    'faq.q5': 'Apakah ada uji coba gratis?',
    'faq.a5': 'Kami menawarkan konsultasi gratis dan video sampel untuk klien baru agar Anda dapat mengevaluasi kualitas sebelum berkomitmen. Hubungi kami untuk memulai.',
    'faq.q6': 'Format video apa saja yang Anda kirimkan?',
    'faq.a6': 'Kami mengirimkan dalam semua format standar termasuk MP4, MOV, dan WebM. Setiap video dioptimalkan untuk platform targetnya — media sosial, web, atau siaran.',

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
    'contact.service.aiVideo': 'Generasi Video AI',
    'contact.service.motion': 'Motion Graphics',
    'contact.service.editing': 'Pasca-Produksi',
    'contact.service.localization': 'Lokalisasi',
    'contact.service.other': 'Lainnya',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
