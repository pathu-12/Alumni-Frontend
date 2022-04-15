import { useEffect, useState } from "react";
import axios from "axios";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
    {
        id: 'name',
        label: 'Name',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'registration_no',
        label: 'Registration No',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'passing_year',
        label: 'Passing Year',
        minWidth: 170,
        align: 'left'
    },
    {
        id: 'branch',
        label: 'Branch',
        minWidth: 170,
        align: 'left'
    }
];



const Jobscard = () => {
    const [eventsdata, setEventsdata] = useState([]);
    const [dataget, setDataget] = useState(false);
    const fetch_events = async () => {
        try {
            const events_api = await axios.get("http://localhost:8000/alumnis");
            const data = await events_api.data;
            setEventsdata(data.alumnis);
            setDataget(!dataget);
        }
        catch (err) {
            console.log(err.messege);
        }
    }
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        fetch_events();
    }, []);
    return (
        <Paper sx={{ overflow: 'hidden', margin: "0 4rem 0 4rem" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "0.9rem"
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {eventsdata
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={eventsdata.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default Jobscard