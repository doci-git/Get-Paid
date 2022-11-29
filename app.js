

function hide () {
    // primo avviso in data // first warning
    const middleDate = new Date ('11/20/2022');
    // secondo e ultimo avviso // second and last warnig
    const futureDate = new Date('11/29/2022');
    // data attuale // current date
    const presentDate = new Date();
    
    if (middleDate <= presentDate) {
       console.log('primo avisso');
        const hides = document.querySelector('body').style.opacity='0.3';
    }

    if( futureDate <= presentDate){
        console.log('nascondi definitamente');
        const hides = document.querySelector('body').style.opacity='0';
    }
}hide()
