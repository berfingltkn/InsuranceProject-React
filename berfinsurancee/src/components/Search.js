import React from 'react';
import '../styles/Search.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderLogo from '../assets/headerLogo.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { VolunteerActivism, ExpandMore, FavoriteBorder, CampaignOutlined, HealingOutlined, BuildOutlined, HeadsetOutlined } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FaUserCircle } from "react-icons/fa";

export function Search() {
  return (
    <div className='anaDiv'>
      <div className='filterDiv'>
        <section className='sectionAna'>
          <div className="search_in">
            <div className="left">
              <form id="searchForm" >
                <SearchIcon style={{ fontSize: '32px' }} />
                <label htmlFor="search_input">
                  <input id="search_input" type="text" placeholder="Ara" name="search" spellCheck="false" data-ms-editor="true" />
                </label>
                {/* <button className='search'>Ara</button> */}
              </form>
            </div>
            <div className="right">

              <a href="tel:08507240850" className="tel" style={{ fontSize: '18px', fontWeight: 'bold', fontSize: 'x-large' }}>
                0850 724 0850
              </a>
              <a href="/iletisim" className="contacts" style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '10px', marginRight: '0px', color: '#41576B', backgroundColor: '#f3f3f3', padding: '15px 46px' }}>
                İletişim
              </a>
              <a href="/en" target="_blank" className="language" style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '0', color: '#41576B', backgroundColor: '#ECECEC', padding: '15.5px 40px' }}>
                EN
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="header bgWhite">
        <div className='headerIn'>
          <div className="left">
            <img className="lazy" src={HeaderLogo} alt="Header Logo" />
          </div>

          <div className="right">
            <Container>
              <Row className="justify-content-center">
                <Col>
                  <div className="productsMenu">
                    <a className="productsMegaMenu">
                      <div className='iconlar'>
                        <FavoriteBorder />
                      </div>

                      <div className='textProducts'>Ürünler</div>
                      <ExpandMore />
                    </a>
                  </div>
                </Col>
                <Col>
                  <div className="kampanyalarMenu">
                    <a className="kampanyalarMegaMenu">
                      <div className='iconlar'>
                        <CampaignOutlined />
                      </div>

                      <div className='textkampanyalar'>Kampanyalar</div>
                      <ExpandMore />
                    </a>
                  </div>
                </Col>
                <Col>
                  <div className="saglikMenu">
                    <a className="saglikMegaMenu" style={{width:'144px'}}>
                      <div className='iconlar'>
                        <HealingOutlined />
                      </div>

                      <div className='textsaglik'>Sağlık Merkezi</div>

                    </a>
                  </div>
                </Col>
                <Col>
                  <div className="hasarMenu">
                    <a className="hasarMegaMenu">
                      <div className='iconlar'>
                        <BuildOutlined />
                      </div>

                      <div className='texthasar'>Hasar Merkezi</div>

                    </a>
                  </div>
                </Col>
                <Col>
                  <div className="musteriMenu">
                    <a className="musteriMegaMenu">
                      <div className='iconlar'>
                        <HeadsetOutlined />
                      </div>

                      <div className='textmusteri'>Müşteri Destek</div>

                    </a>
                  </div>
                </Col>

                <Col>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="btn btn-success dropdown-toggle "
                      style={{
                        width:'120px',
                        height:'22px',
                        borderRadius: '35px',
                        background: 'linear-gradient(90deg, #2a5bc6 0, #4f99ed 100%)',
                        color: '#fff',
                        padding: '13px 23px',
                        marginRight: 0,
                        verticalAlign: 'middle',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                      }}
                    >
                      <FaUserCircle style={{
                        width:'22px',
                        height:'22px',
                        marginRight:'10px'
                      }}/>
                      

                      Hesabım




                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      style={{
                        background: 'linear-gradient(90deg, #2a5bc6 0, #4f99ed 100%)',
                        position: 'absolute',
                        width: '100%',
                        padding: '24px 0px 30px',
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '12px'
                      }}
                    >
                      <Dropdown.Item >Bireysel</Dropdown.Item>
                      <Dropdown.Item >Kurumsal</Dropdown.Item>
                      <Dropdown.Item >Sağlık Merkezi</Dropdown.Item>
                      <Dropdown.Item >Hasar Merkezi</Dropdown.Item>
                      <Dropdown.Item >Müşteri Destek</Dropdown.Item>
                      <Dropdown.Item >Acente Bul</Dropdown.Item>
                      <Dropdown.Item >Eksper İşlemleri</Dropdown.Item>
                      <Dropdown.Item >Acentelik Başvurusu</Dropdown.Item>
                      <Dropdown.Item >Araştırma Şirketi Başvurusu</Dropdown.Item>
                      <Dropdown.Item >Anlaşmalı Oto Servis Hizmetleri</Dropdown.Item>


                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;