import Link from "next/link";

export default function GyngerPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "96px 24px", background: "#f5f5f2" }}>
      <section style={{ maxWidth: 860, margin: "0 auto" }}>
        <Link href="/projects" style={{ color: "#111", textDecoration: "none" }}>
          Back
        </Link>
        <p style={{ margin: "40px 0 8px", color: "#555" }}>2020-23</p>
        <h1 style={{ margin: 0, fontSize: 48, lineHeight: 1 }}>Gynger</h1>
        <p style={{ maxWidth: 680, fontSize: 20, lineHeight: 1.5, color: "#444" }}>
          A mobile loyalty and trade-promotion experience connecting brands, retailers,
          rewards, QR scanning, and transaction flows.
        </p>
      </section>
    </main>
  );
}
