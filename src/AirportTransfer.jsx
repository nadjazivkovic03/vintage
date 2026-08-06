import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLang } from "./LanguageContext";

import logo from "./assets/images/logo7.PNG";

const heroImages = [
  '/slika3.JPG',
  '/ex_nova.jpg',
  '/slika2.JPG',
  '/sk_nova.jpg',
  '/slika5.JPG',
];

const transferFleet = [
  { name: "Mercedes-Benz V 300 2025", image: "/slika2.JPG", seats: 8 },
  { name: "Mercedes-Benz V 300 4x4 Exclusive 2025", image: "/ex_nova.jpg", seats: 7 },
  { name: "Škoda Superb L&K 2025", image: "/sk3.JPG", seats: 5 },
  { name: "Škoda Superb 4x4 L&K 2025", image: "/sk_nova.jpg", seats: 5 },
  { name: "Škoda Superb 4x4 Selection 2025", image: "/sk2.JPG", seats: 5 },
];

export default function AirportTransfer() {
  const { t, changeLanguage, lang } = useLang();

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [direction, setDirection] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // === PAGE SEO ===
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Airport Transfer Belgrade | Nikola Tesla Airport – WinCar";

    let meta = document.querySelector('meta[name="description"]');
    let created = false;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
      created = true;
    }
    const previousDescription = meta.getAttribute("content");
    meta.setAttribute(
      "content",
      "Private airport transfer to and from Belgrade Nikola Tesla Airport. Fixed price €50 per vehicle, flight tracking, meet & greet and luxury Mercedes V Class or Škoda Superb vehicles."
    );

    return () => {
      document.title = previousTitle;
      if (created) {
        meta.remove();
      } else if (previousDescription !== null) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e) => {
      if (!e.target.closest('.luxury-header')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const chooseVehicle = (name) => {
    setSelectedVehicle(name);
    scrollToSection('transfer-booking');
  };

  return (
    <>
      {/* === ADVANCED BACKGROUND EFFECTS === */}
      <div className="gradient-background"></div>
      <div className="grid-pattern"></div>
      <div className="gold-particles" id="goldParticles"></div>

      {/* === LUXURY HEADER === */}
      <header className="luxury-header">
        <Link to="/" className="brand">
          <div className="brand-logo">
            <img src={logo} alt="VintageCAR Logo" />
          </div>
        </Link>

        <nav className="nav">
          <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>{t("POCETNA")}</Link></li>
            <li><a href="#how-it-works" className="nav-link" onClick={() => setMenuOpen(false)}>{t("KAKO FUNKCIONISE")}</a></li>
            <li><a href="#transfer-prices" className="nav-link" onClick={() => setMenuOpen(false)}>{t("CENE")}</a></li>
            <li><a href="#transfer-fleet" className="nav-link" onClick={() => setMenuOpen(false)}>{t("VOZILA")}</a></li>
            <li className="nav-booking-item"><a href="#transfer-booking" className="nav-link" onClick={() => setMenuOpen(false)}>{t("REZERVACIJA")}</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>{t("KONTAKT")}</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="luxury-btn"
            onClick={() => scrollToSection('transfer-booking')}
          >
            <i className="fas fa-gem"></i> {t("REZERVISI")}
          </button>

          <div className="lang-switch">
            <img
              src="/flags/rs.svg"
              alt="Serbian"
              onClick={() => changeLanguage("sr")}
              className={lang === "sr" ? "active" : ""}
            />
            <img
              src="/flags/gb.svg"
              alt="English"
              onClick={() => changeLanguage("en")}
              className={lang === "en" ? "active" : ""}
            />
          </div>

          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* === HERO SECTION === */}
      <section className="hero-section" id="home">
        <div className="hero-slideshow">
          {heroImages.map((img, i) => (
            <div
              key={img}
              className={`hero-slide ${i === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-word">Airport</span>
            {" "}
            <span className="hero-word">Transfer</span>
          </h1>

          <div className="hero-divider" />
          <p className="hero-tagline">{t("Transfer do i od Aerodroma Nikola Tesla")}</p>

          <div className="hero-buttons">
            <a href="tel:+381606051001" className="hero-btn hero-btn-call">
              <i className="fas fa-phone-alt"></i> {t("POZOVI ODMAH")}
            </a>
            <a href="https://wa.me/381606051001" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-wa">
              <i className="fab fa-whatsapp"></i> {t("WHATSAPP")}
            </a>
          </div>
        </div>

        <div className="hero-features">
          <div className="hero-feature">
            <i className="fas fa-tag"></i>
            <div>
              <strong>{t("FIKSNA CENA")}</strong>
              <span>{t("Od")} €50</span>
            </div>
          </div>

          <div className="hero-feature">
            <i className="fas fa-plane-arrival"></i>
            <div>
              <strong>{t("PRACENJE LETA")}</strong>
              <span>Nikola Tesla</span>
            </div>
          </div>

          <div className="hero-feature">
            <i className="fas fa-handshake"></i>
            <div>
              <strong>{t("DOCEK SA TABLOM")}</strong>
              <span>{t("Sa vašim imenom")}</span>
            </div>
          </div>

          <div className="hero-feature">
            <i className="fas fa-clock"></i>
            <div>
              <strong>{t("24/7 PODRSKA")}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* === HOW IT WORKS === */}
      <section className="transfer-steps-section" id="how-it-works">
        <div className="section-header">
          <h2 className="section-title">{t("KAKO FUNKCIONISE")}</h2>
        </div>

        <div className="transfer-steps">
          <div className="transfer-step">
            <div className="transfer-step-num">1</div>
            <i className="fas fa-paper-plane"></i>
            <h3>{t("Pošaljite zahtev")}</h3>
            <p>{t("Popunite formu ili nas kontaktirajte na WhatsApp — odgovaramo u najkraćem roku.")}</p>
          </div>

          <div className="transfer-step">
            <div className="transfer-step-num">2</div>
            <i className="fas fa-plane-departure"></i>
            <h3>{t("Pratimo vaš let")}</h3>
            <p>{t("Ako let kasni, vozač prilagođava vreme dolaska — bez dodatnih troškova.")}</p>
          </div>

          <div className="transfer-step">
            <div className="transfer-step-num">3</div>
            <i className="fas fa-user-tie"></i>
            <h3>{t("Doček na aerodromu")}</h3>
            <p>{t("Vozač vas čeka u dolasku sa tablom sa vašim imenom i preuzima prtljag.")}</p>
          </div>

          <div className="transfer-step">
            <div className="transfer-step-num">4</div>
            <i className="fas fa-route"></i>
            <h3>{t("Udoban prevoz")}</h3>
            <p>{t("Vozimo vas direktno na vašu adresu u luksuznom vozilu sa full kasko osiguranjem.")}</p>
          </div>
        </div>
      </section>

      {/* === TRANSFER PRICES === */}
      <section className="transfer-prices-section" id="transfer-prices">
        <div className="section-header">
          <h2 className="section-title">{t("CENE TRANSFERA")}</h2>
          <p>{t("Cene se odnose na sva vozila")}</p>
        </div>

        <div className="transfer-price-card">
          <div className="transfer-price-row transfer-price-head">
            <span>{t("Usluga")}</span>
            <strong>{t("Cena")}</strong>
          </div>

          <div className="transfer-price-row">
            <span><i className="fas fa-plane-arrival"></i> {t("Aerodrom – Grad")}</span>
            <strong>€50</strong>
          </div>

          <div className="transfer-price-row">
            <span><i className="fas fa-plane-departure"></i> {t("Grad – Aerodrom")}</span>
            <strong>€50</strong>
          </div>

          <div className="transfer-price-row">
            <span><i className="fas fa-map-marker-alt"></i> {t("Dodatna lokacija")}</span>
            <strong>+€10</strong>
          </div>

          <ul className="transfer-price-notes">
            <li><i className="fas fa-check"></i> {t("Cena je po vozilu, a ne po putniku.")}</li>
            <li><i className="fas fa-check"></i> {t("Bez skrivenih troškova")}</li>
            <li><i className="fas fa-check"></i> {t("Za destinacije van Beograda cena je po dogovoru.")}</li>
          </ul>

          <button
            className="submit-btn"
            onClick={() => scrollToSection('transfer-booking')}
          >
            {t("REZERVISI")}
          </button>
        </div>
      </section>

      {/* === TRANSFER FLEET === */}
      <section className="fleet-section" id="transfer-fleet">
        <div className="section-header">
          <h2 className="section-title">{t("VOZILA ZA TRANSFER")}</h2>
        </div>

        <div className="fleet-grid">
          {transferFleet.map((car) => (
            <div className="fleet-card" key={car.name}>
              <div className="service-front">
                <img src={car.image} alt={car.name} className="card-image" />
                <div className="card-content">
                  <h3>{car.name}</h3>

                  <div className="fleet-card-footer">
                    <div className="transfer-seats">
                      <i className="fas fa-users"></i> {car.seats} {t("sedišta")}
                    </div>

                    <button
                      className="luxury-btn"
                      onClick={() => chooseVehicle(car.name)}
                    >
                      {t("Izaberi vozilo")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === BOOKING SECTION === */}
      <section className="booking-section" id="transfer-booking">
        <div className="section-header">
          <h2 className="section-title">{t("REZERVISITE TRANSFER")}</h2>
        </div>

        <div className="booking-container">
          <div className="booking-form">
            <form
              action="https://formsubmit.co/info@wintagecar.rs"
              method="POST"
            >
              <input
                type="hidden"
                name="_next"
                value="https://www.wintagecar.rs/thank-you"
              />
              <input
                type="hidden"
                name="_subject"
                value="Nova rezervacija - Aerodrom Transfer"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="Service" value="Airport Transfer" />

              <div className="form-group">
                <label>{t("Smer")} *</label>
                <select
                  name="Direction"
                  required
                  className="service-select"
                  value={direction}
                  onChange={(e) => setDirection(e.target.value)}
                >
                  <option value="">...</option>
                  <option value="Aerodrom – Grad">{t("Aerodrom – Grad")}</option>
                  <option value="Grad – Aerodrom">{t("Grad – Aerodrom")}</option>
                  <option value="Povratni transfer">{t("Povratni transfer")}</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{t("Datum")} *</label>
                  <input type="date" name="Date" required />
                </div>

                <div className="form-group">
                  <label>{t("Vreme")} *</label>
                  <input type="time" name="Time" required />
                </div>
              </div>

              {direction === "Povratni transfer" && (
                <div className="form-row">
                  <div className="form-group">
                    <label>{t("Datum povratka")} *</label>
                    <input type="date" name="Return Date" required />
                  </div>

                  <div className="form-group">
                    <label>{t("Vreme povratka")} *</label>
                    <input type="time" name="Return Time" required />
                  </div>
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label>{t("Broj leta")}</label>
                  <input type="text" name="Flight Number" placeholder={t("Opciono")} />
                </div>

                <div className="form-group">
                  <label>{t("Broj putnika")} *</label>
                  <input type="number" name="Passengers" min="1" max="8" required />
                </div>
              </div>

              <div className="form-group">
                <label>{t("Adresa preuzimanja")} *</label>
                <input type="text" name="Pick-up Address" required />
              </div>

              <div className="form-group">
                <label>{t("Adresa destinacije")} *</label>
                <input type="text" name="Drop-off Address" required />
              </div>

              <div className="form-group">
                <label>{t("Vozilo")} *</label>
                <select
                  name="Vehicle"
                  required
                  className="vehicle-select"
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                >
                  <option value="">...</option>
                  {transferFleet.map((car) => (
                    <option key={car.name} value={car.name}>{car.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{t("Ime")} *</label>
                  <input type="text" name="First Name" required />
                </div>

                <div className="form-group">
                  <label>{t("Prezime")} *</label>
                  <input type="text" name="Last Name" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{t("Whatsapp broj")} *</label>
                  <input type="tel" name="Phone" required />
                </div>
              </div>

              <div className="form-group">
                <label>{t("Poruka")}</label>
                <textarea name="Message" rows="4"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                {t("POSALJI ZAHTEV")}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="transfer-faq-section" id="transfer-faq">
        <div className="section-header">
          <h2 className="section-title">{t("CESTA PITANJA")}</h2>
        </div>

        <div className="faq-list">
          <details className="faq-item">
            <summary>{t("Šta ako moj let kasni?")}</summary>
            <p>{t("Pratimo status vašeg leta i vozač prilagođava vreme dolaska. Nema dodatne naplate za kašnjenje leta.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Gde me vozač čeka?")}</summary>
            <p>{t("U dolaznom terminalu Aerodroma Nikola Tesla, sa tablom na kojoj je vaše ime.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Da li je cena po putniku ili po vozilu?")}</summary>
            <p>{t("Cena je po vozilu. Vozilo birate prema broju putnika i prtljaga.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Koliko putnika može da primi vozilo?")}</summary>
            <p>{t("Mercedes-Benz V 300 ima do 8 sedišta, a Škoda Superb 5 sedišta.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Da li mogu da dodam još jednu adresu?")}</summary>
            <p>{t("Da. Svaka dodatna lokacija se naplaćuje +10€.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Koliko unapred treba rezervisati?")}</summary>
            <p>{t("Preporučujemo najmanje 24 sata unapred, ali primamo i zahteve u kraćem roku — pozovite nas ili pišite na WhatsApp.")}</p>
          </details>
        </div>
      </section>

      {/* === CONTACT SECTION === */}
      <section className="contact-section" id="contact">
        <div className="section-header">
          <h2 className="section-title">{t("KONTAKT")}</h2>
          <p>{t("Kontaktirajte nas za rezervacije i dodatne informacije")}</p>
        </div>

        <div className="contact-container">
          <a className="contact-item" href="tel:+381606051001">
            <i className="fas fa-phone"></i>
            <span className="contact-text">+381 60 605 1001</span>
          </a>

          <a className="contact-item" href="mailto:info@wintagecar.rs">
            <i className="fas fa-envelope"></i>
            <span className="contact-text">info@wintagecar.rs</span>
          </a>

          <a className="contact-item" href="https://maps.google.com/?q=Tosin+bunar+222,+11070+Beograd" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-map-marker-alt"></i>
            <span className="contact-text">{t("Tosin bunar 222, 11070 Beograd")}</span>
          </a>

          <div className="contact-social">
            <a href="https://instagram.com/wincar_belgrade" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>

      <div className="floating-actions">
        <a href="tel:+381606051001" className="floating-call">
          <i className="fas fa-phone"></i>
        </a>

        <a
          href="https://wa.me/381606051001"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </>
  );
}
