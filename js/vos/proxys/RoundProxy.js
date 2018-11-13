var com;
(function (com) {
    var lin;
    (function (lin) {
        var vo;
        (function (vo) {
            var proxys;
            (function (proxys) {
                var RoundProxy = /** @class */ (function () {
                    function RoundProxy(roundVo) {
                        this._roundVo = roundVo;
                    }
                    RoundProxy.prototype.calculate = function (boomNum, isLandlordWin) {
                        // let playerList = this._roundVo.playerList;
                        // let len = playerList.length;
                        // for(var i = 0;i < len;i ++){
                        //     var player:PlayerVo = playerList[i];
                        //     if(this._roundVo.hasRed10){
                        //         player.calculateRed10(boomNum, isLandlordWin);
                        //     }
                        //     else{
                        //         player.calculate(boomNum, isLandlordWin);
                        //     }
                        // }
                    };
                    return RoundProxy;
                }());
                proxys.RoundProxy = RoundProxy;
            })(proxys = vo.proxys || (vo.proxys = {}));
        })(vo = lin.vo || (lin.vo = {}));
    })(lin = com.lin || (com.lin = {}));
})(com || (com = {}));
