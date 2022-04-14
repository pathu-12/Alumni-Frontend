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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function FullScreenDialog() {
    const [open, setOpen] = React.useState(false);
    const [file, setFile] = useState(null);
    const [eventname, setEventname] = useState("");
    const [eventdescription, setEventdescription] = useState("");
    const [eventdatetime, setEventDatetime] = useState("2017-05-24T10:30");
    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const event_data = new FormData();
            event_data.append("name", eventname);
            event_data.append("schedule", eventdatetime);
            event_data.append("description", eventdescription);
            event_data.append("event_image", file);
            console.log(event_data);
            const { data } = await axios.post("http://localhost:8000/createevent", event_data);
        }
        catch (err) {
            console.log(err.messge);
        }
        handleClose();
    }



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
                add alumni
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
                        <TextField id="outlined-basic" label="Event Name" variant="outlined" sx={{ width: "50%", marginBottom: "2rem" }} name="name" value={name} onChange={(e)=>setEventname(e.target.value)} /><br />
                        <TextField
                            type="file"
                            name="file"
                            value={file}
                            sx={{ width: "50%", marginBottom: "2rem" }}
                            onChange={(e)=>setFile(e.target.value)} 
                        /><br/>
                        <Button variant="contained" type="submit" size="large" sx={{ background: "#000" }}>
                            Submit
                        </Button>
                    </form>
                </List>
            </Dialog>
        </div>
    );
}