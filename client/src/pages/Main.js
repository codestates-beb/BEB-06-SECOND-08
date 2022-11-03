import React, { useState, useEffect, useCallback } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import List from '../components/List';
import { Link } from 'react-router-dom';
import MyPagination from '../components/MyPagination';
import 'bootstrap/dist/css/bootstrap.min.css'

// const postlist2 = [{{id : 1}, }]
const SERVER_URL = 'http://localhost:3000/main'
const Main = () => {
    const [search, setSearch] = useState("");
    const [postlist, setPostlist] = useState([
        {
            No: 13,
            nickname: 'jungbal',
            title: 'jh429800',
            views: 123
        },
        // {
        //   No: 332,
        //   nickname: 'jungbal',
        //   title: 'jh429800',
        //   views: 'asdq'
        // }
    ]);
    const [data, setData] = useState({}) //@ 받아올 데이터
    // const [page, setPage] = useState(1); //@ 페이지네이션

    const setSEARCH = (e) => {
        setSearch(e.target.value)
    }

    const setPostList = (e) => {
        setPostList(e.target.value)
    }

    const mainpage = async () => {
        try {
            const res = await axios.get(SERVER_URL,) //@ , 뒤에  { params: { page, limit: 5 } }
            console.log(res);
            setPostlist(res.data);
            // setData({ id: res.data, totalPage: res.pagination.totalPage })
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        mainpage();
    }, []) //@대괄호 안에 page 넣으면 페이지네이션
    // const handleChangePage = useCallback((page) => {
    //     setPage(page)
    // }, [])

    // const onSearchHandler = async (e) => {
    //     e.preventDefault();
    //     const nickname = e.target.nickname;
    //     const number = e.target.number;
    //     const title = e.target.title;
    //     const postingtime = e.target.postingtime;
    //     const views = e.tartget.views;
    //     await axios.post(SERVER_URL, { nickname, number, title, postingtime, views })
    //     mainpage();
    // }

    return (
        <div>
            <div className='Search-bar'>
                <Navbar bg="light" expand="lg">
                    {/* //@ Search bar */}
                    <Container fluid>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                        >
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control onChange={setSEARCH}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" onClick={setSEARCH}>Search</Button>
                        </Form>
                    </Container>
                </Navbar>
                <Row>
                    <div className='table-box'>
                        <Table rounded responsive bordered hover size="md" className="main_Table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Title</th>
                                    <th>Nickname</th>
                                    <th>Views</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {data.id && data.id.length > 0 && data.id.map((id, index) => (
                                    <tr>
                                        <td>{(page - 1) * 10 + (index + 1)}</td>
                                        <td>{id.title}</td>
                                    </tr>
                                ))} */}
                                {postlist && postlist.map((el) => {
                                    return (
                                        <List No={el.No} nickname={el.nickname} title={el.title} views={el.views} />)
                                })}
                            </tbody>
                        </Table>
                        {/* {
                            // data.totalPage > 1 && (
                            //     <MyPagination
                            //         total={data.totalPage}
                            //         current={page}
                            //         onChangePage={handleChangePage}
                            //     />
                            // )
                        } */}
                    </div>
                </Row>
            </div>
            <Link to="/postpage">
                <center><Button className="go_to_font" variant="outline-warning mt-4 mb-3 p-3 btn-Info">Posting</Button></center>
            </Link>
        </div>
    );
}
export default Main;