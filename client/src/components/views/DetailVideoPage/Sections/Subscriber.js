import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Subscriber(props) {
    const userTo = props.userTo
    const userFrom = props.userFrom

    const [SubscribeNumber, setSubscribeNumber] = useState(0)

    useEffect(() => {

        const subscribeNumberVariables = { userTo:userTo, userFrom:userFrom }
        axios.post('/api/subscribe/subscribeNumber', subscribeNumberVariables)
        .then(response => {
            if(response.data.success) {
                setSubscribeNumber(response.data.subscribeNumber)
            } else {
                alert('Failed to get amount of Subscribers')
            }
        })

        axios.post('/api/subscribe/subscribed', subscribeNumberVariables)
        .then(response => {
            if(response.data.success) {
                console.log(response.data.subscribed)
            } else {
                alert('Failed to get Subscriber Information')
            }
        })

    }, [])



    return (
        <div>
            <button>
                Subscribe
            </button>
            
        </div>
    )
}

export default Subscriber