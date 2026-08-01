import type { AppLocale } from '@/utils/i18n'

type Dict = Record<string, string>

const en: Dict = {
  // Nav
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.services': 'Services',
  'nav.industries': 'Industries',
  'nav.resources': 'Resources',
  'nav.contact': 'Contact',
  'nav.search': 'Search',
  'nav.strategySession': 'Strategy Session',
  'nav.viewAllServices': 'View all services',
  'nav.viewAllIndustries': 'View all industries',
  'nav.resourceLibrary': 'Resource Library',
  'nav.insights': 'Insights',
  'nav.successStories': 'Success Stories',
  'nav.helpCenter': 'Help Center',
  'nav.clientPortal': 'Client Portal',
  'nav.exploreServices': 'Explore Services',
  'nav.bookStrategy': 'Book Strategy Session',
  'nav.skip': 'Skip to main content',

  // Hero
  'hero.brand': 'Real Block Technologies',
  'hero.headline1': 'Tokenizing real assets.',
  'hero.headline2': 'Powering enterprise intelligence.',
  'hero.description':
    'AI, blockchain, and real-world asset consulting for organizations transforming physical value into digital advantage.',
  'hero.ctaPrimary': 'Schedule Consultation',
  'hero.ctaSecondary': 'Explore Solutions',

  // Home – about / pillars
  'home.aboutEyebrow': 'About Real Block',
  'home.aboutTitle': 'From physical assets to governed digital markets.',
  'home.aboutBody':
    'We help enterprises convert tokenization, AI, and blockchain initiatives into operating capability—with institutional rigor, security-aware architecture, and delivery discipline executives can trust.',
  'home.aboutCta': 'About Real Block',
  'home.learnMore': 'Learn more',
  'home.pillar1Title': 'RWA Tokenization (TaaS)',
  'home.pillar1Text': 'Tokenize real estate, artworks, antiques, rent share, and memberships.',
  'home.pillar2Title': 'AI Transformation',
  'home.pillar2Text': 'Automate operations and elevate decision quality with practical enterprise AI.',
  'home.pillar3Title': 'Enterprise Platforms',
  'home.pillar3Text': 'Professional services for Workday, Microsoft Dynamics 365, and HubSpot.',

  // Home – solutions by problem
  'home.solutionsEyebrow': 'Business problems',
  'home.solutionsTitle': 'Solutions mapped to the problems leaders actually face',
  'home.solutionsBody':
    'Technology follows the outcome. Start with the operating challenge—then select the capabilities that fit.',
  'home.businessProblem': 'Business problem',
  'home.outcome': 'Outcome',
  'home.exploreApproach': 'Explore approach',
  'home.viewAllServices': 'View all services',
  'home.bookStrategySession': 'Book a strategy session',

  // Home – services list
  'home.servicesEyebrow': 'Solutions',
  'home.servicesTitle': 'Solutions designed for enterprise outcomes',
  'home.servicesBody':
    'Advisory and implementation across TaaS tokenization, AI, blockchain, FinTech, and enterprise platforms—sequenced to reduce risk and accelerate value.',

  // Home – guide / insights / booking
  'home.guideEyebrow': 'Enterprise resource',
  'home.guideTitle': 'The enterprise guide to real-world asset tokenization',
  'home.guideBody':
    'A practical leadership briefing covering architecture, infrastructure, use cases, and an implementation roadmap.',
  'home.guideCta': 'Download free guide',
  'home.browseResources': 'Browse resources',
  'home.insightsEyebrow': 'Insights',
  'home.insightsTitle': 'Briefings for digital transformation leaders',
  'home.insightsBody': 'Occasional perspectives on AI, blockchain, and asset digitization—no noise.',
  'home.bookingTitle': 'Start with a structured strategy session',
  'home.bookingBody':
    'Qualify priorities across AI transformation, RWA tokenization, blockchain strategy, and enterprise platforms—then book the right conversation.',
  'home.bookingCta': 'Book a Strategy Session',
  'home.ctaTitle': 'Partner with an advisory team built for institutional outcomes.',
  'home.ctaBody':
    'Real Block Technologies designs and delivers AI, blockchain, and real-world asset solutions with the governance executives require.',

  // Solutions problems
  'solution.illiquid-assets.problem': 'Physical assets are hard to digitize and manage',
  'solution.illiquid-assets.outcome': 'Governed digital representation and operating design',
  'solution.illiquid-assets.description':
    'Owners of real estate, collectibles, and membership businesses need practical ways to digitize ownership, distribute rent share, and manage access.',
  'solution.manual-operations.problem': 'Manual processes slow decisions and raise cost',
  'solution.manual-operations.outcome': 'Automation with measurable operating ROI',
  'solution.manual-operations.description':
    'Leadership teams struggle to move beyond pilots into production AI that reduces cycle time and improves decision quality.',
  'solution.platform-fragmentation.problem': 'Enterprise platforms are fragmented and under-adopted',
  'solution.platform-fragmentation.outcome': 'Platform-aligned professional services and adoption',
  'solution.platform-fragmentation.description':
    'Workday, Dynamics 365, and HubSpot investments stall when implementation, integration, and change management are disconnected.',
  'solution.finance-visibility.problem': 'Finance teams lack unified digital operations',
  'solution.finance-visibility.outcome': 'Clearer workflows, reporting, and FinTech stack design',
  'solution.finance-visibility.description':
    'Finance and operations leaders need visibility, automation, and modern FinTech tooling without multi-year transformation programs.',
  'solution.blockchain-uncertainty.problem': 'Blockchain ambition without a practical roadmap',
  'solution.blockchain-uncertainty.outcome': 'Fit-for-purpose architecture and delivery plan',
  'solution.blockchain-uncertainty.description':
    'Enterprises need clarity on where blockchain creates value, how to integrate it, and how to govern risk.',
  'solution.transformation-alignment.problem': 'Technology initiatives lack executive alignment',
  'solution.transformation-alignment.outcome': 'Sequenced roadmap with clear deliverables',
  'solution.transformation-alignment.description':
    'Sponsors need a structured way to prioritize initiatives, set governance, and connect strategy to delivery.',

  // Services (short)
  'service.rwa.title': 'RWA Tokenization (TaaS)',
  'service.rwa.description':
    'Tokenization-as-a-Service for real estate, artworks, antiques, rent-share, and membership programs.',
  'service.ai.title': 'AI Solutions',
  'service.ai.description':
    'Enterprise AI strategy, automation, agents, analytics, and document intelligence with measurable ROI.',
  'service.consulting.title': 'Enterprise Consulting',
  'service.consulting.description':
    'Professional services for Workday, Microsoft Dynamics 365, HubSpot, and broader transformation programs.',
  'service.blockchain.title': 'Blockchain Advisory',
  'service.blockchain.description':
    'Strategy, architecture, and implementation guidance for permissioned ledgers and digital asset infrastructure.',
  'service.fintech.title': 'FinTech Solutions',
  'service.fintech.description':
    'Modernize payments, financial operations, reporting, and digital banking workflows.',

  // Footer
  'footer.stayInformed': 'Stay informed',
  'footer.newsletterBody':
    'Briefings on AI, blockchain, and real-world asset programs for enterprise leaders.',
  'footer.company': 'Company',
  'footer.services': 'Services',
  'footer.industries': 'Industries',
  'footer.resources': 'Resources',
  'footer.legal': 'Legal',
  'footer.aboutUs': 'About Us',
  'footer.successStories': 'Success Stories',
  'footer.careers': 'Careers',
  'footer.clientPortal': 'Client Portal',
  'footer.contact': 'Contact',
  'footer.resourceLibrary': 'Resource Library',
  'footer.rwaGuide': 'RWA Guide',
  'footer.insights': 'Insights',
  'footer.search': 'Search',
  'footer.helpCenter': 'Help Center',
  'footer.strategySession': 'Strategy Session',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Use',
  'footer.rights': 'All rights reserved.',
  'footer.tagline': 'Enterprise consulting for AI, blockchain, FinTech, and real-world asset tokenization',
  'footer.global': 'Global enterprise technology consulting',
  'footer.realEstate': 'Real Estate',
  'footer.banking': 'Banking',
  'footer.manufacturing': 'Manufacturing',
  'footer.healthcare': 'Healthcare',
  'footer.logistics': 'Logistics',
  'footer.professionalServices': 'Professional Services',
  'footer.rwa': 'RWA Tokenization (TaaS)',
  'footer.ai': 'AI Solutions',
  'footer.consulting': 'Enterprise Consulting',
  'footer.blockchain': 'Blockchain Advisory',
  'footer.fintech': 'FinTech Solutions',

  // Shared CTA / sticky / FAQ / booking
  'cta.primary': 'Book a Strategy Session',
  'cta.secondary': 'Explore Services',
  'cta.defaultTitle': 'Ready to unlock the next chapter of digital transformation?',
  'cta.defaultBody':
    'Partner with Real Block Technologies to design and deliver AI, blockchain, and real-world asset solutions built for enterprise outcomes.',
  'sticky.title': 'Speak with an advisor',
  'sticky.body': 'Book a strategy session for AI, RWA, FinTech, or blockchain initiatives.',
  'sticky.cta': 'Book strategy session',
  'sticky.ctaShort': 'Book',
  'faq.eyebrow': 'Enterprise FAQ',
  'faq.title': 'Frequently asked questions',
  'faq.description':
    'Clear answers for executives evaluating AI, blockchain, and real-world asset initiatives.',
  'booking.eyebrow': 'Book a Consultation',
  'common.subscribe': 'Subscribe',
  'common.contactUs': 'Contact Us',
  'common.language': 'Language',
  'common.loading': 'Loading page',

  // FAQ items
  'faq.0.q': 'What does Real Block Technologies specialize in?',
  'faq.0.a':
    'We specialize in RWA Tokenization-as-a-Service, enterprise AI solutions, blockchain advisory, FinTech modernization, and professional services for Workday, Dynamics 365, and HubSpot.',
  'faq.1.q': 'Who is this for?',
  'faq.1.a':
    'We work with enterprises and operators across real estate, banking, manufacturing, healthcare, and professional services that need practical digital transformation programs.',
  'faq.2.q': 'How do engagements typically start?',
  'faq.2.a':
    'Most clients begin with a strategy session to clarify priorities, constraints, and success metrics—then move into a scoped discovery or delivery engagement.',
  'faq.3.q': 'Do you only provide advisory, or also implementation?',
  'faq.3.a':
    'Both. We provide strategy and architecture advisory as well as hands-on implementation and platform professional services.',
  'faq.4.q': 'How is pricing structured?',
  'faq.4.a':
    'Engagements are proposal-based and scoped to objectives, complexity, and delivery model—not one-size-fits-all packages.',
  'faq.5.q': 'Do you only provide strategy, or also implementation?',
  'faq.5.a':
    'Both. Our engagements range from strategic advisory and architecture design to hands-on implementation, integration, and operating model support.',
}

