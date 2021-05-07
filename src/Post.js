import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>Beknaz Baktygulov</h2>
                    <p>Description</p>
                </div>
            </div>
        </div>
    )
}

export default Post