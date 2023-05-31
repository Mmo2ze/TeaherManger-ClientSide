import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Teacher from "../../assets/images/Teacher.png"
import CloseIcon from '@mui/icons-material/Close';
import "./navbar.css"


const Navbar = () => {
  const [showBox, setShowBox] = useState(false);

  const handleImageClick = () => {
    setShowBox(true);
  }

  const handleBoxClose = () => {
    setShowBox(false);
  }

  return (
    <Box  sx={{ flexGrow: 1 }}>
     <AppBar className="navbar" style={{backgroundColor:"#233876"}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={handleImageClick}>
            <img src={Teacher} alt="teacher" />
          </Button>
        </Toolbar>
      </AppBar>
      {showBox && (
        <Box className="box">
            <IconButton  style={{marginBottom:"10px"}} onClick={handleBoxClose}>
            <CloseIcon className="close" />
          </IconButton>
            <div className="toggle">  
          <h4 className="info">Mr / Ahmed Awaad</h4>
          <h4 className="info">01095579200</h4>
          <h4 className="info">My Profile</h4>
          <h4 className="info">Account Settings</h4>
          <h4 className="info">SignOut</h4>
            </div>
          
        </Box>
      )}
    </Box>
  );
}

export default Navbar;