const es: Dict = {
  'nav.home': 'Inicio',
  'nav.about': 'Nosotros',
  'nav.services': 'Servicios',
  'nav.industries': 'Industrias',
  'nav.resources': 'Recursos',
  'nav.contact': 'Contacto',
  'nav.search': 'Buscar',
  'nav.strategySession': 'Sesión estratégica',
  'nav.viewAllServices': 'Ver todos los servicios',
  'nav.viewAllIndustries': 'Ver todas las industrias',
  'nav.resourceLibrary': 'Biblioteca de recursos',
  'nav.insights': 'Perspectivas',
  'nav.successStories': 'Casos de éxito',
  'nav.helpCenter': 'Centro de ayuda',
  'nav.clientPortal': 'Portal del cliente',
  'nav.exploreServices': 'Explorar servicios',
  'nav.bookStrategy': 'Reservar sesión estratégica',
  'nav.skip': 'Saltar al contenido principal',

  'hero.brand': 'Real Block Technologies',
  'hero.headline1': 'Tokenización de activos reales.',
  'hero.headline2': 'Impulsando la inteligencia empresarial.',
  'hero.description':
    'Consultoría en IA, blockchain y activos del mundo real para organizaciones que transforman el valor físico en ventaja digital.',
  'hero.ctaPrimary': 'Agendar consulta',
  'hero.ctaSecondary': 'Explorar soluciones',

  'home.aboutEyebrow': 'Sobre Real Block',
  'home.aboutTitle': 'De activos físicos a mercados digitales gobernados.',
  'home.aboutBody':
    'Ayudamos a las empresas a convertir iniciativas de tokenización, IA y blockchain en capacidad operativa—con rigor institucional, arquitectura consciente de la seguridad y disciplina de entrega.',
  'home.aboutCta': 'Sobre Real Block',
  'home.learnMore': 'Más información',
  'home.pillar1Title': 'Tokenización RWA (TaaS)',
  'home.pillar1Text': 'Tokenice bienes raíces, obras de arte, antigüedades, renta compartida y membresías.',
  'home.pillar2Title': 'Transformación con IA',
  'home.pillar2Text': 'Automatice operaciones y mejore la calidad de las decisiones con IA empresarial práctica.',
  'home.pillar3Title': 'Plataformas empresariales',
  'home.pillar3Text': 'Servicios profesionales para Workday, Microsoft Dynamics 365 y HubSpot.',

  'home.solutionsEyebrow': 'Problemas de negocio',
  'home.solutionsTitle': 'Soluciones alineadas a los problemas reales de los líderes',
  'home.solutionsBody':
    'La tecnología sigue al resultado. Comience por el desafío operativo y luego elija las capacidades adecuadas.',
  'home.businessProblem': 'Problema de negocio',
  'home.outcome': 'Resultado',
  'home.exploreApproach': 'Explorar enfoque',
  'home.viewAllServices': 'Ver todos los servicios',
  'home.bookStrategySession': 'Reservar sesión estratégica',

  'home.servicesEyebrow': 'Soluciones',
  'home.servicesTitle': 'Soluciones diseñadas para resultados empresariales',
  'home.servicesBody':
    'Asesoría e implementación en tokenización TaaS, IA, blockchain, FinTech y plataformas empresariales—secuenciadas para reducir riesgo y acelerar valor.',

  'home.guideEyebrow': 'Recurso empresarial',
  'home.guideTitle': 'La guía empresarial de tokenización de activos del mundo real',
  'home.guideBody':
    'Un briefing práctico de liderazgo sobre arquitectura, infraestructura, casos de uso y hoja de ruta de implementación.',
  'home.guideCta': 'Descargar guía gratuita',
  'home.browseResources': 'Explorar recursos',
  'home.insightsEyebrow': 'Perspectivas',
  'home.insightsTitle': 'Briefings para líderes de transformación digital',
  'home.insightsBody': 'Perspectivas ocasionales sobre IA, blockchain y digitalización de activos—sin ruido.',
  'home.bookingTitle': 'Comience con una sesión estratégica estructurada',
  'home.bookingBody':
    'Aclare prioridades en IA, tokenización RWA, blockchain y plataformas empresariales—y reserve la conversación adecuada.',
  'home.bookingCta': 'Reservar sesión estratégica',
  'home.ctaTitle': 'Asóciese con un equipo de asesoría orientado a resultados institucionales.',
  'home.ctaBody':
    'Real Block Technologies diseña y entrega soluciones de IA, blockchain y activos reales con la gobernanza que exigen los ejecutivos.',

  'solution.illiquid-assets.problem': 'Los activos físicos son difíciles de digitalizar y gestionar',
  'solution.illiquid-assets.outcome': 'Representación digital gobernada y diseño operativo',
  'solution.illiquid-assets.description':
    'Los propietarios de bienes raíces, coleccionables y membresías necesitan formas prácticas de digitalizar la propiedad, distribuir renta y gestionar el acceso.',
  'solution.manual-operations.problem': 'Los procesos manuales ralentizan las decisiones y elevan el costo',
  'solution.manual-operations.outcome': 'Automatización con ROI operativo medible',
  'solution.manual-operations.description':
    'Los equipos directivos luchan por pasar de pilotos a IA en producción que reduzca tiempos de ciclo y mejore la calidad de decisión.',
  'solution.platform-fragmentation.problem': 'Las plataformas empresariales están fragmentadas y poco adoptadas',
  'solution.platform-fragmentation.outcome': 'Servicios profesionales alineados a la plataforma y adopción',
  'solution.platform-fragmentation.description':
    'Las inversiones en Workday, Dynamics 365 y HubSpot se estancan cuando implementación, integración y gestión del cambio están desconectadas.',
  'solution.finance-visibility.problem': 'Los equipos financieros carecen de operaciones digitales unificadas',
  'solution.finance-visibility.outcome': 'Flujos, reportes y diseño de stack FinTech más claros',
  'solution.finance-visibility.description':
    'Los líderes de finanzas y operaciones necesitan visibilidad, automatización y herramientas FinTech modernas sin programas de varios años.',
  'solution.blockchain-uncertainty.problem': 'Ambición blockchain sin una hoja de ruta práctica',
  'solution.blockchain-uncertainty.outcome': 'Arquitectura y plan de entrega adecuados al propósito',
  'solution.blockchain-uncertainty.description':
    'Las empresas necesitan claridad sobre dónde blockchain crea valor, cómo integrarlo y cómo gobernar el riesgo.',
  'solution.transformation-alignment.problem': 'Las iniciativas tecnológicas carecen de alineación ejecutiva',
  'solution.transformation-alignment.outcome': 'Hoja de ruta secuenciada con entregables claros',
  'solution.transformation-alignment.description':
    'Los patrocinadores necesitan priorizar iniciativas, definir gobernanza y conectar estrategia con entrega.',

  'service.rwa.title': 'Tokenización RWA (TaaS)',
  'service.rwa.description':
    'Tokenization-as-a-Service para bienes raíces, arte, antigüedades, renta compartida y membresías.',
  'service.ai.title': 'Soluciones de IA',
  'service.ai.description':
    'Estrategia de IA empresarial, automatización, agentes, analítica e inteligencia documental con ROI medible.',
  'service.consulting.title': 'Consultoría empresarial',
  'service.consulting.description':
    'Servicios profesionales para Workday, Microsoft Dynamics 365, HubSpot y programas de transformación.',
  'service.blockchain.title': 'Asesoría blockchain',
  'service.blockchain.description':
    'Estrategia, arquitectura e implementación para ledgers permissionados e infraestructura de activos digitales.',
  'service.fintech.title': 'Soluciones FinTech',
  'service.fintech.description':
    'Modernice pagos, operaciones financieras, reportes y flujos de banca digital.',

  'footer.stayInformed': 'Manténgase informado',
  'footer.newsletterBody':
    'Briefings sobre IA, blockchain y programas de activos reales para líderes empresariales.',
  'footer.company': 'Empresa',
  'footer.services': 'Servicios',
  'footer.industries': 'Industrias',
  'footer.resources': 'Recursos',
  'footer.legal': 'Legal',
  'footer.aboutUs': 'Sobre nosotros',
  'footer.successStories': 'Casos de éxito',
  'footer.careers': 'Carreras',
  'footer.clientPortal': 'Portal del cliente',
  'footer.contact': 'Contacto',
  'footer.resourceLibrary': 'Biblioteca de recursos',
  'footer.rwaGuide': 'Guía RWA',
  'footer.insights': 'Perspectivas',
  'footer.search': 'Buscar',
  'footer.helpCenter': 'Centro de ayuda',
  'footer.strategySession': 'Sesión estratégica',
  'footer.privacy': 'Política de privacidad',
  'footer.terms': 'Términos de uso',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.tagline': 'Consultoría empresarial en IA, blockchain, FinTech y tokenización de activos reales',
  'footer.global': 'Consultoría tecnológica empresarial global',
  'footer.realEstate': 'Bienes raíces',
  'footer.banking': 'Banca',
  'footer.manufacturing': 'Manufactura',
  'footer.healthcare': 'Salud',
  'footer.logistics': 'Logística',
  'footer.professionalServices': 'Servicios profesionales',
  'footer.rwa': 'Tokenización RWA (TaaS)',
  'footer.ai': 'Soluciones de IA',
  'footer.consulting': 'Consultoría empresarial',
  'footer.blockchain': 'Asesoría blockchain',
  'footer.fintech': 'Soluciones FinTech',

  'cta.primary': 'Reservar sesión estratégica',
  'cta.secondary': 'Explorar servicios',
  'cta.defaultTitle': '¿Listo para el próximo capítulo de la transformación digital?',
  'cta.defaultBody':
    'Asóciese con Real Block Technologies para diseñar y entregar soluciones de IA, blockchain y activos reales.',
  'sticky.title': 'Hable con un asesor',
  'sticky.body': 'Reserve una sesión estratégica sobre IA, RWA, FinTech o blockchain.',
  'sticky.cta': 'Reservar sesión estratégica',
  'sticky.ctaShort': 'Reservar',
  'faq.eyebrow': 'FAQ empresarial',
  'faq.title': 'Preguntas frecuentes',
  'faq.description':
    'Respuestas claras para ejecutivos que evalúan iniciativas de IA, blockchain y activos reales.',
  'booking.eyebrow': 'Reservar una consulta',
  'common.subscribe': 'Suscribirse',
  'common.contactUs': 'Contáctenos',
  'common.language': 'Idioma',
  'common.loading': 'Cargando página',

  'faq.0.q': '¿En qué se especializa Real Block Technologies?',
  'faq.0.a':
    'Nos especializamos en Tokenización RWA como servicio, soluciones de IA empresarial, asesoría blockchain, modernización FinTech y servicios profesionales para Workday, Dynamics 365 y HubSpot.',
  'faq.1.q': '¿Para quién es esto?',
  'faq.1.a':
    'Trabajamos con empresas y operadores en bienes raíces, banca, manufactura, salud y servicios profesionales que necesitan programas prácticos de transformación digital.',
  'faq.2.q': '¿Cómo suelen comenzar los proyectos?',
  'faq.2.a':
    'La mayoría comienza con una sesión estratégica para aclarar prioridades, restricciones y métricas de éxito—luego avanza a un descubrimiento o entrega acotada.',
  'faq.3.q': '¿Solo asesoría o también implementación?',
  'faq.3.a':
    'Ambas. Ofrecemos estrategia y arquitectura, así como implementación práctica y servicios de plataforma.',
  'faq.4.q': '¿Cómo se estructura el precio?',
  'faq.4.a':
    'Los proyectos se cotizan por propuesta según objetivos, complejidad y modelo de entrega—no paquetes únicos para todos.',
  'faq.5.q': '¿Solo estrategia o también implementación?',
  'faq.5.a':
    'Ambas. Nuestros proyectos abarcan asesoría estratégica y diseño de arquitectura hasta implementación e integración.',
}

