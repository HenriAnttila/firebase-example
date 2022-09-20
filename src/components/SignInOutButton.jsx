import { useAuth, useSigninCheck } from "reactfire";
import { signInWithGoogle, signOut } from "../utils/firebase/auth";
import {Avatar, Button, IconButton, Menu, MenuItem} from "@mui/material";
import {useState} from "react";

let photo = "";

async function signIn(auth) {
  await signInWithGoogle(auth)
  photo = auth.currentUser.photoURL;
}

export default function SignInOutButton() {
    const { data: signInCheckResult } = useSigninCheck();
    const auth = useAuth();
    const [anchor, setAnchor] = useState(null)
    const open = Boolean(anchor)

    const handleClick = (event) => {
        console.log(event.currentTarget)
        setAnchor(event.currentTarget)
        console.log(anchor)
    }

    const handleClose = () => {
        setAnchor(null);
    };

    if (signInCheckResult.signedIn) {
        photo = auth.currentUser.photoURL;
    }
    return signInCheckResult.signedIn ? (
      <>
        <IconButton variant="outlined" onClick={handleClick}>
            <Avatar src={photo}/>
        </IconButton>
        <Menu
            //anchorEl={anchor}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
            <MenuItem>
                <Button onClick={() => signOut(auth)}>
                    Sign out
                </Button>
            </MenuItem>
        </Menu>
      </>
    ) : (
    <Button variant="contained" onClick={() => signIn(auth)}>Sign in with Google</Button>
    );
}
