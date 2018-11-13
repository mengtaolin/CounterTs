var com;
(function (com) {
    var lin;
    (function (lin) {
        var vo;
        (function (vo_1) {
            var proxys;
            (function (proxys) {
                var RoomProxy = /** @class */ (function () {
                    function RoomProxy(room) {
                        this._room = room;
                    }
                    RoomProxy.prototype.createResultVo = function () {
                        var vo = new vo_1.RoundResultVo();
                        return vo;
                    };
                    return RoomProxy;
                }());
                proxys.RoomProxy = RoomProxy;
            })(proxys = vo_1.proxys || (vo_1.proxys = {}));
        })(vo = lin.vo || (lin.vo = {}));
    })(lin = com.lin || (com.lin = {}));
})(com || (com = {}));
