import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Row, Col } from "react-bootstrap";
import SingleComment from './SingleComment'
import ReplyComment from './ReplyComment'


function Comments(props) {

    const user = useSelector(state => state.user)

    const [Comment, setComment] = useState("")

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            content: Comment,
            writer: user.userData._id,
            postId: props.postId
        }

        axios.post('/api/comment/saveComment', variables)
        .then(response => {
            if(response.data.success) {
                setComment("")
                props.refreshFunction(response.data.result)
            } else {
                alert('Failed to Save Comment')
            }
        })
    }

    return (
        <div>
            <hr />
            <br />
            <p>Replies</p>
            <hr />
            {console.log(props.CommentLists)}

            {props.CommentLists && props.CommentLists.map((comment, index) => (

                (!comment.responseTo &&

                    <React.Fragment>
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                        <ReplyComment CommentLists={props.CommentLists} postId={props.postId} parentCommentId={comment._id} refreshFunction={props.refreshFunction} />
                    </React.Fragment>
                )
            ))}

            <form onSubmit={onSubmit}>
                <input
                    onChange={handleChange}
                    value={Comment}
                    placeholder="Write a Comment"
                    />
                    <br />
                    <button onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Comments