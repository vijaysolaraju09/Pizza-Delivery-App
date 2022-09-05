import {APIURL,USERURL} from './URL';
import axios from 'axios';

async function getProducts(){
    return await axios.get(APIURL);
}

async function getProductById (id){
    return await axios.get(`${APIURL}${id}`)
}

function addContact(data){
    return axios.post(USERURL,data);
}

function getContacts(){
    return axios.get(USERURL);
}
export {getProducts,getProductById,addContact,getContacts}