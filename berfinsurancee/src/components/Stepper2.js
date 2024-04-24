import React, { createContext, useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';


export function Stepper2() {
    const [cities,setCities]=useState([]);
    
    const fetchCity = async () => {
        try {
            const response = await axios.get('https://localhost:7224/api/cities/getall');
            setCities(response.data.data);
            console.log(response.data.data)


        }
        catch (error) {
            console.error('Error fetching cities', error);
        }
    }
    useEffect(()=>{
        fetchCity();
    })

    return (
        <div classname="steppertwo"
            style={{
                width: "1265.59px",
                height: "438.95px",
                transform: "translateX(-130px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <div classname="container" style={{ width: "1012.47px", height: "438.95px", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <div className="toggle" style={{
                    width: "319.84px", height: "52px", display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                }}>
                    <button style={{
                        fontFamily: "NunitoSan",
                        border: "none", borderRadius: "22px", fontSize: "16px", fontWeight: "800", lineHeight: "22px", width: "141.89px", height: "52px", display: "flex", justifyContent: "center", alignItems: "center", color: "white", background: "#2A9AFF"
                    }}>
                        TAMAMLAYICI
                    </button>
                </div>

                <p style={{
                    width: "374.39px", height: "21px",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: "translateX(10px)",
                    fontSize: "15px"
                }}>
                    Tamamlayıcı kapsamındaki hastaneleri inceleyebilirsiniz.
                </p>

                <div className="filters" style={{ width: "809.97px", height: "41.59px", display: "grid", gap: "1em", gridTemplateColumns: "1fr 1fr" }}>
                    {/* continer grid yapısı kullanılsın */}
                    <div className="dropdownsInput" style={{ columnGap: "1em", display: "grid", gridTemplateColumns: "1fr 1fr", width: "397.81px", height: "41.59px" }}>
                        <div className="form-group" style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px", boxShadow: "0 0 5px 4px rgba(190, 194, 219, .18)", }}>
                            <label for="selectItems1" className="labelCity"
                                style={{
                                    lineHeight: "1.4375em",
                                    letterSpacing: "0.00938em",
                                    padding: "0px 0.6rem 0px 0px",
                                    display: "block",
                                    transformOrigin: "left top",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    maxWidth: "calc(133% - 24px)",
                                    position: "absolute",
                                    left: "220px",
                                    top: "105px",
                                    transform: "translate(14px, -9px) scale(0.75)",
                                    transition: "color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, maxWidth 200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
                                    zIndex: "1",
                                    pointerEvents: "auto",
                                    userSelect: "none",
                                    color: "#1a7dbd",
                                    fontFamily: "NunitoSans",
                                    fontWeight: "bolder",
                                    // fontSize: "1.8rem",
                                    background: "white",
                                    width: "18px",
                                    height: "17px"

                                }}
                            >İL</label>
                            <select classname="form-control" id="selectItems1" style={{ color: "rgb(0 0 0 / 73%)", fontFamily: "NunitoSans", fontSize: "16px", width: "177px", height: "41.70px", border: "none", outline: "none" }} >
                                {cities.map(city=>(
                                    <option key={city.cityId} >{city.cityName}</option>
                                ))}
                            </select>

                        </div>
                        <div className="dropdownDistrict" style={{ columnGap: "1em", display: "grid", gridTemplateColumns: "1fr 1fr", width: "397.81px", height: "41.59px" }}>
                            <div className="form-group" style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px", boxShadow: "0 0 5px 4px rgba(190, 194, 219, .18)", }}>
                                <label for="selectItems1" classname="labelDistrict"
                                    style={{
                                        lineHeight: "1.4375em",
                                        letterSpacing: "0.00938em",
                                        padding: "0px 0.6rem 0px 0px",
                                        display: "block",
                                        transformOrigin: "left top",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        maxWidth: "calc(133% - 24px)",
                                        position: "absolute",
                                        left: "415px",
                                        top: "105px",
                                        transform: "translate(14px, -9px) scale(0.75)",
                                        transition: "color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, maxWidth 200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
                                        zIndex: "1",
                                        pointerEvents: "auto",
                                        userSelect: "none",
                                        color: "#1a7dbd",
                                        fontFamily: "NunitoSans",
                                        fontWeight: "bolder",
                                        // fontSize: "1.8rem",
                                        background: "white",
                                        width: "40px",
                                        height: "17px"

                                    }}
                                >İLÇE</label>
                                <select classname="form-control" id="selectItems1" style={{ color: "rgb(0 0 0 / 73%)", fontFamily: "NunitoSans", fontSize: "16px", width: "177px", height: "41.70px", border: "none", outline: "none" }} >
                                    <option>1</option>
                                    <option>2</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <div className="filterInput" style={{ width: "397.83px", height: "41.59px", display: "flex", border: "1.9px solid rgb(204 204 204 / 71%", borderRadius: "30px" }}

                    >
                        <div className="leftDiv" style={{ width: "%80", height: "41px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <input type="text" aria-autocomplete="list" placeholder="Hastane ara"
                                style={{
                                    marginLeft: "1em",
                                    width: "300px",
                                    height: "32.59px",
                                    outline: "none",
                                    border: "none",
                                }}
                            ></input>
                        </div>
                        <div className="rightDiv" style={{ width: "%20", height: "41px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <IoMdSearch style={{
                                color: "rgb(0 0 0 / 54%)",
                                fontSize: "1.3rem",

                            }} />
                        </div>
                    </div>
                </div>

                <div className="filterList"
                    style={{
                        width: "809.97px",
                        height: "204px",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        marginTop: "1em",
                        padding: ".2em",
                        width: "80%"


                    }}>
                    {/* hastaneler listelensin */}
                    <div classname="hospitalCart"
                        style={{
                            alignItems: "center",
                            borderBottom: "8px solid #79cc81",
                            borderRadius: "14px",
                            boxShadow: "0 0 5px 4px rgba(190,194,219,.16)",
                            color: "#001248",
                            display: "flex",
                            fontSize: "18px",
                            fontWeight: "400",
                            height: "129px",
                            width: "185.81px",
                            justifyContent: "center",
                            lineHeight: "27px",
                            textAlign: "center",


                        }}
                    >
                        <p style={{
                            color: "#001248",
                            boxSizing: "inherit",
                            fontSize: "18px",
                            fontWeight: "400",
                            textAlign: "center",
                            lineHeight: "27px",

                        }}>
                            deneme deneme deneme
                        </p>
                    </div>
                    <div classname="hospitalCart"
                        style={{
                            alignItems: "center",
                            borderBottom: "8px solid #79cc81",
                            borderRadius: "14px",
                            boxShadow: "0 0 5px 4px rgba(190,194,219,.16)",
                            color: "#001248",
                            display: "flex",
                            fontSize: "18px",
                            fontWeight: "400",
                            height: "129px",
                            width: "185.81px",
                            justifyContent: "center",
                            lineHeight: "27px",
                            textAlign: "center",


                        }}
                    >
                        <p style={{
                            color: "#001248",
                            boxSizing: "inherit",
                            fontSize: "18px",
                            fontWeight: "400",
                            textAlign: "center",
                            lineHeight: "27px",

                        }}>
                            deneme deneme deneme
                        </p>
                    </div>
                    <div classname="hospitalCart"
                        style={{
                            alignItems: "center",
                            borderBottom: "8px solid #79cc81",
                            borderRadius: "14px",
                            boxShadow: "0 0 5px 4px rgba(190,194,219,.16)",
                            color: "#001248",
                            display: "flex",
                            fontSize: "18px",
                            fontWeight: "400",
                            height: "129px",
                            width: "185.81px",
                            justifyContent: "center",
                            lineHeight: "27px",
                            textAlign: "center",


                        }}
                    >
                        <p style={{
                            color: "#001248",
                            boxSizing: "inherit",
                            fontSize: "18px",
                            fontWeight: "400",
                            textAlign: "center",
                            lineHeight: "27px",

                        }}>
                            hospital name
                        </p>
                    </div>
                    <div classname="hospitalCart"
                        style={{
                            alignItems: "center",
                            borderBottom: "8px solid #79cc81",
                            borderRadius: "14px",
                            boxShadow: "0 0 5px 4px rgba(190,194,219,.16)",
                            color: "#001248",
                            display: "flex",
                            fontSize: "18px",
                            fontWeight: "400",
                            height: "129px",
                            width: "185.81px",
                            justifyContent: "center",
                            lineHeight: "27px",
                            textAlign: "center",


                        }}
                    >
                        <p style={{
                            color: "#001248",
                            boxSizing: "inherit",
                            fontSize: "18px",
                            fontWeight: "400",
                            textAlign: "center",
                            lineHeight: "27px",

                        }}>
                            hospital name
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Stepper2;