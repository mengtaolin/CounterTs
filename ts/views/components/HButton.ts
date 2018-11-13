module com.lin.views.components{
    import PlayerVo=com.lin.vo.PlayerVo;
    export class HButton extends HTMLButtonElement{
        private _data:PlayerVo;
        private static that;
        private _btnArray = ['取消', '确定'];
        constructor(){
            super();
            HButton.that = this;
            this.setAttribute("class", "mui-btn mui-btn-primary mui-btn-outlined");
            this.setAttribute("type", "button");
        }

        public set data(value){
            this._data = value;
            this.innerHTML = this._data.name;
            this.setAttribute("name", value.name);
        }

        public get data():PlayerVo{
            return this._data;
        }
        private set label(value:string){
            this.innerHTML = value;
            this.data.name = value;
        }
        public initEvents(){
            this.addEventListener("drag", this.onDrag);
            this.addEventListener("click", this.onClick);
        }

        private onDrag(e:MouseEvent):void{
            this.dispose();
        }

        private onClick(e:MouseEvent):void{
            mui.prompt('修改玩家姓名：', name, this.innerHTML, HButton.that._btnArray, function(e) {
                if (e.index == 1) {
                    if(e.value.length === 0){
                        return;
                    }
                    this.label = e.value;
                }
            });
        }

        public dispose():void{
            this.removeEventListener("drag", this.onDrag);
            this.removeEventListener("click", this.onClick);
            this.parentElement.removeChild(this);
        }

    }
}