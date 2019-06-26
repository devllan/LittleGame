const gameSlug = "blackjack";

EXAPI = {};
EXAPI.runGameHelper = null;
EXAPI.supportedLanguages = ['en', 'es', 'tr'];

EXAPI.initSoftgames = function() {
    sdkHandler.on("loading.completed", function(){
        EXAPI.runGameHelper();

    });
    //
    //     window.sgSettings = settings;
    //     window.sdkHandler = sdkHandler;
        mySaver.loadData()
            .then(function(){

                EXAPI.start();
                //EXAPI.runGameHelper();
            });

}

EXAPI.start = function() {
    sdkHandler.trigger('start');
    startBlackjack();
}

EXAPI.getLanguage = function () {
    // return only a supported lang
    const selectedLang = sgSettings.config.env.locale;
    
    if(this.supportedLanguages.includes(selectedLang))
        return selectedLang;
    else
        return 'en';
}
EXAPI.loading = function(progress) {
    sdkHandler.trigger('loading.update', {
        progressPercentage: progress
    });
}

EXAPI.loaded = function() {
    console.log('Calling loading completed!');
    sdkHandler.trigger('loading.completed', {});
}

EXAPI.setOrientationHandler = function() {}

EXAPI.setResizeHandler = function() {}

EXAPI.isEnabledIncentiviseButton = function() {
    return sgSettings.config.rewarded.enabled;
}

EXAPI.triggerIncentivise = function(callback) {
    sdkHandler.trigger('rewardedAd', {
        callback: callback
    }, this)

}

EXAPI.beforePlayButtonDisplay =  function(cb) {
    sdkHandler.trigger('beforePlayButtonDisplay', {
        callback: cb
    }, this);
}

EXAPI.playButtonPressed = function(cb) {
    sdkHandler.trigger('playButtonPressed', {
        callback: cb
    }, this);
}


EXAPI.redirectToPortal = function() {
    sdkHandler.trigger('moreGames');
}

EXAPI.levelStarted = function(level) {
    sdkHandler.trigger('levelStart', {
        level: level
    });
}

EXAPI.levelFinished = function(level, score, state, cb) {
    sdkHandler.trigger('levelFinish', {
        level: level,
        score: score,
        state: state,
        callback: cb
    });
}

EXAPI.levelUp = function(level, score, cb) {
    sdkHandler.trigger('levelFinish', {
        level: level,
        score: score,
        state: "win",
        callback: cb
    });
}

EXAPI.gameStart = function() {
    sdkHandler.trigger('gameStart');
}

EXAPI.gameOver = function(level, score, cb) {
    sdkHandler.trigger('gameOver', {
        score: score,
        callback: cb
    });
}

EXAPI.getStorageItem = function(which) {
    return mySaver.get(which);
}

EXAPI.setPauseHandler = function() {};

EXAPI.setUnpauseHandler = function() {};

EXAPI.registerObserver =  function() {};

EXAPI.pageDisplayed = function() {};

EXAPI.setStorageItem = function(which, what) {
    mySaver.save(which, what);
}

mySaver = (function() {
    var mySaver = {
        loadData: loadData,
        save: save,
        get: get,
        data: {}
    };

    function loadData() {
        return new Promise(function(resolve, reject) {
            sdkHandler.trigger("restore", {
                key: gameSlug,
                callback: function(error, value) {
                    if (error) {
                        reject(error);
                    } else {
                        // console.warn('loadData!', value);
                        // mySaver.data = JSON.parse(value);
                        if (mySaver.data == null) mySaver.data = {};
                        resolve();
                    }
                }
            })
        })
    }

    function get(which) {
        return mySaver.data[which]
    }

    function save(which, what) {
        mySaver.data[which] = what;

        return new Promise(function(resolve, reject) {
            console.warn('savedData!', mySaver.data);
            sdkHandler.trigger('save', {
                key: gameSlug,
                value: JSON.stringify(mySaver.data),
                callback: function(err) {
                    if (err) reject(err);
                    else resolve();
                },
            })
        })
    }

    return mySaver;
})();