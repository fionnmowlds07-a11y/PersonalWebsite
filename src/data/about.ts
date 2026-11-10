import cvUrl from '../content/CV.pdf?url';

// Replace every {{PLACEHOLDER}} with your real details.
// Unfilled links render as disabled plaques, so nothing points at a dead URL.
export const about = {
  name: 'Fionn Mowlds',
  tagline: 'Software engineer',
  lead: {
    start: "I'm Fionn. I am a student, studying Immersive Software Engineering. I have always been interested in computers, I want to use this interest to make a ",
    mark: 'real change',
    end: '.',
  },
  facts: [
    { label: 'Studying', value: 'Immersive Software Engineering at the University of Limerick, first year' },
    { label: 'Based in', value: 'Cork, Ireland' },
    { label: 'Building', value: 'RowVision, which analyses rowing technique from phone footage using computer vision and biomechanical analysis' },
    { label: 'Currently', value: 'Founder of StudyRight Ireland, volunteer web developer for Kidscope and part-time IT support at CJM Maritime' },
    { label: 'Secondary School', value: 'H1 in Computer Science, voted prefect in 6th year to represent the student body in my school' },
    { label: 'Rowing', value: 'Represented Ireland in 2025 at the Junior Home International. 1st in the B Final, Championship Pairs, Metropolitan Regatta, London' },
  ],
  experience: [
    {
      role: 'IT Support Officer',
      org: 'CJM Maritime Consultancy, Cork',
      when: 'Oct 2025 – Present',
      note: 'Part-time. Maintain IT systems for the sole Irish representative of the Marshall Islands Registry, from network and hardware issues to user onboarding, access management and security controls.',
    },
    {
      role: 'Volunteer Web Developer',
      org: 'Kidscope, NICHE Health Project (Cork) CLG, HSE South West',
      when: 'Aug 2026 – Present',
      note: 'Structure web content for a paediatric community child health service, gathering requirements from clinical staff and health directors.',
    },
    {
      role: 'Crew Assistant',
      org: 'Cork Harbour Cruises',
      when: 'Jun 2022 – Aug 2026',
      note: 'Seasonal. Ran bar service alone on cruises of up to 75 guests, assisted tour guiding, docking and vessel maintenance.',
    },
  ],
  skills: [
    { group: 'Languages', items: 'Python, TypeScript, JavaScript, Java, SQL, HTML/CSS, Lua, Bash' },
    { group: 'Frameworks', items: 'Next.js, React, Three.js, OpenCV, NumPy' },
    { group: 'Backend and cloud', items: 'PostgreSQL, Supabase, REST APIs, Docker, Vercel' },
    { group: 'Testing and CI', items: 'pytest, Vitest, Playwright, GitHub Actions' },
    { group: 'AI', items: 'OpenAI API, Claude API, Claude Code' },
    { group: 'Tools', items: 'Git and GitHub, Linux (Arch), Neovim' },
    { group: 'Spoken', items: 'English (native), Irish (intermediate), Latin (intermediate)' },
  ],
  description:
    'Fionn Mowlds is a software engineer looking for an internship. See the projects and get in touch.',
  links: [
    { label: 'Email', href: 'mailto:fionnmowlds07@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/fionnmowlds07-a11y' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fionnmowlds/' },
    { label: 'CV', href: '/cv' },
  ],
};

export const cvFile = cvUrl;

export const isFilled = (value: string) => !value.includes('{{');
