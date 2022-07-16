import * as React from 'react';
import Modal from './components/Modal';
import FilterList from './components/filterList';
import StopWatch from './components/stopWatch';
import Tabs from './components/tabs';
import { UserData } from './data/userData';
import './style.css';

const App: React.FC = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  return (
    <div>
      {/* {showModal && <Modal {...{ showModal, setShowModal }} />}
      <button onClick={() => setShowModal(!showModal)}>button</button> */}
      {/* <FilterList {...{ UserData }} /> */}
      {/* <StopWatch /> */}
      <Tabs />
    </div>
  );
};

export default App;
