window.addEventListener('DOMContentLoaded', function() {
    if('serviceWorker' in navigator) 
        {
            navigator.serviceWorker.register('serviceWoker.js')
            .then( register =>{
                console.log(register);
                
            })
        }
});