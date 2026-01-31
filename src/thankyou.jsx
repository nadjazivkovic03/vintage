import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div>
        <h1 className="section-title">Hvala Vam!</h1>
        <p
          style={{
            marginTop: "20px",
            fontSize: "1.1rem",
            color: "#ccc",
          }}
        >
          Kontaktiracemo Vas u najkracem mogucem roku.
        </p>

        <Link
          to="/"
          className="luxury-btn"
          style={{ marginTop: "40px", display: "inline-block" }}
        >
          Nazad
        </Link>
      </div>
    </section>
  );
}
