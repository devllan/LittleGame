var BootState = {      

    //
    init: function()
    {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.forceOrientation(false, false);     
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;       

        game.scale.onSizeChange.add(this.onSizeChange, this);
        game.scale.setResizeCallback(this.onResize, this);

        game.input.maxPointers = 1;
        game.stage.disableVisibilityChange = false;       

        R.canAudio = game.device.canPlayAudio('ogg') || game.device.canPlayAudio('mp3');

        //
        //

        //
        this.resizeGame();
    },      

    preload: function()
    {
        game.load.atlas('play', 'assets/atlas_play.png', 'assets/atlas_play.json');
        // game.load.image('logo', sgSettings.config.env.locale === 'ja' ? 'assets/logo_ja.png' : 'assets/logo.png');
        game.load.image('logo', 'assets/logo.png');
        // game.load.image('sg_logo', 'assets/sg_logo.png');

        var lang = sgSettings.config.env.locale;
        game.load.json('strings', 'assets/text/' + lang + '.json');
    },

    //
    create: function()
    {        
        game.state.add('load', LoadState);
        game.state.add('home', HomeState);
        game.state.add('play', PlayState);

        var fontFaceObserver = new FontFaceObserver(R.fontName);
        fontFaceObserver.load(null, 5000).then(function() { game.state.start('load'); }, this.fontLoadFailed);
    },

    fontLoadFailed: function()
    {
        R.fontName = 'Arial';
        game.state.start('load');
    },

    //
    fullScreenHandler: function()
    {
        if(!game.device.desktop)
        {
            //game.input.onUp.add(this.goFullScreen, this);
        }
    },

    goFullScreen: function()
    {
        if(!game.scale.isFullScreen)
        {
            game.scale.startFullScreen();
            game.canvas.parentElement.style.backgroundColor = "#0a2e02";
        }
    },

    onResize: function()
    {
        var ww = window.innerWidth;
        var wh = window.innerHeight;
        if(R.prevWindowWidth != ww || R.prevWindowHeight != wh) this.onSizeChange();

        var gameContainer = document.getElementById(game.parent);
        gameContainer.style.width = ww + "px";
        gameContainer.style.height = wh + "px";
    },

    onSizeChange: function()
    {
        this.resizeGame();
        game.state.resize(R.gameWidth, R.gameHeight);
    },

    resizeGame: function()
    {
        var ww = window.innerWidth;
        var wh = window.innerHeight;

        R.prevWindowWidth = ww;
        R.prevWindowHeight = wh;

        if(ww > wh)
        {
            R.gameHeight = R.BASE_GAME_HEIGHT;
            R.gameWidth = R.gameHeight / wh * ww;

            if(R.gameWidth > R.MAX_GAME_WIDTH) R.gameWidth = R.MAX_GAME_WIDTH;
            else if(R.gameWidth < R.BASE_GAME_WIDTH) R.gameWidth = R.BASE_GAME_WIDTH;
        }
        else
        {
            R.gameWidth = R.BASE_GAME_HEIGHT;
            R.gameHeight = R.gameWidth / ww * wh;

            if(R.gameHeight > R.MAX_GAME_HEIGHT) R.gameHeight = R.MAX_GAME_HEIGHT;
            else if(R.gameHeight < R.MIN_GAME_HEIGHT) R.gameHeight = R.MIN_GAME_HEIGHT;
        }

        R.halfGameWidth = R.gameWidth * 0.5;
        R.halfGameHeight = R.gameHeight * 0.5;

        game.scale.setGameSize(R.gameWidth, R.gameHeight);
    }
};﻿var R = R || {};

//data and settings
R.suits = ['s', 'h', 'c', 'd'];

R.values = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];

R.complexity = 1;

//Horizontal (landscape)
R.wCard_H = 134;
R.hCard_H = 190;
R.xColumnDistance_H = 10;

//Vertical (portrait)
R.wCard_V = 90;
R.hCard_V = 128;
R.xColumnDistance_V = 5;

//Current orientation data
R.wCard = 0;
R.hCard = 0;
R.xColumnDistance = 0;

R.hCardOffsetClose = 12;
R.hCardOffsetOpen = 34;
R.cardOffsetSqueeze = 8;
R.scaleCard = 1;
R.maxDistanceToBottomEdge = 130;
R.cardsHiddenN = 0;

R.cardShaking = null;
R.cardShakeCount = 0;
R.cardShakeDir = 0;
R.cardShakeX0 = 0;

R.adjustForMobile = function()
{    
    R.hCardOffsetOpen = 50;
    R.maxDistanceToBottomEdge = 140;
};

R.adjustByOrientation = function(w, h)
{
    var e = w > h ? 'H' : 'V';

    R.wCard = R['wCard_' + e];
    R.hCard = R['hCard_' + e];
    R.xColumnDistance = R['xColumnDistance_' + e];

    R.scaleCard = R.wCard / R.wCard_H;
};

R.centerAnchor = function(card)
{
    card.anchor.set(0.5);
    card.x += card.width * 0.5;
    card.y += card.height * 0.5;    
};

R.defaultAnchor = function(card)
{
    card.anchor.set(0);

    if(card.column)
    {
        card.x = card.column.x;
        if(card.under) card.y = card.under.y + (card.under.isOpen ? R.hCardOffsetOpen : R.hCardOffsetClose);
        else card.y = card.column.y;
    }
    else
    {
        card.x -= card.width * 0.5;
        card.y -= card.height * 0.5;
    }

    card.rotation = 0;
};

//Card
R.Card = function(si, vi)
{
    Phaser.Image.call(this, game, 0, 0, R.currentSkin);
        
    this.isOpen = false

    this.under = null;
    this.over = null;

    this.column = null;

    this.tween = null;
    this.tween2 = null;

    this.scored = false;

    this.si = si;
    this.vi = vi;

    this.name = R.values[vi] + R.suits[si];    
};

R.Card.prototype = Object.create(Phaser.Image.prototype);
R.Card.prototype.constructor = R.Card;

R.Card.prototype.setTween2Null = function()
{
    this.tween2 = null;
    this.rotation = 0;
};

R.Card.prototype.open = function(isOpen, isAnim)
{
    if(isOpen) --R.cardsHiddenN;

    this.isOpen = isOpen;

    if(isAnim)
    {
        R.centerAnchor(this);       
        this.tween = game.add.tween(this.scale).to({ x: 0.1 * R.scaleCard, y: 1.2 * R.scaleCard }, 100, Phaser.Easing.Linear.None, true);
        this.tween.onComplete.add(this.onOpenTweenComplete, this);

        if(!this.scored)
        {
            PlayState.scoring(10, 0);
            this.scored = true;
        }
    }
    else this.loadTexture(isOpen ? this.name : R.currentSkin);
};

R.Card.prototype.onOpenTweenComplete = function()
{
    this.loadTexture(this.isOpen ? this.name : R.currentSkin);
    this.tween = game.add.tween(this.scale).to({ x: R.scaleCard, y: R.scaleCard }, 100, Phaser.Easing.Linear.None, true);
    this.tween.onComplete.add(function() { this.tween = null; R.defaultAnchor(this); }, this);    
};

R.Card.prototype.add = function(card, delay)
{    
    card.under = this;
    this.over = card;
    card.makeTween(this.x, this.y + (this.isOpen ? R.hCardOffsetOpen : R.hCardOffsetClose), delay);
};

R.Card.prototype.makeTween = function(x, y, delay)
{
    var dst = { x: x, y: y };
    var duration = Phaser.Point.distance(this, dst) / 3;
    if(duration < 1) duration = 1;
    
    this.tween = game.add.tween(this).to(dst, duration, Phaser.Easing.Linear.None, true, delay);
    this.tween.onComplete.add(function() { this.tween = null; }, this);

    if(this.over) this.oversToChildren();

    //
    if(R.sfx.cardmove) this.tween.onStart.add(function() { R.sfx.cardmove.play(); }, this);
    if(R.sfx.card) this.tween.onComplete.add(function() { R.sfx.card.play(); }, this);
};

R.Card.prototype.oversToChildren = function()
{
    var over = this.over;
    var y = 0;
    var dy = R.hCardOffsetOpen / R.scaleCard;
    while(over)
    {
        over.position.set(0, y += dy);
        over.scale.set(1);
        this.addChild(over);
        over = over.over;
    }
    this.tween.onComplete.add(this.recoverOvers, this);
};

R.Card.prototype.recoverOvers = function()
{    
    var over = this.over;   
    while(over)
    {
        game.world.add(over);
        over.scale.set(R.scaleCard);
        over = over.over;
    }    
    this.setPosition(this.x, this.y);
};

R.Card.prototype.setPosition = function(x, y)
{
    if(this.tween)
    {
        this.bringToTop();
        this.tween.stop(true);
    }
    this.position.set(x, y);
    var over = this.over;
    while(over)
    {
        if(over.tween)
        {
            over.bringToTop();           
            over.tween.stop(true);            
        }
        over.position.set(x, over.under.y + (over.under.isOpen ? R.hCardOffsetOpen : R.hCardOffsetClose));
        over = over.over;
    }
};

R.Card.prototype.setOnTop = function()
{
    this.bringToTop();
    var over = this.over;
    while(over)
    {
        over.bringToTop();
        over = over.over;
    }
};

R.Card.prototype.getBottomCard = function()
{
    var over = this;
    while(over.over) over = over.over;
    return over;
};

R.Card.prototype.shake = function()
{
    R.cardShaking = this;
    R.cardShakeCount = 0;
    R.cardShakeDir = -1;
    R.cardShakeX0 = this.x;
};

R.Card.prototype.shaking = function()
{
    this.x += 3 * R.cardShakeDir;
    if(Math.abs(R.cardShakeX0 - this.x) > 3)
    {
        R.cardShakeDir = -R.cardShakeDir;
        ++R.cardShakeCount;
    }
    if(R.cardShakeCount > 4) this.stopShaking();
    else this.setPosition(this.x, this.y);
};

R.Card.prototype.stopShaking = function()
{    
    R.cardShaking = null;
    this.setPosition(R.cardShakeX0, this.y);
};

//Column
R.Column = function()
{
    Phaser.Image.call(this, game, 0, 0, null);

    this.bottomCard = null;
    this.topCard = null;
    this.squeezed = false;
    this.rown = 0;
    this.untilRown = 0;

    game.world.add(this);    
};

R.Column.prototype = Object.create(Phaser.Image.prototype);
R.Column.prototype.constructor = R.Column;

R.Column.prototype.setPosition = function(x, y)
{
    this.position.set(x, y);
    if(this.bottomCard) this.bottomCard.setPosition(x, y);
};

R.Column.prototype.setScale = function(s)
{
    var card = this.topCard;
    while(card)
    {
        card.scale.set(s);
        card = card.under;
    }
};

R.Column.prototype.easyAddOne = function(card)
{
    if(this.topCard)
    {        
        card.under = this.topCard;
        this.topCard.over = card;
        this.topCard = card;
    }
    else this.bottomCard = this.topCard = card;        
    card.column = this;    
    card.bringToTop();
};

R.Column.prototype.add = function(card, delay)
{
    if(card.column) card.column.remove(card);

    if(this.topCard) this.topCard.add(card, delay);
    else
    {
        card.makeTween(this.x, this.y, delay);
        card.tween.onComplete.add(function() { this.visible = false; }, this);
        this.bottomCard = card;
    }

    if(card.over)
    {
        var over = card.over;
        while(over)
        {
            this.topCard = over;
            over.column = this;
            over = over.over;
        }
    }
    else this.topCard = card;

    card.column = this;
};

R.Column.prototype.remove = function(card)
{
    this.topCard = card.under;    

    if(this.topCard)
    {
        this.topCard.over = null;
        if(!this.topCard.isOpen) this.topCard.open(true, true);
    }
    else this.bottomCard = null;

    card.under = null;    
    card.column = null;

    if(this.squeezed) this.adjust();
};

R.Column.prototype.pick = function(x, y)
{
    var card = this.topCard;
    var s = -1;
    var v = -1;

    while(card && card.isOpen)
    {
        if(s === -1)
        {
            s = card.si;
            v = card.vi;
        }
        else
        {
            if(s !== card.si) break;
            if(v + 1 !== card.vi) break;
            else v = card.vi;
        }

        if(card.getBounds().contains(x, y)) return card;
        
        card = card.under;
    }
    return null;
};

R.Column.prototype.checkCard = function(card)
{    
    if(this.topCard) return (card.vi + 1) === this.topCard.vi;
    return true;
};

R.Column.prototype.isSorted = function()
{
    var card = this.topCard;
    var v = card.vi;    

    if(v !== 0) return false;

    var s = card.si;    

    card = card.under;

    while(card && card.isOpen)
    {
        if(card.si !== s) return false;
        if(card.vi !== v + 1) return false;        

        v = card.vi;

        if(v === 12) return true;

        card = card.under;
    }

    return false;
};

R.Column.prototype.countSorted = function()
{
    this.rown = 0;
    this.untilRown = 0;

    if(!this.topCard) return;

    var card = this.topCard;
    
    var v = card.vi;
    var s = card.si;

    card = card.under;

    while(card && card.isOpen)
    {
        if(card.si !== s) break;
        if(card.vi !== v + 1) break;

        ++this.rown;
        this.untilRown = v;

        v = card.vi;
        card = card.under;
    }
};

R.Column.prototype.moveToFoundation = function(foundation)
{    
    var card = this.topCard;
    var i = 13;
    delay = 0;
    while(i--)
    {
        this.remove(card);       
        foundation.add(card, delay);
        delay += 100;

        if(i === 0)
        {
            foundation.column = this;
            foundation.under = card.under
            if(card.under) foundation.underIsOpen = card.under.isOpen;
            card.tween.onComplete.add(R.deck.sortZFoundation, R.deck);
        }
                
        card = this.topCard;
    }

    if(R.sfx.win) R.sfx.win.play();
};

R.Column.prototype.getMostBottomSortedCard = function()
{
    if(!this.topCard) return null;

    var card = this.topCard;
    var resCard = card;

    var s = card.si;
    var v = card.vi;    

    card = card.under;

    while(card && card.isOpen)
    {
        if(card.si !== s) break;
        if(card.vi !== v + 1) break;

        v = card.vi;

        resCard = card;
        card = card.under;
    }

    return resCard;
};

R.Column.prototype.setSkin = function()
{
    var card = this.bottomCard;
    while(card)
    {
        if(card.isOpen) break;
        card.loadTexture(R.currentSkin);        
        card = card.over;
    }
};

R.Column.prototype.checkSqueeze = function()
{
    this.squeezed = false;

    if(!this.topCard) return;
   
    var overlapDistance = this.topCard.y + R.hCard - (game.height - R.maxDistanceToBottomEdge);    
    
    if(overlapDistance <= 0) return;
    
    this.squeezed = true;

    var card = this.bottomCard.over;   
    var prevY = card.under.y;

    while(card)
    {
        if(overlapDistance > 0)
        {            
            overlapDistance -= card.y - prevY - R.cardOffsetSqueeze;            
            prevY = card.y;
            card.y = card.under.y + R.cardOffsetSqueeze;
        }
        else card.y = card.under.y + (card.under.isOpen ? R.hCardOffsetOpen : R.hCardOffsetClose);

        card = card.over;
    }    
};

R.Column.prototype.adjust = function()
{
    this.setPosition(this.x, this.y);
    this.checkSqueeze();
};

R.Column.prototype.countHiddenCards = function()
{
    var count = 0;
    var card = this.bottomCard;
    while(card)
    {
        if(!card.isOpen) ++count;
        else break;
        card = card.over;
    }
    return count;
};

R.Column.prototype.sortZ = function()
{
    var card = this.bottomCard;

    while(card)
    {        
        card.bringToTop();
        card = card.over;
    }
};

//Foundation
R.Foundation = function(x, y)
{
    this.x = x;
    this.y = y;

    this.column = null;
    this.under = null;
    this.underIsOpen = null;    

    this.pile = [];

    this.lastCard = null;

    this.scored = false;
};

R.Foundation.prototype.constructor = R.Foundation;

R.Foundation.prototype.add = function(card, delay)
{
    this.pile.push(card);
    card.makeTween(this.x, this.y, delay);
    card.tween.onStart.add(card.bringToTop, card);
    card.tween.onComplete.add(this.onEndAdd, this);

    if(!this.scored)
    {
        PlayState.scoring(100, 1);
        this.scored = true;
    }
};

R.Foundation.prototype.onEndAdd = function(card)
{    
    if(this.lastCard) game.world.remove(this.lastCard);
    this.lastCard = card;    
};

