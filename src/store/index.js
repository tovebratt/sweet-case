import reduce from '../reducers'
import { createStore } from 'redux';

const initialState = { user: "Magica" };
export const store = createStore(reduce, initialState);

const initialStateApplication = {
applications: [
  {
  id: 1,
  applicationName: "First Application",
  date: "2021-11-01",
  createdBy: "Magica",
  URL: "www.firstapplication.com",
  customDomain: "www.myapplication.com",
},
{
  id: 2,
  applicationName: "Second Application",
  date: "2021-11-02",
  createdBy: "Magica",
  URL: "www.secondapplication.com",
  customDomain: "www.myapplication2.com",
},

]
}

export const store2 = createStore(reduce, initialStateApplication);