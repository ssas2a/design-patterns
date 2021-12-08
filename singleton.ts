class Singleton {
    private static instance: Singleton;
    private static MyAddr: Number = 0;

    private Singleton(): Singleton{
        Singleton.instance = this;
        return Singleton.instance;
    }
    public static getInstance(ParamNewAddr: Number): Singleton {
        if (Singleton.instance === undefined){
            Singleton.instance = new Singleton();
            Singleton.MyAddr = ParamNewAddr;
            console.log('Criando instância com parametro: ' + String(ParamNewAddr));
        }else {
            console.log('Instância já existente');
        }
        return Singleton.instance;
    }
    public SomeBusinessRule(): String {
        return 'SomeBusinessRule, MyAddr: ' + String(Singleton.MyAddr);
    }

    public OtherBusinessRule(): String {
        return 'OtherBusinessRule, MyAddr: ' + String(Singleton.MyAddr);
    }
}

class MonoState {
    private static instance: Singleton | undefined;

    constructor(NewAddr: Number) {
        MonoState.instance = Singleton.getInstance(NewAddr);
    }
    public Method001(): String {
        if (MonoState.instance === undefined){
            return '';
        }else {
            return MonoState.instance.SomeBusinessRule();
        }
    }
    public Method002(): String {
        if (MonoState.instance === undefined){
            return '';
        }else {
            return MonoState.instance.OtherBusinessRule();
        }
    }
}

let myNotSingleton1: MonoState = new MonoState(111);
let myNotSingleton2: MonoState = new MonoState(222);

let mySingleton1: Singleton = Singleton.getInstance(333);
let mySingleton2: Singleton = Singleton.getInstance(444);

console.log(myNotSingleton2.Method002());
console.log(mySingleton1.OtherBusinessRule());

console.log(mySingleton1 === mySingleton2);
console.log(myNotSingleton1 === myNotSingleton2);

