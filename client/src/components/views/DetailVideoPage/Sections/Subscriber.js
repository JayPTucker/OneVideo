import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Subscriber(props) {
    const userTo = props.userTo
    const userFrom = props.userFrom

    const [SubscribeNumber, setSubscribeNumber] = useState(0)
    const [Subscribed, setSubscribed] = useState(false)

    const onSubscribe = () => {

        let subscribeVariables = {
            userTo: userTo,
            userFrom: userFrom
        }

        if(Subscribed) {
            // SUBSCRIBED ALREADY:
            axios.post('/api/subscribe/unsubscribe', subscribeVariables)
                .then(response => {
                    if(response.data.success){
                        setSubscribeNumber(SubscribeNumber - 1)
                        setSubscribed(!Subscribed)
                    } else {
                        alert('Failed to Unsubscribe from this Channel')
                    }
                })

        } else {
            // NOT SUBSCRIBED YET:
            axios.post('/api/subscribe/subscribe', subscribeVariables)
                .then(response => {
                    if(response.data.success) {
                        setSubscribeNumber(SubscribeNumber + 1)
                        setSubscribed(!Subscribed)
                    } else {
                        alert('Failed to Subscribe to this Channel')
                    }
                })
        }
    }

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
                setSubscribed(response.data.subscribed)
            } else {
                alert('Failed to get Subscriber Information')
            }
        })

    }, [])



    return (
        <div>
            <button onClick={onSubscribe} style={{ backgroundColor: `${Subscribed ? 'lightgray' : 'red'}`}}>
                {SubscribeNumber} {Subscribed? 'Subscribed': 'Subscribe'}
            </button>
            
        </div>
    )
}

export default Subscriber