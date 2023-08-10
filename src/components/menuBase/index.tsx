import {Link} from 'react-router-dom'

interface MenuBaseProps{
    children: React.ReactNode;
    to: string;
    className?: string;
}

export default function MenuBase({to, children,className}: MenuBaseProps):JSX.Element{
    return(
        <>
        <Link className={className} to={to}>
            {children}
        </Link>
        </>
    )
}