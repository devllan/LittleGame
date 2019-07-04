var Utils;

(function (Utils) {
    var AssetLoader = (function () {
        function AssetLoader(_lang, _aFileData, _ctx, _canvasWidth, _canvasHeight, _showBar) {
            if (typeof _showBar === "undefined") { _showBar = true; }
            this.oAssetData = {
            };
            this.assetsLoaded = 0;
            this.totalAssets = _aFileData.length;
            this.ctx = _ctx;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.showBar = _showBar;
            this.topLeftX = this.canvasWidth / 2 - _canvasWidth / 4;
            this.topLeftY = this.canvasHeight / 2;
            if(this.showBar) {
                var loadingText;
                if(_lang == "EN" || _lang == "") {
                    loadingText = "Loading...";
                } else if(_lang == "ES") {
                    loadingText = "Cargando...";
                } else if(_lang == "FR") {
                    loadingText = "Chargement...";
                } else if(_lang == "TR") {
                    loadingText = "Yükleme...";
                }
                ctx.fillStyle = "#aaaaaa";
                ctx.textAlign = "center";
                ctx.font = "14px Helvetica";
                ctx.fillText(loadingText, this.canvasWidth / 2, this.topLeftY + 35);
                ctx.strokeStyle = "#aaaaaa";
                ctx.lineWidth = 2;
                ctx.fillStyle = "#ffffff";
                ctx.moveTo(this.topLeftX, this.topLeftY);
                ctx.lineTo(this.topLeftX + _canvasWidth / 2, this.topLeftY + 0);
                ctx.lineTo(this.topLeftX + _canvasWidth / 2, this.topLeftY + 20);
                ctx.lineTo(this.topLeftX + 0, this.topLeftY + 20);
                ctx.lineTo(this.topLeftX + 0, this.topLeftY + 0);
                ctx.stroke();
            }
            for(var i = 0; i < _aFileData.length; i++) {
                this.loadImage(_aFileData[i]);
            }
        }
        AssetLoader.prototype.loadImage = function (_oData) {
            var _this = this;
            var img = new Image();
            img.onload = function () {
                _this.oAssetData[_oData.id] = {
                };
                _this.oAssetData[_oData.id].img = img;
                if(_oData.oData != undefined) {
                    _this.oAssetData[_oData.id].oData = _oData.oData;
                }
                ++_this.assetsLoaded;
                if(_this.showBar) {
                    ctx.fillRect(_this.topLeftX + 2, _this.topLeftY + 2, ((_this.canvasWidth / 2 - 4) / _this.totalAssets) * _this.assetsLoaded, 16);
                }
                _this.checkLoadComplete();
            };
            img.src = _oData.file;
        };
        AssetLoader.prototype.checkLoadComplete = function () {
            if(this.assetsLoaded == this.totalAssets) {
                this.loadedCallback();
            }
        };
        AssetLoader.prototype.onReady = function (_func) {
            this.loadedCallback = _func;
        };
        AssetLoader.prototype.getImg = function (_id) {
            return this.oAssetData[_id].img;
        };
        AssetLoader.prototype.getData = function (_id) {
            return this.oAssetData[_id];
        };
        return AssetLoader;
    })();
    Utils.AssetLoader = AssetLoader;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var AnimSprite = (function () {
        function AnimSprite(_oImgData, _fps, _radius, _animId) {
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.radius = 10;
            this.removeMe = false;
            this.frameInc = 0;
            this.animType = "loop";
            this.oImgData = _oImgData;
            this.oAnims = this.oImgData.oData.oAnims;
            this.fps = _fps;
            this.radius = _radius;
            this.animId = _animId;
        }
        AnimSprite.prototype.updateAnimation = function (_delta) {
            this.frameInc += this.fps * _delta;
        };
        AnimSprite.prototype.resetAnim = function () {
            this.frameInc = 0;
        };
        AnimSprite.prototype.setFrame = function (_frameNum) {
            this.fixedFrame = _frameNum;
        };
        AnimSprite.prototype.setAnimType = function (_type, _animId) {
            this.animId = _animId;
            this.animType = _type;
            switch(_type) {
                case "loop":
                    break;
                case "once":
                    this.resetAnim();
                    this.maxIdx = this.oAnims[this.animId].length - 1;
                    break;
            }
        };
        AnimSprite.prototype.render = function (_ctx) {
            if(this.animId != null) {
                var max = this.oAnims[this.animId].length;
                var idx = Math.floor(this.frameInc);
                var frame = this.oAnims[this.animId][idx % max];
                var imgX = (frame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(frame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if(this.animType == "once") {
                    if(idx > this.maxIdx) {
                        this.fixedFrame = this.oAnims[this.animId][max - 1];
                        this.animId = null;
                        this.animEndedFunc();
                        var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                        var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    }
                }
            } else {
                var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            }
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2, -this.oImgData.oData.spriteHeight / 2, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
        };
        return AnimSprite;
    })();
    Utils.AnimSprite = AnimSprite;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var BasicSprite = (function () {
        function BasicSprite(_oImgData, _radius) {
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.radius = 10;
            this.removeMe = false;
            this.oImgData = _oImgData;
            this.radius = _radius;
        }
        BasicSprite.prototype.setFrame = function (_frameNum) {
            this.frameNum = _frameNum;
        };
        BasicSprite.prototype.render = function (_ctx) {
            var imgX = (this.frameNum * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
            var imgY = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2, -this.oImgData.oData.spriteHeight / 2, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
        };
        return BasicSprite;
    })();
    Utils.BasicSprite = BasicSprite;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var UserInput = (function () {
        function UserInput(_canvas, _isBugBrowser) {
            var _this = this;
            this.isDown = false;
            this.canvasX = 0;
            this.canvasY = 0;
            this.canvasScaleX = 1;
            this.canvasScaleY = 1;
            this.prevHitTime = 0;
            this.pauseIsOn = false;
            this.isBugBrowser = _isBugBrowser;
            _canvas.addEventListener("touchstart", function (e) {
                _this.hitDown(e, e.touches[0].pageX, e.touches[0].pageY);
            }, false);
            _canvas.addEventListener("touchend", function (e) {
                _this.hitUp(e, e.changedTouches[0].pageX, e.changedTouches[0].pageY);
            }, false);
            _canvas.addEventListener("mousedown", function (e) {
                _this.hitDown(e, e.pageX, e.pageY);
            }, false);
            _canvas.addEventListener("mouseup", function (e) {
                _this.hitUp(e, e.pageX, e.pageY);
            }, false);
            this.aHitAreas = new Array();
        }
        UserInput.prototype.setCanvas = function (_canvasX, _canvasY, _canvasScaleX, _canvasScaleY) {
            this.canvasX = _canvasX;
            this.canvasY = _canvasY;
            this.canvasScaleX = _canvasScaleX;
            this.canvasScaleY = _canvasScaleY;
        };
        UserInput.prototype.hitDown = function (e, _posX, _posY) {
            if(this.pauseIsOn) {
                return;
            }
            var curHitTime = new Date().getTime();
            if(curHitTime - this.prevHitTime < 500 && isBugBrowser) {
                return;
            }
            this.prevHitTime = curHitTime;
            e.preventDefault();
            e.stopPropagation();
            _posX = (_posX - this.canvasX) * this.canvasScaleX;
            _posY = (_posY - this.canvasY) * this.canvasScaleY;
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].rect) {
                    if(_posX > this.aHitAreas[i].area[0] && _posY > this.aHitAreas[i].area[1] && _posX < this.aHitAreas[i].area[2] && _posY < this.aHitAreas[i].area[3]) {
                        this.aHitAreas[i].oData.hitX = _posX;
                        this.aHitAreas[i].oData.hitY = _posY;
                        this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                        break;
                    }
                } else {
                }
            }
        };
        UserInput.prototype.hitUp = function (e, _posX, _posY) {
            e.preventDefault();
            e.stopPropagation();
        };
        UserInput.prototype.addHitArea = function (_id, _callback, _oCallbackData, _oAreaData, _isUnique) {
            if (typeof _isUnique === "undefined") { _isUnique = false; }
            if(_oCallbackData == null) {
                _oCallbackData = new Object();
            }
            if(_isUnique) {
                this.removeHitArea(_id);
            }
            switch(_oAreaData.type) {
                case "image":
                    if(_oAreaData.oImageData.isSpriteSheet) {
                        this.aHitAreas.push({
                            id: _id,
                            callback: _callback,
                            oData: _oCallbackData,
                            rect: true,
                            area: [
                                _oAreaData.aCentrePos[0] - _oAreaData.oImageData.oData.spriteHeight / 2, 
                                _oAreaData.aCentrePos[1] - _oAreaData.oImageData.oData.spriteHeight / 2, 
                                _oAreaData.aCentrePos[0] + _oAreaData.oImageData.oData.spriteWidth / 2, 
                                _oAreaData.aCentrePos[1] + _oAreaData.oImageData.oData.spriteHeight / 2
                            ]
                        });
                    } else {
                        this.aHitAreas.push({
                            id: _id,
                            callback: _callback,
                            oData: _oCallbackData,
                            rect: true,
                            area: [
                                _oAreaData.aCentrePos[0] - _oAreaData.oImageData.img.width / 2, 
                                _oAreaData.aCentrePos[1] - _oAreaData.oImageData.img.height / 2, 
                                _oAreaData.aCentrePos[0] + _oAreaData.oImageData.img.width / 2, 
                                _oAreaData.aCentrePos[1] + _oAreaData.oImageData.img.height / 2
                            ]
                        });
                    }
                    break;
                case "rect":
                    this.aHitAreas.push({
                        id: _id,
                        callback: _callback,
                        oData: _oCallbackData,
                        rect: true,
                        area: _oAreaData.aRect
                    });
                    break;
            }
        };
        UserInput.prototype.removeHitArea = function (_id) {
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].id == _id) {
                    this.aHitAreas.splice(i, 1);
                    i -= 1;
                }
            }
        };
        return UserInput;
    })();
    Utils.UserInput = UserInput;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var FpsMeter = (function () {
        function FpsMeter(_canvasHeight) {
            this.updateFreq = 10;
            this.updateInc = 0;
            this.frameAverage = 0;
            this.display = 1;
            this.log = "";
            this.render = function (_ctx) {
                this.frameAverage += this.delta / this.updateFreq;
                if(++this.updateInc >= this.updateFreq) {
                    this.updateInc = 0;
                    this.display = this.frameAverage;
                    this.frameAverage = 0;
                }
                _ctx.textAlign = "left";
                ctx.font = "10px Helvetica";
                _ctx.fillStyle = "#333333";
                _ctx.beginPath();
                _ctx.rect(0, this.canvasHeight - 15, 40, 15);
                _ctx.closePath();
                _ctx.fill();
                _ctx.fillStyle = "#ffffff";
                _ctx.fillText(Math.round(1000 / (this.display * 1000)) + " fps " + this.log, 5, this.canvasHeight - 5);
            };
            this.canvasHeight = _canvasHeight;
        }
        FpsMeter.prototype.update = function (_delta) {
            this.delta = _delta;
        };
        return FpsMeter;
    })();
    Utils.FpsMeter = FpsMeter;    
})(Utils || (Utils = {}));
var Elements;
(function (Elements) {
    var Background = (function () {
        function Background(_oImgData, _canvasWidth, _canvasHeight) {
            this.oImgData = _oImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
        }
        Background.prototype.update = function (_delta) {
        };
        Background.prototype.render = function (_ctx) {
            _ctx.drawImage(this.oImgData.img, 0, 0);
        };
        return Background;
    })();
    Elements.Background = Background;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Screens = (function () {
        function Screens(_oScreens, _oButs, _canvasWidth, _canvasHeight) {
            this.incY = 0;
            this.score = 0;
            this.highestScore = 0;
            this.posY = 0;
            this.oScreens = _oScreens;
            this.oButs = _oButs;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.posY = -this.canvasHeight;
        }
        Screens.prototype.setRenderFunc = function (_type) {
            this.posY = -this.canvasHeight;
            switch(_type) {
                case "start":
                    this.renderFunc = this.renderStartScreen;
                    TweenLite.to(this, .5, {
                        posY: 0
                    });
                    break;
                case "help":
                    break;
                case "end":
                    break;
            }
        };
        Screens.prototype.render = function (_ctx, _delta) {
            this.renderFunc(_ctx, _delta);
        };
        Screens.prototype.renderStartScreen = function (_ctx, _delta) {
            this.incY += 5 * _delta;
            _ctx.drawImage(this.oScreens.startImageData.img, 0, 0);
            _ctx.drawImage(this.oButs.play.imageData.img, this.oButs.play.pos[0] - this.oButs.play.imageData.img.width / 2, this.oButs.play.pos[1] - this.oButs.play.imageData.img.height / 2 - Math.sin(this.incY) * 5 - this.posY);
            //_ctx.drawImage(this.oButs.moregames.imageData.img, this.oButs.moregames.pos[0] - this.oButs.moregames.imageData.img.width / 2, this.oButs.moregames.pos[1] - this.oButs.moregames.imageData.img.height / 2 - Math.sin(this.incY) * 5 - this.posY);
        };
        return Screens;
    })();
    Elements.Screens = Screens;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Splash = (function () {
        function Splash(_oSplashScreenImgData, _canvasWidth, _canvasHeight) {
            this.inc = 0;
            this.oSplashScreenImgData = _oSplashScreenImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.posY = this.canvasHeight;
            TweenLite.to(this, .7, {
                posY: 0,
                ease: "Power2.easeOut"
            });
        }
        Splash.prototype.render = function (_ctx, _delta) {
            _ctx.drawImage(this.oSplashScreenImgData.img, 0, this.posY);
        };
        return Splash;
    })();
    Elements.Splash = Splash;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Panel = (function () {
        function Panel(_oPanelsImgData, _oNumbersImgData, _canvasWidth, _canvasHeight) {
            this.frameNum = 0;
            this.x = 0;
            this.y = 0;
            this.playerHandTotal1 = 0;
            this.playerHandTotal2 = 0;
            this.compHandTotal = 0;
            this.letterSpace = 17;
            this.handSide = "right";
            this.oPanelsImgData = _oPanelsImgData;
            this.oNumbersImgData = _oNumbersImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
        }
        Panel.prototype.setUp = function (_type, _oData) {
            if (typeof _oData === "undefined") { _oData = null; }
            this.type = _type;
            switch(this.type) {
                case "betting":
                    this.aPanels = new Array({
                        id: 0,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    }, {
                        id: 7,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    this.renderFunc = this.renderInGame;
                    TweenLite.to(this.aPanels[0], .5, {
                        posY: -20
                    });
                    break;
                case "firstDeal":
                    this.hideDealBut();
                    this.renderFunc = this.renderInGame;
                    TweenLite.to(this.aPanels[0], .5, {
                        posY: -160,
                        onComplete: this.hideDealTweenComplete,
                        onCompleteParams: [
                            this
                        ]
                    });
                    if(_oData.dealType != "blackjack") {
                        this.insuranceIsOn = _oData.insuranceIsOn;
                    }
                    if(this.insuranceIsOn) {
                        this.aPanels.push({
                            id: 8,
                            posX: -380,
                            posY: 200
                        });
                        TweenLite.to(this.aPanels[this.aPanels.length - 1], .5, {
                            posX: -225,
                            delay: 1
                        });
                    }
                    this.aPanels.push({
                        id: 4,
                        posX: this.canvasWidth,
                        posY: 420
                    });
                    this.playerValuePanel1 = this.aPanels[this.aPanels.length - 1];
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .5, {
                        posX: 445,
                        delay: 1
                    });
                    this.playerHandTotal1 = _oData.value;
                    if(dealType == "blackjack") {
                        this.actionCompleteCallback = _oData.callback;
                        TweenLite.to(this.aPanels[this.aPanels.length - 1], .5, {
                            posX: 445,
                            delay: 1,
                            onComplete: this.blackjackDealComplete,
                            onCompleteParams: [
                                this
                            ]
                        });
                    } else {
                        TweenLite.to(this.aPanels[this.aPanels.length - 1], .5, {
                            posX: 445,
                            delay: 1
                        });
                    }
                    break;
                case "newPlayerCard":
                    if(this.handSide == "right") {
                        this.playerHandTotal1 = _oData.value;
                    } else {
                        this.playerHandTotal2 = _oData.value;
                    }
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.insuranceIsOn && this.aPanels[i].id == 8) {
                            TweenLite.to(this.aPanels[i], .5, {
                                posX: -380
                            });
                        }
                    }
                    break;
                case "newCompCard":
                    this.compHandTotal = _oData.value;
                    break;
                case "bust":
                    this.aPanels.push({
                        id: 3,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        delay: 1,
                        ease: "Back.easeOut"
                    });
                    this.aPanels.push({
                        id: 9,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.killTweensOf(this.aPanels[this.aPanels.length - 1]);
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 2.3
                    });
                    if(this.handSide == "right") {
                        TweenLite.to(this.playerValuePanel1, .3, {
                            posX: this.canvasWidth,
                            delay: 2
                        });
                    }
                    if(_oData.bank < 5) {
                        this.aPanels.push({
                            id: 14,
                            posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                            posY: this.canvasHeight
                        });
                        TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                            posY: 600,
                            delay: 2,
                            ease: "Back.easeOut"
                        });
                    }
                    break;
                case "blackjack":
                    this.aPanels.push({
                        id: 1,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        delay: 1,
                        ease: "Elastic.easeOut"
                    });
                    this.aPanels.push({
                        id: 9,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 2.3
                    });
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 4) {
                            TweenLite.to(this.aPanels[i], .3, {
                                posX: this.canvasWidth,
                                delay: 2
                            });
                            break;
                        }
                    }
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.insuranceIsOn && this.aPanels[i].id == 8) {
                            TweenLite.to(this.aPanels[i], .5, {
                                posX: -380
                            });
                        }
                    }
                    break;
                case "push":
                    this.aPanels.push({
                        id: 6,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        delay: 1,
                        ease: "Back.easeOut"
                    });
                    this.aPanels.push({
                        id: 9,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 2.3
                    });
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 4) {
                            TweenLite.to(this.aPanels[i], .3, {
                                posX: this.canvasWidth,
                                delay: 2
                            });
                            break;
                        }
                    }
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.insuranceIsOn && this.aPanels[i].id == 8) {
                            TweenLite.to(this.aPanels[i], .5, {
                                posX: -380
                            });
                        }
                    }
                    break;
                case "compPlay":
                    this.aPanels.push({
                        id: 5,
                        posX: this.canvasWidth,
                        posY: 80
                    });
                    this.compValuePanel = this.aPanels[this.aPanels.length - 1];
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .5, {
                        posX: 445,
                        delay: 1
                    });
                    this.compHandTotal = _oData.value;
                    break;
                case "insuranceTaken":
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.insuranceIsOn && this.aPanels[i].id == 8) {
                            TweenLite.to(this.aPanels[i], .5, {
                                posX: -380
                            });
                        }
                    }
                    break;
                case "insuranceLose":
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.insuranceIsOn && this.aPanels[i].id == 8) {
                            TweenLite.to(this.aPanels[i], .5, {
                                posX: -380
                            });
                        }
                    }
                    this.aPanels.push({
                        id: 13,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .5, {
                        posY: -20
                    });
                    break;
                case "hidePlayOn":
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 13) {
                            TweenLite.to(this.aPanels[i], .5, {
                                posY: -160
                            });
                        }
                    }
                    break;
                case "insuranceWin":
                    this.aPanels.push({
                        id: 10,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        ease: "Back.easeOut"
                    });
                    this.aPanels.push({
                        id: 9,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 1.3
                    });
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 4) {
                            TweenLite.to(this.aPanels[i], .3, {
                                posX: this.canvasWidth,
                                delay: 1
                            });
                            break;
                        }
                    }
                    break;
                case "playerWin":
                    this.aPanels.push({
                        id: 12,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        ease: "Back.easeOut"
                    });
                    this.aPanels.push({
                        id: 9,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 1.3
                    });
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 4) {
                            TweenLite.to(this.aPanels[i], .3, {
                                posX: this.canvasWidth,
                                delay: 1
                            });
                            break;
                        }
                    }
                    break;
                case "compWin":
                    this.aPanels.push({
                        id: 11,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        ease: "Back.easeOut"
                    });
                    this.aPanels.push({
                        id: 9,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 1.3
                    });
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 4) {
                            TweenLite.to(this.aPanels[i], .3, {
                                posX: this.canvasWidth,
                                delay: 1
                            });
                            break;
                        }
                    }
                    if(_oData.bank < 5) {
                        this.aPanels.push({
                            id: 14,
                            posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                            posY: this.canvasHeight
                        });
                        TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                            posY: 600,
                            delay: 2,
                            ease: "Back.easeOut"
                        });
                    }
                    break;
                case "compBust":
                    this.aPanels.push({
                        id: 2,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        ease: "Back.easeOut"
                    });
                    this.aPanels.push({
                        id: 9,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 1.3
                    });
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 4) {
                            TweenLite.to(this.aPanels[i], .3, {
                                posX: this.canvasWidth,
                                delay: 1
                            });
                            break;
                        }
                    }
                    break;
                case "split":
                    this.playerHandTotal1 = _oData.playerHandTotal2;
                    this.playerHandTotal2 = _oData.playerHandTotal1;
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.insuranceIsOn && this.aPanels[i].id == 8) {
                            TweenLite.to(this.aPanels[i], .5, {
                                posX: -380
                            });
                        }
                    }
                    TweenLite.to(this.playerValuePanel1, .3, {
                        posX: this.canvasWidth
                    });
                    this.aPanels.push({
                        id: 4,
                        posX: -379,
                        posY: 420
                    });
                    this.playerValuePanel2 = this.aPanels[this.aPanels.length - 1];
                    TweenLite.to(this.playerValuePanel2, .3, {
                        posX: -291
                    });
                    this.handSide = "left";
                    break;
                case "switchHands":
                    this.handSide = "right";
                    this.actionCompleteCallback = _oData.callback;
                    TweenLite.to(this.playerValuePanel1, .3, {
                        posX: 445,
                        delay: .5,
                        onComplete: this.panelSwitchRight,
                        onCompleteParams: [
                            this
                        ]
                    });
                    if(_oData.event == "bust") {
                        TweenLite.to(this.playerValuePanel2, .3, {
                            posX: -379,
                            delay: .5
                        });
                    }
                    break;
            }
        };
        Panel.prototype.panelSwitchRight = function (_scope) {
            _scope.actionCompleteCallback();
        };
        Panel.prototype.blackjackDealComplete = function (_scope) {
            _scope.actionCompleteCallback();
        };
        Panel.prototype.hideDealTweenComplete = function (_scope) {
            for(var i = 0; i < _scope.aPanels.length; i++) {
                if(_scope.aPanels[i].id == 0 || _scope.aPanels[i].id == 7) {
                    _scope.aPanels.splice(i, 1);
                    i -= 1;
                }
            }
        };
        Panel.prototype.showDealBut = function () {
            TweenLite.killTweensOf(this.aPanels[1]);
            TweenLite.to(this.aPanels[1], .5, {
                posX: 383
            });
        };
        Panel.prototype.hideDealBut = function () {
            TweenLite.killTweensOf(this.aPanels[1]);
            TweenLite.to(this.aPanels[1], .5, {
                posX: this.canvasWidth
            });
        };
        Panel.prototype.render = function (_ctx) {
            this.renderFunc(_ctx);
        };
        Panel.prototype.renderInGame = function (_ctx) {
            for(var i = 0; i < this.aPanels.length; i++) {
                var imgX = (this.aPanels[i].id * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width;
                var imgY = Math.floor(this.aPanels[i].id / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                _ctx.drawImage(this.oPanelsImgData.img, imgX, imgY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight, this.aPanels[i].posX, this.aPanels[i].posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);
            }
            if(this.playerHandTotal1 > 0) {
                for(var i = 0; i < this.playerHandTotal1.toString().length; i++) {
                    var id = parseFloat(this.playerHandTotal1.toString().charAt(i));
                    var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                    var offset;
                    offset = i * this.letterSpace + 50 - (this.letterSpace * this.playerHandTotal1.toString().length) / 2;
                    _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, this.playerValuePanel1.posX + offset, this.playerValuePanel1.posY + 60, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
                }
            }
            if(this.playerHandTotal2 > 0) {
                for(var i = 0; i < this.playerHandTotal2.toString().length; i++) {
                    var id = parseFloat(this.playerHandTotal2.toString().charAt(i));
                    var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                    var offset;
                    offset = i * this.letterSpace + 329 - (this.letterSpace * this.playerHandTotal2.toString().length) / 2;
                    _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, this.playerValuePanel2.posX + offset, this.playerValuePanel2.posY + 60, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
                }
            }
            if(this.compHandTotal > 0) {
                for(var i = 0; i < this.compHandTotal.toString().length; i++) {
                    var id = parseFloat(this.compHandTotal.toString().charAt(i));
                    var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                    _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, this.compValuePanel.posX + i * this.letterSpace + 50 - (this.letterSpace * this.compHandTotal.toString().length) / 2, this.compValuePanel.posY + 60, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
                }
            }
        };
        return Panel;
    })();
    Elements.Panel = Panel;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Numbers = (function () {
        function Numbers(_oNumbersImgData, _canvasWidth, _canvasHeight) {
            this.bet = 0;
            this.bank = 0;
            this.letterSpace = 17;
            this.oNumbersImgData = _oNumbersImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
        }
        Numbers.prototype.setAmounts = function (_bet, _bank) {
            this.bet = _bet;
            this.bank = _bank;
        };
        Numbers.prototype.render = function (_ctx) {
            for(var i = 0; i < this.bet.toString().length; i++) {
                var id = parseFloat(this.bet.toString().charAt(i));
                var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 75 + i * this.letterSpace, 580, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
            }
            for(var i = 0; i < this.bank.toString().length; i++) {
                var id = parseFloat(this.bank.toString().charAt(i));
                var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 232 + i * this.letterSpace, 761, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
            }
        };
        return Numbers;
    })();
    Elements.Numbers = Numbers;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Chips = (function () {
        function Chips(_oChipImgData, _chipLevel, _aChipAmounts, _canvasWidth, _canvasHeight) {
            this.bet = 0;
            this.bank = 0;
            this.oChipImgData = _oChipImgData;
            this.chipLevel = _chipLevel;
            this.aChipAmounts = _aChipAmounts;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.aChipStacks = new Array({
                targX: 3,
                targY: 630,
                x: 200,
                y: 800
            }, {
                targX: 133,
                targY: 630,
                x: 200,
                y: 800
            }, {
                targX: 266,
                targY: 630,
                x: 200,
                y: 800
            }, {
                targX: 399,
                targY: 630,
                x: 200,
                y: 800
            });
        }
        Chips.prototype.setAmounts = function (_bet, _bank) {
            this.bet = _bet;
            this.bank = _bank;
        };
        Chips.prototype.updateChipStacks = function () {
            if(this.bank < this.aChipAmounts[0 + this.chipLevel]) {
                this.aChipStacks[0].y = 800;
                this.aChipStacks[1].y = 800;
                this.aChipStacks[2].y = 800;
                this.aChipStacks[3].y = 800;
            } else {
                this.aChipStacks[0].y = this.aChipStacks[0].targY;
                if(this.bank < this.aChipAmounts[1 + this.chipLevel]) {
                    this.aChipStacks[1].y = 800;
                    this.aChipStacks[2].y = 800;
                    this.aChipStacks[3].y = 800;
                } else {
                    this.aChipStacks[1].y = this.aChipStacks[1].targY;
                    if(this.bank < this.aChipAmounts[2 + this.chipLevel]) {
                        this.aChipStacks[2].y = 800;
                        this.aChipStacks[3].y = 800;
                    } else {
                        this.aChipStacks[2].y = this.aChipStacks[2].targY;
                        if(this.bank < this.aChipAmounts[3 + this.chipLevel]) {
                            this.aChipStacks[3].y = 800;
                        } else {
                            this.aChipStacks[3].y = this.aChipStacks[3].targY;
                        }
                    }
                }
            }
        };
        Chips.prototype.setUp = function (_type) {
            switch(_type) {
                case "betting":
                    this.aBetChips = new Array();
                    this.renderFunc = this.renderStart;
                    var stackNum;
                    if(this.bank >= this.aChipAmounts[3 + this.chipLevel]) {
                        stackNum = 4;
                    } else if(this.bank >= this.aChipAmounts[2 + this.chipLevel]) {
                        stackNum = 3;
                    } else if(this.bank >= this.aChipAmounts[1 + this.chipLevel]) {
                        stackNum = 2;
                    } else if(this.bank >= this.aChipAmounts[0 + this.chipLevel]) {
                        stackNum = 1;
                    }
                    for(var i = 0; i < stackNum; i++) {
                        TweenLite.to(this.aChipStacks[i], .5, {
                            y: this.aChipStacks[i].targY,
                            x: this.aChipStacks[i].targX,
                            ease: "Back.easeOut",
                            delay: i * .1
                        });
                    }
                    break;
                case "firstDeal":
                    this.renderFunc = this.renderSmall;
                    this.aSmallBetChips = new Array();
                    for(var i = 0; i < Math.min(this.aBetChips.length, 5); i++) {
                        var oTemp = {
                            id: this.aBetChips[this.aBetChips.length - i - 1],
                            posX: 170 + i * (i * 3) + 1 * i,
                            posY: 400,
                            scale: 1
                        };
                        this.aSmallBetChips.push(oTemp);
                        TweenLite.killTweensOf(this);
                        TweenLite.to(this.aSmallBetChips[i], .3, {
                            scale: .5,
                            posX: Math.random() * 90 + 190,
                            posY: Math.random() * 10 + 550,
                            delay: i * .1
                        });
                    }
                    for(var i = 0; i < this.aChipStacks.length; i++) {
                        TweenLite.to(this.aChipStacks[i], .3, {
                            y: 800,
                            x: 200,
                            delay: i * .1
                        });
                    }
                    break;
                case "double":
                    this.renderFunc = this.renderDouble;
                    this.aDoubleBetChips = new Array();
                    for(var i = 0; i < this.aSmallBetChips.length; i++) {
                        var oTemp = {
                            id: this.aSmallBetChips[i].id,
                            posX: 200,
                            posY: 800,
                            scale: 1
                        };
                        this.aDoubleBetChips.push(oTemp);
                        TweenLite.to(this.aDoubleBetChips[i], .5, {
                            posX: Math.random() * 90 + 190,
                            posY: Math.random() * 10 + 550,
                            ease: "Back.easeOut",
                            delay: .3 + i * .1
                        });
                    }
                    break;
            }
        };
        Chips.prototype.addChip = function (_id, _bet, _bank) {
            this.setAmounts(_bet, _bank);
            this.updateChipStacks();
            this.curChipX = this.aChipStacks[_id].targX;
            this.curChipY = this.aChipStacks[_id].targY;
            this.curChipId = _id;
            var num = Math.min(this.aBetChips.length, 4);
            TweenLite.killTweensOf(this);
            TweenLite.to(this, .3, {
                curChipX: 170 + num * (num * 3) + 1 * num,
                curChipY: 400,
                ease: "Back.easeOut",
                onComplete: this.betTweenComplete,
                onCompleteParams: [
                    this
                ]
            });
            this.aBetChips.push(_id);
            this.renderFunc = this.renderAdding;
        };
        Chips.prototype.betTweenComplete = function (_scope) {
            _scope.renderFunc = _scope.renderWaiting;
        };
        Chips.prototype.removeChip = function (_bet, _bank) {
            this.setAmounts(_bet, _bank);
            this.updateChipStacks();
            var num = Math.min(this.aBetChips.length, 4);
            this.curChipX = 170 + num * (num * 3) + 1 * num;
            this.curChipY = 400;
            this.curChipId = this.aBetChips[this.aBetChips.length - 1];
            this.aBetChips.pop();
            TweenLite.killTweensOf(this);
            TweenLite.to(this, .3, {
                curChipX: this.aChipStacks[this.curChipId].targX,
                curChipY: this.aChipStacks[this.curChipId].targY,
                ease: "Back.easeIn",
                onComplete: this.betTweenComplete,
                onCompleteParams: [
                    this
                ]
            });
            this.renderFunc = this.renderRemoving;
        };
        Chips.prototype.render = function (_ctx) {
            this.renderFunc(_ctx);
        };
        Chips.prototype.renderStart = function (_ctx) {
            for(var i = 0; i < this.aChipStacks.length; i++) {
                var imgX = ((i + this.chipLevel) * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor((i + this.chipLevel) / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aChipStacks[i].x, this.aChipStacks[i].y, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
        };
        Chips.prototype.renderAdding = function (_ctx) {
            for(var i = 0; i < this.aChipStacks.length; i++) {
                var imgX = ((i + this.chipLevel) * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor((i + this.chipLevel) / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aChipStacks[i].x, this.aChipStacks[i].y, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
            for(var i = 0; i < Math.min(this.aBetChips.length - 1, 4); i++) {
                var id = this.aBetChips[this.aBetChips.length - 1 - Math.min(this.aBetChips.length - 1, 4) + i] + this.chipLevel;
                var imgX = (id * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor(id / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, 170 + i * (i * 3) + 1 * i, 400, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
            var imgX = ((this.curChipId + this.chipLevel) * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
            var imgY = Math.floor((this.curChipId + this.chipLevel) / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
            _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.curChipX, this.curChipY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
        };
        Chips.prototype.renderRemoving = function (_ctx) {
            for(var i = 0; i < this.aChipStacks.length; i++) {
                var imgX = ((i + this.chipLevel) * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor((i + this.chipLevel) / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aChipStacks[i].x, this.aChipStacks[i].y, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
            for(var i = 0; i < Math.min(this.aBetChips.length, 4); i++) {
                var id = this.aBetChips[this.aBetChips.length - Math.min(this.aBetChips.length, 4) + i] + this.chipLevel;
                var imgX = (id * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor(id / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, 170 + i * (i * 3) + 1 * i, 400, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
            var imgX = ((this.curChipId + this.chipLevel) * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
            var imgY = Math.floor((this.curChipId + this.chipLevel) / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
            _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.curChipX, this.curChipY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
        };
        Chips.prototype.renderWaiting = function (_ctx) {
            for(var i = 0; i < this.aChipStacks.length; i++) {
                var imgX = ((i + this.chipLevel) * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor((i + this.chipLevel) / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aChipStacks[i].x, this.aChipStacks[i].y, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
            for(var i = 0; i < Math.min(this.aBetChips.length, 5); i++) {
                var id = this.aBetChips[this.aBetChips.length - Math.min(this.aBetChips.length, 5) + i] + this.chipLevel;
                var imgX = (id * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor(id / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, 170 + i * (i * 3) + 1 * i, 400, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
        };
        Chips.prototype.renderSmall = function (_ctx) {
            for(var i = 0; i < this.aChipStacks.length; i++) {
                var imgX = ((i + this.chipLevel) * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor((i + this.chipLevel) / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aChipStacks[i].x, this.aChipStacks[i].y, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
            for(var i = 0; i < this.aSmallBetChips.length; i++) {
                var id = this.aSmallBetChips[i].id + this.chipLevel;
                var imgX = (id * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor(id / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aSmallBetChips[i].posX, this.aSmallBetChips[i].posY, this.oChipImgData.oData.spriteWidth * this.aSmallBetChips[i].scale, this.oChipImgData.oData.spriteHeight * this.aSmallBetChips[i].scale);
            }
        };
        Chips.prototype.renderDouble = function (_ctx) {
            for(var i = 0; i < this.aSmallBetChips.length; i++) {
                var id = this.aSmallBetChips[i].id + this.chipLevel;
                var imgX = (id * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor(id / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aSmallBetChips[i].posX, this.aSmallBetChips[i].posY, this.oChipImgData.oData.spriteWidth * this.aSmallBetChips[i].scale, this.oChipImgData.oData.spriteHeight * this.aSmallBetChips[i].scale);
            }
            for(var i = 0; i < this.aDoubleBetChips.length; i++) {
                var id = this.aDoubleBetChips[i].id + this.chipLevel;
                var imgX = (id * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor(id / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aDoubleBetChips[i].posX, this.aDoubleBetChips[i].posY, this.oChipImgData.oData.spriteWidth * this.aSmallBetChips[i].scale, this.oChipImgData.oData.spriteHeight * this.aSmallBetChips[i].scale);
            }
        };
        return Chips;
    })();
    Elements.Chips = Chips;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Cards = (function () {
        function Cards(_oCardsImgData, _canvasWidth, _canvasHeight) {
            this.centreId = 0;
            this.oCardsImgData = _oCardsImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
        }
        Cards.prototype.setUp = function (_type, _oData) {
            if (typeof _oData === "undefined") { _oData = null; }
            switch(_type) {
                case "firstDeal":
                    this.aPlayerCards1 = new Array();
                    this.aPlayerCards2 = new Array();
                    this.aCurPlayerCards = this.aPlayerCards1;
                    this.aCompCards = new Array();
                    this.aCurPlayerCards.push({
                        id: _oData.aPlayerDealtCards[0].id,
                        posX: 200,
                        posY: -200,
                        rotation: 0
                    });
                    this.aCurPlayerCards.push({
                        id: _oData.aPlayerDealtCards[1].id,
                        posX: 200,
                        posY: -200,
                        rotation: 0
                    });
                    this.aCompCards.push({
                        id: _oData.aCompDealtCards[0].id,
                        posX: 200,
                        posY: -200,
                        rotation: 0,
                        scaleX: 1
                    });
                    this.aCompCards.push({
                        id: 52,
                        posX: 200,
                        posY: -200,
                        rotation: 0,
                        scaleX: 1
                    });
                    for(var i = 0; i < this.aCurPlayerCards.length; i++) {
                        var posX = this.getCentreX(i, this.aCurPlayerCards.length, this.centreId);
                        TweenLite.to(this.aCurPlayerCards[i], 1, {
                            rotation: this.getRotation(posX),
                            posX: this.getCentreX(i, this.aCurPlayerCards.length, this.centreId),
                            posY: 460,
                            delay: i * .1
                        });
                        var posX = this.getCentreX(i, this.aCompCards.length, this.centreId);
                        TweenLite.to(this.aCompCards[i], 1, {
                            rotation: this.getRotation(posX),
                            posX: this.getCentreX(i, this.aCompCards.length, this.centreId),
                            posY: 130,
                            delay: i * .1 + .2
                        });
                    }
                    break;
                case "newPlayerCard":
                    this.aCurPlayerCards.push({
                        id: _oData.newCard.id,
                        posX: 200,
                        posY: -200,
                        rotation: 0
                    });
                    for(var i = 0; i < this.aCurPlayerCards.length; i++) {
                        var posX = this.getCentreX(i, this.aCurPlayerCards.length, this.centreId);
                        if(_oData.callback && i == this.aCurPlayerCards.length - 1) {
                            this.actionCompleteCallback = _oData.callback;
                            TweenLite.to(this.aCurPlayerCards[i], 1, {
                                rotation: this.getRotation(posX),
                                posX: posX,
                                posY: 460,
                                onComplete: this.handComplete,
                                onCompleteParams: [
                                    this
                                ]
                            });
                            break;
                        }
                        TweenLite.to(this.aCurPlayerCards[i], 1, {
                            rotation: this.getRotation(posX),
                            posX: posX,
                            posY: 460
                        });
                    }
                    break;
                case "newCompCard":
                    this.centreId = 0;
                    this.aCompCards.push({
                        id: _oData.oNewCard.id,
                        posX: 200,
                        posY: -200,
                        rotation: 0,
                        scaleX: 1
                    });
                    for(var i = 0; i < this.aCompCards.length; i++) {
                        var posX = this.getCentreX(i, this.aCompCards.length, this.centreId);
                        if(_oData.callback && i == this.aCompCards.length - 1) {
                            this.actionCompleteCallback = _oData.callback;
                            TweenLite.to(this.aCompCards[i], 1, {
                                rotation: this.getRotation(posX),
                                posX: posX,
                                posY: 130,
                                onComplete: this.handComplete,
                                onCompleteParams: [
                                    this
                                ]
                            });
                            break;
                        }
                        TweenLite.to(this.aCompCards[i], 1, {
                            rotation: this.getRotation(posX),
                            posX: posX,
                            posY: 130
                        });
                    }
                    break;
                case "compPlay":
                    this.centreId = 0;
                    TweenLite.to(this.aCompCards[1], .5, {
                        scaleX: 0,
                        ease: "Power1.easeIn"
                    });
                    this.aCompCards.push({
                        id: _oData.oHoleCard.id,
                        posX: this.aCompCards[1].posX,
                        posY: this.aCompCards[1].posY,
                        rotation: this.aCompCards[1].rotation,
                        scaleX: 0
                    });
                    TweenLite.to(this.aCompCards[2], .5, {
                        scaleX: 1,
                        delay: .5,
                        onComplete: this.holeCardRevealComplete,
                        onCompleteParams: [
                            this
                        ]
                    });
                    this.actionCompleteCallback = _oData.callback;
                    break;
                case "compShow":
                    this.centreId = 0;
                    TweenLite.to(this.aCompCards[1], .5, {
                        scaleX: 0,
                        ease: "Power1.easeIn"
                    });
                    this.aCompCards.push({
                        id: _oData.oHoleCard.id,
                        posX: this.aCompCards[1].posX,
                        posY: this.aCompCards[1].posY,
                        rotation: this.aCompCards[1].rotation,
                        scaleX: 0
                    });
                    TweenLite.to(this.aCompCards[2], .5, {
                        scaleX: 1,
                        delay: .5
                    });
                    break;
                case "compInsuranceShow":
                    this.centreId = 0;
                    TweenLite.to(this.aCompCards[1], .5, {
                        scaleX: 0,
                        ease: "Power1.easeIn"
                    });
                    this.aCompCards.push({
                        id: _oData.oHoleCard.id,
                        posX: this.aCompCards[1].posX,
                        posY: this.aCompCards[1].posY,
                        rotation: this.aCompCards[1].rotation,
                        scaleX: 0
                    });
                    TweenLite.to(this.aCompCards[2], .5, {
                        scaleX: 1,
                        delay: .5,
                        onComplete: this.holeCardRevealComplete,
                        onCompleteParams: [
                            this
                        ]
                    });
                    this.actionCompleteCallback = _oData.callback;
                    break;
                case "split":
                    this.aPlayerCards2 = new Array(this.aPlayerCards1.pop());
                    this.centreId = 1;
                    var posX = this.getCentreX(0, this.aCurPlayerCards.length, 1);
                    TweenLite.to(this.aCurPlayerCards[0], .5, {
                        rotation: this.getRotation(posX),
                        posX: posX
                    });
                    var posX = this.getCentreX(0, this.aPlayerCards2.length, 2);
                    TweenLite.to(this.aPlayerCards2[0], .5, {
                        rotation: this.getRotation(posX),
                        posX: posX
                    });
                    break;
                case "switchHands":
                    this.centreId = 2;
                    this.aCurPlayerCards = this.aPlayerCards2;
                    break;
            }
        };
        Cards.prototype.handComplete = function (_scope) {
            _scope.actionCompleteCallback();
        };
        Cards.prototype.holeCardRevealComplete = function (_scope) {
            for(var i = 0; i < _scope.aCompCards.length; i++) {
                if(_scope.aCompCards[i].id == 52) {
                    _scope.aCompCards.splice(i, 1);
                }
            }
            _scope.actionCompleteCallback();
        };
        Cards.prototype.getCentreX = function (_pos, _length, _type) {
            if (typeof _type === "undefined") { _type = 0; }
            var centre = this.canvasWidth / 2;
            var cardSpace = 50;
            if(_type == 1) {
                centre = this.canvasWidth / 4;
                cardSpace = 25;
            } else if(_type == 2) {
                centre = (this.canvasWidth / 4) * 3;
                cardSpace = 25;
            }
            return centre + _pos * cardSpace - ((_length - 1) * cardSpace) / 2;
        };
        Cards.prototype.getRotation = function (_posX) {
            return ((Math.PI / 8) / this.canvasWidth) * _posX - (Math.PI / 16);
        };
        Cards.prototype.render = function (_ctx) {
            for(var i = 0; i < this.aCompCards.length; i++) {
                _ctx.save();
                _ctx.translate(this.aCompCards[i].posX, this.aCompCards[i].posY);
                _ctx.rotate(this.aCompCards[i].rotation);
                var id = this.aCompCards[i].id;
                var imgX = (id * this.oCardsImgData.oData.spriteWidth) % this.oCardsImgData.img.width;
                var imgY = Math.floor(id / (this.oCardsImgData.img.width / this.oCardsImgData.oData.spriteWidth)) * this.oCardsImgData.oData.spriteHeight;
                _ctx.drawImage(this.oCardsImgData.img, imgX, imgY, this.oCardsImgData.oData.spriteWidth, this.oCardsImgData.oData.spriteHeight, -this.oCardsImgData.oData.spriteWidth / 2 + (1 - this.aCompCards[i].scaleX) * (this.oCardsImgData.oData.spriteWidth / 2), -this.oCardsImgData.oData.spriteHeight / 2, this.oCardsImgData.oData.spriteWidth * this.aCompCards[i].scaleX, this.oCardsImgData.oData.spriteHeight);
                _ctx.restore();
            }
            for(var i = 0; i < this.aPlayerCards1.length; i++) {
                _ctx.save();
                ctx.translate(this.aPlayerCards1[i].posX, this.aPlayerCards1[i].posY);
                ctx.rotate(this.aPlayerCards1[i].rotation);
                var id = this.aPlayerCards1[i].id;
                var imgX = (id * this.oCardsImgData.oData.spriteWidth) % this.oCardsImgData.img.width;
                var imgY = Math.floor(id / (this.oCardsImgData.img.width / this.oCardsImgData.oData.spriteWidth)) * this.oCardsImgData.oData.spriteHeight;
                _ctx.drawImage(this.oCardsImgData.img, imgX, imgY, this.oCardsImgData.oData.spriteWidth, this.oCardsImgData.oData.spriteHeight, -this.oCardsImgData.oData.spriteWidth / 2, -this.oCardsImgData.oData.spriteHeight / 2, this.oCardsImgData.oData.spriteWidth, this.oCardsImgData.oData.spriteHeight);
                _ctx.restore();
            }
            for(var i = 0; i < this.aPlayerCards2.length; i++) {
                _ctx.save();
                ctx.translate(this.aPlayerCards2[i].posX, this.aPlayerCards2[i].posY);
                ctx.rotate(this.aPlayerCards2[i].rotation);
                var id = this.aPlayerCards2[i].id;
                var imgX = (id * this.oCardsImgData.oData.spriteWidth) % this.oCardsImgData.img.width;
                var imgY = Math.floor(id / (this.oCardsImgData.img.width / this.oCardsImgData.oData.spriteWidth)) * this.oCardsImgData.oData.spriteHeight;
                _ctx.drawImage(this.oCardsImgData.img, imgX, imgY, this.oCardsImgData.oData.spriteWidth, this.oCardsImgData.oData.spriteHeight, -this.oCardsImgData.oData.spriteWidth / 2, -this.oCardsImgData.oData.spriteHeight / 2, this.oCardsImgData.oData.spriteWidth, this.oCardsImgData.oData.spriteHeight);
                _ctx.restore();
            }
        };
        return Cards;
    })();
    Elements.Cards = Cards;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Buttons = (function () {
        function Buttons(_oButtonsImgData, _canvasWidth, _canvasHeight) {
            this.canHit = false;
            this.oButtonsImgData = _oButtonsImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.aButs = new Array({
                targX: 3,
                targY: 630,
                x: 200,
                y: 800,
                isOn: true
            }, {
                targX: 133,
                targY: 630,
                x: 200,
                y: 800,
                isOn: true
            }, {
                targX: 266,
                targY: 630,
                x: 200,
                y: 800,
                isOn: true
            }, {
                targX: 399,
                targY: 630,
                x: 200,
                y: 800,
                isOn: true
            });
        }
        Buttons.prototype.setUp = function (_type, _oData) {
            if (typeof _oData === "undefined") { _oData = null; }
            switch(_type) {
                case "firstDeal":
                    if(_oData.dealType == "blackjack") {
                        return;
                    }
                    if(_oData.dealType == "normal") {
                        this.aButs[0].isOn = false;
                    }
                    if(!_oData.doubleIsOn) {
                        this.aButs[1].isOn = false;
                    }
                    for(var i = 0; i < this.aButs.length; i++) {
                        if(this.aButs[i].isOn) {
                            TweenLite.to(this.aButs[i], .5, {
                                y: this.aButs[i].targY,
                                x: this.aButs[i].targX,
                                ease: "Back.easeOut",
                                delay: 1 + i * .1,
                                onComplete: this.allowButs,
                                onCompleteParams: [
                                    this
                                ]
                            });
                        }
                    }
                    break;
                case "double":
                case "stand":
                    for(var i = 0; i < this.aButs.length; i++) {
                        if(this.aButs[i].isOn) {
                            TweenLite.to(this.aButs[i], .3, {
                                y: 800,
                                x: 200,
                                delay: i * .1
                            });
                        }
                    }
                    break;
                case "split":
                case "hit":
                    for(var i = 0; i < 2; i++) {
                        if(this.aButs[i].isOn) {
                            TweenLite.to(this.aButs[i], .3, {
                                y: 800,
                                x: 200,
                                delay: i * .1
                            });
                        }
                    }
                    break;
                case "bust":
                case "insuranceWin":
                    for(var i = 0; i < this.aButs.length; i++) {
                        if(this.aButs[i].isOn) {
                            TweenLite.to(this.aButs[i], .3, {
                                y: 800,
                                x: 200,
                                delay: 1 + i * .1
                            });
                        }
                    }
                    break;
            }
        };
        Buttons.prototype.allowButs = function (_scope) {
            _scope.canHit = true;
        };
        Buttons.prototype.render = function (_ctx) {
            for(var i = 0; i < this.aButs.length; i++) {
                if(this.aButs[i].isOn) {
                    var imgX = (i * this.oButtonsImgData.oData.spriteWidth) % this.oButtonsImgData.img.width;
                    var imgY = Math.floor(i / (this.oButtonsImgData.img.width / this.oButtonsImgData.oData.spriteWidth)) * this.oButtonsImgData.oData.spriteHeight;
                    _ctx.drawImage(this.oButtonsImgData.img, imgX, imgY, this.oButtonsImgData.oData.spriteWidth, this.oButtonsImgData.oData.spriteHeight, this.aButs[i].x, this.aButs[i].y, this.oButtonsImgData.oData.spriteWidth, this.oButtonsImgData.oData.spriteHeight);
                }
            }
        };
        return Buttons;
    })();
    Elements.Buttons = Buttons;    
})(Elements || (Elements = {}));
var requestAnimFrame = (function () {
    return window.requestAnimationFrame || (window).webkitRequestAnimationFrame || (window).mozRequestAnimationFrame || (window).oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60, new Date().getTime());
    };
})();
var previousTime;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
canvas.width = 533;
canvas.height = 800;
var canvasX;
var canvasY;
var canvasScaleX;
var canvasScaleY;
var div = document.getElementById('viewporter');
var sound;
var music;
var allowSound = false;
var muted = false;
var splash;
var splashTimer = 0;
var screens;
var assetLib;
var preAssetLib;
var rotatePause = false;
var manualPause = false;
var isMobile = false;
var gameState = "loading";
var aLangs = new Array("EN", "ES", "TR");
var curLang = "";
var isBugBrowser = false;
var deviceAgent = navigator.userAgent.toLowerCase();
if(deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) {
    isMobile = true;
    if(deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent)) {
        isBugBrowser = true;
    }
}
var userInput = new Utils.UserInput(canvas, isBugBrowser);
resizeCanvas();

window.onresize = function () {
    setTimeout(function () {
        resizeCanvas();
    }, 1);
};
function startBlackjack() {
    setTimeout(function () {
        resizeCanvas();
    }, 0);
    window.addEventListener("orientationchange", function () {
        resizeCanvas();
    }, false);
    loadPreAssets();
};
if(typeof (window).AudioContext !== 'undefined' || typeof (window).webkitAudioContext !== 'undefined' || navigator.userAgent.indexOf('Android') == -1) {
    allowSound = true;
    sound = new Howl({
        urls: [
            'audio/sound.ogg', 
            'audio/sound.m4a'
        ],
        sprite: {
            click: [
                0, 
                150
            ],
            cardHard: [
                250, 
                500
            ],
            chip: [
                1000, 
                300
            ],
            bust: [
                1500, 
                750
            ],
            win: [
                2500, 
                750
            ],
            blackjack: [
                3500, 
                750
            ],
            push: [
                4500, 
                750
            ],
            cardSoft: [
                5500, 
                300
            ],
            chipIntro: [
                6000, 
                500
            ]
        }
    });
}
var panel;
var background;
var bet = 0;
var bank = 0;
var numbers;
var chips;
var aChipAmounts = new Array(5, 10, 25, 100, 500, 1000);
var cards;
var aDeck;
var dealType;
var buttons;
var aPCards1;
var aPCards2;
var aCurPlayerCards;
var aCompCards;
var insuranceTaken = false;
var splitTaken = false;
var insuranceCard;
var chipLevel = 0;
/* 
if(aLangs.length > 1) {
    loadPreAssets();
} else {
    curLang = aLangs[0];
    loadAssets();
} */

function initSplash() {
    gameState = "splash";
    resizeCanvas();
    splash = new Elements.Splash(assetLib.getData("splash"), canvas.width, canvas.height);
    previousTime = new Date().getTime();
    updateSplashScreenEvent();
}
function resetDeck() {
    aDeck = new Array();
    for(var i = 0; i < 52; i++) {
        aDeck.push({
            id: i,
            value: i % 13 + 1
        });
    }
}
function initStartScreen() {
    gameState = "start";
    if(allowSound) {
    }
    bet = 0;
    bank = 1000;
    userInput.addHitArea("mute", butEventHandler, null, {
        type: "rect",
        aRect: [
            455, 
            0, 
            canvas.width, 
            75
        ]
    }, true);
    userInput.addHitArea("help", butEventHandler, null, {
        type: "rect",
        aRect: [
            0, 
            0, 
            80, 
            75
        ]
    }, true);
    
    /*userInput.addHitArea("moregames", butEventHandler, null, {
        type: "rect",
        aRect: [
            (canvas.width/2)-100, 
            100, 
            (canvas.width/2)+100, 
            150
        ]
    }, true);*/
    
    var aPlayButPos = new Array(canvas.width / 2, 600);
    var aSGButton = new Array(canvas.width / 2, 750);
    screens = new Elements.Screens({
        startImageData: assetLib.getData("titleScreen")
    }, {
        /*moregames : {
            imageData: assetLib.getData("sgLogo"),
            pos: aSGButton
        },*/
        play: {
            imageData: assetLib.getData("playBut"),
            pos: aPlayButPos
        }
    }, canvas.width, canvas.height);
    screens.setRenderFunc("start");
    userInput.addHitArea("startGame", butEventHandler, aPlayButPos, {
        type: "image",
        oImageData: assetLib.getData("playBut"),
        aCentrePos: aPlayButPos
    });
    
    previousTime = new Date().getTime();
    updateStartScreenEvent();
}
function initBetting() {
    gameState = "betting";
    insuranceTaken = false;
    if(bank < 2000) {
        chipLevel = 0;
    } else if(bank < 10000) {
        chipLevel = 1;
    } else {
        chipLevel = 2;
    }
    if(allowSound) {
    }
    playSound("chipIntro");
    GameAPI.trackLevelStart();
    userInput.addHitArea("quitGameBetting", butEventHandler, null, {
        type: "rect",
        aRect: [
            0, 
            0, 
            80, 
            75
        ]
    }, true);
    userInput.addHitArea("addChip", butEventHandler, {
        id: 0
    }, {
        type: "rect",
        aRect: [
            0, 
            630, 
            133, 
            758
        ]
    });
    userInput.addHitArea("addChip", butEventHandler, {
        id: 1
    }, {
        type: "rect",
        aRect: [
            133, 
            630, 
            266, 
            758
        ]
    });
    userInput.addHitArea("addChip", butEventHandler, {
        id: 2
    }, {
        type: "rect",
        aRect: [
            266, 
            630, 
            399, 
            758
        ]
    });
    userInput.addHitArea("addChip", butEventHandler, {
        id: 3
    }, {
        type: "rect",
        aRect: [
            399, 
            630, 
            533, 
            758
        ]
    });
    userInput.addHitArea("removeChip", butEventHandler, null, {
        type: "rect",
        aRect: [
            170, 
            390, 
            360, 
            530
        ]
    });
    userInput.addHitArea("deal", butEventHandler, null, {
        type: "rect",
        aRect: [
            390, 
            390, 
            canvas.width, 
            530
        ]
    });
    background = new Elements.Background(assetLib.getData("background"), canvas.width, canvas.height);
    numbers = new Elements.Numbers(assetLib.getData("numbers"), canvas.width, canvas.height);
    numbers.setAmounts(bet, bank);
    panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("numbers"), canvas.width, canvas.height);
    panel.setUp("betting");
    chips = new Elements.Chips(assetLib.getData("chips"), chipLevel, aChipAmounts, canvas.width, canvas.height);
    chips.setAmounts(bet, bank);
    chips.setUp("betting");
    previousTime = new Date().getTime();
    updateBettingEvent();
}
function initHelp() {
    gameState = "help";
    userInput.addHitArea("quitHelp", butEventHandler, null, {
        type: "rect",
        aRect: [
            0, 
            0, 
            80, 
            75
        ]
    }, true);
    ctx.drawImage(assetLib.getData("helpScreen").img, 0, 0);
}
function initDeal() {
    gameState = "dealing";
    resetDeck();
    playSound("cardHard");
    userInput.addHitArea("quitGameDealing", butEventHandler, null, {
        type: "rect",
        aRect: [
            0, 
            0, 
            80, 
            75
        ]
    }, true);
    userInput.addHitArea("hit", butEventHandler, null, {
        type: "rect",
        aRect: [
            266, 
            630, 
            399, 
            758
        ]
    });
    userInput.addHitArea("stand", butEventHandler, null, {
        type: "rect",
        aRect: [
            399, 
            630, 
            533, 
            758
        ]
    });
    aPCards2 = new Array();
    aPCards1 = aCurPlayerCards = getCards(2);
    aCompCards = getCards(1);
    if((roundToTen(this.aCurPlayerCards[0].value) + roundToTen(this.aCurPlayerCards[1].value)) == 11 && (this.aCurPlayerCards[0].value == 1 || this.aCurPlayerCards[1].value == 1)) {
        dealType = "blackjack";
    } else if(roundToTen(this.aCurPlayerCards[0].value) == roundToTen(this.aCurPlayerCards[1].value) && bank >= bet) {
        dealType = "split";
        userInput.addHitArea("split", butEventHandler, null, {
            type: "rect",
            aRect: [
                0, 
                630, 
                133, 
                758
            ]
        });
    } else {
        dealType = "normal";
    }
    var insuranceIsOn = false;
    var doubleIsOn = false;
    if(aCompCards[0].value == 1 && bank >= bet) {
        userInput.addHitArea("insure", butEventHandler, null, {
            type: "rect",
            aRect: [
                0, 
                200, 
                150, 
                350
            ]
        });
        insuranceIsOn = true;
    }
    if(bank >= bet) {
        userInput.addHitArea("double", butEventHandler, null, {
            type: "rect",
            aRect: [
                133, 
                630, 
                266, 
                758
            ]
        });
        doubleIsOn = true;
    }
    panel.setUp("firstDeal", {
        dealType: dealType,
        insuranceIsOn: insuranceIsOn,
        value: getBestValue(this.aCurPlayerCards),
        callback: initBlackjackCompare
    });
    cards = new Elements.Cards(assetLib.getData("cards"), canvas.width, canvas.height);
    cards.setUp("firstDeal", {
        aPlayerDealtCards: this.aCurPlayerCards,
        aCompDealtCards: this.aCompCards,
        dealType: dealType
    });
    chips.setUp("firstDeal");
    previousTime = new Date().getTime();
    buttons = new Elements.Buttons(assetLib.getData("buttons"), canvas.width, canvas.height);
    buttons.setUp("firstDeal", {
        dealType: dealType,
        doubleIsOn: doubleIsOn
    });
    updateDealingEvent();
}
function initBlackjackCompare() {
    var oHoleCard = getCards(1)[0];
    aCompCards.push(oHoleCard);
    panel.setUp("compPlay", {
        value: getBestValue(aCompCards)
    });
    cards.setUp("compPlay", {
        oHoleCard: oHoleCard,
        callback: checkBlackjack
    });
}
function initCompPlay() {
    var oHoleCard;
    if(!insuranceTaken) {
        oHoleCard = getCards(1)[0];
    } else {
        oHoleCard = insuranceCard;
    }
    aCompCards.push(oHoleCard);
    playSound("cardSoft");
    panel.setUp("compPlay", {
        value: getBestValue(aCompCards)
    });
    cards.setUp("compPlay", {
        oHoleCard: oHoleCard,
        callback: checkHands
    });
}
function dealNewCompCard() {
    var oNewCard = getCards(1)[0];
    aCompCards.push(oNewCard);
    playSound("cardSoft");
    panel.setUp("newCompCard", {
        value: getBestValue(aCompCards)
    });
    cards.setUp("newCompCard", {
        oNewCard: oNewCard,
        callback: checkHands
    });
}
function initCompShow() {
    var oHoleCard = getCards(1)[0];
    aCompCards.push(oHoleCard);
    playSound("cardSoft");
    cards.setUp("compShow", {
        oHoleCard: oHoleCard
    });
}
function initCompInsuranceShow() {
    aCompCards.push(insuranceCard);
    playSound("cardSoft");
    panel.setUp("compPlay", {
        value: getBestValue(aCompCards)
    });
    cards.setUp("compInsuranceShow", {
        oHoleCard: insuranceCard,
        callback: checkInsuranceHand
    });
}
function checkInsuranceHand() {
    var compHandValue = getBestValue(aCompCards);
    if(compHandValue == 21) {
        bank += Math.round(bet * 1.5);
        bet = 0;
        numbers.setAmounts(bet, bank);
        userInput.removeHitArea("split");
        userInput.removeHitArea("double");
        userInput.removeHitArea("hit");
        userInput.removeHitArea("stand");
        panel.setUp("insuranceWin");
        buttons.setUp("insuranceWin");
        userInput.addHitArea("replay", butEventHandler, null, {
            type: "rect",
            aRect: [
                390, 
                390, 
                canvas.width, 
                530
            ]
        });
    } else {
        buttons.canHit = true;
    }
}
function checkHands() {
    var compHandValue = getBestValue(aCompCards);
    var playerHandValue = getBestValue2(aPCards1, aPCards2);
    
    if(compHandValue > 21) {
    	console.log("1");
        EXAPI.gameOver(1, 1000)
        panel.setUp("compBust");
        playSound("win");
        bank += bet * 2;
        bet = 0;
        numbers.setAmounts(bet, bank);
        userInput.removeHitArea("split");
        userInput.removeHitArea("double");
        userInput.removeHitArea("hit");
        userInput.removeHitArea("stand");
        userInput.addHitArea("replay", butEventHandler, null, {
            type: "rect",
            aRect: [
                390, 
                390, 
                canvas.width, 
                530
            ]
        });
    } else if(compHandValue > 16) {
        if(compHandValue > playerHandValue) {
        	console.log("2");
            EXAPI.gameOver(1, 1000);
            panel.setUp("compWin", {
                bank: bank
            });
            playSound("bust");
            if(bank < 5) {
                bank = 1000;
            }
            bet = 0;
            numbers.setAmounts(bet, bank);
            userInput.removeHitArea("split");
            userInput.removeHitArea("double");
            userInput.removeHitArea("hit");
            userInput.removeHitArea("stand");
            userInput.addHitArea("replay", butEventHandler, null, {
                type: "rect",
                aRect: [
                    390, 
                    390, 
                    canvas.width, 
                    530
                ]
            });
        } else if(compHandValue < playerHandValue) {
        	console.log("3");
            EXAPI.gameOver(1, 1000);
            panel.setUp("playerWin");
            playSound("win");
            bank += bet * 2;
            bet = 0;
            numbers.setAmounts(bet, bank);
            userInput.removeHitArea("split");
            userInput.removeHitArea("double");
            userInput.removeHitArea("hit");
            userInput.removeHitArea("stand");
            userInput.addHitArea("replay", butEventHandler, null, {
                type: "rect",
                aRect: [
                    390, 
                    390, 
                    canvas.width, 
                    530
                ]
            });
        } else {
        	console.log("4");
            EXAPI.gameOver(1, 1000);
            panel.setUp("push");
            playSound("push");
            bank += bet;
            bet = 0;
            numbers.setAmounts(bet, bank);
            userInput.removeHitArea("split");
            userInput.removeHitArea("double");
            userInput.removeHitArea("hit");
            userInput.removeHitArea("stand");
            userInput.addHitArea("replay", butEventHandler, null, {
                type: "rect",
                aRect: [
                    390, 
                    390, 
                    canvas.width, 
                    530
                ]
            });
        }
    } else {
        dealNewCompCard();
    }
    	
}
function checkBlackjack() {
    var compHandValue = getBestValue(aCompCards);
    if(compHandValue == 21) {
        console.log("push");
        panel.setUp("push");
        playSound("push");
        bank += bet;
        bet = 0;
        numbers.setAmounts(bet, bank);
        userInput.removeHitArea("split");
        userInput.removeHitArea("double");
        userInput.removeHitArea("hit");
        userInput.removeHitArea("stand");
        userInput.addHitArea("replay", butEventHandler, null, {
            type: "rect",
            aRect: [
                390, 
                390, 
                canvas.width, 
                530
            ]
        });
    } else {
        panel.setUp("blackjack");
        playSound("blackjack");
        bank += bet + Math.round(bet *= 1.5);
        bet = 0;
        numbers.setAmounts(bet, bank);
        userInput.removeHitArea("split");
        userInput.removeHitArea("double");
        userInput.removeHitArea("hit");
        userInput.removeHitArea("stand");
        userInput.addHitArea("replay", butEventHandler, null, {
            type: "rect",
            aRect: [
                390, 
                390, 
                canvas.width, 
                530
            ]
        });
    }
}
function roundToTen(_num) {
    if(_num > 10) {
        _num = 10;
    }
    return _num;
}
function getBestValue(_aHand) {
    var handTotal = 0;
    var aceNum = 0;
    for(var i = 0; i < _aHand.length; i++) {
        if(_aHand[i].value == 1) {
            aceNum++;
            handTotal += 11;
        } else {
            handTotal += roundToTen(_aHand[i].value);
        }
    }
    if(handTotal > 21) {
        for(var i = 0; i < aceNum; i++) {
            handTotal -= 10;
            if(handTotal <= 21) {
                break;
            }
        }
    }
    return handTotal;
}
function getBestValue2(_aHand1, _aHand2) {
    var h1 = getBestValue(_aHand1);
    var h2 = getBestValue(_aHand2);
    if(h1 > 22) {
        return h2;
    } else if(h2 > 22) {
        return h1;
    } else {
        if(h1 > h2) {
            return h1;
        } else {
            return h2;
        }
    }
}
function getCards(_num) {
    var aCards = new Array();
    for(var i = 0; i < _num; i++) {
        if(aDeck.length > 0) {
            var ran = Math.floor(Math.random() * aDeck.length);
            aCards.push(aDeck[ran]);
            aDeck.splice(ran, 1);
        } else {
            break;
        }
    }
    return aCards;
}
function dealNewPlayerCard(_isDouble) {
    if (typeof _isDouble === "undefined") { _isDouble = false; }
    var newCard = getCards(1)[0];
    aCurPlayerCards.push(newCard);
    panel.setUp("newPlayerCard", {
        value: getBestValue(aCurPlayerCards)
    });
    if(getBestValue(aCurPlayerCards) > 21) {
        if(!splitTaken) {
            if(getBestValue(aPCards1) > 21) {
            	console.log("5");
                EXAPI.gameOver(1, 1000);
                panel.setUp("bust", {
                    bank: bank
                });
                if(bank < 5) {
                    bank = 1000;
                }
                buttons.setUp("bust");
                chips.setUp("bust");
                playSound("bust");
                bet = 0;
                numbers.setAmounts(bet, bank);
                userInput.removeHitArea("split");
                userInput.removeHitArea("double");
                userInput.removeHitArea("hit");
                userInput.removeHitArea("stand");
                userInput.addHitArea("replay", butEventHandler, null, {
                    type: "rect",
                    aRect: [
                        390, 
                        390, 
                        canvas.width, 
                        530
                    ]
                });
                cards.setUp("newPlayerCard", {
                    newCard: newCard,
                    callback: initCompShow
                });
            } else {
            	console.log("6");
                EXAPI.gameOver(1, 1000);
                userInput.removeHitArea("split");
                userInput.removeHitArea("double");
                userInput.removeHitArea("hit");
                userInput.removeHitArea("stand");
                buttons.setUp("stand");
                panel.setUp("stand");
                initCompPlay();
            }
        } else {
            splitTaken = false;
            cards.setUp("newPlayerCard", {
                newCard: newCard
            });
            panel.setUp("switchHands", {
                callback: dealNewPlayerCard,
                event: "bust"
            });
            bet /= 2;
            numbers.setAmounts(bet, bank);
            cards.setUp("switchHands");
            aCurPlayerCards = aPCards2;
        }
    } else if(_isDouble) {
        cards.setUp("newPlayerCard", {
            newCard: newCard,
            callback: initCompPlay
        });
    } else {
        cards.setUp("newPlayerCard", {
            newCard: newCard
        });
    }
}
function butEventHandler(_id, _oData) {
    switch(_id) {
        case "langSelect":
            curLang = _oData.lang;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            userInput.removeHitArea("langSelect");
            initLoadAssets();
            break;
        case "replay":
            playSound("click");
            userInput.removeHitArea("replay");
            userInput.removeHitArea("quitGameDealing");
            bet = 0;
            numbers.setAmounts(bet, bank);
            initBetting();
            break;
        case "split":
            if(buttons.canHit) {
                playSound("click");
                splitTaken = true;
                aPCards2 = new Array();
                aPCards2.push(aCurPlayerCards.pop());
                aPCards1 = aCurPlayerCards;
                bank -= bet;
                bet *= 2;
                numbers.setAmounts(bet, bank);
                userInput.removeHitArea("split");
                userInput.removeHitArea("double");
                buttons.setUp("split");
                cards.setUp("split");
                dealNewPlayerCard();
                panel.setUp("split", {
                    playerHandTotal1: getBestValue(aPCards1),
                    playerHandTotal2: getBestValue(aPCards2)
                });
                if(insuranceTaken) {
                    panel.setUp("hidePlayOn");
                }
            }
            break;
        case "double":
            if(buttons.canHit) {
                playSound("cardSoft");
                bank -= bet;
                bet *= 2;
                userInput.removeHitArea("split");
                userInput.removeHitArea("double");
                userInput.removeHitArea("hit");
                userInput.removeHitArea("stand");
                numbers.setAmounts(bet, bank);
                buttons.setUp("double");
                chips.setUp("double");
                dealNewPlayerCard(true);
                if(insuranceTaken) {
                    panel.setUp("hidePlayOn");
                }
            }
            break;
        case "hit":
            if(buttons.canHit) {
                playSound("cardSoft");
                userInput.removeHitArea("split");
                userInput.removeHitArea("double");
                buttons.setUp("hit");
                dealNewPlayerCard();
                if(insuranceTaken) {
                    panel.setUp("hidePlayOn");
                }
            }
            break;
        case "stand":
            if(buttons.canHit) {
                playSound("click");
                if(!splitTaken) {
                    userInput.removeHitArea("split");
                    userInput.removeHitArea("double");
                    userInput.removeHitArea("hit");
                    userInput.removeHitArea("stand");
                    buttons.setUp("stand");
                    panel.setUp("stand");
                    initCompPlay();
                } else {
                    splitTaken = false;
                    panel.setUp("switchHands", {
                        callback: dealNewPlayerCard
                    });
                    cards.setUp("switchHands");
                    aCurPlayerCards = aPCards2;
                }
                if(insuranceTaken) {
                    panel.setUp("hidePlayOn");
                }
            }
            break;
        case "startGame":
            playSound("click");
            userInput.removeHitArea("startGame");
            userInput.removeHitArea("help");
            initBetting();
            break;
        case "help":
            playSound("click");
            userInput.removeHitArea("startGame");
            userInput.removeHitArea("help");
            initHelp();
            break;
        case "quitHelp":
            playSound("click");
            userInput.removeHitArea("quitHelp");
            initStartScreen();
            break;
        case "mute":
            playSound("click");
            toggleMute();
            break;
        case "quitGameBetting":
            playSound("click");
            userInput.removeHitArea("quitGameBetting");
            userInput.removeHitArea("addChip");
            userInput.removeHitArea("removeChip");
            userInput.removeHitArea("deal");
            initStartScreen();
            break;
        case "quitGameDealing":
            playSound("click");
            userInput.removeHitArea("quitGameDealing");
            userInput.removeHitArea("split");
            userInput.removeHitArea("double");
            userInput.removeHitArea("hit");
            userInput.removeHitArea("stand");
            userInput.removeHitArea("insure");
            userInput.removeHitArea("replay");
            initStartScreen();
            break;
        case "addChip":
            if(aChipAmounts[_oData.id] <= bank) {
                playSound("chip");
                panel.showDealBut();
                bet += aChipAmounts[_oData.id + chipLevel];
                bank -= aChipAmounts[_oData.id + chipLevel];
                numbers.setAmounts(bet, bank);
                chips.addChip(_oData.id, bet, bank);
            }
            break;
        case "removeChip":
            if(bet >= 5) {
                playSound("click");
                bet -= aChipAmounts[chips.aBetChips[chips.aBetChips.length - 1] + chipLevel];
                bank += aChipAmounts[chips.aBetChips[chips.aBetChips.length - 1] + chipLevel];
                numbers.setAmounts(bet, bank);
                chips.removeChip(bet, bank);
                if(bet <= 0) {
                    panel.hideDealBut();
                }
            }
            break;
        case "deal":
            if(bet > 0) {
                playSound("click");
                userInput.removeHitArea("quitGameBetting");
                userInput.removeHitArea("addChip");
                userInput.removeHitArea("removeChip");
                userInput.removeHitArea("deal");
                initDeal();
            }
            break;
        case "insure":
            playSound("click");
            insuranceCard = getCards(1)[0];
            bank -= Math.round(bet / 2);
            numbers.setAmounts(bet, bank);
            insuranceTaken = true;
            if(roundToTen(insuranceCard.value) == 10) {
                panel.setUp("insuranceTaken");
                initCompInsuranceShow();
                buttons.canHit = false;
            } else {
                panel.setUp("insuranceLose");
            }
            break;
    }
}
function updateDealingEvent() {
    if(rotatePause || gameState != "dealing") {
        return;
    }
    var delta = getDelta();
    background.render(ctx);
    numbers.render(ctx);
    chips.render(ctx);
    cards.render(ctx);
    buttons.render(ctx);
    panel.render(ctx);
    requestAnimFrame(updateDealingEvent);
}
function updateBettingEvent() {
    if(rotatePause || gameState != "betting") {
        return;
    }
    var delta = getDelta();
    background.render(ctx);
    numbers.render(ctx);
    chips.render(ctx);
    panel.render(ctx);
    requestAnimFrame(updateBettingEvent);
}
function updateSplashScreenEvent() {
    if(rotatePause || gameState != "splash") {
        return;
    }
    var delta = getDelta();
    splashTimer += delta;
    if(splashTimer > 2.5) {
        initStartScreen();
        return;
    }
    splash.render(ctx, delta);
    requestAnimFrame(updateSplashScreenEvent);
}
function updateStartScreenEvent() {
    if(rotatePause || gameState != "start") {
        return;
    }
    var delta = getDelta();
    screens.render(ctx, delta);
    requestAnimFrame(updateStartScreenEvent);
}
function getDelta() {
    var currentTime = new Date().getTime();
    var delta = (currentTime - previousTime) / 1000;
    previousTime = currentTime;
    if(delta > .5) {
        delta = 0;
    }
    return delta;
}
function renderSprite(_element) {
    ctx.save();
    ctx.translate(_element.x, _element.y);
    ctx.rotate(_element.rotation);
    _element.render(ctx);
    ctx.restore();
}
function loadPreAssets() {
    curLang = EXAPI.getLanguage().toUpperCase();
    preAssetLib = new Utils.AssetLoader(curLang, [
        {
            id: "langSelect",
            file: "images/langSelect.jpg"
        }, 
        {
            id: "preloadImage",
            file: "images/preloadImage.jpg"
        }
    ], ctx, canvas.width, canvas.height, false);

    if(curLang == null)
        preAssetLib.onReady(initLangSelect);
    else
        preAssetLib.onReady(loadAssets);
}
function initLangSelect() {
    var oImgData = preAssetLib.getData("langSelect");
    ctx.drawImage(oImgData.img, canvas.width / 2 - oImgData.img.width / 2, canvas.height / 2 - oImgData.img.height / 2);
    var butSize = 140;
    for(var i = 0; i < aLangs.length; i++) {
        var px = canvas.width / 2 - (butSize * aLangs.length) / 2 + i * butSize;
        var py = canvas.height / 2 - butSize / 2;
        userInput.addHitArea("langSelect", butEventHandler, {
            lang: aLangs[i]
        }, {
            type: "rect",
            aRect: [
                px, 
                py, 
                px + butSize, 
                py + 140
            ]
        });
    }
}
function initLoadAssets() {
    var oImgData = preAssetLib.getData("preloadImage");
    ctx.drawImage(oImgData.img, canvas.width / 2 - oImgData.img.width / 2, canvas.height / 2 - oImgData.img.height - 10);
    loadAssets();
}
function loadAssets() {
    assetLib = new Utils.AssetLoader(curLang, [
        {
            id: "background",
            file: "images/" + curLang + "/background.jpg"
        }, 
        {
            id: "helpScreen",
            file: "images/" + curLang + "/helpScreen.jpg"
        }, 
        {
            id: "titleScreen",
            file: "images/" + curLang + "/titleScreen.jpg"
        }, 
        {
            id: "rotateDeviceMessage",
            file: "images/rotateDeviceMessage.jpg"
        }, 
        {
            id: "splash",
            file: "images/splashScreen.jpg"
        }, 
        {
            id: "playBut",
            file: "images/" + curLang + "/playBut.png"
        },
        {
            id: "sgLogo",
            file:  "images/" + curLang + "/playBut.png"
        }, 
        {
            id: "panels",
            file: "images/" + curLang + "/panels_379x159.png",
            oData: {
                columns: 4,
                spriteWidth: 379,
                spriteHeight: 159
            }
        }, 
        {
            id: "numbers",
            file: "images/numbers_17x36.png",
            oData: {
                columns: 3,
                spriteWidth: 17,
                spriteHeight: 36
            }
        }, 
        {
            id: "cards",
            file: "images/cards_128x173.png",
            oData: {
                columns: 9,
                spriteWidth: 128,
                spriteHeight: 173
            }
        }, 
        {
            id: "buttons",
            file: "images/" + curLang + "/buttons_131x133.png",
            oData: {
                columns: 4,
                spriteWidth: 131,
                spriteHeight: 133
            }
        }, 
        {
            id: "chips",
            file: "images/chips_133x133.png",
            oData: {
                columns: 2,
                spriteWidth: 133,
                spriteHeight: 133
            }
        }
    ], ctx, canvas.width, canvas.height);
    if(allowSound && !muted) {
    }
    EXAPI.runGameHelper = initStartScreen;
    assetLib.onReady(EXAPI.loaded);
}
function resizeCanvas() {
    var tempInnerWidth = window.innerWidth;
    var tempInnerHeight = window.innerHeight;
    if(tempInnerWidth > 480) {
        tempInnerWidth -= 1;
        tempInnerHeight -= 1;
    }
    if(window.innerWidth > window.innerHeight && isMobile) {
        if(gameState != "loading") {
            rotatePauseOn();
        }
        if(tempInnerWidth / canvas.width < tempInnerHeight / canvas.height) {
            canvas.style.width = tempInnerWidth + "px";
            canvas.style.height = (tempInnerWidth / canvas.width) * canvas.height + "px";
            canvasX = 0;
            canvasY = ((tempInnerHeight - (tempInnerWidth / canvas.width) * canvas.height) / 2);
            canvasScaleX = canvasScaleY = canvas.width / tempInnerWidth;
            div.style.marginTop = canvasY + "px";
            div.style.marginLeft = canvasX + "px";
        } else {
            canvas.style.width = (tempInnerHeight / canvas.height) * canvas.width + "px";
            canvas.style.height = tempInnerHeight + "px";
            canvasX = ((tempInnerWidth - (tempInnerHeight / canvas.height) * canvas.width) / 2);
            canvasY = 0;
            canvasScaleX = canvasScaleY = canvas.height / tempInnerHeight;
            div.style.marginTop = canvasY + "px";
            div.style.marginLeft = canvasX + "px";
        }
    } else if(!isMobile) {
        if(rotatePause) {
            rotatePauseOff();
        }
        if(tempInnerWidth / canvas.width < tempInnerHeight / canvas.height) {
            canvas.style.width = tempInnerWidth + "px";
            canvas.style.height = (tempInnerWidth / canvas.width) * canvas.height + "px";
            canvasX = 0;
            canvasY = ((tempInnerHeight - (tempInnerWidth / canvas.width) * canvas.height) / 2);
            canvasScaleX = canvasScaleY = canvas.width / tempInnerWidth;
            div.style.marginTop = canvasY + "px";
            div.style.marginLeft = canvasX + "px";
        } else {
            canvas.style.width = (tempInnerHeight / canvas.height) * canvas.width + "px";
            canvas.style.height = tempInnerHeight + "px";
            canvasX = ((tempInnerWidth - (tempInnerHeight / canvas.height) * canvas.width) / 2);
            canvasY = 0;
            canvasScaleX = canvasScaleY = canvas.height / tempInnerHeight;
            div.style.marginTop = canvasY + "px";
            div.style.marginLeft = canvasX + "px";
        }
    } else {
        if(rotatePause) {
            rotatePauseOff();
        }
        canvasX = canvasY = 0;
        canvasScaleX = canvas.width / tempInnerWidth;
        canvasScaleY = canvas.height / tempInnerHeight;
        canvas.style.width = tempInnerWidth + "px";
        canvas.style.height = tempInnerHeight + "px";
        div.style.marginTop = 0 + "px";
        div.style.marginLeft = 0 + "px";
    }
    userInput.setCanvas(canvasX, canvasY, canvasScaleX, canvasScaleY);
}
function playSound(_id) {
    if(allowSound) {
        sound.play(_id);
    }
}
function toggleMute() {
    muted = !muted;
    if(allowSound) {
        if(muted) {
            Howler.mute();
        } else {
            Howler.unmute();
        }
    }
}
function toggleManualPause() {
    if(!manualPause) {
        manualPause = true;
        if(allowSound) {
            Howler.mute();
        }
        pauseCoreOn();
    } else {
        manualPause = false;
        if(allowSound) {
            if(!muted) {
                Howler.unmute();
            }
        }
        pauseCoreOff();
    }
}
function rotatePauseOn() {
    rotatePause = true;
    ctx.drawImage(assetLib.getImg("rotateDeviceMessage"), 0, 0);
    pauseCoreOn();
}
function rotatePauseOff() {
    rotatePause = false;
    pauseCoreOff();
}
function pauseCoreOn() {
    userInput.pauseIsOn = true;
    switch(gameState) {
        case "start":
            break;
        case "betting":
            break;
        case "dealing":
            break;
    }
}
function pauseCoreOff() {
    previousTime = new Date().getTime();
    userInput.pauseIsOn = false;
    switch(gameState) {
        case "splash":
            updateSplashScreenEvent();
            break;
        case "start":
            initStartScreen();
            break;
        case "help":
            initHelp();
            break;
        case "betting":
            updateBettingEvent();
            break;
        case "dealing":
            updateDealingEvent();
            break;
    }
}

function initialize() {
    var initializeInterval = setInterval(function() {
        if(gameState !== "start") {
            initStartScreen();
        } else {
            clearInterval(initializeInterval);
            initializeInterval = null;
        }
    }, 500) 
}