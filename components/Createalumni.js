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
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import axios from "axios";
import Router from 'next/router';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function FullScreenDialog() {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState("");
    const [registration_no, setRegistration_no] = useState("");
    const [passing_year, setPassing_year] = useState("");
    const [branch, setBranch] = useState("");
    const [email_id, setEmail_id] = useState("");
    const [company, setCompany] = useState("");
    const [designation, setDesignation] = useState("");
    const clearForm = ()=>{
        setName("");
        setRegistration_no("");
        setPassing_year("");
        setBranch("");
        setEmail_id("");
        setCompany("");
        setDesignation("");
    }
    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:8000/createalumni", {
                name,
                registration_no,
                passing_year,
                branch,
                email_id,
                company,
                designation
            });
        }
        catch (err) {
            console.log(err);
        }
        handleClose();
        handleClose();
        clearForm();
        Router.reload(window.location.pathname);
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
                            CREATE ALUMNI
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List sx={{ margin: "3rem 0 0 4rem" }}>
                    <form onSubmit={submitForm} autoComplete="off">
                        <TextField id="outlined-basic" label="Alumni Name" variant="outlined" sx={{ width: "50%", marginBottom: "2rem" }} name="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                        <TextField
                            id="outlined-basic"
                            type="number"
                            label="Registration Number"
                            variant="outlined"
                            sx={{
                                width: "50%",
                                marginBottom: "2rem"
                            }}
                            name="registration_no"
                            value={registration_no}
                            onChange={(e) => setRegistration_no(e.target.value)}
                        /><br />
                        <FormControl sx={{
                            width: "50%",
                            marginBottom: "2rem"
                        }}>
                            <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={branch}
                                label="branch"
                                onChange={(e) => setBranch(e.target.value)}
                            >
                                <MenuItem value={`COMPS`}>COMPUTER ENGINEERING</MenuItem>
                                <MenuItem value={`IT`}>INFORMATION TECHNOLOGY ENGINEERING</MenuItem>
                                <MenuItem value={`EXTC`}>ELECTRONICS AND TELECOMMUNICATION ENGINEERING</MenuItem>
                                <MenuItem value={`ETRX`}>ELECTRONICS ENGINEERING</MenuItem>
                                <MenuItem value={`AIDS`}>ARTIFICIAL INTELLIGENCE AND DATA SCIENCE ENGINEERING</MenuItem>
                            </Select>
                        </FormControl><br />
                        <TextField id="outlined-basic" type="number" label="Passing Year" variant="outlined" sx={{ width: "50%", marginBottom: "2rem" }} name="passing_year" value={passing_year} onChange={(e) => setPassing_year(e.target.value)} /><br />
                        <TextField id="outlined-basic" label="Email Id" variant="outlined" sx={{ width: "50%", marginBottom: "2rem" }} name="email_id" value={email_id} onChange={(e) => setEmail_id(e.target.value)} /><br />
                        <TextField id="outlined-basic" label="Company" variant="outlined" sx={{ width: "50%", marginBottom: "2rem" }} name="company" value={company} onChange={(e) => setCompany(e.target.value)} /><br />
                        <TextField id="outlined-basic" label="Designation" variant="outlined" sx={{ width: "50%", marginBottom: "2rem" }} name="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} /><br />
                        <Button variant="contained" type="submit" size="large" sx={{ background: "#000" }}>
                            Submit
                        </Button>
                    </form>
                </List>
            </Dialog>
        </div>
    );
}