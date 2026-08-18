import { Head } from '@inertiajs/react';
import {
    ArrowDown,
    ArrowRight,
    Github,
    Linkedin,
    Mail,
} from 'lucide-react';



export default function Welcome() {
    return (
        <>
            <Head title="Ahmad — Software Developer" />

            <div className="min-h-screen bg-background text-foreground">
                {/* Navbar */}
                <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
                    <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                        <a
                            href="#home"
                            className="text-xl font-bold tracking-tight"
                        >
                            Ahmad<span className="text-primary">.</span>
                        </a>

                        <div className="hidden items-center gap-8 md:flex">
                            <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
                                Home
                            </a>

                            <a href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                About
                            </a>

                            <a href="#skills" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                Skills
                            </a>

                            <a href="#projects" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                Projects
                            </a>

                            <a href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                Contact
                            </a>
                        </div>

                        <a
                            href="#contact"
                            className="hidden items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground sm:flex"
                        >
                            Let's Talk
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </nav>
                </header>

                {/* Hero */}
                <main>
                    <section
                        id="home"
                        className="relative flex min-h-screen items-center overflow-hidden pt-20"
                    >
                        {/* Background decoration */}
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
                        </div>

                        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
                            {/* Hero content */}
                            <div className="max-w-2xl">
                                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                                    Software Developer
                                </p>

                                <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                                    Hi, I'm{' '}
                                    <span className="text-primary">
                                        Ahmad.
                                    </span>
                                </h1>

                                <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
                                    I build modern, reliable and user-focused
                                    web applications with a passion for clean
                                    code and thoughtful design.
                                </p>

                                <div className="mt-9 flex flex-wrap gap-4">
                                    <a
                                        href="#projects"
                                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                                    >
                                        View My Work
                                        <ArrowRight className="h-4 w-4" />
                                    </a>

                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                                    >
                                        Get In Touch
                                        <Mail className="h-4 w-4" />
                                    </a>
                                </div>

                                {/* Social links */}
                                <div className="mt-10 flex items-center gap-4">
                                    <a
                                        href="https://github.com/ahmad85003"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub"
                                        className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>

                                    <a
                                        href="#"
                                        aria-label="LinkedIn"
                                        className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </a>

                                    <a
                                        href="mailto:hello@example.com"
                                        aria-label="Email"
                                        className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                                    >
                                        <Mail className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Profile image */}
                            <div className="relative flex justify-center lg:justify-end">
                                <div className="relative">
                                    {/* Decorative ring */}
                                    <div className="absolute -inset-5 rounded-full border border-primary/20" />
                                    <div className="absolute -inset-10 rounded-full border border-primary/10" />

                                    <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-background bg-muted shadow-2xl sm:h-96 sm:w-96">
                                        <img
                                            src="/images/profile.jpg"
                                            alt="Ahmad"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scroll indicator */}
                        <a
                            href="#about"
                            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary sm:flex"
                        >
                            <span className="text-xs uppercase tracking-widest">
                                Scroll
                            </span>
                            <ArrowDown className="h-4 w-4 animate-bounce" />
                        </a>
                    </section>

                    {/* About */}
                    <section
                        id="about"
                        className="border-t border-border/50 px-6 py-28 lg:px-8"
                    >
                        <div className="mx-auto max-w-7xl">
                            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                                {/* Section heading */}
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                                        About Me
                                    </p>

                                    <h2 className="mt-4 max-w-md text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                                        Turning ideas into useful digital experiences.
                                    </h2>
                                </div>

                                {/* About content */}
                                <div className="max-w-2xl">
                                    <p className="text-lg leading-8 text-muted-foreground">
                                        I'm a software developer focused on building modern web
                                        applications that are reliable, maintainable and easy to
                                        use. I enjoy solving real-world problems through thoughtful
                                        software design and clean development practices.
                                    </p>

                                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                        My experience includes working with Laravel, React,
                                        JavaScript, PHP and relational databases. I'm constantly
                                        learning new technologies and improving the way I design
                                        and develop applications.
                                    </p>

                                    {/* Highlights */}
                                    <div className="mt-10 grid gap-6 border-t border-border/50 pt-8 sm:grid-cols-3">
                                        <div>
                                            <p className="text-3xl font-bold">2+</p>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                Years Learning
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-3xl font-bold">10+</p>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                Projects
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-3xl font-bold">∞</p>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                Curiosity
                                            </p>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-10">
                                        <a
                                            href="#contact"
                                            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                                        >
                                            More About Me
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section
                        id="skills"
                        className="border-t border-border/50 px-6 py-28 lg:px-8"
                    >
                        <div className="mx-auto max-w-7xl">
                            <div className="max-w-2xl">
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                                    Skills
                                </p>

                                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                                    Technologies I work with.
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                    A selection of technologies and tools I use to build
                                    modern, reliable web applications.
                                </p>
                            </div>

                            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    {
                                        name: 'Laravel',
                                        description: 'Backend development & APIs',
                                    },
                                    {
                                        name: 'React',
                                        description: 'Modern frontend applications',
                                    },
                                    {
                                        name: 'PHP',
                                        description: 'Server-side application development',
                                    },
                                    {
                                        name: 'JavaScript',
                                        description: 'Interactive web experiences',
                                    },
                                    {
                                        name: 'PostgreSQL',
                                        description: 'Relational database development',
                                    },
                                    {
                                        name: 'Git & GitHub',
                                        description: 'Version control & collaboration',
                                    },
                                ].map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                                    >
                                        <h3 className="text-lg font-semibold">
                                            {skill.name}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                            {skill.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Projects */}
                    <section
                        id="projects"
                        className="border-t border-border/50 px-6 py-28 lg:px-8"
                    >
                        <div className="mx-auto max-w-7xl">
                            <div className="max-w-2xl">
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                                    Projects
                                </p>

                                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                                    Some of my work.
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                    A selection of projects I've built while learning,
                                    experimenting and solving real-world problems.
                                </p>
                            </div>

                            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {[
                                    {
                                        title: 'MA-CIMS',
                                        description:
                                            'A community information management system built to manage members, families, announcements and administrative workflows.',
                                        technologies: ['Laravel', 'PostgreSQL', 'Blade', 'JavaScript'],
                                        github: 'https://github.com/ahmad85003/ma-cims',
                                        demo: 'https://cims.asrotech.com',
                                    },
                                    {
                                        title: 'Personal Portfolio',
                                        description:
                                            'A modern developer portfolio designed to showcase my skills, projects and professional experience.',
                                        technologies: ['Laravel', 'React', 'TypeScript', 'Inertia'],
                                        github: 'https://github.com/ahmad85003/personal-portfolio',
                                        demo: '#',
                                    },
                                    {
                                        title: 'Certificate Generator',
                                        description:
                                            'A web application for generating certificates in bulk from templates and structured participant data.',
                                        technologies: ['Laravel', 'PHP', 'PDF', 'Excel'],
                                        github: '#',
                                        demo: '#',
                                    },
                                ].map((project) => (
                                    <article
                                        key={project.title}
                                        className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
                                    >
                                        {/* Project image placeholder */}
                                        <div className="flex aspect-video items-center justify-center rounded-xl border border-border bg-muted/40">
                                            <span className="text-sm font-medium text-muted-foreground">
                                                Project Preview
                                            </span>
                                        </div>

                                        <div className="mt-6 flex flex-1 flex-col">
                                            <h3 className="text-xl font-semibold tracking-tight">
                                                {project.title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                                {project.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {project.technologies.map((technology) => (
                                                    <span
                                                        key={technology}
                                                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                                                    >
                                                        {technology}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Links */}
                                            <div className="mt-6 flex items-center gap-4 border-t border-border/50 pt-5">
                                                {project.github !== '#' && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-sm font-semibold transition-colors hover:text-primary"
                                                    >
                                                        GitHub →
                                                    </a>
                                                )}

                                                {project.demo !== '#' && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-sm font-semibold transition-colors hover:text-primary"
                                                    >
                                                        Live Demo →
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>


                    {/* Contact */}
                    <section
                        id="contact"
                        className="border-t border-border/50 px-6 py-28 lg:px-8"
                    >
                        <div className="mx-auto max-w-7xl">
                            <div className="grid gap-16 lg:grid-cols-2">
                                {/* Contact information */}
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                                        Contact
                                    </p>

                                    <h2 className="mt-4 max-w-lg text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                                        Let's build something together.
                                    </h2>

                                    <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                                        Have a project, opportunity, or idea you'd like to
                                        discuss? Feel free to get in touch.
                                    </p>

                                    <div className="mt-10 space-y-6">
                                        {/* Email */}
                                        <a
                                            href="mailto:hello@example.com"
                                            className="group flex items-center gap-4"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:text-primary">
                                                <Mail className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <p className="text-sm text-muted-foreground">
                                                    Email
                                                </p>

                                                <p className="mt-1 font-medium">
                                                    hello@example.com
                                                </p>
                                            </div>
                                        </a>

                                        {/* GitHub */}
                                        <a
                                            href="https://github.com/ahmad85003"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-4"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:text-primary">
                                                <Github className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <p className="text-sm text-muted-foreground">
                                                    GitHub
                                                </p>

                                                <p className="mt-1 font-medium">
                                                    github.com/ahmad85003
                                                </p>
                                            </div>
                                        </a>

                                        {/* LinkedIn */}
                                        <a
                                            href="#"
                                            className="group flex items-center gap-4"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:text-primary">
                                                <Linkedin className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <p className="text-sm text-muted-foreground">
                                                    LinkedIn
                                                </p>

                                                <p className="mt-1 font-medium">
                                                    LinkedIn Profile
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* Contact form */}
                                <div className="rounded-2xl border border-border p-6 sm:p-8">
                                    <h3 className="text-xl font-semibold">
                                        Send me a message
                                    </h3>

                                    <form className="mt-8 space-y-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-medium"
                                            >
                                                Name
                                            </label>

                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="Your name"
                                                className="mt-2 w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-medium"
                                            >
                                                Email
                                            </label>

                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                className="mt-2 w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="text-sm font-medium"
                                            >
                                                Message
                                            </label>

                                            <textarea
                                                id="message"
                                                rows={5}
                                                placeholder="Tell me about your project..."
                                                className="mt-2 w-full resize-none rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                                        >
                                            Send Message
                                            <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>

                {/* Footer */}
                <footer className="border-t border-border/50 px-6 py-8 lg:px-8">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
                        <p>
                            © {new Date().getFullYear()} Ahmad. All rights
                            reserved.
                        </p>

                        <p>Built with Laravel & React.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}