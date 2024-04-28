import React, { createContext, useEffect, useState } from 'react';
import '../styles/Stepper5.css';
import  babyIcon from '../assets/babyIcon.png';
import  pregnantIcon  from '../assets/pregnantIcon.png';

export function Stepper5() {
    const TeklifNo = "123123";
    const TeklifName = "Tamamlayıcı Sağlık";
    const teklifAmount = "3000";
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
                                color: "#17a4ff",
                                paddingLeft: "60px",
                                fontWeight: "700",
                                fontSize: "18px",
                                marginBottom: "0",
                                marginTop: "0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}> Teklif No: {TeklifNo} </div>
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
                                color: "#17a4ff",
                                fontWeight: "700",
                                fontSize: "18px",
                            }}

                            >Size Özel Tutar : {teklifAmount} TL</div>
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
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ty></input>

                            </div>
                            <div>
                                <p className="assurance_header">Doğum Teminatı</p>
                                <p className="assurance_explain">Tamamlayıcı Sağlık Sigortanıza Doğum Teminatı ekleyerek tüm doktor kontrollerinizi ve doğum masraflarınızı sigortanızla karşılayabilirsiniz.</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <img src={pregnantIcon} style={{width:"15px",height:"40px"}}></img>
                            </div>

                        </div>
                        <div className='tupBebekDiv'>
                            <div class="form-check"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",


                                }}>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ty></input>

                            </div>
                            <div>
                                <p className="assurance_header">Tüp Bebek Teminatı</p>
                                <p className="assurance_explain">Tamamlayıcı Sağlık Sigortanıza Tüp Bebek Teminatı ekleyerek tüm doktor kontrollerinizi sigortanızla karşılayabilirsiniz.</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <img src={babyIcon} style={{width:"27px",height:"27px"}}></img>
                            </div>
                        </div>
                    </div>
                </fieldset>

            </div>
        </div>
    );
}
export default Stepper5;
