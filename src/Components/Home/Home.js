import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Grid } from '@material-ui/core';
import EventCard from '../EventCard/EventCard'
import './Home.css';

const Home = () => {
    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        fetch('https://volunteer-network-serv.herokuapp.com/show-volunteers')
            .then(res => res.json())
            .then(result => {
                setVolunteers(result)
            })
    }, [])

    return (
        <>
            <div className="home">
                <Header />
                <div className="search-container">
                    <h1>I GROW BY HELPING PEOPLE NEED.</h1>
                    <input className="search-input" type="text" placeholder="Search..." />
                    <button className="search-btn"><b>Search</b></button>
                </div>
                <div className='container' style={{ marginTop: '70px' }}>
                    <Grid container item xs={12} spacing='5' justify='center' style={{ textAlign: 'center', margin: 'auto' }}>
                        {
                            volunteers.map(event => {
                                let colors = ['#FFBD3E', '#3F90FC', '#FF7044', '#cc6fb5e0'];
                                const random = Math.floor(Math.random() * 4)
                                return (
                                    <Grid item xs={12} sm={6} md={3} key={event._id}>
                                        <EventCard event={event} myColor={colors[random]} ></EventCard>
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

export default Home;