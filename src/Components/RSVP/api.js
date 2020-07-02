import constants from './constants';

// lookup name
export  const lookup = async(addressee) => {
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("GET", "https://n509kmqo15.execute-api.us-east-1.amazonaws.com/prod/lookup-invite?guest=Syneva");
    
    xhr.send();
}
