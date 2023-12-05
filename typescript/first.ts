let a: string = 'hello';
a = 1234;

const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f:symbol = Symbol.for('abc');
const g: any = true; // 암거나 됨. 근데 typescript 쓰는 의미가 없어짐

function add(x: number, y: number):number {return x+y}

const add2: (x: number, y: number) => number = (x, y) => x+y;

type Add = (x:number, y:number) => number;
const add3: Add = (x,y) => x+y;

interface Add2 {
    (x: number, y: number): number;
}
const add4: Add2 = (x,y) => x+y;

const obj: {lat: number, lon: number} = {lat: 37.5, lon: 127.5};

const arr: string[] = ['123', '456'];

const arr2: Array<number> = [123, 456];

// tuple 길이 고정
const arr3: [number, number, string] = [123, 456, 'hi'];

const h: 5 = 5;

