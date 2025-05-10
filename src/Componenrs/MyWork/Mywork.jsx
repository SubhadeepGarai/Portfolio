import React, { useState, useEffect } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';

const Mywork = () => {
  const [workData, setWorkData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const itemsPerRow = 3;
  const initialRows = 2;
  const initialItems = itemsPerRow * initialRows;

  const displayedItems = showAll ? workData : workData.slice(0, initialItems);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    fetch('https://mywork-api.onrender.com/api/mywork')
      .then(res => res.json())
      .then(data => setWorkData(data))
      .catch(err => console.error('Failed to fetch work data:', err));
  }, []);

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {displayedItems.map((work, index) => (
          <a key={index} href={work.W_link} target="_blank" rel="noopener noreferrer">
            <img src={work.w_img} alt={work.w_name} />
          </a>
        ))}
      </div>
      {workData.length > initialItems && (
        <div className="mywork-showmore" onClick={handleShowMore}>
          <p>{showAll ? 'Show Less' : 'Show More'}</p>
          <img src={arrow_icon} alt="" style={{ transform: showAll ? 'rotate(180deg)' : 'none' }} />
        </div>
      )}
    </div>
  );
};

export default Mywork;
