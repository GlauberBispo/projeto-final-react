import './style.css'
import ecoCup from '../../assets/EcoCup-1.png'
import star from '../../assets/star-card-product.svg'

export default function Card () {
    return (
        <div className="card">
            <img src={ecoCup} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                EcoCup “Sonhar viver e todos os dias agradecer”
              </h5>

              <img src={star} alt="" />
              <p className="tag">EcoCup</p>
              <div className="preco-favorito">
                <span>R$ 50,00</span>
                
              </div>
              <div className="button-card">
                <button type="button" className="btn-add">
                  Adicionar
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.8em"
                  viewBox="0 0 576 512">
                  <path
                    d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" />
                </svg>
              </div>
            </div>
          </div>
    )
}