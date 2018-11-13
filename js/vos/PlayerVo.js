var com;
(function (com) {
    var lin;
    (function (lin) {
        var vo;
        (function (vo) {
            var Proxy = com.lin.vo.proxys.PlayerProxy;
            var PlayerVo = /** @class */ (function () {
                function PlayerVo(username) {
                    /**
                     * 该房间第几个进来的人
                     */
                    this.index = 0;
                    this.roundList = [];
                    this.name = username;
                    this._proxy = new Proxy(this);
                }
                PlayerVo.prototype.calculate = function (boomNum, isLandlordWin) {
                    this._proxy.calculate(boomNum, isLandlordWin);
                };
                PlayerVo.prototype.calculateRed10 = function (boomNum, isLandlordWin) {
                    this._proxy.calculateRed10(boomNum, isLandlordWin);
                };
                PlayerVo.prototype.clone = function () {
                    var player = new PlayerVo(this.name);
                    player.startRoundId = this.startRoundId;
                    player.startTime = this.startTime;
                    var len = this.roundList.length;
                    for (var i = 0; i < len; i++) {
                        var roundVo = this.roundList[i].clone();
                        player.roundList.push(roundVo);
                    }
                    return player;
                };
                PlayerVo.prototype.dispose = function () {
                    this._proxy = null;
                };
                return PlayerVo;
            }());
            vo.PlayerVo = PlayerVo;
        })(vo = lin.vo || (lin.vo = {}));
    })(lin = com.lin || (com.lin = {}));
})(com || (com = {}));
