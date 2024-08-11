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
    const definition = document.getElementById('lead');
    definition!.textContent = JSON.stringify(response.data[0].meanings[0].definitions[0].definition, null, 2);
    const example = document.getElementById('example');
    example!.textContent = JSON.stringify(response.data[0].meanings[0].definitions[1].definition, null, 2);
    const example2 = document.getElementById('example2');
    example2!.textContent = JSON.stringify(response.data[0].meanings[0].definitions[2].definition, null, 2);
   
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

