import './styleCardInformacaoContato.css';

export default function CardInformacaoContato(){
    return(
        <>
        <div className='divCardContato'>
            <section className='sectionCardContato'>
                <h2>Informações de contato</h2>
                <hr />
                <p className='subtitleGreen'>Email:</p>
                <p>ecoviva@gmail.com</p>
                <p className='subtitleGreen'>Endereço:</p>
                <p>Rua das Flores, 123 <br />
                    Bairro Jardim Felicidade <br />
                    Cidade Nova Esperança <br />
                    Estado Imaginário <br />
                    CEP: 12345-678 <br />
                    País das Maravilhas
                </p>
            </section>

        </div>
        </>
    )
}