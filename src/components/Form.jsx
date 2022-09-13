import { addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useUser } from "reactfire";
import {Button, TextField} from "@mui/material";

export default function Form({ messagesCollection }) {
  const [newMessage, setNewMessage] = useState("");
  const { data: user } = useUser();

  const { uid, displayName, photoURL } = user;

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      addDoc(messagesCollection, {
        text: trimmedMessage,
        createdAt: serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
      // Clear input field
      setNewMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
          label="Message"
          size="small"
          value={newMessage}
          onChange={handleChange}
          style={{ "padding-right": 5 }}
      />
      {newMessage ?
          <Button type="submit" variant="contained">Send</Button> :
          <Button disabled variant="contained">Send</Button>
      }
    </form>
  );
}
