import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Typography } from '@mui/material';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Howl, Howler} from 'howler';
import info from '../images/info_icon.svg'
import Audio1 from '../images/secondary_click.mp3'
import { useSelector } from 'react-redux';
import './Dialog.css'



export default function AlertDialog({open,setOpen ,text , setText,selectKey}) {
  const inDetails = useSelector(state => state.info)

  const handleClickOpen = () => {
    setOpen(true);


  };
  const handleStart =()=>{
    setOpen(false);
    var sound = new Howl({
      src: Audio1
    })
  sound.play()
    
  }

  const handleClose = () => {
    setOpen(false);
    setText(false);
    
    var sound = new Howl({
      src: Audio1
    })
  sound.play()
  }
  let view=""
  let title=''
    if(selectKey === "form2"){
     
     

      view=(
        <>
          <DialogContent>
          <img className='info-img' src={info} alt="info icon"  />
          <DialogContentText id="alert-dialog-description">
          {inDetails.data.map((item)=>{
            return(
              <Typography>{item.information}</Typography>
            )
          })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} autoFocus>
           Close
          </Button>
        </DialogActions>

        </>
      )
    }
    else if( selectKey === "form1"){
      view=(
        <>
          <DialogContent>
          <img className='info-img' src={info} alt="info icon"  />
          {inDetails.data.map((item)=>{
            return(
              <Typography>{item.infoStart}</Typography>
            )
          })}
        </DialogContent>
        <DialogActions>
        <Button onClick={handleStart} >
         Start
          </Button>
        </DialogActions>

        </>
      )

    }
  

  return (
    <div>
  
      <Dialog PaperProps={{sx:{position: "fixed", top: 0,m:0}}}
     
      className='dialog-info'
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
      
     {view}
      </Dialog>
    </div>
  );
}
