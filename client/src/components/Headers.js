import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
        <>
            <Navbar fixedTop style={{ backgroundSize: "0", backgroundColor: "#06d6a9" }}>
                <Container>
                    <Navbar.Brand href="/">SteemEight</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Main</Nav.Link>
                        <Nav.Link href="/MyPage">MyPage</Nav.Link>
                        <Nav.Link href="/Post">Post</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Headers
//로고 , 회원가입, 로그인 / 로그아웃 컴포넌트 Link