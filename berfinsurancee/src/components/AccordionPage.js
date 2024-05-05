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
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

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
       
            <section class="insurance_detail">
                <div class="container">
                    <div class="insurance_detail_in">
                        <div class="sss">
                            <Accordion  >
                                <Accordion.Item eventKey="0" onClick={handleAccordionToggle1}>
                                    <Accordion.Header className="custom-header" >
                                        <span className='icon' >
                                            <IoDocumentTextOutline style={{ color: isAccordionOpen1 ? '#ffffff' : '#42cfde' }} />
                                        </span>
                                        Anadolu Sigorta Tamamlayıcı Sağlık Sigortası Detayları
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <div className="contents_text_item">
                                                <p><strong>Kimler Yararlanabilir?</strong></p>

                                                <ul>
                                                    <li>65 yaşından küçük ve SGK - Genel Sağlık Sigortası hak sahibi olan tüm sigortalı adaylarımız Anadolu Tamamlayıcı Sağlık Sigortası’nı ilk kez satın alabilirler.<br />
                                                        &nbsp;</li>
                                                    <li>Anadolu Sigorta farkı ile 64 yaşına kadar Tamamlayıcı Sağlık Sigortası Yenileme Garantisi’ne hak kazanmış olan müşterilerimiz 64 yaşından sonra ek prim ödemeden poliçelerini yenileyebilmektedir.<br />
                                                        &nbsp;</li>
                                                    <li>0-17 (17 dahil) yaş aralığındaki çocuklar da ebeveynleri olmadan ek prim uygulanarak tek başlarına sigortalanabilmektelerdir.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" onClick={handleAccordionToggle2}>
                                    <Accordion.Header>
                                        <span className='icon' >
                                            <CgMenuGridR style={{ color: isAccordionOpen2 ? '#ffffff' : '#42cfde' }} />
                                        </span>
                                        Neleri Kapsar?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <div class="contents_text_item" style={{ maxWidth: "920px", margin: "0 auto 60px", }}>
                                                <p>&nbsp;</p>

                                                <div class="tableArea table__responsive tableArea-layout-2">
                                                    <table style={{ background: "white" }}>
                                                        <tbody style={{ border: "1px solid lightgray" }}>
                                                            <tr class="md-hide" style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td style={{ paddingLeft: "15px" }}>
                                                                    <p><strong>Teminat Türleri</strong></p>
                                                                </td>
                                                                <td>&nbsp;</td>
                                                                <td>
                                                                    <p><strong>Ödeme Oranı %</strong></p>
                                                                </td>
                                                                <td>
                                                                    <p><strong>Teminat Limitleri (TL)</strong></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="remove-border-bottom" style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td class="text-md-center" rowspan="7">&nbsp; <i class="icon-places-hotel"><AirlineSeatFlatIcon style={{ width: "54px", height: "54px", color: "#42cfde" }} /></i>
                                                                    <p>Yatışlı Tedavi Teminatları</p>
                                                                </td>
                                                                <td data-label="Teminat Adı">
                                                                    <p>Ameliyat</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>Limitsiz</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="remove-border-bottom" style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td data-label="Teminat Adı">
                                                                    <p>Oda-Yemek-Refakatçi</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>Limitsiz</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="remove-border-bottom" style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td data-label="Teminat Adı">
                                                                    <p>Yoğun Bakım</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>Limitsiz</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="remove-border-bottom" style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td data-label="Teminat Adı">
                                                                    <p>Küçük Müdahale</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>Limitsiz</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="remove-border-bottom" style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td data-label="Teminat Adı">
                                                                    <p>Kemoterapi</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>Limitsiz</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="remove-border-bottom" style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td data-label="Teminat Adı">
                                                                    <p>Radyoterapi</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>Limitsiz</p>
                                                                </td>
                                                            </tr>
                                                            <tr style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td class="remove-radius-bottom" data-label="Teminat Adı">
                                                                    <p>Diyaliz</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>Limitsiz</p>
                                                                </td>
                                                            </tr>
                                                            <tr style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td class="text-md-center" rowspan="4">&nbsp; <i class="icon-activity"><EmojiPeopleIcon style={{ width: "54px", height: "54px", color: "#42cfde" }} /></i>
                                                                    <p>Yatışsız Tedavi Teminatları</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="remove-border-bottom" style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td data-label="Teminat Adı">
                                                                    <p>Doktor Muayene</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)" rowspan="2">
                                                                    <p>Yıllık 10 Adet</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="remove-border-bottom" style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td data-label="Teminat Adı">
                                                                    <p>Tanı Giderleri</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>100</p>
                                                                </td>
                                                            </tr>
                                                            <tr style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td class="remove-radius-bottom" data-label="Teminat Adı">
                                                                    <p>Fizik Tedavi</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>Yıllık 30 Seans</p>
                                                                </td>
                                                            </tr>
                                                            <tr style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td class="text-md-center" rowspan="4">&nbsp; <i class="icon-prim"><ControlPointIcon style={{ width: "54px", height: "54px", color: "#42cfde" }} /></i>
                                                                    <p>Diğer Teminatlar</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="remove-border-bottom" style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td data-label="Teminat Adı">
                                                                    <p>Evde Bakım&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>30.000 (Yıllık Limit)</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="remove-border-bottom" style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td data-label="Teminat Adı">
                                                                    <p>Suni Uzuv&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>30.000 (Vaka Başı)</p>
                                                                </td>
                                                            </tr>
                                                            <tr style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td class="remove-radius-bottom" data-label="Teminat Adı">
                                                                    <p>Yardımcı Tıbbi Malzemeler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>1.500 (Yıllık Limit)</p>
                                                                </td>
                                                            </tr>
                                                            <tr style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td class="text-md-center" rowspan="4">&nbsp; <i class="icon-prim"><ControlPointIcon style={{ width: "54px", height: "54px", color: "#42cfde" }} /></i>
                                                                    <p>Ek Primle Alınabilecek Teminatlar</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="remove-border-bottom" style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td data-label="Teminat Adı">
                                                                    <p>Doğum Teminatı</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>Yılda 1 kez ödenir.</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="remove-border-bottom" style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td data-label="Teminat Adı">
                                                                    <p>Yardımcı Üreme Yöntemi Tedavileri (Tüp Bebek) Teminatı</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>Yılda 1 kez ödenir.</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="remove-border-bottom" style={{ borderBottom: "1px solid lightgray" }}>
                                                                <td data-label="Teminat Adı">
                                                                    <p>Deprem</p>
                                                                </td>
                                                                <td data-label="Ödeme Oranı%">
                                                                    <p>100</p>
                                                                </td>
                                                                <td data-label="Teminat Limitleri(TL)">
                                                                    <p>Limitsiz</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" onClick={handleAccordionToggle3}>
                                    <Accordion.Header>
                                        <span className='icon' >
                                            <IoBagRemoveOutline style={{ color: isAccordionOpen3 ? '#ffffff' : '#42cfde' }} />
                                        </span>
                                        Size Özel Hizmetler</Accordion.Header>

                                    <Accordion.Body>
                                        <div class="contents_text">
                                            <div class="contents_text_item">
                                                <h3 style={{fontSize:"21px",paddingTop:"20px",paddingBottom:"20px"}}><strong>Tamamlayıcı Sağlık Sigortası’nda Bir İlk: Tüp Bebek Teminatı</strong></h3>

                                                <p>Tamamlayıcı Sağlık Sigortası kapsamında, tüp bebek ile ilgili giderlerinizi ek prim karşılığında poliçe teminatlarınıza dahil edebilirsiniz.</p>

                                                <p>Bu teminat, SGK’nın tüp bebek tedavisi ödeme şartları doğrultusunda, 1 yıllık poliçe süresi boyunca geçerlidir.</p>

                                                <h3 style={{fontSize:"21px",paddingTop:"20px",paddingBottom:"20px"}}><strong>Check-up Hizmeti</strong></h3>

                                                <p>Yılda bir kez 14 Yaş ve üzeri sigortalılarımız için Doktor Değerlendirmesi, Akciğer Grafisi, EKG Kalp Elektrosu, Tam Kan Sayımı, Tam İdrar Tahlili, Sedimantasyon, Açlık Kan Şekeri, Total Kolesterol’den oluşan check-up panelimizi hediye ediyoruz.</p>

                                                <p>Check-up Hizmeti, 0 850 724 0 850 numaralı Müşteri İletişim Merkezimiz aranarak talep edilmesi halinde operatörlerimizce organize edilerek sizlere sunulacaktır. Hizmet kapsamına giren harcamaların operatörlerimize başvurulmaksızın karşılanması halinde ilgili tutarların hasar olarak tarafınıza geri ödenmesi imkanı bulunmamaktadır.</p>

                                                <h3 style={{fontSize:"21px",paddingTop:"20px",paddingBottom:"20px"}}><strong>Diş Hizmeti Paketi</strong></h3>

                                                <p>Muayene, panoramik röntgen, dolgu, diş çekimi gibi pek çok hizmetten, yılda 1 kez ücretsiz olarak yararlanabileceğiniz Diş Hizmeti Paketi, Anadolu Sigorta Tamamlayıcı Sağlık Sigorta’sında.</p>

                                                <p>Detaylı bilgi ve randevu almak için 0850 724 0850 numaralı Anadolu Sigorta Müşteri İletişim Merkezimizi arayabilirsiniz.</p>

                                                <h3 style={{fontSize:"21px",paddingTop:"20px",paddingBottom:"20px"}}><strong>Ferdi&nbsp;Kaza Teminatı</strong></h3>

                                                <p>Anadolu Tamamlayıcı Sağlık Sigortası poliçenize ek prim karşılığında Ferdi Kaza teminatı ekleyerek ani ve beklenmedik kazalara karşı kendinizi ve ailenizi güvence altına alabilirsiniz.</p>

                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" onClick={handleAccordionToggle4}>
                                    <Accordion.Header>
                                        <span className='icon' >
                                            <FaRegCircleQuestion style={{ color: isAccordionOpen4 ? '#ffffff' : '#42cfde' }} />
                                        </span>
                                        Sıkça Sorulan Sorular</Accordion.Header>

                                    <Accordion.Body>
                                       <div className='textDivAccordion'>Aklınıza takılan soruları ChatBot a sorabilirsiniz</div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <Button className='btn' variant="primary">Tamamlayıcı Sağlık Sigortası Anlaşmalı Sağlık Kurumları</Button>{' '}

                    </div>
                </div>
            </section>
       
    );

}
export default AccordionPage;