const fr: Dict = {
  'nav.home': 'Accueil',
  'nav.about': 'À propos',
  'nav.services': 'Services',
  'nav.industries': 'Industries',
  'nav.resources': 'Ressources',
  'nav.contact': 'Contact',
  'nav.search': 'Rechercher',
  'nav.strategySession': 'Session stratégique',
  'nav.viewAllServices': 'Voir tous les services',
  'nav.viewAllIndustries': 'Voir toutes les industries',
  'nav.resourceLibrary': 'Bibliothèque de ressources',
  'nav.insights': 'Perspectives',
  'nav.successStories': 'Réussites',
  'nav.helpCenter': "Centre d'aide",
  'nav.clientPortal': 'Portail client',
  'nav.exploreServices': 'Explorer les services',
  'nav.bookStrategy': 'Réserver une session stratégique',
  'nav.skip': 'Aller au contenu principal',

  'hero.brand': 'Real Block Technologies',
  'hero.headline1': 'Tokenisation d’actifs réels.',
  'hero.headline2': 'Au service de l’intelligence d’entreprise.',
  'hero.description':
    'Conseil en IA, blockchain et actifs du monde réel pour les organisations qui transforment la valeur physique en avantage numérique.',
  'hero.ctaPrimary': 'Planifier une consultation',
  'hero.ctaSecondary': 'Explorer les solutions',

  'home.aboutEyebrow': 'À propos de Real Block',
  'home.aboutTitle': 'Des actifs physiques aux marchés numériques gouvernés.',
  'home.aboutBody':
    'Nous aidons les entreprises à transformer les initiatives de tokenisation, d’IA et de blockchain en capacités opérationnelles—avec rigueur institutionnelle et architecture sécurisée.',
  'home.aboutCta': 'À propos de Real Block',
  'home.learnMore': 'En savoir plus',
  'home.pillar1Title': 'Tokenisation RWA (TaaS)',
  'home.pillar1Text': 'Tokenisez l’immobilier, les œuvres d’art, les antiquités, le partage de loyers et les adhésions.',
  'home.pillar2Title': 'Transformation IA',
  'home.pillar2Text': 'Automatisez les opérations et améliorez la décision avec une IA d’entreprise pragmatique.',
  'home.pillar3Title': 'Plateformes d’entreprise',
  'home.pillar3Text': 'Services professionnels pour Workday, Microsoft Dynamics 365 et HubSpot.',

  'home.solutionsEyebrow': 'Problèmes métier',
  'home.solutionsTitle': 'Des solutions alignées sur les vrais problèmes des dirigeants',
  'home.solutionsBody':
    'La technologie suit le résultat. Partez du défi opérationnel, puis choisissez les capacités adaptées.',
  'home.businessProblem': 'Problème métier',
  'home.outcome': 'Résultat',
  'home.exploreApproach': 'Explorer l’approche',
  'home.viewAllServices': 'Voir tous les services',
  'home.bookStrategySession': 'Réserver une session stratégique',

  'home.servicesEyebrow': 'Solutions',
  'home.servicesTitle': 'Des solutions conçues pour des résultats d’entreprise',
  'home.servicesBody':
    'Conseil et mise en œuvre en tokenisation TaaS, IA, blockchain, FinTech et plateformes d’entreprise—séquencés pour réduire le risque et accélérer la valeur.',

  'home.guideEyebrow': 'Ressource entreprise',
  'home.guideTitle': 'Le guide entreprise de la tokenisation d’actifs réels',
  'home.guideBody':
    'Un briefing pratique sur l’architecture, l’infrastructure, les cas d’usage et une feuille de route de mise en œuvre.',
  'home.guideCta': 'Télécharger le guide gratuit',
  'home.browseResources': 'Parcourir les ressources',
  'home.insightsEyebrow': 'Perspectives',
  'home.insightsTitle': 'Briefings pour les leaders de la transformation numérique',
  'home.insightsBody': 'Perspectives occasionnelles sur l’IA, la blockchain et la digitalisation des actifs—sans bruit.',
  'home.bookingTitle': 'Commencez par une session stratégique structurée',
  'home.bookingBody':
    'Clarifiez les priorités en IA, tokenisation RWA, blockchain et plateformes—puis réservez la bonne conversation.',
  'home.bookingCta': 'Réserver une session stratégique',
  'home.ctaTitle': 'Associez-vous à une équipe de conseil conçue pour des résultats institutionnels.',
  'home.ctaBody':
    'Real Block Technologies conçoit et livre des solutions d’IA, de blockchain et d’actifs réels avec la gouvernance exigée par les dirigeants.',

  'solution.illiquid-assets.problem': 'Les actifs physiques sont difficiles à digitaliser et gérer',
  'solution.illiquid-assets.outcome': 'Représentation numérique gouvernée et conception opérationnelle',
  'solution.illiquid-assets.description':
    'Les propriétaires d’immobilier, de collections et de programmes d’adhésion ont besoin de digitaliser la propriété, partager les loyers et gérer l’accès.',
  'solution.manual-operations.problem': 'Les processus manuels ralentissent les décisions et augmentent les coûts',
  'solution.manual-operations.outcome': 'Automatisation avec un ROI opérationnel mesurable',
  'solution.manual-operations.description':
    'Les équipes de direction peinent à passer des pilotes à une IA de production qui réduit les délais et améliore la décision.',
  'solution.platform-fragmentation.problem': 'Les plateformes d’entreprise sont fragmentées et sous-adoptées',
  'solution.platform-fragmentation.outcome': 'Services professionnels alignés et adoption',
  'solution.platform-fragmentation.description':
    'Les investissements Workday, Dynamics 365 et HubSpot stagnent lorsque mise en œuvre, intégration et conduite du changement sont déconnectées.',
  'solution.finance-visibility.problem': 'Les équipes finance manquent d’opérations numériques unifiées',
  'solution.finance-visibility.outcome': 'Flux, reporting et conception FinTech plus clairs',
  'solution.finance-visibility.description':
    'Les dirigeants finance et opérations ont besoin de visibilité, d’automatisation et d’outils FinTech modernes sans programmes pluriannuels.',
  'solution.blockchain-uncertainty.problem': 'Ambition blockchain sans feuille de route pratique',
  'solution.blockchain-uncertainty.outcome': 'Architecture et plan de livraison adaptés',
  'solution.blockchain-uncertainty.description':
    'Les entreprises ont besoin de clarté sur la valeur de la blockchain, son intégration et la gouvernance du risque.',
  'solution.transformation-alignment.problem': 'Les initiatives technologiques manquent d’alignement exécutif',
  'solution.transformation-alignment.outcome': 'Feuille de route séquencée avec livrables clairs',
  'solution.transformation-alignment.description':
    'Les sponsors doivent prioriser les initiatives, définir la gouvernance et relier stratégie et livraison.',

  'service.rwa.title': 'Tokenisation RWA (TaaS)',
  'service.rwa.description':
    'Tokenization-as-a-Service pour l’immobilier, l’art, les antiquités, le partage de loyers et les adhésions.',
  'service.ai.title': 'Solutions IA',
  'service.ai.description':
    'Stratégie IA d’entreprise, automatisation, agents, analytique et intelligence documentaire avec ROI mesurable.',
  'service.consulting.title': 'Conseil d’entreprise',
  'service.consulting.description':
    'Services professionnels pour Workday, Microsoft Dynamics 365, HubSpot et programmes de transformation.',
  'service.blockchain.title': 'Conseil blockchain',
  'service.blockchain.description':
    'Stratégie, architecture et mise en œuvre pour ledgers permissionnés et infrastructure d’actifs numériques.',
  'service.fintech.title': 'Solutions FinTech',
  'service.fintech.description':
    'Modernisez les paiements, les opérations financières, le reporting et les parcours bancaires numériques.',

  'footer.stayInformed': 'Restez informé',
  'footer.newsletterBody':
    'Briefings sur l’IA, la blockchain et les programmes d’actifs réels pour les dirigeants.',
  'footer.company': 'Entreprise',
  'footer.services': 'Services',
  'footer.industries': 'Industries',
  'footer.resources': 'Ressources',
  'footer.legal': 'Mentions légales',
  'footer.aboutUs': 'À propos',
  'footer.successStories': 'Réussites',
  'footer.careers': 'Carrières',
  'footer.clientPortal': 'Portail client',
  'footer.contact': 'Contact',
  'footer.resourceLibrary': 'Bibliothèque de ressources',
  'footer.rwaGuide': 'Guide RWA',
  'footer.insights': 'Perspectives',
  'footer.search': 'Rechercher',
  'footer.helpCenter': "Centre d'aide",
  'footer.strategySession': 'Session stratégique',
  'footer.privacy': 'Politique de confidentialité',
  'footer.terms': "Conditions d'utilisation",
  'footer.rights': 'Tous droits réservés.',
  'footer.tagline': 'Conseil d’entreprise en IA, blockchain, FinTech et tokenisation d’actifs réels',
  'footer.global': 'Conseil technologique d’entreprise mondial',
  'footer.realEstate': 'Immobilier',
  'footer.banking': 'Banque',
  'footer.manufacturing': 'Industrie',
  'footer.healthcare': 'Santé',
  'footer.logistics': 'Logistique',
  'footer.professionalServices': 'Services professionnels',
  'footer.rwa': 'Tokenisation RWA (TaaS)',
  'footer.ai': 'Solutions IA',
  'footer.consulting': 'Conseil d’entreprise',
  'footer.blockchain': 'Conseil blockchain',
  'footer.fintech': 'Solutions FinTech',

  'cta.primary': 'Réserver une session stratégique',
  'cta.secondary': 'Explorer les services',
  'cta.defaultTitle': 'Prêt pour le prochain chapitre de la transformation numérique ?',
  'cta.defaultBody':
    'Associez-vous à Real Block Technologies pour concevoir et livrer des solutions d’IA, de blockchain et d’actifs réels.',
  'sticky.title': 'Parlez à un conseiller',
  'sticky.body': 'Réservez une session stratégique sur l’IA, le RWA, la FinTech ou la blockchain.',
  'sticky.cta': 'Réserver une session stratégique',
  'sticky.ctaShort': 'Réserver',
  'faq.eyebrow': 'FAQ entreprise',
  'faq.title': 'Questions fréquentes',
  'faq.description':
    'Réponses claires pour les dirigeants évaluant des initiatives d’IA, de blockchain et d’actifs réels.',
  'booking.eyebrow': 'Réserver une consultation',
  'common.subscribe': "S'abonner",
  'common.contactUs': 'Nous contacter',
  'common.language': 'Langue',
  'common.loading': 'Chargement de la page',

  'faq.0.q': 'En quoi Real Block Technologies est-elle spécialisée ?',
  'faq.0.a':
    'Nous sommes spécialisés dans la tokenisation RWA en tant que service, les solutions IA d’entreprise, le conseil blockchain, la modernisation FinTech et les services professionnels Workday, Dynamics 365 et HubSpot.',
  'faq.1.q': 'Pour qui est-ce destiné ?',
  'faq.1.a':
    'Nous travaillons avec des entreprises et opérateurs dans l’immobilier, la banque, l’industrie, la santé et les services professionnels.',
  'faq.2.q': 'Comment démarrent généralement les missions ?',
  'faq.2.a':
    'La plupart commencent par une session stratégique pour clarifier priorités, contraintes et indicateurs de succès.',
  'faq.3.q': 'Uniquement du conseil, ou aussi de la mise en œuvre ?',
  'faq.3.a':
    'Les deux. Nous fournissons conseil stratégique et architecture, ainsi que mise en œuvre et services de plateforme.',
  'faq.4.q': 'Comment le pricing est-il structuré ?',
  'faq.4.a':
    'Les missions sont proposées selon les objectifs, la complexité et le modèle de livraison—pas de forfait unique.',
  'faq.5.q': 'Uniquement de la stratégie, ou aussi de la mise en œuvre ?',
  'faq.5.a':
    'Les deux. Nos missions vont du conseil stratégique et de l’architecture à la mise en œuvre et à l’intégration.',
}