R.Foundation.prototype.backToColumn = function()
{    
    var card = null;

    if(this.under) this.under.open(this.underIsOpen, false);    

    var i = 13;

    while(i--)
    {
        card = this.pile.pop();
        game.world.add(card);        
        this.column.add(card, 0);        
        card.setPosition(card.tween.properties.x, card.tween.properties.y);
    }

    this.column.checkSqueeze();

    this.lastCard = null;
};

R.Foundation.prototype.setPosition = function(x, y)
{
    this.x = x;
    this.y = y;

    for(var i = 0; i < this.pile.length; ++i)    
    {
        if(this.pile[i].tween) this.pile[i].tween.stop(true);
        this.pile[i].position.set(x, y);
        this.pile[i].scale.set(R.scaleCard);
    }

    if(this.lastCard) this.lastCard.bringToTop();
};

R.Foundation.prototype.sortZ = function()
{
    var i = this.pile.length;
    while(i--) if(this.pile[i].parent) this.pile[i].bringToTop(); else break;
};

//MoveSaver
R.Move = function(type, card)
{
    this.type = type;

    if(type === 0)
    {        
        this.card = card;

        this.column = card.column;
        this.under = card.under

        if(card.under) this.underIsOpen = card.under.isOpen;
    }
};

R.Move.prototype.constructor = R.Move;

R.Move.prototype.backToColumn = function()
{    
    if(this.under) this.under.open(this.underIsOpen, false);    
    this.column.add(this.card, 0);
    this.card.setPosition(this.card.tween.properties.x, this.card.tween.properties.y);
    this.column.checkSqueeze();
};

//
R.moveSaver = {

    moves: [],

    //
    shutdown: function()
    {
        this.moves.length = 0;
    },

    save: function(type, card)
    {        
        this.moves.push(new R.Move(type, card));
    },

    undo: function()
    {
        if(this.moves.length === 0) return;        
        var move = this.moves.pop();

        switch(move.type)
        {
            case 0: move.backToColumn(); break;
            case 1: R.deck.backToStock(); break;
            case 2:                
                R.deck.backFromFoundationToColumn();
                this.undo();
                break;
        }
        
        R.deck.countHiddenCards();
        PlayState.clearPrevCardPicked();
    }
};﻿var R = R || {};

//Clock
R.Clock = function(x, y, size, fill)
{
    Phaser.Text.call(this, game, x, y, '00:00');

    this.font = R.fontName;
    this.anchor.set(0.0, 0.5);
    this.align = 'left';
    this.fontSize = size;
    this.fill = fill;
   
    this.minutes = 0;
    this.seconds = 0;
    
    this.timer = game.time.add(new Phaser.Timer(game, true));
    this.timer.loop(1000, this.updateTime, this);
    this.timer.stop(false);    
};

R.Clock.prototype = Object.create(Phaser.Text.prototype);
R.Clock.prototype.constructor = R.Clock;

R.Clock.prototype.reset = function(start)
{
    this.seconds = this.minutes = 0;
    if(start)
    {
        this.timer.start();
        this.text = '0:00';
    }
};

R.Clock.prototype.updateTime = function()
{    
    if(++this.seconds === 60)
    {
        this.seconds = 0;
        ++this.minutes;
    }    
    
    var ss = this.seconds.toString();
    var str = this.minutes.toString() + ':' + (this.seconds < 10 ? ('0' + ss) : ss);
    
    this.text = str;
};

R.Clock.prototype.stopTick = function()
{
    this.timer.stop(false);
};

R.Clock.prototype.pause = function(p)
{    
    if(p) this.timer.pause();
    else this.timer.resume();
};

R.Clock.prototype.getTotalSeconds = function()
{
    return this.minutes * 60 + this.seconds;
};﻿var R = R || {};

R.pickedCard = null;

//Deck Manager
R.deck = {

    cards: [],    
    columns: [],

    cardPlaces: [],

    original: [],

    srcPlace: null,
    state: 0, //0 - shuffle, 1 - ready
    currentOpenCards: 0,

    pile: [],
    foundations: [],
    freeFund: 0,
    pileOffset: 18,    
    possiblePutCardsIdx: 0,
    possibleAutoMovies: [],
    tweensHint: [],
    timeEventHint: null,
    _hasStarted: false,

    //
    shutdown: function()
    {
        this.cardPlaces.length = 0;
        this.cards.length = 0;
        this.columns.length = 0;
        this.foundations.length = 0;
        this.pile.length = 0;        
        this.srcPlace = null;

        this.state = 0;
        this.currentOpenCards = 0;
        this.freeFund = 0;        
        this.tweensHint.length = 0;
        this.timeEventHint = null;

        R.pickedCard = null;

        this.possibleAutoMovies.length = 0;
        this._hasStarted = false;
    },

    init: function()
    {
        var i = 0;
        //        
        for(i = 0; i < 10; i++)
        {
            var cp = R.createImage(0, 0, 'play', 'card_place', 0, 0);
            cp.name = 'e';
            this.cardPlaces.push(cp);            
        }

        //foundations
        var x = 186;
        var y = 800;
        for(i = 0; i < 8; i++) this.foundations.push(new R.Foundation(0, 0));        

        //columns            
        for(i = 0; i < 10; i++) this.columns.push(new R.Column());

        //create and shuffle deck
        this.srcPlace = R.createImage(0, 0, R.currentSkin, null, 0, 0);
        this.srcPlace.visible = true;

        //stock
        for(i = 0; i < 5; i++) this.addStock();
        this.srcPlace.bringToTop();
                                
        //deck
        if(this.original.length !== 104)//new deck
        {            
            var orderedDeck = [];            
            var s = 0;
            var v = 0;
            var ms = 1;

            if(R.complexity === 2) ms = 2;
            else if(R.complexity === 3) ms = 4;

            for(i = 0; i < 104; i++)
            {
                orderedDeck.push([s, v]);
                if(++v === R.values.length)
                {
                    v = 0;
                    if(++s === ms) s = 0;
                }
            }

            var n = orderedDeck.length;

            while(n--)
            {
                i = game.rnd.between(0, orderedDeck.length - 1);
                var card = new R.Card(orderedDeck[i][0], orderedDeck[i][1]);
                this.cards.push(card);
                this.original.push(card.si + '.' + card.vi);
                orderedDeck.splice(i, 1);
            }
        }
        else//restore old deck
        {            
            for(i = 0; i < 104; i++)
            {
                var sv = this.original[i].split('.');
                var card = new R.Card(sv[0] * 1, sv[1] * 1);
                this.cards.push(card);
            }
        }

        //
        this._hasStarted = false;
    },

    resize: function()
    {
        var x = 0, y = 0;
        
        this.srcPlace.scale.set(R.scaleCard);

        if(game.width > game.height)
        {
            x = (game.width - R.BASE_GAME_WIDTH) * 0.5 + 6;
            y = (game.device.desktop ? 20 : 60);

            var xf = x + (R.wCard + R.xColumnDistance) * 10 + 18;
            var yf = y + 30;

            for(var i in this.foundations)
            {
                this.foundations[i].setPosition(xf, yf);
                yf += 30;
            }           
                       
            this.srcPlace.y = 600;           
        }
        else
        {
            x = 7;
            y = 160;
            this.srcPlace.y = 20;

            var xf = x + 30;

            for(var i in this.foundations)
            {
                this.foundations[i].setPosition(xf, this.srcPlace.y);
                xf += 30 * R.scaleCard;
            }
        }

        for(var i in this.columns)
        {
            this.cardPlaces[i].position.set(x, y + 4);
            this.cardPlaces[i].scale.set(R.scaleCard);

            this.columns[i].setPosition(x, y);
            this.columns[i].setScale(R.scaleCard);

            if(this.columns[i].topCard && this.columns[i].topCard.tween2) this.columns[i].topCard.tween2.stop(true);

            this.columns[i].checkSqueeze();

            x += R.wCard + R.xColumnDistance;
        }          
        
        this.srcPlace.x = game.width > game.height ? x + 18 : this.columns[9].x;        

        for(var i in this.pile)
        {
            this.pile[i].position.set(this.srcPlace.x, this.srcPlace.y);
            this.pile[i].scale.set(R.scaleCard);
            if(game.width > game.height) this.srcPlace.y -= this.pileOffset; else this.srcPlace.x -= this.pileOffset;
        }

        for(var i in this.cards)
        {
            if(this.cards[i].tween) this.cards[i].tween.stop(true);
            this.cards[i].position.set(this.srcPlace.x, this.srcPlace.y);
            this.cards[i].scale.set(R.scaleCard);            
        }        
    },

    start: function()
    {        
        var delay = 100;
        var card = null;
        var row = 0;
        var count = 0;
        var z = game.world.total;

        while(count < 54)
        {
            for(var i = 0; i < 10 && count < 54; ++i)
            {
                card = this.cards.pop();
                game.world.addAt(card, z);                                

                if(count > 43) card.open(true);
                this.columns[i].add(card, 0);                

                card.tween.stop(false);
                card.makeTween(this.columns[i].x, this.columns[i].y + R.hCardOffsetClose * row, delay);
                card.tween.onStart.add(card.bringToTop, card);

                delay += 110;
                ++count;
            }            
            ++row;
        }
        
        this.columns[0].bottomCard.tween.onStart.add(this.beforeStart, this);        
        card.tween.onComplete.add(this.beginPlay, this);

        this._hasStarted = true;

        R.cardsHiddenN = 94;
    },

    beforeStart: function()
    {
        this.removeStock();
        this._hasStarted = false;
    },

    beginPlay: function()
    {
        if(this._hasStarted) this.beforeStart();
        for(var i = 0; i < this.columns.length; ++i) this.columns[i].sortZ();        
        PlayState.beginPlay();
    },

    removeStock: function()
    {
        var stock = this.pile.pop();
        game.world.remove(stock);
        stock.destroy();
        if(game.width > game.height) this.srcPlace.y += this.pileOffset; else this.srcPlace.x += this.pileOffset;
    },

    addStock: function()
    {
        var stock = R.createImage(this.srcPlace.x, this.srcPlace.y, R.currentSkin, null, 0, 0);
        stock.scale.set(R.scaleCard);
        game.world.add(stock);
        stock.bringToTop();
        this.pile.push(stock);
        if(game.width > game.height) this.srcPlace.y -= this.pileOffset; else this.srcPlace.x -= this.pileOffset;
    },      

    pick: function(x, y)
    {
        //pick stock        
        if(this.cards.length > 0 && this.srcPlace.getBounds().contains(x, y))
        {
            var c = this.emptyColumnIdx();

            this.clearTweensHint();

            if(c == -1)
            {                
                this.distributeCards();
                PlayState.resetBonus(1);
                PlayState.move();
                R.moveSaver.save(1);
                if(R.sfx.cardselect) R.sfx.cardselect.play();
            }
            else
            {
                this.markHint(this.cardPlaces[c]);
                PlayState.showEmptyWarning();
                if(R.sfx.error) R.sfx.error.play();
            }
            
            return null;
        }

        //pick columns
        var card = null;

        for(var i in this.columns)
        {
            card = this.columns[i].pick(x, y);            
            if(card)
            {
                this.clearTweensHint();
                return card;
            }
        }

        return null;
    },

    put: function(card)
    {       
        var column = null;
        var p = null;
        var c = null;
        var distance = 10000;
        var d = 0;

        for(var i in this.columns)
        {
            c = this.columns[i];
            if(c === card.column) continue;
            p = c.topCard ? c.topCard : c;
            d = Phaser.Point.distance(card, p);
            if(d < R.wCard)
            {
                if(d < distance)
                {
                    distance = d;
                    column = c;
                }
            }
        }

        if(column && column.checkCard(card)) this.addCardToColumn(column, card);
        else this.back(card);
    },

    addCardToColumn: function(column, card)
    {
        R.moveSaver.save(0, card);
        column.add(card, 0);
        card.tween.onComplete.add(this.isAllSorted, this);
        PlayState.move();
        if(R.sfx.correct) R.sfx.correct.play();
    },

    back: function(card)
    {
        var dst = null;

        if(card.under) dst = { x: card.under.x, y: card.under.y + (card.under.isOpen ? R.hCardOffsetOpen : R.hCardOffsetClose) };
        else dst = card.column;
        card.makeTween(dst.x, dst.y, 0);

        if(R.sfx.error) R.sfx.error.play();
    },

    distributeCards: function()
    {        
        var card = null;
        var i = 10;
        var delay = 1000;

        while(i--)
        {
            card = this.cards.pop();

            game.world.add(card);           

            card.open(true, false);

            card.rotation = Math.PI;
            card.x = this.srcPlace.x + R.wCard;
            card.y = this.srcPlace.y + R.hCard;

            this.columns[i].add(card, delay);
            card.tween.onComplete.add(this.isAllSorted, this);

            card.tween2 = game.add.tween(card).to({ rotation: 0 }, card.tween.totalDuration, Phaser.Easing.Linear.None, true, delay);
            card.tween2.onComplete.add(card.setTween2Null, card);

            if(this.cards.length === 0)
            {
                this.srcPlace.visible = false;
                break;
            }

            delay -= 100;
        }

        if(this.pile.length > 0) this.removeStock();

        PlayState.clearPrevCardPicked();
    }, 

    backToStock: function()
    {
        var card = null;        

        if(this.cards.length === 0) this.srcPlace.visible = true;
        else this.addStock();
        
        this.srcPlace.bringToTop();

        for(var i = 0; i < 10; ++i)
        {
            card = this.columns[i].topCard;
            card.over = null;            
            game.world.remove(card);            
            this.columns[i].remove(card);
            this.cards.push(card);
        }        
    },

    isAllSorted: function(card)
    {
        if(card.column.isSorted())
        {
            card.column.moveToFoundation(this.foundations[this.freeFund]);
            if(++this.freeFund === 8) this.foundations[7].pile[12].tween.onComplete.add(PlayState.win, PlayState);
            else R.moveSaver.save(2);
        }
        else
        {
            card.column.checkSqueeze();
            PlayState.resetBonus(1);
        }                
        
        if(R.cardsHiddenN === this.cards.length) PlayState.startWaitingAutoSolveQ();
    },

    backFromFoundationToColumn: function()
    {
        --this.freeFund;
        this.foundations[this.freeFund].backToColumn();
    },

    removeInvert: function(obj)
    {
        game.world.remove(obj);
    },

    emptyColumnIdx: function()
    {
        var c = this.columns.length;
        while(c--) if(!this.columns[c].topCard) return c;
        return -1;
    },

    markHint: function(card, nulledEvent)
    {
        R.centerAnchor(card);
        this.tweenRotatation(card, 0.225).onComplete.add(this.unmarkHint, this);

        if(nulledEvent) this.timeEventHint = null;
    },

    tweenRotatation: function(card, a)
    {
        var tween = game.add.tween(card).to({ rotation: a }, 200, Phaser.Easing.Back.Out, true);      
        this.tweensHint.push(tween);
        tween.onComplete.add(this.popTweensHint, this);
        return tween;
    },

    popTweensHint: function(tween)
    {        
        if(this.tweensHint.length > 0) this.tweensHint.shift();
    },

    unmarkHint: function(card)
    {
        this.tweenRotatation(card, 0).onComplete.add(R.defaultAnchor, R);
    },

    clearTweensHint: function()
    {        
        while(this.tweensHint.length > 0) this.tweensHint[0].stop(true);

        if(this.timeEventHint)
        {
            game.time.events.remove(this.timeEventHint);
            this.timeEventHint = null;
        }
    },

    setSkin: function()
    {
        this.srcPlace.loadTexture(R.currentSkin);

        var i = this.pile.length;
        while(i--) this.pile[i].loadTexture(R.currentSkin);

        i = this.columns.length;
        while(i--) this.columns[i].setSkin();
    },

    visible: function(visible)
    {
        var i = this.cardPlaces.length;
        while(i--) this.cardPlaces[i].visible = visible;
    },

    countHiddenCards: function()
    {
        R.cardsHiddenN = 0;
        for(var i = 0; i < 10; ++i) R.cardsHiddenN += this.columns[i].countHiddenCards();
        R.cardsHiddenN += this.cards.length;
    },

    autoPut: function(card, reset)
    {
        if(reset || this.possibleAutoMovies.length < 2) this.getAllPossibleMovies(card);
        
        if(this.possibleAutoMovies.length === 0)
        {
            this.back(card);
            card.tween.onComplete.add(card.shake, card);
        }
        else
        {
            this.addCardToColumn(this.possibleAutoMovies[this.possiblePutCardsIdx], card);
            if(++this.possiblePutCardsIdx === this.possibleAutoMovies.length) this.possiblePutCardsIdx = 0;
        }   
    },

    getAllPossibleMovies: function(card)
    {
        this.possibleAutoMovies.length = 0;

        var column = null;
        var topCard = null;

        for(var i = 0; i < 10; ++i)
        {
            column = this.columns[i];

            if(card.column === column) continue;

            topCard = column.topCard;

            if(column.checkCard(card))
            {
                if(topCard) column.countSorted();
                this.possibleAutoMovies.push(column);
            }
        }

        if(this.possibleAutoMovies.length > 0)
        {           
            var bAddPickedColumn = !card.under || (card.under.isOpen && (card.vi + 1 === card.under.vi));

            if(this.possibleAutoMovies.length > 1)
            {
                R.pickedCard = card;
                this.possibleAutoMovies.sort(this.sortAutoMoves);
                R.pickedCard = null;
            }

            if(bAddPickedColumn) this.possibleAutoMovies.push(card.column);

            this.possiblePutCardsIdx = 0;
        }       
    },

    sortAutoMoves: function(l, r)
    {        
        var csi = R.pickedCard.si;
        var ltc = l.topCard;
        var rtc = r.topCard;

        //если левая не пустая
        if(ltc)
        {
            //если правая не пустая
            if(rtc)
            {
                //если масть правого совпадает с перемещаемой картой
                if(rtc.si === csi)
                {
                    //если масть левого тоже совпадает с перемещаемой картой
                    if(ltc.si === csi)
                    {
                        //перемещаем к началу ту колонку, у которой готовый расклад длиннее, т.е. если rown правого больше, возвращаем положительное значение, чтобы r сдвинуть ближе к началу массива                        
                        return r.rown - l.rown;
                    }
                    //иначе правый приоритетней, возвращаем +1
                    return 1;
                }
                //иначе если у левой колонки масть совпадает, то она должна оставаться ближе к началу массива, возвращаем -1
                if(ltc.si === csi) return -1;
                //иначе менять порядок сравниваемых колоном не нужно, возращаем 0
                return 0;                
            }
            //иначе левая не пустая, она важнее
            return -1;
        }
        //иначе если правая не пустая, она важнее
        if(rtc) return 1;
        //иначе обе колонки равнозначны
        return 0;
    },

    sortZFoundation: function()
    {        
        for(var i = 0; i < 8; ++i) if(this.foundations[i].pile.length > 0) this.foundations[i].sortZ(); else break;        
    }   
};﻿//HomeState
var HomeState = {

    startOption: 0,

    bg: null,
    bgSideLeft: null,
    bgSideRight: null,
    logo: null,

    btnPlay: null,
    btnMoregames: null,
    btnMenu: null,

    groupCard: null,

    windowSuit: null,
    options: null,

    //
    shutdown: function()
    {
        this.bg = null;
        this.bgSideLeft = null;
        this.bgSideRight = null;
        this.logo = null;
        this.btnMoregames = null;        
        this.btnPlay = null;
        this.btnMenu = null;
        this.groupCard = null;
        this.windowSuit = null;
        this.options = null;
    },

    buttonsEnabled: function(b)
    {
        this.btnMenu.inputEnabled = this.btnMoregames.inputEnabled = this.btnPlay.inputEnabled = b;
    },

    create: function()
    {
        this.bg = R.createImage(0, 0, 'bg_home', null, 0, 0);
        this.bgSideLeft = R.createImage(0, 0, 'bg_top', null, 1, 1);        
        this.bgSideRight = R.createImage(0, 0, 'bg_top', null, 0, 1);        

        this.groupCard = game.add.group();

        var coords = [{ x: 214, y: 50, a: -22.22 }, { x: 1260, y: 10, a: 12.46 }, { x: 116, y: 389, a: -75.4 }, { x: 1214, y: 370, a: -18 }, { x: 197, y: 611, a: -26.17 },
                      { x: 651, y: 500, a: 69.03 }, { x: 943, y: 632, a: 67.16 }, { x: 1245, y: 674, a: 40.31 }];

        for(var i = 0; i < coords.length; i++)
        {
            var frame = game.rnd.pick(R.values) + game.rnd.pick(R.suits);
            var card = R.createImage(coords[i].x, coords[i].y, frame, null, 0, 0);
            card.angle = coords[i].a;
            this.groupCard.add(card);
        }

        this.logo = R.createImage(0, 0, 'logo', null);
        
        this.btnPlay = R.createButton(0, 0, this.onButtonPlay, this, 'btn_play', 'btn_play', null);
        this.btnMoregames = R.createButton(0, 0, Publisher.onMoregamesButton, Publisher, 'ui', 'button_green', R.strings.more_games, 42);
        this.btnMenu = R.createButton(0, 0, this.onButtonMenu, this, 'ui', 'btn_options', null);

        //options window
        this.options = R.createOptionsWindow(this.onCloseOptions, this, false);

        //windowSuit
        this.windowSuit = R.createSuitWindow(this.onCloseWindow, this);        
        if(this.startOption == 1) this.windowSuit.open();

        //        
        BootState.fullScreenHandler();
        this.buttonsEnabled(false);        
        this.resize(game.width, game.height);
        R.sceneTransition(300, null);
    },

    resize: function(width, height)
    {        
        this.bgSideLeft.visible = false;
        this.bgSideRight.visible = false;
          

        if(width > height)
        {
            var x = (width - 1440) * 0.5;

            this.bg.position.set(x, 0);
            this.bg.rotation = 0;

            this.groupCard.position.set(x, 0);
            this.groupCard.scale.set(1);

            if(width > 1440)
            {
                this.bgSideLeft.visible = true;
                this.bgSideRight.visible = true;
                
                this.bgSideLeft.scale.y = this.bgSideRight.scale.y = x > 100 ? x / 99.5 : 1;

                this.bgSideLeft.rotation = -Math.PI / 2;
                this.bgSideRight.rotation = Math.PI / 2;

                this.bgSideLeft.position.set(x + 0.5, 0);
                this.bgSideRight.position.set(x + 1440 - 0.5, 0);
            }

            this.logo.position.set(R.halfGameWidth, 365);
            this.logo.scale.set(1);

            this.btnPlay.position.set(R.halfGameWidth, 750);
            this.btnMoregames.position.set(R.halfGameWidth, this.btnPlay.y + 140);
        }
        else
        {            
            this.bg.position.set(R.BASE_GAME_HEIGHT, (height - 1440) * 0.5);
            this.bg.rotation = Math.PI / 2;

            this.groupCard.scale.set(R.wCard_V / R.wCard_H);
            this.groupCard.position.set(0, R.halfGameHeight - 360);

            if(height > 1440)
            {
                this.bgSideLeft.visible = true;
                this.bgSideRight.visible = true;
                
                this.bgSideLeft.scale.y = this.bgSideRight.scale.y = this.bg.y > 100 ? this.bg.y / 99.5 : 1;
                this.bgSideRight.scale.y = -this.bgSideRight.scale.y;

                this.bgSideLeft.rotation = this.bgSideRight.rotation = 0;

                this.bgSideLeft.position.set(R.BASE_GAME_HEIGHT, this.bg.y + 0.5);
                this.bgSideRight.position.set(0, height + 100 * this.bgSideRight.scale.y);
            }

            this.logo.position.set(R.halfGameWidth, R.halfGameHeight - 200);
            this.logo.scale.set(0.6);

            this.btnPlay.position.set(R.halfGameWidth, R.halfGameHeight + 200);
            this.btnMoregames.position.set(R.halfGameWidth, this.btnPlay.y + 180);            
        }        

        this.btnMenu.position.set(120, 120);

        if(this.windowSuit.exists) this.windowSuit.resize(width, height);
        else if(this.options.exists) this.options.resize(width, height);
    },

    start: function()
    {
        if(this.startOption == 0) this.buttonsEnabled(true);
        else this.startOption = 0;
    },

    onButtonPlay: function()
    {
        this.buttonsEnabled(false);
        this.windowSuit.open();
    },

    onCloseWindow: function()
    {
        this.buttonsEnabled(true);
    },

    onButtonMenu: function()
    {
        this.buttonsEnabled(false);
        this.options.open();
    },

    onCloseOptions: function()
    {
        this.buttonsEnabled(true);
    }
};﻿var R = R || {};

