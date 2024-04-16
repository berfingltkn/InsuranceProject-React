import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import '../styles/AccordionPage.css';
import { IoDocumentTextOutline } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { IoBagRemoveOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";

export function AccordionPage() {
    return (
        <div className='main'>
            <section class="insurance_detail">
                <div class="container">
                    <div class="insurance_detail_in">
                        <div class="sss">
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="custom-header">
                                        <span className='icon'>
                                            <IoDocumentTextOutline />
                                        </span>
                                        Anadolu Sigorta Tamamlayıcı Sağlık Sigortası Detayları
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        şimdilik boş
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                    <span className='icon'>
                                    <CgMenuGridR />
                                        </span>
                                        Neleri Kapsar?
                                        </Accordion.Header>
                                    <Accordion.Body>
                                        şimdilik boş
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                    <span className='icon'>
                                    <IoBagRemoveOutline />
                                        </span>
                                        Size Özel Hizmetler</Accordion.Header>

                                    <Accordion.Body>
                                        şimdilik boş
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                    <span className='icon'>
                                    <FaRegCircleQuestion />
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