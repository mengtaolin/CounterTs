module com.lin.vo{
    export class VoManager{
        private index:number = 0;
        constructor(){};
        public addPlayer(playerName:string):Array<IModel>{
            this.index ++;
            var player:PlayerVo = new PlayerVo(playerName);
            player.index = this.index;
            var btn:HButton = new HButton();
            btn.data = player;
            return [player, btn];
        }
    }
}