const zh: Dict = {
  'nav.home': '首页',
  'nav.about': '关于我们',
  'nav.services': '服务',
  'nav.industries': '行业',
  'nav.resources': '资源',
  'nav.contact': '联系',
  'nav.search': '搜索',
  'nav.strategySession': '战略会议',
  'nav.viewAllServices': '查看全部服务',
  'nav.viewAllIndustries': '查看全部行业',
  'nav.resourceLibrary': '资源库',
  'nav.insights': '洞察',
  'nav.successStories': '成功案例',
  'nav.helpCenter': '帮助中心',
  'nav.clientPortal': '客户门户',
  'nav.exploreServices': '探索服务',
  'nav.bookStrategy': '预约战略会议',
  'nav.skip': '跳到主要内容',

  'hero.brand': 'Real Block Technologies',
  'hero.headline1': '现实资产代币化。',
  'hero.headline2': '驱动企业智能。',
  'hero.description':
    '为将实体价值转化为数字优势的组织，提供人工智能、区块链与现实世界资产咨询。',
  'hero.ctaPrimary': '预约咨询',
  'hero.ctaSecondary': '探索解决方案',

  'home.aboutEyebrow': '关于 Real Block',
  'home.aboutTitle': '从实体资产到受治理的数字市场。',
  'home.aboutBody':
    '我们帮助企业将代币化、人工智能与区块链计划转化为运营能力——以机构级严谨、安全架构与可信交付为标准。',
  'home.aboutCta': '关于 Real Block',
  'home.learnMore': '了解更多',
  'home.pillar1Title': 'RWA 代币化（TaaS）',
  'home.pillar1Text': '对房地产、艺术品、古董、租金分成与会员权益进行代币化。',
  'home.pillar2Title': '人工智能转型',
  'home.pillar2Text': '以务实的企业人工智能自动化运营并提升决策质量。',
  'home.pillar3Title': '企业平台',
  'home.pillar3Text': '为 Workday、Microsoft Dynamics 365 与 HubSpot 提供专业服务。',

  'home.solutionsEyebrow': '业务问题',
  'home.solutionsTitle': '针对领导者真实问题的解决方案',
  'home.solutionsBody': '技术服务于成果。先从运营挑战出发，再选择匹配的能力。',
  'home.businessProblem': '业务问题',
  'home.outcome': '成果',
  'home.exploreApproach': '了解方法',
  'home.viewAllServices': '查看全部服务',
  'home.bookStrategySession': '预约战略会议',

  'home.servicesEyebrow': '解决方案',
  'home.servicesTitle': '面向企业成果的解决方案',
  'home.servicesBody':
    '覆盖 TaaS 代币化、人工智能、区块链、金融科技与企业平台的咨询与实施——以降低风险并加速价值实现。',

  'home.guideEyebrow': '企业资源',
  'home.guideTitle': '现实世界资产代币化企业指南',
  'home.guideBody': '面向领导层的实务简报，涵盖架构、基础设施、用例与实施路线图。',
  'home.guideCta': '下载免费指南',
  'home.browseResources': '浏览资源',
  'home.insightsEyebrow': '洞察',
  'home.insightsTitle': '面向数字化转型领导者的简报',
  'home.insightsBody': '关于人工智能、区块链与资产数字化的精选观点——拒绝噪音。',
  'home.bookingTitle': '从结构化战略会议开始',
  'home.bookingBody':
    '明确人工智能、RWA 代币化、区块链与企业平台优先级，然后预约合适的交流。',
  'home.bookingCta': '预约战略会议',
  'home.ctaTitle': '与以机构成果为导向的顾问团队合作。',
  'home.ctaBody':
    'Real Block Technologies 以高管所需的治理标准，设计并交付人工智能、区块链与现实资产解决方案。',

  'solution.illiquid-assets.problem': '实体资产难以数字化与管理',
  'solution.illiquid-assets.outcome': '受治理的数字表达与运营设计',
  'solution.illiquid-assets.description':
    '房地产、收藏品与会员业务需要切实的数字化所有权、租金分配与访问管理方式。',
  'solution.manual-operations.problem': '人工流程拖慢决策并推高成本',
  'solution.manual-operations.outcome': '可衡量运营回报的自动化',
  'solution.manual-operations.description':
    '领导团队难以将试点转化为可缩短周期并提升决策质量的生产级人工智能。',
  'solution.platform-fragmentation.problem': '企业平台碎片化且采用不足',
  'solution.platform-fragmentation.outcome': '与平台对齐的专业服务与采用',
  'solution.platform-fragmentation.description':
    '当实施、集成与变革管理脱节时，Workday、Dynamics 365 与 HubSpot 投资容易停滞。',
  'solution.finance-visibility.problem': '财务团队缺乏统一的数字运营',
  'solution.finance-visibility.outcome': '更清晰的流程、报表与金融科技架构',
  'solution.finance-visibility.description':
    '财务与运营领导者需要可见性、自动化与现代金融科技工具，而不是多年改造项目。',
  'solution.blockchain-uncertainty.problem': '有区块链愿景却缺乏务实路线图',
  'solution.blockchain-uncertainty.outcome': '契合目标的架构与交付计划',
  'solution.blockchain-uncertainty.description':
    '企业需要明确区块链在何处创造价值、如何集成以及如何治理风险。',
  'solution.transformation-alignment.problem': '技术项目缺乏高管对齐',
  'solution.transformation-alignment.outcome': '有明确交付物的分阶段路线图',
  'solution.transformation-alignment.description':
    '发起人需要结构化地确定优先级、建立治理，并将战略连接到交付。',

  'service.rwa.title': 'RWA 代币化（TaaS）',
  'service.rwa.description': '面向房地产、艺术品、古董、租金分成与会员计划的代币化即服务。',
  'service.ai.title': '人工智能解决方案',
  'service.ai.description': '企业人工智能战略、自动化、智能体、分析与文档智能，追求可衡量回报。',
  'service.consulting.title': '企业咨询',
  'service.consulting.description': '面向 Workday、Microsoft Dynamics 365、HubSpot 及更广泛转型项目的专业服务。',
  'service.blockchain.title': '区块链顾问',
  'service.blockchain.description': '面向许可链与数字资产基础设施的战略、架构与实施指导。',
  'service.fintech.title': '金融科技解决方案',
  'service.fintech.description': '现代化支付、财务运营、报表与数字银行流程。',

  'footer.stayInformed': '保持关注',
  'footer.newsletterBody': '面向企业领导者的人工智能、区块链与现实资产项目简报。',
  'footer.company': '公司',
  'footer.services': '服务',
  'footer.industries': '行业',
  'footer.resources': '资源',
  'footer.legal': '法律',
  'footer.aboutUs': '关于我们',
  'footer.successStories': '成功案例',
  'footer.careers': '招聘',
  'footer.clientPortal': '客户门户',
  'footer.contact': '联系',
  'footer.resourceLibrary': '资源库',
  'footer.rwaGuide': 'RWA 指南',
  'footer.insights': '洞察',
  'footer.search': '搜索',
  'footer.helpCenter': '帮助中心',
  'footer.strategySession': '战略会议',
  'footer.privacy': '隐私政策',
  'footer.terms': '使用条款',
  'footer.rights': '保留所有权利。',
  'footer.tagline': '人工智能、区块链、金融科技与现实资产代币化企业咨询',
  'footer.global': '全球企业技术咨询',
  'footer.realEstate': '房地产',
  'footer.banking': '银行',
  'footer.manufacturing': '制造',
  'footer.healthcare': '医疗健康',
  'footer.logistics': '物流',
  'footer.professionalServices': '专业服务',
  'footer.rwa': 'RWA 代币化（TaaS）',
  'footer.ai': '人工智能解决方案',
  'footer.consulting': '企业咨询',
  'footer.blockchain': '区块链顾问',
  'footer.fintech': '金融科技解决方案',

  'cta.primary': '预约战略会议',
  'cta.secondary': '探索服务',
  'cta.defaultTitle': '准备开启数字化转型的下一章？',
  'cta.defaultBody': '与 Real Block Technologies 合作，设计并交付人工智能、区块链与现实资产解决方案。',
  'sticky.title': '与顾问交流',
  'sticky.body': '预约关于人工智能、RWA、金融科技或区块链的战略会议。',
  'sticky.cta': '预约战略会议',
  'sticky.ctaShort': '预约',
  'faq.eyebrow': '企业常见问题',
  'faq.title': '常见问题',
  'faq.description': '为评估人工智能、区块链与现实资产计划的高管提供清晰解答。',
  'booking.eyebrow': '预约咨询',
  'common.subscribe': '订阅',
  'common.contactUs': '联系我们',
  'common.language': '语言',
  'common.loading': '页面加载中',

  'faq.0.q': 'Real Block Technologies 专注于什么？',
  'faq.0.a':
    '我们专注于 RWA 代币化即服务、企业人工智能解决方案、区块链顾问、金融科技现代化，以及 Workday、Dynamics 365 与 HubSpot 专业服务。',
  'faq.1.q': '适合哪些客户？',
  'faq.1.a':
    '我们与房地产、银行、制造、医疗与专业服务等领域需要务实数字化转型项目的企业与运营商合作。',
  'faq.2.q': '项目通常如何启动？',
  'faq.2.a': '大多数客户先通过战略会议明确优先级、约束与成功指标，再进入范围清晰的发现或交付阶段。',
  'faq.3.q': '只做顾问，还是也做实施？',
  'faq.3.a': '两者都做。我们提供战略与架构顾问，也提供落地实施与平台专业服务。',
  'faq.4.q': '如何定价？',
  'faq.4.a': '项目按目标、复杂度与交付模式提案定价——并非一刀切套餐。',
  'faq.5.q': '只提供战略，还是也做实施？',
  'faq.5.a':
    '两者都有。我们的项目涵盖战略顾问与架构设计，以及落地实施、集成与运营模式支持。',
}

