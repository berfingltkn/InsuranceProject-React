import React, { createContext, useEffect, useState } from 'react';
import '../styles/Stepper5.css';
import babyIcon from '../assets/babyIcon.png';
import pregnantIcon from '../assets/pregnantIcon.png';
import { useSelector, useDispatch, Provider } from 'react-redux';
import axios from 'axios';
import { setCoverageDogum, setCoverageTupBebek, setTotalAmount } from '../store/slice/policySlice.js'

export function Stepper5() {
    const [dogumAmount, setDogumAmount] = useState('');
    const [tupBebekAmount, setTupBebekAmount] = useState('');
    const [dogumOfferNo, setDogumOfferNo] = useState('');
    const [tupBebekOfferNo, setTupBebekOfferNo] = useState('');



    const dogumText = "DOĞUM";
    const tupBebekText = "TÜP BEBEK"
    const TeklifName = "Tamamlayıcı Sağlık";

    const dispatch = useDispatch();
    const { coverageDogum, coverageTupBebek, totalAmount } = useSelector((state) => {

        return {
            coverageDogum: state.policySlice.coverageDogum,
            coverageTupBebek: state.policySlice.coverageTupBebek,
            totalAmount: state.policySlice.totalAmount,
        };
    });
    const initialTotalAmount = useSelector((state) => state.policySlice.totalAmount);
    const [currentTotalAmount, setCurrentTotalAmount] = useState(initialTotalAmount);

    const handleDogumCheck = (event) => {
        const isChecked = event.target.checked;
        if (isChecked==true) {
            dispatch(setCoverageDogum(isChecked));

            try {
                const response = axios.get(`https://localhost:7021/api/coverages/getamountbycoveragetype?type=${dogumText}`);
                response.then((res) => {
                    setDogumAmount(res.data.data.amount);

                    setDogumOfferNo(res.data.data.offerNo);
                    setTupBebekOfferNo("")
                    console.log("tup bebek amount:", tupBebekAmount);

                    const newTotalAmount = parseInt(currentTotalAmount) + parseInt(res.data.data.amount);
                    setCurrentTotalAmount(newTotalAmount);

                    dispatch(setTotalAmount(newTotalAmount))
                    console.log("store daki total amount", totalAmount);

                }).catch((error) => {
                    console.error('Error fetching data', error);
                });


            } catch (error) {
                console.error('Error fetching data', error);
            }

        }
        else if(isChecked==false){
           
            const pastTotalAmount=parseInt(currentTotalAmount)-parseInt(dogumAmount);
            setCurrentTotalAmount(pastTotalAmount);
            dispatch(setTotalAmount(pastTotalAmount));
            console.log("current2:",currentTotalAmount);
            console.log("store total amount ",totalAmount);
        }


    }
    const handleTupBebekCheck = (event) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            dispatch(setCoverageTupBebek(isChecked));


            try {
                const response = axios.get(`https://localhost:7021/api/coverages/getamountbycoveragetype?type=${tupBebekText}`);
                response.then((res) => {

                    setTupBebekAmount(res.data.data.amount);
                    setDogumOfferNo("");
                    setTupBebekOfferNo(res.data.data.offerNo)
                    console.log("dogumamount:", dogumAmount);
                    console.log(totalAmount);

                    const newTotalAmount = parseInt(currentTotalAmount) + parseInt(res.data.data.amount);
                    setCurrentTotalAmount(newTotalAmount);

                    dispatch(setTotalAmount(newTotalAmount))
                    console.log("store daki total amount", totalAmount);
                }).catch((error) => {
                    console.error('Error fetching data', error);
                });

            } catch (error) {
                console.error('Error fetching data', error);
            }


        }
        else if(isChecked==false){
           
            const pastTotalAmount=parseInt(currentTotalAmount)-parseInt(tupBebekAmount);
            setCurrentTotalAmount(pastTotalAmount);
            dispatch(setTotalAmount(pastTotalAmount));
            console.log("current2:",currentTotalAmount);
            console.log("store total amount ",totalAmount);
        }



    }


    return (
        <div className='babyMainDiv'
            style={{
                width: "1265.59px",
                height: "443.08px",
                background: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "-115px",
            }}>
            <div className='kapsayiciDiv'>
                <div className="totalDiv"
                    style={{
                        width: "1012.58px",
                        height: "58.39px",

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
                            }}> Teklif No: {dogumOfferNo}{tupBebekOfferNo} </div>
                            <div className="teklifName" style={
                                {
                                    color: "",
                                    fontWeight: "600",
                                    fontSize: "18px"
                                }
                            }>{TeklifName}</div>
                        </div>
                        <div className="total">
                            <div style={{
                                paddingRight: "60px",
                                color: "#1a7dbd",
                                fontWeight: "700",

                            }}

                            >Size Özel Tutar : {currentTotalAmount} TL</div>
                        </div>
                    </div>
                </div>


                <fieldset className='checkboxBaby'>
                    <legend className="legendText">Ek teminatlar</legend>
                    <p className="policy_additional_explain">Poliçeniz ekleyeceğiniz ek teminatlarla diğer aksiliklere karşı önlem alabilirsiniz.</p>
                    <div className='ekTeminatlar'>
                        <div className='dogumDiv'>
                            <div class="form-check"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",


                                }}>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleDogumCheck}  ></input>

                            </div>
                            <div>
                                <p className="assurance_header">Doğum Teminatı</p>
                                <p className="assurance_explain">Tamamlayıcı Sağlık Sigortanıza Doğum Teminatı ekleyerek tüm doktor kontrollerinizi ve doğum masraflarınızı sigortanızla karşılayabilirsiniz.</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={pregnantIcon} style={{ width: "15px", height: "40px" }}></img>
                            </div>

                        </div>
                        <div className='tupBebekDiv'>
                            <div class="form-check"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",


                                }}>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleTupBebekCheck}></input>

                            </div>
                            <div>
                                <p className="assurance_header">Tüp Bebek Teminatı</p>
                                <p className="assurance_explain">Tamamlayıcı Sağlık Sigortanıza Tüp Bebek Teminatı ekleyerek tüm doktor kontrollerinizi sigortanızla karşılayabilirsiniz.</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={babyIcon} style={{ width: "27px", height: "27px" }}></img>
                            </div>
                        </div>
                    </div>
                </fieldset>

            </div>
        </div>
    );
}
export default Stepper5;
