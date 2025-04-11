import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'
import mywork_data from '../../assets/mywork_data'

const Mywork = () => {
  const [showAll, setShowAll] = useState(false);
  const itemsPerRow = 3; // 3 columns
  const initialRows = 2; // Show 2 rows initially
  const initialItems = itemsPerRow * initialRows;
  
  const displayedItems = showAll ? mywork_data : mywork_data.slice(0, initialItems);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest Work</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="mywork-container">
        {displayedItems.map((work, index) => (
          <a key={index} href={work.W_link}>
            <img src={work.w_img} alt=""/>
          </a>
        ))}
      </div>
      {mywork_data.length > initialItems && (
        <div className="mywork-showmore" onClick={handleShowMore}>
          <p>{showAll ? 'Show Less' : 'Show More'}</p>
          <img src={arrow_icon} alt="" style={{ transform: showAll ? 'rotate(180deg)' : 'none' }}/>
        </div>
      )}
    </div>
  )
}

export default Mywork
//1.13.39