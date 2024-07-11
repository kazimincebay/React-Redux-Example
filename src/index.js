import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from "./reducers" //klasör altındaki indexi direkt tanır
import { Provider } from 'react-redux';


const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



//STORE -> Global state
//ACTION -> Arttırma ya da azaltma tetiklenecek şey

// const increment=()=>{
// return {
//   type:'INCREMENT'
// }
// }
// const decrement=()=>{
//   return {
//     type:'DECREMENT'
//   }
//   }

//REDUCER -> Dıspatch edilen şeyi çalıştırır.
// Reducer actiona göre storeu modifiye eder



//let store= createStore(counter);
// store.subscribe(()=>console.log(store.getState()))

//DISPATCH->  actionı execute ettiğimiz(çalıştırdığımız) yerdir

// store.dispatch(increment())//1
// store.dispatch(decrement())//0
// store.dispatch(decrement())//-1

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    </Provider>
);

reportWebVitals();