//
var LoadState = {

    loadingBar: null,    
    loadingBarFull: null,
    labelLoad: null,
    labelPercent: null,
    logo: null,
    sgLogo: null,
    sfx_key: null,

    //
    init: function()
    {       
        game.load.onFileComplete.add(this.fileComplete, this);
        game.load.onLoadComplete.add(this.loadComplete, this);        
    },

    //
    create: function()
    {
        for(var s in R.suits)
        {
            for(var v in R.values)
            {
                var name = R.values[v] + R.suits[s];
                game.load.image(name, 'assets/cards/' + name + '.png');
            }
        }
        
        for(var s = 1; s < 15; ++s)
        {
            var name = 'skin' + s;
            game.load.image(name, 'assets/skins/' + name + '.png');
        }
        
        game.load.atlas('ui', 'assets/atlas_ui.png', 'assets/atlas_ui.json');
        game.load.atlas('btn_play', 'assets/btn_play.png', 'assets/btn_play.json');
        game.load.image('bg_home', 'assets/bg_home.jpg');
        game.load.image('bg_play_landscape', 'assets/bg_play_landscape.jpg');
        game.load.image('bg_play_portrait', 'assets/bg_play_portrait.jpg');
        game.load.image('bg_side_left', 'assets/bg_side_left.jpg');
        game.load.image('bg_side_right', 'assets/bg_side_right.jpg');
        game.load.image('bg_top', 'assets/bg_top.jpg');
        game.load.spritesheet('particles', 'assets/particles.png', 32, 32, 16, 0, 0);                
        
        //
        game.load.image('bg', 'assets/bg.png', '')
        game.load.atlas('spinner', 'assets/loading.png', 'assets/loading.json');
        
        game.load.json('sword', 'assets/sword.json');

        //sfx
        if(R.canAudio)
        {
            var sfx = ['button', 'cardmove', 'cardselect', 'card', 'correct', 'error', 'win', 'vic', 'dlg', 'piano', 'claps', 'fw1', 'fw2', 'fw3', 'fw4'];
            for(var i in sfx) game.load.audio(sfx[i], ['assets/sfx/' + sfx[i] + '.ogg', 'assets/sfx/' + sfx[i] + '.mp3']);
            this.sfx_key = sfx;
        }

        // 
        R.strings = game.cache.getJSON('strings');

        //
        this.createEnvironment();
        this.resize(game.width, game.height);
        BootState.fullScreenHandler();

        //
        game.load.start();
    },

    shutdown: function()
    {
        this.loadingBar = null;
        this.loadingBarFull = null;
        this.labelLoad = null;
        this.labelPercent = null;
        this.logo = null;
        this.sgLogo = null;
        this.sfx_key = null;
    },

    createEnvironment: function()
    {
        game.stage.backgroundColor = '#005c2d';

        // this.sgLogo = R.createImage(0, 0, 'sg_logo', null);

        this.logo = R.createImage(0, 0, 'logo', null);
        this.logo.scale.set(0.6);

        this.loadingBar = R.createImage(0, 0, 'play', 'bar_empty', 0, 0);
        this.loadingBar.scale.x = this.logo.width;

        this.loadingBarFull = R.createImage(0, 0, 'play', 'bar_full', 0, 0);

        this.labelLoad = R.createText(0, 0, 42, R.strings.loading, '#cba41b', true, 5);
        this.labelLoad.stroke = '#110905';

        this.labelPercent = R.createText(0, 0, 32, '0%', '#cba41b', true, 5);
        this.labelLoad.stroke = '#110905';
    },   

    resize: function(width, height)
    {
        // this.sgLogo.position.set(R.halfGameWidth, height - 100);
        this.logo.position.set(R.halfGameWidth, R.halfGameHeight - 100);
        this.loadingBar.position.set((width - this.loadingBar.scale.x) * 0.5, R.halfGameHeight + 120);
        this.loadingBarFull.position.set(this.loadingBar.x, this.loadingBar.y + 1);
        this.labelLoad.position.set(R.halfGameWidth, this.loadingBar.y - 22);
        this.labelPercent.position.set(R.halfGameWidth, this.loadingBar.y + 34);
    },

    //
    fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles)
    {
        this.loadingBarFull.scale.x = this.loadingBar.scale.x * progress * 0.01;
        this.labelPercent.setText(progress.toString() + '%');
    },

    //
    loadComplete: function()
    {
        //sfx
        if(R.canAudio) for(var i in this.sfx_key) R.sfx[this.sfx_key[i]] = game.add.audio(this.sfx_key[i]);

        if(!game.device.desktop) R.adjustForMobile();

        //start
        R.loadGame();

        sdkHandler.trigger('loading.completed');
        //R.sceneTransition(300, 'home');
    }
};

//
R.saveGame = function()
{
    if(game.device.localStorage) 
        sdkHandler.trigger('save',{
            key: 'Softgames_BestClassicSpider',
            value: JSON.stringify(R.playerData),
            callback: function(error){
                if (error) console.log(error);
            }
        });
};

//
R.loadGame = function()
{
    if(game.device.localStorage)
    {
        sdkHandler.trigger('restore',{
            key: 'Softgames_BestClassicSpider',
            callback: (function(error,value){
                console.log('callback on restore');

                if (error){
                    console.log(error);
                }else{
                    if (value) {
                        this.data = value;
                    }
                }
            }).bind(this)
        });

        var saveData = this.data;
        if(saveData)
        {
            R.playerData = JSON.parse(saveData);
            R.currentSkin = R.playerData.currentSkin;
        }
    }
};﻿var R = R || {};

//
R.BASE_GAME_WIDTH = 1600;
R.BASE_GAME_HEIGHT = 960;

R.MAX_GAME_WIDTH = 2000;
R.MAX_GAME_HEIGHT = 1720;

R.MIN_GAME_HEIGHT = 1180;

//
R.gameWidth = R.BASE_GAME_WIDTH;
R.gameHeight = R.BASE_GAME_HEIGHT;
R.halfGameWidth = R.gameWidth * 0.5;
R.halfGameHeight = R.gameHeight * 0.5;

R.prevWindowWidth = 0;
R.prevWindowHeight = 0;

//
R.canAudio = false;
R.sfx = {};

//
R.fontName = 'TCCEB';

R.strings = null;

//
R.currentSkin = 'skin1';

R.unlockHint = true;

R.score = 0;
R.bonus = 0;
R.bonusScore = [0, 0];
R.moves = 0;

//
R.playerData = {
    currentSkin: 'skin1',
    autoHint: true,
    score: 0,
    winAnims: [],
};

//
var game = null;

//
R.createImage = function(x, y, atlas, frame, ax, ay)
{
    if(ax === undefined) ax = 0.5;
    if(ay === undefined) ay = ax;

    var image = game.add.image(x, y, atlas, frame);
    image.anchor.set(ax, ay);

    return image;
};

R.shuffleWinAnimatorsOrder = function()
{
    var o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var i = 0;

    R.playerData.winAnims.length = 0;

    while(o.length > 0)
    {
        i = game.rnd.between(0, o.length - 1);
        R.playerData.winAnims.push(o[i]);
        o.splice(i, 1);
    }

};﻿

//var rewardAdsOn = sgSettings.config.rewarded.enabled;

