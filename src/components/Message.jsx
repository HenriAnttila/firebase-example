import { Chip, IconButton, Menu, Typography } from "@mui/material";
import { useUser } from "reactfire";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRef } from "react";
import DeleteButton from "./DeleteButton.jsx";
import { MessageOptions } from "./MessageOptions.jsx";

const dateTimeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

export default function Message({ createdAt, text, displayName, uid, id }) {
    if (!(createdAt && text && displayName)) return;
    createdAt = dateTimeFormat.format(new Date(createdAt.seconds * 1000));
    const { data } = useUser()

    return (
        <div>
            <Chip
                sx={{ marginBottom: 1, marginLeft: 1, height: "100%" }}
                color="primary"
                label={<Typography style={{whiteSpace: 'normal'}}>
                    <strong>{displayName}</strong> ({createdAt})
                    <br/>
                    {text}
                </Typography>}
            />

            {data.uid === uid && (
                <MessageOptions id={id}/>
            )}
        </div>
    )
}