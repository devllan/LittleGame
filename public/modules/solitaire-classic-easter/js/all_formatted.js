
var R = R || {};
R.BASE_GAME_WIDTH = 1138,
    R.BASE_GAME_HEIGHT = 640,
    R.MAX_GAME_WIDTH = 1138,
    R.MIN_GAME_WIDTH = 830,
    R.MIN_GAME_HEIGHT = 780,
    R.gameWidth = R.BASE_GAME_WIDTH,
    R.gameHeight = R.BASE_GAME_HEIGHT,
    R.halfGameWidth = .5 * R.gameWidth,
    R.halfGameHeight = .5 * R.gameHeight,
    R.prevWindowWidth = 0,
    R.prevWindowHeight = 0,
    R.fontName = "Helvetica",
    R.language = "en",
    R.strings = null,
    R.sfx = {},
    R.playerData = {
        isFirstStart: !0,
        gamesWon1: 0,
        gamesPlayed1: 0,
        bestScore1: 0,
        leastMoves1: 0,
        bestTime1: 0,
        totalTime1: 0,
        gamesWon3: 0,
        gamesPlayed3: 0,
        bestScore3: 0,
        leastMoves3: 0,
        bestTime3: 0,
        totalTime3: 0
    },
    R.saveGame = function() {
        window.famobi.localStorage && window.famobi.localStorage.setItem("SolitaireClassicSaveSata", JSON.stringify(R.playerData))
    }
    ,
    R.loadGame = function() {
        if (window.famobi.localStorage) {
            var a = window.famobi.localStorage.getItem("SolitaireClassicSaveSata");
            a && (R.playerData = JSON.parse(a))
        }
    }
;
var game = null;
window.famobi_onload = function() {
    var a = Phaser.AUTO
        , e = detect.parse(window.navigator.userAgent);
    "SM-T110" != e.device.family && "SM-T111" != e.device.family || (a = Phaser.CANVAS),
        game = new Phaser.Game(R.BASE_GAME_WIDTH,R.BASE_GAME_HEIGHT,a,"gameContainer",BootState)
}
;
var R = R || {};
R.bitmapData = null,
    R.bmdSize = 10,
    R.sceneTransition = function(a, t) {
        R.bitmapData || (R.bitmapData = game.add.bitmapData(R.bmdSize, R.bmdSize),
            R.bitmapData.ctx.beginPath(),
            R.bitmapData.ctx.rect(0, 0, R.bmdSize, R.bmdSize),
            R.bitmapData.ctx.fillStyle = "#000000",
            R.bitmapData.ctx.fill());
        var e = game.add.sprite(0, 0, R.bitmapData);
        e.scale.set(game.width / R.bmdSize, game.height / R.bmdSize),
        t && (e.alpha = 0),
            game.add.tween(e).to({
                alpha: 1 - e.alpha
            }, a, Phaser.Easing.Linear.None, !0).onComplete.add(function() {
                if (t)
                    game.state.start(t);
                else {
                    e.destroy();
                    var a = game.state.getCurrentState();
                    "start"in a && "function" == typeof a.start && a.start()
                }
            })
    }
;
var R = R || {};
R.createText = function(t, o, n, e, i, s, a, u) {
    var h = game.add.text(t, o, e);
    return h.font = R.fontName,
        h.anchor.set(1, .5),
        h.align = "right",
        h.fontSize = n,
        h.fill = i,
        h.fontWeight = "100",
    s && (h.stroke = "#000000",
        h.strokeThickness = a),
    u && (h.wordWrap = !0,
        h.wordWrapWidth = game.width),
        h
}
    ,
    R.SoundButton = function(t, o, n, e) {
        Phaser.Button.call(this, game, t, o, "gui", this.onClick, this, n, n, "sound_button_pushed", n),
            this.anchor.set(.5),
            this.frameOn = n,
            this.frameOff = e,
            this.checkFrame(),
        R.sfx.button && this.setDownSound(R.sfx.button),
            this.exists = game.device.webAudio
    }
    ,
    R.SoundButton.prototype = Object.create(Phaser.Button.prototype),
    R.SoundButton.prototype.constructor = R.SoundButton,
    R.SoundButton.prototype.checkFrame = function() {
        var t = game.sound.mute ? this.frameOff : this.frameOn;
        this.setFrames(t, t, "sound_button_pushed", t)
    }
    ,
    R.SoundButton.prototype.onClick = function() {
        game.sound.mute = !game.sound.mute,
            window.famobi_analytics.trackEvent("EVENT_VOLUMECHANGE", {
                bgmVolume: game.sound.mute ? 0 : 1,
                sfxVolume: game.sound.mute ? 0 : 1
            }),
            this.checkFrame()
    }
    ,
    R.OptionsScreen = function() {
        Phaser.Sprite.call(this, game, 0, 0, null),
            this.bg = game.add.sprite(0, 0, "bg_options"),
            this.bg.anchor.set(.5),
            this.addChild(this.bg),
            this.optionsIcon = game.add.sprite(0, 0, "gui", "options_icon"),
            this.optionsIcon.anchor.set(.5),
            this.addChild(this.optionsIcon);
        var t = game.add.button(0, 0, "gui", this.onLayoutButton, this, "hand_right_button", "hand_right_button", "hand_button_pushed", "hand_right_button");
        t.anchor.set(.5),
        R.sfx.button && t.setDownSound(R.sfx.button),
            this.addChild(t),
            this.layoutButton = t;
        var o = game.add.button(0, 0, "gui", this.onModeButton, this, "mode1_button", "mode1_button", "mode_button_pushed", "mode1_button");
        o.anchor.set(.5),
        R.sfx.button && o.setDownSound(R.sfx.button),
            this.addChild(o),
            this.modeButton = o,
            this.soundButton = new R.SoundButton(0,0,"sound_button_on","sound_button_off"),
            this.addChild(this.soundButton);
        var n = game.add.button(0, 0, "gui", this.onHomeButton, this, "home_button", "home_button", "home_button_pushed", "home_button");
        n.anchor.set(.5),
        R.sfx.button && n.setDownSound(R.sfx.button),
            this.addChild(n),
            this.homeButton = n;
        var e = game.add.button(0, 0, "gui", this.onRestartButton, this, "replay_button", "replay_button", "replay_button_pushed", "replay_button");
        e.anchor.set(.5),
        R.sfx.button && e.setDownSound(R.sfx.button),
            this.addChild(e),
            this.restartButton = e;
        var i = game.add.button(0, 0, "gui", this.onContinueButton, this, "continue_button", "continue_button", "continue_button_pushed", "continue_button");
        i.anchor.set(.5),
        R.sfx.button && i.setDownSound(R.sfx.button),
            this.addChild(i),
            this.continueButton = i;
        var s = game.add.button(0, 0, "gui", this.onTutorialButton, this, "tutorial_button", "tutorial_button", "tutorial_button_pushed", "tutorial_button");
        s.anchor.set(.5),
        R.sfx.button && s.setDownSound(R.sfx.button),
            this.addChild(s),
            this.tutorialButton = s,
            this.label = R.createText(0, 0, 30, R.strings.restart_warning, "#ffffff", !1, 0, !0),
            this.label.anchor.set(.5),
            this.label.align = "center",
            this.addChild(this.label),
            this.label.visible = !1,
            this.tutorialScreen = null,
            this.modeBefore = 0,
            this.exists = !1
    }
    ,
    R.OptionsScreen.prototype = Object.create(Phaser.Sprite.prototype),
    R.OptionsScreen.prototype.constructor = R.OptionsScreen,
    R.OptionsScreen.prototype.resize = function(t, o) {
        this.bg.position.set(.5 * t, .5 * o),
            this.optionsIcon.x = this.bg.x,
            t > o ? (this.bg.rotation = .5 * Math.PI,
                this.optionsIcon.y = 90,
                this.layoutButton.position.set(R.halfGameWidth - 238, R.halfGameHeight - 50),
                this.modeButton.position.set(R.halfGameWidth, R.halfGameHeight - 50),
                this.soundButton.position.set(R.halfGameWidth + 238, R.halfGameHeight - 50),
                this.homeButton.position.set(R.halfGameWidth - 238, R.halfGameHeight + 135),
                this.restartButton.position.set(R.halfGameWidth, R.halfGameHeight + 135),
                this.continueButton.position.set(R.halfGameWidth + 238, R.halfGameHeight + 135),
                this.tutorialButton.position.set(R.halfGameWidth + 268, R.halfGameHeight - 205)) : (this.bg.rotation = 0,
                this.optionsIcon.y = this.bg.y - 320,
                this.layoutButton.position.set(R.halfGameWidth - 150, R.halfGameHeight - 130),
                this.modeButton.position.set(R.halfGameWidth + 150, R.halfGameHeight - 130),
                this.soundButton.position.set(R.halfGameWidth - 150, R.halfGameHeight + 60),
                this.homeButton.position.set(R.halfGameWidth + 150, R.halfGameHeight + 60),
                this.restartButton.position.set(R.halfGameWidth - 150, R.halfGameHeight + 250),
                this.continueButton.position.set(R.halfGameWidth + 150, R.halfGameHeight + 250),
                this.tutorialButton.position.set(R.halfGameWidth + 178, R.halfGameHeight - 290)),
            this.label.position.set(this.bg.x, this.continueButton.y + 120)
    }
    ,
    R.OptionsScreen.prototype.enableButtons = function(t) {
        this.layoutButton.inputEnabled = t,
            this.modeButton.inputEnabled = t,
            this.soundButton.inputEnabled = t,
            this.homeButton.inputEnabled = t,
            this.restartButton.inputEnabled = t,
            this.continueButton.inputEnabled = t,
            this.tutorialButton.inputEnabled = t
    }
    ,
    R.OptionsScreen.prototype.open = function() {
        window.famobi_analytics.trackScreen("SCREEN_SETTINGS"),
            R.layoutRight = !R.layoutRight,
            this.onLayoutButton(),
            this.modeBefore = R.deck.mode,
            R.deck.mode = 1 === R.deck.mode ? 3 : 1,
            this.onModeButton(),
            this.soundButton.checkFrame(),
            game.world.add(this),
            this.exists = !0,
            this.resize(game.width, game.height),
            this.enableButtons(!0)
    }
    ,
    R.OptionsScreen.prototype.onLayoutButton = function() {
        R.layoutRight = !R.layoutRight;
        var t = R.layoutRight ? "hand_right_button" : "hand_left_button";
        this.layoutButton.setFrames(t, t, "hand_button_pushed", t)
    }
    ,
    R.OptionsScreen.prototype.onModeButton = function() {
        R.deck.mode = 1 === R.deck.mode ? 3 : 1;
        var t = 1 === R.deck.mode ? "mode1_button" : "mode3_button";
        this.modeButton.setFrames(t, t, "mode_button_pushed", t),
            this.label.visible = this.modeBefore !== R.deck.mode
    }
    ,
    R.OptionsScreen.prototype.onHomeButton = function() {
        var t = this;
        window.famobi.showAd(function() {
            window.famobi_analytics.trackEvent("EVENT_LEVELFAIL", {
                levelName: R.deck.mode.toString(),
                reason: "quit"
            }),
                t.enableButtons(!1),
                R.sceneTransition(200, "home")
        })
    }
    ,
    R.OptionsScreen.prototype.onRestartButton = function() {
        var t = this;
        window.famobi.showAd(function() {
            window.famobi_analytics.trackEvent("EVENT_LEVELFAIL", {
                levelName: R.deck.mode.toString(),
                reason: "dead"
            }),
                t.enableButtons(!1),
                R.sceneTransition(200, "play")
        })
    }
    ,
    R.OptionsScreen.prototype.onContinueButton = function() {
        var t = this;
        window.famobi.showAd(function() {
            t.enableButtons(!1),
                t.exists = !1,
                game.world.remove(t),
            t.tutorialScreen && (t.tutorialScreen.destroy(),
                t.tutorialScreen = null),
                t.modeBefore === R.deck.mode ? PlayState.onCloseOptionsScreen() : (PlayState.totalStatTracking(t.modeBefore),
                    R.sceneTransition(200, "play"))
        })
    }
    ,
    R.OptionsScreen.prototype.onTutorialButton = function() {
        window.famobi_analytics.trackScreen("SCREEN_TUTORIAL"),
            this.exists = !1,
            game.world.remove(this),
            this.tutorialScreen = new R.TutorialScreen
    }
    ,
    R.OptionsScreen.prototype.closeTutorial = function() {
        window.famobi_analytics.trackScreen("SCREEN_SETTINGS"),
            game.world.removeAll(),
            this.exists = !0,
            game.world.add(this)
    }
