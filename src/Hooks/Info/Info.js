import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {  } from 'react-icons/fc';
import './Info.css';





const Info = () => {

    return(
        <div>

            <Container md={12} Style={"background-color:#7252a2; color:white;"}  fluid >
                <Row className='p-2 '>
                    <Col className='text-left'>Technical Help - 9945215941</Col>
                    <Col className='text-right'>
                        Welcome, Admin  
                        <span className='logout'> 
                         Logout 
                        </span>
                        
                    </Col>
                </Row>
            </Container>
        
        
        </div>)

}

export default Info;