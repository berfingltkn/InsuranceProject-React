import '../styles/Home.css';
import Search from './Search';
import Chatbot from './Chatbot.js';
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, useNavigate } from 'react-router-dom';
import Insurance from './Insurance';
import AccordionPage from './AccordionPage';
import ChatbotAl from './ChatbotAI.js';
import tamamlayiciSaglik from '../assets/TamamlayiciSaglik.jpg';
import istiraklogo from '../assets/istirak-logo.png';
import { useState } from 'react';

export function Home() {
  

  const navigate = useNavigate()
  const goToInsurancePage = () => {
    navigate("/insurance");
  }
  return (
    <div >
      <div >
      <Chatbot />
      
      </div>
      <div className="App">
        <Search />
      </div>

      <div className='imageComponent'>
        <div>
          {/* //giriş resmi */}
          <div className='main'>
            <img src={tamamlayiciSaglik}></img>
          </div>
          {/* //giriş text */}
          <div class="sliderContentIn">
            <h1
              style={{
                
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '48px',
                fontWeight: 700,
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: 1.08,
                letterSpacing: '-1px',
                color: '#fff',
                whiteSpace: 'nowrap',
                fontFamily: "'Work Sans', sans-serif",
                marginLeft:"700px",
                marginTop:"-213px"

              }}
            >
              Anadolu Sigorta Tamamlayıcı Sağlık Sigortası
            </h1>
          </div>
        </div>

      </div>

      {/* //forma yönlendiren button */}
      <div className='buttonComponent'>
        <section class="mb-15">
          <div class="container">
            <div class="nxm-row">
              <div class="nxm-col-12">
                <div class="policy-card">
                  <button class="policy-offer-btn" onClick={goToInsurancePage}>
                    Ücretsiz Teklif Al
                  </button>
                  <span class="policy-text">
                    İhtiyacınız Olan Pek Çok Üründe Hemen Ücretsiz Teklif Al
                  </span>

                  <a class="policy-previous-offer" >
                    Önceki Teklifinize Ulaşmak İçin Tıklayınız.
                  </a>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* //buttonun altındaki kısa bilgi kısmı */}
      <div className='informationComponent'>
        <section class='insuranceDescription'>
          <div class="container">
            <div class="insuranceDescription_In">
              <p style={{
                opacity:".8",
                fontSize:"22px",
                fontWeight:"400",
                fontStretch:"normal",
                fontStyle:"normal",
                lineHeight:"1.45",
                letterSpacing:"-.6px",
                textAlign:"center",
                color:"#191d3a"
              }}>Tamamlayıcı Sağlık Sigortası ile anlaşmalı sağlık kurumlarında Anadolu Sigortalı olmanın ayrıcalıklarını bütçenize uygun primlerle yaşayın. SGK ile anlaşmalı özel hastanelerde muayene, tetkik ve tedavi giderleriniz için fark ücreti ödemeden güvencemiz altında olabilirsiniz.</p>
            </div>
          </div>
        </section>
      </div>

      {/* //sık sorulan sorular componenti */}
        <AccordionPage />     


      {/* //footer */}
            
      <footer className='footerDivFixed'>
      <section className="footerBlue">
        <div className="containeerr">
          <div className="footerBlueTop">
            <h3>
              <a style={{ color: 'white' }} href="/yasal-bilgilendirme">Yasal Bilgilendirme</a>
            </h3>
            <ul>
              <li style={{ width: "305px", height: "193px", display: "flex", flexDirection: "column" }}>
                <a href="/yasal-bilgilendirme/kvkk-kapsaminda-bilgilendirme" title="KVKK Kapsamında Bilgilendirme">
                  KVKK Kapsamında Bilgilendirme
                </a>
                <a href="/cerez-politikasi" title="Çerez Politikası">
                  Çerez Politikası
                </a>
                <a href="https://www.tsb.org.tr/content/Legislations/1.5.5684.pdf" title="Sigortacılık Kanunu">
                  Sigortacılık Kanunu
                </a>
                <a href="https://www.tsb.org.tr/tr/sigorta-verileri-ve-mali-tablolar" title="İstatistiki Veriler">
                  İstatistiki Veriler
                </a>
                <a href="/yasal-bilgilendirme/vergi-uygulamalari" title="Vergi Uygulamaları">
                  Vergi Uygulamaları
                </a>
                <a href="/Files/GlobalDocument/bilgilendirme_yonetmeligi.pdf" target="_blank" title="Bilgilendirme Yönetmeliği">
                  Bilgilendirme Yönetmeliği
                </a>
              </li>
              <li style={{ width: "295px", height: "193px", display: "flex", flexDirection: "column" }}>
                <a href="/yasal-bilgilendirme/yanlis-sigorta-uygulamalari-bilgilendirmesi" title="Yanlış Sigorta Uygulamaları Bilgilendirmesi">
                  Yanlış Sigorta Uygulamaları Bilgilendirmesi
                </a>
                <a href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/10133" title="Bilgi Toplum Hizmetleri">
                  Bilgi Toplum Hizmetleri
                </a>
                <a href="/yasal-bilgilendirme/zorunlu-trafik-sigortasi-prim-bilgilendirme" title="Zorunlu Trafik Sigortası Prim Bilgilendirme">
                  Zorunlu Trafik Sigortası Prim Bilgilendirme
                </a>
                <a href="/yasal-bilgilendirme/hak-sahiplerince-aranmayan-paralar" title="Hak Sahiplerince Aranmayan Paralar" style={{ display: 'flex' }}>
                  Hak Sahiplerince Aranmayan Paralar
                </a>
                <a href="https://online.sbm.org.tr/hym-police/cweb/edevlet/login.sbm?referrerUri=%2Fhym-police%2Fpublic%2FvefatEden%2Fsorgu.sbm" title="Meblağ Sigortalarında Hak Sahipliği Sorgulama" target="_blank">Meblağ Sigortalarında Hak Sahipliği Sorgulama</a>
              </li>
              <li style={{ width: "400px", height: "193px", display: "flex", flexDirection: "column" }}>
                <a href="https://online.anadolusigorta.com.tr/bireysel/" title="Zorunlu Trafik Sigortası Teklif Al - Bireysel">
                  Zorunlu Trafik Sigortası Teklif Al - Bireysel
                </a>
                <a href="https://online.anadolusigorta.com.tr/kurumsal-ticari/#/user-login" title="Zorunlu Trafik Sigortası Teklif Al - Ticari/Kurumsal">
                  Zorunlu Trafik Sigortası Teklif Al - Ticari/Kurumsal
                </a>
                <a href="/Files/GlobalDocument/cayma-bildirim-formu.pdf" target="_blank" title="Cayma Bildirim Formu">
                  CaymaBildirim Formu
                </a>
                <a href="/yasal-bilgilendirme/suistimal-ihbari" title="Suistimal İhbarı">
                  Suistimal İhbarı
                </a>
              </li>
            </ul>
            <h3 className="mt-10">
              <a style={{ color: 'white' }} href="/duyurular">Duyurular</a>
            </h3>
            <h3 className="mt-10">
              <a style={{ color: 'white' }} href="/uavt-dask-adres-kodu-sorgulama">Sigorta Rehberi</a>
            </h3>
          </div>
          <div className="footerBlueBottom">
            <div className="footerBlueBottomIn">
              <p>
                © 2024 - Anadolu Anonim Türk Sigorta Şirketi. Tüm hakları saklıdır.
              </p>
              <a href="https://www.isbank.com.tr/" target="_blank">
                <img className="lazy" src={istiraklogo} alt="İş Bankası" style={{ width: "316px", height: "38px" }} />
              </a>
            </div>
          </div>
        </div>
      </section>
      </footer>
    </div>
  );
} 

export default Home;