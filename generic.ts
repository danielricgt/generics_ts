/*class ArrayOfNumbers{
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

*/

class ArrayOfAny<T> {
    constructor(private colection: T[]){
        
    }

    get(index: number):T {
        return this.colection[index];
    }
}

//const col = new ArrayOfAny<number>([1,2,3,4])

//funcones

/*

function printString(arr: string[]):void{

for (const element of arr) {
    console.log(arr[1]);
    
    
}

}



function printNumber(arr: number[]):void{
for (const element of arr) {
    console.log(arr[1]);
    
}

}

printString(["ola", "como", "va"])
printNumber([5,6,7,8])

*/

function printAny<T>(arr:T[]):void{

    for (const element of arr) {
        console.log(arr[1])
    }
}

printAny<string>(["1","4"]);

printAny<number>([1,12]);