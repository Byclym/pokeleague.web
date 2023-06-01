import PlayerTrainer from './PlayerTrainer';
import CityInterface from './interface/CityInterface';

export class Town implements CityInterface {

    constructor(
        private name: string,
        private gym: PlayerTrainer | null= null,
    ){
    }

    public getName(): string { return this.name }
    public getGymLeader(): PlayerTrainer | null { return this.gym }

}

export class Plateau implements CityInterface {

    constructor(
        private name: string,
        private elite: PlayerTrainer[]= [],
    )
    {
        this.name = name;
        this.elite = [];
    }
    
    public getName(): string { return this.name }
    public getElite(): PlayerTrainer[] { return this.elite }

}