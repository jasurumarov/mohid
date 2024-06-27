import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useGetUsersQuery } from '../../context/api/userApi';

// Generate Order Data

function preventDefault(event) {
    event.preventDefault();
}

export default function Orders() {
    const { data } = useGetUsersQuery()

    return (
        <React.Fragment>
            <Title>Users</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Firstname</TableCell>
                        <TableCell>Lastname</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Role</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.data?.users.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.FirstName}</TableCell>
                            <TableCell>{row.LastName}</TableCell>
                            <TableCell>{row.phones[0]}</TableCell>
                            <TableCell>{row.id}</TableCell>
                            <TableCell align="right">{`${row.role}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more users
            </Link>
        </React.Fragment>
    );
}