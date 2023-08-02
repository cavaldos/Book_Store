import React,{ useEffect } from "react";
import "./cropper.scss";

import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";

import getCroppedImg, { generateDownload } from "../../../util/cropImage";
import { IconButton, makeStyles } from "@material-ui/core";
import { SnackbarContext } from "../snackbar/snackbar";
import { BackdropContext } from "../backdrop/backdrop";
import { dataURLtoFile } from "../../../util/dataURLtoFile.js";
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
  iconButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
  },
  cancelIcon: {
    color: "#00a3c8",
    fontSize: "50px",
    "&:hover": {
      color: "red",
    },
  },
});

export default function RenderCropper({ handleCropper, setAvatar }) {
  const email= useSelector((state) => state.role.email);

  const classes = useStyles();

  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const setStateSnackbarContext = React.useContext(SnackbarContext);
  const { closeBackdrop, showBackdrop } = React.useContext(BackdropContext);

  const [image, setImage] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) =>
    setCroppedArea(croppedAreaPixels);

  // To read file as Data URL
  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };

  // To download the edited image
  const onDownload = () => {
    if (!image)
      return setStateSnackbarContext(
        true,
        "Please select an image!",
        "warning"
      );

    generateDownload(image, croppedArea);
  };

  // Clear the selected image
  const onClear = () => {
    if (!image)
      return setStateSnackbarContext(
        true,
        "Please select an image!",
        "warning"
      );

    setImage(null);
  };

  // To upload the edited image
  const onUpload = async () => {
    if (!image)
      return setStateSnackbarContext(
        true,
        "Please select an image!",
        "warning"
      );

    try {
      // Get the image file from the inputRef
      const file = inputRef.current.files[0];

      // Create a new FormData and append the file to it
      const formData = new FormData();
      formData.append("croppedImage", file);
      formData.append("email", email);

      showBackdrop();

      const res = await fetch("http://localhost:8000/setProfilePic", {
        method: "POST",
        body: formData
      });

      const res2 = await res.json();
      console.log(res2);

      closeBackdrop();
      setAvatar(res2.data);
    } catch (err) {
      closeBackdrop();
      console.warn(err);
    }
  };
  useEffect(() => {
    // Fetch the user's photoUrl from the backend when the component mounts
    const fetchAvatar = async () => {
      try {
        const res = await fetch(`http://localhost:8000/getAvatar?email=${email}`);
        const data = await res.json();
        if (data.photoUrl) {
          setAvatar(data.photoUrl);
          console.log(data);
        }
      } catch (err) {
        console.warn(err);
      }
    };
    fetchAvatar();
  }, [email]);



  return (
    <div className="container-maincropper">
      <IconButton className={classes.iconButton} onClick={handleCropper}>
        <CancelIcon className={classes.cancelIcon} />
      </IconButton>

      <div className="container-cropper">
        {image ? (
          <>
            <div className="cropper">
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            <div className="slider">
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e, zoom) => setZoom(zoom)}
                color="secondary"
              />
            </div>
          </>
        ) : null}
      </div>

      <div className="container-buttons">
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={onSelectFile}
          style={{ display: "none" }}
        />

        <Button
          onClick={() => onClear()}
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
        >
          Clear
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={triggerFileSelectPopup}
          style={{ marginRight: "10px" }}
        >
          Choose
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={onDownload}
          style={{ marginRight: "10px" }}
        >
          Download
        </Button>

        <Button variant="contained" color="secondary" onClick={onUpload}>
          Upload
        </Button>
      </div>
    </div>
  );
}