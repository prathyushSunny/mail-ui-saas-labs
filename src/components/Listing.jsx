import { useState, useContext } from "react";
import { listingContext } from "../context/listingContext";
import MailItem from "./MailItem";

const Listing = () => {
  const { mails } = useContext(listingContext);

  return <div className="listing">
    {
      mails.map((mail, index) => {
        return <MailItem mail={mail} key={`mail-${index}`} />
      })
    }
  </div>
}

export default Listing;