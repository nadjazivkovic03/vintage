import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLang } from "./LanguageContext";

import logo from "./assets/images/logo7.PNG";

const heroImages = [
  '/sk_nova.jpg',
  '/slika44.jpg',
  '/audi_a3.jpg',
  '/sk3.JPG',
  '/slika2.JPG',
];

/* Vozila iz sopstvene flote, prikazana samo kao primer onoga sto je odmah dostupno.
   Cene se namerno ne prikazuju — svaki dugorocni najam se ugovara posebno,
   u zavisnosti od vozila, broja vozila i trajanja ugovora. */
const leaseFleet = [
  { name: "Mercedes-Benz V 300 2025", image: "/slika2.JPG", seats: 8 },
  { name: "Mercedes-Benz V 300 4x4 Exclusive 2025", image: "/ex_nova.jpg", seats: 7 },
  { name: "Škoda Superb L&K 2025", image: "/sk3.JPG", seats: 5 },
  { name: "Škoda Superb 4x4 L&K 2025", image: "/sk_nova.jpg", seats: 5 },
  { name: "Škoda Superb 4x4 Selection 2025", image: "/sk2.JPG", seats: 5 },
  { name: "Audi A3 Sportback 2025", image: "/audi_a3.jpg", seats: 5 },
];

const OTHER_VEHICLE = "Drugo vozilo (po zahtevu)";

