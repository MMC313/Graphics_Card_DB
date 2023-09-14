import {Table, Typography, Button, ButtonGroup, TextField, InputAdornment, IconButton, Breadcrumbs, Link, Box} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledEngineProvider } from '@mui/material/styles';
import './Content.css'
import LoadInfo from '../../Functions/LoadInfo.jsx'
import { useEffect, useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view'
import React from 'react';
import AMD from '../../Pictures/AMD.png'
import Nvidia from '../../Pictures/Nvidia.png'
import Intel from '../../Pictures/Intel.png'
import Missing from '../../Pictures/Missing.jpeg'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import DefaultImg from '../../Pictures/Default.jpg'



export default function Content(props){

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    
    function createData(name, value) {
      return { name, value};
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log("Content rerender")
    
    let query = props.headerQuery

    const [gpuSpec,setGpuSpec] = useState(null)

    useEffect(()=>{
        LoadInfo(query).then((response)=>{
            setGpuSpec(response)
        })
    },[query])

    if(gpuSpec === null || gpuSpec === undefined){
        return(
            <StyledEngineProvider injectFirst>
                <>
                    <div className='content_default_page'>
                        <img className='content_default_image' src={DefaultImg} alt="Default Image" />
                        <Typography variant="h1" className='content_default_text'> LEELELELELELELELELEL </Typography>
                    </div>
                </>
            </StyledEngineProvider>
        )
    }else{

        console.log(gpuSpec)

        console.log("defined")

        let logo;

        if(gpuSpec.gpu_name.includes("Intel")){
            logo = Intel
        }else if(gpuSpec.gpu_name.includes("NVIDIA")){
            logo = Nvidia
        }else if (gpuSpec.gpu_name.includes("AMD")){
            logo = AMD
        }else{ logo = Missing}

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

        const itemData = [
            {
              img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
              title: 'Breakfast',
            },
            {
              img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
              title: 'Burger',
            },
            {
              img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
              title: 'Camera',
            },
            {
              img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
              title: 'Coffee',
            },
            {
              img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
              title: 'Hats',
            },
            {
              img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
              title: 'Honey',
            },
            {
              img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
              title: 'Basketball',
            },
            {
              img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
              title: 'Fern',
            },
            {
              img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
              title: 'Mushrooms',
            },
            {
              img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
              title: 'Tomato basil',
            },
            {
              img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
              title: 'Sea star',
            },
            {
              img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
              title: 'Bike',
            },
          ];




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
                            <img src={logo} alt="" className='content_cardheader_image'/>
                            <div>
                                <Typography variant='h3' className='content_header_info_headline'>{gpuSpec.gpu_name}</Typography>
                                <Typography variant='subtitle1' className='content_header_info_subtitle'>{gpuSpec.memory.memory_size +" "+ gpuSpec.memory.memory_type} Graphics Card</Typography>
                    
                            </div>
                            <div class="content_header_stats_icons">
                                <div class="processor content_header_stats_icon">
                                    <div class="processor_val">{gpuSpec.graphics_processor.gpu_name}</div>
                                    <div class="content_header_stats_icons_labels" >GRAPHICS PROCESSOR</div>
                                </div>
                                <div class="cores content_header_stats_icon">
                                    <div class="cores_val">{gpuSpec.render_config.shading_units}</div>
                                    <div class="content_header_stats_icons_labels">CORES</div>
                                </div>
                                <div class="tmus content_header_stats_icon">
                                    <div class="tmus_val">{gpuSpec.render_config.tmus}</div>
                                    <div class="content_header_stats_icons_labels" >TMUS</div>
                                </div>
                                <div class="rops content_header_stats_icon">
                                    <div class="rops_val">{gpuSpec.render_config.rops}</div>
                                    <div class="content_header_stats_icons_labels">ROPS</div>
                                </div>
                                <div class="memory_size content_header_stats_icon">
                                    <div class="memory_size_val">{gpuSpec.memory.memory_size}</div>
                                    <div class="content_header_stats_icons_labels" >MEMORY SIZE</div>
                                </div>
                                <div class="memory_type content_header_stats_icon">
                                    <div class="memory_type_val">{gpuSpec.memory.memory_type}</div>
                                    <div class="content_header_stats_icons_labels" >MEMORY TYPE</div>
                                </div>
                                <div class="bus_width content_header_stats_icon">
                                    <div class="bus_width_val">{gpuSpec.memory.memory_bus}</div>
                                    <div class="content_header_stats_icons_labels" >BUS WIDTH</div>
                                </div>
                            </div>
                        </div>
                        <div className='content_header_nav'>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='content_header_tabs'>
                                    <Tab className='content_header_tab' label="Specifications" {...a11yProps(0)} />
                                    <Tab className='content_header_tab' label="Images" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0} className="content_tabs" >
                            
                                <div className='content_info'>
                                    <div className='content_section_nav_group'>
                                        <ButtonGroup variant="text" aria-label="outlined primary button group" className='content_section_nav' orientation='vertical'>
                                            <ScrollIntoView selector='.graphics_processor_head'>
                                                <Button>Graphics Processor</Button>
                                            </ScrollIntoView>
                                            <ScrollIntoView selector='.graphics_card_head'>
                                                <Button>Graphics Card</Button>
                                            </ScrollIntoView>
                                            <ScrollIntoView selector='.clock_speeds_head'>
                                                <Button>Clock Speeds</Button>
                                            </ScrollIntoView>
                                            <ScrollIntoView selector='.memory_head'>
                                                <Button>Memory</Button>
                                            </ScrollIntoView>
                                            <ScrollIntoView selector='.render_config_head'>
                                                <Button>Render Config</Button>
                                            </ScrollIntoView>
                                            <ScrollIntoView selector='.performance_head'>
                                                <Button>Performance</Button>
                                            </ScrollIntoView>
                                            <ScrollIntoView selector='.graphics_features_head'>
                                                <Button>Graphics Features</Button>
                                            </ScrollIntoView>
                                            <ScrollIntoView selector='.board_design_head'>
                                                <Button>Board Design</Button>
                                            </ScrollIntoView>
                                    
                                        </ButtonGroup>
                                    </div>
                                    <div className='content_specs'>
                                        <TableContainer component={Paper} className='content_specs_inner'>
                                            <Table aria-label="simple table">
                                                <TableHead className='content_tableHead'>
                                                    <TableRow>
                                                        <TableCell className='content_specs_headcell'>
                                                            <Typography variant='h6' className='content_specs_head graphics_processor_head'>Graphics Processor</Typography>
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
                                                        <TableCell className='content_specs_value' align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                            </Table>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            <Typography variant='h6' className='content_specs_head graphics_card_head'>Graphics Card</Typography>
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
                                                        <TableCell  className='content_specs_value' align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                            </Table>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            <Typography variant='h6' className='content_specs_head clock_speeds_head'>Clock Speeds</Typography>
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
                                                        <TableCell className='content_specs_value' align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                            </Table>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            <Typography variant='h6' className='content_specs_head memory_head'>Memory</Typography>
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
                                                        <TableCell className='content_specs_value' align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                            </Table>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            <Typography variant='h6' className='content_specs_head render_config_head'>Render Config</Typography>
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
                                                        <TableCell className='content_specs_value' align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                            </Table>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            <Typography variant='h6' className='content_specs_head performance_head'>Performance</Typography>
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
                                                        <TableCell className='content_specs_value' align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                            </Table>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            <Typography variant='h6' className='content_specs_head graphics_features_head'>Graphics Features</Typography>
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
                                                        <TableCell className='content_specs_value' align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                            </Table>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            <Typography variant='h6' className='content_specs_head board_design_head'>Board Design</Typography>
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
                                                        <TableCell className='content_specs_value' align="right" sx={{border:"none"}}>{row.value}</TableCell>
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>
                                </div>

                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </CustomTabPanel>
                        </div>

                        
                    </div>

                </>
            </StyledEngineProvider>
        )
    }
       


    
}