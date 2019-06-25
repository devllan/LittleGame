function initGTag(){
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){dataLayer.push(arguments);};
    window.ga = console.log;
	
    var e = document.createElement("script");
    e.async = 1;e.src = "https://www.googletagmanager.com/gtag/js?id=UA-101623151-11";
    var o = document.getElementsByTagName("script")[0];
    o.parentNode.insertBefore(e, o);
    gtag('js', new Date());
    gtag('config', 'UA-101623151-11');
    gtag('event', 'screen_view');

}
initGTag();
setInterval(function(){
    gtag('event', 'auto_engagement', {
        non_interaction: true
    });
}, 30000);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}