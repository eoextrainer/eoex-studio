import './style.css'

const app = document.querySelector('#app')

const optimizedMagazineCoverModules = import.meta.glob('./assets/mag-covers-optimized/*.webp', {
  eager: true,
  import: 'default',
})

const localeMap = {
  en: 'en-GB',
  fr: 'fr-FR',
  es: 'es-ES',
  it: 'it-IT',
}

const languages = ['en', 'fr', 'es', 'it']

const languageOptions = {
  en: { flag: '🇬🇧', label: 'EN' },
  fr: { flag: '🇫🇷', label: 'FR' },
  es: { flag: '🇪🇸', label: 'ES' },
  it: { flag: '🇮🇹', label: 'IT' },
}

const eventPhotos = {
  paris: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
  mulhouse: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
  cannes: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
  marais: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80',
  rome: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=80',
  milan: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
}

const peoplePhotos = {
  designer1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  designer2: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  designer3: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  designer4: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80',
  designer5: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80',
  designer6: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  designer7: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  designer8: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  designer9: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
  designer10: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  designer11: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
  designer12: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  talent1: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  talent2: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  talent3: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  talent4: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  talent5: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  talent6: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80',
  talent7: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
  talent8: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80',
  talent9: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  talent10: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
  talent11: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
  talent12: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  press1: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  press2: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
  press3: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
  blog1: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
  blog2: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
  blog3: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  blog4: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
  blog5: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
  blog6: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
  blog7: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
  blog8: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1200&q=80',
  blog9: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
}

const copy = {
  en: {
    languageLabel: 'Language',
    nav: ['Home', 'About', 'Events', 'Designers', 'Talents', 'Partners', 'Magazine', 'Press', 'Contact', 'Blog'],
    heroEyebrow: 'EOEX Studio',
    heroTitle: 'Where talent is prepared with elegance, rigour and commercial intelligence.',
    heroIntro:
      'EOEX is a fashion talent management and modelling academy built to educate, guide and position models for durable careers while becoming a trusted adviser to brands, agencies and campaign teams.',
    heroQuote: 'To be a bridge between clients and talents.',
    heroPrimary: 'Book a private consultation',
    heroSecondary: 'Explore the 2026 calendar',
    marqueeLabel: 'Featured events',
    aboutTitle: 'About · Services',
    aboutLead:
      'We teach the realities of modelling beyond the runway: contracts, wellbeing, image strategy, set etiquette, personal branding and the business decisions that shape a long-term career.',
    aboutBody:
      'EOEX supports aspiring and seasoned models with academy training, management guidance and client preparation. We also study the commercial objectives of every client we support so that casting, styling and campaign direction remain aligned from the first briefing to the final image.',
    serviceCards: [
      {
        title: 'Academy',
        text: 'Editorial, commercial, beauty and digital modelling education with physical, mental and business preparation.',
      },
      {
        title: 'Career Management',
        text: 'Contract literacy, negotiation guidance, portfolio planning and decision support for sustainable growth.',
      },
      {
        title: 'Client Advisory',
        text: 'A curated bridge between brands and talents, shaped around campaign goals, casting precision and creative confidence.',
      },
    ],
    eventsTitle: 'Events',
    eventsIntro: 'A calendar of fashion weeks, cultural moments and client-facing activations curated for visibility and brand alignment.',
    calendarTitle: '2026 calendar overview',
    pastEvents: 'Past events media gallery opens soon.',
    designersTitle: 'Designers',
    designersIntro: 'A studio-facing directory of creative voices presented in a tighter 3x4 gallery for faster luxury browsing.',
    talentsTitle: 'Talents',
    talentsIntro: 'A curated EOEX roster shaped for runway, beauty, e-commerce, hospitality and campaign performance.',
    partnersTitle: 'Sponsors & Partners',
    partnersIntro: 'Partnership tiers designed for maisons, beauty houses, hospitality brands and cultural sponsors.',
    magazineTitle: 'Magazine',
    magazineIntro: 'A monthly EOEX publication shelf illustrated with your local DUNEX cover archive.',
    pressTitle: 'Press / Media',
    pressIntro: 'Coverage, interviews and media kit materials presented in a clean three-tile media strip.',
    contactTitle: 'Contact · Book Now',
    contactIntro: 'Reserve a consultation slot for talent intake, campaign planning or academy discovery.',
    bookingRoleLabel: 'Booking type',
    bookingRoles: ['Model talent', 'Brand / client', 'Designer', 'Press / media'],
    bookingName: 'Full name',
    bookingEmail: 'Email address',
    bookingNotes: 'What would you like to discuss?',
    bookingButton: 'Confirm booking request',
    bookingSuccess: 'Consultation request staged. EOEX will confirm by email.',
    blogTitle: 'Blog / News',
    blogIntro: 'SEO-driven editorial designed to educate talent and reassure commercial partners.',
    blogSearchLabel: 'Search articles',
    blogSearchPlaceholder: 'Search by topic, keyword, or angle',
    blogAllTags: 'All tags',
    blogClearFilters: 'Clear',
    blogNoResults: 'No articles match this search yet. Try another keyword or tag.',
    readArticle: 'Read story',
    showMore: 'Show full gallery',
    showLess: 'Show less',
    galleryItems: 'items',
    issueLabel: 'Issue',
    close: 'Close',
    footer: 'EOEX Studio · Fashion talent management, academy and client advisory.',
  },
  fr: {
    languageLabel: 'Langue',
    nav: ['Accueil', 'À propos', 'Événements', 'Designers', 'Talents', 'Partenaires', 'Magazine', 'Presse', 'Contact', 'Blog'],
    heroEyebrow: 'EOEX Studio',
    heroTitle: 'Là où le talent se prépare avec élégance, rigueur et intelligence commerciale.',
    heroIntro:
      'EOEX est une académie et structure de management de talents mode pensée pour former, orienter et positionner les mannequins sur des carrières durables tout en conseillant les marques et équipes de campagne.',
    heroQuote: 'Être un pont entre les clients et les talents.',
    heroPrimary: 'Réserver une consultation privée',
    heroSecondary: 'Explorer le calendrier 2026',
    marqueeLabel: 'Événements en lumière',
    aboutTitle: 'À propos · Services',
    aboutLead:
      'Nous enseignons les réalités du mannequinat au-delà du podium : contrats, bien-être, stratégie d’image, comportement sur plateau, personal branding et décisions d’affaires.',
    aboutBody:
      'EOEX accompagne les profils émergents et confirmés grâce à la formation, au management de carrière et à la préparation client. Nous étudions aussi les objectifs commerciaux de chaque client afin d’aligner casting, stylisme et direction de campagne dès le premier brief.',
    serviceCards: [
      {
        title: 'Académie',
        text: 'Formation éditoriale, commerciale, beauté et digitale avec préparation physique, mentale et business.',
      },
      {
        title: 'Management de carrière',
        text: 'Lecture des contrats, accompagnement à la négociation, planification du book et arbitrages de carrière.',
      },
      {
        title: 'Conseil client',
        text: 'Un lien exigeant entre marques et talents, structuré autour des objectifs de campagne et de la justesse du casting.',
      },
    ],
    eventsTitle: 'Événements',
    eventsIntro: 'Un calendrier de fashion weeks, temps culturels et activations pensées pour la visibilité et l’alignement des marques.',
    calendarTitle: 'Vue d’ensemble 2026',
    pastEvents: 'La galerie des événements passés arrive bientôt.',
    designersTitle: 'Designers',
    designersIntro: 'Un répertoire studio présenté dans une galerie 3x4 plus fine et plus élégante.',
    talentsTitle: 'Talents',
    talentsIntro: 'Un roster EOEX pensé pour le runway, la beauté, l’e-commerce, l’hospitality et les campagnes.',
    partnersTitle: 'Sponsors & Partenaires',
    partnersIntro: 'Des niveaux de partenariat pensés pour maisons, beauté, hôtellerie et sponsors culturels.',
    magazineTitle: 'Magazine',
    magazineIntro: 'Une étagère éditoriale EOEX illustrée par votre archive locale de couvertures DUNEX.',
    pressTitle: 'Presse / Média',
    pressIntro: 'Couverture, interviews et kit média réunis dans une bande de trois cartes premium.',
    contactTitle: 'Contact · Réserver',
    contactIntro: 'Réservez un créneau pour un entretien talent, une planification de campagne ou une découverte de l’académie.',
    bookingRoleLabel: 'Type de réservation',
    bookingRoles: ['Talent mannequin', 'Marque / client', 'Designer', 'Presse / média'],
    bookingName: 'Nom complet',
    bookingEmail: 'Adresse email',
    bookingNotes: 'Quel sujet souhaitez-vous aborder ?',
    bookingButton: 'Confirmer la demande',
    bookingSuccess: 'Demande enregistrée. EOEX confirmera par email.',
    blogTitle: 'Blog / Actualités',
    blogIntro: 'Un éditorial SEO pensé pour former les talents et rassurer les partenaires commerciaux.',
    blogSearchLabel: 'Rechercher des articles',
    blogSearchPlaceholder: 'Rechercher par sujet, mot-clé ou angle',
    blogAllTags: 'Tous les tags',
    blogClearFilters: 'Effacer',
    blogNoResults: 'Aucun article ne correspond à cette recherche. Essayez un autre mot-clé ou tag.',
    readArticle: 'Lire l’article',
    showMore: 'Voir la galerie complète',
    showLess: 'Réduire',
    galleryItems: 'éléments',
    issueLabel: 'Numéro',
    close: 'Fermer',
    footer: 'EOEX Studio · Management de talents mode, académie et conseil client.',
  },
  es: {
    languageLabel: 'Idioma',
    nav: ['Inicio', 'Nosotros', 'Eventos', 'Diseñadores', 'Talentos', 'Partners', 'Magazine', 'Prensa', 'Contacto', 'Blog'],
    heroEyebrow: 'EOEX Studio',
    heroTitle: 'Donde el talento se prepara con elegancia, rigor e inteligencia comercial.',
    heroIntro:
      'EOEX es una academia y estructura de management de talento de moda creada para educar, orientar y posicionar modelos en carreras duraderas mientras asesora a marcas, agencias y equipos de campaña.',
    heroQuote: 'Ser un puente entre clientes y talentos.',
    heroPrimary: 'Reservar una consulta privada',
    heroSecondary: 'Explorar el calendario 2026',
    marqueeLabel: 'Eventos destacados',
    aboutTitle: 'Acerca · Servicios',
    aboutLead:
      'Enseñamos la realidad del modelaje más allá de la pasarela: contratos, bienestar, estrategia de imagen, etiqueta en set, marca personal y decisiones de negocio.',
    aboutBody:
      'EOEX acompaña a modelos emergentes y consolidados con formación, guía de carrera y preparación para clientes. También estudiamos los objetivos comerciales de cada cliente para alinear casting, estilismo y dirección creativa desde el briefing inicial.',
    serviceCards: [
      {
        title: 'Academia',
        text: 'Educación editorial, comercial, beauty y digital con preparación física, mental y empresarial.',
      },
      {
        title: 'Gestión de carrera',
        text: 'Lectura de contratos, apoyo en negociación, planificación del book y decisiones para un crecimiento sostenible.',
      },
      {
        title: 'Asesoría a clientes',
        text: 'Un puente curado entre marcas y talentos, guiado por objetivos de campaña, casting preciso y dirección creativa.',
      },
    ],
    eventsTitle: 'Eventos',
    eventsIntro: 'Un calendario de fashion weeks, momentos culturales y activaciones pensadas para visibilidad y alineación comercial.',
    calendarTitle: 'Resumen del calendario 2026',
    pastEvents: 'La galería de eventos anteriores llegará pronto.',
    designersTitle: 'Diseñadores',
    designersIntro: 'Un directorio creativo presentado en una galería 3x4 más pequeña y elegante.',
    talentsTitle: 'Talentos',
    talentsIntro: 'Un roster EOEX curado para runway, beauty, e-commerce, hospitality y campañas comerciales.',
    partnersTitle: 'Sponsors & Partners',
    partnersIntro: 'Niveles de colaboración pensados para maisons, belleza, hospitality y patrocinadores culturales.',
    magazineTitle: 'Magazine',
    magazineIntro: 'Un archivo editorial EOEX ilustrado con vuestra colección local de portadas DUNEX.',
    pressTitle: 'Prensa / Media',
    pressIntro: 'Cobertura, entrevistas y materiales de prensa reunidos en una franja limpia de tres tarjetas.',
    contactTitle: 'Contacto · Reservar',
    contactIntro: 'Reserva una cita para admisión de talento, planificación de campaña o descubrimiento de la academia.',
    bookingRoleLabel: 'Tipo de reserva',
    bookingRoles: ['Talento modelo', 'Marca / cliente', 'Diseñador', 'Prensa / media'],
    bookingName: 'Nombre completo',
    bookingEmail: 'Correo electrónico',
    bookingNotes: '¿Qué te gustaría tratar?',
    bookingButton: 'Confirmar solicitud',
    bookingSuccess: 'Solicitud registrada. EOEX confirmará por correo.',
    blogTitle: 'Blog / Noticias',
    blogIntro: 'Editorial SEO creado para educar talento y dar confianza a socios comerciales.',
    blogSearchLabel: 'Buscar artículos',
    blogSearchPlaceholder: 'Buscar por tema, palabra clave o enfoque',
    blogAllTags: 'Todas las etiquetas',
    blogClearFilters: 'Limpiar',
    blogNoResults: 'Ningún artículo coincide con esta búsqueda. Prueba con otra palabra clave o etiqueta.',
    readArticle: 'Leer artículo',
    showMore: 'Ver galería completa',
    showLess: 'Mostrar menos',
    galleryItems: 'elementos',
    issueLabel: 'Edición',
    close: 'Cerrar',
    footer: 'EOEX Studio · Management de talento de moda, academia y asesoría a clientes.',
  },
  it: {
    languageLabel: 'Lingua',
    nav: ['Home', 'Chi siamo', 'Eventi', 'Designer', 'Talenti', 'Partner', 'Magazine', 'Press', 'Contatti', 'Blog'],
    heroEyebrow: 'EOEX Studio',
    heroTitle: 'Dove il talento si prepara con eleganza, rigore e intelligenza commerciale.',
    heroIntro:
      'EOEX è una academy e struttura di talent management moda nata per formare, guidare e posizionare i modelli in carriere solide, diventando al tempo stesso consulente fidato per brand, agenzie e team di campagna.',
    heroQuote: 'Essere un ponte tra clienti e talenti.',
    heroPrimary: 'Prenota una consulenza privata',
    heroSecondary: 'Esplora il calendario 2026',
    marqueeLabel: 'Eventi in evidenza',
    aboutTitle: 'Chi siamo · Servizi',
    aboutLead:
      'Insegniamo la realtà del modelling oltre la passerella: contratti, benessere, strategia d’immagine, etichetta sul set, personal branding e scelte di business.',
    aboutBody:
      'EOEX affianca talenti emergenti e affermati con academy training, career management e preparazione cliente. Studiamo anche gli obiettivi commerciali di ogni brand per allineare casting, styling e direzione creativa dal primo brief all’immagine finale.',
    serviceCards: [
      {
        title: 'Academy',
        text: 'Formazione editoriale, commerciale, beauty e digitale con preparazione fisica, mentale e professionale.',
      },
      {
        title: 'Career management',
        text: 'Lettura dei contratti, supporto alla negoziazione, pianificazione del book e scelte per una crescita duratura.',
      },
      {
        title: 'Client advisory',
        text: 'Un ponte selettivo tra brand e talenti, costruito su obiettivi di campagna, precisione nel casting e fiducia creativa.',
      },
    ],
    eventsTitle: 'Eventi',
    eventsIntro: 'Un calendario di fashion week, appuntamenti culturali e attivazioni pensate per visibilità e allineamento commerciale.',
    calendarTitle: 'Panoramica calendario 2026',
    pastEvents: 'La gallery degli eventi passati arriverà presto.',
    designersTitle: 'Designer',
    designersIntro: 'Una directory creativa presentata in una galleria 3x4 più compatta ed elegante.',
    talentsTitle: 'Talenti',
    talentsIntro: 'Un roster EOEX curato per runway, beauty, e-commerce, hospitality e campagne commerciali.',
    partnersTitle: 'Sponsor & Partner',
    partnersIntro: 'Livelli di partnership pensati per maison, beauty, hospitality e sponsor culturali.',
    magazineTitle: 'Magazine',
    magazineIntro: 'Un archivio editoriale EOEX illustrato con la vostra selezione locale di cover DUNEX.',
    pressTitle: 'Press / Media',
    pressIntro: 'Coverage, interviste e materiali press raccolti in una fascia pulita di tre card.',
    contactTitle: 'Contatti · Prenota',
    contactIntro: 'Prenota uno slot per talent intake, pianificazione campagna o scoperta dell’academy.',
    bookingRoleLabel: 'Tipo di prenotazione',
    bookingRoles: ['Talento modella/o', 'Brand / cliente', 'Designer', 'Press / media'],
    bookingName: 'Nome completo',
    bookingEmail: 'Indirizzo email',
    bookingNotes: 'Di cosa vorresti parlare?',
    bookingButton: 'Conferma richiesta',
    bookingSuccess: 'Richiesta registrata. EOEX confermerà via email.',
    blogTitle: 'Blog / News',
    blogIntro: 'Contenuti SEO pensati per educare i talenti e rassicurare i partner commerciali.',
    blogSearchLabel: 'Cerca articoli',
    blogSearchPlaceholder: 'Cerca per tema, parola chiave o angolo editoriale',
    blogAllTags: 'Tutti i tag',
    blogClearFilters: 'Pulisci',
    blogNoResults: 'Nessun articolo corrisponde a questa ricerca. Prova con un’altra parola chiave o tag.',
    readArticle: 'Leggi articolo',
    showMore: 'Mostra galleria completa',
    showLess: 'Mostra meno',
    galleryItems: 'elementi',
    issueLabel: 'Numero',
    close: 'Chiudi',
    footer: 'EOEX Studio · Talent management moda, academy e consulenza clienti.',
  },
}

