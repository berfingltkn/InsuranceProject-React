function Stepper() {
  const [isLoading, setIsLoading] = useState(true);//loader spinner için
  const addAllTable = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    await addPolicy();
    await new Promise(resolve => setTimeout(resolve, 5000));
    debugger;
    await addPayment();
  }  return (
    <div className="stepper">
      <div class="complementary_general-info__main"> <div>
          <div >
            <Formik
              validationSchema={validationStepper}
              initialValues={{
                step: 1,
                lastStep: 6,
                isAccepted: false,}}
              onSubmit={
                (values, actions) => {
validationStepper
                    .validate(values, { abortEarly: false })
                    .then(validatedValues => {
                    })
                    .catch(errors => {
                      // Doğrulama hataları
                      console.log('errors', errors);
                    })}}>
              {({ values, setFieldValue, isValid, dirty }) => {
                const prevHandle = e => {
                  setFieldValue('step', values.step - 1)}
                const nextHandle = e => {
                  setFieldValue('step', values.step + 1);
                  addTcNo();
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 4000); }
                return (<div >            
                    <Form >
                      {values.step == 1 && (
                        <Stepper2></Stepper2>)}</Form>
                    {values.step == 2 && (<Stepper2 />)}
                    {values.step == 3 && (<><Stepper3 /></>)}
                    {values.step == 4 && ( <><Stepper4 /> </>)}
                    {values.step == 5 && ( <><Stepper5 /> </> )}
                    {values.step == 6 && (<><Stepper6 /> </>)}
                    <div>
                      <div className='insurancebutton__container'>
                        {(values.step > 1 && values.step < 6) && (
                          <button type='button' onClick={prevHandle} className='stepperPageButton'>
                            Geri
                          </button>
                        ) || (values.step == 6) && (
                          <button className='PaymentPageButton' type='button' onClick={prevHandle}> Geri</button>)}
                        {values.step == values.lastStep && (
                          <button className='PaymentPageButton' type='button' onClick={addAllTable}> Ödeme Yap </button>
                        ) || (
                            <button type='button' onClick={nextHandle}
                            disabled={!checkbox1Checked || !checkbox2Checked}
                            >Devam</button> )} </div> </div></div> ) }}</Formik></div></div></div> </div >)}
                            export default Stepper
