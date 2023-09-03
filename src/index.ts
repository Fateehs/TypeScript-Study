let myName: string | number = "asasdasd";

function change() {
    myName = "weqe";
    myName = 25;
}

function check() {
    if (typeof myName === "string") {
        myName.replace;
    }
    if (typeof myName === "number") {
        myName.toPrecision;
    }
}

let b: any = 25;

function checkTo() {
    if (b instanceof HTMLInputElement) {
    }
}

const Person: {
    isim: string;
    yas: number;
    boy: number; // bir objenin property tiplerini eşleme yapabilimekteyim
} = {
    isim: "Fatih",
    yas: 22,
    boy: 1.89 as 2.2 as 155 | 500,
};

const dizi: (number | boolean | string)[] = [];
// generic tip oluştruma
const dizi1 = [] as Array<string>;
// tuples
const myDizi: [string, string, number] = ["Ali", "Ahmet", 20];
