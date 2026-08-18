const skillGroups = [
    {
        title: 'Backend',
        skills: ['Laravel', 'PHP', 'REST APIs'],
    },
    {
        title: 'Frontend',
        skills: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    },
    {
        title: 'Database',
        skills: ['MySQL', 'PostgreSQL'],
    },
    {
        title: 'Tools & Workflow',
        skills: ['Git', 'GitHub', 'VS Code', 'Vite'],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="border-t border-neutral-100 bg-white py-28"
        >
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                {/* Section heading */}
                <div className="mb-16 max-w-2xl">
                    <p className="mb-4 text-xs font-medium tracking-[0.3em] text-neutral-500">
                        SKILLS
                    </p>

                    <h2 className="text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
                        Technologies I work with.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-neutral-500">
                        A practical toolkit built around modern web
                        development, clean architecture, and reliable
                        applications.
                    </p>
                </div>

                {/* Skill groups */}
                <div className="grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="bg-white p-8 transition-colors duration-300 hover:bg-neutral-50"
                        >
                            <h3 className="mb-6 text-sm font-medium tracking-wide text-neutral-950">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}