const events = [
  {
    key: 'pfw',
    city: { en: 'Paris', fr: 'Paris', es: 'París', it: 'Parigi' },
    title: { en: 'PFW Jan 2026', fr: 'PFW Jan 2026', es: 'PFW Ene 2026', it: 'PFW Gen 2026' },
    location: {
      en: 'Paris Fashion Week',
      fr: 'Paris Fashion Week',
      es: 'Paris Fashion Week',
      it: 'Paris Fashion Week',
    },
    summary: {
      en: 'Editorial casting week anchored around couture discipline, high-visibility appointments and image strategy for luxury houses.',
      fr: 'Semaine de castings éditoriaux centrée sur la discipline couture, la visibilité et la stratégie d’image pour les maisons de luxe.',
      es: 'Semana de castings editoriales centrada en disciplina couture, visibilidad y estrategia de imagen para maisons de lujo.',
      it: 'Settimana di casting editoriali focalizzata su disciplina couture, visibilità e strategia d’immagine per maison di lusso.',
    },
    photo: eventPhotos.paris,
    month: 0,
    dayLabel: '18–26',
  },
  {
    key: 'mfw-april',
    city: { en: 'Mulhouse', fr: 'Mulhouse', es: 'Mulhouse', it: 'Mulhouse' },
    title: { en: 'MFW Apr 2026', fr: 'MFW Avr 2026', es: 'MFW Abr 2026', it: 'MFW Apr 2026' },
    location: {
      en: 'Mulhouse Fashion Week',
      fr: 'Mulhouse Fashion Week',
      es: 'Mulhouse Fashion Week',
      it: 'Mulhouse Fashion Week',
    },
    summary: {
      en: 'A regional fashion forum built for emerging labels, showroom introductions and commercial image production.',
      fr: 'Un forum mode régional pensé pour les jeunes labels, les présentations showroom et la production d’images commerciales.',
      es: 'Un foro de moda regional pensado para marcas emergentes, presentaciones de showroom y producción de imagen comercial.',
      it: 'Un forum moda regionale pensato per label emergenti, introduzioni showroom e produzione di immagini commerciali.',
    },
    photo: eventPhotos.mulhouse,
    month: 3,
    dayLabel: '11–13',
  },
  {
    key: 'cannes',
    city: { en: 'Cannes', fr: 'Cannes', es: 'Cannes', it: 'Cannes' },
    title: { en: 'Cannes May 2026', fr: 'Cannes Mai 2026', es: 'Cannes May 2026', it: 'Cannes Mag 2026' },
    location: {
      en: 'Cannes Music Festival',
      fr: 'Festival de Musique de Cannes',
      es: 'Festival de Música de Cannes',
      it: 'Festival Musicale di Cannes',
    },
    summary: {
      en: 'A Riviera-facing activation mixing live performance, celebrity dressing and luxury hospitality partnerships.',
      fr: 'Une activation tournée vers la Riviera mêlant performance live, habillage célébrité et partenariats hôteliers haut de gamme.',
      es: 'Una activación con mirada a la Riviera que mezcla performance en vivo, vestuario celebrity y alianzas hospitality de lujo.',
      it: 'Un’attivazione affacciata sulla Riviera che unisce live performance, celebrity dressing e hospitality di lusso.',
    },
    photo: eventPhotos.cannes,
    month: 4,
    dayLabel: '20–23',
  },
  {
    key: 'emmaus',
    city: { en: 'Paris', fr: 'Paris', es: 'París', it: 'Parigi' },
    title: { en: 'Emmaus June 2026', fr: 'Emmaüs Juin 2026', es: 'Emmaus Jun 2026', it: 'Emmaus Giu 2026' },
    location: {
      en: '10 Year Label Emmaus Anniversary',
      fr: '10 ans Label Emmaüs',
      es: '10 años Label Emmaus',
      it: '10 anni Label Emmaus',
    },
    summary: {
      en: 'A Marais district cultural anniversary with values-led storytelling, circular fashion dialogue and community casting.',
      fr: 'Un anniversaire culturel dans le Marais autour du récit engagé, de la mode circulaire et d’un casting communautaire.',
      es: 'Un aniversario cultural en Le Marais centrado en storytelling con valores, moda circular y casting comunitario.',
      it: 'Un anniversario culturale nel Marais dedicato a storytelling valoriale, moda circolare e casting di comunità.',
    },
    photo: eventPhotos.marais,
    month: 5,
    dayLabel: '14',
  },
  {
    key: 'rome',
    city: { en: 'Rome', fr: 'Rome', es: 'Roma', it: 'Roma' },
    title: { en: 'Rome July 2026', fr: 'Rome Juil 2026', es: 'Roma Jul 2026', it: 'Roma Lug 2026' },
    location: {
      en: 'Rome Fashion Week · Palazzo Brancaccio',
      fr: 'Rome Fashion Week · Palazzo Brancaccio',
      es: 'Rome Fashion Week · Palazzo Brancaccio',
      it: 'Rome Fashion Week · Palazzo Brancaccio',
    },
    summary: {
      en: 'A palazzo setting dedicated to luxury presentation, couture rehearsal and brand hospitality with executive polish.',
      fr: 'Un cadre palatial dédié à la présentation luxe, aux répétitions couture et à l’hospitalité de marque.',
      es: 'Un entorno palaciego dedicado a presentación de lujo, ensayo couture y hospitalidad de marca.',
      it: 'Un contesto di palazzo dedicato a presentazione luxury, prove couture e hospitality di brand.',
    },
    photo: eventPhotos.rome,
    month: 6,
    dayLabel: '09–12',
  },
  {
    key: 'milan',
    city: { en: 'Milan', fr: 'Milan', es: 'Milán', it: 'Milano' },
    title: {
      en: 'Milan September 2026',
      fr: 'Milan Sept 2026',
      es: 'Milán Sept 2026',
      it: 'Milano Sett 2026',
    },
    location: {
      en: 'Milan Fashion Week',
      fr: 'Milan Fashion Week',
      es: 'Milan Fashion Week',
      it: 'Milan Fashion Week',
    },
    summary: {
      en: 'The season’s commercial crescendo, focused on showroom appointments, campaign meetings and international visibility.',
      fr: 'Le crescendo commercial de la saison, orienté showroom, rendez-vous campagne et visibilité internationale.',
      es: 'El gran crescendo comercial de la temporada, enfocado en showroom appointments, reuniones de campaña y visibilidad internacional.',
      it: 'Il crescendo commerciale della stagione, centrato su showroom appointment, meeting campagna e visibilità internazionale.',
    },
    photo: eventPhotos.milan,
    month: 8,
    dayLabel: '22–28',
  },
]

const designers = [
  {
    name: 'Olivier Saint-Clair',
    specialty: {
      en: 'Avant-garde tailoring for campaign theatre and sharp editorial movement.',
      fr: 'Tailoring avant-gardiste pour un théâtre de campagne et un mouvement éditorial net.',
      es: 'Sastrería avant-garde para teatralidad de campaña y movimiento editorial preciso.',
      it: 'Tailoring avant-garde per teatralità di campagna e movimento editoriale netto.',
    },
    photo: peoplePhotos.designer1,
  },
  {
    name: 'Camille Verenne',
    specialty: {
      en: 'Minimal chic built around fluid drape, quiet luxury and architectural line.',
      fr: 'Un chic minimal autour du drapé fluide, du quiet luxury et de la ligne architecturée.',
      es: 'Minimal chic construido sobre caída fluida, quiet luxury y línea arquitectónica.',
      it: 'Minimal chic costruito su drappeggio fluido, quiet luxury e linea architettonica.',
    },
    photo: peoplePhotos.designer2,
  },
  {
    name: 'Luca Morel',
    specialty: {
      en: 'Haute couture finishing with cinematic silhouettes for red carpet and luxury editorial.',
      fr: 'Une finition haute couture et des silhouettes cinématographiques pour tapis rouge et éditorial luxe.',
      es: 'Acabado haute couture y siluetas cinematográficas para red carpet y editorial de lujo.',
      it: 'Finiture haute couture e silhouette cinematografiche per red carpet ed editoriale luxury.',
    },
    photo: peoplePhotos.designer3,
  },
  {
    name: 'Amina Laurent',
    specialty: {
      en: 'Luxury resort capsules designed around fluid motion and destination glamour.',
      fr: 'Capsules resort luxe pensées autour du mouvement fluide et d’un glamour destination.',
      es: 'Cápsulas resort de lujo pensadas alrededor del movimiento fluido y el glamour de destino.',
      it: 'Capsule resort di lusso pensate attorno a movimento fluido e glamour destination.',
    },
    photo: peoplePhotos.designer4,
  },
  {
    name: 'Mateo Varela',
    specialty: {
      en: 'Commercial eveningwear with precision tailoring for gala and red-carpet clients.',
      fr: 'Eveningwear commercial au tailoring précis pour galas et clients tapis rouge.',
      es: 'Eveningwear comercial con sastrería precisa para galas y clientes de alfombra roja.',
      it: 'Eveningwear commerciale con tailoring preciso per gala e clienti red carpet.',
    },
    photo: peoplePhotos.designer5,
  },
  {
    name: 'Noemie Caron',
    specialty: {
      en: 'Beauty-led collections where clean skin, profile control and close-up confidence matter.',
      fr: 'Collections orientées beauté où peau nette, profil maîtrisé et confiance en close-up comptent.',
      es: 'Colecciones enfocadas en beauty donde importan piel limpia, control de perfil y confianza en close-up.',
      it: 'Collezioni beauty-led dove contano pelle pulita, controllo del profilo e sicurezza in close-up.',
    },
    photo: peoplePhotos.designer6,
  },
  {
    name: 'Hugo Bellamy',
    specialty: {
      en: 'Sharp menswear-inspired structure translated into womenswear editorial statements.',
      fr: 'Structure inspirée du menswear traduite en déclarations éditoriales féminines.',
      es: 'Estructura inspirada en menswear traducida a declaraciones editoriales femeninas.',
      it: 'Struttura ispirata al menswear tradotta in statement editoriali femminili.',
    },
    photo: peoplePhotos.designer7,
  },
  {
    name: 'Elena Rosi',
    specialty: {
      en: 'Italian occasionwear built for movement, poise and premium event visibility.',
      fr: 'Occasionwear italien construit pour le mouvement, l’allure et la visibilité premium.',
      es: 'Occasionwear italiano creado para movimiento, aplomo y visibilidad premium.',
      it: 'Occasionwear italiano costruito per movimento, portamento e visibilità premium.',
    },
    photo: peoplePhotos.designer8,
  },
  {
    name: 'Julien Sorel',
    specialty: {
      en: 'Minimalist tailoring with disciplined silhouettes for campaign clarity and retail elegance.',
      fr: 'Tailoring minimaliste et silhouettes disciplinées pour clarté de campagne et élégance retail.',
      es: 'Sastrería minimalista y siluetas disciplinadas para claridad de campaña y elegancia retail.',
      it: 'Tailoring minimalista e silhouette disciplinate per chiarezza di campagna ed eleganza retail.',
    },
    photo: peoplePhotos.designer9,
  },
  {
    name: 'Celia Moreau',
    specialty: {
      en: 'Editorial knitwear and textural layering developed for luxury storytelling.',
      fr: 'Maille éditoriale et superpositions texturées développées pour le storytelling luxe.',
      es: 'Punto editorial y capas texturadas desarrolladas para storytelling de lujo.',
      it: 'Maglieria editoriale e layering materico sviluppati per storytelling luxury.',
    },
    photo: peoplePhotos.designer10,
  },
  {
    name: 'Rafael Duran',
    specialty: {
      en: 'Bold commercial colour and silhouette play for digital launches and event capsules.',
      fr: 'Couleur commerciale affirmée et jeu de silhouettes pour lancements digitaux et capsules événementielles.',
      es: 'Color comercial audaz y juego de siluetas para lanzamientos digitales y cápsulas de evento.',
      it: 'Colore commerciale deciso e gioco di silhouette per lanci digitali e capsule evento.',
    },
    photo: peoplePhotos.designer11,
  },
  {
    name: 'Sabine Valette',
    specialty: {
      en: 'Quietly opulent tailoring supporting luxury image systems across editorial and client wardrobes.',
      fr: 'Tailoring discrètement opulent soutenant les systèmes d’image luxe entre éditorial et vestiaire client.',
      es: 'Sastrería discretamente opulenta que sostiene sistemas de imagen de lujo entre editorial y cliente.',
      it: 'Tailoring discretamente opulento che sostiene sistemi d’immagine luxury tra editoriale e cliente.',
    },
    photo: peoplePhotos.designer12,
  },
]

const talents = [
  {
    name: 'Lea Morrow',
    profile: {
      en: 'Editorial runway presence with controlled movement and strong couture posture.',
      fr: 'Présence éditoriale runway avec mouvement maîtrisé et posture couture affirmée.',
      es: 'Presencia editorial de runway con movimiento controlado y fuerte postura couture.',
      it: 'Presenza editoriale runway con movimento controllato e forte postura couture.',
    },
    photo: peoplePhotos.talent1,
  },
  {
    name: 'Adrian Vale',
    profile: {
      en: 'Commercial and beauty talent suited for premium skincare and fragrance campaigns.',
      fr: 'Talent commercial et beauté adapté aux campagnes skincare et parfum premium.',
      es: 'Talento comercial y beauty apto para campañas premium de skincare y fragancia.',
      it: 'Talento commerciale e beauty adatto a campagne premium skincare e fragranze.',
    },
    photo: peoplePhotos.talent2,
  },
  {
    name: 'Mina Soler',
    profile: {
      en: 'Client-friendly talent for e-commerce, showroom work and polished brand content.',
      fr: 'Profil client-friendly pour e-commerce, showroom et contenus de marque soignés.',
      es: 'Talento cercano al cliente para e-commerce, showroom y branded content pulido.',
      it: 'Profilo client-friendly per e-commerce, showroom e branded content curato.',
    },
    photo: peoplePhotos.talent3,
  },
  {
    name: 'Chiara Dune',
    profile: {
      en: 'Luxury event specialist with poised red-carpet energy and refined camera awareness.',
      fr: 'Spécialiste événement luxe avec énergie tapis rouge et conscience caméra raffinée.',
      es: 'Especialista en eventos de lujo con energía de alfombra roja y refinada conciencia de cámara.',
      it: 'Specialista eventi luxury con energia red carpet e raffinata consapevolezza camera.',
    },
    photo: peoplePhotos.talent4,
  },
  {
    name: 'Samuel Crest',
    profile: {
      en: 'Precision menswear profile with discipline for fittings, tailoring and luxury retail shoots.',
      fr: 'Profil menswear précis, discipliné pour fittings, tailoring et shootings retail luxe.',
      es: 'Perfil menswear preciso con disciplina para fittings, tailoring y shoots retail de lujo.',
      it: 'Profilo menswear preciso con disciplina per fitting, tailoring e shooting retail luxury.',
    },
    photo: peoplePhotos.talent5,
  },
  {
    name: 'Nora Elian',
    profile: {
      en: 'Beauty close-up specialist delivering softness, precision and premium skincare expression.',
      fr: 'Spécialiste close-up beauté offrant douceur, précision et expression skincare premium.',
      es: 'Especialista beauty close-up con suavidad, precisión y expresión premium skincare.',
      it: 'Specialista beauty close-up che offre morbidezza, precisione ed espressione premium skincare.',
    },
    photo: peoplePhotos.talent6,
  },
  {
    name: 'Yasmin Cole',
    profile: {
      en: 'Destination and resort campaign talent with calm authority and fluid movement.',
      fr: 'Talent de campagne destination et resort avec autorité calme et mouvement fluide.',
      es: 'Talento para campañas destination y resort con autoridad serena y movimiento fluido.',
      it: 'Talento per campagne destination e resort con autorevolezza calma e movimento fluido.',
    },
    photo: peoplePhotos.talent7,
  },
  {
    name: 'Theo Armand',
    profile: {
      en: 'Runway-to-editorial versatility with polished walk discipline and confident stillness.',
      fr: 'Polyvalence runway-editorial avec discipline de marche et immobilité assurée.',
      es: 'Versatilidad runway-editorial con disciplina de pasarela e inmovilidad segura.',
      it: 'Versatilità runway-editorial con disciplina di camminata e immobilità sicura.',
    },
    photo: peoplePhotos.talent8,
  },
  {
    name: 'Amara Saint',
    profile: {
      en: 'Luxury portrait and jewellery profile suited to high-touch client direction.',
      fr: 'Profil portrait luxe et joaillerie adapté aux directions client haute précision.',
      es: 'Perfil de retrato de lujo y joyería apto para dirección de cliente high-touch.',
      it: 'Profilo ritratto luxury e jewellery adatto a direzioni cliente high-touch.',
    },
    photo: peoplePhotos.talent9,
  },
  {
    name: 'Luca Mirel',
    profile: {
      en: 'Athletic editorial presence ideal for movement-led campaigns and premium sport-fashion.',
      fr: 'Présence éditoriale athlétique idéale pour campagnes mouvement et sport-fashion premium.',
      es: 'Presencia editorial atlética ideal para campañas de movimiento y sport-fashion premium.',
      it: 'Presenza editoriale atletica ideale per campagne movimento e sport-fashion premium.',
    },
    photo: peoplePhotos.talent10,
  },
  {
    name: 'Selene Hart',
    profile: {
      en: 'Elegant commercial talent with strong smile work and luxury hospitality ease.',
      fr: 'Talent commercial élégant avec beau sourire et aisance hospitality luxe.',
      es: 'Talento comercial elegante con fuerte trabajo de sonrisa y soltura hospitality de lujo.',
      it: 'Talento commerciale elegante con forte sorriso e naturalezza hospitality luxury.',
    },
    photo: peoplePhotos.talent11,
  },
  {
    name: 'Julian Crest',
    profile: {
      en: 'Refined profile for tailoring, watches, private client presentations and premium retail.',
      fr: 'Profil raffiné pour tailoring, horlogerie, présentations privées et retail premium.',
      es: 'Perfil refinado para tailoring, relojería, presentaciones privadas y retail premium.',
      it: 'Profilo raffinato per tailoring, orologeria, presentazioni private e retail premium.',
    },
    photo: peoplePhotos.talent12,
  },
]

