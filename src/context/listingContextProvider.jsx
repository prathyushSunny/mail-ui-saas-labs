import { useState } from "react";
import { listingContext } from "./listingContext";

const ListingWrapper = ({children}) => {
  const list = [
    {
      "id": 1,
      "subject": "Re: Issue Report 4.12.2024",
      "sender": "Asanka Jayasingh",
      "tags": ["Inbound Mail"],
      "timestamp": "01:52 AM",
      "status": "Unread",
      "chatMessages": [
        {
          "sender": "Asanka Jayasingh",
          "message": "Hey, I missed your previous email. Can you please resend?",
          "timestamp": "01:40 AM"
        },
        {
          "sender": "Support Agent",
          "message": "Sure! Resending it now.",
          "timestamp": "01:45 AM"
        }
      ]
    },
    {
      "id": 2,
      "subject": "Re: [External Sender] Re: High Priority",
      "sender": "Lauren Widloski",
      "tags": ["Inbound Mail"],
      "attachments": ["image001.jpg", "image002.jpg"],
      "timestamp": "01:52 AM",
      "status": "Read",
      "chatMessages": [
        {
          "sender": "Lauren Widloski",
          "message": "Can you confirm receipt of the documents attached?",
          "timestamp": "01:20 AM"
        },
        {
          "sender": "Support Agent",
          "message": "Yes, I have received them. Thank you!",
          "timestamp": "01:25 AM"
        }
      ]
    },
    {
      "id": 3,
      "subject": "Re: Helpwise Next Steps (App Issues)",
      "sender": "Haris Ishrat Alvi",
      "tags": ["Inbound Mail"],
      "attachments": ["processed-D06D916F-A.pdf"],
      "timestamp": "Dec 9",
      "status": "Read",
      "chatMessages": [
        {
          "sender": "Haris Ishrat Alvi",
          "message": "Are you getting this error on every conversation?",
          "timestamp": "Dec 8, 09:00 PM"
        },
        {
          "sender": "Support Agent",
          "message": "Yes, it seems to be consistent. We are investigating.",
          "timestamp": "Dec 8, 09:15 PM"
        }
      ]
    },
    {
      "id": 4,
      "subject": "Re: Downgrade to Basic Plan",
      "sender": "Shammes",
      "tags": ["Inbound Mail"],
      "timestamp": "Dec 5",
      "status": "Unread",
      "chatMessages": [
        {
          "sender": "Shammes",
          "message": "I’d like to downgrade my plan. Can you guide me through the process?",
          "timestamp": "Dec 4, 10:00 AM"
        },
        {
          "sender": "Support Agent",
          "message": "Absolutely! I’ll send you the steps shortly.",
          "timestamp": "Dec 4, 10:10 AM"
        }
      ]
    },
    {
      "id": 5,
      "subject": "Re: Following up on this.",
      "sender": "Jennifer Lowth",
      "tags": ["HW / Outbound Mail"],
      "timestamp": "Dec 5",
      "status": "Read",
      "chatMessages": [
        {
          "sender": "Jennifer Lowth",
          "message": "Following up on the request. Any updates?",
          "timestamp": "Dec 5, 09:00 AM"
        },
        {
          "sender": "Support Agent",
          "message": "We’re reviewing it and will get back to you by EOD.",
          "timestamp": "Dec 5, 09:15 AM"
        }
      ]
    },
    {
      "id": 6,
      "subject": "Re: Picklist on Forms?",
      "sender": "Ashroof",
      "tags": ["Inbound Mail", "HW / Feature Request"],
      "timestamp": "Nov 29",
      "status": "Unread",
      "chatMessages": [
        {
          "sender": "Ashroof",
          "message": "Is there a way to add a picklist on the forms?",
          "timestamp": "Nov 28, 02:00 PM"
        },
        {
          "sender": "Support Agent",
          "message": "Let me check on that for you.",
          "timestamp": "Nov 28, 02:05 PM"
        }
      ]
    },
    {
      "id": 7,
      "subject": "Re: Update on queries raised on Helpwise support call",
      "sender": "Almeen Siddiqi",
      "tags": ["HW / Outbound Mail"],
      "timestamp": "Nov 26",
      "status": "Read",
      "chatMessages": [
        {
          "sender": "Almeen Siddiqi",
          "message": "Any updates on the queries I raised during our call?",
          "timestamp": "Nov 25, 03:00 PM"
        },
        {
          "sender": "Support Agent",
          "message": "Yes, I have an update. I’ll email you shortly.",
          "timestamp": "Nov 25, 03:10 PM"
        }
      ]
    },
    {
      "id": 8,
      "subject": "Re: HELPWISE ISSUE - RANDOM REASSIGNMENT OF EMAILS AND TAGS",
      "sender": "Crystal Burton",
      "tags": ["HW / Bugs & Issues"],
      "timestamp": "Nov 26",
      "status": "Unread",
      "chatMessages": [
        {
          "sender": "Crystal Burton",
          "message": "Emails and tags are being reassigned randomly. This needs urgent attention.",
          "timestamp": "Nov 26, 08:00 AM"
        },
        {
          "sender": "Support Agent",
          "message": "We are looking into it. Expect an update shortly.",
          "timestamp": "Nov 26, 08:15 AM"
        }
      ]
    },
    {
      "id": 9,
      "subject": "Re: Enhancement Idea - Signature Management",
      "sender": "David Reed",
      "tags": ["Inbound Mail", "HW / Feature Request"],
      "timestamp": "Nov 11",
      "status": "Read",
      "chatMessages": [
        {
          "sender": "David Reed",
          "message": "How about adding a feature to manage email signatures better?",
          "timestamp": "Nov 10, 01:00 PM"
        },
        {
          "sender": "Support Agent",
          "message": "That’s a great idea! I’ll forward this to our product team.",
          "timestamp": "Nov 10, 01:05 PM"
        }
      ]
    },
    {
      "id": 10,
      "subject": "RE: Update on the support call",
      "sender": "Shanna Ross",
      "tags": ["Inbound Mail", "HW / Bugs & Issues", "HW / Feature Request"],
      "timestamp": "Nov 11",
      "status": "Read",
      "chatMessages": [
        {
          "sender": "Shanna Ross",
          "message": "Can you provide an update on the bug fixes we discussed?",
          "timestamp": "Nov 11, 09:00 AM"
        },
        {
          "sender": "Support Agent",
          "message": "Yes, the fixes are in progress. I’ll keep you posted.",
          "timestamp": "Nov 11, 09:15 AM"
        }
      ]
    }
  ];
  const [mails, setMails] = useState(list);
  const [activeMail, setActiveMail] = useState(null);
  const contextData = {
    mails,
    setMails,
    activeMail,
    setActiveMail
  }

  return <listingContext.Provider value={contextData}>
    { children }
  </listingContext.Provider>
}

export default ListingWrapper;