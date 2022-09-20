import Message from "./Message";
import {Box} from "@mui/material";

export default function Messages({ messages }) {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }}>
      {messages?.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </Box>
  );
}