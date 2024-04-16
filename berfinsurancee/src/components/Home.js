import '../styles/Home.css';
import Search from './Search';

import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TamamlayiciSaglik } from '../assets/TamamlayiciSaglik.jpg';
import { Route, useNavigate } from 'react-router-dom';
import Insurance from './Insurance';
import AccordionPage from './AccordionPage';
import tamamlayiciSaglik from '../assets/TamamlayiciSaglik.jpg';

export function Home() {



    const navigate = useNavigate()
    const goToInsurancePage = () => {
        navigate("/insurance");
    }
    return (
        <div>
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
                                position: 'absolute',
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
                            <p>Tamamlayıcı Sağlık Sigortası ile anlaşmalı sağlık kurumlarında Anadolu Sigortalı olmanın ayrıcalıklarını bütçenize uygun primlerle yaşayın. SGK ile anlaşmalı özel hastanelerde muayene, tetkik ve tedavi giderleriniz için fark ücreti ödemeden güvencemiz altında olabilirsiniz.</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* //sık sorulan sorular componenti */}
            <div className='detailComponent'>
                <AccordionPage />
                {/* <section class="insurance_detail">
                    <div class="container">
                        <div class="insurance_detail_in">
                            <div class="sss">
                                <div class="accordion js-accordion" id="homeAccordion">
                                    <div class="accordion_item js-accordion-item">
                                        <div class="accordion-header js-accordion-header">
                                            <i class="icom-dokuman">
                                                ::before
                                            </i>
                                            " Anadolu Sigorta Tamamlayıcı Sağlık Sigortası Detayları "
                                            ::after
                                        </div>
                                        <div class="accordion-body js-accordion-body" style={{display:' block'}}>
                                            <div class="accordion-body__contents">
                                                <div class="contents_text">
                                                    <div class="contents_text_item">
                                                        <p>
                                                            <strong>Kimler Yararlanabilir?</strong>
                                                        </p>
                                                        <ul>
                                                            <li>65 yaşından küçük ve SGK - Genel Sağlık Sigortası hak sahibi olan tüm sigortalı adaylarımız Anadolu Tamamlayıcı Sağlık Sigortası’nı ilk kez satın alabilirler.
                                                                &nbsp;</li>
                                                            <li>Anadolu Sigorta farkı ile 64 yaşına kadar Tamamlayıcı Sağlık Sigortası Yenileme Garantisi’ne hak kazanmış olan müşterilerimiz 64 yaşından sonra ek prim ödemeden poliçelerini yenileyebilmektedir.
                                                                &nbsp;</li>
                                                            <li>0-17 (17 dahil) yaş aralığındaki çocuklar da ebeveynleri olmadan ek prim uygulanarak tek başlarına sigortalanabilmektelerdir.</li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion_item js-accordion-item">
                                        <div class="accordion-header js-accordion-header">
                                            <i class="icon-neler"></i>
                                            Neleri Kapsar?

                                        </div>
                                        <div class="accordion-body js-accordion-body" style={{display:'none'}}>blabla</div>
                                    </div>
                                    <div class="accordion_item js-accordion-item">
                                        <div class="accordion-header js-accordion-header"></div>
                                        <div class="accordion-body js-accordion-body" style={{display:'none'}}></div>
                                    </div>
                                    <div class="accordion_item js-accordion-item">
                                        <div class="accordion-header js-accordion-header"></div>
                                        <div class="accordion-body js-accordion-body" style={{display:'none'}}></div>
                                    </div>
                                </div>
                            </div>
                            <a class="btn__url_inline mb-40" href="https://saglik.anadolusigorta.com.tr" title="Tamamlayıcı Sağlık Sigortası Anlaşmalı Sağlık Kurumları">
                                Tamamlayıcı Sağlık Sigortası Anlaşmalı Sağlık Kurumları</a>
                        </div>
                    </div>
                </section> */}
            </div>

            {/* //footer */}
            <div className='footerComponent'></div>
        </div>
    );
}

export default Home;