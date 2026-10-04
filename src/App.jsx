import { useEffect, useRef, useState } from 'react';
import './index.css';

const imageBaseUrl = (import.meta.env.VITE_IMAGE_BASE_URL || '/projects').replace(/\/+$/, '');
const imageUrls = {
  'wizlynn-1.jpg': import.meta.env.VITE_IMAGE_WIZLYNN_1,
  'wizlynn-2.jpg': import.meta.env.VITE_IMAGE_WIZLYNN_2,
  'wizlynn-3.jpg': import.meta.env.VITE_IMAGE_WIZLYNN_3,
  'billyshopai-1.jpg': import.meta.env.VITE_IMAGE_BILLYSHOPAI_1,
  'billyshopai-2.jpg': import.meta.env.VITE_IMAGE_BILLYSHOPAI_2,
  'billyshopai-3.jpg': import.meta.env.VITE_IMAGE_BILLYSHOPAI_3,
  'plant-disease-1.jpg': import.meta.env.VITE_IMAGE_PLANT_DISEASE_1,
  'plant-disease-2.jpg': import.meta.env.VITE_IMAGE_PLANT_DISEASE_2,
  'plant-disease-3.jpg': import.meta.env.VITE_IMAGE_PLANT_DISEASE_3,
  'sik-go-1.jpg': import.meta.env.VITE_IMAGE_SIK_GO_1,
  'sik-go-2.jpg': import.meta.env.VITE_IMAGE_SIK_GO_2,
  'sik-go-3.jpg': import.meta.env.VITE_IMAGE_SIK_GO_3,
  'paradise-nursery-1.jpg': import.meta.env.VITE_IMAGE_PARADISE_NURSERY_1,
  'paradise-nursery-2.jpg': import.meta.env.VITE_IMAGE_PARADISE_NURSERY_2,
  'paradise-nursery-3.jpg': import.meta.env.VITE_IMAGE_PARADISE_NURSERY_3,
};
const getImageUrl = (image) => {
  const configuredUrl = imageUrls[image];
  if (!configuredUrl) return `${imageBaseUrl}/${image}`;

  const markdownImage = configuredUrl.match(/^!\[[^\]]*\]\(([^)]+)\)$/);
  return markdownImage ? markdownImage[1] : configuredUrl;
};

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Certs', href: '#certifications' },
];

const techMarquee = [
  'Python', 'JavaScript', 'React.js', 'FastAPI', 'TensorFlow', 'Anthropic API',
  'OpenAI API', 'Gemini API', 'Node.js', 'Django', 'PostgreSQL', 'Docker', 'JWT Auth',
];

const stats = [
  { value: 5, suffix: '+', label: 'Shipped Projects' },
  { value: 95, suffix: '%', label: 'AI Scoring Accuracy' },
  { value: 300, suffix: '+', label: 'People Led / Mentored' },
  { value: 2027, suffix: '', label: 'Expected Graduation' },
];

const skillGroups = [
  { icon: 'fa-code', color: 'indigo', title: 'Languages', text: 'Python, JavaScript, C, C++, Java, C#, Assembly (ASM)' },
  { icon: 'fa-brain', color: 'amber', title: 'AI/ML & APIs', text: 'TensorFlow, Keras, Anthropic API, OpenAI API, Google Gemini API' },
  { icon: 'fa-laptop-code', color: 'indigo', title: 'Web & Backend', text: 'React.js, Node.js, FastAPI, Django, REST API' },
  { icon: 'fa-database', color: 'amber', title: 'Databases', text: 'PostgreSQL, MySQL, MariaDB, MongoDB, SQLite' },
  { icon: 'fa-network-wired', color: 'indigo', title: 'Networking', text: 'Cisco Packet Tracer, Zabbix, OSPF, VLAN, VPN, Aruba APs' },
  { icon: 'fa-screwdriver-wrench', color: 'amber', title: 'DevOps & Tools', text: 'Git, GitHub, Docker, Linux (Ubuntu), Postman, Figma, VS Code' },
];

