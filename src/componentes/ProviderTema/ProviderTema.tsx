import { ThemeProvider } from "styled-components";
import { tema } from "../../styles/tema";

interface PropsProviderTema {
    children: React.ReactNode
}

export const ProviderTema = ({children}:PropsProviderTema) => {
    return(<ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>)
};