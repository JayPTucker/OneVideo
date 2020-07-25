import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import axios from 'axios';

function LikeDislikes(props) {

    const [Likes, setLikes] = useState(0)
    const [Dislikes, setDislikes] = useState(0)

    const [LikeAction, setLikeAction] = useState(null)
    const [DislikeAction, setDislikeAction] = useState(null)


    let variable = {}

    if(props.video) {
        variable = { videoId: props.videoId, userId: props.userId}
    } else {
        variable = { commentId: props.commentId, userId: props.userId}
    }

    useEffect(() => {

        axios.post('/api/like/getLikes', variable)
            .then(response => {
                if(response.data.success) {
                    setLikes(response.data.likes.length)

                    response.data.likes.map(like => {
                        if(like.userId === props.userId) {
                            setLikeAction('liked')
                        }
                    })
                } else {
                    alert('Failed to Gather Likes from the Database')
                }
            })

        axios.post('/api/like/getDislikes', variable)
        .then(response => {
            if(response.data.success) {
                setDislikes(response.data.dislikes.length)

                response.data.dislikes.map(dislike => {
                    if(dislike.userId === props.userId) {
                        setDislikeAction('liked')
                    }
                })
            } else {
                alert('Failed to Gather Likes from the Database')
            }
        })
        
    }, [])

    const onLike = () => {
        if(LikeAction === null) {
            axios.post('/api/like/upLike', variable)
            .then(response => {
                if(response.data.success) {
                    setLikes(Likes + 1)
                    setLikeAction('liked')

                    if(DislikeAction !== null) {
                        setDislikeAction(null)
                        setDislikes(Dislikes - 1)
                    }
                    

                } else {
                    alert('Failed to Like the Post')
                }
            })

        } else {

            axios.post('/api/like/unLike', variable)
            .then(response => {
                if(response.data.success) {
                    setDislikes(Dislikes + 1)
                    setDislikeAction('disliked')

                } else {
                    alert('Failed to unlike the Post')
                }
            })
        }
    }

    const onDislike = () => {
        if(DislikeAction !== null) {
            axios.post('/api/like/unDislike', variable)
            .then(response => {
                if(response.data.success) {
                    setDislikes(Dislikes - 1)
                    setDislikeAction(null)
                } else {
                    alert('Failed to unDislike this post')
                }
            })
        } else {
            axios.post('/api/like/upDislike', variable)
            .then(response => {
                if(response.data.success) {

                    setDislikes(Dislikes + 1)
                    setDislikeAction(null)

                    if(DislikeAction !== null) {
                        setLikeAction(null)
                        setLikes(Likes - 1)
                    }
                    

                } else {
                    alert('Failed to increase Dislikes on this post')
                }
            })
        }
    }

    return (
        <React.Fragment>
            <span key="comment-basic-like">
                <Tooltip title="Like">
                </Tooltip>
                <button onClick={onLike}>
                    <span style={{ paddingLeft: '8px', cursor: 'auto' }}>{Likes} Likes</span>
                </button>
            </span>&nbsp;&nbsp;
            <span key="comment-basic-dislike">
                <button onClick={onDislike}>
                    <span style={{ paddingLeft: '8px', cursor: 'auto' }}>{Dislikes} Dislikes</span>
                </button>
            </span>
        </React.Fragment>
    )
}

export default LikeDislikes