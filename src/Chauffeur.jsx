import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLang } from "./LanguageContext";

import logo from "./assets/images/logo7.PNG";

const heroImages = [
  '/slika1.JPG',
  '/sk3.JPG',
  '/slika44.jpg',
  '/ex_nova.jpg',
  '/slika5.JPG',
];

const chauffeurFleet = [
  { name: "Mercedes-Benz V 300 2025", image: "/slika2.JPG", seats: 8, price: 230 },
  { name: "Mercedes-Benz V 300 4x4 Exclusive 2025", image: "/ex_nova.jpg", seats: 7, price: 250 },
  { name: "Škoda Superb L&K 2025", image: "/sk3.JPG", seats: 5, price: 190 },
  { name: "Škoda Superb 4x4 L&K 2025", image: "/sk_nova.jpg", seats: 5, price: 200 },
  { name: "Škoda Superb 4x4 Selection 2025", image: "/sk2.JPG", seats: 5, price: 190 },
];

export default function Chauffeur() {
  const { t, changeLanguage, lang } = useLang();

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // === PAGE SEO ===
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Chauffeur Service Belgrade | Car with Driver – WinCar";

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
      "Hire a luxury car with a professional chauffeur in Belgrade. Fixed 8-hour packages with a 250 km range, Mercedes V Class and Škoda Superb vehicles, from €190."
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
    scrollToSection('chauffeur-booking');
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
            <li><a href="#chauffeur-prices" className="nav-link" onClick={() => setMenuOpen(false)}>{t("CENE")}</a></li>
            <li><a href="#chauffeur-how" className="nav-link" onClick={() => setMenuOpen(false)}>{t("KAKO FUNKCIONISE")}</a></li>
            <li><a href="#chauffeur-fleet" className="nav-link" onClick={() => setMenuOpen(false)}>{t("VOZILA")}</a></li>
            <li className="nav-booking-item"><a href="#chauffeur-booking" className="nav-link" onClick={() => setMenuOpen(false)}>{t("REZERVACIJA")}</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>{t("KONTAKT")}</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="luxury-btn"
            onClick={() => scrollToSection('chauffeur-booking')}
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
            <span className="hero-word">Chauffeur</span>
            {" "}
            <span className="hero-word">Service</span>
          </h1>

          <div className="hero-divider" />
          <p className="hero-tagline">{t("Vaš privatni vozač na raspolaganju")}</p>

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
            <i className="fas fa-hourglass-half"></i>
            <div>
              <strong>{t("8 SATI")}</strong>
              <span>{t("Fiksna cena")}</span>
            </div>
          </div>

          <div className="hero-feature">
            <i className="fas fa-road"></i>
            <div>
              <strong>{t("DOMET 250KM")}</strong>
              <span>{t("Uključeno u cenu")}</span>
            </div>
          </div>

          <div className="hero-feature">
            <i className="fas fa-user-tie"></i>
            <div>
              <strong>{t("PROFESIONALNI VOZAC")}</strong>
              <span>{t("Diskrecija")}</span>
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

      {/* === PRICES === */}
      <section className="transfer-prices-section" id="chauffeur-prices">
        <div className="section-header">
          <h2 className="section-title">{t("CENE SA VOZACEM")}</h2>
          <p>{t("Fiksna cena za 8 sati vožnje i domet do 250 km")}</p>
        </div>

        <div className="transfer-price-card">
          <div className="transfer-price-row transfer-price-head">
            <span>{t("Vozilo")}</span>
            <strong>{t("Cena")}</strong>
          </div>

          {chauffeurFleet.map((car) => (
            <div className="transfer-price-row" key={car.name}>
              <span><i className="fas fa-car"></i> {car.name}</span>
              <strong>€{car.price}</strong>
            </div>
          ))}

          <ul className="transfer-price-notes">
            <li><i className="fas fa-check"></i> {t("Cena je po vozilu, a ne po putniku.")}</li>
            <li><i className="fas fa-check"></i> {t("U cenu je uključena unapred definisana dnevna kilometraža.")}</li>
            <li><i className="fas fa-check"></i> {t("Dodatni sati i prekoračenje kilometraže naplaćuju se po dogovoru.")}</li>
            <li><i className="fas fa-check"></i> {t("Za duže relacije i posebne zahteve cena se dogovara individualno.")}</li>
          </ul>

          <button
            className="submit-btn"
            onClick={() => scrollToSection('chauffeur-booking')}
          >
            {t("REZERVISI")}
          </button>
        </div>
      </section>

      {/* === HOW IT WORKS === */}
      <section className="transfer-steps-section" id="chauffeur-how">
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
            <i className="fas fa-calendar-check"></i>
            <h3>{t("Dogovaramo detalje")}</h3>
            <p>{t("Potvrđujemo vozilo, vreme početka i plan vožnje prema vašim potrebama.")}</p>
          </div>

          <div className="transfer-step">
            <div className="transfer-step-num">3</div>
            <i className="fas fa-user-tie"></i>
            <h3>{t("Vozač dolazi na adresu")}</h3>
            <p>{t("Profesionalni vozač vas preuzima na dogovorenoj adresi, tačno na vreme.")}</p>
          </div>

          <div className="transfer-step">
            <div className="transfer-step-num">4</div>
            <i className="fas fa-route"></i>
            <h3>{t("Vozilo vam je na raspolaganju")}</h3>
            <p>{t("Tokom 8 sati vozač je uz vas — bez brige o parkingu, ruti i vožnji.")}</p>
          </div>
        </div>
      </section>

      {/* === FLEET === */}
      <section className="fleet-section" id="chauffeur-fleet">
        <div className="section-header">
          <h2 className="section-title">{t("VOZILA SA VOZACEM")}</h2>
        </div>

        <div className="fleet-grid">
          {chauffeurFleet.map((car) => (
            <div className="fleet-card" key={car.name}>
              <div className="service-front">
                <img src={car.image} alt={car.name} className="card-image" />
                <div className="card-content">
                  <h3>{car.name}</h3>

                  <div className="fleet-card-footer">
                    <div className="fleet-starting-price">
                      €{car.price}<span>/8{t("h")}</span>
                    </div>

                    <button
                      className="luxury-btn"
                      onClick={() => chooseVehicle(car.name)}
                    >
                      {t("Izaberi vozilo")}
                    </button>
                  </div>

                  <div className="transfer-seats chauffeur-seats">
                    <i className="fas fa-users"></i> {car.seats} {t("sedišta")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === BOOKING SECTION === */}
      <section className="booking-section" id="chauffeur-booking">
        <div className="section-header">
          <h2 className="section-title">{t("REZERVISITE VOZACA")}</h2>
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
                value="Nova rezervacija - Vozilo sa vozacem"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="Service" value="Chauffeur Service" />

              <div className="form-row">
                <div className="form-group">
                  <label>{t("Datum")} *</label>
                  <input type="date" name="Date" required />
                </div>

                <div className="form-group">
                  <label>{t("Vreme početka")} *</label>
                  <input type="time" name="Start Time" required />
                </div>
              </div>

              <div className="form-group">
                <label>{t("Trajanje")} *</label>
                <select name="Duration" required className="service-select">
                  <option value="">...</option>
                  <option value="8h">{t("8 sati (standardni paket)")}</option>
                  <option value="8h+">{t("Više od 8 sati (po dogovoru)")}</option>
                </select>
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
                  {chauffeurFleet.map((car) => (
                    <option key={car.name} value={car.name}>{car.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{t("Adresa preuzimanja")} *</label>
                  <input type="text" name="Pick-up Address" required />
                </div>

                <div className="form-group">
                  <label>{t("Broj putnika")} *</label>
                  <input type="number" name="Passengers" min="1" max="8" required />
                </div>
              </div>

              <div className="form-group">
                <label>{t("Plan vožnje / destinacije")}</label>
                <input type="text" name="Itinerary" placeholder={t("Opciono")} />
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
      <section className="transfer-faq-section" id="chauffeur-faq">
        <div className="section-header">
          <h2 className="section-title">{t("CESTA PITANJA")}</h2>
        </div>

        <div className="faq-list">
          <details className="faq-item">
            <summary>{t("Šta je uključeno u cenu?")}</summary>
            <p>{t("Vozilo sa profesionalnim vozačem na 8 sati i unapred definisana kilometraža do 250 km.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Šta ako mi treba više od 8 sati?")}</summary>
            <p>{t("Dodatni sati se naplaćuju po dogovoru — navedite željeno trajanje u zahtevu i poslaćemo vam ponudu.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Šta ako prekoračim 250 km?")}</summary>
            <p>{t("Prekoračenje dogovorene kilometraže naplaćuje se dodatno, po dogovoru.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Da li mogu da menjam rutu tokom dana?")}</summary>
            <p>{t("Da, u okviru dogovorenih 8 sati i predviđene kilometraže vozilo i vozač su na vašem raspolaganju.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Da li je moguća vožnja van Beograda?")}</summary>
            <p>{t("Da. Za duže relacije i vanredne termine cena se dogovara individualno.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Koliko putnika može da primi vozilo?")}</summary>
            <p>{t("Mercedes-Benz V 300 ima do 8 sedišta, a Škoda Superb 5 sedišta.")}</p>
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
