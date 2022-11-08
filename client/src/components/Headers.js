import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const Headers = ({ login, setLogout }) => {

    const handleLogout = () => {
        setLogout();

    }

<<<<<<< HEAD
const Headers = (login) => {

    const handleLogout = () => {

    }
=======
>>>>>>> a3ba4246141db53664f79846cab6e0c213cedb21
    return (
        <>
            <Navbar style={{ backgroundSize: "0", backgroundColor: "#06d6a9" }}>
                <Container>
                    <Navbar.Brand href="/">SteemEight</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Main</Nav.Link>
                        <Nav.Link href="/MyPage">MyPage</Nav.Link>
                        <Nav.Link href="/Post">Post</Nav.Link>
<<<<<<< HEAD
                        {login ? <Nav.Link href="/" onClick={handleLogout}>Logout</Nav.Link> : <Nav.Link href="/Login">Login</Nav.Link>}
=======
                        <Nav.Link href="/market">Market</Nav.Link>
                        <Nav.Link href="/SignUp">SignUp</Nav.Link>
                        {login ? <Nav.Link ><div to="/" onClick={handleLogout}>Logout</div></Nav.Link> : <Nav.Link href="/Login">Login</Nav.Link>}
>>>>>>> a3ba4246141db53664f79846cab6e0c213cedb21
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}


export default Headers
//로고 , 회원가입, 로그인 / 로그아웃 컴포넌트 Link