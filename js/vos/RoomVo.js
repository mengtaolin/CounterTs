var com;
(function (com) {
    var lin;
    (function (lin) {
        var vo;
        (function (vo) {
            var Proxy = com.lin.vo.proxys.RoomProxy;
            /**
             * 房间信息
             */
            var RoomVo = /** @class */ (function () {
                function RoomVo() {
                    /**
                     * 基本倍数
                     */
                    this.basic = 5;
                    /**
                     * 是否有红桃十
                     */
                    this.hasRed10 = false;
                    this._roomProxy = new Proxy(this);
                    this.playerList = [];
                    this.roundList = [];
                }
                RoomVo.prototype.addPlayer = function (playerName) {
                    var playerVo = new vo.PlayerVo(playerName);
                    this.playerList.push(playerVo);
                };
                Object.defineProperty(RoomVo.prototype, "playerNum", {
                    get: function () {
                        return this.playerList.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RoomVo.prototype, "roundNum", {
                    get: function () {
                        return this.roundList.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                RoomVo.prototype.addRound = function (resultVo) {
                    var roundVo = new vo.RoundVo(resultVo);
                    this.roundList.push(roundVo);
                };
                RoomVo.prototype.createResultVo = function () {
                    return this._roomProxy.createResultVo();
                };
                RoomVo.prototype.dispose = function () {
                    var len = this.playerList.length;
                    while (len > 0) {
                        var playerVo = this.playerList.pop();
                        playerVo.dispose();
                        len--;
                    }
                    len = this.roundList.length;
                    while (len > 0) {
                        var roundVo = this.roundList.pop();
                        roundVo.dispose();
                        len--;
                    }
                    this.playerList = null;
                    this.roundList = null;
                };
                /**
                 * 4炸封顶
                 */
                RoomVo.BOOM_MAX = 4;
                return RoomVo;
            }());
            vo.RoomVo = RoomVo;
        })(vo = lin.vo || (lin.vo = {}));
    })(lin = com.lin || (com.lin = {}));
})(com || (com = {}));
