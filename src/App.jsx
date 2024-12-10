import { useState, useContext } from 'react'
import { listingContext } from './context/listingContext';
import './App.css';
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import Listing from "./components/Listing";
import ListingWrapper from './context/listingContextProvider';
import ChatBox from './components/ChatBox';

function App() {
  const [count, setCount] = useState(0);
  const { activeMail } = useContext(listingContext);
  console.log(activeMail, "activeMail");

  return (
    <div className="main-parent">
      <Header />
      <div className="flex-parent">
        <LeftPanel/>
        <Listing />
        { 
          activeMail && <ChatBox />
        }
      </div>
    </div>
  )
}

export default App
