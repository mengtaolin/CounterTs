var com;
(function (com) {
    var lin;
    (function (lin) {
        var vo;
        (function (vo) {
            var VoManager = /** @class */ (function () {
                function VoManager() {
                    this.index = 0;
                }
                ;
                VoManager.prototype.addPlayer = function (playerName) {
                    this.index++;
                    var player = new vo.PlayerVo(playerName);
                    player.index = this.index;
                    var btn = new HButton();
                    btn.data = player;
                    return [player, btn];
                };
                return VoManager;
            }());
            vo.VoManager = VoManager;
        })(vo = lin.vo || (lin.vo = {}));
    })(lin = com.lin || (com.lin = {}));
})(com || (com = {}));
