import '../styles/Stepper6.css';
import React, { createContext, useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { useSelector, useDispatch, Provider } from 'react-redux';
import axios from 'axios';
import { Select } from '@mui/material';

export function Stepper6() {
    const [coverageType, setCoverageType] = useState('');
    const [coverageOfferNo, setCoverageOfferNo] = useState('');
    const dispatch = useDispatch();

    const { coverageYatisli, coverageYatissiz, totalAmount } = useSelector((state) => {

        return {

            coverageYatisli: state.policySlice.coverageYatisli,
            coverageYatissiz: state.policySlice.coverageYatissiz,
            totalAmount: state.policySlice.totalAmount,
        };
    });
    useEffect(() => {
        fetchData();
    }, [coverageType, coverageOfferNo]);

    const fetchData = async () => {
        const textCoverageType = "";
        if (coverageYatisli == true) {
            setCoverageType("YATIŞLI");
            try {
                const response = await axios.get(`https://localhost:7021/api/coverages/getamountbycoveragetype?type=${coverageType}`);
                setCoverageOfferNo(response.data.data.offerNo);

            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        else if (coverageYatissiz == true) {
            setCoverageType("YATIŞLI YATIŞSIZ");
            try {
                const response = await axios.get(`https://localhost:7021/api/coverages/getamountbycoveragetype?type=${coverageType}`);
                setCoverageOfferNo(response.data.data.offerNo);

            } catch (error) {
                console.error('Error fetching data', error);
            }
        }


    };

    return (
        <div className='paymentMainDiv'>
            <div className='paymentDiv'
                style={{
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                }} >
                <div className="totalDiv"
                    style={{
                        width: "1257.58px",
                        height: "58.39px",

                        marginInline: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "-120px"
                    }}
                >
                    <div className="totalteklifno"
                        style={{
                            width: "1257px",
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
                            <div className="teklifNo"
                                style={{
                                    color: "#1a7dbd",
                                    paddingLeft: "60px",
                                    fontWeight: "700",

                                    marginBottom: "0",
                                    marginTop: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}> Teklif No: {coverageOfferNo} </div>
                            <div className="teklifName" style={
                                {
                                    color: "",
                                    fontWeight: "600",
                                    fontSize: "18px"
                                }
                            }>  Tamamlayıcı Sağlık({coverageType})</div>
                        </div>
                        <div className="total">
                            <div style={{
                                paddingRight: "60px",
                                color: "#1a7dbd",
                                fontWeight: "700",

                            }}

                            >Size Özel Tutar : {totalAmount}</div>
                        </div>
                    </div>
                </div>

                <div className='paymentcreditcard__container'>
                    <div className='paymentcreditcard__content'>
                        <div className='paymentcreditcard__info'>

                            <Form>
                                <div className='paymentcreditcard__formik'>
                                    <Grid container spacing={0} className='css-1tz8m29'>
                                        <Grid item xs={6} sm={6} md={6} style={{ paddingRight: '10px' }} className='css-18tn63aa'>
                                            <div className='field-wrapper22'>
                                                <Field
                                                    as={TextField}
                                                    name="name"
                                                    classname="input"
                                                    label='İsim'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                        style: {
                                                            lineHeight: '1.4375em',
                                                            letterSpacing: '0.00938em',
                                                            padding: '0px 0.6rem 0px 0px',
                                                            display: 'block',
                                                            transformOrigin: 'left top',
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            maxWidth: 'calc(133% - 24px)',
                                                            position: 'absolute',
                                                            left: '0px',
                                                            top: '0px',
                                                            transform: 'translate(14px, -9px) scale(0.75)',
                                                            transition: 'color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, maxWidth 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                                                            zIndex: 1,
                                                            pointerEvents: 'auto',
                                                            userSelect: 'none',
                                                            color: '#1a7dbd',
                                                            fontFamily: 'NunitoSans',
                                                            fontWeight: 'bolder',
                                                        },
                                                    }}
                                                    InputProps={{
                                                        style: { background: 'white', height: '41.59px' },
                                                    }}
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} style={{ paddingLeft: '10px' }} className='css-18tn63a'>
                                            <div className='field-wrapper33'>
                                                <Field
                                                    as={TextField}
                                                    name="surname"
                                                    classname="input"
                                                    label='Soyisim'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                        style: {
                                                            lineHeight: '1.4375em',
                                                            letterSpacing: '0.00938em',
                                                            padding: '0px 0.6rem 0px 0px',
                                                            display: 'block',
                                                            transformOrigin: 'left top',
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            maxWidth: 'calc(133% - 24px)',
                                                            position: 'absolute',
                                                            left: '0px',
                                                            top: '0px',
                                                            transform: 'translate(14px, -9px) scale(0.75)',
                                                            transition: 'color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, maxWidth 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                                                            zIndex: 1,
                                                            pointerEvents: 'auto',
                                                            userSelect: 'none',
                                                            color: '#1a7dbd',
                                                            fontFamily: 'NunitoSans',
                                                            fontWeight: 'bolder',
                                                        },
                                                    }}
                                                    InputProps={{
                                                        style: { background: 'white', height: '41.59px' },
                                                    }}
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} style={{ paddingTop: '15px' }}>
                                            <div className='field-wrapper00'>
                                                <Field
                                                    as={TextField}
                                                    name="card"
                                                    classname="input"
                                                    label='Kart Numarası'
                                                    InputProps={{
                                                        style: { background: 'white', height: '41.59px' },
                                                    }}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                        style: {
                                                            lineHeight: '1.4375em',
                                                            letterSpacing: '0.00938em',
                                                            padding: '0px 0.6rem 0px 0px',
                                                            display: 'block',
                                                            transformOrigin: 'left top',
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            maxWidth: 'calc(133% - 24px)',
                                                            position: 'absolute',
                                                            left: '0px',
                                                            top: '0px',
                                                            transform: 'translate(14px, -9pxscale(0.75)',
                                                            transition: 'color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, maxWidth 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                                                            zIndex: 1,
                                                            pointerEvents: 'auto',
                                                            userSelect: 'none',
                                                            color: '#1a7dbd',
                                                            fontFamily: 'NunitoSans',
                                                            fontWeight: 'bolder',
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} style={{ paddingTop: '15px' }}>
                                            <div className='field-wrapper44'>
                                                <Field
                                                    as={TextField}
                                                    name="card"
                                                    classname="input"
                                                    label='AA/YY'
                                                    InputProps={{
                                                        style: { background: 'white', height: '41.59px' },
                                                    }}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                        style: {
                                                            lineHeight: '1.4375em',
                                                            letterSpacing: '0.00938em',
                                                            padding: '0px 0.6rem 0px 0px',
                                                            display: 'block',
                                                            transformOrigin: 'left top',
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            maxWidth: 'calc(133% - 24px)',
                                                            position: 'absolute',
                                                            left: '0px',
                                                            top: '0px',
                                                            transform: 'translate(14px, -9pxscale(0.75)',
                                                            transition: 'color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, maxWidth 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                                                            zIndex: 1,
                                                            pointerEvents: 'auto',
                                                            userSelect: 'none',
                                                            color: '#1a7dbd',
                                                            fontFamily: 'NunitoSans',
                                                            fontWeight: 'bolder',
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} style={{ paddingTop: '15px' }}>
                                            <div className='field-wrapper55'>
                                                <Field
                                                    as="select"
                                                    name="paymentType"
                                                    className="input"
                                                    label='Ödeme Tipi'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                        style: {
                                                            lineHeight: '1.4375em',
                                                            letterSpacing: '0.00938em',
                                                            padding: '0px 0.6rem 0px 0px',
                                                            display: 'block',
                                                            transformOrigin: 'left top',
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            maxWidth: 'calc(133% - 24px)',

                                                            left: '0px',
                                                            top: '0px',
                                                            transform: 'translate(14px, -9px) scale(0.75)',
                                                            transition: 'color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, maxWidth 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                                                            zIndex: 5,
                                                            pointerEvents: 'auto',
                                                            userSelect: 'none',
                                                            color: '#1a7dbd',
                                                            fontFamily: 'NunitoSans',
                                                            fontWeight: 'bolder',
                                                            paddingLeft: "10px",
                                                            padding: "7px 8px"
                                                        },
                                                    }}
                                                    style={{ background: 'white', height: '41.59px', width: "602px" }}
                                                >
                                                    <option value="">  </option>
                                                    <option value="creditCard">Peşin</option>
                                                    <option value="creditCard">2 Taksit</option>
                                                    <option value="creditCard">3 Taksit</option>
                                                    <option value="creditCard">6 Taksit</option>

                                                </Field>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Form>

                            {/* <div className='buttonPayment'>
                                <div className='insurancebuttonPayment__container'>

                                    <button type='button' >
                                        Geri
                                    </button>


                                    <button type='button' 
                                        style={{
                                            color: "white",
                                            backgroundColor: "#018fec",
                                            borderColor: "#018fec",
                                            width: '188px',
                                            height: '45.36px',
                                            borderRadius: '25px',
                                            fontSize: 'larger',
                                            fontWeight: 'bold'
                                        }}
                                    >Ödeme Yap</button>
                                </div>
                            </div> */}
                        </div>

                        <div className='paymentcreditcard__left-container'>
                            <div className='paymentcreditcard__card_container'>
                                <div className='paymentcreditcard__card_flip'>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className='paymentcreditcard__info_container'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Stepper6;
