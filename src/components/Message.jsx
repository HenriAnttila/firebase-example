import {Chip, Typography} from "@mui/material";

const dateTimeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});


export default function Message({ createdAt, text, displayName }) {
    if (!(createdAt && text && displayName)) return;
    createdAt = dateTimeFormat.format(new Date(createdAt.seconds * 1000));

    return (
        <Chip
            sx={{marginBottom: 1, marginLeft: 1 }}

            color="primary"
            label={<Typography style={{whiteSpace: 'normal'}}>
                {createdAt} {displayName}: {text}
            </Typography>}
            style={{height: "100%"}}
        />
  )
}
