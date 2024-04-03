class ArrayOfNumbers{
    constructor(private colection: number[]){

   
        }
        get(index:number):number{

            return this.colection[index]; 


    }
}

class ArrayOfString {
    constructor(private colection: string[]){

    }

    get(index:string):string{
        return this.colection[index]
    }
}

class ArrayOfAny<T> {
    constructor(private colection: T[]){
        
    }

    get(index: number):T {
        return this.colection[index];
    }
}

const col = new ArrayOfAny<string>(['a','b','c'])