import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';
import './Info.css';





const Info = () => {

    return(
        <div>

            <Container md={12} Style={"background-color:#7252a2; color:white;"}  fluid >
                <Row className='p-2 '>
                    <Col className='text-left'>Technical Help - 9945215941</Col>
                    <Col className='text-right'>
                            Welcome,   <AiOutlineUser /> Admin  
                        <span className='logout'> 
                        <AiOutlineLogout /> Logout 
                        </span>
                        
                    </Col>
                </Row>
            </Container>
        
        
        </div>)

}

export default Info;