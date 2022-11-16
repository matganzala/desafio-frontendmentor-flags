export async function getCountries() {
    const API_URL: any = 'https://restcountries.com/v3.1/all';
    let retur = {};
    var request: any = {
        method: 'GET',
        redirect: 'follow'
      };
     
    await fetch(API_URL, request)
      .then(response => response.json())
      .then(data => {
        retur = data;
      });

    return retur;    
};

export async function getCCA3(cca3: any) {
  const API_URL: any = `https://restcountries.com/v3.1/alpha/${cca3}`;
  let retur = {};
  var request: any = {
      method: 'GET',  
      redirect: 'follow'
    };
  await fetch(API_URL, request)
    .then(response => response.json())
    .then(data => {
      retur = data;      
    }
  );    
    return retur;   
}