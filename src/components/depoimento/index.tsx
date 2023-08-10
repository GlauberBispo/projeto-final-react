import "./style.css";
import depo from "../../assets/profile-pic.svg";
import stars from "../../assets/stars.svg";
export default function Depoimentos() {
  return (
    <>
      <div className="container-depo">
        <img src={depo} alt="Foto de perfil de uma mulher de cabelos castanho escuro comprido, olhos claros e batom vermelho" />
        <div className="depoiment">
          <p>
            “Sabe, eu nunca fui uma pessoa muito engajada em questões
            ambientais, mas tudo mudou quando descobri os produtos da Ecoviva.
            Fiquei impressionado com a beleza e a qualidade de cada item, mas o
            que realmente me conquistou foi o compromisso da marca com a
            sustentabilidade. Desde então, cada escolha de compra se tornou mais
            significativa para mim. Usar os produtos da Ecoviva me faz sentir
            parte de algo maior, uma mudança positiva para o planeta.”
          </p>
          <p><strong>Aline Gomes</strong>, professora</p>
          <img src={stars} alt="" />
        </div>
      </div>
    </>
  );
}
