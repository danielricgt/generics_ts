class Movie implements Media{
    constructor(private name:string){

    }

    print():void{
        console.log(`la pelicula es ${this.name}` )
    }
}

class TVShow implements Media{
constructor(private movie:string){

}

print():void{
    console.log(`la serie es ${this.movie}` )
}
}

interface Media{
    print():void;
}

function printMedia<T extends Media>(medias: T[]){
    medias.forEach((media)=>{


        media.print();
    })
}

const movie = new Movie("INTERSTELLAR");
const  show=new TVShow("THE OFFICE");
const media: Media[]= [movie, show];
printMedia(media);


//KeyOf

function findValue< T extends object, U extends keyof T>(object: T, key: U){
    return object[key];
}

const result = findValue({"name": "Daniel", "age":32}, "name") // Daniel
console.log(result)

// built-in typescirtp

class Vehicle {
    branch: string='';
    model: string='';


}

function createVehicle(): Vehicle {
    const vehicle: Partial<Vehicle> = {};
   vehicle.branch= 'ford'

    return vehicle as Vehicle;

}

let cars: Readonly<string[]> = ["ford","mazda"]

