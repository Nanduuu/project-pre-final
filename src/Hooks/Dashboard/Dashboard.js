import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import {AiFillPlusSquare, AiTwotoneFileText, AiOutlineNodeExpand ,AiTwotoneEdit, AiFillSetting, AiOutlineUser,AiOutlineShoppingCart,AiOutlineDollar} from 'react-icons/ai';
import './Dashboard.css';



const Dashboard = ()=>{
    return(<div>
            <Container className=" mt-3 py-3 bg-dark rounded">
                <Row className="text-center">
                    <Col lg={4} className="m-auto ">
                       <div className='rounded my-bg-box'>
                              <div className='p-5 fs-3'>
                                 <div> <AiFillPlusSquare /> </div> 
                                  Admission 
                               </div>  
                       </div>  
                    </Col>
                    <Col lg={4}  className="m-auto ">
                        <div className='rounded my-bg-box'>
                             <div className='p-5 fs-3'> 
                             <div>
                                <AiOutlineDollar />
                             </div>
                                Fee Payment 
                            </div>
                        </div>
                         
                    </Col>
                    <Col lg={4} className="m-auto ">
                        <div className='rounded my-bg-box'>
                        <div className='p-5 fs-3'>
                            <div>
                                <AiOutlineShoppingCart />
                            </div>
                             Transport
                               </div>
                        </div>
                        
                    </Col>

                    <Col lg={4} className="m-auto ">
                        <div className='rounded my-bg-box'>
                        <div className='p-5 fs-3'> 
                        <div> 
                            <AiTwotoneEdit />
                            </div>
                             Exam 
                         </div>
                        </div>
                        
                    </Col>

                    <Col lg={4} className="m-auto ">
                        <div className='rounded my-bg-box'>
                            <div className='p-5 fs-3'>
                                <div>
                                     <AiOutlineNodeExpand />
                                </div> 
                                Activity  
                            </div>
                        </div>
                        
                    </Col>

                    <Col md={4} className="m-auto ">
                        <div className='rounded my-bg-box'>
                        <div className='rounded my-bg-box'>
                        <div className='p-5 fs-2'>
                            <div>  <AiOutlineUser /> </div> 
                                Admin 
                         </div>
                        </div>
                        </div>
                        
                        
                    </Col>

                    <Col md={4} className="m-auto ">
                        <div className='rounded my-bg-box'>
                            <div className='p-5 fs-3'>
                                <div>
                                <AiTwotoneFileText />
                                    </div> Account  </div>
                        </div>
                        
                    </Col>

                    <Col md={4} className="m-auto ">
                        <div className='rounded my-bg-box'>
                        <div className='p-5 fs-3'> 
                            <div>
                                <AiFillSetting />
                                </div> Settings  </div>
                        </div>
                        
                    </Col>
                    
                   
                </Row>
            </Container>

        </div>)
}

export default Dashboard;

