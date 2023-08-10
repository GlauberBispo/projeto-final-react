import './style.css'

export default function Footer () {
    return (
        <>
        <footer>
            <h2 className='footer-h2'>Faça a diferença com a EcoViva!</h2>
            <div className='footer-container-list'>
                <div className='footer-container-links'>
                    <span>EcoVida</span>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Produtos</a></li>
                        <li><a href="">Contato</a></li>
                        <li><a href="">Entre ou Cadastre-se</a></li>
                    </ul>
                </div>
                <div className='footer-container-links'>
                    <span>Produtos</span>
                    <ul>
                        <li><a href="">Camiseta</a></li>
                        <li><a href="">Ecobag</a></li>
                        <li><a href="">Eco cup</a></li>
                        <li><a href="">Caneca</a></li>
                    </ul>
                </div>                
            </div>
            <div className="line"></div>
            <div className='information'>
                <p>Copyright © EcoViva</p>
                <p>EcoViva, CNPJ XX.XXX.XXX/XXXX-XX</p>
                <a href="#">Políticas de privacidade</a>
            </div>
        </footer>
        </>
    )
}