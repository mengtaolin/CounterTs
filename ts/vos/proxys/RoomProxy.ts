module com.lin.vo.proxys{
    export class RoomProxy{
        private _room:RoomVo;
        constructor(room:RoomVo){
            this._room = room;
        }
        public createResultVo():RoundResultVo{
            var vo:RoundResultVo = new RoundResultVo();
            return vo;
        }
    }
}