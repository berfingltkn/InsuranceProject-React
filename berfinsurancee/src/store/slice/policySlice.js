import { createSlice } from '@reduxjs/toolkit'

const currentDate = new Date();
const oneYearLater = new Date();
oneYearLater.setFullYear(currentDate.getFullYear() + 1);

const policySlice = createSlice({
    name: 'policySlice',
    initialState: {
        startDate: currentDate.toISOString(),
        endDate: oneYearLater.toISOString(),
        policyType: 'Tamamlayıcı Sağlık',
        totalAmount: '',
        createDate: currentDate.toISOString(),
        coverageYatisli: 'false',
        coverageYatissiz: 'false',
        coverageDogum: 'false',
        coverageTupBebek: 'false'

    },
    reducers: {
        setTotalAmount: (state, action) => {
            //state önceki değer, action ise işlem yapan fonksiyon gibi düşünülebilinir, payload ise veridir
            state.totalAmount = action.payload;
        },
        setCoverageYatisli: (state, action) => {
            //state önceki değer, action ise işlem yapan fonksiyon gibi düşünülebilinir, payload ise veridir
            state.coverageYatisli = action.payload;
        },
        setCoverageYatissiz: (state, action) => {
            //state önceki değer, action ise işlem yapan fonksiyon gibi düşünülebilinir, payload ise veridir
            state.coverageYatissiz = action.payload;
        },
        setCoverageDogum: (state, action) => {
            //state önceki değer, action ise işlem yapan fonksiyon gibi düşünülebilinir, payload ise veridir
            state.coverageDogum = action.payload;
        },
        setCoverageTupBebek: (state, action) => {
            //state önceki değer, action ise işlem yapan fonksiyon gibi düşünülebilinir, payload ise veridir
            state.coverageTupBebek = action.payload;
        },
      

    }


});

export const policyReducer=policySlice.reducer;
export const {setTotalAmount,setCoverageYatisli,setCoverageYatissiz, setCoverageDogum,setCoverageTupBebek}=policySlice.actions;