var com;
(function (com) {
    var lin;
    (function (lin) {
        var vo;
        (function (vo_1) {
            /**
             * 斗地主每局数据VO
             */
            var RoundVo = /** @class */ (function () {
                function RoundVo(resultVo) {
                    this.resultVo = resultVo;
                }
                ;
                RoundVo.prototype.clone = function () {
                    var vo = new RoundVo(this.resultVo);
                    return vo;
                };
                RoundVo.prototype.dispose = function () {
                    this.resultVo.dispose();
                    this.resultVo = null;
                };
                return RoundVo;
            }());
            vo_1.RoundVo = RoundVo;
        })(vo = lin.vo || (lin.vo = {}));
    })(lin = com.lin || (com.lin = {}));
})(com || (com = {}));
