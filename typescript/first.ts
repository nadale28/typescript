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

// 근데 이런건 못막아준다...
arr3.push(1);

const h: 5 = 5;

// 타입추론
// 아래와 같이 타입 추론이 가능한걸 우리가 건드리는건 좋지 않다.
const i = '5'; // '5'로 추론해줌
const j:string = '5'; // 5가 더 정확하다고 볼 수 있다. 이건 괜히 우리가 string으로 이상하게 타입을 정해버린것

// return 타입을 알아서 추론해준다.
function add5 (x: number, y: number) {return x+y}

const obj2: {
    lat: number, lon:number
} = {
    lat: 32, lon: 127
}

function add6 (x:number, y:number): number;
function add6 (x, y) {return x+y;}

let k = 123;
k = 'hello' as unknown as number;

// never
// 빈 배열은 never라는 type으로 되어 'hello' 같은 string 을 넣을 수 없다는데
// 난 잘된다. 버전이 달라서 그런가
const array = [];
array.push('hello');

const head: Element|null = document.querySelector('#head');
if(head) {
    head.innerHTML = 'hello world';

    // 오타도 잘 잡아준다.
    // head.innerHTMLw = 'hello world';
}

// !
// #head는 무조건 있어! null이 올 수가 없어!
// 근데 굳이 절대 없어! 라고 해야할까?
// ! 는 안쓰는게 낫다. 세상에 절대가 어딨어. 사람이 실수할 수도 있지
const head2: Element = document.querySelector('#head')!;

//head3 가 null일수도 있어. 그냥 사용할거야?
const head3 = document.querySelector('#head');
head3.innerHTML = 'hello world';

// custom type, 값 넣을때 자동완성까지 해준다.
type World = "world" | 'hell';
const l: World = 'world';
type Greeting = `hello ${World}`;
const m: Greeting = 'hello hell';

function rest(...args: string[]){}

const enum Edirection {
    Up,
    Down,
    Left,
    Right
}

const n = Edirection.Up;

// as const가 없으면 up, down 같은 속성이 number로 추론되어버림
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
} as const;

// 사용방법
function walk(dir: Edirection) {}

type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

walk(Edirection.Up);

run(ODirection.Down);

// keyof는 머야
// keyof는 key만 뽑아내는거, 그런데 keyof만 쓰면 obj3는 type이 아닌데 keyof써서  오류남. 그래서 keyof typeof
// 여기에다 typeof obj3[] 이거로 감싸주면 value만 뽑아낸다
// as const가 없다면 값들 타입추론이 number로 되어버리니 as const 도 필수
const obj3 = {a: 1, b: 2} as const;
type Key = typeof obj3[keyof typeof obj3];


// union or |
function add7 (x: string | number, y: string | number): string|number {return x+y}
// 이 값의 결과는 3 number 임. 하지만 string|number 를 return 하므로 result도 string|number가 된다.
const result = add7 (1, 2);
// 이 상황에서 이런걸 사용한다면? charAt은 string에 사용되는거니까 에러 발생. 근데 result는 string이 될수도 있잖아?
// 엉망진창이 되어버림
charAt(result)

// intersaction &
type A = {hello: 'world'} & {zero: 'cho'};
const o: A = {hello: 'world', zero: 'cho'};
















