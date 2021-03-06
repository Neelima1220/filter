import React, { FC, useEffect, useState } from 'react';
// import { cloneDeep } from 'lodash';

export interface IUserData {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  gender?: string;
}

export interface Idata {
  UserData?: IUserData[];
}

const FilterList: FC<Idata> = ({ UserData }) => {
  const [data, setData] = useState<IUserData[]>(UserData);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showList, setShowList] = useState<boolean>(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const tempData = [...UserData];
    const dataKeys = ['first_name', 'last_name', 'email', 'gender'];
    const filteredData = tempData.filter((item) => {
      return dataKeys.some((key) =>
        item[key].toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
    });
    setData(filteredData);
  }, [searchTerm]);
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <h1>filtered list </h1>
        <input
          onFocus={() => setShowList(true)}
          onBlur={() => setShowList(false)}
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {data.length > 0 ? (
          <table>
            <thead>
              <tr style={{ textAlign: 'left' }}>
                <th> email</th>
                <th> first name</th>
                <th> last name</th>
                <th> gender</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: IUserData, key: number) => {
                return (
                  <tr key={key}>
                    <td> {item?.first_name}</td>
                    <td> {item?.last_name}</td>
                    <td> {item?.email}</td>
                    <td> {item?.gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          'No data available'
        )}
      </div>
    </div>
  );
};

export default FilterList;
