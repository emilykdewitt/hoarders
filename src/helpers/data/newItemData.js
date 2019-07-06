import axios from 'axios';

import apiKeys from './apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const addNewItem = itemObject => axios.post(`${firebaseUrl}/items.json`, itemObject);

export default { addNewItem };
