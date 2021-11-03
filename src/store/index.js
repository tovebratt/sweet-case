import reduce from '../reducers'
import { createStore } from 'redux';

const initialState = { user: "Tove" };
export const store = createStore(reduce, initialState);