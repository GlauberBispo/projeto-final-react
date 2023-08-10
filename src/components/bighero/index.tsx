import "./style.css";
import ecoimg from "../../assets/eco-cup-pic-desktop.jpg";
import cursorclick from "../../assets/CursorClick.svg";



export default function BigHero() {
  return (
    <div className="container-big-hero">
      <div className="big-hero-container">
        <div className="big-hero-text">
          <h1>Faça a diferença com a EcoViva!</h1>
          <p>
            Apresentamos a você a linha de produtos sustentáveis que vai
            transformar a maneira como você cuida do planeta. Na EcoViva,
            acreditamos que pequenas escolhas podem gerar grandes impactos. Por
            isso, nossos produtos são criados com o compromisso de preservar o
            meio ambiente.
          </p>
        </div>
        <div className="big-hero-img-btn">
          <img src={ecoimg} alt="mão segurando um eco copo" />
          <button type="button" className="btn-custom">
            <span>concnheça nossos produtos</span>
            <img src={cursorclick} alt="cursor click" />
            </button>          
        </div>
      </div>
    </div>
  );
}