const partners = [
  {
    mark: 'MA',
    name: 'Maison Aureline',
    tier: 'Tier I',
    description: {
      en: 'Luxury fashion house backing flagship runway and editorial partnerships.',
      fr: 'Maison de luxe soutenant les partenariats runway et éditoriaux premium.',
      es: 'Maison de lujo que impulsa alianzas premium de runway y editorial.',
      it: 'Maison di lusso che sostiene partnership premium runway ed editoriali.',
    },
  },
  {
    mark: 'VL',
    name: 'Velour Labs',
    tier: 'Tier II',
    description: {
      en: 'Beauty and skincare collaborator focused on backstage care and camera-ready complexion.',
      fr: 'Partenaire beauté et skincare dédié au soin backstage et au teint caméra-ready.',
      es: 'Colaborador beauty y skincare enfocado en cuidado backstage y complexion camera-ready.',
      it: 'Partner beauty e skincare focalizzato su backstage care e incarnato camera-ready.',
    },
  },
  {
    mark: 'CH',
    name: 'Crest House',
    tier: 'Tier III',
    description: {
      en: 'Hospitality partner supporting private fittings, client dinners and executive hosting.',
      fr: 'Partenaire hospitality pour fittings privés, dîners clients et accueil exécutif.',
      es: 'Partner hospitality para fittings privados, cenas con clientes y hosting ejecutivo.',
      it: 'Partner hospitality per fitting privati, cene clienti e hosting executive.',
    },
  },
  {
    mark: 'NO',
    name: 'Noblesse Optics',
    tier: 'Tier II',
    description: {
      en: 'Eyewear and optics partner for premium accessories styling and campaign detail shots.',
      fr: 'Partenaire eyewear pour le stylisme accessoires premium et les détails de campagne.',
      es: 'Partner eyewear para estilismo de accesorios premium y detalles de campaña.',
      it: 'Partner eyewear per styling accessori premium e dettagli di campagna.',
    },
  },
  {
    mark: 'AL',
    name: 'Atelier Luma',
    tier: 'Tier I',
    description: {
      en: 'Creative production studio supporting set design, fittings and editorial staging.',
      fr: 'Studio de production créative soutenant scénographie, fittings et mise en scène éditoriale.',
      es: 'Estudio de producción creativa para escenografía, fittings y puesta en escena editorial.',
      it: 'Studio di produzione creativa per set design, fitting e staging editoriale.',
    },
  },
  {
    mark: 'OR',
    name: 'Orée Residence',
    tier: 'Tier III',
    description: {
      en: 'Boutique residence partner for visiting talent, discreet hosting and executive stays.',
      fr: 'Résidence partenaire pour talents invités, accueil discret et séjours exécutifs.',
      es: 'Residencia partner para talento invitado, hosting discreto y estancias ejecutivas.',
      it: 'Residenza partner per talenti ospiti, hosting discreto e soggiorni executive.',
    },
  },
  {
    mark: 'SE',
    name: 'Serein Beauty',
    tier: 'Tier II',
    description: {
      en: 'Beauty partner focused on prep rituals, backstage finishing and complexion maintenance.',
      fr: 'Partenaire beauté axé sur les rituels de préparation, la finition backstage et l’éclat du teint.',
      es: 'Partner beauty centrado en rituales de preparación, acabados backstage y mantenimiento del cutis.',
      it: 'Partner beauty focalizzato su rituali di preparazione, finishing backstage e incarnato.',
    },
  },
  {
    mark: 'VA',
    name: 'Valmont Audio',
    tier: 'Tier III',
    description: {
      en: 'Sound and live ambience collaborator for event atmospheres and cultural activations.',
      fr: 'Partenaire son et ambiance live pour les atmosphères événementielles et activations culturelles.',
      es: 'Colaborador de sonido y ambiente live para atmósferas de eventos y activaciones culturales.',
      it: 'Collaboratore sound e live ambience per atmosfere evento e attivazioni culturali.',
    },
  },
  {
    mark: 'MR',
    name: 'Maison Rive',
    tier: 'Tier I',
    description: {
      en: 'Luxury interiors and hosting house backing client receptions and private appointments.',
      fr: 'Maison d’intérieurs et d’accueil luxe soutenant réceptions clients et rendez-vous privés.',
      es: 'Casa de interiores y hosting de lujo para recepciones de clientes y citas privadas.',
      it: 'Casa di interni e hosting di lusso per ricezioni clienti e appuntamenti privati.',
    },
  },
  {
    mark: 'EP',
    name: 'Épure Print',
    tier: 'Tier II',
    description: {
      en: 'Editorial print partner producing lookbooks, campaign leave-behinds and media kits.',
      fr: 'Partenaire print éditorial produisant lookbooks, supports de campagne et media kits.',
      es: 'Partner print editorial para lookbooks, soportes de campaña y media kits.',
      it: 'Partner print editoriale per lookbook, materiali campagna e media kit.',
    },
  },
]

const pressItems = [
  {
    title: {
      en: 'Editorial press lounge',
      fr: 'Salon presse éditorial',
      es: 'Lounge editorial de prensa',
      it: 'Lounge editoriale stampa',
    },
    summary: {
      en: 'Feature interviews, market commentary and academy insight presented for international editors.',
      fr: 'Interviews, analyses marché et éclairages académie pensés pour les rédactions internationales.',
      es: 'Entrevistas, análisis de mercado e insight academy presentados para editores internacionales.',
      it: 'Interviste, market commentary e insight academy presentati per editori internazionali.',
    },
    photo: peoplePhotos.press1,
  },
  {
    title: {
      en: 'Campaign media desk',
      fr: 'Desk média campagne',
      es: 'Desk de medios de campaña',
      it: 'Desk media campagna',
    },
    summary: {
      en: 'Behind-the-scenes access, lookbooks and verified campaign material for partner publications.',
      fr: 'Accès coulisses, lookbooks et éléments de campagne validés pour les médias partenaires.',
      es: 'Acceso behind-the-scenes, lookbooks y material de campaña validado para publicaciones partner.',
      it: 'Accesso backstage, lookbook e materiali di campagna verificati per le testate partner.',
    },
    photo: peoplePhotos.press2,
  },
  {
    title: {
      en: 'Press conference suite',
      fr: 'Suite conférence presse',
      es: 'Suite de conferencia de prensa',
      it: 'Suite conferenza stampa',
    },
    summary: {
      en: 'A calm setting for announcements, founder statements and stakeholder Q&A sessions.',
      fr: 'Un cadre apaisé pour annonces, prises de parole fondatrice et sessions de questions-réponses.',
      es: 'Un entorno sereno para anuncios, declaraciones de la fundadora y sesiones de preguntas.',
      it: 'Un contesto misurato per annunci, dichiarazioni della founder e sessioni Q&A.',
    },
    photo: peoplePhotos.press3,
  },
  {
    title: {
      en: 'Founder interview room',
      fr: 'Salon d’interview fondatrice',
      es: 'Sala de entrevista de la fundadora',
      it: 'Sala interviste founder',
    },
    summary: {
      en: 'A refined setup for founder conversations, recorded statements and strategic media briefs.',
      fr: 'Un cadre raffiné pour entretiens fondatrice, prises de parole enregistrées et briefs média.',
      es: 'Un entorno refinado para entrevistas de fundadora, declaraciones grabadas y briefs de prensa.',
      it: 'Un set raffinato per interviste founder, dichiarazioni registrate e brief media.',
    },
    photo: peoplePhotos.press1,
  },
  {
    title: {
      en: 'Backstage note service',
      fr: 'Service de notes backstage',
      es: 'Servicio de notas backstage',
      it: 'Servizio note backstage',
    },
    summary: {
      en: 'Curated backstage notes, talent context and verified credits for attending journalists.',
      fr: 'Notes backstage, contexte talent et crédits vérifiés pour les journalistes invités.',
      es: 'Notas backstage, contexto del talento y créditos verificados para periodistas invitados.',
      it: 'Note backstage, contesto talent e crediti verificati per i giornalisti invitati.',
    },
    photo: peoplePhotos.press2,
  },
  {
    title: {
      en: 'Media image vault',
      fr: 'Vault images média',
      es: 'Vault de imágenes de prensa',
      it: 'Vault immagini media',
    },
    summary: {
      en: 'Approved imagery, captions and usage-ready selections for press and partner outlets.',
      fr: 'Imagerie approuvée, légendes et sélections prêtes à l’usage pour la presse.',
      es: 'Imágenes aprobadas, captions y selecciones listas para uso editorial y partner.',
      it: 'Immagini approvate, caption e selezioni pronte all’uso per stampa e partner.',
    },
    photo: peoplePhotos.press3,
  },
  {
    title: {
      en: 'Partner publication desk',
      fr: 'Desk publications partenaires',
      es: 'Desk de publicaciones partner',
      it: 'Desk pubblicazioni partner',
    },
    summary: {
      en: 'A response desk for publication requests, scheduling and market-facing talking points.',
      fr: 'Un desk de réponse pour demandes de publication, planning et éléments de langage marché.',
      es: 'Un desk de respuesta para solicitudes editoriales, agenda y talking points de mercado.',
      it: 'Un desk di risposta per richieste editoriali, planning e talking points di mercato.',
    },
    photo: peoplePhotos.press1,
  },
  {
    title: {
      en: 'Post-event recap suite',
      fr: 'Suite récap post-événement',
      es: 'Suite de recap post-evento',
      it: 'Suite recap post-evento',
    },
    summary: {
      en: 'Quick-turn recaps, image selects and recap notes prepared for immediate editorial use.',
      fr: 'Récaps rapides, sélections d’images et notes préparées pour un usage éditorial immédiat.',
      es: 'Recaps rápidos, selección de imágenes y notas listas para uso editorial inmediato.',
      it: 'Recap rapidi, selezioni immagini e note pronte per uso editoriale immediato.',
    },
    photo: peoplePhotos.press2,
  },
]

const articles = [
  {
    id: 'contracts',
    image: peoplePhotos.blog1,
    category: { en: 'Career', fr: 'Carrière', es: 'Carrera', it: 'Carriera' },
    title: {
      en: 'Five contract clauses every model should understand before signing.',
      fr: 'Cinq clauses de contrat que chaque mannequin doit comprendre avant de signer.',
      es: 'Cinco cláusulas contractuales que toda modelo debe entender antes de firmar.',
      it: 'Cinque clausole contrattuali che ogni modella o modello dovrebbe capire prima di firmare.',
    },
    excerpt: {
      en: 'A practical guide to exclusivity, image rights, expenses, renewal windows and usage extensions.',
      fr: 'Un guide pratique sur l’exclusivité, les droits à l’image, les frais, les renouvellements et les extensions d’usage.',
      es: 'Una guía práctica sobre exclusividad, derechos de imagen, gastos, renovaciones y extensiones de uso.',
      it: 'Una guida pratica su esclusività, diritti d’immagine, spese, rinnovi ed estensioni d’uso.',
    },
    body: {
      en: [
        'Many models are introduced to contracts only when the pressure to sign is already high. EOEX teaches talent to slow the process down, identify the operating clauses and understand which points affect long-term earnings and freedom of movement.',
        'We focus on five recurring points: exclusivity scope, image usage duration, travel and housing deductions, renewal triggers and territory extensions. Each clause may appear standard, yet each one changes the commercial value of a booking.',
      ],
      fr: [
        'Beaucoup de mannequins découvrent les contrats lorsque la pression de signer est déjà forte. EOEX apprend à ralentir le processus, identifier les clauses structurantes et comprendre ce qui affecte les revenus et la liberté de mouvement sur le long terme.',
        'Nous insistons sur cinq points récurrents : le périmètre d’exclusivité, la durée des droits à l’image, les déductions de voyage et logement, les déclencheurs de renouvellement et les extensions territoriales.',
      ],
      es: [
        'Muchas modelos conocen los contratos cuando la presión para firmar ya es alta. EOEX enseña a frenar el proceso, identificar las cláusulas operativas y entender qué puntos afectan ingresos y libertad de movimiento a largo plazo.',
        'Nos centramos en cinco puntos recurrentes: alcance de exclusividad, duración del uso de imagen, deducciones de viaje y alojamiento, disparadores de renovación y extensiones territoriales.',
      ],
      it: [
        'Molti talenti incontrano i contratti quando la pressione a firmare è già elevata. EOEX insegna a rallentare il processo, individuare le clausole decisive e capire quali punti incidono su guadagni e libertà di movimento nel lungo periodo.',
        'Ci concentriamo su cinque aspetti ricorrenti: perimetro di esclusiva, durata dei diritti d’immagine, detrazioni di viaggio e alloggio, trigger di rinnovo ed estensioni territoriali.',
      ],
    },
  },
  {
    id: 'mental-prep',
    image: peoplePhotos.blog2,
    category: { en: 'Wellbeing', fr: 'Bien-être', es: 'Bienestar', it: 'Benessere' },
    title: {
      en: 'Mental preparation for fashion week starts long before castings open.',
      fr: 'La préparation mentale pour la fashion week commence bien avant l’ouverture des castings.',
      es: 'La preparación mental para fashion week empieza mucho antes de que abran los castings.',
      it: 'La preparazione mentale per la fashion week comincia molto prima dell’apertura dei casting.',
    },
    excerpt: {
      en: 'How calm routines, rehearsal discipline and recovery planning improve presence on set.',
      fr: 'Comment les routines calmes, la discipline de répétition et la récupération améliorent la présence sur le set.',
      es: 'Cómo las rutinas calmadas, la disciplina de ensayo y la recuperación mejoran la presencia en set.',
      it: 'Come routine calme, disciplina di prova e recupero migliorano la presenza sul set.',
    },
    body: {
      en: [
        'Fashion week rewards presentation under pressure. The visible work begins on the runway or in front of the camera, but the invisible work protects stamina, precision and confidence across long days.',
        'EOEX prepares talents with rehearsal calendars, breathwork, posture resets and realistic recovery windows so consistency replaces adrenaline spikes.',
      ],
      fr: [
        'La fashion week récompense la capacité à se présenter avec justesse sous pression. Le travail visible commence sur le podium ou devant la caméra, mais le travail invisible protège l’endurance, la précision et la confiance sur la durée.',
        'EOEX prépare les talents avec calendriers de répétition, respiration, resets posturaux et fenêtres de récupération réalistes afin que la constance remplace les pics d’adrénaline.',
      ],
      es: [
        'La fashion week premia la capacidad de presentarse con precisión bajo presión. El trabajo visible empieza en la pasarela o frente a la cámara, pero el trabajo invisible protege resistencia, precisión y confianza durante jornadas largas.',
        'EOEX prepara a sus talentos con calendarios de ensayo, respiración, resets posturales y ventanas realistas de recuperación para que la constancia sustituya a los picos de adrenalina.',
      ],
      it: [
        'La fashion week premia la capacità di presentarsi con precisione sotto pressione. Il lavoro visibile comincia in passerella o davanti alla camera, ma quello invisibile protegge resistenza, precisione e sicurezza durante giornate lunghe.',
        'EOEX prepara i talenti con calendari prova, breathwork, reset posturali e finestre di recupero realistiche affinché la costanza sostituisca i picchi di adrenalina.',
      ],
    },
  },
  {
    id: 'portfolio',
    image: peoplePhotos.blog3,
    category: { en: 'Portfolio', fr: 'Portfolio', es: 'Portfolio', it: 'Portfolio' },
    title: {
      en: 'Build a book that speaks to luxury clients, not only to social media.',
      fr: 'Construire un book qui parle aux clients luxe, pas seulement aux réseaux sociaux.',
      es: 'Construir un book que hable a clientes de lujo, no solo a redes sociales.',
      it: 'Costruire un book che parli ai clienti luxury, non solo ai social media.',
    },
    excerpt: {
      en: 'Why sequencing, image variety and client relevance matter more than volume.',
      fr: 'Pourquoi la séquence, la variété d’images et la pertinence client comptent plus que le volume.',
      es: 'Por qué la secuencia, la variedad de imagen y la relevancia para el cliente importan más que el volumen.',
      it: 'Perché sequenza, varietà immagini e rilevanza per il cliente contano più del volume.',
    },
    body: {
      en: [
        'A strong portfolio is not a gallery of every image a model has ever made. It is an argument about casting potential, brand fit and versatility.',
        'EOEX edits books with intention so the sequence answers the client before the client asks.',
      ],
      fr: [
        'Un book solide n’est pas une galerie de toutes les images produites par un mannequin. C’est une démonstration de potentiel de casting, d’affinité de marque et de polyvalence.',
        'EOEX édite les books avec intention afin que la séquence réponde au client avant même sa question.',
      ],
      es: [
        'Un portfolio sólido no es una galería de todas las imágenes que una modelo ha hecho. Es un argumento sobre potencial de casting, afinidad con la marca y versatilidad.',
        'EOEX edita books con intención para que la secuencia responda al cliente antes de que pregunte.',
      ],
      it: [
        'Un portfolio forte non è una galleria di tutte le immagini prodotte da un talento. È un argomento su potenziale di casting, brand fit e versatilità.',
        'EOEX costruisce i book con intenzione affinché la sequenza risponda al cliente prima che il cliente chieda.',
      ],
    },
  },
  {
    id: 'casting-room',
    image: peoplePhotos.blog4,
    category: { en: 'Casting', fr: 'Casting', es: 'Casting', it: 'Casting' },
    title: {
      en: 'What clients read in the first ten seconds of a casting room entrance.',
      fr: 'Ce que les clients lisent dans les dix premières secondes d’une entrée en casting.',
      es: 'Lo que los clientes leen en los primeros diez segundos de una entrada a casting.',
      it: 'Cosa leggono i clienti nei primi dieci secondi di un ingresso in casting.',
    },
    excerpt: {
      en: 'Presence, posture, listening and pace signal professionalism before a single word is spoken.',
      fr: 'Présence, posture, écoute et rythme signalent le professionnalisme avant même un mot.',
      es: 'Presencia, postura, escucha y ritmo señalan profesionalismo antes de hablar.',
      it: 'Presenza, postura, ascolto e ritmo segnalano professionalità prima ancora di parlare.',
    },
    body: {
      en: ['EOEX trains first impressions as part of commercial performance, not theatre. Precision under observation is a bookable skill.'],
      fr: ['EOEX travaille la première impression comme une performance commerciale, pas comme un simple effet de scène. La précision sous observation est une compétence monétisable.'],
      es: ['EOEX entrena la primera impresión como parte del rendimiento comercial, no como teatro. La precisión bajo observación es una habilidad reservable.'],
      it: ['EOEX allena la prima impressione come parte della performance commerciale, non come teatro. La precisione sotto osservazione è una skill prenotabile.'],
    },
  },
  {
    id: 'wellbeing-routine',
    image: peoplePhotos.blog5,
    category: { en: 'Routine', fr: 'Routine', es: 'Rutina', it: 'Routine' },
    title: {
      en: 'The pre-shoot routine that protects skin, energy and decision-making on long production days.',
      fr: 'La routine pré-shoot qui protège la peau, l’énergie et la lucidité sur les longues journées de production.',
      es: 'La rutina pre-shoot que protege piel, energía y claridad mental en jornadas largas.',
      it: 'La routine pre-shoot che protegge pelle, energia e lucidità nelle lunghe giornate di produzione.',
    },
    excerpt: {
      en: 'The smallest preparation habits often create the biggest difference in consistency.',
      fr: 'Les plus petites habitudes de préparation créent souvent la plus grande différence de constance.',
      es: 'Los hábitos de preparación más pequeños suelen crear la mayor diferencia en consistencia.',
      it: 'Le abitudini di preparazione più piccole creano spesso la maggiore differenza in costanza.',
    },
    body: {
      en: ['EOEX frames preparation through sleep, water, meal timing, simple skincare and mental reset cues that support calm performance across call times and set changes.'],
      fr: ['EOEX cadre la préparation autour du sommeil, de l’eau, du timing des repas, d’une skincare simple et de repères mentaux pour soutenir une performance calme tout au long de la journée.'],
      es: ['EOEX estructura la preparación en torno a sueño, agua, timing de comidas, skincare simple y señales mentales que sostienen una performance calma.'],
      it: ['EOEX struttura la preparazione attorno a sonno, acqua, timing dei pasti, skincare semplice e segnali mentali che sostengono una performance calma.'],
    },
  },
  {
    id: 'client-briefs',
    image: peoplePhotos.blog6,
    category: { en: 'Clients', fr: 'Clients', es: 'Clientes', it: 'Clienti' },
    title: {
      en: 'How EOEX interprets client briefs before recommending talent for a campaign.',
      fr: 'Comment EOEX interprète les briefs clients avant de recommander un talent pour une campagne.',
      es: 'Cómo EOEX interpreta los briefs de cliente antes de recomendar talento para una campaña.',
      it: 'Come EOEX interpreta i brief cliente prima di raccomandare talenti per una campagna.',
    },
    excerpt: {
      en: 'The best casting decisions come from reading business goals as carefully as moodboards.',
      fr: 'Les meilleurs castings naissent d’une lecture des objectifs business aussi attentive que celle des moodboards.',
      es: 'Las mejores decisiones de casting nacen de leer los objetivos de negocio tan bien como los moodboards.',
      it: 'Le migliori decisioni di casting nascono dal leggere gli obiettivi di business con la stessa cura dei moodboard.',
    },
    body: {
      en: ['EOEX studies risk tolerance, pace of execution, target audience and emotional brand language before any portfolio is sent.'],
      fr: ['EOEX étudie niveau de risque, rythme d’exécution, audience cible et langage émotionnel de marque avant tout envoi de portfolio.'],
      es: ['EOEX estudia tolerancia al riesgo, ritmo de ejecución, audiencia objetivo y lenguaje emocional de marca antes de enviar cualquier portfolio.'],
      it: ['EOEX studia tolleranza al rischio, ritmo di esecuzione, target audience e linguaggio emotivo del brand prima di inviare qualsiasi portfolio.'],
    },
  },
  {
    id: 'mother-agency',
    image: peoplePhotos.blog7,
    category: { en: 'Agencies', fr: 'Agences', es: 'Agencias', it: 'Agenzie' },
    title: {
      en: 'Mother agency, direct booking or freelance structure: which path suits which stage?',
      fr: 'Mother agency, booking direct ou structure freelance : quelle voie pour quelle étape ?',
      es: 'Mother agency, booking directo o estructura freelance: ¿qué camino conviene en cada etapa?',
      it: 'Mother agency, direct booking o struttura freelance: quale strada per quale fase?',
    },
    excerpt: {
      en: 'Different representation structures create different kinds of leverage and risk.',
      fr: 'Les différentes structures de représentation créent des leviers et des risques distincts.',
      es: 'Las distintas estructuras de representación crean palancas y riesgos diferentes.',
      it: 'Le diverse strutture di rappresentanza creano leve e rischi differenti.',
    },
    body: {
      en: ['EOEX helps talents assess whether they need development, direct access, flexibility or a hybrid approach before entering binding agreements.'],
      fr: ['EOEX aide les talents à évaluer s’ils ont besoin de développement, d’accès direct, de flexibilité ou d’un modèle hybride avant de signer.'],
      es: ['EOEX ayuda a evaluar si el talento necesita desarrollo, acceso directo, flexibilidad o un enfoque híbrido antes de firmar acuerdos vinculantes.'],
      it: ['EOEX aiuta i talenti a valutare se servano sviluppo, accesso diretto, flessibilità o un approccio ibrido prima di firmare accordi vincolanti.'],
    },
  },
  {
    id: 'set-etiquette',
    image: peoplePhotos.blog8,
    category: { en: 'Set Etiquette', fr: 'Codes plateau', es: 'Etiqueta en set', it: 'Etichetta set' },
    title: {
      en: 'Set etiquette that makes photographers, stylists and production teams want to rebook talent.',
      fr: 'Les codes plateau qui donnent aux photographes, stylistes et productions envie de rebooker un talent.',
      es: 'La etiqueta en set que hace que fotógrafos, stylists y producción quieran volver a reservar talento.',
      it: 'L’etichetta sul set che fa venire a fotografi, stylist e produzione voglia di richiamare un talento.',
    },
    excerpt: {
      en: 'Quiet professionalism often leaves a stronger memory than exaggerated performance.',
      fr: 'Le professionnalisme discret laisse souvent un souvenir plus fort qu’une performance forcée.',
      es: 'El profesionalismo silencioso suele dejar un recuerdo más fuerte que una performance exagerada.',
      it: 'La professionalità silenziosa lascia spesso un ricordo più forte di una performance esagerata.',
    },
    body: {
      en: ['Rebooking rarely depends on looks alone. Punctuality, listening, garment respect, energy management and tone all affect how safe and efficient a team feels around talent.'],
      fr: ['Le rebooking dépend rarement du seul physique. Ponctualité, écoute, respect du vêtement, gestion d’énergie et ton de communication influencent le sentiment de sécurité de l’équipe.'],
      es: ['El rebooking rara vez depende solo del físico. Puntualidad, escucha, respeto por la prenda, gestión de energía y tono de comunicación afectan la sensación de seguridad del equipo.'],
      it: ['Il rebooking raramente dipende solo dall’aspetto. Puntualità, ascolto, rispetto del capo, gestione dell’energia e tono della comunicazione influenzano la sensazione di sicurezza del team.'],
    },
  },
  {
    id: 'brand-positioning',
    image: peoplePhotos.blog9,
    category: { en: 'Branding', fr: 'Branding', es: 'Branding', it: 'Branding' },
    title: {
      en: 'Personal brand positioning for models who want longevity instead of short-lived visibility.',
      fr: 'Le positionnement personnel pour les mannequins qui veulent la longévité plutôt qu’une visibilité éphémère.',
      es: 'Posicionamiento personal para modelos que quieren longevidad y no solo visibilidad pasajera.',
      it: 'Posizionamento personale per modelli che vogliono longevità invece di visibilità effimera.',
    },
    excerpt: {
      en: 'Consistency, editing and self-understanding create stronger value than constant exposure.',
      fr: 'La constance, l’édition et la connaissance de soi créent plus de valeur qu’une exposition permanente.',
      es: 'La consistencia, la edición y el autoconocimiento crean más valor que la exposición constante.',
      it: 'Costanza, editing e comprensione di sé creano più valore dell’esposizione continua.',
    },
    body: {
      en: ['EOEX builds positioning around coherence, image discipline and market fit so each appearance strengthens the larger story.'],
      fr: ['EOEX construit le positionnement autour de la cohérence, de la discipline d’image et du bon marché afin que chaque apparition renforce le récit global.'],
      es: ['EOEX construye el posicionamiento alrededor de coherencia, disciplina de imagen y ajuste al mercado para que cada aparición fortalezca la historia global.'],
      it: ['EOEX costruisce il posizionamento attorno a coerenza, disciplina d’immagine e market fit così che ogni apparizione rafforzi il racconto complessivo.'],
    },
  },
]

