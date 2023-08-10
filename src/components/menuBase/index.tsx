import {Link} from 'react-router-dom'

interface MenuBaseProps{
    children: React.ReactNode;
    to: string;
}

export default function MenuBase({to, children}: MenuBaseProps):JSX.Element{
    return(
        <>
        <Link to={to}>
            {children}
        </Link>
        </>
    )
}