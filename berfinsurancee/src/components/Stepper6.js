import '../styles/Stepper6.css';
import React, { createContext, useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { useSelector, useDispatch, Provider } from 'react-redux';
import axios from 'axios';
import { Select } from '@mui/material';
import chip from '../assets/chip.png';
import { setApprovalInformationForm, setApprovalInformationalText, setApprovalSellingContract, setCartNumber, setNameOnCart, setPaymentType, setSurnameOnCart, setDateCart } from '../store/slice/paymentSlice';

export function Stepper6() {
    const dispatch = useDispatch()
    const { policyID, nameOnCart, surnameOnCart, cartNumber, dateCart, paymentType, approvalInformationForm, approvalSellingContract, approvalInformationalText } = useSelector((state) => {
        //useSelector hook'u, store daki state i okumak için kullanılır 
        //mevcut stati parametre olarak alıyor
        return {
            //bu kod parçası redux store daki stepOne özelliğindeki tcno,name vb. değişkenlerini alıp, bunları ayru değişkenlere atar. Bu sayede, bileşen içerisindeki değerlere kolayca ulaşabiliriz.


            policyID: state.paymentSlice.policyID,
            nameOnCart: state.paymentSlice.nameOnCart,
            surnameOnCart: state.paymentSlice.surnameOnCart,
            cartNumber: state.paymentSlice.cartNumber,
            dateCart: state.paymentSlice.dateCart,
            paymentType: state.paymentSlice.paymentType,
            approvalInformationForm: state.paymentSlice.approvalInformationForm,
            approvalSellingContract: state.paymentSlice.approvalSellingContract,
            approvalInformationalText: state.paymentSlice.approvalInformationalText,
        };
    });

    const [cartNo, setCartNo] = useState('XXXX XXXX XXXX XXXX');
    const [dateeCart, setDateeCart] = useState('AA/YY');
    const [name, setName] = useState("İsim ");
    const [surname, setSurname] = useState("Soyisim");
    const [coverageType, setCoverageType] = useState('');
    const [coverageOfferNo, setCoverageOfferNo] = useState('');

    const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    const [checkbox2Checked, setCheckbox2Checked] = useState(false);
    const [checkbox3Checked, setCheckbox3Checked] = useState(false);

    const handleCheckbox1Change = (event) => {
        const isChecked = event.target.checked;
        if (isChecked==true) {
            setCheckbox1Checked(isChecked);
            dispatch(setApprovalInformationForm(isChecked));
        } else if(isChecked==false){
            setCheckbox1Checked(isChecked);
            dispatch(setApprovalInformationForm(isChecked));
        }
    };

    const handleCheckbox2Change = (event) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setCheckbox2Checked(isChecked);
            dispatch(setApprovalSellingContract(isChecked));
        } else {
            setCheckbox2Checked(isChecked);
            dispatch(setApprovalSellingContract(isChecked));
        }
    };

    const handleCheckbox3Change = (event) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setCheckbox3Checked(isChecked);
            dispatch(setApprovalInformationalText(isChecked));
        } else {
            setCheckbox3Checked(isChecked);
            dispatch(setApprovalInformationalText(isChecked));
        }
    };




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
                                                    value={nameOnCart}
                                                    onChange={(e) => {

                                                        const inputValue = e.target.value.replace(/[^A-Za-zğüşıöçĞÜŞİÖÇ\s]/g, ''); // Sadece harfleri al ve boşlukları koru
                                                        dispatch(setNameOnCart(inputValue));
                                                        setName(inputValue);

                                                        if (e.target.value == "") {
                                                            setName("İsim ");

                                                        }
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
                                                    value={surnameOnCart}
                                                    label='Soyisim'
                                                    onChange={(e) => {
                                                        const inputValue = e.target.value.replace(/[^A-Za-zğüşıöçĞÜŞİÖÇ\s]/g, ''); // Sadece harfleri al ve boşlukları koru
                                                        dispatch(setSurnameOnCart(inputValue));

                                                        setSurname(inputValue);

                                                        if (e.target.value == "") {
                                                            setSurname("- Soyisim");

                                                        }

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
                                                    value={cartNumber}
                                                    classname="input"
                                                    label='Kart Numarası'
                                                    onChange={(e) => {

                                                        const inputValue = e.target.value.replace(/\D/g, '').slice(0, 16); // Sadece rakamları al ve en fazla 16 karaktere sınırla
                                                        const formattedValue = inputValue.replace(/(\d{4})(?=\d)/g, '$1 '); // "XXXX XXXX XXXX XXXX" formatına dönüştür
                                                        dispatch(setCartNumber(formattedValue));
                                                        setCartNo(formattedValue);

                                                        if (e.target.value == "") {
                                                            setCartNo("XXXX XXXX XXXX");

                                                        }

                                                    }}
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
                                                    value={dateCart}
                                                    onChange={(e) => {
                                                        const inputValue = e.target.value.replace(/\D/g, '').slice(0, 4); // Sadece rakamları al ve en fazla 4 karaktere sınırla
                                                        let formattedValue = '';
                                                        if (inputValue.length >= 3) {
                                                            const month = inputValue.slice(0, 2);
                                                            const year = inputValue.slice(2, 4);
                                                            formattedValue = `${month}/${year}`;
                                                        } else {
                                                            formattedValue = inputValue;
                                                        }
                                                        dispatch(setDateCart(formattedValue));
                                                        setDateeCart(formattedValue);
                                                        console.log(dateCart);
                                                    }}
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
                                                    value={paymentType}
                                                    onChange={(e) => {

                                                        dispatch(setPaymentType(e.target.value));
                                                        console.log(paymentType);

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
                                                    <option value="Peşin">Peşin</option>
                                                    <option value="2 Taksit">2 Taksit</option>
                                                    <option value="3 Taksit">3 Taksit</option>
                                                    <option value="6 Taksit">6 Taksit</option>

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
                                    <div className='paymentcreditcard__card_front'>
                                        <div className='paymentcreditcard__chip'>
                                            <div style={{ height: "75px" }}>
                                                <img src={chip} style={{ width: "50px", height: "50px" }}></img>
                                            </div>
                                        </div>
                                        <div className='paymentcreditcard__number'>{cartNo}</div>
                                        <div className='paymentcreditcard__expire'>{dateeCart}</div>
                                        <div className='paymentcreditcard__name'>{name}{"  "}{surname}</div>
                                    </div>

                                </div>
                            </div>
                            <div className='paymentcreditcard__info_container'>
                                <label style={{ width: '452px', height: '50px', display: 'inline-flex', gap: '8px', alignItems: "center" }}>

                                    <div class="form-check"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",


                                        }}>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ borderRadius: "4px", width: "11px", height: "11px", border: "2px solid #018fec" }}
                                            checked={checkbox1Checked}
                                            onChange={handleCheckbox1Change}
                                        ></input>

                                    </div>
                                    <span style={{ letterSpacing: '0.02em', fontSize: "16px" }}>
                                        <a target="_blank" rel="noreferrer" style={{ color: '#018fec', textDecoration: "underline" }}> Bilgilendirme Formunu</a>
                                        okudum, onaylıyorum.
                                    </span>
                                </label>
                                <label style={{ width: '452px', height: '50px', display: 'inline-flex', gap: '8px', alignItems: "center" }}>

                                    <div class="form-check"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",


                                        }}>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ borderRadius: "4px", width: "11px", height: "11px", border: "2px solid #018fec" }}
                                            checked={checkbox2Checked}
                                            onChange={handleCheckbox2Change}
                                        ></input>

                                    </div>
                                    <span style={{ letterSpacing: '0.02em', fontSize: "16px" }}>
                                        <a target="_blank" rel="noreferrer" style={{ color: '#018fec', textDecoration: "underline" }}> Mesafeli Satış Sözleşmesini</a>
                                        okudum, onaylıyorum.
                                    </span>
                                </label>
                                <label style={{ width: '452px', height: '50px', display: 'inline-flex', gap: '8px', alignItems: "center", marginTop: "20px" }}>

                                    <div class="form-check"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",


                                        }}>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ borderRadius: "4px", width: "11px", height: "11px", border: "2px solid #018fec" }}
                                            checked={checkbox3Checked}
                                            onChange={handleCheckbox3Change}
                                        ></input>

                                    </div>
                                    <span style={{ letterSpacing: '0.02em', fontSize: "16px" }}>
                                        Kredi Kartı bilgilerimin sonraki işlemlerim için kullanılması amacıyla
                                        <a target="_blank" rel="noreferrer" style={{ color: '#018fec', textDecoration: "underline" }}> bilgilendirme metni</a>kapsamında saklanmasını kabul ediyorum.
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Stepper6;