const state = {
  lang: 'en',
  formFactor: 'desktop',
  mobileNavOpen: false,
  activeArticle: null,
  expandedSections: {},
  blogQuery: '',
  blogTag: 'all',
  selectedDay: 1,
  selectedTime: '14:30',
  statusMessage: '',
}

let blogSearchDebounceTimer = null
let formFactorDebounceTimer = null

function detectFormFactor() {
  const isNarrowViewport = window.matchMedia('(max-width: 920px)').matches
  const isPortraitTouchDevice = window.matchMedia('(pointer: coarse) and (orientation: portrait)').matches
  return isNarrowViewport || isPortraitTouchDevice ? 'mobile' : 'desktop'
}

function applyFormFactorToDocument() {
  document.body.dataset.formFactor = state.formFactor
  document.documentElement.dataset.formFactor = state.formFactor
}

function syncFormFactor({ rerender = false } = {}) {
  const nextFormFactor = detectFormFactor()
  if (state.formFactor === nextFormFactor) {
    applyFormFactorToDocument()
    return
  }

  state.formFactor = nextFormFactor
  if (state.formFactor === 'desktop' && state.mobileNavOpen) {
    state.mobileNavOpen = false
  }

  if (rerender) {
    render()
    return
  }

  applyFormFactorToDocument()
}

const bookingDays = Array.from({ length: 10 }, (_, index) => {
  const date = new Date(Date.UTC(2026, 5, 26 + index))
  return {
    key: date.toISOString().slice(0, 10),
    dayNumber: date.getUTCDate(),
    weekday: date.toLocaleDateString('en-GB', { weekday: 'short', timeZone: 'UTC' }),
  }
})

const bookingTimes = ['09:00', '10:30', '12:00', '14:30', '16:00', '18:15']

const magazineCovers = Object.entries(optimizedMagazineCoverModules)
  .map(([path, image]) => ({
    image,
    name: path.split('/').pop().replace(/\.[^.]+$/, ''),
  }))
  .sort((left, right) => left.name.localeCompare(right.name))

const englishMonths = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
}

const longReadSectionLabels = {
  en: {
    definition: 'Definition',
    applications: 'Industry Applications',
    keywords: '20 Keywords',
    misconceptions: 'Common Misconceptions',
    pitfalls: 'Pitfalls and Consequences',
    bridge: 'How EOEX Bridges the Gap',
    benefits: 'Tangible Benefits',
    conclusion: 'Conclusion',
    sources: 'Source Notes',
  },
  fr: {
    definition: 'Définition',
    applications: 'Applications dans l’industrie',
    keywords: '20 Mots-clés',
    misconceptions: 'Idées reçues',
    pitfalls: 'Pièges et conséquences',
    bridge: 'Comment EOEX comble l’écart',
    benefits: 'Bénéfices tangibles',
    conclusion: 'Conclusion',
    sources: 'Sources',
  },
  es: {
    definition: 'Definición',
    applications: 'Aplicaciones en la industria',
    keywords: '20 Palabras clave',
    misconceptions: 'Ideas equivocadas comunes',
    pitfalls: 'Riesgos y consecuencias',
    bridge: 'Cómo EOEX cierra la brecha',
    benefits: 'Beneficios tangibles',
    conclusion: 'Conclusión',
    sources: 'Fuentes',
  },
  it: {
    definition: 'Definizione',
    applications: 'Applicazioni nel settore',
    keywords: '20 Parole chiave',
    misconceptions: 'Fraintendimenti comuni',
    pitfalls: 'Errori e conseguenze',
    bridge: 'Come EOEX colma il divario',
    benefits: 'Benefici tangibili',
    conclusion: 'Conclusione',
    sources: 'Fonti',
  },
}

const topicNames = [
  'creative brief review',
  'moodboard interpretation',
  'brand research',
  'concept understanding',
  'pose planning',
  'expression practice',
  'movement exploration',
  'walking practice',
  'posture refinement',
  'body awareness',
  'facial control',
  'eye direction',
  'hand positioning',
  'angle awareness',
  'profile awareness',
  'camera awareness',
  'lighting awareness',
  'outfit fitting',
  'wardrobe checks',
  'accessory handling',
  'hair preparation',
  'makeup preparation',
  'skincare routine',
  'location preparation',
  'set preparation',
  'pre-shoot rehearsals',
  'pose transitions',
  'expression changes',
  'movement execution',
  'direction interpretation',
  'photographer collaboration',
  'photography and videography orchestration',
  'art director collaboration',
  'stylist collaboration',
  'hair team collaboration',
  'makeup team collaboration',
  'product handling',
  'garment presentation',
  'prop interaction',
  'eye-line adjustments',
  'head positioning',
  'hand positioning for detail shots',
  'posture adjustments',
  'balance control',
  'energy consistency',
  'character embodiment',
  'emotion communication',
  'storytelling through pose',
  'lighting adaptation',
  'multiple take consistency',
  'quick outfit changes',
  'receiving feedback',
  'real-time adjustments',
  'on-set professionalism',
  'image review',
  'pose evaluation',
  'expression analysis',
  'portfolio selection',
  'casting preparation',
  'audition attendance',
  'endurance throughout shoot',
  'portfolio updates',
  'runway practice',
  'commercial performance',
  'editorial adaptation',
  'beauty posing',
  'lifestyle posing',
  'product modelling',
  'e-commerce modelling',
  'fit modelling',
  'brand adaptation',
  'product presentation',
  'pose sequencing',
  'fitness posing',
  'part model posing',
]

const topicCoverPool = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1200&q=80',
]

