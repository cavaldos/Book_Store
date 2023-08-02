import React, { useEffect } from "react";
import "./avatar.scss";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import RenderCropper from "./cropper/cropper";
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  cameraIcon: {
    height: "1rem",
    width: "1rem",
    position: "absolute",
    bottom: "0",
    right: "0rem",
    backgroundColor: "white",

    "&:hover": {
      backgroundColor: "white",
    },
  },
}));

export default function RenderAvatar() {
  const email= useSelector((state) => state.role.email);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [avatar, setAvatar] = React.useState("");

  useEffect(() => {
    // Fetch the user's avatar from the backend when the component mounts
    const fetchAvatar = async () => {
      try {
        const res = await fetch(`http://localhost:8000/getAvatar?email=${email}`);
        const data = await res.json();
        setAvatar(data.photoUrl);
      } catch (err) {
        console.warn(err);
      }
    };
    fetchAvatar();
  }, [email]);

  

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const [showCropper, setShowCropper] = React.useState(false);
  const handleCropper = () => setShowCropper((prevValue) => !prevValue);

  return (
    <>
      <div className="avatar-container">
        <div className="avatar">
          <img src={avatar || "img/unknown.png"} alt="avatar" className="avatar-img" />
        </div>

        <IconButton
          className={classes.cameraIcon}
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <CameraAltIcon fontSize="small" size ="20"/>
        </IconButton>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>View</MenuItem>
                    <MenuItem
                      onClick={(event) => {
                        handleCropper();
                        handleClose(event);
                      }}
                    >
                      Change
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Remove</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>

      {showCropper && (
        <RenderCropper handleCropper={handleCropper} setAvatar={setAvatar} />
      )}
    </>
  );
}