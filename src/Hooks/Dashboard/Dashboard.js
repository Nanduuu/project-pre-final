import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import './Dashboard.css';



const Dashboard = ()=>{
    return(<div>
            <Container className=" mt-3 py-3 bg-dark rounded">
                <Row className="text-center">
                    <div className="m-auto rounded my-bg-box">
                        <div className='p-5'> Admission  </div>  
                    </div>
                    <div className="m-auto rounded my-bg-box">
                         <div className='p-5'> Fee Payment  </div>
                    </div>
                    <div className="m-auto rounded my-bg-box">
                        <div className='p-5'> Transport  </div>
                    </div>

                    <div className="m-auto rounded my-bg-box">
                        <div className='p-5'> Exam  </div>
                    </div>
                    <div className="m-auto rounded my-bg-box">
                        <div className='p-5'> Activity  </div>
                    </div>

                    <div className="m-auto rounded my-bg-box">
                        <div className='p-5'> Admin  </div>
                    </div>

                    <div className="m-auto rounded my-bg-box">
                        <div className='p-5'> Account  </div>
                    </div>

                    <div className="m-auto rounded my-bg-box">
                        <div className='p-5'> Settings  </div>
                    </div>
                    
                   
                </Row>
            </Container>

        </div>)
}

export default Dashboard;

