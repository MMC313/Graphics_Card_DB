import './ImageList.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { StyledEngineProvider } from '@mui/material/styles';
import React, {SyntheticEvent} from 'react';
import { useState } from 'react';
import missingImage from '../../Pictures/Missing.png'


export default function ImagesList(props){

    const [windowWidth,setWindowWidth] = useState(window.innerWidth)

    onresize = (event) => {setWindowWidth(window.innerWidth)}

    let gpuSpec = props.specs
    let gpuID = gpuSpec.url.split(".c")

    const itemData = [
        {
          img: `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-front.jpg`,
          title: 'Front',
        },
        {
          img: `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-back.jpg`,
          title: 'Back',
    
        },
        {
          img: `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-pcb-front.jpg`,
          title: 'Front PCB',
    
        },
        {
          img: `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-pcb-back.jpg`,
          title: 'Back PCB',
    

        },
        {
          img: `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-top.jpg`,
          title: 'Top'

        },
        {
          img: `https://tpucdn.com/gpu-specs/images/c/${gpuID[2]}-rear.jpg`,
          title: 'Rear'
        },
      ];

      let below = (
        <StyledEngineProvider injectFirst>
            <ImageList sx={{ width: 250, height: 450}} cols={1} className='below_imageList' gap={25}>
                <ImageListItem key="Subheader" cols={1}>
                </ImageListItem>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                className='imageList_image'
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt = {item.title}
                                onError={(e) => (e.currentTarget.src = missingImage)}
                                
                            />
                            <ImageListItemBar
                                title={item.title}
                                actionIcon={
                                <IconButton
                                    onClick={()=>window.open(item.img)}
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <FullscreenIcon />
                                </IconButton>
                                }
                            />
                    </ImageListItem>
                ))}
            </ImageList>
        </StyledEngineProvider>
      )

      let above = (
        <StyledEngineProvider injectFirst>
            <ImageList sx={{ width: 3/4*window.innerWidth}} cols={3}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                               
                                className='imageList_image'
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                onError={(e) => (e.currentTarget.src = missingImage)}
                                
                            />
                            <ImageListItemBar
                                title={item.title}
                                actionIcon={
                                <IconButton
                                    onClick={()=>window.open(item.img)}
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <FullscreenIcon />
                                </IconButton>
                                }
                            />
                    </ImageListItem>
                ))}
            </ImageList>
        </StyledEngineProvider>
      )
      

    return(
      windowWidth >= 600 ? above : below 
    )
}



