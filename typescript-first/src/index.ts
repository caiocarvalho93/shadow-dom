type heroi = {
    name: string;
    vulgo: string;
};

function exibeObjetos(pessoa: heroi) {
    console.log(pessoa);
}

exibeObjetos({
    name: "bruce wayne",
    vulgo: "batman",
});
console.log("ola mundo");

//tipos primitivos:boolean, number, string
let ligado: boolean = false;
let nome:string = "caio";
let idade: number = 30;
let altura: number = 1.90;

//tipos especiais
//null
//undefined
let nulo: null = null;
let indefinido : undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
    name: "caio",
    cidade: "sp",
    idade: 30,
};

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number,
};

let meuProduto:ProdutoLoja = {
    nome: "tenis",
    preco: 89.99,
    unidades: 5,
};

let dados: string[] = ["caio", "ana", "adriana"];
let dados2: Array<string> = ["caio", "ana", "adriana"];

let infos: (string | number)[] = ["caio", 30];

//Tuplas 
let boleto: [string, number, number] = ["agua conta", 199.9, 324243]; 

//arrays metodos 
dados.pop();

let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());

function addNumbers(x: number, y: number): number // retorno number 
{
    return x + y
}
let soma: number = addNumbers(4,7);
console.log(soma); //to go to terminal after adding

//other example
function addtoHello(name: string) {
    return `Hello ${name}`;
}
console.log(addtoHello("Caio"));

function callToPhone(phone: number | string):any { //return any or number | string
    return phone;
}
console.log(callToPhone(11999999999)); // can use number or

async function getDatabase(id : number): Promise<string> {
    return "caio";
}

//examples of type and interface exolanation lesson typescri[t ]
type robot = {
    id : number;
    name: string;
};

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

// readOnly nao tem como assign value no console print.
const bot1: robot = {
    id: 1,
    name: "megaman",
};

const bot2: robot2 = {
    id: "1",
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(bot1);
console.log(bot2);

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string) {
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        console.log("hello");
        return "hello";
    }
}

const p = new Pessoa(1, "gutsman")
console.log(p.sayHello); 


//Classes
class Character {
    public name?: string
    strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log('Attack with ${this.strenght} points');
    }
}

const p1 = new Character("Hero", 10, 98);
console.log(p1.attack());

//pt2
const p2Character = new Character("Ryu", 10, 98);
if (p2Character.name) {
    console.log(p2Character.name + "attacks!");
} else {
    console.log("Character name is undefined, cannot attack.");
}

//pt3
//Magician is our subclass
//Character super scoobie-do-PAPAI classe pai
class Magician extends Character {
    magicPoints: number;
    constructor(
        name: string, 
        strength: number, 
        skill: number, 
        magicPoints: number) {
            super(name, strength, skill);
            this.magicPoints = magicPoints;
        }
    }
    
    const p2Magician = new Magician("Magician", 10, 98, 100);

// GENERICS
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
    
}
const numArray = concatArray<number[]>([1,5], [3]);
const stgArray = concatArray<string[]>(["caio", "ana"], ["adriana"]);

console.log(numArray);
console.log(stgArray);

//using terminal and swapping typescript in ts 
//npm install ts-node-dev -D    codigo no terminal pra criar server local &
//npm run start:dev
// before add nex start dev inpackage,json
let dado: string = "caio";
console.log(dado);

//DECORATORS
function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class Funcionario {}

@ExibirNome
class Quincas {}

// DECORATORS pt 2
function apiVersion(version: string) {
    return(target: any) => {
        Object.assign(target.prototype, {__version: version});
    };
}

function minLength(length: number) {
    return(target: any, key: string) => {
        let _value = target[key];

        const getter = () => -_value; //returning value
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error('Tamanho menor do que ${length}');
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            // enumerable: true,
            // configurable: true
        });

    };
}

// @apiVersion("1.10")
// class Api {
//     @minLength(10)
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

// }

// const api = new Api("usuarios");
// console.log(api.name);






