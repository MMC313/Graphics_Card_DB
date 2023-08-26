import logo from '../../Pictures/Logo.png'
import { TextField, InputAdornment, IconButton, Typography} from '@mui/material'
import { Search } from '@mui/icons-material'
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
                <Typography>{}Products</Typography>
                <Typography>/</Typography>
                <Typography>{}Graphics Cards</Typography>
                <Typography>/</Typography>
                <Typography>{}Architecture</Typography>
                <Typography>/</Typography>
                <Typography>{}Series</Typography>
                <Typography>/</Typography>
                <Typography>{}Graphics Card</Typography>
            </div>
        </>
    )
}