const ar: Dict = {
  'nav.home': 'الرئيسية',
  'nav.about': 'من نحن',
  'nav.services': 'الخدمات',
  'nav.industries': 'القطاعات',
  'nav.resources': 'الموارد',
  'nav.contact': 'اتصل بنا',
  'nav.search': 'بحث',
  'nav.strategySession': 'جلسة استراتيجية',
  'nav.viewAllServices': 'عرض كل الخدمات',
  'nav.viewAllIndustries': 'عرض كل القطاعات',
  'nav.resourceLibrary': 'مكتبة الموارد',
  'nav.insights': 'رؤى',
  'nav.successStories': 'قصص النجاح',
  'nav.helpCenter': 'مركز المساعدة',
  'nav.clientPortal': 'بوابة العميل',
  'nav.exploreServices': 'استكشاف الخدمات',
  'nav.bookStrategy': 'احجز جلسة استراتيجية',
  'nav.skip': 'تخطي إلى المحتوى الرئيسي',

  'hero.brand': 'Real Block Technologies',
  'hero.headline1': 'ترميز الأصول الحقيقية.',
  'hero.headline2': 'تمكين الذكاء المؤسسي.',
  'hero.description':
    'استشارات الذكاء الاصطناعي وسلسلة الكتل والأصول الحقيقية للمؤسسات التي تحول القيمة المادية إلى ميزة رقمية.',
  'hero.ctaPrimary': 'جدولة استشارة',
  'hero.ctaSecondary': 'استكشاف الحلول',

  'home.aboutEyebrow': 'عن Real Block',
  'home.aboutTitle': 'من الأصول المادية إلى الأسواق الرقمية المحكومة.',
  'home.aboutBody':
    'نساعد المؤسسات على تحويل مبادرات الترميز والذكاء الاصطناعي وسلسلة الكتل إلى قدرات تشغيلية—بصرامة مؤسسية وهندسة واعية بالأمن.',
  'home.aboutCta': 'عن Real Block',
  'home.learnMore': 'اعرف المزيد',
  'home.pillar1Title': 'ترميز الأصول الحقيقية (TaaS)',
  'home.pillar1Text': 'ترميز العقارات والأعمال الفنية والتحف وتوزيع الإيجار والعضويات.',
  'home.pillar2Title': 'تحول الذكاء الاصطناعي',
  'home.pillar2Text': 'أتمتة العمليات ورفع جودة القرار عبر ذكاء اصطناعي مؤسسي عملي.',
  'home.pillar3Title': 'منصات المؤسسات',
  'home.pillar3Text': 'خدمات احترافية لـ Workday وMicrosoft Dynamics 365 وHubSpot.',

  'home.solutionsEyebrow': 'مشكلات الأعمال',
  'home.solutionsTitle': 'حلول مرتبطة بالمشكلات التي يواجهها القادة فعلياً',
  'home.solutionsBody':
    'التقنية تتبع النتيجة. ابدأ بالتحدي التشغيلي ثم اختر القدرات المناسبة.',
  'home.businessProblem': 'مشكلة أعمال',
  'home.outcome': 'النتيجة',
  'home.exploreApproach': 'استكشاف المنهج',
  'home.viewAllServices': 'عرض كل الخدمات',
  'home.bookStrategySession': 'احجز جلسة استراتيجية',

  'home.servicesEyebrow': 'الحلول',
  'home.servicesTitle': 'حلول مصممة لنتائج مؤسسية',
  'home.servicesBody':
    'استشارة وتنفيذ عبر ترميز TaaS والذكاء الاصطناعي وسلسلة الكتل والتقنية المالية ومنصات المؤسسات—بتسلسل يقلل المخاطر ويسرّع القيمة.',

  'home.guideEyebrow': 'مورد مؤسسي',
  'home.guideTitle': 'الدليل المؤسسي لترميز الأصول الحقيقية',
  'home.guideBody':
    'إحاطة قيادية عملية تغطي الهندسة والبنية التحتية وحالات الاستخدام وخارطة طريق التنفيذ.',
  'home.guideCta': 'حمّل الدليل المجاني',
  'home.browseResources': 'تصفح الموارد',
  'home.insightsEyebrow': 'رؤى',
  'home.insightsTitle': 'إحاطات لقادة التحول الرقمي',
  'home.insightsBody': 'وجهات نظر مختارة حول الذكاء الاصطناعي وسلسلة الكتل ورقمنة الأصول—بدون ضوضاء.',
  'home.bookingTitle': 'ابدأ بجلسة استراتيجية منظمة',
  'home.bookingBody':
    'حدد الأولويات عبر الذكاء الاصطناعي وترميز الأصول وسلسلة الكتل ومنصات المؤسسات—ثم احجز المحادثة المناسبة.',
  'home.bookingCta': 'احجز جلسة استراتيجية',
  'home.ctaTitle': 'شارك فريقاً استشارياً مبنياً لتحقيق نتائج مؤسسية.',
  'home.ctaBody':
    'تصمم Real Block Technologies وتقدم حلول الذكاء الاصطناعي وسلسلة الكتل والأصول الحقيقية بالحوكمة التي يتطلبها التنفيذيون.',

  'solution.illiquid-assets.problem': 'الأصول المادية صعبة الرقمنة والإدارة',
  'solution.illiquid-assets.outcome': 'تمثيل رقمي محكوم وتصميم تشغيلي',
  'solution.illiquid-assets.description':
    'يحتاج مالكو العقارات والمقتنيات وبرامج العضوية إلى طرق عملية لرقمنة الملكية وتوزيع الإيجار وإدارة الوصول.',
  'solution.manual-operations.problem': 'العمليات اليدوية تبطئ القرار وترفع التكلفة',
  'solution.manual-operations.outcome': 'أتمتة بعائد تشغيلي قابل للقياس',
  'solution.manual-operations.description':
    'تواجه فرق القيادة صعوبة في الانتقال من التجارب إلى ذكاء اصطناعي إنتاجي يقلل زمن الدورة ويحسّن جودة القرار.',
  'solution.platform-fragmentation.problem': 'منصات المؤسسات مجزأة وقليلة الاعتماد',
  'solution.platform-fragmentation.outcome': 'خدمات احترافية متوافقة مع المنصة واعتماد فعّال',
  'solution.platform-fragmentation.description':
    'تتوقف استثمارات Workday وDynamics 365 وHubSpot عندما ينفصل التنفيذ والتكامل وإدارة التغيير.',
  'solution.finance-visibility.problem': 'فرق المالية تفتقر إلى عمليات رقمية موحدة',
  'solution.finance-visibility.outcome': 'سير عمل وتقارير وتصميم FinTech أوضح',
  'solution.finance-visibility.description':
    'يحتاج قادة المالية والعمليات إلى الرؤية والأتمتة وأدوات FinTech حديثة دون برامج تمتد لسنوات.',
  'solution.blockchain-uncertainty.problem': 'طموح في سلسلة الكتل بلا خارطة طريق عملية',
  'solution.blockchain-uncertainty.outcome': 'هندسة وخطة تسليم ملائمة للغرض',
  'solution.blockchain-uncertainty.description':
    'تحتاج المؤسسات إلى وضوح حول أين تخلق سلسلة الكتل قيمة وكيف تُدمج وكيف يُدار المخاطر.',
  'solution.transformation-alignment.problem': 'مبادرات التقنية تفتقر إلى توافق تنفيذي',
  'solution.transformation-alignment.outcome': 'خارطة طريق متسلسلة بمخرجات واضحة',
  'solution.transformation-alignment.description':
    'يحتاج الرعاة إلى طريقة منظمة لتحديد الأولويات ووضع الحوكمة وربط الاستراتيجية بالتسليم.',

  'service.rwa.title': 'ترميز الأصول الحقيقية (TaaS)',
  'service.rwa.description':
    'الترميز كخدمة للعقارات والأعمال الفنية والتحف وتوزيع الإيجار وبرامج العضوية.',
  'service.ai.title': 'حلول الذكاء الاصطناعي',
  'service.ai.description':
    'استراتيجية الذكاء الاصطناعي المؤسسي والأتمتة والوكلاء والتحليلات وذكاء المستندات بعائد قابل للقياس.',
  'service.consulting.title': 'الاستشارات المؤسسية',
  'service.consulting.description':
    'خدمات احترافية لـ Workday وMicrosoft Dynamics 365 وHubSpot وبرامج التحول الأوسع.',
  'service.blockchain.title': 'استشارات سلسلة الكتل',
  'service.blockchain.description':
    'استراتيجية وهندسة وتوجيه تنفيذي للدفاتر المصرح بها وبنية الأصول الرقمية.',
  'service.fintech.title': 'حلول التقنية المالية',
  'service.fintech.description':
    'تحديث المدفوعات والعمليات المالية والتقارير ومسارات البنوك الرقمية.',

  'footer.stayInformed': 'ابقَ على اطلاع',
  'footer.newsletterBody':
    'إحاطات حول الذكاء الاصطناعي وسلسلة الكتل وبرامج الأصول الحقيقية لقادة المؤسسات.',
  'footer.company': 'الشركة',
  'footer.services': 'الخدمات',
  'footer.industries': 'القطاعات',
  'footer.resources': 'الموارد',
  'footer.legal': 'قانوني',
  'footer.aboutUs': 'من نحن',
  'footer.successStories': 'قصص النجاح',
  'footer.careers': 'الوظائف',
  'footer.clientPortal': 'بوابة العميل',
  'footer.contact': 'اتصل بنا',
  'footer.resourceLibrary': 'مكتبة الموارد',
  'footer.rwaGuide': 'دليل الأصول الحقيقية',
  'footer.insights': 'رؤى',
  'footer.search': 'بحث',
  'footer.helpCenter': 'مركز المساعدة',
  'footer.strategySession': 'جلسة استراتيجية',
  'footer.privacy': 'سياسة الخصوصية',
  'footer.terms': 'شروط الاستخدام',
  'footer.rights': 'جميع الحقوق محفوظة.',
  'footer.tagline': 'استشارات مؤسسية للذكاء الاصطناعي وسلسلة الكتل والتقنية المالية وترميز الأصول الحقيقية',
  'footer.global': 'استشارات تقنية مؤسسية عالمية',
  'footer.realEstate': 'العقارات',
  'footer.banking': 'الخدمات المصرفية',
  'footer.manufacturing': 'التصنيع',
  'footer.healthcare': 'الرعاية الصحية',
  'footer.logistics': 'اللوجستيات',
  'footer.professionalServices': 'الخدمات المهنية',
  'footer.rwa': 'ترميز الأصول الحقيقية (TaaS)',
  'footer.ai': 'حلول الذكاء الاصطناعي',
  'footer.consulting': 'الاستشارات المؤسسية',
  'footer.blockchain': 'استشارات سلسلة الكتل',
  'footer.fintech': 'حلول التقنية المالية',

  'cta.primary': 'احجز جلسة استراتيجية',
  'cta.secondary': 'استكشاف الخدمات',
  'cta.defaultTitle': 'هل أنت مستعد للفصل التالي من التحول الرقمي؟',
  'cta.defaultBody':
    'شارك Real Block Technologies لتصميم وتقديم حلول الذكاء الاصطناعي وسلسلة الكتل والأصول الحقيقية.',
  'sticky.title': 'تحدث مع مستشار',
  'sticky.body': 'احجز جلسة استراتيجية حول الذكاء الاصطناعي أو الأصول الحقيقية أو التقنية المالية أو سلسلة الكتل.',
  'sticky.cta': 'احجز جلسة استراتيجية',
  'sticky.ctaShort': 'احجز',
  'faq.eyebrow': 'أسئلة شائعة للمؤسسات',
  'faq.title': 'الأسئلة المتكررة',
  'faq.description':
    'إجابات واضحة للتنفيذيين الذين يقيّمون مبادرات الذكاء الاصطناعي وسلسلة الكتل والأصول الحقيقية.',
  'booking.eyebrow': 'احجز استشارة',
  'common.subscribe': 'اشترك',
  'common.contactUs': 'اتصل بنا',
  'common.language': 'اللغة',
  'common.loading': 'جاري تحميل الصفحة',

  'faq.0.q': 'فيمَ تتخصص Real Block Technologies؟',
  'faq.0.a':
    'نتخصص في ترميز الأصول الحقيقية كخدمة، وحلول الذكاء الاصطناعي المؤسسي، واستشارات سلسلة الكتل، وتحديث التقنية المالية، والخدمات الاحترافية لـ Workday وDynamics 365 وHubSpot.',
  'faq.1.q': 'لمن هذا العرض؟',
  'faq.1.a':
    'نعمل مع مؤسسات ومشغلين في العقارات والخدمات المصرفية والتصنيع والرعاية الصحية والخدمات المهنية.',
  'faq.2.q': 'كيف تبدأ المشاريع عادة؟',
  'faq.2.a':
    'يبدأ معظم العملاء بجلسة استراتيجية لتوضيح الأولويات والقيود ومقاييس النجاح ثم ينتقلون إلى اكتشاف أو تسليم محدد النطاق.',
  'faq.3.q': 'هل تقدمون الاستشارة فقط أم التنفيذ أيضاً؟',
  'faq.3.a':
    'كلاهما. نقدم الاستشارة الاستراتيجية والهندسة والتنفيذ العملي وخدمات المنصات.',
  'faq.4.q': 'كيف يُبنى التسعير؟',
  'faq.4.a':
    'تُسعَّر المشاريع عبر مقترحات حسب الأهداف والتعقيد ونموذج التسليم—وليست حزماً موحدة للجميع.',
  'faq.5.q': 'هل تقدمون الاستراتيجية فقط أم التنفيذ أيضاً؟',
  'faq.5.a':
    'كلاهما. تمتد مشاريعنا من الاستشارة الاستراتيجية وتصميم الهندسة إلى التنفيذ والتكامل ودعم نموذج التشغيل.',
}

export const TRANSLATIONS: Record<AppLocale, Dict> = { en, es, fr, zh, ar }

export function translate(locale: AppLocale, key: string): string {
  return TRANSLATIONS[locale][key] ?? TRANSLATIONS.en[key] ?? key
}
