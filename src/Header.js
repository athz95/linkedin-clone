import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./header.css";
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import { auth } from './firebase';
import { logout } from './features/userSlice';
import { useDispatch } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



function Header() {
   const dispatch = useDispatch();
   const user = useSelector(selectUser);
  
  

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header-left">
        <img 
         src="https://image.flaticon.com/icons/png/512/174/174857.png"
         alt="linkedin-logo"
         />

        <div className="header-search">
         <SearchIcon />
         <input type="text" placeholder="Search"/>

        </div>
      </div>

      <div className="header-right">
      
       <HeaderOption Icon={HomeIcon} title="Home" />
       <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
       <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
       <HeaderOption Icon={ChatIcon} title="Messaging" />
       <HeaderOption Icon={NotificationsIcon} title="Notifications" />
       <HeaderOption Icon={ExitToAppIcon} title="" onClick={logoutOfApp}/>  
      </div>
      </div>
     
  )
}

export default Header
