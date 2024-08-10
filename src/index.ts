// import './style.css';

import { Response } from "undici-types";


const form: HTMLFormElement = document.querySelector('#defineform');


form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  var test = getURL(text);
  console.log(test)
  console.log("hello mango");
  return false; // prevent reload
};

function getURL(text: String){
  const headers: Headers = new Headers()

  headers.set('Content-Type', 'application/json')
  headers.set('Accept', 'application/json')

  const request: RequestInfo = new Request('https://api.dictionaryapi.dev/api/v2/entries/en/'+text, {
    method: 'GET',
    headers: headers
  })
  
  var response = fetch(request).then(res => res.json());
  console.log(response);
  return response;
}

