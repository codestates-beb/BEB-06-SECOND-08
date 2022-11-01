
import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

export default function List({ No, title, nickname, views, link }) {
    return (
        <Container>
            <Link to={link}>
                <Table striped bordered hover className="mt-5" >
                    <tbody>
                        <tr>
                            <th>{No}</th>
                            <th>{title}</th>
                            <th>{nickname}</th>
                            <th>{views}</th>
                        </tr>
                    </tbody>
                </Table>
            </Link>
        </Container>
    )
}