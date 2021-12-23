// DOM Manipulation
const quoteContainer = document.getElementById('quote-container');
const quoteTextTam01 = document.getElementById('quotetamil-1');
const quoteTextTam02 = document.getElementById('quotetamil-2');
const quoteTextTrn = document.getElementById('quote-text-trn');
const twitterBtn = document.getElementById('twitter');
const nextKural = document.getElementById('next-kural');


// Loader functions loading() and complete()
//
// Loader function - Display Loader hide quote container
function loading(){
    loader.hidden = false; // This will display loader
    quoteContainer.hidden = true; // This will hide quote container
}

// Loader complete function - Display Quote container and hide loader
function complete(){
    if (!loader.hidden){
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}
// End of loader functions.

// async method and await 
async function getKural(){
    loading();
    const appId = 'eenoesvbwbika';
    let apiUrl = 'https://getthirukkural.appspot.com/api/2.0/kural/rnd?appid={appid}&format=json';
    apiUrl = apiUrl.replace("{appid}", appId);
    
    try{
        const response = await fetch (apiUrl);
        const data = await response.json();
        quoteTextTam01.innerText = data.KuralSet.Kural[0].Line1;
        quoteTextTam02.innerText = data.KuralSet.Kural[0].Line2;
        quoteTextTrn.innerText = data.KuralSet.Kural[0].Translation;
        //console.log(data.KuralSet.Kural[0].Line1);
        complete();
    }catch(error){
        console.log('Error message ' ,error);
        getKural();
    }
}

// Twitter posting
function twitterPost(){
        const kuralTam01 = quoteTextTam01.innerText;
        const kuralTam02 = quoteTextTam02.innerText;
        const kuraltrn = quoteTextTrn.innerText;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${kuralTam01}%0A${kuralTam02}%0A - Translation:${kuraltrn}`;
        window.open(twitterUrl, '_blank');
}
// Adding event Listeners
nextKural.addEventListener('click',getKural);
twitterBtn.addEventListener('click', twitterPost);

//Call getKural function
getKural();