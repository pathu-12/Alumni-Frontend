import * as React from 'react';
import { useState } from 'react';
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
import axios from "axios";
import Router from 'next/router';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const handleClose = () => {
        setOpen(false);
    };

    const clearForm = ()=>{
        setName("");
        setTitle("");
        setLocation("");
        setDescription("");
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:8000/createhiring", {
                company: name,
                title,
                location,
                description
            });
        }
        catch (err) {
            console.log(err.messge);
        }
        handleClose();
        clearForm();
        Router.reload(window.location.pathname);
    }

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
                add job
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
                            CREATE JOB
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List sx={{ margin: "3rem 0 0 4rem" }}>
                    <form onSubmit={submitForm} autoComplete="off">
                        <TextField id="outlined-basic" label="Company Name" variant="outlined" name="name" sx={{ width: "50%", marginBottom: "2rem" }} value={name} onChange={(e) => setName(e.target.value)} /><br />
                        <TextField id="outlined-basic" label="Job Title" variant="outlined" name="title" sx={{ width: "50%", marginBottom: "2rem" }} value={title} onChange={(e) => setTitle(e.target.value)} /><br />
                        <TextField id="outlined-basic" label="Job Location" variant="outlined" name="location" sx={{ width: "50%", marginBottom: "2rem" }} value={location} onChange={(e) => setLocation(e.target.value)} /><br />
                        <TextField
                            id="outlined-multiline-static"
                            label="Job Description"
                            multiline
                            rows={4}
                            name="description"
                            sx={{ width: "50%", marginBottom: "2rem" }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        /><br />
                        <Button type="submit" variant="contained" size="large" sx={{background: "#000"}}>Submit</Button>
                    </form>
                </List>
            </Dialog>
        </div>
    );
}