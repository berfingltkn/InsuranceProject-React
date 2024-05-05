import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import '../styles/AccordionPage.css';
import { IoDocumentTextOutline } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { IoBagRemoveOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { useState } from 'react';

export function AccordionPage() {
    const [isAccordionOpen1, setIsAccordionOpen1] = useState(false);
    const [isAccordionOpen2, setIsAccordionOpen2] = useState(false);
    const [isAccordionOpen3, setIsAccordionOpen3] = useState(false);
    const [isAccordionOpen4, setIsAccordionOpen4] = useState(false);
    const handleAccordionToggle1 = () => {
        setIsAccordionOpen1(!isAccordionOpen1);
    };
    const handleAccordionToggle2 = () => {
        setIsAccordionOpen2(!isAccordionOpen2);
    };
    const handleAccordionToggle3 = () => {
        setIsAccordionOpen3(!isAccordionOpen3);
    };
    const handleAccordionToggle4 = () => {
        setIsAccordionOpen4(!isAccordionOpen4);
    };
    return (
        <div className='main'>
            <section class="insurance_detail">
                <div class="container">
                    <div class="insurance_detail_in">
                        <div class="sss">
                            <Accordion  >
                                <Accordion.Item eventKey="0" onClick={handleAccordionToggle1}>
                                    <Accordion.Header className="custom-header">
                                        <span className='icon' >
                                            <IoDocumentTextOutline style={{ color: isAccordionOpen1 ? '#ffffff'  : '#42cfde' }} />
                                        </span>
                                        Anadolu Sigorta Tamamlayıcı Sağlık Sigortası Detayları
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" onClick={handleAccordionToggle2}>
                                    <Accordion.Header>
                                        <span className='icon' >
                                            <CgMenuGridR style={{ color: isAccordionOpen2 ? '#ffffff' : '#42cfde' }}  />
                                        </span>
                                        Neleri Kapsar?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        şimdilik boş
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" onClick={handleAccordionToggle3}>
                                    <Accordion.Header>
                                        <span className='icon' >
                                            <IoBagRemoveOutline style={{ color: isAccordionOpen3 ? '#ffffff' : '#42cfde' }}     />
                                        </span>
                                        Size Özel Hizmetler</Accordion.Header>

                                    <Accordion.Body>
                                        şimdilik boş
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" onClick={handleAccordionToggle4}>
                                    <Accordion.Header>
                                        <span className='icon' >
                                            <FaRegCircleQuestion style={{ color: isAccordionOpen4 ? '#ffffff' : '#42cfde' }}   />
                                        </span>
                                        Sıkça Sorulan Sorular</Accordion.Header>

                                    <Accordion.Body>
                                        şimdilik boş
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <Button className='btn' variant="primary">Tamamlayıcı Sağlık Sigortası Anlaşmalı Sağlık Kurumları</Button>{' '}

                    </div>
                </div>
            </section>
        </div>
    );

}
export default AccordionPage;