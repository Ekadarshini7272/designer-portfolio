import Link from "next/link";

const projectLinks = [
  { href: "/mahindra", name: "Mahindra IFVI", meta: "HMI, Hardware, Design System" },
  { href: "/apnaklub", name: "ApnaKlub App", meta: "Mobile, Survey, PRD, UI, UX" },
  { href: "/gynger", name: "Gynger", meta: "Mobile, User Persona, Flow" },
];

export default function ProjectsPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "96px 24px", background: "#f5f5f2" }}>
      <section style={{ maxWidth: 960, margin: "0 auto" }}>
        <Link href="/" style={{ color: "#111", textDecoration: "none" }}>
          Back
        </Link>
        <h1 style={{ margin: "40px 0 24px", fontSize: 48, lineHeight: 1 }}>Projects</h1>
        <div style={{ display: "grid", gap: 16 }}>
          {projectLinks.map((project) => (
            <Link
              href={project.href}
              key={project.href}
              style={{
                display: "block",
                padding: "24px",
                border: "1px solid #111",
                color: "#111",
                textDecoration: "none",
                background: "#fff",
              }}
            >
              <h2 style={{ margin: 0, fontSize: 28 }}>{project.name}</h2>
              <p style={{ margin: "8px 0 0", color: "#555" }}>{project.meta}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
