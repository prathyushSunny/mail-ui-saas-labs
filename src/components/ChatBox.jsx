import { useContext } from "react";
import { listingContext } from "../context/listingContext";

const ChatBox = () => {
  const { setActiveMail, activeMail } = useContext(listingContext);

  return <div className="chat-box" onClick={()=>setActiveMail(null) }>
    x
    <div>
      {
        activeMail.chatMessages.map(messageItem => { 
          return <p>
            {messageItem.message }
          </p>
        })
      }
    </div>
  </div>
}

export default ChatBox;