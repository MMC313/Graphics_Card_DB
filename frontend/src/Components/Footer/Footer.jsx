import { StyledEngineProvider } from '@mui/material/styles';
import './Footer.css'

export default function Footer(){

    let year = 2023
    let myName = "Nathen Leung"

    return(
        <StyledEngineProvider injectFirst>
            <div className="footer">
                © {year} {myName}
            </div>
        </StyledEngineProvider>
    )
}