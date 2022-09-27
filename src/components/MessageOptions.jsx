import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import DeleteButton from "./DeleteButton.jsx";
import MoreVertIcon from "@mui/icons-material/MoreVert.js";
import EditButton from "./EditButton.jsx";

export function MessageOptions({id}) {
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

    // noinspection JSValidateTypes
    return(
        <>
            <IconButton onClick={handleClick}>
                <MoreVertIcon/>
            </IconButton>
            <Menu open={open}
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
                    <DeleteButton messageId={id}/>
                </MenuItem>
                <MenuItem>
                    <EditButton messageId={id}/>
                </MenuItem>
            </Menu>
        </>
    )
}