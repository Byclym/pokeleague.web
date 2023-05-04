import BotTrainer from "@/modules/BotTrainer";
import PlayerTrainer from "@/modules/PlayerTrainer";
import Pokemon from "@/modules/Pokemon";

export default class Battle {

    action: string;
    player: PlayerTrainer;
    opponent: BotTrainer;
    teamPlayer: Pokemon[];
    teamBot: Pokemon[];
    selectedPokemonPlayer: Pokemon | null = null;
    selectedPokemonOpponent: Pokemon | null = null;
    historical: string[];

    constructor(player: PlayerTrainer, opponent: BotTrainer)
    {
        /**
         * fight : la classe doit réaliser le combat
         * waiting : en attente d'un clic de l'utilisateur
         * selecting : en attente que l'utilisateur réalise un choix
         * continue : en attente d'un clic pour le tour suivant
         */
        this.action = '';
        this.player = player;
        this.teamPlayer = player.pokemons;
        this.opponent = opponent;
        this.teamBot = opponent.pokemons;
        this.historical = [];
    }

    public debut(): void
    {
        this.historical.push('Lancement du combat');
        this.botSelectPokemon();
        this.action = 'selecting';
        this.historical.push('Sélectionnez un Pokémon');
    }

    public nextAction(): void
    {
        switch(this.action) { 
            case 'fight': { 
                this.getResultOpposition();
                this.action = 'continue';
                this.ifEnd();
                break; 
            }
            case 'continue': {
                if(this.selectedPokemonOpponent == null) {
                    this.botSelectPokemon();
                    this.action = 'waiting';
                }
                if(this.selectedPokemonPlayer == null) {
                    this.action = 'selecting';
                    this.historical.push('Sélectionnez un Pokémon');
                }
            }
         } 
    }

    public playerSelectPokemon(pokemon: Pokemon): void
    {
        this.selectedPokemonPlayer = pokemon;
        this.historical.push(this.player.name + ' lance ' + this.selectedPokemonPlayer.getName());
        this.removePokemonFromPlayerTeam(pokemon);
        this.action = 'waiting';
    }

    public botSelectPokemon(): void
    {
        var oPokemon = null;
        if(this.selectedPokemonPlayer == null) {
            oPokemon = this.randomPokemonFromBotTeam();
        } else {
            var oPokemon = null;
            this.teamBot.forEach((tmpPokemon) => {
                var iBestForce = null;
                var tmpForce = tmpPokemon.getScoreAgainstPokemon(this.selectedPokemonPlayer)
                if(iBestForce == null || tmpForce > iBestForce) {
                    iBestForce = tmpForce;
                    oPokemon = tmpPokemon;
                }
            });
        }
        this.selectedPokemonOpponent = oPokemon;
        this.historical.push(this.opponent.name + ' lance ' + this.selectedPokemonOpponent.getName());
        if(oPokemon) (this.removePokemonFromBotTeam(oPokemon));
    }

    public removePokemonFromPlayerTeam(element: Pokemon): void
    {
        const index = this.teamPlayer.indexOf(element);
        if (index !== -1) {
            this.teamPlayer.splice(index, 1);
        }
    }

    public randomPokemonFromBotTeam(): Pokemon
    {
        const iRandom = Math.floor(Math.random() * this.teamBot.length);
        return this.teamBot[iRandom];
    }

    public removePokemonFromBotTeam(element: Pokemon): void
    {
        const i = this.teamBot.indexOf(element);
        if (i !== -1) {
            this.teamBot.splice(i, 1);
        }
    }

    public getResultOpposition(): void
    {
        if(this.selectedPokemonPlayer == null) throw new Error('Class Fight - Method getResultOpposition - Player don\'t have selected Pokemon');
        if(this.selectedPokemonOpponent == null) throw new Error('Class Fight - Method getResultOpposition - Opponent don\'t have selected Pokemon');
        var iScorePokemonPlayer = this.selectedPokemonPlayer.getScoreAgainstPokemon(this.selectedPokemonOpponent)
        var iScorePokemonOpponent = this.selectedPokemonOpponent.getScoreAgainstPokemon(this.selectedPokemonPlayer)

        if (iScorePokemonPlayer > iScorePokemonOpponent) {
            this.historical.push(this.selectedPokemonOpponent.getName() + ' est tombé au combat');
            this.selectedPokemonOpponent = null;
        } else if (iScorePokemonPlayer < iScorePokemonOpponent) {
            this.historical.push(this.selectedPokemonPlayer.getName() + ' est tombé au combat');
            this.selectedPokemonPlayer = null;
        } else if (iScorePokemonPlayer == iScorePokemonOpponent) {
            this.historical.push('Les 2 Pokémon sont tombés au combat');
            this.selectedPokemonOpponent = null;
            this.selectedPokemonPlayer = null;
        } else {
            throw new Error('Class Fight - Method getResultOpposition - Critical Error');
        }
    }

    private ifEnd(): void
    {
        if(this.teamPlayer.length == 0 && this.selectedPokemonPlayer == null)  {
            this.historical.push('Vous avez perdu');
            this.action = 'finished'
        } else if (this.teamBot.length == 0 && this.selectedPokemonOpponent == null) {
            this.historical.push('Vous avez gagné');
            this.action = 'finished'
        }
    }
}