const projects = [
  {
    title: 'Wizlynn AI Assessment Platform (MVP)',
    tag: 'Individual',
    github: 'https://github.com/Dalangans/wizlynn-ai-assessment-platform',
    images: ['wizlynn-1.jpg', 'wizlynn-2.jpg', 'wizlynn-3.jpg'],
    description: 'AI assessment platform that turns business material into reviewed questions, scored exams, and learning suggestions.',
    technologies: [
      ['Python', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'],
      ['FastAPI', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg'],
      ['SQLite', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg'],
    ],
  },
  {
    title: 'BillyShopAI',
    tag: 'Individual',
    github: 'https://github.com/Dalangans/BillyShopAI',
    images: ['billyshopai-1.jpg', 'billyshopai-2.jpg', 'billyshopai-3.jpg'],
    description: 'Conversational AI chatbot built for natural, fast, and secure customer interactions.',
    technologies: [
      ['Python', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'],
      ['Django', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg'],
      ['OpenAI API', 'https://cdn.simpleicons.org/openai/412991'],
    ],
  },
  {
    title: 'Plant Disease Identification (CNN)',
    tag: 'Team',
    github: 'https://github.com/Dalangans/CNN-PlantDisease',
    images: ['plant-disease-1.jpg', 'plant-disease-2.jpg', 'plant-disease-3.jpg'],
    description: 'Computer vision model that identifies five tomato leaf conditions with 92.24% validation accuracy.',
    technologies: [
      ['Python', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'],
      ['TensorFlow', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg'],
      ['Keras', 'https://cdn.simpleicons.org/keras/D00000'],
    ],
  },
  {
    title: 'SIK-GO (AI-Powered Website)',
    tag: 'Team',
    github: 'https://github.com/Dalangans/SIK-GO',
    images: ['sik-go-1.jpg', 'sik-go-2.jpg', 'sik-go-3.jpg'],
    description: 'Full-stack room reservation and proposal management system with AI-assisted document review.',
    technologies: [
      ['React', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'],
      ['Node.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'],
      ['MongoDB', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'],
      ['Gemini API', 'https://cdn.simpleicons.org/googlegemini/8E75B2'],
    ],
  },
  {
    title: 'Paradise Nursery - Online Plant Shop',
    tag: 'Individual',
    github: 'https://github.com/Dalangans/e-plantShopping',
    images: ['paradise-nursery-1.jpg', 'paradise-nursery-2.jpg', 'paradise-nursery-3.jpg'],
    quote: 'Build with purpose, learn with curiosity, and leave every project better than you found it.',
    description: 'Responsive plant e-commerce site with category browsing, product details, and a dynamic shopping cart.',
    technologies: [
      ['React', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'],
      ['Redux', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg'],
      ['JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'],
    ],
  },
];

const flatImages = projects.flatMap((project) =>
  project.images.map((image) => ({ project, image }))
);

function ProjectGallery({ project, startIndex, onOpen }) {
  const galleryImages = [...project.images, ...project.images];

  return (
    <div className="project-gallery" aria-label={`${project.title} project previews`}>
      <div className="project-gallery-track">
        {galleryImages.map((image, index) => {
          const imageIndex = index % project.images.length;
          return (
            <button
              type="button"
              className="project-preview"
              key={`${image}-${index}`}
              onClick={() => onOpen(startIndex + imageIndex)}
            >
              <img
                src={getImageUrl(image)}
                alt={`${project.title} preview ${imageIndex + 1}`}
                onError={(event) => event.currentTarget.classList.add('is-missing')}
              />
              <span className="preview-zoom-icon"><i className="fa-solid fa-expand" /></span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Lightbox({ images, index, onClose, onNav }) {
  if (index === null) return null;
  const { project, image } = images[index];
  const position = project.images.indexOf(image) + 1;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close preview">
        <i className="fa-solid fa-xmark" />
      </button>
      <button
        type="button"
        className="lightbox-nav lightbox-prev"
        onClick={(event) => { event.stopPropagation(); onNav(-1); }}
        aria-label="Previous image"
      >
        <i className="fa-solid fa-chevron-left" />
      </button>

      <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <div className="lightbox-frame">
          <img
            key={image}
            src={getImageUrl(image)}
            alt={`${project.title} preview`}
            onError={(event) => event.currentTarget.classList.add('is-missing')}
          />
        </div>
        <div className="lightbox-caption">
          <span>{project.title}</span>
          <span>{position} / {project.images.length}</span>
        </div>
      </div>

      <button
        type="button"
        className="lightbox-nav lightbox-next"
        onClick={(event) => { event.stopPropagation(); onNav(1); }}
        aria-label="Next image"
      >
        <i className="fa-solid fa-chevron-right" />
      </button>
    </div>
  );
}

const experience = [
  {
    title: 'Business Development Intern',
    company: 'Vplus Indonesia',
    period: 'Jul 2026 – Oct 2026',
    points: [
      'Applied quantitative analysis on equity data using Excel and technical indicators to generate data-driven investment insights for client portfolios.',
      "Consulted personal accounts and senior manager's high-value clients on US market positioning and asset allocation.",
      'Translated complex market data into structured client reports supporting advisory decisions.',
    ],
  },
  {
    title: 'Network and Infrastructure Intern',
    company: 'PT Charoen Pokphand Indonesia',
    period: 'Jan 2026 – Feb 2026',
    points: [
      'Monitored network health via Zabbix and processed RF logs using Excel to deliver optimization reports.',
      'Maintained and optimized enterprise wireless networks using Aruba Access Points (AP).',
      'Deployed server environments on Ubuntu/VirtualBox and managed MariaDB instances.',
    ],
  },
];

const leadership = [
  {
    title: 'Project Lead – Mentorship & Development',
    company: 'Masa Adaptasi Dunia Kampus FTUI',
    period: 'Aug 2026',
    points: [
      'Led a 9-member team delivering structured orientation assignments for 300+ incoming freshmen, meeting operational targets and timelines.',
      'Directed visual design of project materials on Figma, creating structured assignment templates distributed to 300+ freshmen.',
    ],
  },
  {
    title: 'Internal Committee – Mentorship & Development',
    company: 'Masa Adaptasi Dunia Kampus FTUI',
    period: 'Aug 2025',
    points: [
      'Supervised and evaluated 30 committee members and 300+ freshmen during a 3-day intensive program with daily compliance reviews.',
      'Designed evaluation checklists and real-time monitoring to optimize scheduling and engagement.',
    ],
  },
  {
    title: 'First Deputy of Public Service',
    company: 'Ikatan Mahasiswa Elektro FTUI',
    period: 'Feb 2025 – Dec 2025',
    points: [
      'Managed a 12-member department, leading outreach programs engaging 300+ participants across JABODETABEK.',
      'Spearheaded execution of Elektro Charity as Steering Committee across regional student communities.',
    ],
  },
];

const certifications = [
  'Red Hat OpenStack Administration I (CL110) – Red Hat, Apr 2026',
  'Data Cleaning – Kaggle, Feb 2026',
  'IBM Full Stack Software Developer Certificate – IBM, Feb 2026',
  'Ethical Hacker – Cisco Networking Academy, Feb 2026',
  'CCNA: Introduction to Networks – Cisco, Jan 2025',
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

function StatCounter({ value, suffix, label, delay }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 1200;
            const start = performance.now();
            const step = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(value * eased));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.unobserve(node);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [value]);

  return (
    <div className="stat-card reveal" style={{ '--delay': `${delay}ms` }} ref={ref}>
      <div className="stat-number">{display}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const heroRef = useRef(null);
  const sectionIds = ['about', 'education', 'skills', 'projects', 'experience', 'leadership', 'certifications'];
  const activeSection = useActiveSection(sectionIds);
  useReveal();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeNav = () => setIsNavOpen(false);
  const toggleNav = () => setIsNavOpen((open) => !open);
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const navLightbox = (direction) => {
    setLightboxIndex((previous) => {
      if (previous === null) return previous;
      const total = flatImages.length;
      return (previous + direction + total) % total;
    });
  };

  useEffect(() => {
    if (lightboxIndex === null) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight') navLightbox(1);
      if (event.key === 'ArrowLeft') navLightbox(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const handleHeroMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    heroRef.current.style.setProperty('--sx', `${x}%`);
    heroRef.current.style.setProperty('--sy', `${y}%`);
  };

  return (
    <div className="site-shell">
      <nav className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a className="logo" href="#about" onClick={closeNav}>
            Nabiel<span>.dev</span>
          </a>
          <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeNav}
                  className={activeSection === link.href.slice(1) ? 'is-active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="hamburger" type="button" aria-label="Toggle navigation" onClick={toggleNav}>
            <i className={`fa-solid ${isNavOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </nav>

      <main>
        <section
          id="about"
          className="hero-section"
          ref={heroRef}
          onMouseMove={handleHeroMove}
        >
          <div className="hero-grid-overlay" />
          <div className="hero-spotlight" />
          <div className="orb orb-1" />
          <div className="orb orb-2" />

          <div className="container">
            <div className="hero-copy reveal">
              <span className="badge-pill"><span className="badge-dot" /> Open to Software / AI Engineering roles</span>
              <h1>
                Nabiel Harits <span className="accent">Utomo</span>
              </h1>
              <h2 className="hero-subtitle">AI Engineering · Full-Stack Development · Infrastructure</h2>
              <p className="summary">
                Computer Engineering student at Universitas Indonesia (Class of 2027) with hands-on experience
                building AI-powered applications, full-stack systems, and network infrastructure. Proficient in
                Python, JavaScript, and TensorFlow — integrating LLM APIs from Anthropic, OpenAI, and Gemini into
                real products.
              </p>

              <div className="contact-info">
                <span><i className="fa-solid fa-location-dot" /> South Jakarta, Indonesia</span>
                <span><i className="fa-solid fa-envelope" /> nabielutomo@gmail.com</span>
              </div>

              <div className="hero-buttons">
                <a href="mailto:nabielutomo@gmail.com" className="btn btn-primary">
                  <i className="fa-solid fa-paper-plane" /> Get in touch
                </a>
                <a href="https://github.com/Dalangans" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <i className="fa-brands fa-github" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/nabielutomo/" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <i className="fa-brands fa-linkedin" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="scroll-cue"><span>Scroll</span><i className="fa-solid fa-chevron-down" /></div>
        </section>

        <div className="marquee-strip">
          <div className="marquee-track">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <span key={`${tech}-${i}`}><i className="fa-solid fa-circle-dot" /> {tech}</span>
            ))}
          </div>
        </div>

        <section className="section stats-strip">
          <div className="container stats-grid">
            {stats.map((s, i) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 100} />
            ))}
          </div>
        </section>

        <section id="education" className="section section-band-alt">
          <div className="container">
            <div className="section-heading reveal">
              <span className="section-kicker"><span className="kicker-index">01</span>Education</span>
              <h2 className="section-title">Grounded in strong fundamentals</h2>
            </div>
            <article className="glass-card education-card reveal">
              <div className="card-topline">
                <div>
                  <h3 style={{ fontFamily: 'var(--title-font)', fontSize: '1.15rem' }}>Universitas Indonesia</h3>
                  <p className="subtitle">Bachelor's Degree in Computer Engineering · Aug 2023 – Jun 2027 (Expected)</p>
                </div>
                <span className="tag">Depok, Indonesia</span>
              </div>
              <p style={{ color: 'var(--text-soft)', fontSize: '0.94rem' }}>
                <strong style={{ color: 'var(--text)' }}>Relevant Coursework:</strong> Artificial Intelligence,
                Human-Computer Interaction, Database Systems, Computer Networking, Cyber Security,
                Operating Systems, Object-Oriented Programming.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <span className="section-kicker"><span className="kicker-index">02</span>Skills</span>
              <h2 className="section-title">Balanced across product, code, and infrastructure</h2>
              <p className="section-intro">A mix of engineering depth and practical tools that keeps projects deployable, readable, and robust.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((skill, i) => (
                <article key={skill.title} className="glass-card skill-category reveal" style={{ '--delay': `${i * 80}ms` }}>
                  <div
                    className="skill-icon"
                    style={{
                      background: skill.color === 'amber' ? 'var(--amber-soft)' : 'var(--indigo-soft)',
                      color: skill.color === 'amber' ? 'var(--amber)' : 'var(--indigo)',
                    }}
                  >
                    <i className={`fa-solid ${skill.icon}`} />
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-band-alt">
          <div className="container">
            <div className="section-heading reveal">
              <span className="section-kicker"><span className="kicker-index">03</span>Projects</span>
              <h2 className="section-title">Technical projects with measurable impact</h2>
              <p className="section-intro">Selected work reflecting AI integration, full-stack execution, and practical performance improvements.</p>
            </div>
            <div className="projects-grid">
              {projects.map((project, i) => {
                const startIndex = flatImages.findIndex((item) => item.project === project);
                return (
                  <article key={project.title} className="glass-card project-card reveal" style={{ '--delay': `${i * 90}ms` }}>
                    <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
                    <ProjectGallery project={project} startIndex={startIndex} onOpen={openLightbox} />
                    <div className="card-topline">
                      <h3>{project.title}</h3>
                      <span className="tag">{project.tag}</span>
                    </div>
                    <a className="project-github" href={project.github} target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-github" /> View on GitHub
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                    {project.quote && <p className="project-quote">&ldquo;{project.quote}&rdquo;</p>}
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies" aria-label={`${project.title} technologies`}>
                      {project.technologies.map(([name, icon]) => (
                        <span className="technology-badge" key={name}>
                          <img src={icon} alt="" aria-hidden="true" />
                          {name}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <span className="section-kicker"><span className="kicker-index">04</span>Experience</span>
              <h2 className="section-title">Professional experience</h2>
              <p className="section-intro">Roles that sharpened analytical thinking, operational discipline, and technical communication.</p>
            </div>
            <div className="timeline">
              {experience.map((item, i) => (
                <article key={`${item.title}-${item.company}`} className="glass-card timeline-card accent-indigo reveal" style={{ '--delay': `${i * 100}ms` }}>
                  <div className="timeline-header">
                    <div>
                      <h3>{item.title}</h3>
                      <span className="company">{item.company}</span>
                    </div>
                    <span className="timeline-period" style={{ color: 'var(--indigo)' }}>{item.period}</span>
                  </div>
                  <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="leadership" className="section section-band-alt">
          <div className="container">
            <div className="section-heading reveal">
              <span className="section-kicker"><span className="kicker-index">05</span>Leadership</span>
              <h2 className="section-title">Leadership and community execution</h2>
              <p className="section-intro">Structured coordination, team management, and delivery in student organizations and large-scale programs.</p>
            </div>
            <div className="timeline">
              {leadership.map((item, i) => (
                <article key={`${item.title}-${item.company}`} className="glass-card timeline-card accent-amber reveal" style={{ '--delay': `${i * 100}ms` }}>
                  <div className="timeline-header">
                    <div>
                      <h3>{item.title}</h3>
                      <span className="company">{item.company}</span>
                    </div>
                    <span className="timeline-period" style={{ color: 'var(--amber)' }}>{item.period}</span>
                  </div>
                  <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <span className="section-kicker"><span className="kicker-index">06</span>Certifications</span>
              <h2 className="section-title">Certifications and honors</h2>
              <p className="section-intro">A compact record of continued technical growth and recognition for community contribution.</p>
            </div>
            <div className="grid-2-col">
              <div className="reveal">
                <div className="section-subheading"><h3>Certifications</h3></div>
                <ul className="cert-list">
                  {certifications.map((cert) => (
                    <li key={cert}><i className="fa-solid fa-award" /> {cert}</li>
                  ))}
                </ul>
              </div>
              <div className="reveal" style={{ '--delay': '120ms' }}>
                <div className="section-subheading"><h3>Awards & Honors</h3></div>
                <article className="glass-card award-card">
                  <div className="award-icon"><i className="fa-solid fa-trophy" /></div>
                  <div>
                    <h4>Achievement Appreciation (Coral Reef Guardian)</h4>
                    <p>Recognized for outstanding contribution to a community environmental program (TekTukBum Vol.01, BEM FTUI – June 2026), involving 100+ participants.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-title">Nabiel Harits Utomo</p>
            <p className="footer-copy">AI engineering, full-stack systems, and infrastructure-minded product work.</p>
          </div>
          <div className="socials">
            <a href="https://github.com/Dalangans" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa-brands fa-github" /></a>
            <a href="https://www.linkedin.com/in/nabielutomo/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" /></a>
            <a href="mailto:nabielutomo@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope" /></a>
          </div>
        </div>
      </footer>

      <Lightbox
        images={flatImages}
        index={lightboxIndex}
        onClose={closeLightbox}
        onNav={navLightbox}
      />
    </div>
  );
}

export default App;