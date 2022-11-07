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

export async function getCountriescca3(codeParams: any) {
    const API_URL: any = `https://restcountries.com/v3.1/alpha/${codeParams}`;
    let retur = {};
    var request: any = {
        method: 'GET',
        redirect: 'follow'
      };
     
    await fetch(API_URL, request)
      .then(response => response.json())
      .then(data => {
          retur = data;        
          localStorage.setItem('countries', JSON.stringify(data));
          window.location.reload(true);
          console.log(data)
         
        }
      );

    return retur;    
};
