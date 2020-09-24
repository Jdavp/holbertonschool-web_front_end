function createElement(data) {
    pararaph = document.createElement('p');
    txt = document.createTextNode(data);
    pararaph.appendChild(txt);
    document.body.appendChild(pararaph);
  }
  
  
  function queryWikipedia(callback) {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    req.responseType = 'json';
    req.send();
    
    req.onload = () =>  callback(req.response.query.pages["21721040"].extract);
       
  }
  queryWikipedia(createElement);