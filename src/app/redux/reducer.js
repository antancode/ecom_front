import { combineReducers } from 'redux';
import { cartreducer, filterreducer } from './actionreduser';

export const reducer = combineReducers({
    filter: filterreducer,
    minicart : cartreducer,
})