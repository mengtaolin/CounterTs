module com.lin.vo{
    import Proxy=com.lin.vo.proxys.RoomProxy;
    /**
     * 房间信息
     */
    export class RoomVo implements IModel{
        /**
         * 4炸封顶
         */
        public static BOOM_MAX:number = 4;
        /**
         * 开始时间
         */
        public startTime:number;
        /**
         * 结束时间
         */
        public endTime:number;
        /**
         * 基本倍数
         */
        public basic:number = 5;
        /**
         * 是否有红桃十
         */
        public hasRed10:boolean = false;
        /**
         * 玩家信息列表
         */
        public playerList:Array<PlayerVo>;
        /**
         * 每局信息
         */
        public roundList:Array<RoundVo>;
        private _roomProxy = new Proxy(this);
        constructor(){
            this.playerList = [];
            this.roundList = [];
        }

        public addPlayer(playerName:string):void{
            var playerVo:PlayerVo = new PlayerVo(playerName);
            this.playerList.push(playerVo);
        }

        public get playerNum():number{
            return this.playerList.length;
        }

        public get roundNum():number{
            return this.roundList.length;
        }

        public addRound(resultVo:RoundResultVo):void{
            var roundVo:RoundVo = new RoundVo(resultVo);
            this.roundList.push(roundVo);
        }
        
        public createResultVo():RoundResultVo{
            return this._roomProxy.createResultVo();
        }

        public dispose():void{
            var len:number = this.playerList.length;
            while(len > 0){
                var playerVo:PlayerVo = this.playerList.pop();
                playerVo.dispose();
                len --;
            }
            len = this.roundList.length;
            while(len > 0){
                var roundVo:RoundVo = this.roundList.pop();
                roundVo.dispose();
                len --;
            }
            this.playerList = null;
            this.roundList = null;
        }
    }
}