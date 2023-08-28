import logo from '../../Pictures/Logo.png'
import { TextField, InputAdornment, IconButton, Typography, Breadcrumbs, Link,} from '@mui/material'
import { Search} from '@mui/icons-material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import './Header.css'

export default function Header(){


    return(
        <>
            <div className='header_search_section'>
                <img src={logo} alt="logo of my website" className='header_logo' />
                <TextField
                    id="input-with-icon-textfield"
                    label="Search Database"
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
            <div className='header_nav'>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                className='header_breadcrumb'
            >
                <Typography>{}Nvidia Graphics Cards</Typography>
                <Typography>{}Maxwell Architecture</Typography>
                <Typography>{}Ada LoveLace Series</Typography>
                <Typography>{}Geforce RTX 4090 Graphics Card</Typography>
            </Breadcrumbs>
            </div>
        </>
    )
}
