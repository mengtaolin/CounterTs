var com;
(function (com) {
    var lin;
    (function (lin) {
        var vo;
        (function (vo) {
            var RoundResultVo = /** @class */ (function () {
                function RoundResultVo() {
                    this.boomNum = 0;
                    this.isLandlordWin = false;
                    this.isRed10InLandlord = false;
                    /**
                     * 第一个值为地主输赢，第二个为第一个农民输赢，第三个值为第二个农民的输赢，第四个开始是买红桃10的人的结果
                     */
                    this.resultList = [];
                }
                RoundResultVo.prototype.dispose = function () {
                };
                return RoundResultVo;
            }());
            vo.RoundResultVo = RoundResultVo;
        })(vo = lin.vo || (lin.vo = {}));
    })(lin = com.lin || (com.lin = {}));
})(com || (com = {}));