//PlayState
var PlayState = {    

    bg: null,
    spinner: null,
    spinnerBg: null,
    bgSideLeft: null,
    bgSideRight: null,
    bgTop: null,

    btnMenu: null,
    btnHint: null,
    btnUndo: null,
    
    labelTimeName: null,
    labelTime: null,

    labelBonusName: null,
    labelBonus: null,

    labelPointsName: null,
    labelPoints: null,

    tweenPressToStart: null,

    cardPicked: null,
    prevCardPicked: null,
    pointerOffset: null,
    pos0CardPicked: { x: 0, y: 0 },
    wasNotDragged: false,

    rewardAdsOn: null,
    options: null,
    popupWindow: null,
    watchAdWindow: null,
    claimHintsWindow: null,
    noMoreVideosWindow: null,

    autoCompleteWindow: null,
    completeWindow: null,
    nomovesWindow: null,

    numOfHintsUsed: 5,
    timeEventHint: null,

    shadow: null,
    flyText: null,
    eventAutoSolveQWaiting: null,
    eventWaitingWinAnimation: null,

    scoreMoveNum: [0, 0],

    hints: null,

    //
    shutdown: function()
    {
        R.waGroup = null;
        R.cardShaking = null;

        if(R.deck.state === 1)
        {
            R.deck.state = 0;           
            R.saveGame();
        }      

        this.bgSideLeft = null;
        this.bgSideRight = null;
        this.bgTop = null;

        this.bg = null;
        this.spinner = null;
        this.spinnerBg = null;
        this.btnMenu = null;
        this.btnHint = null;
        this.btnUndo = null;     
        
        this.labelTimeName = null;
        this.labelTime = null;

        this.labelBonusName = null;
        this.labelBonus = null;

        this.labelPointsName = null;
        this.labelPoints = null;

        this.tweenPressToStart = null;
      
        this.cardPicked = null;
        this.clearPrevCardPicked();
        this.pointerOffset = null;

        this.options = null;
        this.popupWindow = null;
        this.watchAdWindow = null;
        this.claimHintsWindow = null;
        this.noMoreVideosWindow = null;

        this.autoCompleteWindow = null;
        this.completeWindow = null;
        this.nomovesWindow = null;
        
        this.timeEventHint = null;        
        this.shadow = null;
        this.flyText = null;
        this.eventAutoSolveQWaiting = null;
        this.eventWaitingWinAnimation = null;

        this.hints = null;

        R.moveSaver.shutdown();
        R.deck.shutdown();
    },

    buttonsEnabled: function(b)
    {
        this.btnMenu.inputEnabled = this.btnHint.inputEnabled = this.btnUndo.inputEnabled = b;
    },

    labelsVisible: function(b)
    {
        this.labelPointsName.visible = this.labelPoints.visible = this.labelBonusName.visible = this.labelBonus.visible = this.labelTimeName.visible = this.labelTime.visible = b;
    },

    create: function()
    {               
        game.renderer.clearBeforeRender = false;

        this.bg = R.createImage(0, 0, 'bg_play_landscape', null, 0, 0);

        this.bgSideLeft = R.createImage(0, 0, 'bg_side_left', null, 1, 0);
        this.bgSideRight = R.createImage(0, 0, 'bg_side_right', null, 0, 0);
        this.bgTop = R.createImage(0, 0, 'bg_top', null, 0, 1);

        //ui
        this.btnMenu = R.createButton(200, 866, this.onButtonMenu, this, 'play', 'btn_menu', null);
        this.btnHint = R.createButton(0, 0, this.showHint, this, 'play', 'btn_hint', null);
        this.btnUndo = R.createButton(1370, this.btnMenu.y, this.onButtonUndo, this, 'play', 'btn_undo', null);
        
        this.rewardAdsOn = sgSettings.config.rewarded.enabled;

        if(this.rewardAdsOn) {
            this.spinnerBg = game.add.sprite(game.world.centerX, game.world.centerY, 'bg');
            this.spinnerBg.anchor.setTo(0.5, 0.5);
            this.spinnerBg.alpha = 0;
            
            this.spinner = game.add.sprite(game.world.centerX, game.world.centerY, 'spinner');
            this.spinner.anchor.setTo(0.5, 0.5);
            this.spinner.alpha = 0;

            this.hintText = R.createText(0, 0, 20, this.numOfHintsUsed, '#cba41b', true, 6);
            this.btnHint.addChild(this.hintText);
        }

        //adjust buttons size for mobile
        if(!game.device.desktop)
        {
            var s = 1.5;
            this.btnMenu.scale.set(s);
            this.btnHint.scale.set(s);
            this.btnUndo.scale.set(s);
            this.btnMenu.x = 150;
        }
        
        //labels
        this.labelTimeName = this.createText(R.strings.time, '#cba41b');        
        if(this.labelTimeName.width > 90) this.labelTimeName.scale.set(90 / this.labelTimeName.width);

        this.labelTime = new R.Clock(0, 0, this.labelTimeName.fontSize, '#ffffff');
        game.world.add(this.labelTime);        

        this.labelBonusName = this.createText(R.strings.bonus, '#cba41b');
        if(this.labelBonusName.width > 116) this.labelBonusName.scale.set(116 / this.labelBonusName.width);
        this.labelBonus = this.createText('0', '#ffffff');
        this.labelBonus.anchor.x = 0;
        this.labelBonus.align = 'left';

        this.labelPointsName = this.createText(R.strings.points, '#cba41b');
        this.labelPoints = this.createText('0', '#ffffff');
        this.labelPoints.anchor.x = 0;
        this.labelPoints.align = 'left';

        this.flyText = new R.FlyText(6, this.labelPoints.fontSize);

        //
        this.labelsVisible(false);

        //
        this.createBlinkLabel(R.strings[game.device.desktop ? 'press_to_start' : 'tap_to_start']);
        
        // windows
        this.options = R.createOptionsWindow(this.onCloseOptions, this.onCloseOptions, this, true);

        this.popupWindow = R.PopupWindow(this.onCloseOptions, this.onCloseOptions, this, { 
            title: R.strings.empty_slot_title, 
            msg: R.strings.empty_slot_message 
        });

        this.watchAdWindow = R.PopupWindow(R.incentiviseTrigger, this.onCloseOptions, this, {
            title: '', 
            msg: R.strings.rewarded_ads_msg, 
            btnOk: R.strings.watch, 
            size: 50 
        });

        this.claimHintsWindow = R.PopupWindow(this.claimWindowClose, function() {
            PlayState.numOfHintsUsed = 3;
            PlayState.btnHint.children[0].text = PlayState.numOfHintsUsed;
            PlayState.onCloseOptions();
        },  this, { 
            title: '', 
            msg: R.strings.you_get_more_hints, 
            btnOk: R.strings.claim, 
            size: 50 
        });

        this.noMoreVideosWindow = R.PopupWindow(this.noMoreVideosWindowClose, this.onCloseOptions, this, { 
            title: '',
            msg: R.strings.no_more_videos, 
            btnOk: R.strings.ok, 
            size: 50 
        });

        this.autoCompleteWindow = R.AutoCompleteWindow(this.onAutoCompleteWindowClose, this.onAutoCompleteWindowClose, this);        
        this.nomovesWindow = R.createNoMovesWindow(this.onCloseOptions, this.onCloseOptions, this);

        //
        this.shadow = new R.Shadow();

        //
        this.hints = new R.Hints();

        //
        R.deck.init();

        //
        BootState.fullScreenHandler();
        this.buttonsEnabled(false);
        this.resize(game.width, game.height);
        R.sceneTransition(300, null);              
    },

    claimWindowClose: function()
    {   
        PlayState.numOfHintsUsed = 3;
        PlayState.btnHint.children[0].text = PlayState.numOfHintsUsed;
        PlayState.setPause(false);
        PlayState.claimHintsWindow.close();
    },
    noMoreVideosWindowClose: function() {
        PlayState.setPause(false);
        PlayState.noMoreVideosWindow.close();
    },

    addSpinner: function() {
        game.world.bringToTop(this.spinnerBg);
        game.world.bringToTop(this.spinner);

        this.spinner.animations.add('spinnerAnim');
        this.spinner.animations.play('spinnerAnim', 30, true);

        this.spinnerBg.alpha = 1;

        var tween2 = game.add.tween(this.spinner);
        tween2.to({ alpha: 1 }, 1000, 'Linear', true, 0);
    },

    removeSpinner: function() {
        var tween1 = game.add.tween(this.spinnerBg);
        tween1.to({ alpha: 0 }, 1000, 'Linear', true, 0);

        var tween2 = game.add.tween(this.spinner);
        tween2.to({ alpha: 0 }, 500, 'Linear', true, 0);
    },

    resize: function(width, height)
    {        
        this.bgSideLeft.visible = false;
        this.bgSideRight.visible = false;
        this.bgTop.visible = false;

        var y = height - 53;

        if(width > height)
        {
            var x = (width - 1440) * 0.5;

            this.bg.loadTexture('bg_play_landscape');
            this.bg.position.set(x, 0);

            if(width > 1440)
            {
                this.bgSideLeft.visible = true;
                this.bgSideRight.visible = true;
                
                this.bgSideLeft.scale.x = this.bgSideRight.scale.x = x > 100 ? x / 100 : 1;

                this.bgSideLeft.position.set(x, 0);
                this.bgSideRight.position.set(this.bg.x + 1440, 0);
            }

            this.btnMenu.y = this.btnUndo.y = game.device.desktop ? 866 : 856;
           
            this.labelTimeName.position.set(496 + x, y);            
            this.labelBonusName.position.set(740 + x, y);
            this.labelPointsName.position.set(950 + x, y);
        }
        else
        {
            this.bg.loadTexture('bg_play_portrait');
            this.bg.position.set(0, height - 1440);

            if(height > 1440)
            {
                this.bgTop.visible = true;
                var bgY = this.bg.y;
                this.bgTop.y = bgY;
                this.bgTop.scale.y = bgY > 100 ? bgY / 100 : 1;
            }

            this.btnMenu.y = this.btnUndo.y = height - (game.device.desktop ? 172 : 180);
            
            y = height - 56;
            this.labelTimeName.position.set(250, y);
            this.labelBonusName.position.set(490, y);
            this.labelPointsName.position.set(714, y);
        }

        this.btnUndo.x = width - (game.device.desktop ? 60 : 70);
        this.btnHint.position.set(width - (game.device.desktop ? 150 : 220), this.btnUndo.y);
       
        this.labelTime.position.set(this.labelTimeName.x + 10, y);      
        this.labelBonus.position.set(this.labelBonusName.x + 10, y);        
        this.labelPoints.position.set(this.labelPointsName.x + 10, y);
        
        R.adjustByOrientation(width, height);
        R.deck.resize();        

        if(this.options.exists) this.options.resize(width, height);        
        if(this.popupWindow.exists) this.popupWindow.resize(width, height);
        if(this.autoCompleteWindow.exists) this.autoCompleteWindow.resize(width, height);
        if(this.nomovesWindow.exists) this.nomovesWindow.resize(width, height);

        if(this.completeWindow) this.completeWindow.resize(width, height);
        else if(this.eventWaitingWinAnimation) this.inputOnDownWin();
    },

    createText: function(text, fill)
    {
        var label = R.createText(0, 0, 27, text, fill);        
        label.align = 'right';
        label.anchor.set(1.0, 0.5);
        return label;
    },

    inputOnDown: function(pointer, event)
    {
        if(R.deck.state === 0)
        {
            R.deck.state = 1;
            R.deck.resize();
            return;
        }     

        if(R.cardShaking) R.cardShaking.stopShaking();

        if(game.tweens._tweens.length > 0 && game.tweens._tweens.length !== R.deck.tweensHint.length) return;

        var card = R.deck.pick(pointer.x, pointer.y);

        if(card && card.parent === game.world)
        {            
            this.shadow.cast(card);
            card.setOnTop();
            this.pointerOffset = Phaser.Point.subtract(card, pointer);            
            this.cardPicked = card;

            this.pos0CardPicked.x = card.x;
            this.pos0CardPicked.y = card.y;
            this.wasNotDragged = true;

            if(R.sfx.cardselect) R.sfx.cardselect.play();
        }        
    },

    inputOnUp: function(pointer, event)
    {
        if(this.cardPicked)
        {
            if(this.wasNotDragged)
            {
                var preCardsHiddenN = R.cardsHiddenN;                
                R.deck.autoPut(this.cardPicked, this.cardPicked !== this.prevCardPicked);
                this.prevCardPicked = R.cardsHiddenN < preCardsHiddenN ? null : this.cardPicked;
            }
            else
            {
                R.deck.put(this.cardPicked);
                this.prevCardPicked = null;
            }
            
            this.cardPicked = null;
        }        
    },

    clearPrevCardPicked: function()
    {
        this.prevCardPicked = null;
    },

    start: function()
    {
        this.buttonsEnabled(true);

        this.blinkLabel();
        
        R.deck.start();

        game.input.onDown.add(this.inputOnDown, this);
        game.input.onUp.add(this.inputOnUp, this);

        //
        sdkHandler.trigger('gameStart');
    },    

    beginPlay: function()
    {
        R.deck.state = 1;
        R.score = 0;
        R.bonus = 0;
        R.bonusScore[0] = R.bonusScore[1] = 0;
        R.moves = 0;
        R.unlockHint = true;

        this.scoreMoveNum[0] = this.scoreMoveNum[1] = -2;
        this.timePick = 0;

        this.destroyBlinkLabel();

        this.labelsVisible(true);
        this.labelTime.reset(true);
        this.labelPoints.text = R.score.toString();

        this.timeEventHintReset();
    },    

    update: function()
    {
        if(this.cardPicked)
        {
            this.cardPicked.setPosition(game.input.activePointer.x + this.pointerOffset.x, game.input.activePointer.y + this.pointerOffset.y);
            if(this.wasNotDragged && (Math.abs(this.cardPicked.x - this.pos0CardPicked.x) > 10 || Math.abs(this.cardPicked.y - this.pos0CardPicked.y) > 10)) this.wasNotDragged = false;
            this.shadow.move(this.cardPicked);
        }
        else
        {
            if(this.shadow.card) this.shadow.hiding();
            if(R.cardShaking) R.cardShaking.shaking();
        }
    },

    setPause: function(pause)
    {       
        if(pause)
        {

            game.input.onDown.remove(this.inputOnDown, this);
            game.input.onUp.remove(this.inputOnUp, this);
        }
        else
        {
            game.input.onDown.add(this.inputOnDown, this);
            game.input.onUp.add(this.inputOnUp, this);
        }

        this.buttonsEnabled(!pause);
        this.labelTime.pause(pause);
    },

    onButtonMenu: function()
    {    
        sdkHandler.trigger('beforePlayButtonDisplay', {
            callback: function() {
                this.options.btnNewGame.visible = 1;
                this.options.btnRestart.visible = 1; 
            }
        }, this)

        this.setPause(true);
        this.options.open();
    },

    showHint: function()
    {   
        if(this.numOfHintsUsed <= 0 && this.rewardAdsOn) {
            this.numOfHintsUsed = 0;
            this.setPause(true);
            this.watchAdWindow.open();
        } else if(!this.nomovesWindow.exists && !this.options.exists && 
               !this.cardPicked && R.unlockHint && game.tweens._tweens.length === 0) {
            if(this.rewardAdsOn) {
                this.numOfHintsUsed--;
                PlayState.btnHint.children[0].text = this.numOfHintsUsed;
            }
            this.hints.hint();
        }  
        this.timeEventHintReset();
    },

    onButtonUndo: function()
    {       
        if(game.tweens._tweens.length === 0 || game.tweens._tweens.length === R.deck.tweensHint.length)
        {
            R.deck.clearTweensHint();
            R.moveSaver.undo();
            this.hints.prevMoves = R.moves - 1;
        }
    },

    win: function()
    {
        this.setPause(true);
        R.unlockHint = false; 
        
        if(R.bonus > 0) this.addScore(R.bonus);

        var timeBonus = 10 - this.labelTime.minutes;
        if(timeBonus > 0) this.addScore(timeBonus * 100);

        if(R.playerData.winAnims.length === 0) R.shuffleWinAnimatorsOrder();        
        R['WinAnimator' + R.playerData.winAnims.pop()].init();

        this.eventWaitingWinAnimation = game.time.events.loop(500, this.waitingWinAnimation, this);

        game.input.onDown.add(this.inputOnDownWin, this);                
    },

    createBlinkLabel: function(string)
    {
        if(this.tweenPressToStart) return;

        var labelPressToStart = R.createText(game.width / 2, game.height - 150, 32, string);
        labelPressToStart.fontWeight = 'lighter';

        this.tweenPressToStart = game.add.tween(labelPressToStart).to({ alpha: 0.0 }, 300, Phaser.Easing.Linear.None, false);
    },

    blinkLabel: function()
    {
        if(this.tweenPressToStart.isRunning) return;

        this.tweenPressToStart.start();
        this.tweenPressToStart.yoyo(true);
        this.tweenPressToStart.repeat(-1, 300);
    },

    destroyBlinkLabel: function()
    {
        if(this.tweenPressToStart)
        {
            this.tweenPressToStart.stop();
            this.tweenPressToStart.target.destroy();
            this.tweenPressToStart = null;
        }
    },

    noMoves: function()
    {
        this.setPause(true);            
        this.nomovesWindow.open();        
    },

    move: function()
    {
        if(this.scoreMoveNum[0] !== -2 && this.scoreMoveNum[0] !== R.moves) this.resetBonus(0);
        
        ++R.moves;
        this.timeEventHintReset();               
    },

    scoring: function(value, type)
    {
        if(this.scoreMoveNum[type] === R.moves - 1)
        {
            if(type === 0) this.addBonus(0, value);
            else
            {                
                if(R.bonusScore[1] === 0) this.addBonus(1, value);
                else this.addBonus(1, R.bonusScore[1]);                              
            }            
            this.displayBonus();
        }

        this.scoreMoveNum[type] = R.moves;

        this.addScore(value);
    },

    addScore: function(value)
    {
        R.score += value;
        this.labelPoints.text = R.score.toString();
        this.flyText.launch(this.labelPoints.x + this.labelPoints.width * 0.5, this.labelPoints.y - 20, '+' + value);
    },

    resetBonus: function(type)
    {
        this.scoreMoveNum[type] = -2;
        R.bonusScore[type] = 0;        
    },

    addBonus: function(type, value)
    {
        R.bonusScore[type] += value;
        R.bonus += value;
        this.flyText.launch(this.labelBonus.x + this.labelBonus.width * 0.5, this.labelBonus.y - 20, '+' + value);
    },

    displayBonus: function()
    {
        this.labelBonus.text = R.bonus.toString();
    },

    inputOnDownWin: function()
    {
        this.backgroundVisible(true);

        game.time.events.removeAll();
        this.eventWaitingWinAnimation = null;

        R.waGroup.removeAll(true);

        game.input.onDown.remove(this.inputOnDownWin, this);

        if(!this.completeWindow) {
            this.completeWindow = R.createCompleteWindow(this.completeGame, this);

            this.completeWindow.visible = 0;

            sdkHandler.trigger('beforePlayButtonDisplay', {
                callback: function() {
                      this.completeWindow.visible = 1;
                }
            }, this)
        }

        if(R.sfx.claps) R.sfx.claps.play();        
    },

    onCloseOptions: function()
    {
        PlayState.setPause(false);
    },

    restart: function(button)
    {   
        sdkHandler.trigger('playButtonPressed', {
            callback: function() {
                if(button) button.inputEnabled = false;        

                sdkHandler.trigger('gameOver', { 
                    score: 0
                })
                
                R.sceneTransition(300, 'play');             
            }
        }, this)
    },

    newgame: function(button)
    {   
        sdkHandler.trigger('playButtonPressed', {
            callback: function() {

                if(button) button.inputEnabled = false;        

                HomeState.startOption = 1;

                sdkHandler.trigger('gameOver', { 
                    score: 0
                })

                R.sceneTransition(300, 'home');

            }
        }, this)

    },

    completeGame: function(button)
    {   
        sdkHandler.trigger('playButtonPressed', {
            callback: function() {

                if(button) button.inputEnabled = false;

                R.playerData.score = Math.max(R.playerData.score, R.score);
                R.saveGame();       

                HomeState.startOption = 1;
                R.sceneTransition(300, 'home');

                sdkHandler.trigger('gameOver', { 
                    score: R.score
                })

            }
        }, this)
   
    },

    //
    timeEventHintReset: function()
    {
        if(this.timeEventHint) game.time.events.remove(this.timeEventHint);
        if(R.playerData.autoHint && !this.rewardAdsOn) this.timeEventHint = game.time.events.loop(20000, this.showHint, this);
    },

    showEmptyWarning: function()
    {
        this.setPause(true);
        this.popupWindow.open();
    },

    startWaitingAutoSolveQ: function()
    {
        if(!this.eventAutoSolveQWaiting) this.eventAutoSolveQWaiting = game.time.events.loop(100, this.waitingAutoSolveQ, this);
    },

    waitingAutoSolveQ: function()
    {
        if(game.tweens._tweens.length === 0 && R.cardsHiddenN === R.deck.cards.length)
        {
            game.time.events.remove(this.eventAutoSolveQWaiting);
            this.eventAutoSolveQWaiting = null;
            
            this.setPause(true);
            R.cardsHiddenN = -100;
            this.autoCompleteWindow.open();            
        }         
    },

    onAutoCompleteWindowClose: function()
    {
        if(R.cardsHiddenN === -101)
        {
            R.unlockHint = false;
            if(typeof this.labelTime !== 'undefined') this.labelTime.pause(false);
            R.solver.solve();
        }
        else this.setPause(false);
    },

    waitingWinAnimation: function()
    {       
        if(R.waGroup.total === 0) this.inputOnDownWin();        
    },

    backgroundVisible: function(visible)
    {
        this.bg.visible = visible;
        if(game.width > game.height)
        {
            this.bgSideLeft.visible = visible;
            this.bgSideRight.visible = visible;
        }
        else this.bgTop.visible = visible;

        this.btnMenu.visible = this.btnHint.visible = this.btnUndo.visible = visible;
        this.labelTimeName.visible = this.labelTime.visible = this.labelBonusName.visible = this.labelBonus.visible = visible;
        this.labelPointsName.visible = this.labelPoints.visible = visible;

        R.deck.visible(visible);
    }
};﻿//Publisher
var Publisher = Publisher || {};

