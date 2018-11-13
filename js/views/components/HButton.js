var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var com;
(function (com) {
    var lin;
    (function (lin) {
        var views;
        (function (views) {
            var components;
            (function (components) {
                var HButton = /** @class */ (function (_super) {
                    __extends(HButton, _super);
                    function HButton() {
                        var _this = _super.call(this) || this;
                        _this._btnArray = ['取消', '确定'];
                        HButton.that = _this;
                        _this.setAttribute("class", "mui-btn mui-btn-primary mui-btn-outlined");
                        _this.setAttribute("type", "button");
                        return _this;
                    }
                    Object.defineProperty(HButton.prototype, "data", {
                        get: function () {
                            return this._data;
                        },
                        set: function (value) {
                            this._data = value;
                            this.innerHTML = this._data.name;
                            this.setAttribute("name", value.name);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(HButton.prototype, "label", {
                        set: function (value) {
                            this.innerHTML = value;
                            this.data.name = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    HButton.prototype.initEvents = function () {
                        this.addEventListener("drag", this.onDrag);
                        this.addEventListener("click", this.onClick);
                    };
                    HButton.prototype.onDrag = function (e) {
                        this.dispose();
                    };
                    HButton.prototype.onClick = function (e) {
                        mui.prompt('修改玩家姓名：', name, this.innerHTML, HButton.that._btnArray, function (e) {
                            if (e.index == 1) {
                                if (e.value.length === 0) {
                                    return;
                                }
                                this.label = e.value;
                            }
                        });
                    };
                    HButton.prototype.dispose = function () {
                        this.removeEventListener("drag", this.onDrag);
                        this.removeEventListener("click", this.onClick);
                        this.parentElement.removeChild(this);
                    };
                    return HButton;
                }(HTMLButtonElement));
                components.HButton = HButton;
            })(components = views.components || (views.components = {}));
        })(views = lin.views || (lin.views = {}));
    })(lin = com.lin || (com.lin = {}));
})(com || (com = {}));
