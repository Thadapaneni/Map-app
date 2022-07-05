import React, { useState } from 'react';
import './App.css';

import Audio1 from './images/secondary_click.mp3'
import 'bootstrap/dist/css/bootstrap.css';
import main from './images/main_bg.png'
import reset from './images/reset_icon.svg'
import info from './images/info_icon.svg'
import { useSelector } from 'react-redux';
import {Howl, Howler} from 'howler';
import { Grid, Typography, Button } from '@mui/material';
import AlertDialog from './Components/Dialog';
import CardImage from './Components/CardImage';

import Popup from './Components/Popup';



function App() {
  const [open, setOpen] = useState(false)
  
  const[selectButton,setSelectButton]=useState(false)
  const[selectKey,setSekectKey]=useState('')
  const[text,setText]=useState(false)
  const[resetbtn,setResetBtn]=useState(true)
  const[openPopup ,setOpenPopup]=useState(false)
  const inDetails = useSelector(state => state.info)
  const spiderDetails = useSelector(state => state.spider)
  
  const handleInfo = () => {
    setOpen(true)
    setSekectKey("form2")
    console.log("data",inDetails)
    console.log("spider",spiderDetails)
    var sound = new Howl({
      src: Audio1
    })
    // setText("close")
  sound.play()
  }
  
  React.useEffect(() => {
    setOpen(true)
   
      setText("start")
      setSekectKey("form1")


  }, [])


 
  const SoundPlay1=()=>{
    // console.log("hello")
    

  var sound = new Howl({
      src: Audio1
    })
  sound.play()
  // setEdit1(true)
  setSelectButton("button1")
  setResetBtn(false)

}
const SoundPlay2=()=>{
  console.log("hello")
  

var sound = new Howl({
    src: Audio1
  })
sound.play()
// setEdit2(true)
setSelectButton("button2")
setResetBtn(false)

}
const SoundPlay3=()=>{
  console.log("hello")
  

var sound = new Howl({
    src: Audio1
  })
sound.play()
// setEdit3(true)
setSelectButton("button3")
setResetBtn(false)

}
const SoundPlay4=()=>{
  console.log("hello")
  

var sound = new Howl({
    src: Audio1
  })
sound.play()
// setEdit4(true)
setSelectButton("button5")
setResetBtn(false)

}
const SoundPlay5=()=>{
  console.log("hello")
  

var sound = new Howl({
    src: Audio1
  })
sound.play()
// setEdit5(true)
setSelectButton("button4")
setResetBtn(false)

}

 
 const SoundPlayReset =()=>{
  setOpenPopup(true)
  var sound = new Howl({
    src: Audio1
  })
sound.play()


 }
 const areYouSure = (choise) => {
 
  if (choise) {
    // console.log("duspatch ", book.id)
    // dispatch(deleteBook(idT));
    setSelectButton("")
    setOpen(true)
    setOpenPopup(false)
    setResetBtn(true)
    var sound = new Howl({
      src: Audio1
    })
  sound.play()

  }
  else {
    setOpenPopup(false)
    var sound = new Howl({
      src: Audio1
    })
  sound.play()
  }

}
 


  return (
    <div className="App">




      <Grid container spacing={2} >
        <Grid className='image-space' item xs={8}>
          <div className='grid-left'>
            <div className='container'>


            </div>
          <div className='icon-main'>
          <div className='icon1'>
           <div className='icon1-btn'>
              <button onClick={SoundPlay1} className="btn1"></button>
            </div>
           </div>
           <div className='icon2'>
           <div className='icon2-btn'>
              <button onClick={SoundPlay2} className="btn1"></button>
            </div>
           </div>
           <div className='icon3'>
           <div className='icon3-btn'>
              <button onClick={SoundPlay3} className="btn1"></button>
            </div>
           </div>
           <div className='icon4'>
           <div className='icon4-btn'>
              <button onClick={SoundPlay4} className="btn1"></button>
            </div>
           </div>
           <div className='icon5'>
           <div className='icon5-btn'>
              <button onClick={SoundPlay5} className="btn1"></button>
            </div>
           </div>
         
          </div>
            
          </div>
          

        </Grid>
        <Grid item xs={4}>

          <Button disabled={resetbtn} onClick={SoundPlayReset} style={{ color: "green", padding: "1px", marginTop: "20px" }} ><img src={reset} alt="test" />Reset</Button>

          <img className='info-img' src={info} alt="info icon" onClick={handleInfo} />
          {inDetails.data.map((item)=>{
            return(
              <Typography>{item.information}</Typography>
            )
          })}
          

          <div>
     
        
        <CardImage  selectButton={selectButton}  setSelectButton={setSelectButton} />
          </div>
        </Grid>
       


      </Grid>
      <Popup openPopup={openPopup} onDialog={ areYouSure} selectButton={selectButton} setSelectButton={setSelectButton} />
      
 
      <AlertDialog open={open} setOpen={setOpen} text={text}  setText={setText} selectKey={selectKey}/>

    </div>
  );
}

export default App;
