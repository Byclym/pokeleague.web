import Type from "../PokemonType";

const imm = 0;
const not = 0.5;
const neu = 1;
const vry = 2.0;

const tableEffectiveness = [
    //                 E              F
    //                 L              I                   P
    //  N              E              G    P    G    F    S                   D
    //  O         W    C    G         H    O    R    L    Y              G    R         S    F  <- Defending type
    //  R    F    A    T    R         T    I    O    Y    C         R    H    A    D    T    A
    //  M    I    T    R    A    I    I    S    U    I    H    B    O    O    G    A    E    I   Attack type
    //  A    R    E    I    S    C    N    O    N    N    I    U    C    S    O    R    E    R        |
    //  L    E    R    C    S    E    G    N    D    G    C    G    K    T    N    K    L    Y        v
    [neu, neu, neu, neu, neu, neu, neu, neu, neu, neu, neu, neu, not, imm, neu, neu, not, neu], // NORMAL
    [neu, not, not, neu, vry, vry, neu, neu, neu, neu, neu, vry, not, neu, not, neu, vry, neu], // FIRE
    [neu, vry, not, neu, not, neu, neu, neu, vry, neu, neu, neu, vry, neu, not, neu, neu, neu], // WATER
    [neu, neu, vry, not, not, neu, neu, neu, imm, vry, neu, neu, neu, neu, not, neu, neu, neu], // ELECTRIC
    [neu, not, vry, neu, not, neu, neu, not, vry, not, neu, not, vry, neu, not, neu, not, neu], // GRASS
    [neu, not, not, neu, vry, not, neu, neu, vry, vry, neu, neu, neu, neu, vry, neu, not, neu], // ICE
    [vry, neu, neu, neu, neu, vry, neu, not, neu, not, not, not, vry, imm, neu, vry, vry, not], // FIGHTING
    [neu, neu, neu, neu, vry, neu, neu, not, not, neu, neu, neu, not, not, neu, neu, imm, vry], // POISON
    [neu, vry, neu, vry, not, neu, neu, vry, neu, imm, neu, not, vry, neu, neu, neu, vry, neu], // GROUND
    [neu, neu, neu, not, vry, neu, vry, neu, neu, neu, neu, vry, not, neu, neu, neu, not, neu], // FLYING
    [neu, neu, neu, neu, neu, neu, vry, vry, neu, neu, not, neu, neu, neu, neu, imm, not, neu], // PSYCHIC
    [neu, not, neu, neu, vry, neu, not, not, neu, not, vry, neu, neu, not, neu, vry, not, not], // BUG
    [neu, vry, neu, neu, neu, vry, not, neu, not, vry, neu, vry, neu, neu, neu, neu, not, neu], // ROCK
    [imm, neu, neu, neu, neu, neu, neu, neu, neu, neu, vry, neu, neu, vry, neu, not, neu, neu], // GHOST
    [neu, neu, neu, neu, neu, neu, neu, neu, neu, neu, neu, neu, neu, neu, vry, neu, not, imm], // DRAGON
    [neu, neu, neu, neu, neu, neu, not, neu, neu, neu, vry, neu, neu, vry, neu, not, neu, not], // DARK
    [neu, not, not, not, neu, vry, neu, neu, neu, neu, neu, neu, vry, neu, neu, neu, not, vry], // STEEL
    [neu, not, neu, neu, neu, neu, vry, not, neu, neu, neu, neu, neu, neu, vry, vry, not, neu], // FAIRY
];

export function getTypeEffectiveness(attacking: Type[], defending: Type[]): number {
    if(attacking.length == 1 && defending.length == 1) return tableEffectiveness[attacking][defending];
    if(attacking.length == 1) return tableEffectiveness[attacking][defending[0]] * tableEffectiveness[attacking][defending[1]];
    if(defending.length == 1) return tableEffectiveness[attacking[0]][defending] * tableEffectiveness[attacking[1]][defending];
    const calcAttacking1 = tableEffectiveness[attacking[0]][defending[0]] * tableEffectiveness[attacking[0]][defending[1]];
    const calcAttacking2 = tableEffectiveness[attacking[1]][defending[0]] * tableEffectiveness[attacking[1]][defending[1]];

    return (calcAttacking1/2)+(calcAttacking2/2);
}