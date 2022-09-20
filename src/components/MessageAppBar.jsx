import {AppBar, Toolbar} from "@mui/material";
import Form from "./Form.jsx";

export default function MessageAppBar({ messagesCollection }) {
    return (
        <AppBar position="sticky"  sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Form messagesCollection={messagesCollection}/>
            </Toolbar>
        </AppBar>
    );
}