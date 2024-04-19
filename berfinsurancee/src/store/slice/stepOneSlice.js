import { createSlice } from '@reduxjs/toolkit'

const stepOneSlice = createSlice({
    name: 'stepOne',
    initialState: {
        //başlangıç durumu
        tcNo: '',
        name: '',
        surname: '',
        phone_no: '',
        mail: '',
        height: '',
        weight: '',
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
            
            state.phone_no = action.payload;
        },
        setMail: (state, action) => {
            
            state.mail = action.payload;
        },
        setHeight: (state, action) => {
            
            state.height = action.payload;
        },
        setWeight: (state, action) => {
            
            state.weight = action.payload;
        },
        setDeclaration: (state, action) => {
            
            state.declaration = action.payload;
        },
        setMarketingAuthorization: (state, action) => {
            
            state.marketing_authorization = action.payload;
        },

    }
});

export const {setTcNo,setName,setSurname,setPhoneNo,setMail,setHeight,setWeight,setDeclaration,setMarketingAuthorization}=stepOneSlice.actions;
export const stepOneReducer = stepOneSlice.reducer;