//Configurable Options 


//
//Publisher.button = null;


Publisher.onMoregamesButton = function(button)
{
    if(game.scale.isFullScreen) game.scale.stopFullScreen();
    
    sdkHandler.trigger ('moreGames');
    
    //window.open(Publisher.moreGamesURL, '_blank');
};

/*Publisher.resetButton = function(button)
{
    game.input.activePointer.x = 0;
    this.button.input.update(game.input.activePointer);

    game.onFocus.remove(Publisher.resetButton, Publisher);
};*/﻿var R = R || {};

//ParticleSuit
R.ParticleSuit = function(card)
{
    var frame = '';
    switch(R.suits[card.si])
    {
        case 'c': frame = 'clubs'; break;
        case 'd': frame = 'diamonds'; break;
        case 'h': frame = 'hearts'; break;
        case 's': frame = 'spades'; break;
    }

    Phaser.Image.call(this, game, card.x, card.y, 'play', frame);
    this.anchor.set(0.5);

    this.dx = game.rnd.between(0.5, 2);
    if(game.rnd.between(0, 1)) this.dx = -this.dx;
    this.dy = -game.rnd.between(4, 8);
    this.g = game.rnd.realInRange(0.05, 0.2);

    this.dr = game.rnd.realInRange(0.05, 0.1);
    if(game.rnd.between(0, 1)) this.dr = -this.dr;

    this.s = game.rnd.realInRange(0.3, 0.8);
    this.cs = this.s;

    this.ds = game.rnd.realInRange(0.01, 0.06);
    this.dsx = game.rnd.between(0, 1);

    this.scale.set(this.s);

    R.waGroup.add(this);
};

R.ParticleSuit.prototype = Object.create(Phaser.Image.prototype);
R.ParticleSuit.prototype.constructor = R.ParticleSuit;

R.ParticleSuit.prototype.update = function()
{
    this.x += this.dx;
    this.y += this.dy;
    this.rotation += this.dr;
    this.dy += this.g;

    this.cs -= this.ds;
    if(this.cs < -this.s) this.cs = this.s;
    this.dsx ? this.scale.x = this.cs : this.scale.y = this.cs;

    if(this.y - this.height > game.height) R.waGroup.remove(this, true);
};

//Partices Plume
R.ParticlePlume = function(card)
{
    Phaser.Image.call(this, game, card.x, card.y, 'particles', 10);
    this.anchor.set(0.5);
    this.tint = game.rnd.between(0xffff00, 0xffffff);

    this.vx = game.rnd.realInRange(-0.5, 0.5);
    this.vy = game.rnd.realInRange(-0.5, 0.5);    
    this.ds = game.rnd.realInRange(0, 0.01);
    this.va = game.rnd.realInRange(0.01, 0.05);

    this.scale.set(game.rnd.realInRange(0.5, 1.2));

    if(game.device.desktop)
    {
        var i = R.waGroup.getChildIndex(card);
        if(i < 1) i = 1;
        R.waGroup.addAt(this, i - 1);
    }
    else R.waGroup.add(this);
};

R.ParticlePlume.prototype = Object.create(Phaser.Image.prototype);
R.ParticlePlume.prototype.constructor = R.ParticlePlume;

R.ParticlePlume.prototype.update = function()
{
    this.x += this.vx;
    this.y += this.vy;
    
    this.vy += 0.01;

    this.scale.x -= this.ds;
    this.scale.y -= this.ds;

    this.alpha -= this.va;

    if(this.alpha <= 0)
    {
        this.alpha = 0;
        R.waGroup.remove(this, true);
    }
};

R.particleFireworkFrames = [0, 7, 9, 10];

//Partice firework
R.ParticleFirework = function(x, y, color, n)
{
    Phaser.Image.call(this, game, x, y, 'particles', game.rnd.pick(R.particleFireworkFrames));
    this.anchor.set(0.5);
    this.tint = color;

    var velocity = new Phaser.Point(game.rnd.realInRange(-1, 1), game.rnd.realInRange(-1, 1));
    velocity.normalize();

    var s = game.rnd.realInRange(5, 10);

    this.vx = velocity.x * s;
    this.vy = velocity.y * s;

    this.slow = game.rnd.realInRange(0.92, 0.97);

    this.ds = 0.01;
    this.va = game.rnd.realInRange(0.01, 0.02);

    this.scale.set(game.rnd.realInRange(0.8, 1));

    R.waGroup.add(this);

    if(n > 1) new R.ParticleFirework(x, y, color, n - 1);
};

R.ParticleFirework.prototype = Object.create(Phaser.Image.prototype);
R.ParticleFirework.prototype.constructor = R.ParticleFirework;

R.ParticleFirework.prototype.update = function()
{
    this.x += this.vx;
    this.y += this.vy;

    this.vx *= this.slow;
    this.vy *= this.slow;

    this.vy += 0.05;

    this.scale.x += this.ds;
    this.scale.y += this.ds;

    this.alpha -= this.va;

    if(this.alpha <= 0)
    {
        this.alpha = 0;
        R.waGroup.remove(this, true);
    }
};﻿var R = R || {};

//SelectSuite
R.createSuitWindow = function(onCloseCallback, onCloseCallbackContext)
{
    var window = new R.Window(true, false, onCloseCallback, onCloseCallbackContext);

    window.addChild(R.createText(window.width / 2, 100, 80, R.strings.game_mode, '#cba41b', true, 6));

    var x = window.width / 3, dx = 240, dx2 = 30, y = 200;
    R.createCardSequence(x - dx + dx2, y, ['s', 's', 's', 's'], window);
    R.createCardSequence(x * 2 - dx, y, ['s', 'h', 's', 'h'], window);
    R.createCardSequence(x * 3 - dx - dx2, y, ['s', 'h', 'c', 'd'], window);    
    
    y = 440;
    R.createSuiteButton(x * 0.5 + dx2, y, 1, R.strings.suit1, window);
    R.createSuiteButton(x * 1.5, y, 2, R.strings.suit2, window);
    R.createSuiteButton(x * 2.5 - dx2, y, 3, R.strings.suit3, window);    

    return window;
};

R.onSuitButton = function(button)
{
    R.complexity = button.name;
    button.parent.buttonsEnabled(false);

    R.deck.original.length = 0;
    R.sceneTransition(300, 'play');
};

//
R.createCardSequence = function(x, y, suits, parent)
{    
    for(var i = 6; i < 10; ++i)
    {
        var image = R.createImage(x, y, i.toString() + suits[i - 6], 0, 0);
        image.scale.set(0.8);
        parent.addChild(image);
        x += 30;
    }
};

//
R.createSuiteButton = function(x, y, name, string, window)
{
    var button = window.createButton(x, y, R.onSuitButton, this, 'ui', 'button_green', string, 36);
    button.scale.x = 0.68;
    button.children[0].scale.x = 1 / button.scale.x;
    button.name = name;

    button.events.onInputDown.add(function(b) { b.children[0].scale.set(0.98 / button.scale.x, 0.98); }, button);
    button.events.onInputUp.add(function(b) { b.children[0].scale.set(1 / button.scale.x, 1); }, button);
};

//
R.createWindowButton = function(x, y, string, fontSize, callback, context, scale, window)
{
    var button = window.createButton(x, y, callback, context, 'ui', 'button_green', string, fontSize);

    if(scale != 1)
    {
        button.scale.x = scale;
        button.children[0].scale.x = 1 / scale;
        button.events.onInputDown.add(function(b) { b.children[0].scale.set(0.98 / button.scale.x, 0.98); }, button);
        button.events.onInputUp.add(function(b) { b.children[0].scale.set(1 / button.scale.x, 1); }, button);
    }
    
    return button;
};

//
//Options Window
R.createOptionsWindow = function(onCloseCallback, onCloseCallbackContext, isPlayState)
{
    var window = new R.Window(true, false, onCloseCallback, onCloseCallbackContext);    

    window.selectSkinWindow = R.ChoiceSkinWindow(R.onChoiceSkinClose, window);

    window.resize = function(w, h)
    {
        R.Window.prototype.resize.call(this, w, h);
        if(this.selectSkinWindow.exists) this.selectSkinWindow.resize(w, h);
    };

    window.addChild(R.createText(window.width / 2, 100, 80, R.strings.options, '#cba41b', true, 6));

    var hints = new R.CheckButton(50, 190, R.playerData.autoHint, R.onCheckButtonHints, R, R.strings.hints, 34);
    window.addChild(hints);
    window.buttons.push(hints);

    var sound = new R.CheckButton(hints.x, 260, !game.sound.mute, R.onSoundButtonHints, R, R.strings.sound, 34);
    window.addChild(sound);
    window.buttons.push(sound);    

    var w = Math.max(hints.children[1].width, sound.children[1].width) + hints.width;    
    sound.x = hints.x = (window.width - w) * 0.5;

    var x = window.width * 0.5;
    if(isPlayState)
    {
        window.btnNewGame = R.createWindowButton(x - 180, 380, R.strings.new_game, 40, PlayState.newgame, PlayState, 1, window);
        window.btnRestart = R.createWindowButton(x + 180, window.btnNewGame.y, R.strings.restart, 40, PlayState.restart, PlayState, 1, window);
        window.btnNewGame.visible = 0;
        window.btnRestart.visible = 0;
    }

    var btnSkin = R.createWindowButton(isPlayState ? x - 180 : x, isPlayState ? 480 : 380, R.strings.skin, 40, R.onChoiceSkin, window, 1, window);
    //btnSkin.scale.set(0.8);
    var btnContinue = R.createWindowButton(isPlayState ? x + 180 : x, isPlayState ? btnSkin.y : 480, isPlayState ? R.strings.continue : R.strings.ok, 40, window.close, window, 1, window);

    return window;
};

//
R.onChoiceSkin = function()
{    
    this.buttonsEnabled(false);
    this.selectSkinWindow.setCurrentSelectorPos();
    this.selectSkinWindow.open();
};

R.onChoiceSkinClose = function()
{
    this.buttonsEnabled(true);
};

//
R.onCheckButtonHints = function()
{
    R.playerData.autoHint = !R.playerData.autoHint;   
    R.saveGame();
    if(PlayState.hints) PlayState.timeEventHintReset();
};

//
R.onSoundButtonHints = function()
{
    game.sound.mute = !game.sound.mute;
};

//ChoiceSkinWindow
R.ChoiceSkinWindow = function(onCloseCallback, onCloseCallbackContext)
{
    var window = new R.Window(false, false, onCloseCallback, onCloseCallbackContext);

    window.selector = R.createImage(0, 0, 'play', 'selector');

    window.setCurrentSelectorPos = function()
    {
        if(R.playerData.currentSkin != R.currentSkin) R.currentSkin = R.playerData.currentSkin;

        var skin = null;
        var i = this.children.length;
        while(i--)
        {
            skin = this.children[i];
            if(R.currentSkin == skin.name)
            {
                this.selector.position.set(skin.x + skin.width * 0.5, skin.y + skin.height * 0.5);
                break;
            }
        }
    };

    //
    window.addChild(R.createText(window.width / 2, 60, 50, R.strings.change_backs, '#cba41b', true, 6));

    var skin = null;
    var x = 20, y = 100, s = 0.81; 

    for(var i = 0; i < 14; i++)
    {
        var name = 'skin' + (i + 1).toString();

        skin = R.createImage(x, y, name, null, 0, 0);
        skin.scale.set(s);
        skin.name = name;

        skin.inputEnabled = true;
        skin.events.onInputDown.add(R.onChoiceSkinSelect, window);

        window.addChild(skin);

        if(i == 6)
        {
            x = 20;
            y += R.hCard_H * skin.scale.y + 20;
        }
        else x += R.wCard_H * skin.scale.x + 10;
    }

    var btnOk = R.createWindowButton(window.width * 0.5, 490, R.strings.ok, 40, R.onChoiceSkinButtonOk, window, 1, window);

    window.addChild(window.selector);

    return window;
};

R.onChoiceSkinSelect = function(skin, pointer)
{
    if(R.sfx.button) R.sfx.button.play();

    if(R.currentSkin == skin.name) return;

    var window = skin.parent;    
    window.selector.position.set(skin.x + skin.width * 0.5, skin.y + skin.height * 0.5);
    window.selector.scale.set(1.2);    
    game.add.tween(window.selector.scale).to({ x: 1, y: 1 }, 100, Phaser.Easing.Linear.None, true);
    R.currentSkin = skin.name;
};

