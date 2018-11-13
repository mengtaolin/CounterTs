module com.lin.vo.proxys{
    export class RoundProxy{
        private _roundVo:RoundVo;
        constructor(roundVo:RoundVo){
            this._roundVo = roundVo;
        }

        public calculate(boomNum:number, isLandlordWin:Boolean):void{
            // let playerList = this._roundVo.playerList;
            // let len = playerList.length;
            // for(var i = 0;i < len;i ++){
            //     var player:PlayerVo = playerList[i];
            //     if(this._roundVo.hasRed10){
            //         player.calculateRed10(boomNum, isLandlordWin);
            //     }
            //     else{
            //         player.calculate(boomNum, isLandlordWin);
            //     }
            // }
        }
    }
}