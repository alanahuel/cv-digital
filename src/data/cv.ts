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

// Mensajes pre-rellenados para los CTA de contacto.
export const contact = {
  emailSubject: 'Contacto desde tu CV digital',
  emailBody:
    'Hola Alan,\n\nVi tu CV digital y me gustaría hablar contigo sobre una colaboración.\n\n',
  whatsappMessage:
    'Hola Alan, vi tu CV digital y me gustaría hablar contigo sobre una colaboración.',
};

export type Experience = {
  role: string;
  company: string;
  meta: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: 'Desarrollo de Software y Automatización',
    company: "Charly's Way",
    meta: 'Academia de formación online · Autónomo',
    period: 'mar. 2026 – actualidad',
    bullets: [
      'Desarrollé un sistema propio de producción automatizada de creatividades de vídeo (Python + FFmpeg) que sustituye el montaje manual por generación a partir de plantillas; hoy es la base de un producto propio en desarrollo.',
      'Construí una capa de medición sobre ActiveCampaign para obtener métricas que la herramienta no expone de serie (rendimiento de newsletter, entre otras), dando al equipo visibilidad de datos que antes no tenía.',
      'Implementé bots de atención al cliente de primer nivel que resuelven peticiones recurrentes y reducen los escalados al equipo de soporte.',
      'Automaticé la operativa diaria: visualizaciones de datos, envíos de correo por reglas, generación de calendarios y tareas recurrentes.',
    ],
  },
  {
    role: 'Desarrollador',
    company: 'NTT Data',
    meta: 'Consultoría tecnológica',
    period: '2022 – 2023',
    bullets: [
      'Mantuve y desarrollé sobre un sistema legacy crítico en lenguaje Natural (mainframe IBM) para la gestión del Síndrome Tóxico, en un entorno corporativo con procesos formales y alta exigencia de rigor.',
    ],
  },
  {
    role: 'Construcción y hostelería',
    company: 'Empresa familiar y sector servicios',
    meta: 'Oficios de ejecución',
    period: '2018 – 2025',
    bullets: [
      'Compaginé obra en la empresa familiar (desde los 14 años en periodos vacacionales; de forma oficial desde 2018) con trabajo en hostelería. Oficios de ejecución exigente que forjaron disciplina, fiabilidad y capacidad de resolver incidencias en tiempo real.',
    ],
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
