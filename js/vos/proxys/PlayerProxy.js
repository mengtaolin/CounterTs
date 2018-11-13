var com;
(function (com) {
    var lin;
    (function (lin) {
        var vo;
        (function (vo) {
            var proxys;
            (function (proxys) {
                var PlayerProxy = /** @class */ (function () {
                    function PlayerProxy(playerVo) {
                        this._playerVo = playerVo;
                        this.initPlayer();
                    }
                    PlayerProxy.prototype.initPlayer = function () {
                        this._playerVo.startTime = new Date().getTime();
                        this._playerVo.id = this._playerVo.startTime.toString();
                    };
                    PlayerProxy.prototype.calculate = function (boomNum, isLandlordWin) {
                        // if(this._playerVo.role === RoleEnums.LANDLORD){//是地主
                        //     if(isLandlordWin){
                        //         this._playerVo.result += (RoundEnums.BASIC_NUM << boomNum + 1);
                        //     }
                        //     else{
                        //         this._playerVo.result -= (RoundEnums.BASIC_NUM << boomNum + 1);
                        //     }
                        // }
                        // else{
                        //     if(isLandlordWin){
                        //         this._playerVo.result -= (RoundEnums.BASIC_NUM << boomNum);
                        //     }
                        //     else{
                        //         this._playerVo.result += (RoundEnums.BASIC_NUM << boomNum);
                        //     }
                        // }
                    };
                    PlayerProxy.prototype.calculateRed10 = function (boomNum, isLandlordWin) {
                        // if(this._playerVo.role === RoleEnums.LANDLORD){
                        //     if(isLandlordWin){
                        //         if(this._playerVo.hasRed10){
                        //             this._playerVo.result += (RoundEnums.BASIC_NUM << boomNum + 1);
                        //         }
                        //         else{
                        //             this._playerVo.result += (RoundEnums.BASIC_NUM << boomNum + 1) + (RoundEnums.BASIC_NUM << boomNum);
                        //         }
                        //     }
                        //     else{
                        //         if(this._playerVo.hasRed10){
                        //             this._playerVo.result -= (RoundEnums.BASIC_NUM << boomNum + 1);
                        //         }
                        //         else{
                        //             this._playerVo.result -= (RoundEnums.BASIC_NUM << boomNum + 1) + (RoundEnums.BASIC_NUM << boomNum);
                        //         }
                        //     }
                        // }
                        // else if(this._playerVo.role === RoleEnums.FARMER){
                        //     if(isLandlordWin){
                        //         if(this._playerVo.isRed10Win){
                        //         }
                        //     }
                        // }
                    };
                    return PlayerProxy;
                }());
                proxys.PlayerProxy = PlayerProxy;
            })(proxys = vo.proxys || (vo.proxys = {}));
        })(vo = lin.vo || (lin.vo = {}));
    })(lin = com.lin || (com.lin = {}));
})(com || (com = {}));
