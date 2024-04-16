//validation işlemlerini yup ile yapıyoruz.

import * as yup from 'yup';//tüm projeye (*) yup ekledik
const passwordRules = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
export const validationStepper = yup.object().shape({
    tcNo: yup.string().matches(/^\d{11}$/, 'Lütfen geçerli bir TC numarası giriniz.')
    .required('TC numarası girmek zorunludur.')
    ,
    name: yup
    .string()
    .matches(/^[A-Za-zğüşöçİĞÜŞÖÇ\s]+$/, 'Geçerli bir isim giriniz.')
    .required('İsim girmek zorunludur.')
    ,
    surname:yup
    .string()
    .matches(/^[A-Za-zğüşöçİĞÜŞÖÇ\s]+$/, 'Geçerli bir soyisim giriniz.')
    .required('Soyisim girmek zorunludur.')
    ,
    phoneNo:yup
    .string()
    .matches(/^[0-9]{10}$/, 'Geçerli bir telefon numarası giriniz (sıfır olmadan giriniz).')
    .required('Telefon numarası girmek zorunludur.')
    ,
    mail: yup
        .string()
        .email('Geçerli bir email adresi giriniz.')
        .required('Email girmek zorunludur.')
    //email in bir yup ve string olduğunu belirttik, ayrıca yup içerisindeki email() methodunu da kullanarak validation mesajını verdik. 
    //Required zorunluluk, yani o alan doldurulmalıdır.
    //yup un oneOf methoduyla iki inputun eşleşip eşleşmediğini kontrol edebiliriz.

    ,
    size: yup.number().required('Boy girmek zorunludur.'),

    kilo: yup.number().required('Kilo girmek zorunludur.'),

    // //step4
    // nameCart:
    // ,
    // surnameCart:
    // ,
    // numberCart:
    // ,
    // dateCart:
    // ,



});