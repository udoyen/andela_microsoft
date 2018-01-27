// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// interface LabelMeValue {
//   label: string;
// }

// function printMeLabel(labelMeValue: LabelMeValue) {
//   console.log(labelMeValue.label);
// }

// let theObj = { size: 10, label: "Size of Object" };
// printMeLabel(theObj);

// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): {color: string; area: number} {
//     let newSquare = {color: "white", area: 100};
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({color: "black"});

// interface Point {
//     readonly x: number;
//     readonly y: number;
// }

// let p1: Point = {x: 10, y: 20};

interface ClockInterface {
    currentTime: Date;
    // Method
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}