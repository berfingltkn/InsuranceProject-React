import React, { createContext, useEffect, useState } from 'react';
import '../styles/Stepper5.css';


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
                </fieldset>
            </div>
        </div>
    );
}
export default Stepper5;
