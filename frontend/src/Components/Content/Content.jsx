import {Table, Typography, Button, ButtonGroup, TextField, InputAdornment, IconButton, Breadcrumbs, Link} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledEngineProvider } from '@mui/material/styles';
import './Content.css'
import LoadInfo from '../../Functions/LoadInfo.jsx'
import Logo from '../../Pictures/Logo.png'
import { useEffect, useState } from 'react';




function createData(name, value) {
  return { name, value};
}

export default function Content(props){

    console.log("Content rerender")
    
    let query = props.headerQuery

    const [gpuSpec,setGpuSpec] = useState(null)

    useEffect(()=>{
        LoadInfo(query).then((response)=>{
            setGpuSpec(response)
            console.log(response)
        })
    },[query])

    if(gpuSpec === null){
        return <div>Loading...</div>
    }else{

        console.log("defined")

        const gpRows = [
            createData('GPU Name', gpuSpec.graphics_processor.gpu_name),
            createData('GPU Variant',  gpuSpec.graphics_processor.gpu_variant),
            createData('Architecture',  gpuSpec.graphics_processor.architecture),
            createData('Foundry',  gpuSpec.graphics_processor.foundry),
            createData('Process Size',  gpuSpec.graphics_processor.process_size),
            createData('Transistors',  gpuSpec.graphics_processor.transistors),
            createData('Die Size',  gpuSpec.graphics_processor.die_size)
        ];
        
        const gcRows = [
            createData('Release Date', gpuSpec.graphics_card.release_date),
            createData('Generation', gpuSpec.graphics_card.generation),
            createData('Predecessor', gpuSpec.graphics_card.predecessor),
            createData('Successor', gpuSpec.graphics_card.successor),
            createData('Production', gpuSpec.graphics_card.production),
            createData('Launch Price', gpuSpec.graphics_card.launch_price),
            createData('Bus Interface',gpuSpec.graphics_card.bus_interface)
        ]
        
        
        const csRows = [
            createData('Base Clock', gpuSpec.clock_speeds.base_clock),
            createData('Boost Clock', gpuSpec.clock_speeds.boost_clock),
            createData('Memory Clock', gpuSpec.clock_speeds.memory_clock),
        ]
        
        
        const mRows = [
            createData('Memory Size', gpuSpec.memory.memory_size),
            createData('Memory Type', gpuSpec.memory.memory_type),
            createData('Memory Bus', gpuSpec.memory.memory_bus),
            createData('Bandwidth', gpuSpec.memory.bandwidth)
        ]
        
        
        const rcRows = [
            createData('L1 Cache', gpuSpec.render_config.l1_cache),
            createData('L2 Cache', gpuSpec.render_config.l2_cache),
            createData('ROPs', gpuSpec.render_config.rops),
            createData('Shading Units', gpuSpec.render_config.shading_units),
            createData('TMUs', gpuSpec.render_config.tmus)
        ]
        
        const pRows = [
            createData('Pixel Rate', gpuSpec.theoretical_performance.pixel_rate),
            createData('Texture Rate', gpuSpec.theoretical_performance.texture_rate),
            createData('FP16', gpuSpec.theoretical_performance['fp16_(half)_performance']),
            createData('FP32', gpuSpec.theoretical_performance['fp32_(float)_performance']),
            createData('FP64', gpuSpec.theoretical_performance['fp64_(double)_performance'])
        ]
        
        const gfRows = [
            createData('DirectX Version', gpuSpec.graphics_features.directx),
            createData('OpenGL Version', gpuSpec.graphics_features.opengl),
            createData('OpenCL Version', gpuSpec.graphics_features.opencl),
            createData('Vulkan Version', gpuSpec.graphics_features.vulkan),
        
        ]
        
        
        const bdRows = [
            createData('Slot Width', gpuSpec.board_design.slot_width),
            createData('Length', gpuSpec.board_design.length),
            createData('Width', gpuSpec.board_design.width),
            createData('Height', gpuSpec.board_design.height),
            createData('TDP', gpuSpec.board_design.tdp),
            createData('Suggest PSU',gpuSpec.board_design.suggested_psu),
            createData('Power Connectors', gpuSpec.board_design.power_connectors),
            createData('Board Number', gpuSpec.board_design.board_number)
        ]

        return(
            <StyledEngineProvider injectFirst>
                <>
                    <div className='header_nav'>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                            className='header_nav_breadcrumbs'
                        >
                            <Typography className='header_nav_crumb'>{gpuSpec.gpu_name.split(" ").slice(0,1)} Graphics Cards</Typography>
                            <Typography className='header_nav_crumb'>{gpuSpec.graphics_processor.architecture} Architecture</Typography>
                            <Typography className='header_nav_crumb'>{gpuSpec.graphics_card.generation} Series</Typography>
                            <Typography className='header_nav_crumb'>{gpuSpec.gpu_name} Graphics Card</Typography>
                        </Breadcrumbs>
                    </div>
                    <div className='content_header'>
                        <div className='content_header_info'>
                            <img src={Logo} alt="" className='content_cardheader_image'/>
                            <div>
                                <Typography variant='h3' className='content_header_info_headline'>{gpuSpec.gpu_name}</Typography>
                                <Typography variant='subtitle1' className='content_header_info_subtitle'>{gpuSpec.memory.memory_size + gpuSpec.memory.memory_type} Graphics Card</Typography>
                    
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
       


    
}