;
var BootState = {
    init: function() {
        window.famobi_analytics.trackScreen("SCREEN_SPLASH"),
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL,
            game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL,
            game.scale.forceOrientation(!1, !1),
            game.scale.onSizeChange.add(this.onSizeChange, this),
            game.scale.setResizeCallback(this.onResize, this),
            game.scale.pageAlignHorizontally = !0,
            game.scale.pageAlignVertically = !0,
            document.getElementsByTagName("body")[0].style.backgroundImage = "url(assets/" + (window.famobi_theme ? window.famobi_theme : "") + "dtile.png)",
            game.input.maxPointers = 1,
            game.stage.disableVisibilityChange = !1,
            this.additionalAudioCheck(),
            this.resizeGame()
    },
    preload: function() {
        game.load.atlas("load", "assets/" + (window.famobi_theme ? window.famobi_theme : "") + "atlas_load.png", "assets/atlas_load.json")
    },
    create: function() {
        game.state.add("load", LoadState),
            game.state.add("home", HomeState),
            game.state.add("statistics", StatisticsState),
            game.state.add("play", PlayState),
            game.state.start("load")
    },
    onResize: function() {
        var e = window.innerWidth
            , a = window.innerHeight;
        R.prevWindowWidth == e && R.prevWindowHeight == a || this.onSizeChange();
        var t = document.getElementById(game.parent);
        t.style.width = e + "px",
            t.style.height = a + "px"
    },
    onSizeChange: function() {
        this.resizeGame(),
            game.state.resize(R.gameWidth, R.gameHeight)
    },
    resizeGame: function() {
        var e = window.innerWidth
            , a = window.innerHeight;
        R.prevWindowWidth = e,
            R.prevWindowHeight = a,
            e > a ? (R.gameHeight = R.BASE_GAME_HEIGHT,
                R.gameWidth = R.gameHeight / a * e,
                R.gameWidth > R.MAX_GAME_WIDTH ? R.gameWidth = R.MAX_GAME_WIDTH : R.gameWidth < R.MIN_GAME_WIDTH && (R.gameWidth = R.MIN_GAME_WIDTH)) : (R.gameWidth = R.BASE_GAME_HEIGHT,
                R.gameHeight = R.gameWidth / e * a,
                R.gameHeight > R.MAX_GAME_WIDTH ? R.gameHeight = R.MAX_GAME_WIDTH : R.gameHeight < R.MIN_GAME_HEIGHT && (R.gameHeight = R.MIN_GAME_HEIGHT)),
            R.halfGameWidth = .5 * R.gameWidth,
            R.halfGameHeight = .5 * R.gameHeight,
            game.scale.setGameSize(R.gameWidth, R.gameHeight)
    },
    additionalAudioCheck: function() {
        function e() {
            var e = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
            return e && e[1] < 537
        }
        var a = navigator.userAgent
            , t = /SHL24|SH-01F/i.test(a) && e()
            , i = /SO-04E/i.test(a) && e()
            , n = /F-01F/i.test(a) && e();
        (t || i || n) && (game.device.webAudio = !1)
    }
};
var LoadState = {
    loadText: null,
    logo: null,
    loading: null,
    loadingBar: null,
    init: function() {
        game.load.onFileComplete.add(this.fileComplete, this),
            game.load.onLoadComplete.add(this.loadComplete, this)
    },
    create: function() {
        game.load.json("strings", "assets/strings.json"),
            game.load.image("more_games", window.famobi.getMoreGamesButtonImage()),
            game.load.image("bg_menu", "assets/" + (window.famobi_theme ? window.famobi_theme : "") + "bg/bg_menu.png"),
            game.load.image("bg_main", "assets/" + (window.famobi_theme ? window.famobi_theme : "") + "bg/bg_main.png"),
            game.load.image("bg_main_landscape", "assets/" + (window.famobi_theme ? window.famobi_theme : "") + "bg/bg_main_landscape.png"),
            game.load.image("bg_options", "assets/" + (window.famobi_theme ? window.famobi_theme : "") + "bg/bg_options.png"),
            game.load.atlas("gui", "assets/" + (window.famobi_theme ? window.famobi_theme : "") + "atlas_gui.png", "assets/atlas_gui.json"),
            game.load.image("card_skin1", "assets/" + (window.famobi_theme ? window.famobi_theme : "") + "skin/card_skin1.png"),
            game.load.image("tutorial1", "assets/tutorial1.png"),
            game.load.image("tutorial2", "assets/tutorial2.png");
        for (var a in R.suits)
            for (var e in R.values) {
                var i = R.values[e] + R.suits[a];
                game.load.image(i, "assets/" + (window.famobi_theme ? window.famobi_theme : "") + "deck/" + i + ".png")
            }
        if (game.device.webAudio) {
            var o = ["error", "card", "pick_card", "place_card", "card_to_base", "button", "win", "new_game"];
            for (var t in o)
                game.load.audio(o[t], ["assets/sfx/" + o[t] + ".mp3", "assets/sfx/" + o[t] + ".ogg"])
        }
        this.createEnvironment(),
            game.load.start()
    },
    shutdown: function() {
        this.loadText = null,
            this.logo = null,
            this.loading = null,
            this.loadingBar = null
    },
    createEnvironment: function() {
        game.stage.backgroundColor = window.famobi.__((window.famobi_theme ? window.famobi_theme : "") + "backgroundColor"),
            this.logo = game.add.sprite(0, 0, "load", "logo"),
            this.logo.anchor.set(.5),
            this.loading = game.add.sprite(0, 0, "load", "loading"),
            this.loading.anchor.set(.5),
            this.loadingBar = game.add.sprite(0, 0, "load", "loading-bar");
        var a = new Phaser.Rectangle(0,0,0,32);
        this.loadingBar.crop(a),
            this.loadText = game.add.text(0, 0, "", {
                fill: window.famobi.__((window.famobi_theme ? window.famobi_theme : "") + "loadTextColor")
            }),
            this.loadText.font = R.fontName,
            this.loadText.fontSize = 28,
            this.loadText.anchor.set(.5),
            this.loadText.align = "center",
            this.resize(game.width, game.height)
    },
    resize: function(a, e) {
        this.logo.x = R.halfGameWidth,
            this.logo.y = R.halfGameHeight - 100,
            this.loading.x = R.halfGameWidth,
            this.loading.y = R.halfGameHeight + 150,
            this.loadingBar.x = this.loading.x - 227,
            this.loadingBar.y = this.loading.y - 13,
            this.loadText.x = R.halfGameWidth,
            this.loadText.y = this.loading.y + 4
    },
    fileComplete: function(a, e, i, o, t) {
        this.loadingBar.cropRect.width = 456 * a * .01,
            this.loadingBar.updateCrop(),
            this.loadText.setText(a.toString() + "%")
    },
    loadComplete: function() {
        game.device.webAudio && (R.sfx.button = game.add.audio("button"),
            R.sfx.new_game = game.add.audio("new_game"),
            R.sfx.win = game.add.audio("win"),
            R.sfx.error = game.add.audio("error"),
            R.sfx.card_to_base = game.add.audio("card_to_base"),
            R.sfx.place_card = game.add.audio("place_card"),
            R.sfx.pick_card = game.add.audio("pick_card"),
            R.sfx.card = game.add.audio("card"));
        var a = window.navigator.language;
        a = a ? a : window.navigator.browserLanguage,
            a = a ? a.split("-")[0] : "en";
        var e = game.cache.getJSON("strings");
        R.language = a in e ? a : "en",
            R.strings = e.en;
        var i = null;
        for (var o in R.strings)
            i = window.famobi.__(o),
            i && (R.strings[o] = i);
        R.loadGame(),
            R.sceneTransition(200, "home")
    }
};
var HomeState = {
    tws: [],
    bg: null,
    logo: null,
    buttonPlay: null,
    buttonGames: null,
    buttonStat: null,
    tutorialScreen: null,
    tutorialMode: !1,
    shutdown: function() {
        this.bg = null,
            this.logo = null,
            this.buttonPlay = null,
            this.buttonGames = null,
            this.buttonStat = null,
        this.tutorialScreen && (this.tutorialScreen.destroy(),
            this.tutorialScreen = null),
            this.tws.length = 0
    },
    create: function() {
        window.famobi_analytics.trackScreen("SCREEN_HOME"),
            window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {
                liveScore: 0
            }),
            this.tutorialMode ? (this.tutorialScreen = new R.TutorialScreen,
                this.tutorialMode = !1,
                R.playerData.isFirstStart = !1) : (this.bg = game.add.sprite(0, 0, "bg_menu"),
                this.logo = game.add.sprite(0, 0, "load", "logo"),
                this.logo.anchor.set(.5),
                this.logo.alpha = 0,
                this.buttonPlay = game.add.button(0, 0, "load", this.onPlayButton, this, "play_big_button", "play_big_button", "play_big_button_pushed", "play_big_button"),
                this.buttonPlay.anchor.set(.5),
                this.buttonPlay.scale.set(.95),
                this.buttonPlay.alpha = 0,
            R.sfx.button && this.buttonPlay.setDownSound(R.sfx.button),
                this.buttonGames = game.add.button(0, 0, "more_games", function() {
                    // console.log("moreGamesLink callback");
                    // window.famobi.moreGamesLink()
                }),
                this.buttonGames.anchor.set(.5),
                this.buttonGames.scale.set(.4),
                this.buttonGames.alpha = 0,
            R.sfx.button && this.buttonGames.setDownSound(R.sfx.button),
                this.buttonStat = game.add.button(0, 0, "gui", this.onStatButton, this, "stat_button", "stat_button", "stat_button_pushed", "stat_button"),
                this.buttonStat.anchor.set(.5),
                this.buttonStat.scale.set(.95),
                this.buttonStat.alpha = 0,
            R.sfx.button && this.buttonStat.setDownSound(R.sfx.button),
                this.tws.push(game.add.tween(this.logo).to({
                    alpha: 1
                }, 500, Phaser.Easing.Linear.None, !1, 0)),
                this.tws.push(game.add.tween(this.buttonPlay).to({
                    alpha: 1
                }, 500, Phaser.Easing.Linear.None, !1, 200)),
                this.tws.push(game.add.tween(this.buttonPlay.scale).to({
                    x: 1,
                    y: 1
                }, 1e3, Phaser.Easing.Linear.None, !1, 200, -1, !0)),
                this.tws.push(game.add.tween(this.buttonStat).to({
                    alpha: 1
                }, 500, Phaser.Easing.Linear.None, !1, 400)),
                this.tws.push(game.add.tween(this.buttonGames).to({
                    alpha: 1
                }, 500, Phaser.Easing.Linear.None, !1, 600)),
                this.shakePlayButton()),
            this.resize(game.width, game.height),
            R.sceneTransition(200, null)
    },
    resize: function(t, a) {
        return this.tutorialScreen ? void this.tutorialScreen.resize(t, a) : (this.logo.x = R.halfGameWidth,
            void (t > a ? (this.bg.rotation = Math.PI * -.5,
                this.bg.y = R.BASE_GAME_HEIGHT,
                this.logo.y = 120,
                this.buttonStat.position.set(R.halfGameWidth - 130, R.halfGameHeight + 30),
                this.buttonPlay.position.set(R.halfGameWidth + 130, this.buttonStat.y),
                this.buttonGames.position.set(R.halfGameWidth, a - 100)) : (this.bg.rotation = 0,
                this.bg.y = 0,
                this.logo.y = .5 * (R.halfGameHeight - 100),
                this.buttonPlay.position.set(R.halfGameWidth, R.halfGameHeight - 30),
                this.buttonGames.position.set(R.halfGameWidth, a - 75),
                this.buttonStat.position.set(R.halfGameWidth, this.buttonPlay.y + .57 * (this.buttonGames.y - this.buttonPlay.y)))))
    },
    start: function() {
        for (var t in this.tws)
            this.tws[t].start()
    },
    shakePlayButton: function() {
        this.buttonPlay.rotation = 0,
            game.time.events.add(3e3, function() {
                this.buttonPlay.rotation = -.05;
                var t = game.add.tween(this.buttonPlay).to({
                    rotation: .05
                }, 50, Phaser.Easing.Linear.None, !0, 0, 8, !0);
                t.onComplete.add(this.shakePlayButton, this)
            }, this)
    },
    onPlayButton: function() {
        this.buttonPlay.inputEnabled = !1,
            this.buttonStat.inputEnabled = !1,
            R.sceneTransition(200, "play")
    },
    onCloseTutotial: function() {
        R.sceneTransition(200, "play")
    },
    onStatButton: function() {
        this.buttonPlay.inputEnabled = !1,
            this.buttonStat.inputEnabled = !1,
            R.sceneTransition(200, "statistics")
    }
};
var StatisticsState = {
    bg: null,
    gLabels: null,
    gLeft: 0,
    buttonBack: null,
    shutdown: function() {
        this.bg = null,
            this.gLabels = null,
            this.buttonBack = null
    },
    create: function() {
        window.famobi_analytics.trackScreen("SCREEN_OTHER", "SCREEN_STATISTICS"),
            this.bg = game.add.sprite(0, 0, "bg_menu"),
            this.gLabels = game.add.group();
        var t = game.add.graphics(0, 0);
        this.gLabels.add(t);
        var e = 28
            , i = "#ffffff"
            , a = ["games_won", "games_played", "best_score", "least_moves", "best_time", "total_time"]
            , s = 136
            , n = 0
            , o = [];
        for (var h in a) {
            var l = this.createLabel(0, s, e, i, R.strings[a[h]]);
            l.width > n && (n = l.width),
                o.push(l),
                s += 50
        }
        var r = this.createLabel(n, 90, e, i, R.strings.card1)
            , g = this.createLabel(r.x + 150, r.y, e, i, R.strings.card3)
            , b = ["gamesWon", "gamesPlayed", "bestScore", "leastMoves", "bestTime", "totalTime"]
            , c = n * -.5 - 10
            , u = g.x + .5 * g.width + 10
            , d = this.createLabel(.5 * this.gLabels.width + c + 10, 30, e, i, R.strings.statistics);
        e = 24;
        for (var h in o) {
            var m = R.playerData[b[h] + "1"]
                , L = R.playerData[b[h] + "3"];
            4 != h && 5 != h || (m = this.getTimeString(m),
                L = this.getTimeString(L)),
                this.createLabel(r.x, o[h].y, e, i, m.toString()),
                this.createLabel(g.x, o[h].y, e, i, L.toString())
        }
        var f = d.y + 30
            , T = this.gLabels.height
            , S = .5 * r.x + 30;
        t.lineStyle(4, 16777215),
            t.moveTo(c, f),
            t.lineTo(u, f),
            t.moveTo(S, f),
            t.lineTo(S, T),
            S = r.x + .5 * (r.width + (g.x - .5 * g.width - r.x - .5 * r.width)),
            t.moveTo(S, f),
            t.lineTo(S, T),
            t.lineStyle(2, 16777215),
            t.moveTo(c, 0),
            t.lineTo(u, 0),
            t.lineTo(u, T),
            t.lineTo(c, T),
            t.lineTo(c, 0);
        var y = game.add.button(0, 0, "gui", this.onBackButton, this, "continue_button", "continue_button", "continue_button_pushed", "continue_button");
        y.anchor.set(.5),
            y.scale.set(-.76, .76),
        R.sfx.button && y.setDownSound(R.sfx.button),
            this.buttonBack = y,
            this.gLeft = -c,
            this.resize(game.width, game.height),
            R.sceneTransition(200, null)
    },
    getTimeString: function(t) {
        var e = t / 3600
            , i = Math.floor(e)
            , a = 60 * (e - i)
            , s = Math.floor(a)
            , n = Math.floor(60 * (a - s) + .5)
            , o = i.toString() + ":";
        return s < 10 && (o += "0"),
            o += s.toString() + ":",
        n < 10 && (o += "0"),
            o += n.toString()
    },
    createLabel: function(t, e, i, a, s) {
        var n = R.createText(t, e, i, s, a, !1, 0, !1);
        return n.anchor.set(.5),
            n.align = "center",
            this.gLabels.add(n),
            n
    },
    resize: function(t, e) {
        this.gLabels.x = .5 * (t - this.gLabels.width) + this.gLeft,
            this.buttonBack.x = R.halfGameWidth,
            t > e ? (this.bg.rotation = Math.PI * -.5,
                this.bg.y = R.BASE_GAME_HEIGHT,
                this.gLabels.y = 10,
                this.buttonBack.y = this.gLabels.y + this.gLabels.height + 70) : (this.bg.rotation = 0,
                this.bg.y = 0,
                this.gLabels.y = .5 * (e - this.gLabels.height) - 100,
                this.buttonBack.y = this.gLabels.y + this.gLabels.height + 100)
    },
    onBackButton: function() {
        this.buttonBack.inputEnabled = !1,
            R.sceneTransition(200, "home")
    }
};
var PlayState = {
    bg: null,
    bg_portrait: null,
    bg_landscape: null,
    buttonOptions: null,
    retryButton: null,
    iconPoints: null,
    iconTime: null,
    iconMoves: null,
    labelScore: null,
    labelTime: null,
    labelMoves: null,
    cardPicked: null,
    prevCardPicked: null,
    baseCardPosition: null,
    pointerOffset: null,
    displayScore: 0,
    moves: 0,
    timePick: 0,
    AUTO_PUT_DELAY: .4,
    allPlayObjects: [],
    optionsScreen: null,
    teDecreaseScore: null,
    shutdown: function() {
        1 === R.deck.state && (this.totalStatTracking(R.deck.mode),
            R.saveGame()),
            this.allPlayObjects.length = 0,
            this.bg = null,
            this.buttonOptions = null,
            this.retryButton = null,
            this.iconPoints = null,
            this.iconTime = null,
            this.iconMoves = null,
            this.labelScore = null,
            this.labelTime = null,
            this.labelMoves = null,
            this.cardPicked = null,
            this.prevCardPicked = null,
            this.baseCardPosition = null,
            this.pointerOffset = null,
            this.optionsScreen = null,
            this.teDecreaseScore = null,
            R.deck.shutdown()
    },
    create: function() {
        window.famobi_analytics.trackScreen("SCREEN_LEVEL"),
            window.famobi_analytics.trackEvent("EVENT_LEVELSTART", {
                levelName: R.deck.mode.toString()
            }),
            this.baseCardPosition = new Phaser.Point(0,0),
            this.bg_portrait = game.add.sprite(0, 0, "bg_main"),
            this.bg_portrait.visible = !1,
            this.bg_landscape = game.add.sprite(0, 0, "bg_main_landscape"),
            this.bg_landscape.visible = !1,
            "landscape" == window.famobi.getOrientation() ? this.bg = this.bg_landscape : this.bg = this.bg_portrait,
            this.bg.visible = !0,
            this.buttonOptions = game.add.button(0, 0, "gui", this.onOptionsButton, this, "options_button", "options_button", "options_button_pushed", "options_button"),
            this.buttonOptions.anchor.set(.5),
        R.sfx.button && this.buttonOptions.setDownSound(R.sfx.button),
            this.retryButton = game.add.button(0, 0, "gui", R.moveSaver.undo, R.moveSaver, "retry_button", "retry_button", "retry_button_pushed", "retry_button"),
            this.retryButton.anchor.set(.5),
            this.iconPoints = game.add.sprite(0, 0, "gui", "points_icon"),
            this.iconPoints.anchor.set(.5),
            this.iconTime = game.add.sprite(0, 0, "gui", "time_icon"),
            this.iconTime.anchor.set(.5),
            this.iconMoves = game.add.sprite(0, 0, "gui", "moves_button"),
            this.iconMoves.anchor.set(.5),
            this.labelScore = R.createText(0, 0, 30, "0", "#ffffff"),
            this.labelTime = new R.Clock(0,0,30,"#ffffff"),
            game.world.add(this.labelTime),
            this.labelMoves = R.createText(0, 0, 30, "0", "#ffffff"),
            R.deck.init(),
            this.optionsScreen = new R.OptionsScreen,
            this.resize(game.width, game.height),
            R.sceneTransition(200, null),
        R.sfx.new_game && R.sfx.new_game.play()
    },
    resize: function(t, e) {
        return this.bg.visible = !1,
            this.optionsScreen.exists ? void this.optionsScreen.resize(t, e) : this.optionsScreen.tutorialScreen ? void this.optionsScreen.tutorialScreen.resize(t, e) : (t > e ? (this.bg = this.bg_landscape,
                this.bg.rotation = Math.PI * -.5,
                this.bg.y = R.BASE_GAME_HEIGHT,
                this.buttonOptions.position.set(93, 130),
                this.retryButton.position.set(93, 515),
                this.iconPoints.position.set(50, 287),
                this.iconTime.position.set(50, 341),
                this.iconMoves.position.set(50, 391)) : (this.bg = this.bg_portrait,
                this.bg.rotation = 0,
                this.bg.y = 0,
                this.buttonOptions.position.set(93, 92),
                this.retryButton.position.set(546, 93),
                this.iconPoints.position.set(264, 50),
                this.iconTime.position.set(264, 104),
                this.iconMoves.position.set(264, 154)),
                this.bg.visible = !0,
                this.labelScore.position.set(this.iconPoints.x + 120, this.iconPoints.y + 4),
                this.labelTime.position.set(this.iconTime.x + 120, this.iconTime.y + 6),
                this.labelMoves.position.set(this.iconMoves.x + 120, this.iconMoves.y + 2),
                void R.deck.resize(t, e))
    },
    inputOnDown: function(t, e) {
        if (0 === R.deck.state)
            return R.deck.state = 1,
                void this.resize(game.width, game.height);
        if (game.tweens._tweens.length > 0)
            return void (R.sfx.error && R.sfx.error.play());
        var i = R.deck.pick(t.x, t.y);
        i && i.parent === game.world && (game.device.desktop && i === this.prevCardPicked && game.time.totalElapsedSeconds() - this.timePick < this.AUTO_PUT_DELAY ? (this.prevCardPicked = null,
            R.deck.autoPut(i)) : (i.setOnTop(),
            this.pointerOffset = Phaser.Point.subtract(i, t),
            this.cardPicked = i,
            this.baseCardPosition.set(i.x, i.y),
            this.timePick = game.time.totalElapsedSeconds(),
        R.sfx.pick_card && R.sfx.pick_card.play()))
    },
    inputOnUp: function(t, e) {
        this.cardPicked && (!game.device.desktop && Phaser.Point.distance(this.cardPicked, this.baseCardPosition) < 5 ? R.deck.autoPut(this.cardPicked) : R.deck.put(this.cardPicked, game.time.totalElapsedSeconds() - this.timePick > .25),
            this.prevCardPicked = this.cardPicked,
            this.cardPicked = null)
    },
    start: function() {
        R.deck.start(),
            game.input.onDown.add(this.inputOnDown, this),
            game.input.onUp.add(this.inputOnUp, this)
    },
    beginPlay: function() {
        R.deck.state = 1,
            R.score = 0,
            window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {
                liveScore: R.score
            }),
            this.displayScore = 0,
            this.moves = 0,
            this.timePick = 0,
            R.moveSaver.reset(),
            this.labelTime.reset(!0),
            this.teDecreaseScore = game.time.events.loop(3e4, R.scoreChange, R, -5),
            game.time.events.loop(75, this.updateLabelScore, this)
    },
    update: function() {
        this.cardPicked && this.cardPicked.setPosition(game.input.activePointer.x + this.pointerOffset.x, game.input.activePointer.y + this.pointerOffset.y)
    },
    updateLabelScore: function() {
        // window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {
        //     liveScore: R.score
        // }),
            this.labelScore.text = R.score.toString()
    },
    onOptionsButton: function() {
        this.labelTime.pause(!0),
            game.input.onDown.remove(this.inputOnDown, this),
            game.input.onUp.remove(this.inputOnUp, this),
            R.deck.state = 1,
            this.resize(game.width, game.height);
        for (var t = game.world.children.length; t--; )
            this.allPlayObjects.push(game.world.children[t]);
        game.world.removeAll(!1, !0),
            this.optionsScreen.open()
    },
    onCloseOptionsScreen: function() {
        window.famobi_analytics.trackScreen("SCREEN_LEVEL");
        for (var t = this.allPlayObjects.length; t--; )
            game.world.add(this.allPlayObjects[t]);
        this.allPlayObjects.length = 0,
            this.resize(game.width, game.height),
            game.input.onDown.add(this.inputOnDown, this),
            game.input.onUp.add(this.inputOnUp, this),
            this.labelTime.pause(!1)
    },
    onCloseTutotial: function() {
        this.optionsScreen && this.optionsScreen.closeTutorial()
    },
    move: function() {
        ++this.moves,
            this.labelMoves.text = this.moves.toString()
    },
    totalStatTracking: function(t) {
        var e = t.toString();
        ++R.playerData["gamesPlayed" + e],
            R.playerData["totalTime" + e] += this.labelTime.getTotalSeconds(),
            R.deck.state = 0
    },
    win: function() {
        game.input.onDown.remove(this.inputOnDown, this),
            game.input.onUp.remove(this.inputOnUp, this),
            game.time.events.remove(this.teDecreaseScore),
            this.labelTime.stopTick(),
            this.buttonOptions.inputEnabled = !1,
            this.retryButton.inputEnabled = !1,
            this.teDecreaseScore = game.time.events.loop(100, this.updateWon, this),
            game.time.events.add(500, function() {
                game.input.onDown.add(this.inputOnDownWin, this)
            }, this),
        R.sfx.win && R.sfx.win.play()
    },
    inputOnDownWin: function(t, e) {
        this.closeWin()
    },
    updateWon: function() {
        0 === R.flyCards && game.world.children.length < 27 && this.closeWin()
    },
    closeWin: function() {
        window.famobi_analytics.trackEvent("EVENT_LEVELSUCCESS", {
            levelName: R.deck.mode.toString()
        });
        var t = R.deck.mode.toString();
        ++R.playerData["gamesWon" + t],
        R.playerData["bestScore" + t] < R.score && (R.playerData["bestScore" + t] = R.score),
        (0 === R.playerData["leastMoves" + t] || R.playerData["leastMoves" + t] > this.moves) && (R.playerData["leastMoves" + t] = this.moves);
        var e = this.labelTime.getTotalSeconds();
        (0 === R.playerData["bestTime" + t] || R.playerData["bestTime" + t] > e) && (R.playerData["bestTime" + t] = e),
            window.famobi_analytics.trackEvent("EVENT_TOTALSCORE", {
                totalScore: R.score
            }),
            game.input.onDown.remove(this.inputOnDownWin, this),
            game.time.events.remove(this.teDecreaseScore),
            R.sceneTransition(200, "home")
    }
};
var R = R || {};
R.Clock = function(t, s, e, i) {
    Phaser.Text.call(this, game, t, s, "0:00"),
        this.font = R.fontName,
        this.anchor.set(1, .5),
        this.align = "right",
        this.fontSize = e,
        this.fill = i,
        this.fontWeight = "100",
        this.minutes = 0,
        this.seconds = 0,
        this.timer = game.time.add(new Phaser.Timer(game,(!0))),
        this.timer.loop(1e3, this.updateTime, this),
        this.timer.stop(!1)
}
    ,
    R.Clock.prototype = Object.create(Phaser.Text.prototype),
    R.Clock.prototype.constructor = R.Clock,
    R.Clock.prototype.reset = function(t) {
        this.seconds = this.minutes = 0,
        t && (this.timer.start(),
            this.text = "0:00")
    }
    ,
    R.Clock.prototype.updateTime = function() {
        60 === ++this.seconds && (this.seconds = 0,
            ++this.minutes);
        var t = this.minutes.toString() + ":";
        this.seconds < 10 && (t += "0"),
            t += this.seconds.toString(),
            this.text = t
    }
    ,
    R.Clock.prototype.stopTick = function() {
        this.timer.stop(!1)
    }
    ,
    R.Clock.prototype.pause = function(t) {
        t ? this.timer.pause() : this.timer.resume()
    }
    ,
    R.Clock.prototype.getTotalSeconds = function() {
        return 60 * this.minutes + this.seconds
    }
