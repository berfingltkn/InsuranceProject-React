import React from 'react'
import '../styles/Stepper.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Height, RunCircle } from '@mui/icons-material';
import { useState } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { setTcNo, setName, setSurname, setMail, setPhoneNo, setDeclaration, setKilo, setMarketingAuthorization, setSize } from '../store/slice/stepOneSlice.js'
import { useFormikContext } from 'formik';
import { validationStepper } from '../schemas/stepper-validation.js'

function Stepper() {
  const dispatch = useDispatch()
  const { tcNo, name, surname, phoneNo, mail, size, kilo,declaration,marketing_authorization } = useSelector((state) => {
    //useSelector hook'u, store daki state i okumak için kullanılır 
    //mevcut stati parametre olarak alıyor
    return {
      //bu kod parçası redux store daki stepOne özelliğindeki tcno,name vb. değişkenlerini alıp, bunları ayru değişkenlere atar. Bu sayede, bileşen içerisindeki değerlere kolayca ulaşabiliriz.
      tcNo: state.stepOne.tcNo,
      name: state.stepOne.name,
      surname: state.stepOne.surname,
      phoneNo: state.stepOne.phoneNo,
      mail: state.stepOne.mail,
      size: state.stepOne.size,
      kilo: state.stepOne.kilo,
       declaration: state.stepOne.declaration,
       marketing_authorization: state.stepOne.marketing_authorization

    };
  });
  console.log(tcNo, name, surname, phoneNo, mail, size, kilo,declaration,marketing_authorization);

  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);

  const handleCheckbox1Change = (event) => {
    setCheckbox1Checked(event.target.checked);
    console.log(checkbox1Checked);
    dispatch(setDeclaration(1));
  };

  const handleCheckbox2Change = (event) => {
    setCheckbox2Checked(event.target.checked);
    console.log(checkbox2Checked);
    dispatch(setMarketingAuthorization(1));
  };
