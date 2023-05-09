import PlayerTrainer from './PlayerTrainer';
import CityInterface from './interface/CityInterface';

export class Town implements CityInterface {
    name: string;
    gym?: PlayerTrainer;
    
    constructor(name: string)
    {
        this.name = name;
    }

}

export class Plateau implements CityInterface {
    name: string;
    elite?: PlayerTrainer[];
    
    constructor(name: string)
    {
        this.name = name;
        this.elite = [];
    }

}