;
var R = R || {};
R.suits = ["c", "d", "h", "s"],
    R.values = ["a", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"],
    R.layoutRight = !0,
    R.wCard = 86,
    R.hCard = 118,
    R.xColumnDistance = 5,
    R.hCardOffsetClose = 12,
    R.hCardOffsetOpen = 30,
    R.flyCards = 0,
    R.score = 0,
    R.scoreChange = function(t) {
        R.score += t,
        R.score < 0 && (R.score = 0)
    }
    ,
    R.CardData = function(t, e) {
        this.si = 1 * t,
            this.vi = 1 * e,
            this.suit = R.suits[t],
            this.value = R.values[e],
            this.name = this.value + this.suit
    }
    ,
    R.CardData.prototype = {},
    R.CardData.prototype.constructor = R.CardData,
    R.Card = function(t) {
        Phaser.Sprite.call(this, game, 0, 0, "card_skin1"),
            this.cardData = t,
            this.isOpen = !1,
            this.under = null,
            this.over = null,
            this.column = null,
            this.prevOwner = null,
            this.isColumnNotMoved = !0,
            this.isHomeNotMoved = !0,
            this.tween = null
    }
    ,
    R.Card.prototype = Object.create(Phaser.Sprite.prototype),
    R.Card.prototype.constructor = R.Card,
    R.Card.prototype.open = function(t, e) {
        this.isOpen = t,
            e ? (this.anchor.set(.5),
                this.x += .5 * this.width,
                this.y += .5 * this.height,
                this.tween = game.add.tween(this.scale).to({
                    x: .1,
                    y: 1.2
                }, 100, Phaser.Easing.Linear.None, !0),
                this.tween.onComplete.add(function(t) {
                    this.loadTexture(t ? this.cardData.name : "card_skin1"),
                        this.tween = game.add.tween(this.scale).to({
                            x: 1,
                            y: 1
                        }, 100, Phaser.Easing.Linear.None, !0),
                        this.tween.onComplete.add(function() {
                            this.tween = null,
                                this.anchor.set(0),
                                this.x -= .5 * this.width,
                                this.y -= .5 * this.height
                        }, this)
                }, this, t)) : this.loadTexture(t ? this.cardData.name : "card_skin1")
    }
    ,
    R.Card.prototype.add = function(t) {
        t.under = this,
            this.over = t,
            t.makeTween(this.x, this.y + (this.isOpen ? R.hCardOffsetOpen : R.hCardOffsetClose), 0)
    }
    ,
    R.Card.prototype.makeTween = function(t, e, i) {
        var s = {
            x: t,
            y: e
        }
            , o = Phaser.Point.distance(this, s) / 1.6;
        o < 1 && (o = 1),
            this.tween = game.add.tween(this).to(s, o, Phaser.Easing.Linear.None, !0, i),
            this.tween.onComplete.add(function() {
                this.tween = null
            }, this),
        this.over && this.oversToChildren(),
        R.sfx.card && this.tween.onStart.add(function() {
            R.sfx.card.play()
        }, this),
        R.sfx.place_card && this.tween.onComplete.add(function() {
            R.sfx.place_card.play()
        }, this)
    }
    ,
    R.Card.prototype.oversToChildren = function() {
        for (var t = this.over, e = 1; t; )
            t.position.set(0, R.hCardOffsetOpen * e++),
                this.addChild(t),
                t = t.over;
        this.tween.onComplete.add(this.recoverOvers, this)
    }
    ,
    R.Card.prototype.recoverOvers = function() {
        this.removeChildren();
        for (var t = this.over; t; )
            game.world.add(t),
                t = t.over;
        this.setPosition(this.x, this.y)
    }
    ,
    R.Card.prototype.setPosition = function(t, e) {
        this.tween && (this.bringToTop(),
            this.tween.stop(!0)),
            this.position.set(t, e);
        for (var i = this.over; i; )
            i.tween && (i.bringToTop(),
                i.tween.stop(!0)),
                i.position.set(t, i.under.y + (i.under.isOpen ? R.hCardOffsetOpen : R.hCardOffsetClose)),
                i = i.over
    }
    ,
    R.Card.prototype.setOnTop = function() {
        this.bringToTop();
        for (var t = this.over; t; )
            t.bringToTop(),
                t = t.over
    }
    ,
    R.Card.prototype.startWinAnim = function() {
        this.vY = -3,
            this.vX = R.layoutRight ? 1.5 : -1.5,
            this.anchor.x = .5,
            this.x += .5 * this.width,
            ++R.flyCards,
            game.world.addAt(this, 20),
            this.update = this.updateWinAnim
    }
    ,
    R.Card.prototype.updateWinAnim = function() {
        this.x += this.vX,
            this.y += this.vY,
            this.vY += .1;
        var t = this.y + this.height * this.scale.y;
        if (t > game.height) {
            if (this.scale.y = (this.height * this.scale.y - t + game.height) / this.height,
            this.scale.y < .5) {
                for (var e = game.device.desktop ? 1 * this.cardData.vi + 1 : 1; e--; )
                    new R.ParticleSuit(this);
                --R.flyCards,
                    game.world.remove(this, !0)
            }
            this.scale.x = 2 - this.scale.y
        }
    }
    ,
    R.Column = function() {
        Phaser.Sprite.call(this, game, 0, 0, "gui", "card_place"),
            this.bottomCard = null,
            this.topCard = null,
            game.world.add(this)
    }
    ,
    R.Column.prototype = Object.create(Phaser.Sprite.prototype),
    R.Column.prototype.constructor = R.Column,
    R.Column.prototype.setPosition = function(t, e) {
        this.position.set(t, e),
        this.bottomCard && this.bottomCard.setPosition(t, e)
    }
    ,
    R.Column.prototype.add = function(t, e) {
        if (t.column && t.column.remove(t),
            this.topCard ? this.topCard.add(t) : (t.makeTween(this.x, this.y, 0),
                t.tween.onComplete.add(function() {
                    this.visible = !1
                }, this),
                this.bottomCard = t),
            t.tween.onComplete.add(R.deck.isAllSorted, R.deck),
            t.over)
            for (var i = t.over; i; )
                this.topCard = i,
                    i.column = this,
                    i = i.over;
        else
            this.topCard = t;
        t.column = this,
        1 === R.deck.state && t.isColumnNotMoved && (t.isColumnNotMoved = !1,
            R.scoreChange(5)),
        t.prevOwner && t.prevOwner !== R.deck.srcOpen && (t.prevOwner = null,
            t.isHomeNotMoved = !0,
            R.scoreChange(-15))
    }
    ,
    R.Column.prototype.remove = function(t) {
        this.topCard = t.under,
            this.topCard ? (this.topCard.over = null,
            this.topCard.isOpen || this.topCard.open(!0, !0)) : this.bottomCard = null,
            t.under = null,
            t.column = null
    }
    ,
    R.Column.prototype.pick = function(t, e) {
        for (var i = this.topCard; i && i.isOpen; ) {
            if (i.getBounds().contains(t, e))
                return i === this.bottomCard && (this.visible = !0),
                    i;
            i = i.under
        }
        return null
    }
    ,
    R.Column.prototype.autoPlacePick = function() {
        var t = this.topCard;
        return t === this.bottomCard && (this.visible = !0),
            this.remove(t),
            t
    }
    ,
    R.Column.prototype.checkCard = function(t) {
        if (this.topCard) {
            var e = !1;
            switch (this.topCard.cardData.suit) {
                case "s":
                    e = "h" === t.suit || "d" === t.suit;
                    break;
                case "c":
                    e = "h" === t.suit || "d" === t.suit;
                    break;
                case "h":
                    e = "s" === t.suit || "c" === t.suit;
                    break;
                case "d":
                    e = "s" === t.suit || "c" === t.suit
            }
            return e && t.vi + 1 === this.topCard.cardData.vi
        }
        return "k" === t.value
    }
    ,
    R.Column.prototype.isSorted = function() {
        for (var t = this.bottomCard; t; ) {
            if (!t.isOpen)
                return !1;
            t = t.over
        }
        return !0
    }
    ,
    R.SuitDeck = function() {
        Phaser.Sprite.call(this, game, 0, 0, "gui", "card_place"),
            this.pile = [],
            this.topCard = null,
            game.world.add(this)
    }
    ,
    R.SuitDeck.prototype = Object.create(Phaser.Sprite.prototype),
    R.SuitDeck.prototype.constructor = R.SuitDeck,
    R.SuitDeck.prototype.add = function(t) {
        this.topCard = t,
            this.pile.push(t),
            t.makeTween(this.x, this.y, 0),
            t.tween.onComplete.add(function() {
                this.topCard.column && this.topCard.column.remove(this.topCard),
                    game.world.remove(this.topCard),
                    this.loadTexture(this.topCard.cardData.name),
                    R.deck.isWin(),
                    R.deck.isAllSorted()
            }, this),
        t.isHomeNotMoved && (t.isColumnNotMoved = !1,
            t.isHomeNotMoved = !1,
            R.scoreChange(15)),
            t.prevOwner = this,
        R.sfx.card_to_base && R.sfx.card_to_base.play()
    }
    ,
    R.SuitDeck.prototype.autoPlaceAdd = function(t, e) {
        this.topCard = t,
            this.pile.push(t),
            t.makeTween(this.x, this.y, e),
            t.tween.onStart.add(t.bringToTop, t),
            t.tween.onComplete.add(function(t) {
                game.world.remove(t),
                    this.loadTexture(t.cardData.name),
                    PlayState.displayScore += 14,
                    R.score += 15
            }, this, t)
    }
    ,
    R.SuitDeck.prototype.pick = function(t, e) {
        if (this.topCard && this.getBounds().contains(t, e)) {
            var i = this.topCard;
            return this.pile.pop(),
                this.pile.length > 0 ? (this.topCard = this.pile[this.pile.length - 1],
                    this.loadTexture(this.topCard.cardData.name)) : (this.loadTexture("gui", "card_place"),
                    this.topCard = null),
                i.position.set(this.x, this.y),
                game.world.add(i),
                i
        }
        return null
    }
    ,
    R.SuitDeck.prototype.startWin = function() {
        var t = this.pile.pop();
        t.position.set(this.x, this.y),
            t.startWinAnim(),
            this.pile.length > 0 ? (game.time.events.add(500, this.startWin, this),
                this.loadTexture(t.cardData.name)) : this.loadTexture("gui", "card_place")
    }
    ,
    R.SuitDeck.prototype.checkCard = function(t) {
        return this.topCard ? this.topCard.cardData.si === t.si && t.vi - 1 === this.topCard.cardData.vi : 0 === t.vi
    }
    ,
    R.moveSaver = {
        card: null,
        under: null,
        column: null,
        prevOwner: null,
        isColumnNotMoved: !1,
        isHomeNotMoved: !1,
        underIsOpen: !1,
        reset: function() {
            this.card = null,
                this.under = null
        },
        save: function(t) {
            this.card = t,
                this.column = t.column,
                this.prevOwner = t.prevOwner,
                this.isColumnNotMoved = t.isColumnNotMoved,
                this.isHomeNotMoved = t.isHomeNotMoved,
                this.under = t.under,
            t.under && (this.underIsOpen = t.under.isOpen)
        },
        undo: function() {
            var t = this;
            window.famobi.showAd(function() {
                t.reallyUndo()
            })
        },
        reallyUndo: function() {
            return game.tweens._tweens.length > 0 || !this.card ? void (R.sfx.error && R.sfx.error.play()) : (this.card.column ? this.card.column.pick(this.card.x + 5, this.card.y + 5) : this.card.prevOwner && this.card.prevOwner !== R.deck.srcOpen && this.card.prevOwner.pick(this.card.x + 5, this.card.y + 5),
                this.column ? (this.under && this.under.open(this.underIsOpen, !1),
                    this.column.add(this.card, 0),
                    this.card.bringToTop(),
                !this.isColumnNotMoved || this.card.prevOwner && this.card.prevOwner !== R.deck.srcOpen || R.scoreChange(-5)) : this.prevOwner ? (this.prevOwner === R.deck.srcOpen ? (this.card.column ? (this.card.column.remove(this.card),
                    this.card.column = null,
                    R.scoreChange(-5)) : R.scoreChange(-15),
                    R.deck.backToSrcOpen(this.card)) : this.prevOwner.add(this.card),
                    this.card.prevOwner = this.prevOwner) : R.deck.popBackToSrcClose(),
                this.card.isColumnNotMoved = this.isColumnNotMoved,
                this.card.isHomeNotMoved = this.isHomeNotMoved,
                this.reset(),
                void PlayState.move())
        }
    },
    R.ParticleSuit = function(t) {
        var e = "";
        switch (t.cardData.suit) {
            case "c":
                e = "clubs";
                break;
            case "d":
                e = "diamonds";
                break;
            case "h":
                e = "hearts";
                break;
            case "s":
                e = "spades"
        }
        Phaser.Sprite.call(this, game, t.x, t.y, "gui", e),
            this.anchor.set(.5),
            this.dx = game.rnd.between(.5, 2),
        game.rnd.between(0, 1) && (this.dx = -this.dx),
            this.dy = -game.rnd.between(4, 8),
            this.g = game.rnd.realInRange(.05, .2),
            this.dr = game.rnd.realInRange(.05, .1),
        game.rnd.between(0, 1) && (this.dr = -this.dr),
            this.s = game.rnd.realInRange(.3, .8),
            this.cs = this.s,
            this.ds = game.rnd.realInRange(.01, .06),
            this.dsx = game.rnd.between(0, 1),
            this.scale.set(this.s),
            game.world.add(this)
    }
    ,
    R.ParticleSuit.prototype = Object.create(Phaser.Sprite.prototype),
    R.ParticleSuit.prototype.constructor = R.ParticleSuit,
    R.ParticleSuit.prototype.update = function() {
        this.x += this.dx,
            this.y += this.dy,
            this.rotation += this.dr,
            this.dy += this.g,
            this.cs -= this.ds,
        this.cs < -this.s && (this.cs = this.s),
            this.dsx ? this.scale.x = this.cs : this.scale.y = this.cs,
        this.y - this.height > game.height && game.world.remove(this, !0)
    }
;
var R = R || {};
R.deck = {
    cards: [],
    cardsOpen: [],
    columns: [],
    srcPlace: null,
    srcOpen: null,
    state: 0,
    mode: 1,
    currentOpenCards: 0,
    suitDecks: [],
    shutdown: function() {
        this.cards.length = 0,
            this.columns.length = 0,
            this.suitDecks.length = 0,
            this.cardsOpen.length = 0,
            this.srcPlace = null,
            this.srcOpen = null,
            this.state = 0,
            this.currentOpenCards = 0
    },
    init: function() {
        for (var s = 0; s < 4; s++)
            this.suitDecks.push(new R.SuitDeck);
        for (var s = 0; s < 7; s++)
            this.columns.push(new R.Column);
        this.srcPlace = game.add.sprite(0, 0, "gui", "card_place"),
            this.srcPlace.visible = !1,
            this.srcOpen = game.add.sprite(0, 0, null),
            this.srcOpen.visible = !1;
        var e = [];
        for (var t in R.suits)
            for (var r in R.values)
                e.push(new R.CardData(t,r));
        for (var i = e.length; i--; ) {
            var s = game.rnd.between(0, e.length - 1)
                , n = new R.Card(e[s]);
            this.cards.push(n),
                game.world.add(n),
                e.splice(s, 1)
        }
    },
    resize: function(s, e) {
        var t = 0
            , r = 0
            , i = 0
            , n = 0;
        if (s > e ? (t = .5 * (s + 192 - (7 * R.wCard + 6 * R.xColumnDistance)),
            r = 200,
            n = 70) : (t = .5 * (s - (7 * R.wCard + 6 * R.xColumnDistance)),
            r = 332,
            n = 202),
            R.layoutRight) {
            for (var a in this.columns)
                this.columns[a].setPosition(t, r),
                    t += R.wCard + R.xColumnDistance;
            i = this.columns[0].x
        } else {
            for (var a = this.columns.length; a--; )
                this.columns[a].setPosition(t, r),
                    t += R.wCard + R.xColumnDistance;
            i = this.columns[3].x
        }
        for (var a in this.suitDecks)
            this.suitDecks[a].position.set(i, n),
                i += R.wCard + R.xColumnDistance;
        this.srcPlace.position.set(this.columns[0 === this.state ? 4 : 6].x, n),
            this.srcOpen.position.set(this.columns[5].x, n),
        3 === this.mode && this.fixSrcOpen3Pos();
        for (var a in this.cards)
            this.cards[a].tween && this.cards[a].tween.stop(!0),
                this.cards[a].position.set(this.srcPlace.x, this.srcPlace.y)
    },
    start: function() {
        for (var s = [1, 2, 3, 4, 5, 6, 7], e = [0, 0, 0, 0, 0, 0, 0], t = 28, r = 0, i = 0; i < t; )
            for (var n in this.columns)
                if (e[n] !== s[n]) {
                    var a = this.cards.pop();
                    e[n] === s[n] - 1 && a.open(!0),
                        this.columns[n].add(a, r),
                        a.tween.stop(!1),
                        a.makeTween(this.columns[n].x, this.columns[n].y + R.hCardOffsetClose * e[n], r),
                        a.tween.onStart.add(a.bringToTop, a),
                        r += 100,
                        ++e[n],
                        ++i
                }
        this.srcPlace.x = this.columns[6].x;
        for (var i in this.cards)
            this.cards[i].makeTween(this.srcPlace.x, this.srcPlace.y, r),
                r += 10;
        this.cards[this.cards.length - 1].tween.onComplete.add(this.beginPlay, this)
    },
    beginPlay: function() {
        for (var s = this.cards.length; s--; )
            game.world.remove(this.cards[s]);
        this.srcPlace.loadTexture("card_skin1"),
            this.srcPlace.visible = !0,
            PlayState.beginPlay()
    },
    pick: function(s, e) {
        var t = null;
        if (e < this.columns[0].y) {
            if (this.cardsOpen.length > 0 && this.srcOpen.getBounds().contains(s, e)) {
                if (t = this.cardsOpen.pop(),
                    t.position.set(this.srcOpen.x, this.srcOpen.y),
                this.cardsOpen.length > 0) {
                    var r = this.cardsOpen[this.cardsOpen.length - 1];
                    this.srcOpen.loadTexture(r.cardData.name),
                    3 === this.mode && (this.currentOpenCards > 1 ? this.srcOpen.x = this.columns[R.layoutRight ? 4 : 5].x + (this.currentOpenCards - 2) * R.wCard * .5 : this.srcOpen.x = this.columns[R.layoutRight ? 4 : 5].x,
                        game.world.remove(r))
                } else
                    this.srcOpen.visible = !1;
                return 3 === this.mode && --this.currentOpenCards,
                    game.world.add(t),
                    t.prevOwner = this.srcOpen,
                    t
            }
            if (this.srcPlace.getBounds().contains(s, e))
                return (this.cards.length > 0 || this.cardsOpen.length > 0) && PlayState.move(),
                    this.popCardClose(),
                    null;
            for (var i in this.suitDecks)
                if (t = this.suitDecks[i].pick(s, e))
                    return t
        }
        for (var i in this.columns)
            if (t = this.columns[i].pick(s, e))
                return t;
        return null
    },
    put: function(s, e) {
        var t = 1 / 0
            , r = 0;
        if (!s.over) {
            var i = null;
            for (var n in this.suitDecks)
                r = Phaser.Point.distance(s, this.suitDecks[n]),
                r < R.wCard && r < t && (t = r,
                    i = this.suitDecks[n]);
            if (i && i.checkCard(s.cardData))
                return R.moveSaver.save(s),
                    i.add(s),
                    void PlayState.move()
        }
        var a = null
            , c = null
            , h = null;
        t = 1 / 0;
        for (var n in this.columns)
            h = this.columns[n],
            h !== s.column && (c = h.topCard ? h.topCard : h,
                r = Phaser.Point.distance(s, c),
            r < R.wCard && r < t && (t = r,
                a = h));
        return a && a.checkCard(s.cardData) ? (R.moveSaver.save(s),
            a.add(s, 0),
            void PlayState.move()) : (this.back(s),
            void (e && R.sfx.error && R.sfx.error.play()))
    },
    back: function(s) {
        var e = null;
        s.column ? (e = s.under ? {
            x: s.under.x,
            y: s.under.y + (s.under.isOpen ? R.hCardOffsetOpen : R.hCardOffsetClose)
        } : s.column,
            s.makeTween(e.x, e.y, 0)) : s.prevOwner === this.srcOpen ? this.backToSrcOpen(s) : s.prevOwner.add(s)
    },
    autoPut: function(s) {
        if (!s.over)
            for (var e in this.suitDecks)
                if (this.suitDecks[e].checkCard(s.cardData))
                    return R.moveSaver.save(s),
                        this.suitDecks[e].add(s),
                        void PlayState.move();
        for (var e in this.columns)
            if (this.columns[e].checkCard(s.cardData))
                return R.moveSaver.save(s),
                    this.columns[e].add(s, 0),
                    void PlayState.move();
        this.back(s),
        R.sfx.error && R.sfx.error.play()
    },
    backToSrcOpen: function(s) {
        3 === this.mode && this.currentOpenCards++ > 0 && (game.world.add(this.cardsOpen[this.cardsOpen.length - 1]),
            s.bringToTop(),
            this.srcOpen.bringToTop(),
            this.srcOpen.visible = !1,
            this.srcOpen.x += .5 * R.wCard),
            this.addCardToSrcOpen(s)
    },
    popCardClose: function() {
        if (0 === this.cards.length) {
            if (0 === this.cardsOpen.length)
                return;
            var s = 0
                , e = null;
            for (var t in this.cardsOpen)
                e = this.cardsOpen[t],
                    e.open(!1),
                    e.position.set(this.srcOpen.x, this.srcOpen.y),
                    game.world.add(e),
                    e.makeTween(this.srcPlace.x, this.srcPlace.y, s),
                    s += 10;
            return this.srcOpen.visible = !1,
                this.cardsOpen[this.cardsOpen.length - 1].tween.onComplete.add(this.backToSrcClose, this),
                void R.scoreChange(-15)
        }
        3 === this.mode && this.currentOpenCards > 0 && this.beforeSrcOpen3();
        for (var t = 0; t < this.mode; ++t) {
            var e = this.cards.pop();
            if (game.world.add(e),
                e.open(!0),
                1 === this.mode ? this.addCardToSrcOpen(e) : this.addCardToSrcOpen3(e, t),
                R.moveSaver.save(e),
            0 === this.cards.length)
                return void this.srcPlace.loadTexture("gui", "card_place")
        }
    },
    addCardToSrcOpen: function(s) {
        this.cardsOpen.push(s),
            s.makeTween(this.srcOpen.x, this.srcOpen.y, 0),
            s.tween.onComplete.add(function() {
                var s = this.cardsOpen[this.cardsOpen.length - 1];
                this.srcOpen.loadTexture(s.cardData.name),
                    this.srcOpen.visible = !0,
                    s.prevOwner = null,
                    game.world.remove(s)
            }, this)
    },
    addCardToSrcOpen3: function(s, e) {
        this.currentOpenCards = e + 1,
            this.cardsOpen.push(s),
            this.srcOpen.x = this.columns[R.layoutRight ? 4 : 5].x + e * R.wCard * .5,
            s.makeTween(this.srcOpen.x, this.srcOpen.y, 100 * e),
        2 !== e && 0 !== this.cards.length || s.tween.onComplete.add(function() {
            var s = this.cardsOpen[this.cardsOpen.length - 1];
            game.world.remove(s),
                this.srcOpen.loadTexture(s.cardData.name),
                this.srcOpen.visible = !0,
                this.srcOpen.bringToTop();
            for (var e = this.cardsOpen.length - this.currentOpenCards; e--; )
                game.world.remove(this.cardsOpen[e])
        }, this)
    },
    beforeSrcOpen3: function() {
        var s = this.cardsOpen[this.cardsOpen.length - 1];
        s.position.set(this.srcOpen.x, this.srcOpen.y),
            game.world.add(s),
            this.srcOpen.visible = !1,
            this.srcOpen.x = this.columns[R.layoutRight ? 4 : 5].x;
        for (var e = this.currentOpenCards; e > 0; --e)
            this.cardsOpen[this.cardsOpen.length - e].makeTween(this.srcOpen.x, this.srcOpen.y, 0)
    },
    backToSrcClose: function() {
        for (var s = this.cardsOpen.length, e = null; s--; )
            e = this.cardsOpen.pop(),
                this.cards.push(e),
                game.world.remove(e);
        this.srcPlace.loadTexture("card_skin1"),
            this.currentOpenCards = 0
    },
    fixSrcOpen3Pos: function() {
        this.currentOpenCards > 0 ? this.srcOpen.x = this.columns[R.layoutRight ? 4 : 5].x + (this.currentOpenCards - 1) * R.wCard * .5 : this.srcOpen.x = this.columns[R.layoutRight ? 4 : 5].x;
        var s = null;
        for (var e in this.cardsOpen)
            s = this.cardsOpen[e],
            s.tween && s.tween.stop(!0);
        for (var e = 1; e < this.currentOpenCards; ++e)
            this.cardsOpen[this.cardsOpen.length - e - 1].position.set(this.srcOpen.x - e * R.wCard * .5, this.srcOpen.y)
    },
    popBackToSrcClose: function() {
        for (var s = 3 === this.mode ? this.currentOpenCards : 1, e = 0; e < s; ++e) {
            var t = this.cardsOpen.pop();
            this.cards.push(t),
                t.open(!1),
                t.position.set(this.srcOpen.x, this.srcOpen.y),
                game.world.add(t),
                t.makeTween(this.srcPlace.x, this.srcPlace.y, 0),
                t.tween.onComplete.add(function(s) {
                    game.world.remove(s),
                        this.srcPlace.loadTexture("card_skin1")
                }, this, t)
        }
        if (this.currentOpenCards = 0,
        this.cardsOpen.length > 0) {
            if (this.srcOpen.loadTexture(this.cardsOpen[this.cardsOpen.length - 1].cardData.name),
            3 === this.mode) {
                for (var e = this.cardsOpen.length; e-- && this.currentOpenCards < 3; )
                    ++this.currentOpenCards;
                if (this.srcOpen.x = this.columns[R.layoutRight ? 4 : 5].x + (this.currentOpenCards - 1) * R.wCard * .5,
                this.currentOpenCards > 2) {
                    var t = this.cardsOpen[this.cardsOpen.length - 3];
                    game.world.add(t),
                        t.position.set(this.srcOpen.x - R.wCard, this.srcOpen.y, 100)
                }
                if (this.currentOpenCards > 1) {
                    var t = this.cardsOpen[this.cardsOpen.length - 2];
                    game.world.add(t),
                        t.position.set(this.srcOpen.x - .5 * R.wCard, this.srcOpen.y, 200)
                }
                this.srcOpen.bringToTop()
            }
        } else
            this.srcOpen.visible = !1
    },
    isAllSorted: function() {
        if (!(this.cards.length > 0 || this.cardsOpen.length > 0)) {
            for (var s in this.columns)
                if (!this.columns[s].isSorted())
                    return;
            this.autoPlace()
        }
    },
    autoPlace: function() {
        for (var s = 0, e = null, t = null, r = null, i = 0; i < this.columns.length; ) {
            i = 0;
            for (var n in this.columns)
                e = this.columns[n],
                    e.topCard ? (t = this.checkCorrectSuitDeck(e.topCard.cardData),
                    t && (t.autoPlaceAdd(r = e.autoPlacePick(), s),
                        s += 100)) : ++i
        }
        r.tween.onComplete.add(this.isWin, this)
    },
    checkCorrectSuitDeck: function(s) {
        for (var e in this.suitDecks)
            if (this.suitDecks[e].checkCard(s))
                return this.suitDecks[e];
        return null
    },
    isWin: function() {
        for (var s in this.suitDecks)
            if (!this.suitDecks[s].topCard || "k" != this.suitDecks[s].topCard.cardData.value)
                return;
        R.flyCards = 0;
        var e = 100;
        for (var s in this.suitDecks)
            game.time.events.add(e, this.suitDecks[s].startWin, this.suitDecks[s]),
                e += 300;
        PlayState.win()
    }
};
var R = R || {};
R.TutorialScreen = function() {
    this.bg = game.add.sprite(0, 0, "bg_menu"),
        this.picture = game.add.sprite(0, 0, "tutorial1"),
        this.picture.anchor.set(.5, 0),
        this.textField = R.createText(0, 0, parseInt(window.famobi.__("tutorial1_fontsize")), R.strings.tutorial1, "#ffffff", !1, 0, !0),
        this.textField.anchor.set(.5, 0),
        this.textField.align = "center";
    var t = game.add.button(0, 0, "gui", this.onNextButton, this, "continue_button", "continue_button", "continue_button_pushed", "continue_button");
    t.anchor.set(.5),
        t.scale.set(.5),
    R.sfx.button && t.setDownSound(R.sfx.button),
        this.nextButton = t;
    var o = game.add.button(0, 0, "gui", this.onCloseButton, this, "close_button", "close_button", "close_button_pushed", "close_button");
    o.anchor.set(.5),
        o.scale.set(1.34),
    R.sfx.button && o.setDownSound(R.sfx.button),
        this.closeButton = o;
    var e = game.add.button(0, 0, "gui", this.onPreviousButton, this, "continue_button", "continue_button", "continue_button_pushed", "continue_button");
    e.anchor.set(.5),
        e.scale.set(-.5, .5),
    R.sfx.button && e.setDownSound(R.sfx.button),
        this.previousButton = e,
        this.step = 0,
        this.resize(game.width, game.height)
}
    ,
    R.TutorialScreen.prototype = {
        resize: function(t, o) {
            this.picture.position.set(.5 * t, 10),
                this.textField.position.set(this.picture.x, this.picture.y + 360),
                this.textField.wordWrapWidth = t - 10,
                this.previousButton.position.set(this.picture.x - 240, o - 100),
                this.closeButton.position.set(this.picture.x, this.previousButton.y),
                this.nextButton.position.set(this.picture.x + 240, this.previousButton.y),
                t > o ? (this.bg.rotation = Math.PI * -.5,
                    this.bg.y = R.BASE_GAME_HEIGHT) : (this.bg.rotation = 0,
                    this.bg.y = 0)
        },
        onNextButton: function() {
            1 === this.step ? this.onCloseButton() : (this.step = 1,
                this.picture.loadTexture("tutorial2", 0),
                this.textField.text = R.strings.tutorial2)
        },
        onPreviousButton: function() {
            this.step = 0,
                this.picture.loadTexture("tutorial1", 0),
                this.textField.text = R.strings.tutorial1
        },
        onCloseButton: function() {
            this.nextButton.inputEnabled = !1,
                this.closeButton.inputEnabled = !1,
                this.previousButton.inputEnabled = !1;
            var t = game.state.getCurrentState();
            "onCloseTutotial"in t ? t.onCloseTutotial() : R.sceneTransition(200, "home")
        },
        destroy: function() {
            this.previousButton.destroy(!0),
                this.closeButton.destroy(!0),
                this.nextButton.destroy(!0),
                this.textField.destroy(!0),
                this.picture.destroy(!0),
                this.bg.destroy(!0)
        }
    },
    R.TutorialScreen.prototype.constructor = R.TutorialScreen;