const handleStoreInfo=(event)=>{
  console.log(tcNo, name, surname, phoneNo, mail, size, kilo,declaration,marketing_authorization);

}

  //javascript blur event'i
  function handleTcNoBlur(e) {

    dispatch(setTcNo(e.target.value));

    // dispatch(setTcNo(e.target.value));
    //burada eğer getcustomerbytcno veri geliyorsa store a bu bilgileri atsın.
  }



  return (

    <div className="stepper">

      <div class="complementary_general-info__main">

        <div>

          <div >
            <Formik
              validationSchema={validationStepper}
              initialValues={{
                step: 1,
                lastStep: 4,
                isAccepted: false,//checkbox ın check edilip edilmediğini kontrol ediyoruz
                //step1
                tcNo: '',
                name: '',
                surname: '',
                phoneNo: '',
                mail: '',
                size: '',
                kilo: '',
                declaration: '',//beyan
                marketing_authorization: '',//pazarlama izni

                //step2
                province: '',//il
                district: '',//ilçe

                //step3

                //step4
                nameCart: '',
                surnameCart: '',
                numberCart: '',
                dateCart: '',
                paymentType: ''
              }}

              onSubmit={
                (values, actions) => {
                  //kullanıcının verileri göndermesi durumunda sunucuya gönderilmeden önce yapılması gereken işleri tannımlar.
                  //kullanıcı formu göndermek için Submit düğmesine tıkladığında veya formun gönderilmesi durumunda tetiklenir.
                  console.log('values', values)

                  validationStepper
                    .validate(values, { abortEarly: false })
                    .then(validatedValues => {
                      // Doğrulama başarılı
                      console.log('validatedValues', validatedValues);
                      // Diğer işlemleri burada gerçekleştirin
                    })
                    .catch(errors => {
                      // Doğrulama hataları
                      console.log('errors', errors);
                    })

                }


              }
            >

              {({ values, setFieldValue, isValid, dirty }) => {
                const prevHandle = e => {
                  setFieldValue('step', values.step - 1)
                }
                const nextHandle = e => {
                  setFieldValue('step', values.step + 1)
                }



                return (
                  <div >
                    {/* //buraya header gelsin */}
                    <div class="insuranceprogress__main" style={{ display: '' }}>
                      <div className='insuranceprogress__container'>

                        <div className='insuranceprogress__circle_info_node'>
                          <div className={`insuranceprogress__circle${values.step === 1 || values.step === 2 || values.step === 3 || values.step === 4 ? ' active' : ''}`}></div>
                          <div className='insuranceprogress__info'>
                            <p>Genel Bilgiler</p>
                          </div>
                        </div>
                        <div className={`insuranceprogress__line${values.step === 2 || values.step === 3 || values.step === 4 ? ' active' : ''}`}></div>

                        <div className='insuranceprogress__circle_info_node'>
                          <div className={`insuranceprogress__circle${values.step === 2 || values.step === 3 || values.step === 4 ? ' active' : ''}`}></div>
                          <div className='insuranceprogress__info'>
                            <p>Anlaşmalı Kurumlar</p>
                          </div>
                        </div>
                        <div className={`insuranceprogress__line${values.step === 3 || values.step === 4 ? ' active' : ''}`}></div>

                        <div className='insuranceprogress__circle_info_node'>
                          <div className={`insuranceprogress__circle${values.step === 3 || values.step === 4 ? ' active' : ''}`}></div>
                          <div className='insuranceprogress__info'>
                            <p>Teminat Bilgileri</p>
                          </div>
                        </div>
                        <div className={`insuranceprogress__line${values.step === 4 ? ' active' : ''}`}></div>

                        <div className='insuranceprogress__circle_info_node'>
                          <div className={`insuranceprogress__circle${values.step === 4 ? ' active' : ''}`}></div>
                          <div className='insuranceprogress__info'>
                            <p>Ödeme Bilgileri</p>
                          </div>
                        </div>




                      </div>
                    </div>


                    <div class='form-content-area'>
                      <Form >
                        {values.step == 1 && (


                          <Grid container spacing={0} className='css-1tz8m30'>
                            <Grid item xs={12} md={6} style={{ paddingTop: '15px' }}>
                              <div className='field-wrapper' >

                                <Field as={TextField} name="tcNo" classname="input" placeholder="TC Kimlik No"
                                  inputMode="numeric"
                                  id="tcNo"
                                  //value={tcNo}
                                  onBlur={(e) => {
                                    dispatch(setTcNo(e.target.value));
                                    
                                  }}
                                  onKeyDown={(e) => {
                                    if (e.key !== 'Backspace' && e.key !== 'Delete' && e.target.value.length >= 11) {
                                      e.preventDefault();
                                    }
                                    if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
                                      e.preventDefault();
                                    }
                                  }}
                                  label='T.C Kimlik Numarası'
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
                                      transform: 'translate(14px, -9px) scale(0.75)',
                                      transition: 'color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, maxWidth 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                                      zIndex: 1,
                                      pointerEvents: 'auto',
                                      userSelect: 'none',
                                      color: '#1a7dbd',
                                      fontFamily: 'NunitoSans',
                                      fontWeight: 'bolder',


                                    },
                                  }} ></Field>
                                <ErrorMessage name="tcNo" className='error-message' component="text" />
                              </div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} style={{ paddingTop: '15px' }} className='css-18tn63a'>
                              <div className='field-wrapper2'>
                                <Field as={TextField} name="name" classname="input"
                                  // value={name}
                                  label='İsim'
                                  onBlur={(e) => {
                                    dispatch(setName(e.target.value));
                                    
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
                                ></Field>
                                <ErrorMessage name="name" className='error-message' component="text" />
                              </div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} style={{ paddingTop: '15px' }} className='css-18tn63a'>
                              <div className='field-wrapper3'>
                                <Field as={TextField} name="surname" classname="input"
                                  label='Soyisim'
                                  // value={surname}
                                  onBlur={(e) => {
                                    dispatch(setSurname(e.target.value));
                                    
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
                                ></Field>
                                <ErrorMessage name="surname" className='error-message' component="text" />
                              </div>
                            </Grid>



                            <Grid item xs={12} md={6} style={{ paddingTop: '15px' }}>
                              <div className='field-wrapper' >

                                <Field as={TextField} name="mail" classname="input"
                                  // value={mail}
                                  onBlur={(e) => {
                                    dispatch(setMail(e.target.value));
                                    
                                  }}
                                  label='E-Posta Adresi'
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
                                      transform: 'translate(14px, -9px) scale(0.75)',
                                      transition: 'color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, maxWidth 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                                      zIndex: 1,
                                      pointerEvents: 'auto',
                                      userSelect: 'none',
                                      color: '#1a7dbd',
                                      fontFamily: 'NunitoSans',
                                      fontWeight: 'bolder',


                                    },
                                  }} ></Field>
                                <ErrorMessage name="mail" className='error-message' component="text" />
                              </div>
                            </Grid>
                            <Grid item xs={12} md={6} style={{ paddingTop: '15px' }}>
                              <div className='field-wrapper' >

                                <Field as={TextField} name="phoneNo" classname="input"
                                  // value={phoneNo}
                                  onBlur={(e) => {
                                    dispatch(setPhoneNo(e.target.value));
                                    
                                  }}
                                  inputMode="numeric"
                                  onKeyDown={(e) => {
                                    if (e.key !== 'Backspace' && e.key !== 'Delete' && e.target.value.length >= 10) {
                                      e.preventDefault();
                                    }
                                    if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
                                      e.preventDefault();
                                    }
                                  }}
                                  label='Cep Telefonu'
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
                                      transform: 'translate(14px, -9px) scale(0.75)',
                                      transition: 'color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, maxWidth 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                                      zIndex: 1,
                                      pointerEvents: 'auto',
                                      userSelect: 'none',
                                      color: '#1a7dbd',
                                      fontFamily: 'NunitoSans',
                                      fontWeight: 'bolder',


                                    },
                                  }} ></Field>
                                <ErrorMessage name="phoneNo" className='error-message' component="text" />
                              </div>
                            </Grid>
                            <Grid item xs={12} md={6} style={{ paddingTop: '15px' }}>
                              <div className='field-wrapper' >

                                <Field as={TextField} name="size" classname="input"
                                  // value={size}
                                  onBlur={(e) => {
                                    dispatch(setSize(e.target.value));
                                    
                                  }}
                                  inputMode="numeric"
                                  onKeyDown={(e) => {
                                    if (e.key !== 'Backspace' && e.key !== 'Delete' && e.target.value.length >= 3) {
                                      e.preventDefault();
                                    }
                                    if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
                                      e.preventDefault();
                                    }
                                  }}
                                  label='Boy (cm)'
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
                                      transform: 'translate(14px, -9px) scale(0.75)',
                                      transition: 'color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, maxWidth 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                                      zIndex: 1,
                                      pointerEvents: 'auto',
                                      userSelect: 'none',
                                      color: '#1a7dbd',
                                      fontFamily: 'NunitoSans',
                                      fontWeight: 'bolder',


                                    },
                                  }} ></Field>
                                <ErrorMessage name="size" className='error-message' component="text" />
                              </div>
                            </Grid>
                            <Grid item xs={12} md={6} style={{ paddingTop: '15px' }}>
                              <div className='field-wrapper' >

                                <Field as={TextField} name="kilo" classname="input"
                                  // value={kilo}
                                  onBlur={(e) => {
                                    dispatch(setKilo(e.target.value));
                                    
                                  }}
                                  inputMode="numeric"
                                  onKeyDown={(e) => {
                                    if (e.key !== 'Backspace' && e.key !== 'Delete' && e.target.value.length >= 3) {
                                      e.preventDefault();
                                    }
                                    if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
                                      e.preventDefault();
                                    }
                                  }}
                                  label='Kilo (kg)'
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
                                      transform: 'translate(14px, -9px) scale(0.75)',
                                      transition: 'color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, maxWidth 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                                      zIndex: 1,
                                      pointerEvents: 'auto',
                                      userSelect: 'none',
                                      color: '#1a7dbd',
                                      fontFamily: 'NunitoSans',
                                      fontWeight: 'bolder',


                                    },
                                  }} ></Field>
                                <ErrorMessage name="kilo" className='error-message' component="text" />
                              </div>
                            </Grid>

                            <Grid item xs={24} md={12} style={{ paddingTop: '15px' }}>
                              <div className='field-wrapper'>
                                <Field
                                  type='checkbox'
                                  name='declaration'
                                  render={({ field }) => (
                                    <label style={{ width: '100%', height: '100%', display: 'inline-flex', gap: '8px' }}>
                                      <input
                                        type='checkbox'
                                        className='PrivateSwitchBasee-input css-1m9pwf3'
                                        id='complementary-health-checkbox'
                                        style={{
                                          width: '17.43px',
                                          height: '13.43px',
                                          margin: '0',
                                          marginRight: '8px',


                                          borderRadius: '2px',
                                          border: '2px solid #018fec',
                                          outline: 'none',
                                          boxShadow: 'none',

                                          position: 'relative',
                                          cursor: 'pointer',
                                          top: '50%',
                                          transform: 'translateY(-50%)'
                                        }}

                                        {...field}
                                        checked={checkbox1Checked}
                                        onChange={handleCheckbox1Change}
                                      />
                                      <span style={{ letterSpacing: '0.02em' }}>
                                        Daha önce geçirmiş olduğum herhangi bir operasyon bulunmamakla birlikte mevcutta devam eden herhangi bir sağlık sorunu yaşamamaktayım. Sağlıklı olduğumu beyan ediyorum.
                                      </span>
                                    </label>
                                  )}
                                />
                              </div>
                            </Grid>

                            <Grid item xs={24} md={12} style={{ paddingTop: '15px' }}>
                              <div className='field-wrapper'>
                                <Field
                                  type='checkbox'
                                  name='marketing_authorization'

                                  render={({ field }) => (
                                    <label style={{ width: '100%', height: '100%', display: 'inline-flex', gap: '8px' }}>
                                      <input
                                        type='checkbox'

                                        className='PrivateSwitchBase-input css-1m9pwf3'
                                        id='complementary-health-checkbox'
                                        style={{
                                          width: '17.43px',
                                          height: '13.43px',
                                          margin: '0',
                                          marginRight: '8px',

                                          borderRadius: '2px',
                                          border: '2px solid #018fec',
                                          outline: 'none',
                                          boxShadow: 'none',

                                          position: 'relative',
                                          cursor: 'inherit',
                                          top: '50%',
                                          transform: 'translateY(-50%)'
                                        }}
                                        checked={checkbox2Checked}
                                        onChange={handleCheckbox2Change}
                                      // {...field}
                                      />
                                      <span style={{ letterSpacing: '0.02em' }}>
                                        Ürün, hizmet, kampanya ve anketler hakkında tarafımla iletişime geçilmesine ve tarafıma bilgilendirme yapılmasına
                                        <a target="_blank" rel="noreferrer" style={{ color: '#018fec' }}> belirtilen esaslar</a>
                                        çerçevesinde onay veriyorum.
                                      </span>
                                    </label>
                                  )}
                                />
                              </div>
                            </Grid>


                          </Grid>



                        )}



                        {values.step == 2 && (
                          < div onClick={handleStoreInfo}>
                          
                          </div>
                        )}


                        {values.step == 3 && (
                          <>
                          </>
                        )}

                        {values.step == 4 && (
                          <>
                          </>
                        )}


                      </Form>
                    </div>

                    <div className='insurancebutton__container'>
                      {values.step > 1 && (
                        //step 1 den büyükse (2.step,3.step vs.) geri butonu olsun
                        <button type='button' onClick={prevHandle}>
                          Geri
                        </button>
                      )}



                      {values.step == values.lastStep && (
                        //sonuncu step e gelince devam buttonu gri renk olsun
                        <button disabled='false' type='button' style={{ color: 'lightgray', backgroundColor: 'white', borderColor: 'lightgray' }}>Devam</button>

                      ) || (
                          <button type='button' onClick={nextHandle}
                            style={{
                              color: checkbox1Checked && checkbox2Checked ? 'white' : 'lightgray',
                              backgroundColor: checkbox1Checked && checkbox2Checked ? '#018fec' : 'white',
                              borderColor: checkbox1Checked && checkbox2Checked ? '#018fec' : 'lightgray',
                              width: '188px',
                              height: '45.36px',
                              borderRadius: '25px',
                              fontSize: 'larger',
                              fontWeight: 'bold'
                            }}
                            disabled={!checkbox1Checked || !checkbox2Checked}//checkboxların birinin false olması durumunda buttonun disable ı false olucak
                          >Devam</button>
                        )
                      }

                    </div>
                  </div>
                )

              }}


            </Formik>
          </div>





        </div>

      </div>





    </div >

  )

}

export default Stepper
