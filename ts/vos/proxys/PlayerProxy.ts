module com.lin.vo.proxys{
    import RoleEnums = com.lin.Enums.RoleEnums;
    import RoundEnums = com.lin.Enums.RoundEnums;

    export class PlayerProxy{
        private _playerVo:PlayerVo;
        constructor(playerVo:PlayerVo){
            this._playerVo = playerVo;
            this.initPlayer();
        }

        private initPlayer():void{
            this._playerVo.startTime = new Date().getTime();
            this._playerVo.id = this._playerVo.startTime.toString();
        }

        public calculate(boomNum:number, isLandlordWin:Boolean):void{
            // if(this._playerVo.role === RoleEnums.LANDLORD){//是地主
            //     if(isLandlordWin){
            //         this._playerVo.result += (RoundEnums.BASIC_NUM << boomNum + 1);
            //     }
            //     else{
            //         this._playerVo.result -= (RoundEnums.BASIC_NUM << boomNum + 1);
            //     }
            // }
            // else{
            //     if(isLandlordWin){
            //         this._playerVo.result -= (RoundEnums.BASIC_NUM << boomNum);
            //     }
            //     else{
            //         this._playerVo.result += (RoundEnums.BASIC_NUM << boomNum);
            //     }
            // }
        }

        public calculateRed10(boomNum:number, isLandlordWin:Boolean):void{
            // if(this._playerVo.role === RoleEnums.LANDLORD){
            //     if(isLandlordWin){
            //         if(this._playerVo.hasRed10){
            //             this._playerVo.result += (RoundEnums.BASIC_NUM << boomNum + 1);
            //         }
            //         else{
            //             this._playerVo.result += (RoundEnums.BASIC_NUM << boomNum + 1) + (RoundEnums.BASIC_NUM << boomNum);
            //         }
            //     }
            //     else{
            //         if(this._playerVo.hasRed10){
            //             this._playerVo.result -= (RoundEnums.BASIC_NUM << boomNum + 1);
            //         }
            //         else{
            //             this._playerVo.result -= (RoundEnums.BASIC_NUM << boomNum + 1) + (RoundEnums.BASIC_NUM << boomNum);
            //         }
            //     }
            // }
            // else if(this._playerVo.role === RoleEnums.FARMER){
            //     if(isLandlordWin){
            //         if(this._playerVo.isRed10Win){

            //         }
            //     }
            // }
        }
    }
}