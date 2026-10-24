module.exports = {
  siteTitle: 'Thian López Z. | AI Engineer',
  siteDescription:
    'Thian López Zambrano is an AI engineer based in Guayaquil, Ecuador, focused on agentic systems and LLM applications, with software engineering experience since 2014.',
  siteKeywords:
    'Thian Lopez, Thian, Lopez, thianlopezz, Cristhian Lopez, Cristhian, AI Engineer, agentic systems, LLM applications, AI agents, multi-agent orchestration, MCP, RAG, Claude Code, Systems Engineer, Full Stack, web developer, python, javascript, guayaquil',
  siteUrl: 'https://thianlopezz.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-162755626-1',
  googleVerification: 'gy5VG09N3bgcs55fsRSQTFJEFrqMQ_it0GmPDALqtdg',
  name: 'Thian López Zambrano',
  location: 'Guayaquil, EC',
  email: 'thianlopezz@gmail.com',
  github: 'https://github.com/thianlopezz',
  twitterHandle: '@thianlopezz',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/thianlopezz',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/thianlopezz',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@thianlopezz',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/thianlopezz',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/thianlopezz',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Skills and toolkit',
      url: '/#toolkit',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Blog',
      url: 'https://medium.com/@thianlopezz',
      external: true,
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#0C171B',
  navyColor: '#0B161A',
  darkNavyColor: '#0B161A',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
