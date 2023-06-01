import Game from "./Game";
import Pokemon from "./Pokemon";
import { SlotBackpack } from "./SlotBackpack";

export default class Catching {

    constructor(
        private game: Game,
        private target: Pokemon,
        private ball: SlotBackpack,
    ){
    }
    
    public getGame (): Game { return this.game }
    public getTarget (): Pokemon { return this.target }
    public getBall (): SlotBackpack { return this.ball }


    public attempt(): boolean
    {
        this.ball.use();
        const result= this.getResult();
        if(result) this.game.addPokemonToPC(this.target);
        return result;
    }

    private getCatchRating(): number {

        /**
         * catch caculator
         * ---------------------
         * original game :  ( ((3M - 2H) x G x C x B) / 3 ) x L x S x D
         * M Max Hp Pokemon target
         * H Current HP Pokemon target
         * G Grass modifier
         * C Capture Rate Pokemon target
         * B Ball bonus
         * L Low-level modifier
         * S Status Pokemon target
         * D Difficulty modifier (not same Raid/Regular)
         * ---------------------
         */

        var M= 1;
        var H= 1;
        var G= 1;
        var C= this.target.getCatchRate();
        var B= this.ball.getItem().getCatchRate();
        var L= 1;
        var S= 1;
        var D= 1;

        var formula= 3*M-2*H;
        var formula= formula*G*C*B;
        var formula= formula/3;
        var formula= formula*L*S*D;

        return formula
    }

    private getResult(): boolean
    {
        var catchRating= this.getCatchRating();
        if (catchRating > 100) return true;
        return Math.floor(Math.random() * 101) < catchRating? true: false;
    }
}