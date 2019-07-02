LaggedAPI = (function(){
    function empty(){
        // fn({success: true});
    }
    return {
        APIAds: {show: empty},
        Achievements: {save: empty, show: empty},
        Scores: {save: empty, show: empty},
        init: function(a, b){
            console.log(a, b);
        }
    }
}());

GameAPI = (function(){
    return {

    }
}());