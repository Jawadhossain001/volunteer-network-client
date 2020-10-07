import React, { useContext, useEffect, useState } from 'react';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AddIcon from '@material-ui/icons/Add';
import logo from '../../images/logo.png'
import { UserContext } from '../../App';
import './LeftNav.css'
import { Link } from 'react-router-dom';
const LeftNav = () => {
    const [user,setUser]=useContext(UserContext)
    useEffect(()=>{
        setUser({...user, clicked:'volunteerList'})
    },[])
  
    
    return (
        <div style={{padding:'10px',height:'100vh',  paddingTop:'20px'}}>
            <Link to='/' className='link'>
            <img style={{height:'50px'}} src={logo} alt=""/>
            </Link>
        <button className='nav-button' autoFocus>
        <div onClick={()=>setUser({...user,clicked:'volunteerList'})} style={{display:'flex',cursor:'pointer', margin:'15px 0px', alignItems:'center'}}>
            <div>
                <PeopleOutlineIcon></PeopleOutlineIcon>
            </div>
            <div style={{marginLeft:'10px'}}>
                <b>Volunteer register list</b>
            </div>
        </div>
        </button>

        <button className='nav-button'>
        <div onClick={()=>setUser({...user,clicked:'addEvent'})} style={{display:'flex', cursor:'pointer', }}>
            <div>
                <AddIcon></AddIcon>
            </div>
            <div style={{marginLeft:'10px'}}>
                <b>Add Event</b>
            </div>
        </div>
        </button>

        </div>
    );
};

export default LeftNav;