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
}
