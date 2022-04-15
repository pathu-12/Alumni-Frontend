import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import axios from "axios";
import Router from 'next/router';
import { FileUploader } from "react-drag-drop-files";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



export default function FullScreenDialog() {
    const [open, setOpen] = React.useState(false);
    const [file, setFile] = useState(null);
    const [eventname, setEventname] = useState("");
    const [eventdescription, setEventdescription] = useState("");
    const [eventdatetime, setEventDatetime] = useState("2017-05-24T10:30");
    const fileTypes = ["JPG", "PNG"];
    const clearForm = ()=>{
        setFile("");
        setEventname("");
        setEventdescription("");
        setEventDatetime("2017-05-24T10:30");
    }
    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const event_data = new FormData();
            event_data.append("name", eventname);
            event_data.append("schedule", eventdatetime);
            event_data.append("description", eventdescription);
            event_data.append("file", file);
            const { data } = await axios.post("http://localhost:8000/createevent", event_data);
        }
        catch (err) {
            console.log(err);
        }
        handleClose();
        clearForm();
        Router.reload(window.location.pathname);
    }

    const handleChange = (image) => {
        setFile(image);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
                sx={{
                    margin: "1rem 0 0 4rem",
                    color: "#000000",
                    border: "1px solid #000",
                    borderRadius: "0"
                }}
            >
                add event
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', background: "#000" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            CREATE EVENT
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List sx={{ margin: "3rem 0 0 4rem" }}>
                    <form onSubmit={submitForm} autoComplete="off">
                        <TextField id="outlined-basic" label="Event Name" variant="outlined" sx={{ width: "50%", marginBottom: "2rem" }} name="eventname" value={eventname} onChange={(e) => setEventname(e.target.value)} /><br />
                        <TextField
                            id="outlined-multiline-static"
                            label="Event Description"
                            multiline
                            rows={4}
                            name="eventdescription"
                            value={eventdescription}
                            onChange={(e) => setEventdescription(e.target.value)}
                            sx={{ width: "50%", marginBottom: "2rem" }}
                        /><br />
                        <TextField
                            id="datetime-local"
                            name="eventdatetime"
                            label="Event Date & Time"
                            type="datetime-local"
                            value={eventdatetime}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            sx={{ width: "50%", marginBottom: "2rem" }}
                            onChange={(e)=>setEventDatetime(e.target.value)}
                        /><br />
                        <FileUploader
                            handleChange={handleChange}
                            name="file"
                            types={fileTypes}
                        /><br />
                        <Button variant="contained" type="submit" size="large" sx={{ background: "#000" }}>
                            Submit
                        </Button>
                    </form>
                </List>
            </Dialog>
        </div>
    );
}