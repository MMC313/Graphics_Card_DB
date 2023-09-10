import logo from '../../Pictures/Logo.png'
import { TextField, IconButton} from '@mui/material'
import { Search} from '@mui/icons-material'

import { StyledEngineProvider } from '@mui/material/styles';
import './Header.css'

export default function Header(props){

    console.log("Header rerender")

    let setQuery = props.setQuery

    function handleEnter(event){
        if(event.key === 'Enter'){
            setQuery(event.target.value)
        }
    }

    return(
        <StyledEngineProvider injectFirst>
            <>
                <div className='header_search_section'>
                    <img src={logo} alt="logo of my website" className='header_logo' />
                    <div className='header_searchfield'>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Search Database"
                            onKeyDown={handleEnter}
                            InputProps={{
                            startAdornment: (
                                <IconButton position="start">
                                    <Search/>
                                </IconButton>
                            ),
                            }}
                            variant="standard"
                        />
                    </div>
                </div>
            </>
        </StyledEngineProvider>
    )
}
