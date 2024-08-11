import './style.css';

import axios from 'axios';


const form: HTMLFormElement = document.querySelector('#defineform');
const content= document.getElementById('title') as HTMLHeadingElement;

form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  const test =  getURL(text).then(response => {
    const paragraph = document.getElementById('lead');
    paragraph!.textContent = JSON.stringify(response.data[0].meanings[0].definitions[0].definition, null, 2);
  });
  return false; // prevent reload
};

function getURL(text: string){
  return axios.get(`http://api.dictionaryapi.dev/api/v2/entries/en/${text}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
}

function updateContent(){

}

