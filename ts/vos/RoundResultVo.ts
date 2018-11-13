module com.lin.vo{
    export class RoundResultVo implements IModel{
        public boomNum:number = 0;
        public isLandlordWin:boolean = false;
        public isRed10InLandlord:boolean = false;
        /**
         * 第一个值为地主输赢，第二个为第一个农民输赢，第三个值为第二个农民的输赢，第四个开始是买红桃10的人的结果
         */
        public resultList:Array<ResultVo> = [];
        constructor(){}
        public dispose(){

        }
    }
}