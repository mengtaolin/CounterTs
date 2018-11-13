var PlayerVo = com.lin.vo.PlayerVo;
var RoundVo = com.lin.vo.RoundVo;
var HButton = com.lin.views.components.HButton;
var VoManager = com.lin.vo.VoManager;
var AppManager = /** @class */ (function () {
    function AppManager() {
        this._playerList = [];
        this._roundList = [];
        this._btnArray = ['取消', '确定'];
        this._btnList = [];
        this._hasHr = false;
        this._nameList = [];
        this._btnTime = {};
        this._voManager = new VoManager();
    }
    AppManager.prototype.init = function () {
        var addPlus = document.getElementById("icon-plus");
        addPlus.addEventListener("click", this.addPlayer);
        AppManager.that = this;
    };
    AppManager.prototype.addPlayer = function (e) {
        mui.prompt('请输入玩家姓名：', '玩家姓名', '快来斗地主', AppManager.that._btnArray, function (e) {
            if (e.index == 1) {
                if (e.value.length === 0) {
                    alert("请输入名字");
                    return;
                }
                var result = AppManager.that._voManager.addPlayer(e.value);
                AppManager.that._playerList.push(result[0]);
                AppManager.that._btnList.push(result[1]);
            }
        });
    };
    AppManager.prototype.addPlayerByName = function (userName) {
        var player = new PlayerVo(userName);
        return this.addButton(player.name, true);
    };
    AppManager.prototype.addButton = function (userName, dragEnable) {
        if (dragEnable === void 0) { dragEnable = false; }
        var btn = document.createElement("button");
        btn.setAttribute("class", "mui-btn mui-btn-primary mui-btn-outlined");
        btn.setAttribute("type", "button");
        btn.setAttribute("name", userName);
        if (dragEnable) {
            btn.setAttribute("draggable", "true");
        }
        btn.addEventListener("click", this.updatePlayerName);
        btn.addEventListener("drag", this.onBtnDrag);
        btn.innerHTML = userName;
        this._nameList.push(userName);
        this._btnList.push(btn);
        if (this._hasHr == false) {
            var hrDiv = document.getElementById("hrDiv");
            hrDiv.innerHTML = "<hr/>";
            var a = this.addLink("round", "#modal");
            var span = this.addSpan("mui-icon mui-icon-plus mui-pull-right");
            a.appendChild(span);
            hrDiv.appendChild(a);
            this._hasHr = true;
        }
        return btn;
    };
    AppManager.prototype.addLink = function (linkId, href) {
        var link = document.createElement("a");
        link.setAttribute("id", linkId);
        link.setAttribute("href", href);
        link.addEventListener("click", this.onLinkClik);
        return link;
    };
    AppManager.prototype.onLinkClik = function (e) {
        var link = e.currentTarget;
        if (link.id == "round") {
        }
    };
    AppManager.prototype.addSpan = function (classStr) {
        var span = document.createElement("span");
        span.setAttribute("class", classStr);
        return span;
    };
    AppManager.prototype.onBtnDrag = function (e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        var btn = e.currentTarget;
        var parent = document.getElementById("nameBtns");
        if (parent.contains(btn)) {
            parent.removeChild(btn);
        }
        btn.removeEventListener("click", this.updatePlayerName);
        btn.removeEventListener("drag", this.onBtnDrag);
        var btnList = AppManager.that._btnList;
        var index = btnList.indexOf(btn);
        if (index != -1) {
            btnList.splice(index, 1);
        }
        if (btnList.length == 0) {
            var hrDiv = document.getElementById("hrDiv");
            var children = hrDiv.children;
            var len = children.length;
            while (len > 0) {
                var child = children[0];
                if (child.nodeName === "A") {
                    child.removeEventListener("click", AppManager.that.onLinkClik);
                }
                hrDiv.removeChild(child);
                len--;
                AppManager.that._hasHr = false;
            }
        }
        // btn.removeEventListener("mousedown", this.onBtnMouseDown);
        // btn.removeEventListener("mouseup", this.onBtnMouseUp);
        btn = null;
    };
    AppManager.prototype.onBtnMouseDown = function (e) {
        var btn = e.currentTarget;
        AppManager.that._btnTime[btn.name] = new Date().getTime();
    };
    AppManager.prototype.onBtnMouseUp = function (e) {
        var btn = e.currentTarget;
        var time = AppManager.that._btnTime[btn.name];
        var now = new Date().getTime();
        if (now - time > 1000) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            btn.parentElement.removeChild(btn);
            btn.removeEventListener("click", this.updatePlayerName);
            btn.removeEventListener("mousedown", this.onBtnMouseDown);
            btn.removeEventListener("mouseup", this.onBtnMouseUp);
            btn = null;
        }
    };
    /**
     * 打开可供选择的
     */
    AppManager.prototype.addResultPlayerItem = function () {
        var len = this._nameList.length;
        for (var i = 0; i < len; i++) {
        }
    };
    AppManager.prototype.updatePlayerName = function (e) {
        var btn = e.currentTarget;
        var name = btn.innerHTML;
        mui.prompt('修改玩家姓名：', name, btn.innerHTML, AppManager.that._btnArray, function (e) {
            if (e.index == 1) {
                if (e.value.length === 0) {
                    return;
                }
                btn.innerHTML = e.value;
            }
        });
    };
    return AppManager;
}());
