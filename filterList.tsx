import React, { useEffect, useState } from 'react';

const cities = [
  'Adele',
  'nagi',
  'reddy',
  'panditi',
  'neelima',
  'paarthu',
  'tarun',
];

const FilterList = () => {
  const [data, setData] = useState<string[]>(cities);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showList, setShowList] = useState<boolean>(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const tempData = [...data];
    const filteredData = tempData.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  }, [searchTerm]);
  return (
    <div>
      <h1>filtered list </h1>
      <input
        onFocus={() => setShowList(true)}
        onBlur={() => setShowList(false)}
        onChange={handleChange}
      />
      <ul>
        {showList &&
          data.map((city, key) => {
            return <li key={key}>{city}</li>;
          })}
      </ul>
    </div>
  );
};

export default FilterList;
