import Logo from '../../assets/logo.svg'
import './styleHeader.css'

interface HeaderProps{
    children: React.ReactNode
}

export default function Header({children}:HeaderProps):JSX.Element {
    return (
        <>
        <header className='headerPrincipal'>
            <a href="/"><img src={Logo} alt="" /></a>
            {children}
        </header>
        </>
    )
}