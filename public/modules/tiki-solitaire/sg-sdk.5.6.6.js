var sgSettings = {
    config: {
        env: {
            locale: "en",
            ignoreOrientation: true
        },
        rewarded: {
            enabled: false
        }
    }
};
var sdkHandler = {
    _pool: {},
    on: function(eventName, handler){
        if( typeof this._pool[eventName] === 'undefined' ){
            this._pool[eventName] = [];
        }
        console.log("on " + eventName);
        this._pool[eventName].push( handler );
    },
    off: function(eventName, handler){
        if( this._pool[eventName] ){
            var idx = this._pool[eventName].indexOf(handler);
            if( idx > -1 ){
                this._pool[eventName].splice(idx, 1);
                console.log("off " + eventName);
            }
        }
    },
    trigger: function(eventName, data, context){
        if(eventName == 'loading.completed'){
            GameAPI.trackLoadComplete();
        }else if(eventName == 'levelStart'){
            GameAPI.trackLevelStart();
        }

        console.log("trigger " + eventName);
        if( this._pool[eventName] ){
            this._pool[eventName].forEach(function(handler){
                handler.call(context, data);
            });
        }else{
            console.log("trigger no handler");
        }

        if( data && data.callback ){
            data.callback();
        }
    }
};
SG = {
    lang: "en"
}
window.lang = "en";
SG_Hooks = {
    _observer: function(){},
    isEnabledIncentiviseButton: function(){
        return false;
    },
    getStorageItem: function(key){
        console.debug("getStorageItem", key);
        return localStorage.getItem(key);
    },
    setStorageItem: function(key, data){
        console.debug("setStorageItem", key);
        return localStorage.setItem(key, data);
    },
    registerObserver: function(observer){
        console.debug("registerObserver", observer);
        this._observer = observer;
    },
    setOrientationHandler: function(){

    },
    setResizeHandler: function(){},
    setPauseHandler: function(){},
    setUnpauseHandler: function(){},
    freezeGame: function(){
        this._observer({ action: 'pauseGame' });
    },
    unfreezeGame: function(){
        this._observer({ action: 'unpauseGame' });
    },
    runGame: function(){
        this._observer({ action: 'runGame' });
    },
    loaded: function(){
        sdkHandler.trigger('loading.completed');
        SG_Hooks.runGame();
    },
    levelStarted: function(level){
        console.log('[HOOK]: levelStarted', arguments);
        sdkHandler.trigger('levelStart', { level: level });
    },

    levelFinished: function levelFinished(level, score, opponentScore, gameRecord) {
        console.log('[HOOK]: levelFinished', arguments);
        sdkHandler.trigger('levelFinish', { level: level, score: score });
    },
    tutorialFinished: function tutorialFinished() {
        console.log('[HOOK]: tutorialFinished', arguments);
        // sdk.trigger('tutorialFinish')
    },
    levelUp: function levelUp(level, score, callback) {
        console.log('[HOOK]: levelUp', arguments);
        // SG.trigger({ type: 'levelUp', level: level, lastLevelScore: score }, callback)
        sdkHandler.trigger('levelFinish', {
            state: 'win',
            level: level,
            score: score,
            callback: callback
        });
    },
    beforePlayButtonDisplay: function(callback){
        sdkHandler.trigger('beforePlayButtonDisplay');
        callback && callback();
    },
    playButtonPressed: function(callback){
        sdkHandler.trigger('playButtonPressed');
        callback && callback();
    },gameOver: function gameOver(level, score, callback) {
        console.log('[HOOK]: gameOver', arguments);
        // SG.trigger({ type: 'gameOver', score: score, level: level }, callback)
        sdkHandler.trigger('levelFinish', {
            state: 'lose',
            level: level,
            score: score,
            callback: callback
        });
    },

    gameCompleted: function gameCompleted(score, callback) {
        console.log('[HOOK]: gameCompleted', arguments);
        // SG.trigger({ type: 'gameCompleted', score: score }, callback)
    },

    gamePause: function gamePause(state, callback) {
        // state: on|off
        console.log('[HOOK]: gamePause', arguments);
        // SG.trigger({ type: 'gamePause', state: state }, callback)
    },

    gameRestart: function gameRestart(callback) {
        console.log('[HOOK]: gameRestart', arguments);
        // SG.trigger({ type: 'gameRestart' }, callback)
    },

    selectMainMenu: function selectMainMenu(callback) {
        console.log('[HOOK]: selectMainMenu', arguments);
        // SG.trigger({ type: 'selectMainMenu' }, callback)
    },

    selectLevel: function selectLevel(level, callback) {
        console.log('[HOOK]: selectLevel', arguments);
        // SG.trigger({ type: 'selectLevel', level: level }, callback)
    },

    setSound: function setSound(state, callback) {
        // state: on|off
        console.log('[HOOK]: setSound', arguments);
        // SG.trigger({ type: 'gameCompleted', state: state }, callback)
    },

    triggerIncentivise: function triggerIncentivise(callback) {
        console.log('[HOOK]: triggerIncentivise', arguments);
        sdkHandler.trigger('rewardedAd', { callback: callback });
        // SG.trigger({ type: 'incentiviseTriggered' }, callback)
    },
    triggerMoreGames: function triggerMoreGames() {
        console.log('[HOOK]: triggerMoreGames', arguments);
        sdkHandler.trigger('moreGames');
        // SG.redirectToPortal()
    },
}