function formatTopicTitle(topic) {
  return topic
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function slugifyTopic(topic) {
  return topic
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function buildTopicKeywords(topic) {
  const words = topic
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, ' ')
    .split(/\s+/)
    .filter(Boolean)

  const baseKeywords = [
    ...words,
    'brief',
    'intent',
    'composition',
    'camera',
    'lighting',
    'styling',
    'precision',
    'timing',
    'confidence',
    'consistency',
    'client-readiness',
    'brand-fit',
    'creative-direction',
    'execution',
    'feedback-loop',
    'professionalism',
    'adaptability',
    'set-etiquette',
    'quality-control',
    'portfolio-value',
  ]

  return Array.from(new Set(baseKeywords)).slice(0, 20)
}

const referenceLibrary = {
  modeling: 'https://en.wikipedia.org/wiki/Model_(person)',
  creativeBrief: 'https://en.wikipedia.org/wiki/Creative_brief',
  moodBoard: 'https://en.wikipedia.org/wiki/Mood_board',
  fashionPhotography: 'https://en.wikipedia.org/wiki/Fashion_photography',
  runwayCoverage: 'https://www.vogue.com/fashion-shows',
}

const topicClusterRules = [
  {
    key: 'pre-production',
    test: /(brief|moodboard|research|concept|preparation|set|location|wardrobe|outfit|hair|makeup|skincare|rehearsal|checks|fitting)/,
    category: { en: 'Pre-production', fr: 'Pré-production', es: 'Preproducción', it: 'Pre-produzione' },
  },
  {
    key: 'body-language',
    test: /(pose|expression|movement|posture|awareness|eye|hand|head|balance|energy|emotion|character|storytelling|angle|profile)/,
    category: { en: 'Body Language', fr: 'Langage corporel', es: 'Lenguaje corporal', it: 'Linguaggio corporeo' },
  },
  {
    key: 'set-collaboration',
    test: /(collaboration|direction|feedback|adjustments|professionalism|orchestration|team)/,
    category: { en: 'Set Collaboration', fr: 'Collaboration plateau', es: 'Colaboración en set', it: 'Collaborazione sul set' },
  },
  {
    key: 'career-performance',
    test: /(casting|audition|portfolio|runway|commercial|editorial|fitness|fit modelling|part model|product|e-commerce|adaptation|selection)/,
    category: { en: 'Career Performance', fr: 'Performance carrière', es: 'Rendimiento profesional', it: 'Performance di carriera' },
  },
]

function pickVariant(options, index) {
  return options[index % options.length]
}

function detectTopicCluster(topic) {
  const match = topicClusterRules.find((rule) => rule.test.test(topic))
  if (match) {
    return match
  }

  return {
    key: 'core-performance',
    category: { en: 'Masterclass', fr: 'Masterclass', es: 'Masterclass', it: 'Masterclass' },
  }
}

function buildTopicSourceNotes(topic, cluster) {
  const topicLabel = formatTopicTitle(topic)
  const notes = [
    { label: `Creative brief fundamentals for ${topicLabel}`, url: referenceLibrary.creativeBrief },
    { label: `Professional model workflow context for ${topicLabel}`, url: referenceLibrary.modeling },
  ]

  if (cluster.key === 'pre-production') {
    notes.push({ label: `Visual alignment and mood systems for ${topicLabel}`, url: referenceLibrary.moodBoard })
  }

  if (cluster.key === 'body-language' || cluster.key === 'set-collaboration') {
    notes.push({ label: `Fashion image direction and on-set language for ${topicLabel}`, url: referenceLibrary.fashionPhotography })
  }

  if (cluster.key === 'career-performance') {
    notes.push({ label: `Market runway and show ecosystem signals for ${topicLabel}`, url: referenceLibrary.runwayCoverage })
  }

  if (notes.length < 4) {
    notes.push({ label: `Runway market context for ${topicLabel}`, url: referenceLibrary.runwayCoverage })
  }

  return notes.slice(0, 4)
}

function buildTopicBridgeParagraph(topic, title, index) {
  const topicLabel = topic.toLowerCase()

  return {
    en: pickVariant(
      [
        `<strong>${longReadSectionLabels.en.bridge}:</strong> EOEX approaches ${topicLabel} as a human coaching conversation before it becomes a performance drill. We decode the brief with the model, translate vague creative language into precise actions, rehearse under real timing pressure, and then refine the result until the talent can deliver ${title} with calm authority instead of guesswork.`,
        `<strong>${longReadSectionLabels.en.bridge}:</strong> EOEX closes the ${topicLabel} gap by making preparation feel personal rather than mechanical: the talent learns what to look for, what to ask, what to simplify, and how to stay emotionally present while still meeting client precision. That combination is what turns a promising profile into someone teams trust on expensive days.`,
        `<strong>${longReadSectionLabels.en.bridge}:</strong> With EOEX, ${topicLabel} is trained through repetition, language and emotional intelligence. We run practical simulations, challenge weak habits, build a vocabulary the model can actually use on set, and coach the talent to respond with elegance even when direction changes quickly or confidence starts to wobble.`,
        `<strong>${longReadSectionLabels.en.bridge}:</strong> EOEX treats ${topicLabel} as a bridge between who the talent already is and who the market needs them to become. That means one part technical structure, one part confidence building, and one part honest editorial feedback until the model no longer performs the idea of professionalism but actually embodies it.`,
      ],
      index,
    ),
    fr: pickVariant(
      [
        `<strong>${longReadSectionLabels.fr.bridge}:</strong> EOEX travaille ${topicLabel} d’abord comme un échange humain avant d’en faire un automatisme de performance. Nous décodons le brief avec le talent, transformons les consignes floues en actions concrètes, répétons sous vraie pression de temps puis affinons jusqu’à ce que ${title} devienne une réponse maîtrisée, pas un pari.`,
        `<strong>${longReadSectionLabels.fr.bridge}:</strong> EOEX comble l’écart autour de ${topicLabel} en rendant la préparation personnelle et intelligible. Le mannequin apprend quoi observer, quoi demander, quoi simplifier et comment rester émotionnellement présent tout en respectant la précision client. C’est cette combinaison qui inspire la confiance sur les journées à fort enjeu.`,
        `<strong>${longReadSectionLabels.fr.bridge}:</strong> Chez EOEX, ${topicLabel} se construit par répétition, langage et intelligence relationnelle. Nous simulons le plateau, corrigeons les automatismes fragiles, donnons un vocabulaire réellement utilisable sur le set et accompagnons le talent pour qu’il reste élégant même quand la direction change vite.`,
        `<strong>${longReadSectionLabels.fr.bridge}:</strong> EOEX traite ${topicLabel} comme un pont entre l’identité actuelle du talent et le niveau de fiabilité exigé par le marché. Il faut donc de la structure, de la confiance et un retour éditorial honnête jusqu’à ce que le professionnalisme ne soit plus joué mais incarné.`,
      ],
      index,
    ),
    es: pickVariant(
      [
        `<strong>${longReadSectionLabels.es.bridge}:</strong> EOEX trabaja ${topicLabel} primero como conversación humana y después como disciplina de ejecución. Leemos el brief con el talento, convertimos dirección abstracta en acciones concretas, ensayamos con presión real de tiempo y afinamos hasta que ${title} salga con serenidad y criterio, no por improvisación.`,
        `<strong>${longReadSectionLabels.es.bridge}:</strong> EOEX cierra la brecha de ${topicLabel} haciendo que la preparación sea personal y útil. La modelo aprende qué detectar, qué preguntar, qué simplificar y cómo mantenerse emocionalmente presente mientras responde con precisión comercial. Esa mezcla es la que genera confianza en los equipos más exigentes.`,
        `<strong>${longReadSectionLabels.es.bridge}:</strong> En EOEX, ${topicLabel} se entrena con repetición, lenguaje compartido e inteligencia emocional. Simulamos el set, desmontamos hábitos débiles, construimos vocabulario operativo y acompañamos al talento para que conserve elegancia incluso cuando la dirección cambia de golpe.`,
        `<strong>${longReadSectionLabels.es.bridge}:</strong> EOEX entiende ${topicLabel} como un puente entre lo que el talento es hoy y lo que el mercado necesita ver de forma consistente. Eso exige estructura, confianza y feedback editorial honesto hasta que el profesionalismo deje de actuar y empiece a sentirse natural.`,
      ],
      index,
    ),
    it: pickVariant(
      [
        `<strong>${longReadSectionLabels.it.bridge}:</strong> EOEX affronta ${topicLabel} prima come dialogo umano e poi come disciplina di esecuzione. Leggiamo il brief con il talento, traduciamo indicazioni astratte in azioni precise, proviamo sotto vera pressione temporale e rifiniamo finché ${title} non emerge con lucidità e controllo, non per caso.`,
        `<strong>${longReadSectionLabels.it.bridge}:</strong> EOEX colma il divario su ${topicLabel} rendendo la preparazione personale e realmente utile. Il modello impara cosa osservare, cosa chiedere, cosa semplificare e come restare emotivamente presente mentre mantiene precisione commerciale. È questo che fa nascere fiducia nei team migliori.`,
        `<strong>${longReadSectionLabels.it.bridge}:</strong> In EOEX, ${topicLabel} si costruisce con ripetizione, linguaggio condiviso e intelligenza emotiva. Simuliamo il set, correggiamo automatismi fragili, costruiamo vocabolario operativo e accompagniamo il talento perché resti elegante anche quando la direzione cambia rapidamente.`,
        `<strong>${longReadSectionLabels.it.bridge}:</strong> EOEX considera ${topicLabel} un ponte tra ciò che il talento è oggi e ciò che il mercato ha bisogno di vedere con continuità. Servono quindi struttura, fiducia e feedback editoriale sincero finché la professionalità non viene più interpretata ma incarnata davvero.`,
      ],
      index,
    ),
  }
}

function buildTopicMisconceptionParagraph(topic, index) {
  const topicLabel = topic.toLowerCase()

  return {
    en: pickVariant(
      [
        `<strong>${longReadSectionLabels.en.misconceptions}:</strong> ${formatTopicTitle(topic)} is often romanticized as something a model either naturally has or does not have. In reality, ${topicLabel} becomes reliable only when it is trained through preparation, shared language and repeatable decision-making under pressure.`,
        `<strong>${longReadSectionLabels.en.misconceptions}:</strong> One common mistake is to reduce ${topicLabel} to charisma or instinct. High-level teams know that the real difference comes from structure: timing, cue recognition, listening quality and the discipline to stay readable when the room gets fast.`,
        `<strong>${longReadSectionLabels.en.misconceptions}:</strong> The industry often speaks about ${topicLabel} as if it were purely aesthetic. But on demanding sets, it is operational as much as visual, affecting pace, confidence, approvals and how much trust the client places in the talent.`,
        `<strong>${longReadSectionLabels.en.misconceptions}:</strong> Many talents assume ${topicLabel} improves automatically with exposure. What actually improves careers is deliberate practice, clearer interpretation of direction and the maturity to make strong choices without overperforming them.`,
      ],
      index,
    ),
    fr: pickVariant(
      [
        `<strong>${longReadSectionLabels.fr.misconceptions}:</strong> ${formatTopicTitle(topic)} est souvent présenté comme une qualité innée que l’on possède ou non. En réalité, ${topicLabel} ne devient fiable que lorsqu’il est entraîné par la préparation, un langage partagé et des décisions répétables sous pression.`,
        `<strong>${longReadSectionLabels.fr.misconceptions}:</strong> Une erreur fréquente consiste à réduire ${topicLabel} au charisme ou à l’instinct. Les équipes de haut niveau savent que la différence vient surtout de la structure: le timing, la lecture des signaux, la qualité d’écoute et la capacité à rester lisible quand tout s’accélère.`,
        `<strong>${longReadSectionLabels.fr.misconceptions}:</strong> Le secteur parle souvent de ${topicLabel} comme d’un sujet purement esthétique. Sur les plateaux exigeants, il est autant opérationnel que visuel et influence le rythme, la confiance, les validations et le degré de sécurité ressenti par le client.`,
        `<strong>${longReadSectionLabels.fr.misconceptions}:</strong> Beaucoup de talents pensent que ${topicLabel} progresse automatiquement avec l’expérience. Ce qui fait réellement évoluer une carrière, c’est la pratique délibérée, l’interprétation plus juste de la direction et la maturité de faire des choix forts sans les surjouer.`,
      ],
      index,
    ),
    es: pickVariant(
      [
        `<strong>${longReadSectionLabels.es.misconceptions}:</strong> ${formatTopicTitle(topic)} suele romantizarse como una capacidad natural que una modelo tiene o no tiene. En realidad, ${topicLabel} solo se vuelve fiable cuando se entrena con preparación, lenguaje compartido y decisiones repetibles bajo presión.`,
        `<strong>${longReadSectionLabels.es.misconceptions}:</strong> Un error común es reducir ${topicLabel} a carisma o intuición. Los equipos sólidos saben que la diferencia real viene de la estructura: timing, lectura de señales, calidad de escucha y disciplina para seguir siendo legible cuando el ritmo se acelera.`,
        `<strong>${longReadSectionLabels.es.misconceptions}:</strong> La industria suele tratar ${topicLabel} como si fuera algo puramente estético. En sets exigentes también es una cuestión operativa, porque afecta el ritmo, la confianza, las aprobaciones y el nivel de seguridad que siente el cliente.`,
        `<strong>${longReadSectionLabels.es.misconceptions}:</strong> Muchas personas creen que ${topicLabel} mejora solo con acumular experiencia. Lo que realmente cambia una carrera es la práctica deliberada, una mejor lectura de dirección y la madurez para tomar decisiones fuertes sin sobreactuarlas.`,
      ],
      index,
    ),
    it: pickVariant(
      [
        `<strong>${longReadSectionLabels.it.misconceptions}:</strong> ${formatTopicTitle(topic)} viene spesso romanticizzato come una qualità naturale che un talento possiede oppure no. In realtà, ${topicLabel} diventa affidabile solo quando viene allenato con preparazione, linguaggio condiviso e decisioni ripetibili sotto pressione.`,
        `<strong>${longReadSectionLabels.it.misconceptions}:</strong> Un errore comune è ridurre ${topicLabel} a carisma o intuito. I team migliori sanno che la vera differenza nasce dalla struttura: timing, lettura dei segnali, qualità dell’ascolto e disciplina nel restare leggibili quando il ritmo accelera.`,
        `<strong>${longReadSectionLabels.it.misconceptions}:</strong> Il settore parla spesso di ${topicLabel} come di qualcosa di puramente estetico. Nei set più esigenti è anche un fatto operativo, perché influenza ritmo, fiducia, approvazioni e il livello di sicurezza percepito dal cliente.`,
        `<strong>${longReadSectionLabels.it.misconceptions}:</strong> Molti talenti pensano che ${topicLabel} migliori automaticamente con l’esperienza. Ciò che cambia davvero una carriera è la pratica intenzionale, una lettura più precisa della direzione e la maturità di compiere scelte forti senza enfatizzarle troppo.`,
      ],
      index,
    ),
  }
}

function buildTopicConclusionParagraph(title, topic, index) {
  const topicLabel = topic.toLowerCase()

  return {
    en: pickVariant(
      [
        `<strong>${longReadSectionLabels.en.conclusion}:</strong> ${title} becomes compelling when it stops looking like effort and starts feeling like truth. The talents who last are the ones who make ${topicLabel} readable, graceful and emotionally believable under pressure, and that is exactly the kind of credibility EOEX is built to develop.`,
        `<strong>${longReadSectionLabels.en.conclusion}:</strong> In the end, ${topicLabel} is not about performing perfection. It is about becoming so prepared that elegance survives pressure, personality survives direction, and the client leaves feeling they were in the hands of someone fully ready for the room.`,
        `<strong>${longReadSectionLabels.en.conclusion}:</strong> The most memorable talent is rarely the loudest; it is the one who makes complex direction feel effortless. ${title} matters because it gives a model that rare ability to stay magnetic, useful and trustworthy in the same moment.`,
        `<strong>${longReadSectionLabels.en.conclusion}:</strong> ${title} should ultimately leave the viewer with the feeling that nothing had to be forced. When EOEX trains ${topicLabel} well, the result is not just stronger imagery, but a model who can carry both artistic atmosphere and commercial responsibility with real poise.`,
      ],
      index,
    ),
    fr: pickVariant(
      [
        `<strong>${longReadSectionLabels.fr.conclusion}:</strong> ${title} devient captivant lorsque l’effort cesse d’être visible et que la justesse semble naturelle. Les talents qui durent sont ceux qui rendent ${topicLabel} lisible, élégant et émotionnellement crédible sous pression, et c’est précisément ce qu’EOEX cherche à construire.`,
        `<strong>${longReadSectionLabels.fr.conclusion}:</strong> Au fond, ${topicLabel} ne consiste pas à jouer la perfection. Il s’agit d’être suffisamment préparé pour que l’élégance résiste à la pression, que la personnalité survive à la direction et que le client sente immédiatement qu’il peut faire confiance.`,
        `<strong>${longReadSectionLabels.fr.conclusion}:</strong> Les talents les plus mémorables ne sont pas forcément les plus démonstratifs, mais ceux qui rendent une direction complexe presque évidente. ${title} compte parce qu’il donne cette capacité rare d’être à la fois magnétique, utile et fiable.`,
        `<strong>${longReadSectionLabels.fr.conclusion}:</strong> ${title} devrait laisser une impression de fluidité totale, comme si rien n’avait été forcé. Lorsqu’EOEX forme bien ${topicLabel}, le résultat dépasse l’image forte: il révèle un talent capable de porter en même temps atmosphère créative et responsabilité commerciale.`,
      ],
      index,
    ),
    es: pickVariant(
      [
        `<strong>${longReadSectionLabels.es.conclusion}:</strong> ${title} se vuelve verdaderamente atractivo cuando el esfuerzo deja de notarse y la verdad visual toma el control. El talento que dura es el que vuelve ${topicLabel} legible, elegante y emocionalmente creíble bajo presión, y esa es exactamente la credibilidad que EOEX desarrolla.`,
        `<strong>${longReadSectionLabels.es.conclusion}:</strong> Al final, ${topicLabel} no trata de actuar perfección. Trata de estar tan preparado que la elegancia sobreviva a la presión, la personalidad sobreviva a la dirección y el cliente perciba que está frente a alguien realmente listo.`,
        `<strong>${longReadSectionLabels.es.conclusion}:</strong> El talento más memorable rara vez es el más ruidoso; suele ser el que hace parecer simple una dirección compleja. ${title} importa porque entrega esa habilidad poco común de ser magnético, útil y confiable al mismo tiempo.`,
        `<strong>${longReadSectionLabels.es.conclusion}:</strong> ${title} debería dejar la sensación de que nada fue forzado. Cuando EOEX entrena bien ${topicLabel}, el resultado no es solo una imagen más fuerte, sino un talento capaz de sostener atmósfera creativa y responsabilidad comercial con verdadera presencia.`,
      ],
      index,
    ),
    it: pickVariant(
      [
        `<strong>${longReadSectionLabels.it.conclusion}:</strong> ${title} diventa davvero coinvolgente quando lo sforzo smette di vedersi e resta solo la verità dell’immagine. I talenti che durano sono quelli che rendono ${topicLabel} leggibile, elegante e credibile anche sotto pressione, ed è proprio questa affidabilità che EOEX costruisce.`,
        `<strong>${longReadSectionLabels.it.conclusion}:</strong> In fondo, ${topicLabel} non significa interpretare la perfezione. Significa essere così preparati che l’eleganza resista alla pressione, la personalità resista alla direzione e il cliente senta di avere davanti qualcuno davvero pronto.`,
        `<strong>${longReadSectionLabels.it.conclusion}:</strong> Il talento più memorabile raramente è quello più rumoroso; è quello che rende naturale una direzione complessa. ${title} conta perché offre questa capacità rara di essere magnetico, utile e affidabile nello stesso istante.`,
        `<strong>${longReadSectionLabels.it.conclusion}:</strong> ${title} dovrebbe lasciare la sensazione che nulla sia stato forzato. Quando EOEX allena bene ${topicLabel}, il risultato non è solo un’immagine più forte, ma un talento capace di sostenere insieme atmosfera creativa e responsabilità commerciale con autentico portamento.`,
      ],
      index,
    ),
  }
}

function buildLegacyBridgeParagraph(article, index) {
  return {
    en: pickVariant(
      [
        `<strong>${longReadSectionLabels.en.bridge}:</strong> EOEX works on ${article.category.en.toLowerCase()} questions by starting with the person, not the template. We identify what this specific model or client situation is struggling with, rehearse a better response in realistic conditions, and keep refining until confidence stops feeling borrowed and starts feeling earned.`,
        `<strong>${longReadSectionLabels.en.bridge}:</strong> The EOEX difference is that we never leave ${article.category.en.toLowerCase()} insight at the level of advice. We turn it into language, rehearsal, review rituals and concrete behavioural shifts, so the talent can feel the improvement in the body instead of only understanding it intellectually.`,
        `<strong>${longReadSectionLabels.en.bridge}:</strong> EOEX closes this gap by combining strategic clarity with emotional steadiness. We train the skill itself, but we also train how to stay composed while using it in front of clients, cameras and fast-moving teams where self-doubt can easily interfere.`,
      ],
      index,
    ),
    fr: pickVariant(
      [
        `<strong>${longReadSectionLabels.fr.bridge}:</strong> EOEX aborde ces sujets de ${article.category.fr.toLowerCase()} en partant de la personne réelle, pas d’un modèle abstrait. Nous identifions le point de friction concret, répétons une réponse plus juste dans des conditions crédibles puis affinons jusqu’à ce que la confiance soit réellement intégrée.`,
        `<strong>${longReadSectionLabels.fr.bridge}:</strong> La différence EOEX est de ne jamais laisser une idée utile au stade du conseil général. Nous la transformons en langage, en répétition, en rituels de revue et en gestes précis, pour que le talent ressente l’amélioration dans l’exécution elle-même.`,
        `<strong>${longReadSectionLabels.fr.bridge}:</strong> EOEX comble cet écart en associant clarté stratégique et stabilité émotionnelle. Nous entraînons la compétence, mais aussi la capacité à rester composé lorsqu’il faut l’utiliser devant un client, une caméra ou une équipe en mouvement.`,
      ],
      index,
    ),
    es: pickVariant(
      [
        `<strong>${longReadSectionLabels.es.bridge}:</strong> EOEX trabaja estos temas de ${article.category.es.toLowerCase()} partiendo de la persona real y no de una fórmula abstracta. Detectamos la fricción concreta, ensayamos una respuesta más sólida en condiciones creíbles y afinamos hasta que la confianza deje de sentirse prestada.`,
        `<strong>${longReadSectionLabels.es.bridge}:</strong> La diferencia de EOEX es que no deja ninguna idea útil en el nivel del consejo. La convertimos en lenguaje, práctica, rituales de revisión y cambios de comportamiento para que el talento sienta la mejora en el cuerpo y no solo en la cabeza.`,
        `<strong>${longReadSectionLabels.es.bridge}:</strong> EOEX cierra esta brecha combinando claridad estratégica con estabilidad emocional. Entrenamos la habilidad, pero también la capacidad de conservar compostura al usarla frente a clientes, cámaras y equipos donde la duda puede sabotear el resultado.`,
      ],
      index,
    ),
    it: pickVariant(
      [
        `<strong>${longReadSectionLabels.it.bridge}:</strong> EOEX affronta questi temi di ${article.category.it.toLowerCase()} partendo dalla persona reale, non da un modello astratto. Individuiamo il punto di attrito concreto, proviamo una risposta più solida in condizioni credibili e rifiniamo finché la fiducia non smette di sembrare presa in prestito.`,
        `<strong>${longReadSectionLabels.it.bridge}:</strong> La differenza EOEX è che nessuna intuizione utile resta al livello del semplice consiglio. La trasformiamo in linguaggio, pratica, rituali di revisione e cambiamenti comportamentali, così il talento percepisce il miglioramento nell’esecuzione stessa.`,
        `<strong>${longReadSectionLabels.it.bridge}:</strong> EOEX colma questo gap unendo chiarezza strategica e stabilità emotiva. Alleniamo la skill, ma anche la capacità di restare composti mentre la si usa davanti a clienti, camere e team veloci dove il dubbio può sabotare il risultato.`,
      ],
      index,
    ),
  }
}

function buildLegacyMisconceptionParagraph(article, index) {
  return {
    en: pickVariant(
      [
        `<strong>${longReadSectionLabels.en.misconceptions}:</strong> ${article.title.en} is often flattened into a personality issue, as if some people simply “have it” and others do not. In premium campaigns, the difference is usually structural: preparation quality, clarity of direction and whether the talent can stay precise when the pressure becomes visible.`,
        `<strong>${longReadSectionLabels.en.misconceptions}:</strong> A frequent misunderstanding is to treat this topic as soft advice rather than a commercial performance system. In reality, it affects approvals, team confidence, pace on set and whether a client experiences the talent as dependable or draining.`,
        `<strong>${longReadSectionLabels.en.misconceptions}:</strong> Teams sometimes assume this area will correct itself with more exposure. What actually changes outcomes is deliberate coaching, stronger language around expectations and a model who knows how to respond without becoming stiff, defensive or vague.`,
      ],
      index,
    ),
    fr: pickVariant(
      [
        `<strong>${longReadSectionLabels.fr.misconceptions}:</strong> ${article.title.fr} est souvent réduit à une affaire de personnalité, comme si certains talents “l’avaient” naturellement et d’autres non. Dans les campagnes premium, la différence vient surtout de la structure: qualité de préparation, clarté de direction et capacité à rester précis quand la pression devient réelle.`,
        `<strong>${longReadSectionLabels.fr.misconceptions}:</strong> Une confusion fréquente consiste à traiter ce sujet comme un conseil vague plutôt que comme un système de performance commerciale. En réalité, il influence les validations, la confiance de l’équipe, le rythme de plateau et le ressenti client face au talent.`,
        `<strong>${longReadSectionLabels.fr.misconceptions}:</strong> Les équipes pensent parfois que ce point se réglera seul avec davantage d’exposition. Ce qui change vraiment les résultats, c’est un accompagnement délibéré, un langage d’attentes plus net et un talent capable de répondre sans se raidir, se défendre ou se dissoudre.`,
      ],
      index,
    ),
    es: pickVariant(
      [
        `<strong>${longReadSectionLabels.es.misconceptions}:</strong> ${article.title.es} suele reducirse a una cuestión de personalidad, como si algunas personas simplemente “lo tuvieran” y otras no. En campañas premium, la diferencia suele ser estructural: calidad de preparación, claridad de dirección y capacidad de seguir siendo preciso cuando la presión se vuelve visible.`,
        `<strong>${longReadSectionLabels.es.misconceptions}:</strong> Un malentendido frecuente es tratar este tema como consejo blando y no como sistema de rendimiento comercial. En realidad afecta aprobaciones, confianza del equipo, ritmo de set y la sensación de fiabilidad que recibe el cliente.`,
        `<strong>${longReadSectionLabels.es.misconceptions}:</strong> A veces los equipos creen que esta área se corregirá sola con más exposición. Lo que realmente cambia los resultados es el entrenamiento deliberado, un lenguaje más claro sobre expectativas y un talento capaz de responder sin ponerse rígido, defensivo o ambiguo.`,
      ],
      index,
    ),
    it: pickVariant(
      [
        `<strong>${longReadSectionLabels.it.misconceptions}:</strong> ${article.title.it} viene spesso ridotto a un fatto di personalità, come se alcuni talenti semplicemente “lo avessero” e altri no. Nelle campagne premium la differenza è quasi sempre strutturale: qualità della preparazione, chiarezza della direzione e capacità di restare precisi quando la pressione diventa evidente.`,
        `<strong>${longReadSectionLabels.it.misconceptions}:</strong> Un fraintendimento ricorrente è trattare questo tema come consiglio generico invece che come sistema di performance commerciale. In realtà influenza approvazioni, fiducia del team, ritmo di set e il modo in cui il cliente percepisce l’affidabilità del talento.`,
        `<strong>${longReadSectionLabels.it.misconceptions}:</strong> A volte i team pensano che quest’area si corregga da sola con maggiore esposizione. Ciò che cambia davvero i risultati è un training deliberato, un linguaggio più chiaro sulle aspettative e un talento capace di reagire senza irrigidirsi, difendersi o restare vago.`,
      ],
      index,
    ),
  }
}

function buildLegacyKeywords(article) {
  const titleTerms = article.title.en
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, ' ')
    .split(/\s+/)
    .filter((term) => term.length > 2)

  const baseKeywords = [
    ...titleTerms,
    article.category.en.toLowerCase(),
    'brief',
    'intent',
    'camera',
    'timing',
    'confidence',
    'professionalism',
    'set-etiquette',
    'client-readiness',
    'execution',
    'adaptability',
    'consistency',
    'feedback-loop',
    'brand-fit',
    'portfolio-value',
    'creative-direction',
    'discipline',
    'clarity',
    'presence',
  ]

  return Array.from(new Set(baseKeywords)).slice(0, 20).join(', ')
}

