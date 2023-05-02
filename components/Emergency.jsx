import React from 'react'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FloodIcon from '@mui/icons-material/Flood';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import List from '@mui/material/List';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Divider from '@mui/material/Divider';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';





export default function Emergency() {


  const fire = () => toast.success("Alert Deliverd, help is on its way", {className: "toast-message"}, {position: "bottom-middle" });
  const flood = () => toast.success("Flood Alert Deliverd", {className: "toast-message"});
  const accident = () => toast.success("Vehicle accident Alert Deliverd", {className: "toast-message"});
  const building = () => toast.success("Building collapse Alert Deliverd", {className: "toast-message"});
  const security = () => toast.success("The police have been alerted and are on their way!", {className: "toast-message"});
  const health = () => toast.success("Health alert deliverd", {className: "toast-message"});

  return (
    <List
    sx={{
      width: '100%',
      maxWidth: 360,
      bgcolor: 'background.paper',
    }}
  >
    <div><h4>Nature of Emergency</h4></div>
    <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalFireDepartmentIcon />
          </Avatar>
        </ListItemAvatar>
        <button onClick={fire}>
        <ListItemText primary="Fire Outbreak" secondary="" />
        <ToastContainer  autoClose={5000}/>
        </button>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FloodIcon />
          </Avatar>
        </ListItemAvatar>
        <button onClick={flood}>
        <ListItemText primary="Flood" secondary="" />
        <ToastContainer autoClose={5000}/>
        </button>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CarCrashIcon />
          </Avatar>
        </ListItemAvatar>
        <button onClick={accident}>
        <ListItemText primary="Vehicle Accident" secondary="" />
        <ToastContainer autoClose={5000}/>
        </button>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ApartmentIcon/>
          </Avatar>
        </ListItemAvatar>
        <button onClick={building}>
        <ListItemText primary="Collapsed Building" secondary="" />
        <ToastContainer autoClose={5000}/>
        </button>
      </ListItem>
       <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalPoliceIcon/>
          </Avatar>
        </ListItemAvatar>
        <button onClick={security}>
        <ListItemText primary="Security Incident" secondary="" />
        <ToastContainer autoClose={5000}/>
        </button>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalHospitalIcon/>
          </Avatar>
        </ListItemAvatar>
        <button onClick={health}>
        <ListItemText primary="Health Emergency/ Bio hazard" secondary="" />
        <ToastContainer autoClose={5000}/>
        </button>
      </ListItem>
    </List>

  )
}
