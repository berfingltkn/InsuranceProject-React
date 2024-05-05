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
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export function Search() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
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

                    <Button
                      style={{
                        width: "152px",
                        color: "#41576b",
                        display: "flex",
                        fontSize: "15px",
                        fontWeight: "700",
                        textTransform: "none",
                      }}
                      id="basic-button"
                      aria-controls={open2 ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open2 ? 'true' : undefined}
                      onClick={handleClick2}
                    ><FaUserCircle style={{ width: "25px", height: "25px", marginRight: "10px" }} />
                      Ürünler
                      <ExpandMore />
                    </Button>
                    <Menu
                    style={{borderRadius:"15px"}}
                      className='urunlerMenuDiv'
                      id="basic-menu"
                      anchorEl={anchorEl2}
                      open={open2}
                      onClose={handleClose2}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <div style={{ display: 'flex',flexDirection:"column" }}>
                        <div className='icerik1' style={{display: 'flex', flex: '50%',marginBottom:"50px" }}>
                        <div style={{ flex: '25%' }}>
                          <MenuItem style={{fontSize:"15px",color:"#41576b",fontWeight: "700"}}>
                            Araç
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Trafik Sigortaları
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Birleşik Kasko Sigortası
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                          Hesaplı Kasko Sigortası
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Elektrikli Araç Sigortası
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Marka Kasko Sigortaları
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Diğer Araç Sigortaları
                          </MenuItem>
                        </div>
                        <div style={{ flex: '25%' }}>
                          <MenuItem style={{fontSize:"15px",color:"#41576b",fontWeight: "700"}}>
                            Konut
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Konut Sigortası
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Zorunlu Deprem Sigortası
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Bireysel Çatı Tipi Güneş Enerji Paneli Sigortası
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Site / Apartman Yönetimi Ortak Alan Paket Sigortası
                          </MenuItem>
                          <MenuItem></MenuItem>
                          <MenuItem></MenuItem>
                        </div>
                        <div style={{ flex: '25%' }}>
                          <MenuItem style={{fontSize:"15px",color:"#41576b",fontWeight: "700"}}>
                            Sağlık
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Anadolu Sigorta Tamamlayıcı Sağlık Sigortası
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Bireysel Sağlık Sigortası
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Riskli Hastalıklar Sigortası
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Diğer Sağlık Sigortaları
                          </MenuItem>
                          <MenuItem></MenuItem>
                          <MenuItem></MenuItem>
                        </div>
                       
                        </div>

                        <div className='icerik2' style={{display: 'flex', flex: '50%' }}>
                        <div style={{ flex: '25%' }}>
                          <MenuItem style={{fontSize:"15px",color:"#41576b",fontWeight: "700"}}>
                            Ferdi Kaza
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                          Ferdi Kaza Sigortası
                          </MenuItem >
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                          Gülümseten Paket Ferdi Kaza Sigortası
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                          Güvenli Gelecek Sigortası
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                           
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}></MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}></MenuItem>
                        </div>
                        <div style={{ flex: '25%' }}>
                          <MenuItem style={{fontSize:"15px",color:"#41576b",fontWeight: "700"}}>
                          Seyahat
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                          Yurt Dışı Seyahat Sigortası
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                          Uçuşum Güvende Sigortası
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Yurt Dışı Eğitim Sigortası
                          </MenuItem>
                          <MenuItem style={{fontSize:"15px",color:"#191d3a",opacity:".7"}}>
                            Türkiye'ye Seyahat Sigortası
                          </MenuItem>
                          <MenuItem></MenuItem>
                          <MenuItem></MenuItem>
                        </div>
                        <div style={{ flex: '25%' }}>
                          <MenuItem></MenuItem>
                          <MenuItem>
                       
                          </MenuItem>
                          <MenuItem>
                     
                          </MenuItem>
                          <MenuItem>
                         
                          </MenuItem>
                          <MenuItem>
                           
                          </MenuItem>
                          <MenuItem></MenuItem>
                          <MenuItem></MenuItem>
                        </div>
                        <div style={{ flex: '25%' }}>
                          <MenuItem>
                          
                          </MenuItem>
                          <MenuItem>
                          
                          </MenuItem>
                          <MenuItem>
                         
                          </MenuItem>
                          <MenuItem>
                            
                          </MenuItem>
                          <MenuItem>
                           
                          </MenuItem>
                          <MenuItem>
                           
                          </MenuItem>
                          <MenuItem>
                           
                          </MenuItem>
                        </div>
                        </div>
                      </div>

                    </Menu>

                  </div>
                </Col>
                <Col>
                  <div className="kampanyalarMenu" >
                  <Button
                      style={{
                        width: "152px",
                        color: "#41576b",
                        display: "flex",
                        fontSize: "15px",
                        fontWeight: "700",
                        textTransform: "none",
                      }}
                      id="basic-button"
                      aria-controls={open3 ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open3 ? 'true' : undefined}
                      onClick={handleClick3}
                    ><CampaignOutlined style={{ width: "25px", height: "25px", marginRight: "10px" }} />
                      Kampanyalar
                      <ExpandMore />
                    </Button>
                    <Menu
                    
                      className='urunlerMenuDiv'
                      id="basic-menu"
                      anchorEl={anchorEl3}
                      open={open3}
                      onClose={handleClose3}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem style={{fontSize:"26px",fontWeight:"600",color:"#191d3a",width:"600px",height:"80px"}}><h3>Öne Çıkan Kampanyalar</h3></MenuItem>
                      <MenuItem style={{color:"#191d3a",width:"600px",height:"50px"}}>Şu an kampanya bulunmamaktadır.</MenuItem>
                    </Menu>
                  </div>
                </Col>
                <Col>
                  <div className="saglikMenu">
                    <a className="saglikMegaMenu" style={{ width: '144px' }}>
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
                {/* hesabım */}
                <Col>
                  <Button className='buttonHesabim'
                    style={{ borderRadius: "35px", color: "white", background: "#1976d2", width: "168px", height: "50px", fontSize: "15px", fontWeight: "600", textTransform: "none" }}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <AccountCircleIcon style={{ marginRight: "8px" }} />
                    Hesabım
                  </Button>
                  <Menu
                    style={{ top: "5px", display: "flex", flexDirection: "column", alignItems: "center", }}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose} style={{ backgroundColor: "#1875f0", color: "white", fontSize: "13px", fontWeight: "700" }}>Bireysel</MenuItem>
                    <MenuItem onClick={handleClose} style={{ backgroundColor: "#1875f0", color: "white", borderTop: "2px solid #418ef3", fontSize: "13px", fontWeight: "700" }}>Ticari / Kurumsal</MenuItem>
                    <MenuItem onClick={handleClose} style={{ backgroundColor: "#1875f0", color: "white", fontSize: "13px", fontWeight: "700" }}>Sağlık Merkezi</MenuItem>
                    <MenuItem onClick={handleClose} style={{ backgroundColor: "#1875f0", color: "white", fontSize: "13px", fontWeight: "700" }}>Hasar Merkezi</MenuItem>
                    <MenuItem onClick={handleClose} style={{ backgroundColor: "#1875f0", color: "white", borderTop: "2px solid #418ef3", fontSize: "13px", fontWeight: "700" }}>Müşteri Destek</MenuItem>
                    <MenuItem onClick={handleClose} style={{ backgroundColor: "#1875f0", color: "white", fontSize: "13px", fontWeight: "700" }}>Acente Bul</MenuItem>
                    <MenuItem onClick={handleClose} style={{ backgroundColor: "#1875f0", color: "white", fontSize: "13px", fontWeight: "700" }}>Eksper İşlemleri</MenuItem>
                    <MenuItem onClick={handleClose} style={{ backgroundColor: "#1875f0", color: "white", fontSize: "13px", fontWeight: "700", }}>Acentelik Başvurusu</MenuItem>
                    <MenuItem onClick={handleClose} style={{ backgroundColor: "#1875f0", color: "white", fontSize: "13px", fontWeight: "700" }}>Araştırma Şirketi Başvurusu</MenuItem>
                    <MenuItem onClick={handleClose} style={{ backgroundColor: "#1875f0", color: "white", fontSize: "13px", fontWeight: "700" }}>Anlaşmalı Oto Servis Hizmetleri</MenuItem>
                  </Menu>
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