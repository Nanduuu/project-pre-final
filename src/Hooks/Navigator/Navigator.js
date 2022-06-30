import React, { useState, useEffect } from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navigator.css';
 



const Navigator = () => {

    return(
        <Container className="mt-3 ">
                <div className='nav text-center'>
                        <Link to="/"> Dashboard</Link>
                        <Link to="/"> Admission</Link>
                        <Link to="/"> Fee Payment</Link>
                        <Link to="/"> Transport</Link>
                        <Link to="/"> Exam</Link>
                        <Link to="/"> Activity</Link>
                        <Link to="/"> Admin</Link>
                        <Link to="/"> Account</Link>
                </div>
        
        
        </Container>)

}

export default Navigator;