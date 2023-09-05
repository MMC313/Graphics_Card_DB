import {Table, Typography, Button, ButtonGroup} from '@mui/material'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledEngineProvider } from '@mui/material/styles';
import './Content.css'
import { useState } from 'react';

import Logo from '../../Pictures/Logo.png'


function createData(name, value) {
  return { name, value};
}





export default function Content(props){

    console.log("Content rerender")

    let gpuSpecs = props.data
    console.log(gpuSpecs)

    const gpRows = [
        createData('GPU Name', gpuSpecs.graphics_processor.gpu_name),
        createData('GPU Variant',  gpuSpecs.graphics_processor.gpu_variant),
        createData('Architecture',  gpuSpecs.graphics_processor.architecture),
        createData('Foundry',  gpuSpecs.graphics_processor.foundry),
        createData('Process Size',  gpuSpecs.graphics_processor.process_size),
        createData('Transistors',  gpuSpecs.graphics_processor.transistors),
        createData('Die Size',  gpuSpecs.graphics_processor.die_size)
      ];
      
      const gcRows = [
          createData('Release Date', 159),
          createData('Generation', 237),
          createData('Predecessor', 262),
          createData('Successor', 305),
          createData('Production', 356),
          createData('Launce Price', 101),
          createData('Bus Interface', 69)
      ]
      
      
      const csRows = [
          createData('Base Clock', 159),
          createData('Boost Clock', 237),
          createData('Memory Clock', 262),
      ]
      
      
      const mRows = [
          createData('Memory Size', 159),
          createData('Memory Type', 237),
          createData('Memory Bus', 262),
          createData('Bandwidth', 305)
      ]
      
      
      const rcRows = [
          createData('Shading Units', 159),
          createData('Generation  ', 237),
          createData('Predecessor', 262),
          createData('Successor', 305),
          createData('Production', 356)
      ]
      
      const pRows = [
          createData('Release Date', 159),
          createData('Generation', 237),
          createData('Predecessor', 262),
          createData('Successor', 305),
          createData('Production', 356),
          createData('Launce Price', 101),
          createData('Bus Interface', 69)
      ]
       
      const gfRows = [
          createData('DirectX Version', 159),
          createData('OpenGL Version', 237),
          createData('OpenCL Version', 262),
          createData('Vulkan Version', 305),
      
      ]
      
      
      const bdRows = [
          createData('Slot Width', 159),
          createData('Length', 237),
          createData('Width', 262),
          createData('Height', 305),
          createData('TDP', 356),
          createData('Suggest PSU', 69),
          createData('Power Connectors',1),
          createData('Board Number',69)
      ]
      

    return(
        <StyledEngineProvider injectFirst>
            <>
                <div className='content_header'>
                    <div className='content_header_info'>
                        <img src={Logo} alt="" className='content_cardheader_image'/>
                        <div>
                            <Typography variant='h3' className='content_header_info_headline'>Nvidia Geforce RTX 4090</Typography>
                            <Typography variant='subtitle1' className='content_header_info_subtitle'>16GB GDDR6X Graphics Card</Typography>
                
                        </div>
                    </div>
                    <div>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button>Specifications</Button>
                            <Button>Images</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className='content_specs'>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead className='content_tableHead'>
                                <TableRow>
                                    <TableCell className='content_specs_headcell'>
                                        <Typography variant='h6' className='content_specs_head'>Graphics Processor</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {gpRows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                    >
                                    <TableCell component="th" scope="row" sx={{border:"none"}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='h6' className='content_specs_head'>Graphics Card</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {gcRows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                    >
                                    <TableCell component="th" scope="row" sx={{border:"none"}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='h6' className='content_specs_head'>Clock Speeds</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {csRows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                    >
                                    <TableCell component="th" scope="row" sx={{border:"none"}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='h6' className='content_specs_head'>Memory</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {mRows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                    >
                                    <TableCell component="th" scope="row" sx={{border:"none"}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='h6' className='content_specs_head'>Render Config</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {rcRows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                    >
                                    <TableCell component="th" scope="row" sx={{border:"none"}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='h6' className='content_specs_head'>Performance</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {pRows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                    >
                                    <TableCell component="th" scope="row" sx={{border:"none"}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='h6' className='content_specs_head'>Graphics Features</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {gfRows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                    >
                                    <TableCell component="th" scope="row" sx={{border:"none"}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant='h6' className='content_specs_head'>Board Design</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {bdRows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                    >
                                    <TableCell component="th" scope="row" sx={{border:"none"}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </>
        </StyledEngineProvider>
    )
}