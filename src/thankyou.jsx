import { Link } from "react-router-dom";
import { useLang } from "./LanguageContext";

export default function ThankYou() {
  const { t } = useLang();

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
        <h1 className="section-title">{t("Hvala Vam!")}</h1>
        <p
          style={{
            marginTop: "20px",
            fontSize: "1.1rem",
            color: "#ccc",
          }}
        >
          {t("Kontaktiracemo Vas u najkracem mogucem roku.")}
        </p>

        <Link
          to="/"
          className="luxury-btn"
          style={{ marginTop: "40px", display: "inline-block", textDecoration: "none" }}
        >
          {t("Nazad")}
        </Link>
      </div>
    </section>
  );
}
