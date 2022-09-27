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
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            anchorEl={anchor}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
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
