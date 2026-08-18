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
                            <a
                                href="#home"
                                className="text-sm font-medium transition-colors hover:text-primary"
                            >
                                Home
                            </a>

                            <a
                                href="#about"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                About
                            </a>

                            <a
                                href="#projects"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                Projects
                            </a>

                            <a
                                href="#contact"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
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

                    {/* Temporary Projects section */}
                    <section
                        id="projects"
                        className="border-t border-border/50 px-6 py-24 lg:px-8"
                    >
                        <div className="mx-auto max-w-7xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                                Projects
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                Some of my work.
                            </h2>
                        </div>
                    </section>

                    {/* Temporary Contact section */}
                    <section
                        id="contact"
                        className="border-t border-border/50 px-6 py-24 lg:px-8"
                    >
                        <div className="mx-auto max-w-7xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                                Contact
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                Let's work together.
                            </h2>
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