window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-101623151-11');
function ga(){
    console.debug("ga", Array.prototype.slice.call(arguments).join(","));
    /**
     gtag('event', <action>, {
              'event_category': <category>,
              'event_label': <label>,
              'value': <value>
            });
     */
}
gtag('event', 'screen_view', {
    'app_name': 'WordConnect',
    'screen_name' : 'Home'
});
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