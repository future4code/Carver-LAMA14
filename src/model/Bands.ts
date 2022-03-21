// CREATE TABLE IF NOT EXISTS lama_registered_bands (
//     id VARCHAR(255) PRIMARY KEY,
//     name VARCHAR(255) UNIQUE NOT NULL,
//     music_genre VARCHAR(255) NOT NULL,
//     responsible VARCHAR(255) UNIQUE NOT NULL 
//   );


export class Band{
    constructor(
    private id: string,
    private name: string,
    private musicGenre: string,
    private responsible: string,
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    getMusicGenre(){
        return this.musicGenre;
    }

    getResponsible(){
        return this.responsible;
    }

    setId(id: string){
        this.id = id;
    }

    setName(name: string){
        this.name = name;
    }

    setEmail(musicGenre: string){
        this.musicGenre = musicGenre;
    }

    setResponsible(responsible: string){
        this.responsible = responsible;
    }

    static toBandModel(user: any): Band {
        return new Band(user.id, user.name, user.musicGenre, user.responsible)
      }

}

export interface BandInputDTO{
    name: string;
    musicGenre: string;
    responsible: string;
}
