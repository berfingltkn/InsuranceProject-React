import '../styles/Stepper4.css';
import React, { useState } from 'react';
import { BsCheckLg } from "react-icons/bs";

import { useSelector, useDispatch, Provider } from 'react-redux';
import axios from 'axios';
import { setCoverageYatisli, setCoverageYatissiz, setTotalAmount } from '../store/slice/policySlice.js'

export function Stepper4() {
    const TeklifNo = "123123";
    const TeklifName = "Tamamlayıcı Sağlık";
    const teklifAmount = "3000";
    const typeYatisli = "YATIŞLI";
    const typeYatissiz = "YATIŞLI YATIŞSIZ";
    const [isYatisliActive, setIsYatisliActive] = useState(true);
    const [isYatissizActive, setIsYatissizActive] = useState(false);
    const [isYatissizHeaderActive, setIsYatissizHeaderActive] = useState(false);
    const [isYatisliHeaderActive, setIsYatisliHeaderActive] = useState(true);
    const [isYatisliTutarActive, setIsYatisliTutarActive] = useState(true);
    const [isYatissizTutarActive, setIsYatissizTutarActive] = useState(false);

    const [yatisliAmount, setYatisliAmount] = useState(3146);
    const [yatisliType, setYatisliType] = useState('YATIŞLI');
    const [yatissizType, setYatissizType] = useState('');
    const [yatissizAmount, setYatissizAmount] = useState('');
    const [yatisliOfferNo, setYatisliOfferNo] = useState('');
    const [yatissizOfferNo, setYatissizOfferNo] = useState('');

    const handleYatisliClick = () => {
        setIsYatisliActive(true);
        setIsYatisliHeaderActive(true);
        setIsYatisliTutarActive(true);
        setIsYatissizActive(false);
        setIsYatissizHeaderActive(false);
        setIsYatissizTutarActive(false);

        dispatch(setCoverageYatisli(true));
        dispatch(setCoverageYatissiz(false));


        try {
            const response = axios.get(`https://localhost:7021/api/coverages/getamountbycoveragetype?type=${typeYatisli}`);
            response.then((res) => {
                setYatisliAmount(res.data.data.amount);
                setYatisliOfferNo(res.data.data.offerNo);
                setYatisliType(res.data.data.coverageType);
                setYatissizAmount("");
                setYatissizOfferNo("");
                setYatissizType("");
            }).catch((error) => {
                console.error('Error fetching data', error);
            });
            dispatch(setTotalAmount(yatisliAmount+yatissizAmount));
            
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    const handleYatissizClick = () => {
        setIsYatissizHeaderActive(true);
        setIsYatissizTutarActive(true);
        setIsYatissizActive(true);
        setIsYatisliTutarActive(false);
        setIsYatisliHeaderActive(false);
        setIsYatisliActive(false);

        dispatch(setCoverageYatissiz(true));
        dispatch(setCoverageYatisli(false));
        console.log("yatissiz:", coverageYatissiz);
        console.log("yatisli:", coverageYatisli);

        try {
            const response = axios.get(`https://localhost:7021/api/coverages/getamountbycoveragetype?type=${typeYatissiz}`);
            response.then((res) => {
                setYatisliAmount("");
                setYatisliOfferNo("");
                setYatisliType("");
                
                setYatissizAmount(res.data.data.amount);
                setYatissizOfferNo(res.data.data.offerNo);
                setYatissizType(res.data.data.coverageType);
            }).catch((error) => {
                console.error('Error fetching data', error);
            });

            dispatch(setTotalAmount(yatisliAmount+yatissizAmount));
           
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };
    const dispatch = useDispatch();

    const { coverageYatisli, coverageYatissiz, totalAmount } = useSelector((state) => {

        return {
            coverageYatisli: state.policySlice.coverageYatisli,
            coverageYatissiz: state.policySlice.coverageYatissiz,
            totalAmount: state.policySlice.totalAmount
        };
    });
    const fetchYatisliData = async (value) => {


    };
    return (
        <div className="mainDiv"
            style={{
                width: "1265.59px",
                height: "433.08px",
                background: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "-115px",
            }}
        >
            <div className="totalDiv"
                style={{
                    width: "1265.58px",
                    height: "55.39px",

                    marginInline: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                }}
            >
                <div className="totalteklifno"
                    style={{
                        width: "1012px",
                        height: "55.39px",

                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        margin: "1em auto",
                        background: "rgba(230,240,255,.127)",
                        border: "2px solid #e2edfd",
                        borderRadius: "14px",



                    }}>
                    <div className="teklif-name" style={{ display: "flex" }}>
                        <div className="teklifNo" style={{
                            color: "#1a7dbd",
                            paddingLeft: "60px",
                            fontWeight: "700",
                            
                            marginBottom: "0",
                            marginTop: "0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}> Teklif No: {yatisliOfferNo}{yatissizOfferNo} </div>
                        <div className="teklifName" style={
                            {
                                color: "",
                                fontWeight: "600",
                                
                            }
                        }>{TeklifName} ({yatisliType}{yatissizType})</div>
                    </div>
                    <div className="total">
                        <div style={{
                            paddingRight: "60px",
                            color: "#1a7dbd",
                            fontWeight: "700",
                            fontSize: "18px",
                        }}

                        >Size Özel Tutar : {yatisliAmount}{yatissizAmount} TL</div>
                    </div>
                </div>
            </div>


            <div className="coverageDiv">

                <div className='tableHeader'>
                    <div className='emptyDiv'></div>
                    <div className={`yatisli ${isYatisliHeaderActive ? 'active' : ''}`} onClick={handleYatisliClick}>YATIŞLI</div>
                    <div className={`yatisliyatissiz ${isYatissizHeaderActive ? 'active' : ''}`} onClick={handleYatissizClick}>YATIŞLI + YATIŞSIZ</div>
                </div>
                <div className='tableBody'>
                    <div className='body__header'>
                        <div className='headerText'><p>Ameliyat</p></div>
                        <div className='headerText'><p>Oda-Yemek-Refakatçi Masrafları</p></div>
                        <div className='headerText'><p>Yoğun Bakım</p></div>
                        <div className='headerText'><p>Küçük Müdahale</p></div>
                        <div className='headerText'><p>Kemoterapi</p></div>
                        <div className='headerText'><p>Radyo Terapi</p></div>
                        <div className='headerText'><p>Diyaliz</p></div>
                        <div className='headerText'><p>Doktor Muayene</p></div>
                        <div className='headerText'><p>Tanı</p></div>
                        <div className='headerText'><p>Fizik Tedavi</p></div>
                        <div className='headerText'><p>Deprem</p></div>
                        <div className='headerText'><p>Ferdi Kaza - Sürekli Sakatlık</p></div>
                        <div className='headerText'><p>Ferdi Kaza - Ölüm</p></div>
                        <div className='headerText'><p>7/24 Canlı ve Görüntülü Sağlık Danışmanlığı</p></div>
                        <div className='headerText'><p>Check-Up</p></div>
                        <div className='headerText'><p>Acil Ambulans ve Tıbbi Danışmanlık</p></div>
                        <div className='headerText'><p>Evde Bakım</p></div>
                        <div className='headerText'><p>Suni Uzuv</p></div>
                        <div className='headerText'><p>Yardımcı Tıbbi Malzeme</p></div>
                        <div className='headerText'><p>Diş Hizmet Paketi</p></div>
                    </div>
                    <div className={`body__yatisli ${isYatisliActive ? 'active' : ''}`} id='yatisli' onClick={handleYatisliClick}>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p>-</p></div>
                        <div className='headerText2'><p>-</p></div>
                        <div className='headerText2'><p>-</p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p>5000 ₺</p></div>
                        <div className='headerText2'><p>5000 ₺</p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p>30000 ₺</p></div>
                        <div className='headerText2'><p>30000 ₺</p></div>
                        <div className='headerText2'><p>1500 ₺</p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                    </div>
                    <div className={`body__yatissiz ${isYatissizActive ? 'active' : ''}`}
                        id='yatissiz'
                        onClick={handleYatissizClick}>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p>5000 ₺</p></div>
                        <div className='headerText2'><p>5000 ₺</p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div>
                        <div className='headerText2'><p>30000 ₺</p></div>
                        <div className='headerText2'><p>30000 ₺</p></div>
                        <div className='headerText2'><p>1500 ₺</p></div>
                        <div className='headerText2'><p><BsCheckLg style={{ color: "#1a7dbd", width: "18px", height: "18px" }} /></p></div> </div>
                </div>


                <div className='tableAmount'>

                    <div className='tutarDiv'>Peşin Tutar </div>
                    <div className={`yatisliTutar ${isYatisliTutarActive ? 'active' : ''}`}>{yatisliAmount} TL</div>
                    <div className={`yatissizTutar ${isYatissizTutarActive ? 'active' : ''}`}>{yatissizAmount} TL</div>

                </div>
            </div>
        </div>
    );
}

export default Stepper4;