function buildLegacyApplicationsParagraph(article, index) {
  return {
    en: pickVariant(
      [
        `<strong>${longReadSectionLabels.en.applications}:</strong> ${article.title.en} directly shapes how a model behaves in castings, editorial sets, beauty close-ups, e-commerce pacing, showroom appointments and campaign shoots where every minute of clarity improves the client experience.`,
        `<strong>${longReadSectionLabels.en.applications}:</strong> Across runway, fittings, backstage preparation, press-facing activations and final image selection, this topic influences how efficiently teams move and how confidently talent can support the intended brand narrative.`,
        `<strong>${longReadSectionLabels.en.applications}:</strong> In commercial production, this subject affects far more than performance alone. It touches timing, approval rhythm, team trust, wardrobe handling, camera response and the consistency clients need when budgets and expectations are high.`,
      ],
      index,
    ),
    fr: pickVariant(
      [
        `<strong>${longReadSectionLabels.fr.applications}:</strong> ${article.title.fr} influence directement la manière dont un talent se présente en casting, sur un plateau éditorial, en beauty close-up, en e-commerce, en showroom et en campagne où chaque minute de clarté améliore l’expérience client.`,
        `<strong>${longReadSectionLabels.fr.applications}:</strong> Entre runway, fittings, préparation backstage, activations presse et sélection finale des images, ce sujet détermine la fluidité des équipes et la capacité du talent à servir le récit de marque sans rupture.`,
        `<strong>${longReadSectionLabels.fr.applications}:</strong> En production commerciale, ce thème dépasse largement la simple performance. Il agit sur le rythme, les validations, la confiance d’équipe, la gestion du vêtement, la réponse caméra et la constance attendue par les clients à fort niveau d’exigence.`,
      ],
      index,
    ),
    es: pickVariant(
      [
        `<strong>${longReadSectionLabels.es.applications}:</strong> ${article.title.es} influye directamente en cómo se presenta un talento en castings, sets editoriales, beauty close-ups, e-commerce, showroom appointments y campañas donde cada minuto de claridad mejora la experiencia del cliente.`,
        `<strong>${longReadSectionLabels.es.applications}:</strong> Entre runway, fittings, preparación backstage, activaciones de prensa y selección final de imágenes, este tema condiciona la fluidez del equipo y la capacidad del talento para sostener la narrativa de marca sin fricción.`,
        `<strong>${longReadSectionLabels.es.applications}:</strong> En producción comercial, este asunto va mucho más allá de la performance. Afecta el ritmo, las aprobaciones, la confianza del equipo, el manejo del vestuario, la respuesta ante cámara y la consistencia que exigen los clientes.`,
      ],
      index,
    ),
    it: pickVariant(
      [
        `<strong>${longReadSectionLabels.it.applications}:</strong> ${article.title.it} incide direttamente su come un talento si presenta in casting, set editoriali, beauty close-up, e-commerce, showroom appointment e campagne dove ogni minuto di chiarezza migliora l’esperienza cliente.`,
        `<strong>${longReadSectionLabels.it.applications}:</strong> Tra runway, fitting, preparazione backstage, attivazioni stampa e selezione finale delle immagini, questo tema condiziona la fluidità del team e la capacità del talento di sostenere il racconto del brand senza fratture.`,
        `<strong>${longReadSectionLabels.it.applications}:</strong> Nella produzione commerciale, questo argomento va ben oltre la performance. Influenza ritmo, approvazioni, fiducia del team, gestione del capo, risposta alla camera e costanza richiesta dai clienti più esigenti.`,
      ],
      index,
    ),
  }
}

function buildLegacyPitfallsParagraph(article, index) {
  return {
    en: pickVariant(
      [
        `<strong>${longReadSectionLabels.en.pitfalls}:</strong> When this area is neglected, the consequences surface quickly: missed cues, slower approvals, repeated corrections, tension between creative and production teams, and a model who looks increasingly uncertain as the day progresses.`,
        `<strong>${longReadSectionLabels.en.pitfalls}:</strong> Weak execution here can cost more than a disappointing image. It can produce reshoots, damage first impressions with clients, undermine an agent’s confidence in placement, and make the talent feel exposed instead of supported.`,
        `<strong>${longReadSectionLabels.en.pitfalls}:</strong> The real risk is cumulative. One misunderstanding becomes another, then another, until timing breaks down, energy drops, trust thins out and the whole shoot begins to lose both creative sharpness and commercial efficiency.`,
      ],
      index,
    ),
    fr: pickVariant(
      [
        `<strong>${longReadSectionLabels.fr.pitfalls}:</strong> Lorsque ce sujet est négligé, les conséquences apparaissent vite: signaux manqués, validations plus lentes, corrections répétées, tension entre création et production, puis un talent qui semble de plus en plus fragile au fil de la journée.`,
        `<strong>${longReadSectionLabels.fr.pitfalls}:</strong> Une mauvaise maîtrise ici coûte plus qu’une image décevante. Elle peut générer des reshoots, fragiliser la première impression client, réduire la confiance de l’agent et faire sentir au talent qu’il est exposé plutôt qu’accompagné.`,
        `<strong>${longReadSectionLabels.fr.pitfalls}:</strong> Le risque est surtout cumulatif. Un malentendu en appelle un autre, jusqu’à casser le rythme, réduire l’énergie, affaiblir la confiance et faire perdre au shoot à la fois sa précision créative et son efficacité commerciale.`,
      ],
      index,
    ),
    es: pickVariant(
      [
        `<strong>${longReadSectionLabels.es.pitfalls}:</strong> Cuando este aspecto se descuida, las consecuencias aparecen rápido: señales perdidas, aprobaciones más lentas, correcciones repetidas, tensión entre creación y producción y un talento que empieza a verse menos seguro con el paso de las horas.`,
        `<strong>${longReadSectionLabels.es.pitfalls}:</strong> Una ejecución débil aquí cuesta más que una imagen floja. Puede provocar reshoots, dañar la primera impresión del cliente, reducir la confianza del agente y hacer que el talento se sienta expuesto en lugar de respaldado.`,
        `<strong>${longReadSectionLabels.es.pitfalls}:</strong> El riesgo real es acumulativo. Un malentendido lleva a otro hasta romper el ritmo, bajar la energía, erosionar la confianza y hacer que todo el shoot pierda nitidez creativa y eficiencia comercial.`,
      ],
      index,
    ),
    it: pickVariant(
      [
        `<strong>${longReadSectionLabels.it.pitfalls}:</strong> Quando quest’area viene trascurata, le conseguenze emergono subito: segnali mancati, approvazioni più lente, correzioni ripetute, tensione tra creativo e produzione e un talento che appare sempre meno sicuro con il passare della giornata.`,
        `<strong>${longReadSectionLabels.it.pitfalls}:</strong> Una gestione debole qui costa più di un’immagine mediocre. Può generare reshoot, compromettere la prima impressione del cliente, ridurre la fiducia dell’agente e far sentire il talento esposto invece che sostenuto.`,
        `<strong>${longReadSectionLabels.it.pitfalls}:</strong> Il rischio reale è cumulativo. Un malinteso ne genera un altro finché il ritmo si rompe, l’energia cala, la fiducia si assottiglia e l’intero shooting perde nitidezza creativa ed efficienza commerciale.`,
      ],
      index,
    ),
  }
}

function buildLegacyBenefitsParagraph(article, index) {
  return {
    en: pickVariant(
      [
        `<strong>${longReadSectionLabels.en.benefits}:</strong> When this capability is trained well, the benefits are visible immediately: clearer communication, calmer decision-making, faster first-take success, stronger rebooking potential and a more persuasive portfolio over time.`,
        `<strong>${longReadSectionLabels.en.benefits}:</strong> The gains are practical and cumulative: fewer correction rounds, stronger client reassurance, better energy management, more elegant execution under pressure and a talent profile that feels commercially dependable.`,
        `<strong>${longReadSectionLabels.en.benefits}:</strong> At its best, this topic improves both image quality and working atmosphere. Teams move faster, the talent feels safer, the client trusts sooner and the resulting material carries more authority from the first frame.`,
      ],
      index,
    ),
    fr: pickVariant(
      [
        `<strong>${longReadSectionLabels.fr.benefits}:</strong> Lorsqu’elle est bien entraînée, cette compétence produit des bénéfices immédiatement visibles: communication plus claire, décisions plus calmes, meilleures premières prises, potentiel de rebooking renforcé et portfolio plus convaincant dans le temps.`,
        `<strong>${longReadSectionLabels.fr.benefits}:</strong> Les gains sont concrets et cumulatifs: moins de corrections, plus de réassurance client, meilleure gestion de l’énergie, exécution plus élégante sous pression et profil talent plus fiable commercialement.`,
        `<strong>${longReadSectionLabels.fr.benefits}:</strong> À son meilleur niveau, ce sujet améliore à la fois la qualité d’image et l’ambiance de travail. Les équipes avancent plus vite, le talent se sent plus solide, le client fait confiance plus tôt et la matière produite gagne en autorité dès les premières images.`,
      ],
      index,
    ),
    es: pickVariant(
      [
        `<strong>${longReadSectionLabels.es.benefits}:</strong> Cuando esta capacidad se entrena bien, los beneficios se ven enseguida: comunicación más clara, decisiones más serenas, mejores primeras tomas, mayor potencial de rebooking y un portfolio más convincente con el tiempo.`,
        `<strong>${longReadSectionLabels.es.benefits}:</strong> Las ventajas son prácticas y acumulativas: menos rondas de corrección, mayor tranquilidad para el cliente, mejor gestión de energía, ejecución más elegante bajo presión y un perfil de talento más confiable comercialmente.`,
        `<strong>${longReadSectionLabels.es.benefits}:</strong> En su mejor versión, este tema mejora tanto la calidad de imagen como la atmósfera de trabajo. Los equipos avanzan más rápido, el talento se siente más seguro, el cliente confía antes y el material final tiene más autoridad desde el primer frame.`,
      ],
      index,
    ),
    it: pickVariant(
      [
        `<strong>${longReadSectionLabels.it.benefits}:</strong> Quando questa capacità viene allenata bene, i benefici sono immediatamente visibili: comunicazione più chiara, decisioni più calme, migliori first take, maggiore potenziale di rebooking e portfolio più convincente nel tempo.`,
        `<strong>${longReadSectionLabels.it.benefits}:</strong> I vantaggi sono pratici e cumulativi: meno correzioni, maggiore rassicurazione per il cliente, migliore gestione dell’energia, esecuzione più elegante sotto pressione e un profilo talento più affidabile sul piano commerciale.`,
        `<strong>${longReadSectionLabels.it.benefits}:</strong> Al suo livello migliore, questo tema migliora sia la qualità dell’immagine sia l’atmosfera di lavoro. I team avanzano più velocemente, il talento si sente più saldo, il cliente si fida prima e il materiale finale ha più autorevolezza fin dal primo frame.`,
      ],
      index,
    ),
  }
}

function buildLegacyConclusionParagraph(article, index) {
  return {
    en: pickVariant(
      [
        `<strong>${longReadSectionLabels.en.conclusion}:</strong> ${article.title.en} matters because careers are rarely changed by one dramatic moment; they are changed by repeatable, high-quality decisions. EOEX exists to make those decisions feel more grounded, more elegant and far less lonely for the talent making them.`,
        `<strong>${longReadSectionLabels.en.conclusion}:</strong> What stays with clients is not only beauty or presence, but the feeling that the talent understood the moment. That is why this topic matters, and why EOEX keeps returning to it with patience, rigour and an unusually human standard of preparation.`,
        `<strong>${longReadSectionLabels.en.conclusion}:</strong> The deeper value of this topic is confidence without performance theatre. When EOEX trains it well, the result is a model who does not simply look ready, but feels steady, readable and genuinely persuasive in the room.`,
      ],
      index,
    ),
    fr: pickVariant(
      [
        `<strong>${longReadSectionLabels.fr.conclusion}:</strong> ${article.title.fr} compte parce qu’une carrière se transforme rarement par un seul moment spectaculaire. Elle se construit par des décisions répétables et de qualité, et EOEX existe pour rendre ces décisions plus lucides, plus élégantes et moins solitaires pour le talent qui les prend.`,
        `<strong>${longReadSectionLabels.fr.conclusion}:</strong> Ce que les clients retiennent n’est pas seulement la beauté ou la présence, mais le sentiment que le talent a compris le moment. C’est pourquoi ce sujet reste central, et pourquoi EOEX y revient avec patience, rigueur et une exigence profondément humaine.`,
        `<strong>${longReadSectionLabels.fr.conclusion}:</strong> La vraie valeur de ce sujet, c’est une confiance sans théâtre. Lorsqu’EOEX le travaille bien, le résultat n’est pas seulement un mannequin qui semble prêt, mais un talent stable, lisible et réellement convaincant dans la pièce.`,
      ],
      index,
    ),
    es: pickVariant(
      [
        `<strong>${longReadSectionLabels.es.conclusion}:</strong> ${article.title.es} importa porque una carrera rara vez cambia por un solo momento espectacular. Cambia por decisiones repetibles y de calidad, y EOEX existe para que esas decisiones se sientan más claras, más elegantes y mucho menos solas para quien debe tomarlas.`,
        `<strong>${longReadSectionLabels.es.conclusion}:</strong> Lo que recuerdan los clientes no es solo belleza o presencia, sino la sensación de que el talento entendió el momento. Por eso este tema es central y por eso EOEX vuelve a él con paciencia, rigor y una preparación profundamente humana.`,
        `<strong>${longReadSectionLabels.es.conclusion}:</strong> El valor más profundo de este tema es una confianza sin teatralidad. Cuando EOEX lo entrena bien, el resultado no es solo un talento que parece listo, sino alguien estable, legible y genuinamente convincente en la sala.`,
      ],
      index,
    ),
    it: pickVariant(
      [
        `<strong>${longReadSectionLabels.it.conclusion}:</strong> ${article.title.it} conta perché una carriera raramente cambia per un solo momento spettacolare. Cambia attraverso decisioni ripetibili e di qualità, ed EOEX esiste per rendere quelle decisioni più lucide, più eleganti e meno solitarie per il talento che deve prenderle.`,
        `<strong>${longReadSectionLabels.it.conclusion}:</strong> Ciò che resta ai clienti non è solo bellezza o presenza, ma la sensazione che il talento abbia capito davvero il momento. Per questo il tema resta centrale, ed è per questo che EOEX ci torna con pazienza, rigore e uno standard di preparazione profondamente umano.`,
        `<strong>${longReadSectionLabels.it.conclusion}:</strong> Il valore più profondo di questo tema è una fiducia senza teatralità. Quando EOEX lo allena bene, il risultato non è solo un talento che sembra pronto, ma una persona stabile, leggibile e autenticamente convincente nella stanza.`,
      ],
      index,
    ),
  }
}

