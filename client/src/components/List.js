import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardpost from './Cardpost';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const List = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const getPosts = () => {
        axios.get('http://localhost:3001/Post').then((res) => {
            console.log(res.data)
            setPosts(res.data);
        })
    }

    useEffect(() => {
        getPosts();
    }, [])


    return (
        <div>
            <div className='ms-1 d-flex justify-content-between'>
                <h1>Posting List</h1>
                <div>
                    <Link to='/Post' className='btn btn-success'>
                        Create Posting
                    </Link>
                </div>
            </div>
            {posts.map(el => {
                return (
                    <Cardpost
                        key={el.id}
                        title={el.title}>
                        onClick={() => console.log('h1')}
                    </Cardpost>
                )
            })}
        </div>
    )
}

export default List