import '../styles/Insurance.css';
import HeaderLogo from '../assets/HeaderLogo2.png';
import { HiMenuAlt2 } from "react-icons/hi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { IoIosLogIn } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react';
import { FaChevronLeft } from "react-icons/fa";//closediv open olunca değişecek olan icon
import Stepper from './Stepper';

export function Insurance() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);

    };
    return (
        <div className='main'>
            <div className={`navbar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`} style={{}}>
                <header className='headerH'>
                    <Container style={{
                        width: '1423.81px',
                        height: '57.34px',

                    }}>
                        <Row>
                            <Col className='logoandimg'>
                                <HiMenuAlt2 style={{ width: '26.88px', height: '26.88px', color: '#808080' }} onClick={handleSidebarToggle} />
                                <img src={HeaderLogo} style={{ width: '90.45px', height: '57.34px', marginLeft: '25px' }}></img>
                            </Col>
                            <Col className='col-right'>
                                <a style={{ backgroundColor: 'transparent', fontSize: 'medium', fontWeight: '700', color: '#018fec', }}>
                                    Giriş Yap
                                </a>
                            </Col>
                        </Row>

                    </Container>
                </header>

                <div class="header__sidebar" aria-expanded="true">
                    <div class='header__sidebar__content '>
                        <div class="header__sidebar_row_1">
                            <div className='header__sidebar_logo_container'>
                                <div className='header__sidebar_logo'>
                                    <a >
                                        <img src={HeaderLogo} style={{ width: '158px', height: '100.34px', marginTop: '10px', }}></img>
                                    </a>
                                </div>
                            </div>

                            <a className='header__sidebar_link_1'>
                                <div className='header__sidebar_link_icon'>
                                    <div aria-ecpanded="false"></div>
                                    <IoHomeOutline style={{ width: '17.91px', height: '17.91px', color: '#1a76be' }} />
                                </div>
                                <div className='header__sidebar_link_text'>
                                    Ana Sayfa
                                </div>
                            </a>


                        </div>
                        <div class="header__sidebar_row_2">
                            <a className='header__sidebar_link_1'>
                                <div className='header__sidebar_link_icon'>
                                    <div aria-expanded="false"></div>
                                    <AiOutlineSafetyCertificate style={{ width: '17.91px', height: '17.91px', color: '#1a76be' }} />
                                </div>
                                <div className='header__sidebar_link_text'>
                                    Sigorta Satın Al
                                </div>
                            </a>

                        </div>
                        <div class="header__sidebar_row_3">
                            <a className='header__sidebar_link_1'>
                                <div className='header__sidebar_link_icon'>
                                    <div aria-expanded="false"></div>
                                    <LuMapPin style={{ width: '17.91px', height: '17.91px', color: '#1a76be' }} />
                                </div>
                                <div className='header__sidebar_link_text'>
                                    En Yakın
                                </div>
                            </a>

                        </div>
                        <div class="header__sidebar_row_4">

                            <a className='header__sidebar_link_1'>
                                <div className='header__sidebar_link_iconB'>
                                    <div aria-expanded="false"></div>
                                    <MdOutlinePhoneCallback style={{ width: '17.91px', height: '17.91px', color: '#1a76be' }} />
                                </div>
                                <div className='header__sidebar_link_textB'>Bize Ulaşın</div>
                            </a>

                            <a className='header__sidebar_link_1'>
                                <div className='header__sidebar_link_iconB'>
                                    <div aria-expanded="false"></div>
                                    <GoQuestion style={{ width: '17.91px', height: '17.91px', color: '#1a76be' }} />
                                </div>
                                <div className='header__sidebar_link_textB'>Sıkça Sorulan Sorular</div>
                            </a>

                            <a className='header__sidebar_link_1'>
                                <div className='header__sidebar_link_icon'>
                                    <div aria-expanded="false"></div>
                                    <IoIosLogIn style={{ width: '17.91px', height: '17.91px', color: '#1a76be' }} />
                                </div>
                                <div className='header__sidebar_link_text'>Giriş Yap</div>
                            </a>
                        </div>
                    </div>


                    <div class="header__sidebar_close_container">
                        <div className='divClose' onClick={handleSidebarToggle}>
                            {/* <FaChevronRight style={{color:"#fff",fontSize:'40px !important', transition:'all .3s ease-in-out'}}/> */}
                            {sidebarOpen ? (
                                <FaChevronLeft
                                    className="menu-icon"
                                    style={{ width: '26.88px', height: '26.88px', color: 'white' }}
                                />
                            ) : (
                                <FaChevronRight
                                    className="menu-icon"
                                    style={{ width: '26.88px', height: '26.88px', color: 'white' }}
                                />
                            )}
                        </div>
                    </div>

                </div>
            </div>

            <div className="header__container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '1582px',
                    height: '48.73px',
                }}>
                    <h2 className='textabc'>Tamamlayıcı Sağlık Sigortası</h2>
                </div>
            </div>
<Stepper/>
            
        </div >
    );
}

export default Insurance;
