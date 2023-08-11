import { styled } from "@mui/system";import { Box, Typography } from "@mui/material";
import Header from "../../components/header";
import Menu from "../../components/menu";

const BoxStyle = styled(Box)({
 height: '75vh',
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
})

export default function NotFound(){
    return (
        <>
        <Header>
         <Menu/>
        </Header>
        <BoxStyle>
            <Typography variant="h3">Erro 404 - página não encontrada</Typography>
        </BoxStyle>
        </>
    )
}