R.onChoiceSkinButtonOk = function(button)
{
    if(R.playerData.currentSkin != R.currentSkin)
    {
        R.playerData.currentSkin = R.currentSkin;
        R.saveGame();
        if(R.deck.srcPlace) R.deck.setSkin();
    }
    this.close();
};


//Popup window
R.PopupWindow = function(btnOkCallback, onCloseCallback, onCloseCallbackContext, winProps)
{   
    var window = new R.Window(false, false, onCloseCallback, onCloseCallbackContext);
    window.addChild(R.createText(window.width / 2, 60, 50, winProps.title, '#cba41b', true, 6));

    var labelMessage = R.createText(window.width / 2, window.height / 2 - 20, 
        (winProps.size ? winProps.size : 42), winProps.msg, '#cba41b', true, 4, true);    

    labelMessage.wordWrapWidth = window.width - 60;
    window.addChild(labelMessage);

    var btnOk = R.createWindowButton(window.width * 0.5, 490, (winProps.btnOk ? winProps.btnOk : R.strings.ok), 
        (winProps.size ? winProps.size : 40), btnOkCallback, window, 1, window);

    return window;
};

R.incentiviseTrigger = function() {
    PlayState.watchAdWindow.close();

    sdkHandler.trigger('rewardedAd', {
        callback: function(result) {
            if(result) {
                PlayState.claimHintsWindow.open();
            } else {
                PlayState.noMoreVideosWindow.open();
            }
            PlayState.setPause(true);         
        }
    }, this)
}

//Auto complete window
R.AutoCompleteWindow = function(onCloseCallback, onCloseCallbackContext)
{
    var window = new R.Window(false, false, onCloseCallback, onCloseCallbackContext);

    window.addChild(R.createText(window.width / 2, 60, 50, R.strings.auto_complete_title, '#cba41b', true, 6));

    var labelMessage = R.createText(window.width / 2, window.height / 2 - 20, 48, R.strings.auto_complete_message, '#cba41b', true, 4, true);
    labelMessage.wordWrapWidth = window.width - 60;

    window.addChild(labelMessage);

    var btnYes = R.createWindowButton(window.width * 0.5 + 200, 460, R.strings.yes, 40, R.onAutoCompleteWindowYes, window, 1, window);
    var btnNo = R.createWindowButton(window.width * 0.5 - 200, btnYes.y, R.strings.no, 40, window.close, window, 1, window);

    return window;
};

R.onAutoCompleteWindowYes = function(button)
{
    R.cardsHiddenN = -101;
    this.close();
};

//Complete window
R.createCompleteWindow = function(onCloseCallback, onCloseCallbackContext)
{
    var window = new R.Window(true, false, onCloseCallback, onCloseCallbackContext);

    window.addChild(R.createText(window.width * 0.5, 70, 60, R.strings.congratulations, '#cba41b', true, 6));

    window.addChild(R.createImage(window.width * 0.5 - 352.5, 120, 'ui', 'bg_popup_game_over', 0, 0));

    if(R.score > R.playerData.score)
    {
        var label = R.createText(window.width * 0.5, 220, 60, R.strings.new_best_score, '#cba41b', true, 6);
        if(label.width > 690) label.fontSize *= (690 / label.width);
        window.addChild(label);
        window.addChild(R.createText(window.width * 0.5, 290, 60, R.score, '#ffffff', true, 6));
    }
    else
    {
        //line 1
        var labelYourScore = R.createText(0, 220, 60, R.strings.your_score, '#cba41b', true, 6);
        var labelYourScoreV = R.createText(0, 220, 60, R.score, '#ffffff', true, 6);
        
        labelYourScore.anchor.x = labelYourScoreV.anchor.x = 0;

        var lineWidth = labelYourScore.width + 60 + labelYourScoreV.width;
        var lineX = (window.width - lineWidth) * 0.5;

        labelYourScore.x = lineX;
        labelYourScoreV.x = lineX + labelYourScore.width + 60;

        //line 2
        var labelBestScore = R.createText(0, 290, 50, R.strings.best_score, '#cba41b', true, 6);
        var labelBestScoreV = R.createText(0, 290, 50, R.playerData.score, '#ffffff', true, 6);

        labelBestScore.anchor.x = labelBestScoreV.anchor.x = 0;

        lineWidth = labelBestScore.width + 50 + labelBestScoreV.width;
        lineX = (window.width - lineWidth) * 0.5;

        labelBestScore.x = lineX;
        labelBestScoreV.x = lineX + labelBestScore.width + 50;

        //
        window.addChild(labelYourScore);
        window.addChild(labelYourScoreV);
        window.addChild(labelBestScore);
        window.addChild(labelBestScoreV);
    }

    var btnNewGame = R.createWindowButton(window.width * 0.5, 470, R.strings.new_game, 40, onCloseCallback, onCloseCallbackContext, 1, window);
    
    btnNewGame.visible = 0;

    sdkHandler.trigger('beforePlayButtonDisplay', {
        callback: function() {
            btnNewGame.visible = 1;
        }
    }, this)

    window.open();

    return window;
};

//No Moves window
R.createNoMovesWindow = function(onCloseCallback, onCloseCallbackContext)
{
    var window = new R.Window(true, false, onCloseCallback, onCloseCallbackContext);

    window.addChild(R.createText(window.width * 0.5, 70, 60, R.strings.no_moves_title, '#cba41b', true, 6));

    var labelMessage = R.createText(window.width * 0.5, 170, 42, R.strings.no_moves_message, '#cba41b', true, 4, true);
    labelMessage.wordWrapWidth = window.width - 60;

    window.addChild(labelMessage);

    var btnNewGame = R.createWindowButton(window.width * 0.5, 300, R.strings.new_game, 40, PlayState.newgame, PlayState, 1, window);
    var btnRestart = R.createWindowButton(btnNewGame.x, btnNewGame.y + 90, R.strings.restart, 40, PlayState.restart, PlayState, 1, window);
    var btnContinue = R.createWindowButton(btnNewGame.x, btnRestart.y + 90, R.strings.continue, 40, window.close, window, 1, window);

    btnNewGame.visible = 0;
    btnRestart.visible = 0;

    sdkHandler.trigger('beforePlayButtonDisplay', { 
        callback: function() {
            btnNewGame.visible = 1;
            btnRestart.visible = 1;           
        }
    })   

    return window;
};

//fly text
R.FlyText = function(n, fontSize)
{
    this.pool = [];

    var label = null;
    for(var i = 0; i < n; ++i)
    {
        label = R.createText(0, 0, fontSize, '', '#ffffff', true, 4);
        label.flyText = this;
        label.update = R.flyTextUpdateLabel;
        game.world.remove(label);                       
        this.pool.push(label);
    }
};

R.FlyText.prototype.constructor = R.FlyText;

R.FlyText.prototype.launch = function(x, y, text)
{    
    if(this.pool.length === 0) return; 
    
    var label = this.pool.pop();        
   
    label.text = text;    
    label.position.set(x, y);
    game.world.add(label);    
};

R.FlyText.prototype.kill = function(label)
{
    label.alpha = 1;   
    game.world.remove(label);    
    this.pool.push(label);
};

R.flyTextUpdateLabel = function()
{
    this.y -= 1;
    this.alpha -= 0.015;
    if(this.alpha <= 0) this.flyText.kill(this);
};﻿var R = R || {};

//UI
R.createText = function(x, y, size, text, fill, isStroke, strokeThicknes, isWrap)
{
    if(!fill) fill = '#ffffff';
    label = game.add.text(x, y, text);
    label.font = R.fontName;
    label.anchor.set(0.5);
    label.align = 'center';
    label.fontSize = size;
    label.fill = fill;

    if(isStroke)
    {
        label.stroke = '#000000';
        label.strokeThickness = strokeThicknes;
    }
    if(isWrap)
    {
        label.wordWrap = true;
        label.wordWrapWidth = game.width;
    }
    return label;
};

//Button
R.createButton = function(x, y, callback, context, atlas, frame, string, fontSize)
{
    var button = game.add.button(x, y, atlas, callback, context, frame, frame, frame + '_pushed', frame);
    button.anchor.set(0.5);
    if(R.sfx.button) button.setDownSound(R.sfx.button);

    if(string)
    {
        var label = R.createText(-2, -4, fontSize, string, '#ffffff', true, 6);
        label.stroke = '#000000';
        if(label.width > button.width - 50) label.fontSize = Math.floor(fontSize * ((button.width - 50) / label.width));

        button.addChild(label);

        button.events.onInputDown.add(function(b) { b.children[0].y = 4; b.children[0].scale.set(0.98); }, button);
        button.events.onInputUp.add(function(b) { b.children[0].y = -4; b.children[0].scale.set(1); }, button);
    }

    return button;
};

//CheckButton
R.CheckButton = function(x, y, checked, callback, context, string, fontSize)
{
    Phaser.Image.call(this, game, x, y, 'ui', 'bg_swip');    
    this.anchor.set(0, 0.5);

    this.check = R.createImage(0, 0, 'ui', 'check_green', 0, 0.5);

    this.checked = checked;
    
    var label = R.createText(70, 0, fontSize, string, '#ffffff', true, 6);
    label.anchor.set(0, 0.5);
    label.align = 'left';

    this.inputEnabled = true;    
    this.events.onInputDown.add(this.onInputDown, this);
    this.events.onInputDown.add(callback, context);

    this.addChild(this.check);
    this.addChild(label);

    this.setCheck(checked);
};

R.CheckButton.prototype = Object.create(Phaser.Image.prototype);
R.CheckButton.prototype.constructor = R.CheckButton;

R.CheckButton.prototype.setCheck = function(checked)
{
    this.checked = checked;
    this.check.x = checked ? 27 : 2;
    this.check.frameName = checked ? 'check_green' : 'check_grey';
};

R.CheckButton.prototype.onInputDown = function()
{
    if(R.sfx.button) R.sfx.button.play();
    this.setCheck(!this.checked);
};

//Window
R.Window = function(createCurtain, visible, onCloseCallback, onCloseCallbackContext)
{
    if(createCurtain)
    {
        this.bitmap = game.add.bitmapData(R.bmdSize, R.bmdSize);
        this.bitmap.ctx.beginPath();
        this.bitmap.ctx.rect(0, 0, R.bmdSize, R.bmdSize);
        this.bitmap.ctx.fillStyle = '#000000';
        this.bitmap.ctx.fill();

        this.curtain = game.add.image(0, 0, this.bitmap, null);              
        this.curtain.events.onDestroy.add(this.shutdown, this);

        if(!visible)
        {
            this.curtain.exists = false;
            game.world.remove(this.curtain);
        }
    }

    Phaser.Image.call(this, game, 0, 0, 'ui', 'bg_popup');

    if(visible)
    {
        game.world.add(this);
        this.resize(game.width, game.height);
    }
    else this.exists = false;

    this.buttons = [];

    var btnClose = this.createButton(825, 37, this.close, this, 'ui', 'btn_close', null);

    if(!game.device.desktop) btnClose.hitArea = new Phaser.Rectangle(-60, -60, 120, 120);    

    this.onCloseCallback = onCloseCallback;
    this.onCloseCallbackContext = onCloseCallbackContext;

    this.tween = null;
};

R.Window.prototype = Object.create(Phaser.Image.prototype);
R.Window.prototype.constructor = R.Window;

R.Window.prototype.shutdown = function()
{
    this.bitmap.destroy();
};

R.Window.prototype.resize = function(width, height)
{
    if(this.curtain)
    {
        this.curtain.bringToTop();
        this.curtain.scale.set(width / R.bmdSize, height / R.bmdSize);
    }

    this.position.set((width - 859) * 0.5, (height - 554) * 0.5);

    if(this.tween && this.tween.isRunning)
    {
        this.tween.stop(true);
        this.tween = null;
    }

    this.bringToTop();
};

R.Window.prototype.open = function()
{
    if(this.curtain)
    {
        this.curtain.exists = true;
        game.world.add(this.curtain);
    }
    this.exists = true;
    game.world.add(this);
    this.resize(game.width, game.height); 
    this.buttonsEnabled(false);

    var x = this.x;
    this.x = -this.width;
    this.tween = game.add.tween(this).to({ x: x }, 200, Phaser.Easing.Linear.None, true);
    this.tween.onComplete.add(function() { this.buttonsEnabled(true); }, this);
    if(this.curtain)
    {
        this.curtain.alpha = 0;
        game.add.tween(this.curtain).to({ alpha: 0.8 }, 200, Phaser.Easing.Linear.None, true);
    }

    if(R.sfx.dlg) R.sfx.dlg.play();
};

R.Window.prototype.close = function()
{
    this.buttonsEnabled(false);
    this.tween = game.add.tween(this).to({ x: -this.width }, 200, Phaser.Easing.Linear.None, true);
    this.tween.onComplete.add(this.onCloseComplete, this);
    if(this.curtain) game.add.tween(this.curtain).to({ alpha: 0 }, 200, Phaser.Easing.Linear.None, true);

    if(R.sfx.dlg) R.sfx.dlg.play();
};

R.Window.prototype.onCloseComplete = function()
{
    if(this.curtain)
    {
        this.curtain.exists = false;
        game.world.remove(this.curtain);
    }
    this.exists = false;
    game.world.remove(this);

    this.tween = null;

    if(this.onCloseCallback) this.onCloseCallback.call(this.onCloseCallbackContext);
};

R.Window.prototype.buttonsEnabled = function(enabled)
{
    var i = this.buttons.length;
    while(i--) this.buttons[i].inputEnabled = enabled;
    this.tween = null;
};

R.Window.prototype.createButton = function(x, y, callback, context, atlas, frame, string, fontSize)
{
    var button = R.createButton(x, y, callback, context, atlas, frame, string, fontSize);
    this.addChild(button);
    this.buttons.push(button);
    return button;
};﻿var R = R || {};

R.bitmapData = null;
R.bmdSize = 10;

R.sceneTransition = function(time, nextState)
{
    if(!R.bitmapData)
    {
        R.bitmapData = game.add.bitmapData(R.bmdSize, R.bmdSize);
        R.bitmapData.ctx.beginPath();
        R.bitmapData.ctx.rect(0, 0, R.bmdSize, R.bmdSize);
        R.bitmapData.ctx.fillStyle = '#003720';
        R.bitmapData.ctx.fill();
    }

    var curtain = game.add.sprite(0, 0, R.bitmapData);
    curtain.scale.set(game.width / R.bmdSize, game.height / R.bmdSize);
    if(nextState) curtain.alpha = 0.0;    

    game.add.tween(curtain).to({ alpha: 1.0 - curtain.alpha }, time, Phaser.Easing.Linear.None, true).onComplete.add(function()
    {        
        if(nextState) game.state.start(nextState);
        else
        {           
            curtain.destroy();            
            var currentState = game.state.getCurrentState();
            if('start' in currentState && typeof currentState.start == 'function') currentState.start();
        }
    });    
};﻿var R = R || {};

R.shd = 7;

R.Shadow = function()
{
    var gfx = game.add.graphics(0, 0);
    gfx.lineStyle(0);

    this.distance = 0;
    this.gfx = gfx;
    this.card = null;
};

R.Shadow.prototype = {

    setPosition: function(card)
    {        
        this.gfx.position.set(card.x + this.distance, card.y + this.distance);
    },

    cast: function(topCard)
    {
        var gfx = this.gfx;

        gfx.clear();                
        gfx.beginFill(0x000000, 0.25);
        gfx.drawRoundedRect(0, 0, R.wCard, topCard.getBottomCard().y - topCard.y + R.hCard, 5);
        gfx.endFill();
        gfx.visible = true;
        this.distance = 2;
        this.card = topCard;

        game.world.bringToTop(gfx);
    },

    move: function(card)
    {
        if(this.distance < R.shd)
        {
            this.distance += 2;
            if(this.distance > R.shd) this.distance = R.shd;
        }
        this.setPosition(card);
    },

    hiding: function()
    {
        if(this.distance > 2)
        {
            this.distance -= 2;
            if(this.distance < 2) this.distance = 2;
            this.setPosition(this.card);
        }
        else
        {
            this.card = null;
            this.gfx.visible = false;
        }
    }
};

R.Shadow.prototype.constructor = R.Shadow;﻿var R = R || {};

