import {AppBar, Toolbar} from "@mui/material";
import SignInOutButton from "./SignInOutButton.jsx";

export default function TopAppBar() {
    return (
        <>
            <AppBar style={{background: "linear-gradient(45deg, #647DEE, #7F53AC)"}} position="sticky">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <h1>Chat</h1>
                    <SignInOutButton/>
                </Toolbar>
            </AppBar>
        </>
    );
}