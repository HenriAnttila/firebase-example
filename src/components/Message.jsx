import {Chip} from "@mui/material";

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
      <div style={{ "padding-bottom": 2 }}>
          <Chip color="primary" label={`(${createdAt}) ${displayName}: ${text}`}/>
      </div>
  );
}