export default function LongTermLease() {
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
    document.title = "Dugoročni najam vozila Beograd | Long-Term Car Lease – WinCar";

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
      "Long-term car lease in Belgrade from 30 days, for companies and individuals. Any brand and model sourced on request. Registration, servicing, full casco insurance, replacement vehicle and 24/7 roadside assistance included. Request a quote."
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
    scrollToSection('lease-booking');
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
            <li><a href="#lease-for-who" className="nav-link" onClick={() => setMenuOpen(false)}>{t("ZA KOGA")}</a></li>
            <li><a href="#lease-brands" className="nav-link" onClick={() => setMenuOpen(false)}>{t("BRENDOVI")}</a></li>
            <li><a href="#lease-prices" className="nav-link" onClick={() => setMenuOpen(false)}>{t("CENA")}</a></li>
            <li className="nav-booking-item"><a href="#lease-booking" className="nav-link" onClick={() => setMenuOpen(false)}>{t("PONUDA")}</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>{t("KONTAKT")}</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="luxury-btn"
            onClick={() => scrollToSection('lease-booking')}
          >
            <i className="fas fa-gem"></i> {t("PONUDA")}
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
            <span className="hero-word">{t("Dugoročni")}</span>
            {" "}
            <span className="hero-word">{t("najam")}</span>
          </h1>

          <div className="hero-divider" />
          <p className="hero-tagline">{t("Bilo koje vozilo, za firme i fizička lica — bez troškova vlasništva")}</p>

          <div className="hero-buttons">
            <button className="hero-btn hero-btn-call" onClick={() => scrollToSection('lease-booking')}>
              <i className="fas fa-file-signature"></i> {t("ZATRAZI PONUDU")}
            </button>
            <a href="https://wa.me/381606051001" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-wa">
              <i className="fab fa-whatsapp"></i> {t("WHATSAPP")}
            </a>
          </div>
        </div>

        <div className="hero-features">
          <div className="hero-feature">
            <i className="fas fa-calendar-alt"></i>
            <div>
              <strong>{t("OD 30 DANA")}</strong>
              <span>{t("Minimalni period")}</span>
            </div>
          </div>

          <div className="hero-feature">
            <i className="fas fa-car-side"></i>
            <div>
              <strong>{t("BILO KOJI BREND")}</strong>
              <span>{t("Po vašem izboru")}</span>
            </div>
          </div>

          <div className="hero-feature">
            <i className="fas fa-shield-alt"></i>
            <div>
              <strong>{t("PUNO KASKO")}</strong>
              <span>{t("Uključeno u cenu")}</span>
            </div>
          </div>

          <div className="hero-feature">
            <i className="fas fa-tools"></i>
            <div>
              <strong>{t("REGISTRACIJA I SERVIS")}</strong>
              <span>{t("Na nama")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* === WHO IT IS FOR === */}
      <section className="services-section" id="lease-for-who">
        <div className="section-header">
          <h2 className="section-title">{t("ZA KOGA JE DUGOROCNI NAJAM")}</h2>
          <p>{t("Isti uslovi za firme i za fizička lica — razlikuje se samo dokumentacija.")}</p>
        </div>

        <div className="services-container">

          {/* COMPANIES */}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-building"></i>
            </div>
            <h3 className="service-title">{t("Za pravna lica")}</h3>
            <p className="service-description">
              {t("Vozila za zaposlene i firmske flote, bez vezivanja kapitala.")}
            </p>

            <ul className="service-features">
              <li><i className="fas fa-check"></i> {t("Fiksan mesečni trošak, bez skrivenih stavki")}</li>
              <li><i className="fas fa-check"></i> {t("Mogućnost najma više vozila po istom ugovoru")}</li>
              <li><i className="fas fa-check"></i> {t("Vozila birate vi — bilo koji brend i klasa")}</li>
              <li><i className="fas fa-check"></i> {t("Registracija, servis i kasko su na nama")}</li>
            </ul>

            <div className="service-cta">
              <button className="service-btn" onClick={() => scrollToSection('lease-booking')}>
                {t("Zatraži ponudu")}
              </button>
            </div>
          </div>

          {/* INDIVIDUALS */}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-user"></i>
            </div>
            <h3 className="service-title">{t("Za fizička lica")}</h3>
            <p className="service-description">
              {t("Vozilo na duži period, bez kredita i bez troškova vlasništva.")}
            </p>

            <ul className="service-features">
              <li><i className="fas fa-check"></i> {t("Fiksna cena tokom celog perioda najma")}</li>
              <li><i className="fas fa-check"></i> {t("Bez kreditnog zaduženja i amortizacije")}</li>
              <li><i className="fas fa-check"></i> {t("Zamensko vozilo u slučaju kvara ili servisa")}</li>
              <li><i className="fas fa-check"></i> {t("Pomoć na putu 24/7 tokom celog najma")}</li>
            </ul>

            <div className="service-cta">
              <button className="service-btn" onClick={() => scrollToSection('lease-booking')}>
                {t("Zatraži ponudu")}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* === ANY BRAND ON REQUEST === */}
      <section className="transfer-prices-section" id="lease-brands">
        <div className="section-header">
          <h2 className="section-title">{t("BILO KOJI BREND I MODEL")}</h2>
          <p>{t("Ne morate birati samo iz naše flote — vozilo nabavljamo po vašem zahtevu.")}</p>
        </div>

        <div className="transfer-price-card">
          <ul className="transfer-price-notes">
            <li><i className="fas fa-check"></i> {t("Mercedes-Benz, BMW, Audi, Volkswagen, Škoda, Toyota i ostali brendovi.")}</li>
            <li><i className="fas fa-check"></i> {t("Limuzina, SUV, karavan, kombi ili dostavno vozilo — biramo prema nameni.")}</li>
            <li><i className="fas fa-check"></i> {t("Nova ili polovna vozila, u zavisnosti od budžeta i trajanja ugovora.")}</li>
            <li><i className="fas fa-check"></i> {t("Za veće flote obezbeđujemo više vozila po istom ugovoru.")}</li>
            <li><i className="fas fa-check"></i> {t("Recite nam koje vozilo vam treba i šaljemo ponudu sa cenom.")}</li>
          </ul>

          <button
            className="submit-btn"
            onClick={() => scrollToSection('lease-booking')}
          >
            {t("ZATRAZI VOZILO PO ZAHTEVU")}
          </button>
        </div>
      </section>

      {/* === WHAT'S INCLUDED === */}
      <section className="transfer-steps-section" id="lease-included">
        <div className="section-header">
          <h2 className="section-title">{t("STA JE UKLJUCENO")}</h2>
        </div>

        <div className="transfer-steps">
          <div className="transfer-step">
            <div className="transfer-step-num">1</div>
            <i className="fas fa-tools"></i>
            <h3>{t("Registracija i servis")}</h3>
            <p>{t("Registracija, redovan servis i održavanje vozila su u potpunosti na nama.")}</p>
          </div>

          <div className="transfer-step">
            <div className="transfer-step-num">2</div>
            <i className="fas fa-shield-alt"></i>
            <h3>{t("Puno kasko osiguranje")}</h3>
            <p>{t("Vozilo je potpuno osigurano tokom celog perioda najma.")}</p>
          </div>

          <div className="transfer-step">
            <div className="transfer-step-num">3</div>
            <i className="fas fa-car-side"></i>
            <h3>{t("Zamensko vozilo")}</h3>
            <p>{t("U slučaju kvara ili servisa dobijate zamensko vozilo, bez zastoja.")}</p>
          </div>

          <div className="transfer-step">
            <div className="transfer-step-num">4</div>
            <i className="fas fa-headset"></i>
            <h3>{t("Pomoć na putu 24/7")}</h3>
            <p>{t("Dostupni smo vam u svakom trenutku, tokom celog trajanja najma.")}</p>
          </div>
        </div>
      </section>

      {/* === HOW THE PRICE IS SET === */}
      <section className="transfer-prices-section" id="lease-prices">
        <div className="section-header">
          <h2 className="section-title">{t("KAKO SE FORMIRA CENA")}</h2>
          <p>{t("Ne radimo sa fiksnim cenovnikom — svaki najam se ugovara posebno.")}</p>
        </div>

        <div className="transfer-price-card">
          <p className="lease-price-intro">
            {t("Vozilo pribavljamo prema vašem zahtevu, pa se i cena formira za svaki zahtev posebno. Na nju utiču:")}
          </p>

          <ul className="transfer-price-notes">
            <li><i className="fas fa-check"></i> {t("Vozilo — brend, model, klasa, godište i nivo opreme.")}</li>
            <li><i className="fas fa-check"></i> {t("Broj vozila — za veće flote cena po vozilu je povoljnija.")}</li>
            <li><i className="fas fa-check"></i> {t("Trajanje ugovora — duži period znači nižu mesečnu cenu.")}</li>
            <li><i className="fas fa-check"></i> {t("Predviđena kilometraža, koja se dogovara ugovorom.")}</li>
            <li><i className="fas fa-check"></i> {t("Registracija, servis, kasko i pomoć na putu su uvek uključeni u cenu.")}</li>
          </ul>

          <p className="lease-price-outro">
            {t("Pošaljite zahtev sa vozilom koje vam treba i dobijate ponudu sa konkretnom cenom.")}
          </p>

          <button
            className="submit-btn"
            onClick={() => scrollToSection('lease-booking')}
          >
            {t("ZATRAZI PONUDU")}
          </button>
        </div>
      </section>

      {/* === FLEET === */}
      <section className="fleet-section" id="lease-fleet">
        <div className="section-header">
          <h2 className="section-title">{t("VOZILA IZ NASE FLOTE")}</h2>
          <p>{t("Dostupna odmah. Za bilo koje drugo vozilo pošaljite zahtev — cenu dobijate u ponudi.")}</p>
        </div>

        <div className="fleet-grid">
          {leaseFleet.map((car) => (
            <div className="fleet-card" key={car.name}>
              <div className="service-front">
                <img src={car.image} alt={car.name} className="card-image" />
                <div className="card-content">
                  <h3>{car.name}</h3>

                  <div className="fleet-card-footer">
                    <div className="fleet-starting-price fleet-price-on-request">
                      {t("Cena na upit")}
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

        <div className="fleet-request-cta">
          <p>{t("Tražite drugo vozilo? Nabavljamo bilo koji brend i model po zahtevu.")}</p>
          <button className="luxury-btn" onClick={() => chooseVehicle(OTHER_VEHICLE)}>
            {t("ZATRAZI VOZILO PO ZAHTEVU")}
          </button>
        </div>
      </section>

      {/* === QUOTE REQUEST === */}
      <section className="booking-section" id="lease-booking">
        <div className="section-header">
          <h2 className="section-title">{t("ZATRAZITE PONUDU")}</h2>
          <p>{t("Odgovaramo sa konkretnom cenom u najkraćem roku.")}</p>
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
                value="Novi upit - Dugorocni najam"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="Service" value="Long-Term Lease" />

              <div className="form-row">
                <div className="form-group">
                  <label>{t("Tip korisnika")} *</label>
                  <select name="Customer Type" required className="service-select">
                    <option value="">...</option>
                    <option value="company">{t("Pravno lice / firma")}</option>
                    <option value="private">{t("Fizičko lice")}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>{t("Trajanje najma")} *</label>
                  <select name="Duration" required className="service-select">
                    <option value="">...</option>
                    <option value="1-3m">{t("1–3 meseca")}</option>
                    <option value="3-6m">{t("3–6 meseci")}</option>
                    <option value="6-12m">{t("6–12 meseci")}</option>
                    <option value="12m+">{t("12+ meseci")}</option>
                  </select>
                </div>
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
                  {leaseFleet.map((car) => (
                    <option key={car.name} value={car.name}>{car.name}</option>
                  ))}
                  <option value={OTHER_VEHICLE}>{t("Drugo vozilo (po zahtevu)")}</option>
                </select>
              </div>

              {selectedVehicle === OTHER_VEHICLE && (
                <div className="form-group">
                  <label>{t("Koje vozilo vam treba?")} *</label>
                  <input
                    type="text"
                    name="Requested Vehicle"
                    required
                    placeholder={t("Npr. BMW X5, Volkswagen Passat, dostavno vozilo...")}
                  />
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label>{t("Željeni početak najma")} *</label>
                  <input type="date" name="Start Date" required />
                </div>

                <div className="form-group">
                  <label>{t("Broj vozila")}</label>
                  <input type="number" name="Number of Vehicles" min="1" placeholder="1" />
                </div>
              </div>

              <div className="form-group">
                <label>{t("Predviđena kilometraža mesečno")}</label>
                <input type="text" name="Monthly Mileage" placeholder={t("Opciono")} />
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

                <div className="form-group">
                  <label>{t("Naziv firme")}</label>
                  <input type="text" name="Company" placeholder={t("Opciono")} />
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
      <section className="transfer-faq-section" id="lease-faq">
        <div className="section-header">
          <h2 className="section-title">{t("CESTA PITANJA")}</h2>
        </div>

        <div className="faq-list">
          <details className="faq-item">
            <summary>{t("Mogu li da dobijem vozilo koje nije u vašoj floti?")}</summary>
            <p>{t("Da. Nabavljamo bilo koji brend i model po zahtevu — recite nam koje vozilo vam treba i šaljemo ponudu sa cenom.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Da li radite sa firmama i sa fizičkim licima?")}</summary>
            <p>{t("Radimo i sa jednima i sa drugima. Uslovi su isti, razlikuje se samo dokumentacija za ugovor.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Koliko traje minimalni period najma?")}</summary>
            <p>{t("Dugoročni najam počinje od 30 dana. Za kraće periode pogledajte standardno iznajmljivanje vozila.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Da li su registracija i servis uključeni?")}</summary>
            <p>{t("Da. Registracija, redovan servis i održavanje vozila su u potpunosti na nama.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Kako se određuje kilometraža?")}</summary>
            <p>{t("Kilometraža se dogovara ugovorom, u skladu sa vašim potrebama.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Šta ako se vozilo pokvari?")}</summary>
            <p>{t("Obezbeđujemo zamensko vozilo kako biste nastavili bez zastoja, uz pomoć na putu 24/7.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Da li mogu da iznajmim više vozila odjednom?")}</summary>
            <p>{t("Da. Za veće flote obezbeđujemo više vozila po istom ugovoru — navedite broj vozila u zahtevu.")}</p>
          </details>

          <details className="faq-item">
            <summary>{t("Da li je potreban depozit?")}</summary>
            <p>{t("Depozit se dogovara u zavisnosti od vozila i trajanja najma.")}</p>
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
