// Datos del CV centralizados. Editá aquí para actualizar el contenido del sitio.

export const profile = {
  name: 'Alan Nahuel López Ruiz',
  role: 'Desarrollo y automatización de procesos',
  status: 'Autónomo',
  location: 'Salamanca, España',
  email: 'alanahuel07@gmail.com',
  phone: '+34 614 17 84 18',
  phoneRaw: '34614178418',
  linkedin: 'https://linkedin.com/in/alannahuel',
  linkedinLabel: 'linkedin.com/in/alannahuel',
  cvFile: '/Alan_Nahuel_Lopez_CV.pdf',
  summary:
    'Desarrollador y automatizador autodidacta, formado en Desarrollo de Aplicaciones Web (DAW). Construyo software propio y automatizaciones que quitan a los equipos el trabajo manual repetitivo. Vengo del no-code (n8n, Make, Airtable) y migro cada vez más a código (Python, JavaScript/Node.js, Astro, Next.js) por mantenibilidad y coste. Busco integrarme como colaborador técnico autónomo en un equipo que construya producto y automatización interna.',
};

// Frases que rotan en el hero (lo que construyo).
export const roles = [
  'automatizaciones que eliminan el trabajo manual',
  'software propio en Python y Node.js',
  'bots y sistemas de operativa interna',
  'productos a partir de plantillas y FFmpeg',
];

// Mensajes pre-rellenados para los CTA de contacto.
export const contact = {
  emailSubject: 'Contacto desde tu CV digital',
  emailBody:
    'Hola Alan,\n\nVi tu portfolio y me gustaría hablar contigo sobre una colaboración.\n\n',
  whatsappMessage:
    'Hola Alan, vi tu portfolio y me gustaría hablar contigo sobre una colaboración.',
};

export type Project = {
  tag: string;
  title: string;
  summary: string;
  detail: string;
  tech: string[];
};

// Logros reencuadrados como proyectos (extraídos de la experiencia en Charly's Way).
export const projects: Project[] = [
  {
    tag: 'Producto',
    title: 'Generación automatizada de vídeo',
    summary:
      'Sistema que sustituye el montaje manual por la generación de creatividades a partir de plantillas.',
    detail:
      'Construido en Python + FFmpeg. Toma plantillas y produce los vídeos de forma automática, eliminando el cuello de botella del montaje manual. Hoy es la base de un producto propio en desarrollo.',
    tech: ['Python', 'FFmpeg'],
  },
  {
    tag: 'Datos',
    title: 'Capa de medición sobre ActiveCampaign',
    summary:
      'Métricas que la herramienta no expone de serie, como el rendimiento de la newsletter.',
    detail:
      'Construí una capa propia de medición sobre ActiveCampaign para extraer datos que la plataforma no muestra de serie, dando al equipo visibilidad de métricas (rendimiento de newsletter, entre otras) que antes no tenía.',
    tech: ['ActiveCampaign', 'APIs REST', 'Looker Studio'],
  },
  {
    tag: 'Automatización',
    title: 'Bots de atención al cliente',
    summary:
      'Bots de primer nivel que resuelven peticiones recurrentes de soporte.',
    detail:
      'Implementé bots de atención al cliente de primer nivel que resuelven las peticiones más recurrentes de forma autónoma, reduciendo los escalados al equipo de soporte.',
    tech: ['n8n', 'IA', 'Webhooks'],
  },
  {
    tag: 'Automatización',
    title: 'Operativa diaria automatizada',
    summary:
      'Visualizaciones de datos, envíos de correo por reglas, calendarios y tareas recurrentes.',
    detail:
      'Automaticé la operativa del día a día: generación de visualizaciones de datos, envíos de correo basados en reglas, creación de calendarios y tareas recurrentes. Trabajo manual repetitivo que dejó de hacerse a mano.',
    tech: ['n8n', 'Make', 'Airtable'],
  },
];

export type Experience = {
  role: string;
  company: string;
  meta: string;
  period: string;
  summary: string;
};

export const experience: Experience[] = [
  {
    role: 'Desarrollador y automatización',
    company: 'Autónomo (freelance)',
    meta: 'Trabajo por cuenta propia para distintos clientes',
    period: 'ago. 2025 – actualidad',
    summary:
      "Desarrollo de software propio y automatización para distintos clientes. Cliente principal desde mar. 2026: Charly's Way (academia de formación online), donde construí el producto de generación de vídeo, la capa de medición sobre ActiveCampaign y la automatización de la operativa diaria. Para otros clientes, bots de atención al cliente y automatizaciones a medida (ver Proyectos).",
  },
  {
    role: 'Desarrollador',
    company: 'NTT Data',
    meta: 'Consultoría tecnológica',
    period: '2022 – 2023',
    summary:
      'Mantenimiento y desarrollo sobre un sistema legacy crítico en lenguaje Natural (mainframe IBM) para la gestión del Síndrome Tóxico, en un entorno corporativo con procesos formales y alta exigencia de rigor.',
  },
  {
    role: 'Construcción y hostelería',
    company: 'Empresa familiar y sector servicios',
    meta: 'Oficios de ejecución',
    period: '2018 – 2025',
    summary:
      'Obra en la empresa familiar (desde los 14 años en periodos vacacionales; oficialmente desde 2018) compaginada con hostelería. Oficios exigentes que forjaron disciplina, fiabilidad y resolución de incidencias en tiempo real.',
  },
];

export const education = [
  {
    title: 'Desarrollo de Aplicaciones Web (DAW)',
    subtitle: 'Ciclo de Grado Superior',
    meta: 'IFP · 2020 – 2022',
    note: 'Formación completada; sin título oficial expedido por una incidencia con las prácticas (FCT). Conocimientos y capacidad acreditados por el trabajo desarrollado desde entonces.',
  },
];

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'B1–B2 (documentación y comunicación técnica)' },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: 'Lenguajes y desarrollo',
    items: [
      'Python',
      'JavaScript / Node.js',
      'Astro',
      'Next.js',
      'JSON',
      'Webhooks',
      'OAuth2 / API keys',
      'FFmpeg',
    ],
  },
  {
    label: 'Automatización',
    items: [
      'n8n (nodos de código, APIs REST, Docker/self-hosted)',
      'Make (routers, agregación/iteración, manejo de errores)',
    ],
  },
  {
    label: 'Datos',
    items: [
      'Airtable (esquemas relacionales, scripts)',
      'ActiveCampaign',
      'Looker Studio (KPIs)',
    ],
  },
  {
    label: 'Inteligencia artificial',
    items: [
      'Desarrollo asistido con IA (Claude Code)',
      'Integración de modelos en automatizaciones',
    ],
  },
];
