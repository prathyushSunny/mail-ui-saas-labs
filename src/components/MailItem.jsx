import { useContext } from "react";
import { listingContext } from "../context/listingContext";

const MailItem = ({ mail }) => {
  const { setActiveMail } = useContext(listingContext);

  const handleMailClick = () => { 
    setActiveMail(mail);
  }

  return <>
    <div className="mail-item" onClick={ handleMailClick }>
      <p>{ mail.sender }</p>
      <p>{ mail.subject }</p>
    </div>
  </>
}

export default MailItem;