//Solver
R.solver = {

    solve: function()
    {
        var columns = R.deck.columns;

        var kings = [];
        var cards = [];
        var sorted = [];
        var card = null;
        var si = -1;

        //step 0
        for(var i = 0; i < R.deck.cards.length; ++i)
        {
            card = R.deck.cards[i];
            card.open(true, false);
            game.world.add(card);
            card.vi === 12 ? kings.push(card) : cards.push(card);           
        }

        R.deck.srcPlace.visible = false;
        R.deck.cards.length = 0;
        while(R.deck.pile.length > 0) R.deck.removeStock();

        //step 1
        for(var i in columns)
        {
            card = columns[i].topCard;
            while(card)
            {
                card.vi === 12 ? kings.push(card) : cards.push(card);                
                columns[i].remove(card);
                card.over = null;                
                card = columns[i].topCard;
            }
        }
        
        //step 2
        for(var i in kings)
        {
            sorted.push([]);
            sorted[i].push(kings[i]);

            si = kings[i].si;
            vi = kings[i].vi;

            while(vi--)
            {
                card = this.findCard(cards, si, vi);
                if(card) sorted[i].push(card);
                else { console.log('error'); return; }
            }
        }

        //step 3
        var s = 0;
        var delay = 0;
        for(var i in sorted)        
        {            
            s = 0;
            while(s < 13)
            {                
                columns[i].easyAddOne(sorted[i][s]);
                ++s;
            }

            columns[i].setPosition(columns[i].x, columns[i].y);

            game.time.events.add(delay, PlayState.move, PlayState);
            game.time.events.add(delay, R.deck.isAllSorted, R.deck, columns[i].topCard);
            delay += 1350;
        }
    },

    findCard: function(cards, si, vi)
    {
        var i = cards.length;
        while(i--)
        {
            if(cards[i].si === si && cards[i].vi === vi)
            {
                var card = cards[i];
                cards.splice(i, 1);
                return card;
            }
        }
        return null;
    }
};

//Hints
R.Hints = function()
{
    this.movies = [];
    this.idxMovies = -1;
    this.prevMoves = -1;
};

R.Hints.prototype = {

    hint: function()
    {        
        if(this.prevMoves < R.moves)
        {
            this.getAllPossibleMovies();            
            this.prevMoves = R.moves;
            this.idxMovies = 0;
        }
        
        if(this.movies.length > 0)
        {
            var card1 = this.movies[this.idxMovies][0];
            var card2 = this.movies[this.idxMovies][1];

            if(!card1)
            {
                if(card2) R.deck.markHint(card2);
                else R.deck.markHint(R.deck.srcPlace);
            }
            else
            {
                while(card1)
                {
                    R.deck.markHint(card1);
                    card1 = card1.over;
                }

                R.deck.timeEventHint = game.time.events.add(500, R.deck.markHint, R.deck, card2, true);
                R.unlockHint = false;
                game.time.events.add(800, function() { R.unlockHint = true; }, this);
            }

            if(++this.idxMovies === this.movies.length) this.idxMovies = 0;
        }        
        else PlayState.noMoves();
    },

    getAllPossibleMovies: function()
    {
        var columns = R.deck.columns;
        var card1 = null;
        var card2 = null;
        var i = 0;

        //
        for(i = 0; i < 10; ++i) columns[i].countSorted();

        //
        this.movies.length = 0;

        //
        for(var c = 0; c < 10; ++c)
        {
            card1 = columns[c].getMostBottomSortedCard();

            while(card1)
            {
                for(i = 0; i < 10; ++i)
                {
                    if(i === c) continue;

                    if(columns[i].checkCard(card1))
                    {
                        card2 = columns[i].topCard;                        

                        if((!card1.under && card2) ||
                           (card1.under && !card1.under.isOpen) ||
                           (card1.under && card1.vi + 1 !== card1.under.vi) ||
                           (card2 && card1.under && card1.si === card2.si && card1.si !== card1.under.si) ||
                           (card2 && card1.si === card2.si && card1.column.untilRown < card2.column.untilRown))
                        {                            
                            this.movies.push([card1, card2 ? card2 : R.deck.cardPlaces[i]]);
                        }
                    }
                }

                card1 = card1.over;
            }
        }

        //
        if(this.movies.length > 1) this.movies.sort(this.sort);

        //
        if(R.deck.cards.length > 0)
        {
            var c = R.deck.emptyColumnIdx();
            if(c === -1) this.movies.push([null, null]);
            else this.movies.push([null, R.deck.cardPlaces[c]]);
        }
    },

    /*
    когда r надо сдвинуть ближе к началу, возвращаем +1, если l, то возвращаем -1, равнозначны - 0
    */
    sort: function(l, r)
    {
        var l1 = l[0];
        var r1 = r[0];        

        var l2 = l[1];
        var r2 = r[1];            

        if(l2.name != 'e')
        {
            if(r2.name != 'e')
            {
                if(r1.si === r2.si)
                {
                    if(l1.si === l2.si)
                    {
                        if(r2.column.rown === l2.column.rown)
                        {
                            if(r1.column.rown > l1.column.rown) return 1;
                            return r1.vi - l1.vi;
                        }
                        return r2.column.rown - l2.column.rown;
                    }

                    return 1;
                }

                if(l1.si === l2.si) return -1;

                if(r1.under && !r1.under.isOpen)
                {
                    if(l1.under && !l1.under.isOpen)
                    {
                        return r1.vi - l1.vi;
                        /*if(r2.column.rown === l2.column.rown)
                        {
                            if(r1.column.rown > l1.column.rown) return 1;
                            return r1.vi - l1.vi;
                        }
                        return r2.column.rown - l2.column.rown;*/
                    }
                    return 1;
                }
                
                if(l1.under && !l1.under.isOpen) return -1;

                return 0;
            }            
        }       

        return r1.column.untilRown - l1.column.untilRown;
    }
}

R.Hints.prototype.constructor = R.Hints;﻿var R = R || {};

//
R.waGroup = null;

//
R.WinAnimatorMoveFoundations = function(onComplete, context, c)
{
    R.waGroup = game.add.group();

    var columns = R.deck.columns;
    var foundations = R.deck.foundations;    
    var delay = 0;
    var tween = null;
    var dc = game.width > game.height ? 1 : -1;

    var i = 8;
    while(i--)    
    {
        delay += 200;
        R.waGroup.addAt(foundations[i].pile[12], 0);
        tween = game.add.tween(foundations[i].pile[12]).to({ x: columns[c].x, y: columns[c].y }, 500, Phaser.Easing.Linear.None, true, delay);
        if(R.sfx.cardmove) tween.onStart.add(function() { R.sfx.cardmove.play(); }, this);
        c += dc;
    }

    tween.onComplete.add(R.WinAnimatorAdjustFoundation, R);
    tween.onComplete.add(onComplete, context);

    if(R.sfx.vic) R.sfx.vic.play();
};

R.WinAnimatorAdjustFoundation = function()
{
    var foundations = R.deck.foundations;
    for(var i = 0; i < 8; ++i) foundations[i].setPosition(foundations[i].lastCard.x, foundations[i].lastCard.y);    
};

//===================================================================================================Animation 1
R.WinAnimator1 = {

    init: function()
    {
        R.WinAnimatorMoveFoundations(this.prepare, this, game.width > game.height ? 2 : 9);        
    },

    prepare: function()
    {
        var foundations = R.deck.foundations;
        var card = null;
        var delayCard = 0; 
        var delayRow = 0;
        var f = 8;
        var p = 0;

        while(f--)
        {
            p = 13;            
            while(p--)
            {
                card = foundations[f].pile[p];
                game.time.events.add(delayCard, this.start, card);
                if(p > 0) card.under = foundations[f].pile[p - 1];              
                delayCard += 500;
            }

            foundations[f].pile.length = 0;
            delayRow += 100;
            delayCard = delayRow;
        }
    },

    start: function()
    {
        this.vY = -game.rnd.realInRange(1, 3);
        this.vX = -game.rnd.realInRange(1, 1.5);

        this.anchor.x = 0.5;
        this.x += this.width * 0.5;
               
        if(this.under) R.waGroup.addAt(this.under, 0);
        R.waGroup.addAt(this, 0);

        this.update = R.WinAnimator1.update;
        if(R.sfx.cardselect) R.sfx.cardselect.play();
    },

    update: function()
    {
        this.x += this.vX;
        this.y += this.vY;

        this.vY += 0.1;

        var bottom = this.y + this.height * this.scale.y;
        if(bottom > game.height)
        {
            this.scale.y = (this.height * this.scale.y - bottom + game.height) / this.height;
            if(this.scale.y < R.scaleCard * 0.5)
            {
                var i = game.device.desktop ? (this.vi * 1 + 1) : 1;
                while(i--) new R.ParticleSuit(this);                
                R.waGroup.remove(this, true);
                if(R.sfx.card) R.sfx.card.play();
                if(R.sfx.piano && !R.sfx.piano.isPlaying) R.sfx.piano.play();
            }
            this.scale.x = 2 * R.scaleCard - this.scale.y;
        }
    }
};

//===================================================================================================Animation 2
R.WinAnimator2 = {

    init: function()
    {
        R.WinAnimatorMoveFoundations(this.prepare, this, game.width > game.height ? 1 : 8);
    },

    prepare: function()
    {
        var foundations = R.deck.foundations;
        var card = null;
        var delayCard = 0;        
        var f = 8;       

        while(f--)
        {
            card = foundations[f].pile.pop();
            card.under = foundations[f].pile;
            game.time.events.add(delayCard, this.start, card);            
            delayCard += 4000;

            R.waGroup.remove(card, false);           
        }

        //
        PlayState.backgroundVisible(false);
    },

    start: function()
    {
        this.vY = -game.rnd.realInRange(4, 8);
        this.vX = game.rnd.realInRange(2, 4);

        if(game.rnd.between(0, 1) === 1) this.vX = -this.vX;

        this.anchor.x = 0.5;
        this.x += this.width * 0.5;

        R.waGroup.addAt(this, 0);

        this.update = R.WinAnimator2.update;
        if(R.sfx.cardmove) R.sfx.cardmove.play();
    },

    update: function()
    {
        this.x += this.vX;
        this.y += this.vY;

        var hw = this.width * 0.5;

        if(this.x - hw > game.width || this.x + hw < 0)
        {
            if(this.under.length > 0)
            {
                var nextCard = this.under.pop();
                nextCard.under = this.under;
                R.WinAnimator2.start.call(nextCard);
            }
            R.waGroup.remove(this, true);
        }
        else
        {
            this.vY += 0.4;

            var bottom = this.y + this.height;
            if(bottom > game.height)
            {
                this.y = game.height - this.height;
                this.vY = -this.vY * 0.9;
                if(R.sfx.cardmove) R.sfx.cardmove.play();
            }
        }
    }
};

//===================================================================================================Animation 3
R.WinAnimator3 = {

    init: function()
    {
        R.WinAnimatorMoveFoundations(this.prepare, this, game.width > game.height ? 1 : 8);
    },

    prepare: function()
    {
        var foundations = R.deck.foundations;
        var card = null;
        var delayCard = 0;
        var f = 8;

        while(f--)
        {
            card = foundations[f].pile.pop();
            card.under = foundations[f].pile;
            game.time.events.add(delayCard, this.start, card);
            delayCard += 1000;

            R.waGroup.remove(card, false);
        }

        //
        PlayState.backgroundVisible(false);
    },

    start: function()
    {
        this.vY = -game.rnd.realInRange(4, 8);
        this.vX = game.rnd.realInRange(4, 6);
        this.vR = 0.05;
        if(game.rnd.between(0, 1) === 1)
        {
            this.vX = -this.vX;
            this.vR = -this.vR;
        }

        this.anchor.set(0.5);
        this.x += this.width * 0.5;
        this.y += this.height * 0.5;

        R.waGroup.addAt(this, 0);        

        this.update = R.WinAnimator3.update;
        if(R.sfx.cardmove) R.sfx.cardmove.play();
    },

    update: function()
    {
        this.x += this.vX;
        this.y += this.vY;

        this.rotation += this.vR;

        if(this.x - this.height > game.width || this.x + this.height < 0)
        {
            if(this.under.length > 0)
            {
                var nextCard = this.under.pop();
                nextCard.under = this.under;
                R.WinAnimator3.start.call(nextCard);
            }
            R.waGroup.remove(this, true);
        }
        else
        {
            this.vY += 0.4;

            if(this.y > game.height)
            {
                this.y = game.height;
                this.vY = -this.vY * 0.9;
                if(R.sfx.cardmove) R.sfx.cardmove.play();
            }
        }
    }
};

//===================================================================================================Animation 4
R.WinAnimator4 = {

    init: function()
    {
        R.WinAnimatorMoveFoundations(this.prepare, this, game.width > game.height ? 1 : 8);
    },

    prepare: function()
    {
        var foundations = R.deck.foundations;
        var card = null;
        var delayCard = 0;       
        var f = 8;
        var p = 0;

        while(f--)
        {
            p = 13;          
            delayCard = 0;
            while(p--)
            {
                card = foundations[f].pile[p];
                game.time.events.add(delayCard, this.start, card);
                delayCard += 50;
            }
            foundations[f].pile.length = 0;
        }
        //PlayState.backgroundVisible(false);
    },

    start: function()
    {
        this.vY = -2;
        this.vX = game.width > game.height ? -6 : 4;
        this.jumps = 0;

        R.waGroup.addAt(this, 0);

        this.update = R.WinAnimator4.update;
        if(R.sfx.cardmove) R.sfx.cardmove.play();
    },

    update: function()
    {
        this.x += this.vX;
        this.y += this.vY;

        this.vY += 0.6;

        if(this.y + this.height > game.height)
        {
            this.y = game.height - this.height;
            this.vY = -this.vY * 0.9;
            if(Math.abs(this.vY) < 15)
            {
                this.vY *= 2;
                if(++this.jumps === 3) game.add.tween(this).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true).onComplete.add(function() { R.waGroup.remove(this, true); }, this);                
            }
            this.scale.set(this.scale.x - 0.01);
        }

        if(this.x < 0)
        {
            this.x = 0;
            this.vX = -this.vX;
        }
        else if(this.x + this.width > game.width)
        {
            this.x = game.width - this.width;
            this.vX = -this.vX;
        }
    }
};

//===================================================================================================Animation 5
R.WinAnimator5 = {

    init: function()
    {
        R.WinAnimatorMoveFoundations(this.prepare, this, game.width > game.height ? 1 : 8);
    },

    prepare: function()
    {
        var foundations = R.deck.foundations;
        var card = null;     
        var f = 8;   

        while(f--)
        {            
            card = foundations[f].pile.pop();
            card.under = foundations[f].pile;
            R.waGroup.add(card);
            game.time.events.add(game.rnd.realInRange(0, 2) * 500, this.start, card);
        }
    },

    start: function()
    {
        this.vY = game.rnd.realInRange(0.5, 2);
        this.vX = game.rnd.realInRange(1, 4);

        this.ds = game.rnd.realInRange(0.01, 0.06);
        this.dsx = game.rnd.between(0, 1);

        this.g = game.rnd.realInRange(0.005, 0.07);

        this.os = this.scale.x;
        this.cs = this.os;

        this.vR = 0.04;

        if(game.rnd.between(0, 1))
        {
            this.vX = -this.vX;
            this.vR = -this.vR;
        }

        this.anchor.set(0.5);
        this.x += this.width * 0.5;
        this.y += this.height * 0.5;        

        if(this.under.length > 0)
        {
            var u = this.under.pop();
            u.under = this.under;
            R.waGroup.addAt(u, 0);
            game.time.events.add(game.rnd.realInRange(0, 2) * 500, R.WinAnimator5.start, u);
        }        

        this.update = R.WinAnimator5.update;
        if(R.sfx.cardmove) R.sfx.cardmove.play();
    },

    update: function()
    {
        this.x += this.vX;
        this.y += this.vY;
        this.rotation += this.vR;

        this.vY += this.g;
       
        this.cs -= this.ds;        

        if(this.cs <= 0)
        {
            this.ds = -this.ds;
            if(this.cs < 0) this.cs = -this.cs;
            this.isOpen = !this.isOpen;
            this.loadTexture(this.isOpen ? this.name : R.currentSkin);
        }
        else if(this.cs >= this.os)
        {
            this.ds = -this.ds;            
            this.cs = this.os * 2 - this.cs;
        }

        this.dsx ? this.scale.x = this.cs * R.scaleCard : this.scale.y = this.cs * R.scaleCard;               

        if(this.x < 0)
        {
            this.x = 0;
            this.vX = -this.vX;
        }
        else if(this.x > game.width)
        {
            this.x = game.width;
            this.vX = -this.vX;
        }

        if(this.y - R.hCard > game.height) R.waGroup.remove(this, true);
    }
};