function buildTopicArticle(topic, index) {
  const title = formatTopicTitle(topic)
  const cluster = detectTopicCluster(topic)
  const keywords = buildTopicKeywords(topic).join(', ')
  const misconceptionParagraph = buildTopicMisconceptionParagraph(topic, index)
  const bridgeParagraph = buildTopicBridgeParagraph(topic, title, index)
  const conclusionParagraph = buildTopicConclusionParagraph(title, topic, index)

  const enAngle = pickVariant(
    [
      'On premium sets, this topic is less a trick and more a quality-control system.',
      'Top agencies treat this topic as a risk-management layer, not an optional stylistic flourish.',
      'In high-pressure campaign weeks, this topic is one of the clearest predictors of rebooking.',
    ],
    index,
  )

  const frAngle = pickVariant(
    [
      'Sur les plateaux premium, ce sujet relève d’un système de contrôle qualité plus que d’un effet de style.',
      'Les agences exigeantes le traitent comme une couche de gestion du risque, pas comme un détail décoratif.',
      'En semaine de campagne, ce sujet devient un indicateur concret de rebooking.',
    ],
    index,
  )

  const esAngle = pickVariant(
    [
      'En producciones premium, este tema funciona como sistema de control de calidad y no como recurso estético aislado.',
      'Las agencias sólidas lo tratan como gestión de riesgo operativo, no como adorno creativo.',
      'En semanas de campaña con presión real, este punto anticipa la probabilidad de rebooking.',
    ],
    index,
  )

  const itAngle = pickVariant(
    [
      'Nei set premium questo tema è un sistema di controllo qualità, non un semplice effetto stilistico.',
      'Le agenzie più strutturate lo considerano gestione del rischio operativo, non un dettaglio accessorio.',
      'Nelle settimane di campagna ad alta pressione, questo punto anticipa la probabilità di rebooking.',
    ],
    index,
  )

  return {
    id: `topic-${slugifyTopic(topic)}-${index + 1}`,
    image: topicCoverPool[index % topicCoverPool.length],
    category: cluster.category,
    title: {
      en: `${title}: an editorial intelligence dossier for fashion production teams.`,
      fr: `${title} : dossier éditorial d’intelligence opérationnelle pour les équipes mode.`,
      es: `${title}: dossier editorial de inteligencia operativa para equipos de moda.`,
      it: `${title}: dossier editoriale di intelligenza operativa per team fashion.`,
    },
    excerpt: {
      en: `A differentiated long-read on ${topic}, with applications, misconceptions, risk mapping and EOEX execution protocol.`,
      fr: `Un long format différencié sur ${topic}, avec usages, idées reçues, cartographie des risques et protocole EOEX.`,
      es: `Un long-read diferenciado sobre ${topic}, con aplicaciones, errores comunes, mapeo de riesgo y protocolo EOEX.`,
      it: `Un long-read differenziato su ${topic}, con applicazioni, fraintendimenti, mappa dei rischi e protocollo EOEX.`,
    },
    body: {
      en: [
        `<strong>${longReadSectionLabels.en.definition}:</strong> ${title} defines how a model converts direction into repeatable, camera-legible choices without losing elegance or commercial clarity. ${enAngle}`,
        `<strong>${longReadSectionLabels.en.applications}:</strong> In runway, editorial, beauty, fit, e-commerce and campaign film sets, ${topic} supports pacing, team synchronization and cleaner approvals from creative and client stakeholders.`,
        `<strong>${longReadSectionLabels.en.keywords}:</strong> <strong>${keywords}</strong>.`,
        misconceptionParagraph.en,
        `<strong>${longReadSectionLabels.en.pitfalls}:</strong> Misreading this topic creates costly reshoots for end clients, avoidable tension for agents, weaker placement credibility for academies, and confidence erosion for talent under live direction.`,
        bridgeParagraph.en,
        `<strong>${longReadSectionLabels.en.benefits}:</strong> Better first-take accuracy, stronger creative trust, reduced correction rounds, improved conversion from casting to booking, and durable portfolio quality with measurable repeatability.`,
        conclusionParagraph.en,
      ],
      fr: [
        `<strong>${longReadSectionLabels.fr.definition}:</strong> ${title} décrit la manière dont un talent transforme une direction créative en choix lisibles caméra, constants et compatibles avec l’exigence commerciale. ${frAngle}`,
        `<strong>${longReadSectionLabels.fr.applications}:</strong> En runway, éditorial, beauté, fit, e-commerce et film de campagne, ${topic} fluidifie le rythme de production, la coordination des équipes et la validation client.`,
        `<strong>${longReadSectionLabels.fr.keywords}:</strong> <strong>${keywords}</strong>.`,
        misconceptionParagraph.fr,
        `<strong>${longReadSectionLabels.fr.pitfalls}:</strong> Une mauvaise compréhension entraîne des reshoots pour le client final, une pression réputationnelle pour l’agent, une crédibilité affaiblie pour l’académie et une perte de confiance chez le talent.`,
        bridgeParagraph.fr,
        `<strong>${longReadSectionLabels.fr.benefits}:</strong> Plus de justesse dès la première prise, plus de confiance créative, moins de corrections, plus de conversions casting-booking et une valeur de book durable.`,
        conclusionParagraph.fr,
      ],
      es: [
        `<strong>${longReadSectionLabels.es.definition}:</strong> ${title} explica cómo el talento convierte dirección en decisiones repetibles, legibles para cámara y útiles para objetivo comercial. ${esAngle}`,
        `<strong>${longReadSectionLabels.es.applications}:</strong> En runway, editorial, beauty, fit, e-commerce y campañas audiovisuales, ${topic} mejora ritmo de ejecución, coordinación interequipos y consistencia de entregables.`,
        `<strong>${longReadSectionLabels.es.keywords}:</strong> <strong>${keywords}</strong>.`,
        misconceptionParagraph.es,
        `<strong>${longReadSectionLabels.es.pitfalls}:</strong> La mala lectura de este tema produce reshoots costosos para cliente final, fricción para agentes, menor credibilidad académica y fatiga psicológica para el talento en producción real.`,
        bridgeParagraph.es,
        `<strong>${longReadSectionLabels.es.benefits}:</strong> Más precisión en primera toma, menos rondas de corrección, más confianza de dirección creativa, mejor tasa de booking y crecimiento de portfolio con consistencia medible.`,
        conclusionParagraph.es,
      ],
      it: [
        `<strong>${longReadSectionLabels.it.definition}:</strong> ${title} indica come il talento traduce la direzione creativa in scelte ripetibili, leggibili in camera e coerenti con l’obiettivo commerciale. ${itAngle}`,
        `<strong>${longReadSectionLabels.it.applications}:</strong> In runway, editoriale, beauty, fit, e-commerce e campagne video, ${topic} rafforza ritmo operativo, coordinamento tra reparti e qualità dei deliverable.`,
        `<strong>${longReadSectionLabels.it.keywords}:</strong> <strong>${keywords}</strong>.`,
        misconceptionParagraph.it,
        `<strong>${longReadSectionLabels.it.pitfalls}:</strong> Se mal gestito, genera reshoot costosi per il cliente finale, attrito reputazionale per gli agenti, minore autorevolezza per l’academy e calo di sicurezza per il talento.`,
        bridgeParagraph.it,
        `<strong>${longReadSectionLabels.it.benefits}:</strong> Più accuratezza al primo take, meno correzioni, maggiore fiducia creativa, migliore conversione casting-booking e portfolio più solido nel medio periodo.`,
        conclusionParagraph.it,
      ],
    },
    sourceNotes: buildTopicSourceNotes(topic, cluster),
  }
}

const expandedTopicArticles = topicNames.map((topic, index) => buildTopicArticle(topic, index))

const legacyArticleSourceNotes = {
  contracts: [
    { label: 'Creative brief agreement discipline', url: referenceLibrary.creativeBrief },
    { label: 'Professional model contract context', url: referenceLibrary.modeling },
    { label: 'Runway market pressure and deliverables', url: referenceLibrary.runwayCoverage },
  ],
  'mental-prep': [
    { label: 'Professional model workload context', url: referenceLibrary.modeling },
    { label: 'Runway cycle pressure and seasonal rhythm', url: referenceLibrary.runwayCoverage },
    { label: 'Fashion production environment framing', url: referenceLibrary.fashionPhotography },
  ],
  portfolio: [
    { label: 'Fashion photography composition lineage', url: referenceLibrary.fashionPhotography },
    { label: 'Model market positioning context', url: referenceLibrary.modeling },
    { label: 'Runway editorial benchmark references', url: referenceLibrary.runwayCoverage },
  ],
  'casting-room': [
    { label: 'Model runway and casting context', url: referenceLibrary.modeling },
    { label: 'Creative brief decision framing', url: referenceLibrary.creativeBrief },
    { label: 'Current show ecosystem snapshots', url: referenceLibrary.runwayCoverage },
  ],
  'wellbeing-routine': [
    { label: 'Professional model lifecycle notes', url: referenceLibrary.modeling },
    { label: 'Set behavior and image pressure context', url: referenceLibrary.fashionPhotography },
    { label: 'Runway seasonal performance cadence', url: referenceLibrary.runwayCoverage },
  ],
  'client-briefs': [
    { label: 'Creative brief structural baseline', url: referenceLibrary.creativeBrief },
    { label: 'Moodboard alignment in visual teams', url: referenceLibrary.moodBoard },
    { label: 'Fashion campaign ecosystem references', url: referenceLibrary.runwayCoverage },
  ],
  'mother-agency': [
    { label: 'Agency and representation history context', url: referenceLibrary.modeling },
    { label: 'Creative and client brief fit logic', url: referenceLibrary.creativeBrief },
    { label: 'Editorial and runway market shifts', url: referenceLibrary.runwayCoverage },
  ],
  'set-etiquette': [
    { label: 'Model set etiquette and role clarity', url: referenceLibrary.modeling },
    { label: 'Fashion photography team language', url: referenceLibrary.fashionPhotography },
    { label: 'Current runway production ecosystem', url: referenceLibrary.runwayCoverage },
  ],
  'brand-positioning': [
    { label: 'Creative brief message architecture', url: referenceLibrary.creativeBrief },
    { label: 'Model brand identity context', url: referenceLibrary.modeling },
    { label: 'Fashion image and editorial signal references', url: referenceLibrary.fashionPhotography },
  ],
}

function enrichLegacyArticles(existingArticles) {
  return existingArticles.map((article, index) => {
    const firstParagraph = article.body.en[0] || ''
    const keywords = buildLegacyKeywords(article)
    const applicationsParagraph = buildLegacyApplicationsParagraph(article, index)
    const misconceptionParagraph = buildLegacyMisconceptionParagraph(article, index)
    const pitfallsParagraph = buildLegacyPitfallsParagraph(article, index)
    const bridgeParagraph = buildLegacyBridgeParagraph(article, index)
    const benefitsParagraph = buildLegacyBenefitsParagraph(article, index)
    const conclusionParagraph = buildLegacyConclusionParagraph(article, index)

    return {
      ...article,
      body: {
        en: [
          `<strong>${longReadSectionLabels.en.definition}:</strong> ${firstParagraph}`,
          applicationsParagraph.en,
          `<strong>${longReadSectionLabels.en.keywords}:</strong> <strong>${keywords}</strong>.`,
          misconceptionParagraph.en,
          pitfallsParagraph.en,
          bridgeParagraph.en,
          benefitsParagraph.en,
          conclusionParagraph.en,
        ],
        fr: [
          `<strong>${longReadSectionLabels.fr.definition}:</strong> ${article.body.fr[0] || ''}`,
          applicationsParagraph.fr,
          `<strong>${longReadSectionLabels.fr.keywords}:</strong> <strong>${keywords}</strong>.`,
          misconceptionParagraph.fr,
          pitfallsParagraph.fr,
          bridgeParagraph.fr,
          benefitsParagraph.fr,
          conclusionParagraph.fr,
        ],
        es: [
          `<strong>${longReadSectionLabels.es.definition}:</strong> ${article.body.es[0] || ''}`,
          applicationsParagraph.es,
          `<strong>${longReadSectionLabels.es.keywords}:</strong> <strong>${keywords}</strong>.`,
          misconceptionParagraph.es,
          pitfallsParagraph.es,
          bridgeParagraph.es,
          benefitsParagraph.es,
          conclusionParagraph.es,
        ],
        it: [
          `<strong>${longReadSectionLabels.it.definition}:</strong> ${article.body.it[0] || ''}`,
          applicationsParagraph.it,
          `<strong>${longReadSectionLabels.it.keywords}:</strong> <strong>${keywords}</strong>.`,
          misconceptionParagraph.it,
          pitfallsParagraph.it,
          bridgeParagraph.it,
          benefitsParagraph.it,
          conclusionParagraph.it,
        ],
      },
      sourceNotes: legacyArticleSourceNotes[article.id] || [
        { label: `${formatTopicTitle(article.id.replace(/-/g, ' '))} research context`, url: referenceLibrary.modeling },
      ],
      editorialVariant: index,
    }
  })
}

const enrichedArticles = enrichLegacyArticles(articles)

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function getBlogQueryTerms() {
  return Array.from(
    new Set(
      state.blogQuery
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .filter((term) => term.length > 1),
    ),
  )
}

function highlightText(text, terms) {
  if (!terms.length) {
    return escapeHtml(text)
  }

  const pattern = new RegExp(`(${terms.map((term) => escapeRegExp(term)).join('|')})`, 'gi')
  const parts = String(text).split(pattern)

  return parts
    .map((part) => {
      if (!part) {
        return ''
      }

      const isMatch = terms.some((term) => part.toLowerCase() === term)
      if (isMatch) {
        return `<mark class="blog-hit">${escapeHtml(part)}</mark>`
      }

      return escapeHtml(part)
    })
    .join('')
}

function buildBlogFilterModel(lang) {
  const allArticles = [...enrichedArticles, ...expandedTopicArticles]
  const byCategoryKey = new Map()

  allArticles.forEach((article) => {
    const key = article.category.en
    if (!byCategoryKey.has(key)) {
      byCategoryKey.set(key, article.category[lang])
    }
  })

  const categoryTags = Array.from(byCategoryKey.entries())
    .map(([key, label]) => ({ key, label }))
    .sort((left, right) => left.label.localeCompare(right.label, localeMap[lang]))

  const normalizedQuery = state.blogQuery.trim().toLowerCase()

  const filteredArticles = allArticles.filter((article) => {
    if (state.blogTag !== 'all' && article.category.en !== state.blogTag) {
      return false
    }

    if (!normalizedQuery) {
      return true
    }

    const searchableText = [
      article.category[lang],
      article.title[lang],
      article.excerpt[lang],
      ...article.body[lang],
    ]
      .join(' ')
      .toLowerCase()

    return searchableText.includes(normalizedQuery)
  })

  return {
    categoryTags,
    filteredArticles,
  }
}

function monthLabel(lang, monthIndex) {
  return new Intl.DateTimeFormat(localeMap[lang], { month: 'short' }).format(new Date(2026, monthIndex, 1))
}

function longMonthLabel(lang, monthIndex) {
  return new Intl.DateTimeFormat(localeMap[lang], { month: 'long' }).format(new Date(2026, monthIndex, 1))
}

function getMagazineIssues(lang) {
  return magazineCovers.map((cover, index) => {
    const parsedDate = cover.name.match(/-\s([A-Za-z]+)\s(\d{2,4})$/)
    const parsedMonth = parsedDate ? englishMonths[parsedDate[1].toLowerCase()] : undefined
    const parsedYear = parsedDate ? Number(parsedDate[2].length === 2 ? `20${parsedDate[2]}` : parsedDate[2]) : undefined
    const issueDate =
      typeof parsedMonth === 'number' && Number.isFinite(parsedYear)
        ? new Date(parsedYear, parsedMonth, 1)
        : new Date(2025, 2 + index, 1)
    const monthYear = new Intl.DateTimeFormat(localeMap[lang], {
      month: 'long',
      year: 'numeric',
    }).format(issueDate)

    const title = cover.name
      .replace(/^DUNEX\s-\s/, '')
      .replace(/\s-\s[A-Za-z]+\s\d{2,4}$/, '')

    return {
      issue: String(index + 1).padStart(2, '0'),
      monthYear,
      title,
      image: cover.image,
    }
  })
}

function renderGalleryCTA(langCopy, sectionKey, totalCount) {
  const expanded = Boolean(state.expandedSections[sectionKey])
  const label = expanded ? langCopy.showLess : `${langCopy.showMore} · ${totalCount} ${langCopy.galleryItems}`

  return `
    <div class="gallery-cta-shell">
      <button type="button" class="button button-secondary gallery-cta" data-toggle-gallery="${sectionKey}">${label}</button>
    </div>
  `
}

function isMobileFormFactor() {
  return state.formFactor === 'mobile'
}

function renderEventTile(event, lang, { mobileLabelOnly = false } = {}) {
  return `
    <article class="image-card event-card">
      <img src="${event.photo}" alt="${event.location[lang]}" loading="lazy" decoding="async">
      <div class="overlay-panel ${mobileLabelOnly ? 'overlay-panel--label-only' : ''}">
        <span>${event.title[lang]}</span>
        ${mobileLabelOnly ? '' : `<h3>${event.location[lang]}</h3><p>${event.summary[lang]}</p>`}
      </div>
    </article>`
}

function renderPeopleTile(item, key, lang) {
  const mobileLabelOnly = isMobileFormFactor()

  return `
    <article class="image-card portrait-card portrait-card--compact">
      <img src="${item.photo}" alt="${item.name}" loading="lazy" decoding="async">
      <div class="overlay-panel ${mobileLabelOnly ? 'overlay-panel--label-only' : ''}">
        <span>${item.name}</span>
        ${mobileLabelOnly ? '' : `<p>${item[key][lang]}</p>`}
      </div>
    </article>`
}

function renderBlogCard(article, lang, queryTerms, { compact = false } = {}) {
  return `
    <article class="blog-card glass-card ${compact ? 'blog-card--compact' : ''}">
      <img src="${article.image}" alt="${article.title[lang]}" loading="lazy" decoding="async">
      <div class="blog-card__body ${compact ? 'blog-card__body--compact' : ''}">
        <span>${article.category[lang]}</span>
        <h3>${highlightText(article.title[lang], queryTerms)}</h3>
        ${compact ? '' : `<p>${highlightText(article.excerpt[lang], queryTerms)}</p>`}
        <button type="button" class="button button-secondary" data-article-id="${article.id}">${copy[state.lang].readArticle}</button>
      </div>
    </article>`
}

