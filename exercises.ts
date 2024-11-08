// let a = 20;
// let b = 10;
// let c = 10;

// if (a >= b && b >= c) {console.log(a)}
// else if (b >= a && b >= c) {console.log(b)}
// else {console.log(c)};

let numbers: Array<number> = [-1, -2, 1, -10, -2, -5, 5, -5]

function quickSort(array: Array<number>, begin: number, end:number) {
    let shliapa1 = begin;
    let shliapa2 = end-1;
    let napravlinie: boolean = true;
    for(let i = begin+1; i < end; i++) {
        if(numbers[shliapa1] > numbers[shliapa2] && napravlinie ==true
            || numbers[shliapa1] < numbers[shliapa2] && napravlinie ==false) {
            let f = numbers[shliapa1]
            numbers[shliapa1] = numbers[shliapa2]
            numbers[shliapa2] = f
            napravlinie = !napravlinie
            let fff = shliapa1;
            shliapa1 = shliapa2;
            shliapa2 = fff;
        }

        if(napravlinie == true) {
            shliapa2--;
        }
        else {
            shliapa2++
        }
    
    }
    if(end-begin<=0) {
        return;
    }
    quickSort(numbers, begin, shliapa1-1)
    quickSort(numbers, shliapa1+1, end)
}
quickSort(numbers, 0, numbers.length);


function binsearch(array: Array<number>, result: number) {

    let begin = 0;
    let end = array.length;
    let v = Math.floor((begin+end)/2);
    while (array[v] != result && end - begin != 1) {
        if(array[v] > result) {
            end = v
        }
        else {
            begin = v
        }
        v = Math.floor((begin+end)/2);
    }
    return (array[v] == result);
}
console.log(binsearch(numbers, 0));

// function fibonacci(first: number, second: number, count: number) {
//     if(count ==0){
//         return;
//     }
//     console.log(first)
//     if(count>=2) {
//     fibonacci(second, first+second, count-1)
//     }
// }

// fibonacci(0, 1, 5)


// for (let i = 0; i < numbers.length; i++)
// {
//     for (let j = 1; j < numbers.length - i; j++) {
//         if (numbers[j-1] > numbers[j])
//         {
//             let f = numbers[j-1];
//             numbers[j-1]= numbers[j];
//             numbers[j] = f;
//         }
//     }
   
// }
console.log(numbers);

// function fibonachi(first: number, second: number, count: number)
// {
//     console.log(first);
//     if (count == 1)
//     {
//         return;
//     }
//     fibonachi(second, first + second, count - 1);
// }

// fibonachi(0, 1, 10);




// for (let i = 0; i < numbers.length; i++)
// {
//     if(numbers[i] != numbers[i-1]) 
//     {
//         console.log(numbers[i]);
//     }
// }