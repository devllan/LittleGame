window.dataLayer = window.dataLayer || [];
// (function(C,l,a,y,_,i,o){C[_]=C[_]||function(){
//     (C[_].q=C[_].q||[]).push(arguments)},C[_].l=1*new Date();i=l.createElement(a),
//     o=l.getElementsByTagName(a)[0];i.async=1;i.src=y;o.parentNode.insertBefore(i,o)
// })(window,document,'script',"",'gtag');
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-101623151-11');

window.ga = window.ga || function () {
        (ga.q = ga.q || []).push(arguments)
    };
    ga.l = +new Date;
	
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