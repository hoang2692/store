import { combineReducers } from "redux";

import {default as sadanToyotas} from './product/toyotas/Sadan';
import {default as SUVtoyotas} from './product/toyotas/SUV';
import {default as DadungToyotas} from './product/toyotas/Dadung';
import {default as SaloonsMer} from './product/mer/saloons';
import {default as SUVMer} from './product/mer/suv';
import {default as CopeeMer } from './product/mer/copee';
import {default as aventadorLambor} from './product/lambor/aventador';
import {default as SUVLambor} from './product/lambor/suv';
import {default as HarucanLambor} from './product/lambor/harucan';
import {default as Cart} from './cart/cart';
import {default as Login} from './login/login';
import {default as EditToyotas} from './product/toyotas/edit';
import {default as EditMer} from './product/mer/edit';
import {default as EditLambor} from './product/lambor/edit';


const reducer = combineReducers({
    sadanToyotas: sadanToyotas,
    SUVtoyotas: SUVtoyotas,
    DadungToyotas: DadungToyotas,
    SaloonsMer: SaloonsMer,
    SUVMer: SUVMer,
    CopeeMer: CopeeMer,
    aventadorLambor: aventadorLambor,
    SUVLambor: SUVLambor,
    HarucanLambor: HarucanLambor,
    Cart: Cart,
    login: Login,
    EditToyotas: EditToyotas,
    EditMer: EditMer,
    EditLambor: EditLambor
});

export default reducer;
