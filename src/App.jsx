import { Routes, Route } from "react-router-dom";
import ThankYou from "./thankyou";

import './styles/global.css';

import logo from './assets/images/logo11.png';

import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  // === JS HELPERS (FROM ORIGINAL HTML) ===
  const toggleServicePrice = (e) => {
    const card = e.target.closest('.price-card');
    if (card) card.classList.toggle('active');
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Routes>
      <Route
      path="/"
      element={
      <>
      {/* === ADVANCED BACKGROUND EFFECTS === */}
      <div className="gradient-background"></div>
      <div className="grid-pattern"></div>
      <div className="gold-particles" id="goldParticles"></div>

      {/* === LUXURY HEADER === */}
      <header className="luxury-header">
        <a href="#" className="brand">
          <div className="brand-logo">
            <img src={logo} alt="VintageCAR Logo" />
          </div>
          <div className="brand-name">Vintage CAR</div>
        </a>

        <nav className="nav">
  <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
    <li><a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>POCETNA</a></li>
    <li><a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>O NAMA</a></li>
    <li><a href="#fleet" className="nav-link" onClick={() => setMenuOpen(false)}>VOZILA</a></li>
    <li><a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>KONTAKT</a></li>
  </ul>
</nav>

<div className="header-actions">
<button
  className="luxury-btn"
  onClick={() => scrollToSection('booking')}
>
  <i className="fas fa-gem"></i> REZERVISI
</button>

  <button
    className="menu-toggle"
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
        <div className="hero-content">
          <h1 className="hero-title">Elegance on Wheels</h1>
          <p className="hero-subtitle">
            Dobrodošli u svet vrhunskog luksuza i besprekornog komfora. Naša rent a car
            ponuda obuhvata pažljivo odabrana luksuzna vozila namenjena onima koji ne
            pristaju na kompromis. Bilo da putujete poslovno ili privatno, obezbeđujemo
            iskustvo vožnje koje odiše stilom, sigurnošću i prestižom.
          </p>

          <div className="hero-buttons">
            <button
              className="luxury-btn"
              onClick={() => scrollToSection('fleet')}
            >
              <i className="fas fa-search"></i> PONUDA VOZILA
            </button>
          </div>
        </div>

        {/* FLOATING CARS */}
        <div className="hero-image">
  <img src="/flfl.png" alt="Luxury vehicle" />
</div>

      </section>
            {/* === VALUES SECTION === */}
            <section className="values" id="values">
        <div className="values-list">
          <div className="value-item">
            <i className="fas fa-car"></i>
            <h3>Vrhunska Vozila</h3>
            <p>Pažljivo odabrana flota najvišeg standarda</p>
          </div>

          <div className="value-item">
            <i className="fas fa-clock"></i>
            <h3>Tačnost</h3>
            <p>Uvek na vreme, bez izuzetaka</p>
          </div>

          <div className="value-item">
            <i className="fas fa-user-shield"></i>
            <h3>Sigurnost</h3>
            <p>Diskretna i bezbedna vožnja u svakom trenutku</p>
          </div>

          <div className="value-item">
            <i className="fas fa-star"></i>
            <h3>Personalizovana Usluga</h3>
            <p>Prevoz prilagođen vašim potrebama i navikama</p>
          </div>
        </div>
      </section>

      {/* === SERVICES SECTION === */}
      <section className="services-section" id="services">
        <div className="section-header">
          <h2 className="section-title">NASE USLUGE</h2>
          <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>
            Obezbedjujemo Vam luksuzan prevoz za svaku priliku
          </p>
        </div>

        <div className="services-container">

          {/* AIRPORT TRANSFER */}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-plane"></i>
            </div>
            <h3 className="service-title">Aerodrom Transfer</h3>
            <p className="service-description">
              Lagodan prevoz do i od Aerodroma
            </p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> Pratimo Vas let</li>
              <li><i className="fas fa-check"></i> Docekujemo Vas na aerodromu ili na vasoj adresi</li>
              <li><i className="fas fa-check"></i> Preuzimamo prtljag</li>
              <li><i className="fas fa-check"></i> Prevozimo Vas na destinaciju u luksuznom vozilu</li>
              <li><i className="fas fa-check"></i> Dodatna lokacija: +10€</li>
              <li><i className="fas fa-check"></i> Cena po vozilu</li>
            </ul>
            <div className="service-cta">
              <span className="service-price">Cena : €50</span>
              <button
                className="service-btn"
                onClick={() => scrollToSection('booking')}
              >
                Zakazi
              </button>
            </div>
          </div>

          {/* CHAUFFEUR SERVICE */}
          <div className="service-card price-card">
            <div className="service-front">
              <div className="service-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3 className="service-title">Rentiranje vozila sa vozačem (8 sati)</h3>
              <p className="service-description">
                Vaš privatni vozač na raspolaganju
              </p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Odabir datuma</li>
                <li><i className="fas fa-check"></i> Privatnost</li>
                <li><i className="fas fa-check"></i> Izbor vozila</li>
              </ul>
              <div className="service-cta">
                <button className="service-btn" onClick={toggleServicePrice}>
                  Pogledaj cenovnik
                </button>
              </div>
            </div>

            <div className="service-back">
              <h3 className="service-title">Cenovnik</h3>

              <div className="price-line">
                <span>Mercedes-Benz V Class 2025</span>
                <strong>€270</strong>
              </div>

              <div className="price-line">
                <span>Škoda Superb 2025</span>
                <strong>€220</strong>
              </div>

              <button className="service-btn back-btn" onClick={toggleServicePrice}>
                Nazad
              </button>
            </div>
          </div>
                  {/* LUXURY RENTAL – WITHOUT DRIVER */}
                  <div className="service-card price-card">
            {/* FRONT */}
            <div className="service-front">
              <div className="service-icon">
                <i className="fas fa-car"></i>
              </div>
              <h3 className="service-title">Iznajmljivanje luksuznog vozila</h3>
              <p className="service-description">
                Iznajmite luksuzno vozilo za sopstvenu vožnju.
              </p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Potpuno osiguranje</li>
                <li><i className="fas fa-check"></i> Premium vozila</li>
                <li><i className="fas fa-check"></i> 24/7 podrška</li>
              </ul>
              <div className="service-cta">
                <button className="service-btn" onClick={toggleServicePrice}>
                  Pogledaj cenovnik
                </button>
              </div>
            </div>

            {/* BACK / PRICE MENU */}
            <div className="service-back">
              <h3 className="service-title">Cenovnik – Bez vozača</h3>

              <div className="price-block">
                <h4>Mercedes-Benz V Class 2025</h4>
                <div className="price-line"><span>1–3 dana</span><strong>€200</strong></div>
                <div className="price-line"><span>4–7 dana</span><strong>€150</strong></div>
                <div className="price-line"><span>8–15 dana</span><strong>€120</strong></div>
                <div className="price-line"><span>16–31 dana</span><strong>€105</strong></div>
                <div className="price-line"><span>31+ dana</span><strong>€85</strong></div>
              </div>

              <div className="price-block">
                <h4>Škoda Superb L&amp;K 2025</h4>
                <div className="price-line"><span>1–3 dana</span><strong>€110</strong></div>
                <div className="price-line"><span>4–7 dana</span><strong>€90</strong></div>
                <div className="price-line"><span>8–15 dana</span><strong>€80</strong></div>
                <div className="price-line"><span>16–31 dana</span><strong>€65</strong></div>
                <div className="price-line"><span>31+ dana</span><strong>€55</strong></div>
              </div>

              <button className="service-btn back-btn" onClick={toggleServicePrice}>
                Nazad
              </button>
            </div>
          </div>

        </div>
      </section>
            {/* === FLEET SECTION === */}
            <section className="fleet-section" id="fleet">
        <div className="section-header">
          <h2 className="section-title">NASA VOZILA</h2>
        </div>

        <div className="fleet-grid">

          {/* MERCEDES V CLASS */}
          <div className="fleet-card price-card">
            {/* FRONT */}
            <div className="service-front">
              <img
                src="/mece.jpg"
                alt="Mercedes V Class"
                className="card-image"
              />

              <div className="card-content">
                <h3>Mercedes-Benz V Class 2025</h3>
                {/* <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p> */}

                <button
                  className="luxury-btn"
                  style={{ width: '100%', marginTop: '20px' }}
                  onClick={toggleServicePrice}
                >
                  Pogledaj cenovnik
                </button>
              </div>
            </div>

            {/* BACK */}
            <div className="service-back">
              <h3 className="service-title">Mercedes-Benz V Class 2025</h3>

              <div className="price-block">
                <h4>Sa vozačem (8 sati)</h4>
                <div className="price-line">
                  <span>Fiksna cena</span>
                  <strong>€270</strong>
                </div>
              </div>

              <div className="price-block">
                <h4>Bez vozača</h4>
                <div className="price-line"><span>1–3 dana</span><strong>€200</strong></div>
                <div className="price-line"><span>4–7 dana</span><strong>€150</strong></div>
                <div className="price-line"><span>8–15 dana</span><strong>€120</strong></div>
                <div className="price-line"><span>16–31 dana</span><strong>€105</strong></div>
                <div className="price-line"><span>31+ dana</span><strong>€85</strong></div>
              </div>

              <button
                className="luxury-btn back-btn"
                onClick={toggleServicePrice}
              >
                Nazad
              </button>
            </div>
          </div>

          {/* SKODA SUPERB */}
          <div className="fleet-card price-card">
            {/* FRONT */}
            <div className="service-front">
              <img
                src="/skoda2.jpg"
                alt="Škoda Superb"
                className="card-image"
              />

              <div className="card-content">
                <h3>Škoda Superb L&amp;K 2025</h3>
                {/* <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p> */}

                <button
                  className="luxury-btn"
                  style={{ width: '100%', marginTop: '20px' }}
                  onClick={toggleServicePrice}
                >
                  Pogledaj cenovnik
                </button>
              </div>
            </div>

            {/* BACK */}
            <div className="service-back">
              <h3 className="service-title">Škoda Superb L&amp;K 2025</h3>

              <div className="price-block">
                <h4>Sa vozačem (8 sati)</h4>
                <div className="price-line">
                  <span>Fiksna cena</span>
                  <strong>€220</strong>
                </div>
              </div>

              <div className="price-block">
                <h4>Bez vozača</h4>
                <div className="price-line"><span>1–3 dana</span><strong>€110</strong></div>
                <div className="price-line"><span>4–7 dana</span><strong>€90</strong></div>
                <div className="price-line"><span>8–15 dana</span><strong>€80</strong></div>
                <div className="price-line"><span>16–31 dana</span><strong>€65</strong></div>
                <div className="price-line"><span>31+ dana</span><strong>€55</strong></div>
              </div>

              <button
                className="luxury-btn back-btn"
                onClick={toggleServicePrice}
              >
                Nazad
              </button>
            </div>
          </div>

        </div>
      </section>
            {/* === ABOUT SECTION === */}
            <section className="about-section" id="about">
        <div className="section-header">
          <h2 className="section-title">O NAMA</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/ll.jpeg" alt="Vintage Car" />
          </div>

          <div className="about-text">
            <p>
              Vintage Car je kompanija posvećena pružanju vrhunskih usluga luksuznog
              prevoza i iznajmljivanja premium vozila, namenjena klijentima koji
              očekuju visok standard, pouzdanost i potpunu diskreciju.
            </p>
            <p>
              Posebnu pažnju posvećujemo svakom detalju — od besprekornog stanja
              vozila, preko tačnosti i sigurnosti, do profesionalnog odnosa prema
              svakom klijentu.
            </p>
            <p>
              Bilo da putujete poslovno ili privatno, Vintage Car je vaš pouzdan
              partner za elegantan i bezbrižan prevoz.
            </p>
          </div>
        </div>
      </section>

      {/* === BOOKING SECTION === */}
      <section className="booking-section" id="booking">
        <div className="section-header">
          <h2 className="section-title">REZERVISITE SVOJU VOZNJU</h2>
        </div>

        <div className="booking-container">
          <div className="booking-form">
            <form
              action="https://formsubmit.co/zivkovic.nadja03@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_next" value="http://localhost:5173/thank-you" />

              <input type="hidden" name="_subject" value="Nova rezervacija - Vintage Car" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="form-group">
                <label>Izaberite uslugu *</label>
                <select name="Service" required className="service-select">
                  <option value="">...</option>
                  <option>Aerodrom Transfer</option>
                  <option>Vozilo sa vozačem</option>
                  <option>Iznajmljivanje luksuznog vozila</option>
                  <option>Poseban zahtev</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Ime *</label>
                  <input type="text" name="First Name" required />
                </div>
                <div className="form-group">
                  <label>Prezime *</label>
                  <input type="text" name="Last Name" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="Email" required />
                </div>
                <div className="form-group">
                  <label>Telefon *</label>
                  <input type="tel" name="Phone" required />
                </div>
              </div>

              <div className="form-group">
                <label>Poruka</label>
                <textarea name="Message" rows="4"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                POSALJI ZAHTEV
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* === CONTACT SECTION === */}
      <section className="contact-section" id="contact">
      <div className="section-header">
  <h2 className="section-title">KONTAKT</h2>
  <p>Kontaktirajte nas za rezervacije i dodatne informacije</p>
</div>


        <div className="contact-container">
        <div className="contact-item">
  <i className="fas fa-phone"></i>
  <span className="contact-text">
    <strong>Telefon:    </strong>
    <a href="tel:+381606051001">+381 60 605 1001</a>
  </span>
</div>

<div className="contact-item">
  <i className="fas fa-envelope"></i>
  <span className="contact-text">
    <strong>Email:    </strong>
    <a href="mailto:info@vintagecar.rs">info@vintagecar.rs</a>
  </span>
</div>

<div className="contact-item">
  <i className="fas fa-map-marker-alt"></i>
  <span className="contact-text">
    <strong>Adresa:    </strong> Beograd, Srbija
  </span>
</div>
        </div>
      </section>


    </>
     }
     />
 
     {/* THANK YOU PAGE */}
     <Route path="/thank-you" element={<ThankYou />} />
 
   </Routes>
  
  );
}



