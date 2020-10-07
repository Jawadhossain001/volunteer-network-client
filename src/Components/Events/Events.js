import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Events.css'
const Events = () => {
    const [user] = useContext(UserContext)
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('https://volunteer-network-serv.herokuapp.com/my-events', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                email: user.email
            }
        })
            .then(res => res.json())
            .then(result => {
                setEvents(result)
            })
    })

    const cancelEventHandler = (id) => {
        fetch('https://volunteer-network-serv.herokuapp.com/cancel-event', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                id: id
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const existingEvents = events.filter(data => data._id !== id)
                    // console.log(existingEvents)
                    setEvents(existingEvents)
                }
            })
    }
    return (
        <>
            <Header />
            <div className="events">
                <div>
                    <Grid container item xs={12} spacing='5'>
                        {
                            events.map(event => {
                                return (

                                    <Grid item xs={12} md={6} key={event._id} >
                                        <div className="event-container">
                                            <div>
                                                <img src={event.img} alt="" />
                                            </div>
                                            <div style={{ marginLeft: '10px', width: '100%' }}>
                                                <h3>{event.eventName}</h3>
                                                <h4>{event.date}</h4>
                                                <div style={{ textAlign: 'right' }}>
                                                    <button onClick={() => cancelEventHandler(event._id)} className='event-cancel'>
                                                        cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>

                                )
                            })
                        }
                    </Grid>
                </div>
            </div>
        </>
    );
};

export default Events;