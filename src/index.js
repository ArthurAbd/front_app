import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

// axios.post('http://localhost:3001/logout', {
//     access_token: 'nbXkZOPFbZWnarWwyKn7RwXFMhVqGMyBiUitF58mQQo=',
//     client_id: 'desktop',
//     client_secret: '12345'
// })
// .then(function (res) {
//     console.log(res);
// })
// .catch(function (error) {
//     console.log(error);
// });

// axios.post('http://localhost:3001/oauth/token', {
//     grant_type: 'refresh_token',
//     refresh_token: '9UFD6msaGq8QghcpKlgO8AS1g1V4Dyf2UZCkHaibf8g=',
//     client_id: 'desktop',
//     client_secret: '12345'
// })
// .then(function (res) {
//     console.log(res);
// })
// .catch(function (error) {
//     console.log(error);
// });
