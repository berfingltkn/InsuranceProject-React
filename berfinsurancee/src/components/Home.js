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
                
            </div>

            {/* //footer */}
            <div className='footerComponent'></div>
        </div>
    );
}

export default Home;