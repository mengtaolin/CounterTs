import PlayerVo=com.lin.vo.PlayerVo;
import RoundVo=com.lin.vo.RoundVo;
import HButton = com.lin.views.components.HButton;
import VoManager = com.lin.vo.VoManager;
import IModel = com.lin.vo.IModel;

class AppManager{
    public static that:AppManager;
    private _playerList:Array<PlayerVo> = [];
    private _roundList:Array<RoundVo> = [];
    private _voManager:VoManager;

    constructor(){
        this._voManager = new VoManager();
    }

    public init(){
        var addPlus:HTMLLinkElement = document.getElementById("icon-plus") as HTMLLinkElement;
        addPlus.addEventListener("click", this.addPlayer);
        AppManager.that = this;
    }

    private _btnArray = ['取消', '确定'];
    private _btnList = [];
    private _hasHr:boolean = false;
    private _nameList = [];

    public addPlayer(e):void
    {
        mui.prompt('请输入玩家姓名：', '玩家姓名', '快来斗地主', AppManager.that._btnArray, function(e) {
            if (e.index == 1) {
                if(e.value.length === 0){
                    alert("请输入名字");
                    return;
                }
                var result:Array<IModel> = AppManager.that._voManager.addPlayer(e.value);
                AppManager.that._playerList.push(result[0] as PlayerVo);
                AppManager.that._btnList.push(result[1]);
            }
        });
    }

    private addPlayerByName(userName:string):HTMLButtonElement{
        var player:PlayerVo = new PlayerVo(userName);
        return this.addButton(player.name, true);
    }

    private addButton(userName:string, dragEnable:boolean=false):HTMLButtonElement{
        var btn:HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
        btn.setAttribute("class", "mui-btn mui-btn-primary mui-btn-outlined");
        btn.setAttribute("type", "button");
        btn.setAttribute("name", userName);
        if(dragEnable){
            btn.setAttribute("draggable", "true");
        }
        btn.addEventListener("click", this.updatePlayerName);
        btn.addEventListener("drag", this.onBtnDrag);
        btn.innerHTML = userName;
        this._nameList.push(userName);
        this._btnList.push(btn);
        if(this._hasHr == false){
            var hrDiv:HTMLDivElement = document.getElementById("hrDiv") as HTMLDivElement;
            hrDiv.innerHTML = "<hr/>";
            let a:HTMLElement = this.addLink("round", "#modal");
            let span:HTMLSpanElement = this.addSpan("mui-icon mui-icon-plus mui-pull-right");
            a.appendChild(span);
            hrDiv.appendChild(a);
            this._hasHr = true;
        }
        return btn;
    }

    private addLink(linkId:string, href:string):HTMLElement{
        let link:HTMLElement = document.createElement("a") as HTMLElement;
        link.setAttribute("id", linkId);
        link.setAttribute("href", href);
        link.addEventListener("click", this.onLinkClik);
        return link;
    }

    private onLinkClik(e:MouseEvent){
        var link:HTMLElement = e.currentTarget as HTMLElement;
        if(link.id == "round"){
            
        }
    }

    private addSpan(classStr:string):HTMLSpanElement{
        let span:HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
        span.setAttribute("class", classStr);
        return span;
    }

    private onBtnDrag(e:MouseEvent):void{
        e.stopImmediatePropagation();
        e.stopPropagation();
        var btn:HTMLButtonElement = e.currentTarget as HTMLButtonElement;
        var parent:HTMLDivElement = document.getElementById("nameBtns") as HTMLDivElement;
        if(parent.contains(btn)){
            parent.removeChild(btn);
        }
        btn.removeEventListener("click", this.updatePlayerName);
        btn.removeEventListener("drag", this.onBtnDrag);
        var btnList = AppManager.that._btnList;
        var index:number = btnList.indexOf(btn);
        if(index != -1){
            btnList.splice(index, 1);
        }
        if(btnList.length == 0){
            var hrDiv:HTMLDivElement = document.getElementById("hrDiv") as HTMLDivElement;
            var children:HTMLCollection = hrDiv.children;
            var len:number = children.length;
            while(len > 0){
                var child:any = children[0];
                if(child.nodeName === "A"){
                    child.removeEventListener("click", AppManager.that.onLinkClik);
                }
                hrDiv.removeChild(child);
                len --;
                AppManager.that._hasHr = false;
            }
        }
        // btn.removeEventListener("mousedown", this.onBtnMouseDown);
        // btn.removeEventListener("mouseup", this.onBtnMouseUp);
        btn = null;
    }

    private _btnTime:Object = {};
    private onBtnMouseDown(e:MouseEvent):void{
        var btn:HTMLButtonElement = e.currentTarget as HTMLButtonElement;
        AppManager.that._btnTime[btn.name] = new Date().getTime();
    }

    private onBtnMouseUp(e:MouseEvent):void{
        var btn:HTMLButtonElement = e.currentTarget as HTMLButtonElement;
        var time = AppManager.that._btnTime[btn.name];
        var now = new Date().getTime();
        if(now - time > 1000){
            e.stopImmediatePropagation();
            e.stopPropagation();
            btn.parentElement.removeChild(btn);
            btn.removeEventListener("click", this.updatePlayerName);
            btn.removeEventListener("mousedown", this.onBtnMouseDown);
            btn.removeEventListener("mouseup", this.onBtnMouseUp);
            btn = null;
        }

    }
    /**
     * 打开可供选择的
     */
    private addResultPlayerItem(){
        let len = this._nameList.length;
        for(let i = 0;i < len;i ++){
            
        }
    }

    public updatePlayerName(e:MouseEvent):void
    {
        var btn:HTMLElement = e.currentTarget as HTMLElement;
        var name:string = btn.innerHTML;
        mui.prompt('修改玩家姓名：', name, btn.innerHTML, AppManager.that._btnArray, function(e) {
            if (e.index == 1) {
                if(e.value.length === 0){
                    return;
                }
                btn.innerHTML = e.value;
            }
        });
    }

}