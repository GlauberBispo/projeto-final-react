import MenuBase from "../menuBase";

export default function Menu(){
    return(
        <>
        <MenuBase to='/'>Home</MenuBase>
        <MenuBase to='/Produtos'>Produtos</MenuBase>
        <MenuBase to='/Contato'>Contato</MenuBase>
        <MenuBase to='/EntreCadastre-se'>Entre | Cadastre-se</MenuBase>
        </>
    )
}