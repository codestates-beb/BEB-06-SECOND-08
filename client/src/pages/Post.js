import React, { useState } from 'react'
import axios from 'axios';

const Post = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const onSubmit = () => {
        axios.post('http://localhost:4000/post',
            {
                "nickname":"test",
                "title":"title",
                "content":"content",
                "likes":7
            }
        )
    }
    return (
        <div className='Container'>
          <h1>Create Posting</h1>
            <div className='mb-3'>
                <label className='form-lable'>Title</label>
                <input
                    className='form-control'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
            </div>
            <div className='mb-3'>
                <label className='form-lable'>Body</label>
                <textarea
                    className='form-control'
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value)
                    }}
                    rows='10'
                />
            </div>
            <button
                className='btn btn-success'
                onClick={onSubmit()}
            >Post</button>
        </div>
    )
}

export default Post