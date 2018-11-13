module com.lin.vo{
    export class ResultVo implements IModel{
        /**
         * 当局ID
         */
        public roundId:number;
        /**
         * 玩家ID
         */
        public playerId:string;
        /**
         * 玩家姓名
         */
        public playerName:string;
        /**
         * 该局是否赢了
         */
        public isWin:Boolean;
        /**
         * 玩家该局结果
         */
        public result:number;
        constructor(){}
        public dispose(){

        }
    }
}