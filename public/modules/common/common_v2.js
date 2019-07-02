if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}

AnalyticsAPI = (function(){
    return {
        init: function(){
            window.GoogleAnalyticsObject = "googleAnalytics";
            window[window.GoogleAnalyticsObject] = function(){
                (window[window.GoogleAnalyticsObject].q=window[window.GoogleAnalyticsObject].q||[]).push(arguments)};

            window.dataLayer = window.dataLayer || [];
            window.gtag = function(){dataLayer.push(arguments);};
            //window.ga = console.log;

            var e = document.createElement("script");
            e.async = 1;e.src = "https://www.googletagmanager.com/gtag/js?id=UA-101623151-11";
            var o = document.getElementsByTagName("script")[0];
            o.parentNode.insertBefore(e, o);
            gtag('js', new Date());
            gtag('config', 'UA-101623151-11');
            //gtag('event', 'screen_view');

            setInterval(function(){
                gtag('event', 'auto_engagement', {
                    non_interaction: true
                });
            }, 30000);
        },
        /**
         *
         * @param category {string}
         * @param [options] {{non_interaction: boolean}}
         */
        trackEvent: function(category, options){
            gtag('event', category, options)
        }
    }
}());

AnalyticsAPI.init()

LaggedAPI = (function(){
    function empty(){
        // fn({success: true});
    }
    return {
        APIAds: {show: empty},
        Achievements: {save: empty, show: empty},
        Scores: {save: empty, show: empty},
        init: function(a, b){
            //start game
            console.log(a, b);
        }
    }
}());

GameAPI = (function(){
    return {
        before: function(existsFn, beforeFn){
            return function(){
                if( beforeFn.apply(this, arguments) === false ){
                    return false;
                }
                existsFn.apply(this, arguments);
            }
        },
        trackLoadComplete: function(){
            AnalyticsAPI.trackEvent( 'load.complete', {
                non_interaction: true
            });
        },
        trackLevelStart: function(){
            AnalyticsAPI.trackEvent('game.start', {
                non_interaction: true
            });
        }
    }
}());