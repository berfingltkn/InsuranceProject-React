import { createSlice } from '@reduxjs/toolkit'

const stepOneSlice = createSlice({
    name: 'stepOne',
    initialState: {
        //başlangıç durumu
        tcNo: '',
        name: '',
        surname: '',
        phoneNo: '',
        mail: '',
        size: '',
        kilo: '',
        declaration: '',//beyan
        marketing_authorization: ''
    },
    reducers: {
        //uygulama durumunun(state) güncellenmesinden sorumlu
        setTcNo: (state, action) => {
            //state önceki değer, action ise işlem yapan fonksiyon gibi düşünülebilinir, payload ise veridir
            state.tcNo = action.payload;
        },
        setName: (state, action) => {
            
            state.name = action.payload;
        },
        setSurname: (state, action) => {
            
            state.surname = action.payload;
        },
        setPhoneNo: (state, action) => {
            
            state.phoneNo = action.payload;
        },
        setMail: (state, action) => {
            
            state.mail = action.payload;
        },
        setSize: (state, action) => {
            
            state.size = action.payload;
        },
        setKilo: (state, action) => {
            
            state.kilo = action.payload;
        },
        setDeclaration: (state, action) => {
            
            state.declaration = action.payload;
        },
        setMarketingAuthorization: (state, action) => {
            
            state.marketing_authorization = action.payload;
        },

    }
});

export const {setTcNo,setName,setSurname,setPhoneNo,setMail,setSize,setKilo,setDeclaration,setMarketingAuthorization}=stepOneSlice.actions;
export const stepOneReducer = stepOneSlice.reducer;