import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import "./widgets.css"

function Widgets() {
  
  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">
     <div className="widgets-articleLeft">
     <FiberManualRecordIcon />
     </div>

     <div className="widgets-articleRight">
      <h4>{heading}</h4>
      <p>{subtitle}</p>
     </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets-header">
      <h2>LinkedIn News</h2>
      <InfoIcon />
      </div>
      {newsArticle(" React is back", "Top news - 9099 readers" )}
      {newsArticle(" Coronavirus: UK updates ", "Top news - 899 readers" )}
      {newsArticle(" Tesla hits new highs ", "Cars & auto - 300 readers" )}
      {newsArticle(" Bitcoin Breaks $22k ", "Crypto - 8000 readers" )}
      {newsArticle(" Is Redux too good ", "Coding - 123 readers" )}
      {newsArticle(" PAPA react launches course? ", "Top news - 1000 readers" )}
    </div>

  );
}

export default Widgets
