import {createStore} from 'redux';

import reducer from './modules/login/reducer';

const store = createStore(reducer);

export default store;