//===================================================================================================Animation 6
R.WinAnimator6 = {

    init: function()
    {
        R.WinAnimatorMoveFoundations(this.prepare, this, game.width > game.height ? 1 : 8);
    },

    prepare: function()
    {
        var foundations = R.deck.foundations;
        var card = null;        

        var f = game.width > game.height ? 7 : 0;
        var df = game.width > game.height ? -2 : 2;
        var f2 = game.width > game.height ? -1 : 1;

        while((f2 === 1 && f < 8) || (f2 === -1 && f > 0))
        {
            card = foundations[f].pile.pop();
            card.under = foundations[f].pile;

            card.over = foundations[f + f2].pile.pop();
            card.over.under = foundations[f + f2].pile;
            
            game.time.events.add(200, this.start, card);

            R.waGroup.add(card);
            R.waGroup.add(card.over);

            f += df;
        }
    },

    start: function()
    {        
        this.anchor.set(0.99, 0.5);
        this.x += this.width * this.anchor.x;
        this.y += this.height * 0.5;
        
        this.tween = 0;
        this.fx = 1;

        var second = this.over;
        second.anchor.set(1 - this.anchor.x, 0.5);
        second.x += second.width * second.anchor.x;
        second.y += second.height * 0.5;
                
        var x = (second.x - this.x) * 0.5 + this.x;
        var duration = 200;

        game.add.tween(this).to({ x: x }, duration, Phaser.Easing.Linear.None, true);
        game.add.tween(second).to({ x: x }, duration, Phaser.Easing.Linear.None, true);
        
        var s = game.rnd.realInRange(R.scaleCard * 0.4, R.scaleCard * 0.8);
        game.add.tween(second.scale).to({ x: s, y: s }, duration, Phaser.Easing.Linear.None, true);
        game.add.tween(this.scale).to({ x: s, y: s }, duration, Phaser.Easing.Linear.None, true).onComplete.add(R.WinAnimator6.flitter, this);               

        if(this.under.length > 0)
        {
            var card = this.under.pop();
            card.under = this.under;            

            card.over = second.under.pop();
            card.over.under = second.under;

            R.waGroup.addAt(card, 0);
            R.waGroup.addAt(card.over, 0);

            this.tween2 = card;
        }

        if(R.sfx.cardmove) R.sfx.cardmove.play();
    },


    flitter: function()
    {
        var duration = game.rnd.realInRange(1, 3) * 100;

        game.add.tween(this.scale).to({ x: this.scale.x * 0.2 }, duration, Phaser.Easing.Linear.None, true, 0, -1, true);
        game.add.tween(this.over.scale).to({ x: this.scale.x * 0.2 }, duration, Phaser.Easing.Linear.None, true, 0, -1, true);

        R.WinAnimator6.moveTo.call(this);
    },

    moveTo: function(delay)
    {
        var tween = null;
        
        if(this.tween === 1 && this.tween2) R.WinAnimator6.start.call(this.tween2);
        
        if(++this.tween < 3)
        {
            var dst = { x: game.rnd.between(0, game.width), y: game.rnd.between(R.deck.columns[0].y + R.hCard * 1.5, game.height), rotation: game.rnd.realInRange(-Math.PI, Math.PI) };
            var delay = game.rnd.realInRange(1, 10) * 100;
            var duration = Phaser.Point.distance(this, dst) / 0.5;

            game.add.tween(this.over).to(dst, duration, Phaser.Easing.Quadratic.InOut, true, delay);
            tween = game.add.tween(this).to(dst, duration, Phaser.Easing.Quadratic.InOut, true, delay);
            tween.onComplete.add(R.WinAnimator6.moveTo, this);            
        }
        else
        {           
            var dst = { x: this.x < R.halfGameWidth ? -R.hCard : game.width + R.hCard, y: game.height + R.hCard, rotation: game.rnd.realInRange(-Math.PI, Math.PI) };
            var delay = game.rnd.realInRange(1, 10) * 100;
            var duration = Phaser.Point.distance(this, dst) / 0.5;            

            game.add.tween(this.over).to(dst, duration, Phaser.Easing.Quadratic.In, true, delay);
            tween = game.add.tween(this).to(dst, duration, Phaser.Easing.Quadratic.In, true, delay);
            tween.onComplete.add(R.WinAnimator6.destroy, this);
        }

        tween.onUpdateCallback(R.WinAnimator6.fxFire, this);
    },

    fxFire: function()
    {
        if(!game.device.desktop) this.fx = 1 - this.fx;
        if(this.fx === 1 && this.parent === R.waGroup) new R.ParticlePlume(this);
    },

    destroy: function()
    {
        R.waGroup.remove(this.over, true);
        R.waGroup.remove(this, true);
    }
};

//===================================================================================================Animation 7
R.winAnimator7Colors = [0xcfc12f, 0x8c47a6, 0x16f2d5, 0xcf6f2f, 0xf39e43, 0x34e86b, 0xf5f5e9, 0x3532b8, 0xfcfd8e, 0x145bc6, 0xbd1a40, 0xf3ff11, 0x641fcc];

//
R.WinAnimator7 = {

    init: function()
    {
        R.WinAnimatorMoveFoundations(this.prepare, this, game.width > game.height ? 1 : 8);
    },

    prepare: function()
    {
        var foundations = R.deck.foundations;
        var card = null;
        var f = 8;
        var delay = 0;

        while(f--)
        {
            card = foundations[f].pile.pop();
            card.under = foundations[f].pile;
            R.waGroup.add(card);
            game.time.events.add(delay, this.start, card);
            delay += 1000;
        }
    },

    start: function()
    {
        this.vY = -4;
        this.vX = game.rnd.realInRange(-2, 2);         

        this.vR = 0;
        this.aR = 0.004;

        if(this.vX < 0) this.aR = -this.aR;

        this.anchor.set(0.5);
        this.x += this.width * 0.5;
        this.y += this.height * 0.5;

        if(this.under.length > 0)
        {
            var u = this.under.pop();
            u.under = this.under;
            R.waGroup.addAt(u, 0);
            this.over = u;
        }
        
        if(game.device.desktop) R.WinAnimator7.tweenTint(this, 0xffffff, game.rnd.pick(R.winAnimator7Colors), 2000);
        else this.tint = game.rnd.pick(R.winAnimator7Colors);

        this.update = R.WinAnimator7.update;
        if(R.sfx.cardmove) R.sfx.cardmove.play();
    },

    update: function()
    {
        this.x += this.vX;
        this.y += this.vY;        
        this.rotation += this.vR;

        this.vY += 0.1;
        this.vR += this.aR;       

        if(this.y > R.halfGameHeight)
        {
            if(this.over) R.WinAnimator7.start.call(this.over);            
            R.waGroup.remove(this, true);
            new R.ParticleFirework(this.x, this.y, this.tint, game.device.desktop ? 100 : 20);
            
            var sfx = R.sfx['fw' + game.rnd.between(1, 4)];
            if(sfx) sfx.play();
        }
    },

    tweenTint: function(obj, startColor, endColor, time)
    {        
        var colorBlend = { step: 0 };

        var colorTween = game.add.tween(colorBlend).to({step: 100}, time);       
           
          
        colorTween.onUpdateCallback(function() {  obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step); });        
          
        obj.tint = startColor;            
         
        colorTween.start();
    }
};


//===================================================================================================Animation 8
R.winAnimator8ScaleH = 0.4;

//
R.WinAnimator8 = {

    init: function()
    {
        R.WinAnimatorMoveFoundations(this.prepare, this, game.width > game.height ? 1 : 8);
    },

    prepare: function()
    {
        var foundations = R.deck.foundations;
        var card = null;
        var delay = 200;
        var f = game.width > game.height ? 7 : 0;
        var df = game.width > game.height ? -2 : 2;
        var f2 = game.width > game.height ? -1 : 1;

        while((f2 === 1 && f < 8) || (f2 === -1 && f > 0))
        {
            card = foundations[f].pile.pop();
            card.under = foundations[f].pile;            

            card.over = foundations[f + f2].pile;

            game.time.events.add(delay, this.start, card);

            R.waGroup.add(card);

            f += df;           

            delay += 1000;
        }

        card.lastCard = true;
    },

    start: function()
    {
        this.tween = game.cache.getJSON('sword');
        this.tween2 = 0;        
        
        this.anchor.set(0.5);
        this.x += this.width * 0.5;
        this.y += this.height * 0.5;

        var second = this.over[this.over.length - 1];
        var x = (second.x - this.x + this.width * 0.5) * 0.5 + this.x;
        var s = R.winAnimator8ScaleH * R.scaleCard;

        game.add.tween(this.scale).to({ x: s, y: s }, 500, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this).to({ x: x, y: game.height - 180 }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(R.WinAnimator8.buildSword, this);
       
        R.waGroup.addAt(this.under[11], 0);
        
        if(R.sfx.cardmove) R.sfx.cardmove.play();
    },

    buildSword: function()
    {
        var trm = this.tween[this.tween2];
        var dst = { x: trm.x - this.width * 0.5 / this.scale.x, y: trm.y - this.height * 0.5 / this.scale.y, angle: trm.a };

        var pile = this.tween2 % 2 ? this.under : this.over;
        var card = pile.pop();

        ++this.tween2;

        card.anchor.set(0.5);
        card.x += card.width * 0.5;
        card.y += card.height * 0.5;        

        card.x -= this.x;
        card.y -= this.y;
        card.x /= this.scale.x;
        card.y /= this.scale.y;
        card.scale.set(R.scaleCard / this.scale.x);

        this.addChild(card);   

        game.add.tween(card.scale).to({ x: 1, y: 1 }, 600, Phaser.Easing.Quadratic.InOut, true);
        var tw = game.add.tween(card).to(dst, 600, Phaser.Easing.Quadratic.InOut, true);

        if(pile.length > 0)
        {
            R.waGroup.add(pile[pile.length - 1]);
            this.bringToTop();            
        }

        if(this.tween2 < 25) game.time.events.add(300, R.WinAnimator8.buildSword, this);
        else if(this.lastCard) tw.onComplete.add(R.WinAnimator8.startSwing, this);
    },

    startSwing: function()
    {
        var dir = -1;
        var king = null;
        for(var i = 0; i < R.waGroup.total; ++i)
        {
            king = R.waGroup.getAt(i);
            game.add.tween(king).to({ rotation: 0.4 * dir }, 500, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(R.WinAnimator8.hit, king);
            dir = -dir;
        }
    },

    hit: function()
    {
        var r = 0.6;
        if(this.rotation > 0) r = -r;
        game.add.tween(this).to({ rotation: r }, 200, Phaser.Easing.Quadratic.In, true, 200).onComplete.add(R.WinAnimator8.startDisperse, this);
    },

    startDisperse: function()
    {
        var p = this.getChildAt(13).world;
        new R.ParticleFirework(p.x, p.y, 0x009cff, game.device.desktop ? 50 : 10);
        this.tween = game.time.events.loop(50, R.WinAnimator8.disperse, this);

        var sfx = R.sfx['fw' + game.rnd.between(1, 4)];
        if(sfx) sfx.play();
    },

    disperse: function()
    {
        if(this.children.length > 0)
        {
            var card = this.getChildAt(this.children.length - 1);
            
            var x = card.world.x;
            var y = card.world.y;           
           
            R.waGroup.add(card);

            card.scale.set(this.scale.x);
            card.position.set(x, y);
            card.rotation += this.rotation;

            card.under = [];
            R.WinAnimator5.start.call(card);
        }
        else
        {
            game.time.events.remove(this.tween);
            this.under = [];
            R.WinAnimator5.start.call(this);
        }
    }
};

//


//===================================================================================================Animation 9
R.winAnimator9Path1 = {
    x: [360, 156, 58, 156, 537, 646, 537, 253, 362, 454, 360, 360],
    y: [360, 297, 396, 486, 297, 386, 486, 142, 74, 142, 287, 601],
    ss: 0.6,
    se: 1
};

//
R.winAnimator9PathScaleStart = 1;
R.winAnimator9PathScaleEnd = 1;
R.winAnimator9Path = null;

//
R.WinAnimator9 = {

    init: function()
    {
        R.WinAnimatorMoveFoundations(this.prepare, this, game.width > game.height ? 1 : 8);
        R.winAnimator9Path = R.winAnimator9Path1;
    },

    prepare: function()
    {
        R.winAnimator9PathScaleStart = R.scaleCard * R.winAnimator9Path.ss;
        R.winAnimator9PathScaleEnd = R.winAnimator9PathScaleStart * R.winAnimator9Path.se;

        var foundations = R.deck.foundations;
        var card = null;
        var f = 8;
        var delay = 200;
      
        while(f--)
        {
            card = foundations[f].pile.pop();
            card.under = foundations[f].pile;
            R.waGroup.add(card);
            game.time.events.add(delay, this.start, card);
            delay += 100 * 13;
        }        
    },

    start: function()
    {
        this.t = 0;

        var x = R.winAnimator9Path.x[0] + (game.width - 720) * 0.5;
        var y = R.winAnimator9Path.y[0] + (game.height - 720) * 0.5;
        var s = R.winAnimator9PathScaleStart;

        this.anchor.set(0.5);
        this.x += this.width * 0.5;
        this.y += this.height * 0.5;

        game.time.events.add(200, R.WinAnimator9.followPath, this);

        var p1 = new Phaser.Point(R.winAnimator9Path.x[0], R.winAnimator9Path.y[0]);
        var p2 = new Phaser.Point(R.winAnimator9Path.x[1], R.winAnimator9Path.y[1]);
        var r = game.math.angleBetweenPoints(p1, p2);

        game.add.tween(this.scale).to({ x: s, y: s }, 200, Phaser.Easing.Linear.None, true).onComplete.add(R.WinAnimator9.followPath, this);
        game.add.tween(this).to({ x: x, y: y, rotation: r }, 200, Phaser.Easing.Linear.None, true).onComplete.add(R.WinAnimator9.followPath, this);

        if(this.under.length > 0)
        {
            var card = this.under.pop();
            card.under = this.under;
            R.waGroup.addAt(card, 0);
            game.time.events.add(100, R.WinAnimator9.start, card);
        }

        this.bringToTop();

        if(R.sfx.cardmove) R.sfx.cardmove.play();
    },

    followPath: function()
    {
        this.update = R.WinAnimator9.update;
    },

    update: function()
    {
        var t = this.t;

        var x = game.math.catmullRomInterpolation(R.winAnimator9Path.x, t) + (game.width - 720) * 0.5;
        var y = game.math.catmullRomInterpolation(R.winAnimator9Path.y, t) + (game.height - 720) * 0.5;

        this.rotation = game.math.angleBetweenPoints(this, { x: x, y: y });
        this.x = x;
        this.y = y;

        this.scale.set(R.winAnimator9PathScaleStart * (1 - t) + R.winAnimator9PathScaleEnd * t);

        this.t += 0.002;

        if(this.t >= 1)
        {
            this.under = [];
            R.WinAnimator5.start.call(this);

            new R.ParticleFirework(this.x, this.y, 0x009cff, game.device.desktop ? 6 : 2);

            var sfx = R.sfx['fw' + game.rnd.between(1, 4)];
            if(sfx) sfx.play();
            
        }
    }
};

//===================================================================================================Animation 10
R.winAnimator10Path1 = {
    x: [352, 163, 83, 82, 125, 220, 360, 492, 579, 598, 551, 462, 348, 289, 264, 292, 364, 439, 469, 479, 466, 433, 384, 348, 343, 374],
    y: [30, 144, 305, 438, 544, 631, 671, 635, 543, 420, 306, 258, 266, 319, 399, 476, 520, 498, 467, 424, 381, 355, 352, 381, 417, 438],
    ss: 0.5,
    se: 0.3
};

//
R.WinAnimator10 = {

    init: function()
    {
        R.WinAnimatorMoveFoundations(R.WinAnimator9.prepare, R.WinAnimator9, game.width > game.height ? 1 : 8);
        R.winAnimator9Path = R.winAnimator10Path1;        
    }
};

//===================================================================================================Animation 11
R.winAnimator11Path1 = {
    x: [528, 318, 178, 139, 185, 318, 494, 557, 494, 318, 223, 188, 225, 325, 470, 509, 445, 318, 235, 325, 462, 410, 309, 284, 329, 413, 363],
    y: [105, 179, 153, 102, 51, 32, 95, 195, 317, 375, 361, 319, 276, 263, 317, 400, 494, 522, 478, 439, 526, 601, 612, 588, 566, 615, 656],
    ss: 0.5,
    se: 0.3
};

//
R.WinAnimator11 = {

    init: function()
    {
        R.WinAnimatorMoveFoundations(R.WinAnimator9.prepare, R.WinAnimator9, game.width > game.height ? 1 : 8);
        R.winAnimator9Path = R.winAnimator11Path1;
    }
};