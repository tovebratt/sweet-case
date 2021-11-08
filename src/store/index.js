import reduce from '../reducers'
import { createStore } from 'redux';

const initialState = { user: "Magica" };
export const store = createStore(reduce, initialState);

const initialStateApplication = {
applications: [
  {
  applicationName: "First Application",
  date: "2021-11-01",
  createdBy: "Magica",
  URL: "www.firstapplication.com",
  customDomain: "www.myapplication.com",
},
{
  applicationName: "Second Application",
  date: "2021-11-02",
  createdBy: "Magica",
  URL: "www.secondapplication.com",
  customDomain: "www.myapplication2.com",
},

]
}

export const store2 = createStore(reduce, initialStateApplication);