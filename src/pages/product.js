import Link from "next/link";

export default function ProductPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "96px 24px", background: "#f5f5f2" }}>
      <section style={{ maxWidth: 760, margin: "0 auto" }}>
        <Link href="/" style={{ color: "#111", textDecoration: "none" }}>
          Back
        </Link>
        <h1 style={{ margin: "40px 0 16px", fontSize: 48, lineHeight: 1 }}>Product</h1>
        <p style={{ fontSize: 20, lineHeight: 1.5, color: "#444" }}>
          Product work is being prepared.
        </p>
      </section>
    </main>
  );
}
