import './style.css'

export default function Faq () {
    return (
        <section className="FAQ container" id="FAQ">
        <h1>FAQ</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button custom-accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                Como acessar os produtos?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p id="accordion1">
                  Para acessar os produtos é necessário clicar no botão "Entre |
                  Cadastre-se", criar uma conta e efetuar seu login! Logo após
                  clique em "Produtos" no cabeçalho ou no footer.
                </p>
                <button className="btn btn-light" id="ler-em-voz-alta-1">
                  Ler em voz alta
                </button>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                Como acessar a página de contato?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p id="accordion2">
                  Para acessar a página de contato é necessário clicar no botão
                  "Entre | Cadastre-se", criar uma conta e efetuar seu login!
                  Logo após clique em "Contato" no cabeçalho ou no footer.
                </p>
                <button className="btn btn-light" id="ler-em-voz-alta-2">
                  Ler em voz alta
                </button>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                Vocês tem calculadora de frete?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p id="accordion3">
                  Sim! Temos na página de produtos. Para chegar lá é necessário
                  clicar no botão "Entre | Cadastre-se", criar uma conta e
                  efetuar seu login! Logo após clique em "Produtos" no cabeçalho
                  ou no footer.
                </p>
                <button className="btn btn-light" id="ler-em-voz-alta-3">
                  Ler em voz alta
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}