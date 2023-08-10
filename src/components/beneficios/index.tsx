import React from "react";
import "./style.css";

export default function Beneficios() {
  return (
    <section className="benefits">
      <div className="benefit">
        <h2>Moda Consciente:</h2>
        <p>
          Nossas roupas são confeccionadas com tecidos ecológicos, reciclados e
          orgânicos, garantindo elegância e conforto enquanto protegemos o meio
          ambiente.
        </p>
      </div>
      

      <div className="benefit">
        <h2>Sustentabilidade:</h2>
        <p>
          Todo material utilizado em nosssos produtos é eco-friendly e não
          poluente.
        </p>
      </div>

      <div className="benefit">
        <h2>Reutilizar e Reciclar:</h2>
        <p>
          Na Ecoviva, acreditamos no poder da reciclagem e reutilização. Nossos
          acessórios e utensílios são projetados para serem duráveis e
          reutilizáveis, reduzindo o desperdício e contribuindo para um futuro
          mais verde.
        </p>
      </div>
    </section>
  );
}