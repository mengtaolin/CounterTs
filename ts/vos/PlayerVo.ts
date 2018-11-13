module com.lin.vo{
    import Proxy = com.lin.vo.proxys.PlayerProxy;
    import RoleEnums = com.lin.Enums.RoleEnums;

    export class PlayerVo implements IModel{
        public id:string;
        /**
         * 该房间第几个进来的人
         */
        public index:number = 0;
        /**
         * 玩家姓名
         */
        public name:string;
        /**
         * 开始参与进来的是哪一局
         */
        public startRoundId:number;
        /**
         * 哪一局退出
         */
        public endRoundId:number;
        /**
         * 开始时间
         */
        public startTime:number;
        public roundList:Array<RoundVo> = [];
        private _proxy:Proxy;

        constructor(username:string){
            this.name = username;
            this._proxy = new Proxy(this);
        }

        public calculate(boomNum:number, isLandlordWin:Boolean):void{
            this._proxy.calculate(boomNum, isLandlordWin);
        }
        
        public calculateRed10(boomNum:number, isLandlordWin:Boolean):void{
            this._proxy.calculateRed10(boomNum, isLandlordWin);
        }

        public clone():PlayerVo
        {
            var player = new PlayerVo(this.name);
            player.startRoundId = this.startRoundId;
            player.startTime = this.startTime;
            let len:number = this.roundList.length;
            for(let i:number = 0;i < len;i ++){
                var roundVo:RoundVo = this.roundList[i].clone();
                player.roundList.push(roundVo);
            }
            return player;
        }

        public dispose():void{
            this._proxy = null;
        }
    }
}