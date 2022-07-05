import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Howl, Howler} from 'howler';
import Image1 from '../images/spider_fossils.png';
import Image3 from '../images/stingray_fossils.png';
import Image4 from '../images/Image3.png';
import Image5 from '../images/pottery.png';
import Image2 from '../images/rock_layers.png'
import Audio1 from '../images/secondary_click.mp3'
import { useSelector } from 'react-redux';
import './CardImage.css'
export default function CardImage({edit1 ,setEdit1 , selectButton , setSelectButton}) {
  const spiderDetails = useSelector(state => state.spider)

  let view=""
  let title=''
  const handleClose =()=>{
    // setEdit1(false)
    setSelectButton("")
    var sound = new Howl({
      src: Audio1
    })
  sound.play()
  }
if(selectButton === "button1"){
  view=(
    <>

    <img src={Image1} alt="image1" className='card1-image' />
   
      <CardContent>
    
        <p className='content-par' >
        Fossil Identified:
        <span>Tarantula</span>

        </p>
        <p className='content-par' >
        Depth of Fossil: 
        <span>35 meters</span>

        </p>
        <p> Known tarantula facts:</p>
        <ul>
          {/* <li>Spider</li>
          <li>Hunts at night and eats small insects</li>
          <li>Lives largely in arid habitats</li> */}
          {spiderDetails.data.map((item)=>{
            return(
              <li key={item.id}>
                {item.name}
              </li>
            )
          })}


        </ul>
       
      </CardContent>
      <CardActions>
        <Button size="small"  onClick={ handleClose } >Close</Button>
        
      </CardActions>
    </>
  )

}
else if(selectButton === "button2"){
  view=(
    <>

    <div className=''>
   <div className='fossil-image'>
    <div className='image-content'>
      {/* <p>10meters</p> */}
    </div>
   </div>
    </div>
   
      <CardContent>
    
        <p className='content-par' >
        Core Sample:
        <span>T Different rock layers </span>

        </p>
        <p className='content-par' >
        Depth of Core Sample: 
        <span>100 meters</span>

        </p>
        <p> Known core layer facts:</p>
        <ul>
          <li>Made up of volcanic rock</li>
          <li>Contains large amounts of algae and plant life indicative of the ocean floor</li>
          <li>Contains very few plant and small animal fossils but does contain many different types of rocks</li>

<li>Contains large mammal fossils and abundant plant life</li>
        </ul>
       
      </CardContent>
      <CardActions>
        <Button size="small"  onClick={ handleClose } >Close</Button>
        
      </CardActions>
    </>
  )

}
else if(selectButton === "button3"){
  view=(
    <>

    <img src={Image3} alt="image1" className='card1-image' />
   
    <CardContent>
        {/* <Typography>Fossil Identified: </Typography>
        <span>Tarantula</span> */}
        <p className='content-par' >
        Fossil Identified:
        <span>Stingray</span>

        </p>
        <p className='content-par' >
        Depth of Fossil: 
        <span> 64 meters </span>

        </p>
        <p> Known tarantula facts:</p>
        <ul>
          <li>Saltwater fish</li>
          <li>Eats small animals found on the seafloor</li>
          <li>Lives in groups</li>


        </ul>
       
      </CardContent>
      <CardActions>
        <Button size="small"  onClick={ handleClose } >Close</Button>
        
      </CardActions>
    </>
  )

}
else if(selectButton === "button4"){
  view=(
    <>

    <img src={Image4} alt="image1" className='card1-image' />
   
    <CardContent>
        {/* <Typography>Fossil Identified: </Typography>
        <span>Tarantula</span> */}
        <p className='content-par' >
        Fossil Identified:
        <span>Coyote trac</span>

        </p>
        <p className='content-par' >
        Depth of Fossil: 
        <span> 23 meters </span>

        </p>
        <p> Known tarantula facts:</p>
        <ul>
          <li>Hunts alone or in pairs</li>
          <li>Omnivore</li>
          <li>Habitat varies from wooded areas to prairies to deserts</li>


        </ul>
       
      </CardContent>
      <CardActions>
        <Button size="small"  onClick={ handleClose } >Close</Button>
        
      </CardActions>
    </>
  )

}
else if(selectButton === "button5"){
  view=(
    <>

    <img src={Image5} alt="image1" className='card1-image' />
   
    <CardContent>
        {/* <Typography>Fossil Identified: </Typography>
        <span>Tarantula</span> */}
        <p className='content-par' >
        Fossil Identified:
        <span>Pottery</span>

        </p>
        <p className='content-par' >
        Depth of Fossil: 
        <span> 47 meters </span>

        </p>
        <p> Known tarantula facts:</p>
        <ul>
          <li>Made by baking wet dirt in the sun in molds</li>
          <li>Human-made</li>
          <li>Used to carry dry goods or liquids</li>


        </ul>
       
      </CardContent>
      <CardActions>
        <Button size="small"  onClick={ handleClose } >Close</Button>
        
      </CardActions>
    </>
  )

}
 
  return (
    <Card sx={{ maxWidth: 345 }} marginTop={100} >
      {view&&
  <div style={{ border: '1px solid',padding: '5px', borderRadius: '5px', backgroundColor: '#fbf1e9' }}>
   {view}
  </div>
    
      }
      </Card>
      
  );
}