function renderGridWithOptionalExpansion({ sectionKey, items, collapsedCount, renderItem, langCopy, gridClass }) {
  const expanded = Boolean(state.expandedSections[sectionKey])
  const hasOverflow = items.length > collapsedCount
  const visibleItems = hasOverflow && !expanded ? items.slice(0, collapsedCount) : items

  return `
    <div class="${gridClass}">
      ${visibleItems.map(renderItem).join('')}
    </div>
    ${hasOverflow ? renderGalleryCTA(langCopy, sectionKey, items.length) : ''}
  `
}

function renderNav(langCopy) {
  const anchors = ['home', 'about', 'events', 'designers', 'talents', 'partners', 'magazine', 'press', 'contact', 'blog']

  return `
    <header class="site-header">
      <div class="brand-lockup">
        <a class="brand-mark" href="#home">EOEX <span>Studio</span></a>
        <p class="brand-caption">Fashion talent management · academy · client advisory</p>
      </div>
      <button class="nav-toggle" type="button" aria-expanded="${state.mobileNavOpen}" aria-controls="site-nav">
        <span></span><span></span><span></span>
      </button>
      <nav id="site-nav" class="site-nav ${state.mobileNavOpen ? 'is-open' : ''}">
        ${langCopy.nav.map((label, index) => `<a href="#${anchors[index]}" class="nav-link">${label}</a>`).join('')}
      </nav>
      <div class="lang-switch" aria-label="${langCopy.languageLabel}">
        <label class="lang-select-shell ${state.mobileNavOpen ? 'is-open' : ''}">
          <span class="lang-select-icon">${languageOptions[state.lang].flag}</span>
          <select id="languageSelect" class="lang-select" aria-label="${langCopy.languageLabel}">
            ${languages
              .map(
                (lang) => `
                  <option value="${lang}" ${state.lang === lang ? 'selected' : ''}>
                    ${languageOptions[lang].flag} ${languageOptions[lang].label}
                  </option>`,
              )
              .join('')}
          </select>
        </label>
      </div>
    </header>
  `
}

function renderHero(lang, langCopy) {
  return `
    <section id="home" class="hero-shell reveal">
      <div class="hero-stage">
        <div class="hero-copy">
          <span class="eyebrow">${langCopy.heroEyebrow}</span>
          <h1>${langCopy.heroTitle}</h1>
          <p class="hero-intro">${langCopy.heroIntro}</p>
          <blockquote>${langCopy.heroQuote}</blockquote>
          <div class="hero-actions">
            <a class="button button-primary" href="#contact">${langCopy.heroPrimary}</a>
            <a class="button button-secondary" href="#events">${langCopy.heroSecondary}</a>
          </div>
        </div>
      </div>
    </section>
  `
}

function renderAbout(langCopy) {
  return `
    <section id="about" class="section reveal">
      <div class="section-heading">
        <span class="section-kicker">01</span>
        <div>
          <h2>${langCopy.aboutTitle}</h2>
          <p>${langCopy.aboutLead}</p>
        </div>
      </div>
      <div class="about-grid">
        <article class="statement-card glass-card">
          <p>${langCopy.aboutBody}</p>
        </article>
        ${renderGridWithOptionalExpansion({
          sectionKey: 'services',
          items: langCopy.serviceCards,
          collapsedCount: 3,
          langCopy,
          gridClass: 'service-grid',
          renderItem: (service) => `
                <article class="service-card glass-card">
                  <span class="service-index">${service.title}</span>
                  <p>${service.text}</p>
                </article>`,
        })}
      </div>
    </section>
  `
}

function renderEvents(lang, langCopy) {
  const featuredEventCount = isMobileFormFactor() ? 2 : 4

  return `
    <section id="events" class="section reveal">
      <div class="section-heading">
        <span class="section-kicker">02</span>
        <div>
          <h2>${langCopy.eventsTitle}</h2>
          <p>${langCopy.eventsIntro}</p>
        </div>
      </div>
      <div class="events-layout events-layout--stacked">
        <aside class="calendar-card glass-card event-overview-card">
          <h3>${langCopy.calendarTitle}</h3>
          <div class="calendar-list">
            ${events
              .map(
                (event) => `
                  <div class="calendar-row">
                    <span>${monthLabel(lang, event.month)}</span>
                    <strong>${event.dayLabel}</strong>
                    <p>${event.city[lang]}</p>
                  </div>`,
              )
              .join('')}
          </div>
          <div class="past-events-card">
            <span>Archive</span>
            <p>${langCopy.pastEvents}</p>
          </div>
        </aside>
        ${renderGridWithOptionalExpansion({
          sectionKey: 'events',
          items: events,
          collapsedCount: featuredEventCount,
          langCopy,
          gridClass: 'event-grid event-grid--mirrored',
          renderItem: (event) => renderEventTile(event, lang, { mobileLabelOnly: isMobileFormFactor() }),
        })}
      </div>
    </section>
  `
}

function renderDirectorySection(id, number, title, intro, items, key, lang, langCopy) {
  return `
    <section id="${id}" class="section reveal">
      <div class="section-heading">
        <span class="section-kicker">${number}</span>
        <div>
          <h2>${title}</h2>
          <p>${intro}</p>
        </div>
      </div>
      ${renderGridWithOptionalExpansion({
        sectionKey: id,
        items,
        collapsedCount: 6,
        langCopy,
        gridClass: 'directory-grid',
        renderItem: (item) => renderPeopleTile(item, key, lang),
      })}
    </section>
  `
}

function renderPartners(lang, langCopy) {
  return `
    <section id="partners" class="section reveal">
      <div class="section-heading">
        <span class="section-kicker">05</span>
        <div>
          <h2>${langCopy.partnersTitle}</h2>
          <p>${langCopy.partnersIntro}</p>
        </div>
      </div>
      ${renderGridWithOptionalExpansion({
        sectionKey: 'partners',
        items: partners,
        collapsedCount: isMobileFormFactor() ? 2 : 4,
        langCopy,
        gridClass: 'partner-grid partner-grid--paired',
        renderItem: (partner) => `
              <article class="partner-card glass-card">
                <div class="partner-mark">${partner.mark}</div>
                <span class="partner-tier">${partner.tier}</span>
                <h3>${partner.name}</h3>
                <p>${partner.description[lang]}</p>
              </article>`,
      })}
    </section>
  `
}

function renderMagazine(lang, langCopy) {
  return `
    <section id="magazine" class="section reveal">
      <div class="section-heading">
        <span class="section-kicker">06</span>
        <div>
          <h2>${langCopy.magazineTitle}</h2>
          <p>${langCopy.magazineIntro}</p>
        </div>
      </div>
      ${renderGridWithOptionalExpansion({
        sectionKey: 'magazine',
        items: getMagazineIssues(lang),
        collapsedCount: 6,
        langCopy,
        gridClass: 'magazine-grid magazine-grid--covers',
        renderItem: (issue) => `
              <article class="cover-card cover-card--image">
                <img src="${issue.image}" alt="${issue.title}" loading="lazy" decoding="async">
                <div class="overlay-panel overlay-panel--cover">
                  <span>${langCopy.issueLabel} ${issue.issue}</span>
                  <p>${issue.monthYear}</p>
                </div>
              </article>`,
      })}
    </section>
  `
}

function renderPress(lang, langCopy) {
  return `
    <section id="press" class="section reveal">
      <div class="section-heading">
        <span class="section-kicker">07</span>
        <div>
          <h2>${langCopy.pressTitle}</h2>
          <p>${langCopy.pressIntro}</p>
        </div>
      </div>
      ${renderGridWithOptionalExpansion({
        sectionKey: 'press',
        items: pressItems,
        collapsedCount: isMobileFormFactor() ? 2 : 4,
        langCopy,
        gridClass: 'press-grid press-grid--paired',
        renderItem: (item) => `
              <article class="image-card landscape-card landscape-card--press">
                <img src="${item.photo}" alt="${item.title[lang]}">
                <div class="overlay-panel ${isMobileFormFactor() ? 'overlay-panel--label-only' : ''}">
                  <span>${item.title[lang]}</span>
                  ${isMobileFormFactor() ? '' : `<p>${item.summary[lang]}</p>`}
                </div>
              </article>`,
      })}
    </section>
  `
}

function renderContact(lang, langCopy) {
  return `
    <section id="contact" class="section reveal">
      <div class="section-heading">
        <span class="section-kicker">08</span>
        <div>
          <h2>${langCopy.contactTitle}</h2>
          <p>${langCopy.contactIntro}</p>
        </div>
      </div>
      <div class="booking-shell glass-card">
        <div class="booking-panel">
          <div class="booking-month">${longMonthLabel(lang, 5)} 2026</div>
          <div class="booking-days">
            ${bookingDays
              .map(
                (day, index) => `
                  <button type="button" class="day-pill ${state.selectedDay === index ? 'is-selected' : ''}" data-day-index="${index}">
                    <span>${day.weekday}</span>
                    <strong>${day.dayNumber}</strong>
                  </button>`,
              )
              .join('')}
          </div>
          <div class="booking-times">
            ${bookingTimes
              .map(
                (time) => `
                  <button type="button" class="time-pill ${state.selectedTime === time ? 'is-selected' : ''}" data-time="${time}">
                    ${time}
                  </button>`,
              )
              .join('')}
          </div>
        </div>
        <form class="booking-form" id="bookingForm">
          <label>
            <span>${langCopy.bookingRoleLabel}</span>
            <select name="role">
              ${langCopy.bookingRoles.map((role) => `<option>${role}</option>`).join('')}
            </select>
          </label>
          <label>
            <span>${langCopy.bookingName}</span>
            <input name="name" type="text" placeholder="${langCopy.bookingName}" required>
          </label>
          <label>
            <span>${langCopy.bookingEmail}</span>
            <input name="email" type="email" placeholder="hello@eoex.studio" required>
          </label>
          <label>
            <span>${langCopy.bookingNotes}</span>
            <textarea name="notes" rows="4" placeholder="EOEX Studio"></textarea>
          </label>
          <button type="submit" class="button button-primary button-full">${langCopy.bookingButton}</button>
          <p class="form-status ${state.statusMessage ? 'is-visible' : ''}">${state.statusMessage}</p>
        </form>
      </div>
    </section>
  `
}

function renderBlog(lang, langCopy) {
  const { categoryTags, filteredArticles } = buildBlogFilterModel(lang)
  const queryTerms = getBlogQueryTerms()
  const hasActiveBlogFilters = state.blogTag !== 'all' || state.blogQuery.trim().length > 0
  const mobileMode = isMobileFormFactor()
  const initialBlogItems = mobileMode ? filteredArticles.slice(0, 5) : filteredArticles
  const overflowBlogItems = mobileMode ? filteredArticles.slice(5) : []
  const expandedBlog = Boolean(state.expandedSections.blog)

  return `
    <section id="blog" class="section reveal">
      <div class="section-heading">
        <span class="section-kicker">09</span>
        <div>
          <h2>${langCopy.blogTitle}</h2>
          <p>${langCopy.blogIntro}</p>
        </div>
      </div>
      <div class="blog-controls glass-card">
        <label class="blog-search-shell" aria-label="${langCopy.blogSearchLabel}">
          <input
            id="blogSearch"
            type="search"
            class="blog-search"
            value="${escapeHtml(state.blogQuery)}"
            placeholder="${escapeHtml(langCopy.blogSearchPlaceholder)}"
            aria-label="${escapeHtml(langCopy.blogSearchLabel)}"
          >
        </label>
        <div class="blog-tags" role="tablist" aria-label="${langCopy.blogAllTags}">
          <button type="button" class="blog-tag ${state.blogTag === 'all' ? 'is-active' : ''}" data-blog-tag="all">${langCopy.blogAllTags}</button>
          ${categoryTags
            .map(
              (tag) => `<button type="button" class="blog-tag ${state.blogTag === tag.key ? 'is-active' : ''}" data-blog-tag="${escapeHtml(tag.key)}">${escapeHtml(tag.label)}</button>`,
            )
            .join('')}
          ${
            hasActiveBlogFilters
              ? `<button type="button" class="blog-clear-chip" data-blog-clear="true">${langCopy.blogClearFilters}</button>`
              : ''
          }
        </div>
      </div>
      ${
        mobileMode
          ? `
              <div class="blog-grid blog-grid--mobile-list">
                ${initialBlogItems.map((article) => renderBlogCard(article, lang, queryTerms)).join('')}
              </div>
              ${
                overflowBlogItems.length
                  ? `
                      ${expandedBlog ? `<div class="blog-grid blog-grid--compact-mobile">${overflowBlogItems.map((article) => renderBlogCard(article, lang, queryTerms, { compact: true })).join('')}</div>` : ''}
                      ${renderGalleryCTA(langCopy, 'blog', filteredArticles.length)}
                    `
                  : ''
              }
            `
          : renderGridWithOptionalExpansion({
              sectionKey: 'blog',
              items: filteredArticles,
              collapsedCount: 6,
              langCopy,
              gridClass: 'blog-grid',
              renderItem: (article) => renderBlogCard(article, lang, queryTerms),
            })
      }
      ${filteredArticles.length === 0 ? `<p class="blog-empty glass-card">${langCopy.blogNoResults}</p>` : ''}
    </section>
  `
}

function renderArticleModal(lang, langCopy) {
  if (!state.activeArticle) {
    return ''
  }

  const allArticles = [...enrichedArticles, ...expandedTopicArticles]
  const article = allArticles.find((entry) => entry.id === state.activeArticle)
  if (!article) {
    return ''
  }

  return `
    <div class="modal-backdrop" data-close-modal="true">
      <article class="article-modal glass-card" role="dialog" aria-modal="true" aria-label="${article.title[lang]}">
        <button type="button" class="modal-close" data-close-modal="true">${langCopy.close}</button>
        <img src="${article.image}" alt="${article.title[lang]}">
        <div class="article-modal__body">
          <span>${article.category[lang]}</span>
          <h3>${article.title[lang]}</h3>
          ${article.body[lang].map((paragraph) => `<p>${paragraph}</p>`).join('')}
          ${
            Array.isArray(article.sourceNotes) && article.sourceNotes.length
              ? `
                  <section class="article-sources">
                    <h4>${longReadSectionLabels[lang].sources}</h4>
                    <ul>
                      ${article.sourceNotes
                        .map((source) => `<li><a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a></li>`)
                        .join('')}
                    </ul>
                  </section>
                `
              : ''
          }
        </div>
      </article>
    </div>
  `
}

function render() {
  const langCopy = copy[state.lang]
  document.documentElement.lang = state.lang
  document.title = `EOEX Studio · ${langCopy.heroQuote}`

  app.innerHTML = `
    <div class="page-shell ${state.formFactor === 'mobile' ? 'is-mobile' : 'is-desktop'}">
      ${renderNav(langCopy)}
      <main>
        ${renderHero(state.lang, langCopy)}
        ${renderAbout(langCopy)}
        ${renderEvents(state.lang, langCopy)}
        ${renderDirectorySection('designers', '03', langCopy.designersTitle, langCopy.designersIntro, designers, 'specialty', state.lang, langCopy)}
        ${renderDirectorySection('talents', '04', langCopy.talentsTitle, langCopy.talentsIntro, talents, 'profile', state.lang, langCopy)}
        ${renderPartners(state.lang, langCopy)}
        ${renderMagazine(state.lang, langCopy)}
        ${renderPress(state.lang, langCopy)}
        ${renderContact(state.lang, langCopy)}
        ${renderBlog(state.lang, langCopy)}
      </main>
      <footer class="site-footer">
        <p>${langCopy.footer}</p>
      </footer>
      ${renderArticleModal(state.lang, langCopy)}
    </div>
  `

  applyFormFactorToDocument()
  bindEvents()
}

function bindEvents() {
  app.querySelector('.nav-toggle')?.addEventListener('click', () => {
    state.mobileNavOpen = !state.mobileNavOpen
    render()
  })

  app.querySelector('#languageSelect')?.addEventListener('change', (event) => {
    state.lang = event.currentTarget.value
    state.mobileNavOpen = false
    state.statusMessage = ''
    state.blogTag = 'all'
    render()
  })

  app.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      state.mobileNavOpen = false
      render()
    })
  })

  app.querySelectorAll('[data-day-index]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedDay = Number(button.dataset.dayIndex)
      render()
    })
  })

  app.querySelectorAll('[data-time]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedTime = button.dataset.time
      render()
    })
  })

  app.querySelector('#bookingForm')?.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')

    if (!name || !email) {
      return
    }

    state.statusMessage = copy[state.lang].bookingSuccess
    render()
  })

  app.querySelectorAll('[data-article-id]').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeArticle = button.dataset.articleId
      render()
    })
  })

  app.querySelectorAll('[data-close-modal]').forEach((element) => {
    element.addEventListener('click', (event) => {
      if (event.target !== element && !element.classList.contains('modal-close')) {
        return
      }

      state.activeArticle = null
      render()
    })
  })

  app.querySelectorAll('[data-toggle-gallery]').forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.dataset.toggleGallery
      if (!key) {
        return
      }

      state.expandedSections[key] = !state.expandedSections[key]
      render()
    })
  })

  app.querySelector('#blogSearch')?.addEventListener('input', (event) => {
    const value = event.currentTarget.value
    if (blogSearchDebounceTimer) {
      clearTimeout(blogSearchDebounceTimer)
    }

    blogSearchDebounceTimer = setTimeout(() => {
      state.blogQuery = value
      render()
    }, 180)
  })

  app.querySelectorAll('[data-blog-tag]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextTag = button.dataset.blogTag
      if (!nextTag) {
        return
      }

      state.blogTag = nextTag
      render()
    })
  })

  app.querySelector('[data-blog-clear]')?.addEventListener('click', () => {
    if (blogSearchDebounceTimer) {
      clearTimeout(blogSearchDebounceTimer)
      blogSearchDebounceTimer = null
    }

    state.blogQuery = ''
    state.blogTag = 'all'
    render()
  })
}

syncFormFactor()
window.addEventListener('resize', () => {
  if (formFactorDebounceTimer) {
    clearTimeout(formFactorDebounceTimer)
  }

  formFactorDebounceTimer = setTimeout(() => {
    syncFormFactor({ rerender: true })
  }, 140)
})

window.addEventListener('orientationchange', () => {
  if (formFactorDebounceTimer) {
    clearTimeout(formFactorDebounceTimer)
  }

  formFactorDebounceTimer = setTimeout(() => {
    syncFormFactor({ rerender: true })
  }, 180)
})

render()
