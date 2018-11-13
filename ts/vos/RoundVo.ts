module com.lin.vo{
    /**
     * 斗地主每局数据VO
     */
    export class RoundVo implements IModel{
        public id:number;
        /**
         * 本盘开始时间
         */
        public startTime:number;
        /**
         * 本盘结束时间
         */
        public endTime:number;
        /**
         * 地主玩家VO
         */
        public role:PlayerVo;
        /**
         * 第一个叫地主的人
         */
        public firstCall:PlayerVo;
        /**
         * 玩家信息列表（输赢信息）
         */
        public resultVo:RoundResultVo;

        constructor(resultVo:RoundResultVo){
            this.resultVo = resultVo;
        };

        public clone():RoundVo{
            var vo:RoundVo = new RoundVo(this.resultVo);
            return vo;
        }

        public dispose():void{
            this.resultVo.dispose();
            this.resultVo = null;
        }
        
    }
}