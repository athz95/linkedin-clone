import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./sidebar.css";

function Sidebar() {

  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
    <span className="sidebar-hash">#</span>
    <p>{topic}</p>    
   </div>
  ) 

  return (
    <div className="sidebar">
      <div className="sidebar-top">
       <img 
        src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"
        alt=""
       />
       <Avatar className="sidebar-avatar" src={user.photoURL}>
         {user.email[0]}
         </Avatar>
       <h2>{user.displayName}</h2>
       <h4>{user.email}</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">101</p>
        </div>

        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNumber">90</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
        {recentItem('fullstack')}

      </div>
    </div>
  )
}

export default Sidebar
