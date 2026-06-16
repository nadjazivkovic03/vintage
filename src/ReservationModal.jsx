// ReservationModal.jsx
import { useLang } from "./LanguageContext";
import { useEffect } from "react";

export default function ReservationModal({
  car,
  isOpen,
  onClose,
}) {
    useEffect(() => {
  console.log("ReservationModal effect", isOpen);

  if (!isOpen) return;

  document.body.style.position = "fixed";
  document.body.style.overflow = "hidden";

  console.log("Scroll locked");

  return () => {
    console.log("Scroll unlocked");

    document.body.style.position = "";
    document.body.style.overflow = "";
  };
}, [isOpen]);
    const { t } = useLang();
  if (!isOpen || !car) return null;

  return (
    <div className="reservation-overlay">

      <div className="reservation-modal">

        <button
          className="reservation-close"
          onClick={onClose}
        >
          ×
        </button>

        <h2>{t("REZERVACIJA VOZILA")}</h2>

        <div className="reservation-car">

          <img
            src={car.image}
            alt={car.name}
          />

          <div className="reservation-car-info">

            <h3>{car.name}</h3>
  

            <div className="car-specs">
              <span>{t("Automatik")}</span>
              <span>Diesel</span>        
              <span>{car.seats} {t("sedišta")}</span>
            </div>

            <div className="car-price">
              {t("Od")} €{car.price}/{t("dan")}
            </div>

          </div>
        </div>

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
                value="Nova rezervacija vozila"
            />

            <input
                type="hidden"
                name="_captcha"
                value="false"
            />

            <input
                type="hidden"
                name="Vehicle"
                value={car.name}
            />

          <input
            type="text"
            name="Name"
            placeholder={t("Ime i prezime")}
            required
          />

          <input
            type="tel"
            name="Phone"
            placeholder={t("Telefon / WhatsApp")}
            required
          />

          <div className="date-group">
            <label>{t("Datum preuzimanja")}</label>
            <input
                type="date"
                name="Pickup"
                required
            />
            </div>

            <div className="date-group">
            <label>{t("Datum vraćanja")}</label>
            <input
                type="date"
                name="Return"
                required
            />
            </div>

          <button
            type="submit"
            className="submit-btn"
          >
            {t("POŠALJI UPIT")}
          </button>

        </form>

      </div>

    </div>
  );
}