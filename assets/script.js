const immagini = [
    {
        immagine : "./assets/img/img-1.jpg",
        titolo : 'The OG trio',
        descrizione : 'Il trio prima della venuta di Toji',
    },
    {
        immagine : "./assets/img/img-2.png",
        titolo : 'Il ragazzo prodigio',
        descrizione : 'Sin dalla nascita era destinato ad essere il piu forte',
    },
    {
        immagine : "./assets/img/img-3.jpg",
        titolo : 'Il ritorno del re',
        descrizione : 'Gojo si libera della sua prigione',
    },
    {
        immagine : "./assets/img/img-4.jpg",
        titolo : 'La venuta di kashimo',
        descrizione : 'Il re del fulmine giunge in era moderna',
    },
    {
        immagine : "./assets/img/img-5.png",
        titolo : 'The one who left it all behind',
        descrizione : "La comparsa di Toji durante l'incidente di Shibuya",
    }
];

const immaginePrincipale = document.querySelector('#carosello figure')
const frecciaADestra = document.querySelector('.fa-chevron-right')
const frecciaASinistra = document.querySelector('.fa-chevron-left')

let posizioneImmaginaCorrente = 0

immaginePrincipale.innerHTML = `
            <img src="${immagini[posizioneImmaginaCorrente].immagine}" alt="immagini carosello">
            <div>
                <h1>${immagini[posizioneImmaginaCorrente].titolo}</h1>
                <p>${immagini[posizioneImmaginaCorrente].descrizione}</p>
            </div>
`

frecciaASinistra.addEventListener('click', function(){
    const immaginePrincipaleImg = immaginePrincipale.querySelector( 'img' )
    const immaginePrincipaleH2 = immaginePrincipale.querySelector( 'h1' )
    const immaginePrincipaleP = immaginePrincipale.querySelector( 'p' )
 
        if( posizioneImmaginaCorrente === 0){
            posizioneImmaginaCorrente = immagini.lenght - 1

            immaginePrincipaleImg.src = immagini[posizioneImmaginaCorrente].immagine
            immaginePrincipaleH2.innerHTML = immagini[posizioneImmaginaCorrente].titolo
            immaginePrincipaleP.innerHTML = immagini[posizioneImmaginaCorrente].descrizione
        } else {
            posizioneImmaginaCorrente --

            immaginePrincipaleImg.src = immagini[posizioneImmaginaCorrente].immagine
            immaginePrincipaleH2.innerHTML = immagini[posizioneImmaginaCorrente].titolo
            immaginePrincipaleP.innerHTML = immagini[posizioneImmaginaCorrente].descrizione
            
        }
    }
)

frecciaADestra.addEventListener('click', function(){
    const immaginePrincipaleImg = immaginePrincipale.querySelector( 'img' )
    const immaginePrincipaleH2 = immaginePrincipale.querySelector( 'h1' )
    const immaginePrincipaleP = immaginePrincipale.querySelector( 'p' )

    if( posizioneImmaginaCorrente === immagini.lenght - 1){
        posizioneImmaginaCorrente = 0

        immaginePrincipaleImg.src = immagini[posizioneImmaginaCorrente].immagine
        immaginePrincipaleH2.innerHTML = immagini[posizioneImmaginaCorrente].titolo
        immaginePrincipaleP.innerHTML = immagini[posizioneImmaginaCorrente].descrizione
    } else {
        posizioneImmaginaCorrente ++

        immaginePrincipaleImg.src = immagini[posizioneImmaginaCorrente].immagine
        immaginePrincipaleH2.innerHTML = immagini[posizioneImmaginaCorrente].titolo
        immaginePrincipaleP.innerHTML = immagini[posizioneImmaginaCorrente].descrizione
    }
})



/*
for ( let i = 0; i < immagini.length; i++){
    let dati = immagini[i]

    if (i === 0){
    document.body.innerHTML += `
        <div id="carosello">
            <i class="fa-solid fa-chevron-right"></i>
            <figure>
                <img class="active" src="${dati.urlImmagine}" alt="immagini carosello">
            </figure>    
            <i class="fa-solid fa-chevron-left"></i>
        </div>
    `
    }else{
        document.body.innerHTML += `
        <div id="carosello">
            <figure>
                <img class="" src="${dati.urlImmagine}" alt="immagini carosello">
            </figure>    
        </div>
    `
    }
}
*/
