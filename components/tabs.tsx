import React, { useState } from 'react';
import { TabsData } from '../data/userData';
const Tabs = () => {
  const [current, setCurrent] = useState<number>(0);

  const [data, setData] = useState(TabsData);
  return (
    <div>
      <h1>Tabs</h1>
      <div className="tab-title-container">
        {TabsData.map((tabItem, index: number) => {
          return (
            <div
              className="tab-title"
              onClick={() => setCurrent(index)}
              style={{
                padding: '1rem',
                margin: '-1px',
                border:
                  index === current
                    ? `1px solid ${data[current].color}`
                    : '1px solid black',
                minHeight: '4rem',
                backgroundColor:
                  index === current ? `${data[current].color}` : 'white',
              }}
            >
              {tabItem.title}
            </div>
          );
        })}
      </div>
      <div
        className="tab-desc-container"
        style={{ backgroundColor: `${data[current].color}` }}
      >
        <div className="tab-desc">{data[current].description}</div>
      </div>
    </div>
  );
};

export default Tabs;
