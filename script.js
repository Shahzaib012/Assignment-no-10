// Question No1..............

    // console.log("REsult",5>4);
    // console.log("apple">"pineapple");
    // console.log("2">"12");
    // console.log(undefined == null);
    // console.log(undefined === null);
    // console.log(null == "\nO\n");
    // console.log(null === +"\nO\n");
 
//  Question no 2....................
// let a = 1;
// let b = 1;
// let c = ++a;
// let d = b++;
// console.log("c = ",c);
// console.log("d = ",d);

// Question no 3............
// let a = 2;
// let x = 1+(a*=2);
// console.log("x = ", x);
// console.log("a = ", a);

// Question no 4..................
// let a = prompt("First Number");
// let b = prompt("Second Number");
// alert(a+b);
// if we change the data typefrom propmt into number...........

// let c = Number(a);
// let d = Number(b);
// console.log("a + b =  ",c + d);

// Question no 5..............................
// let a = Number(prompt("Number One"));
// let b = Number(prompt ("Number two"));
// let result;
// console.log("A + B = ",a+b);
// if(a+b < 4 ){
//     result = 'Below';

// }else if (a+b ==4 ){
//     result = 'Equal';
// } else{
//     result = 'Over';
// }
// console.log(result);

// Question No 6.................


// let login = prompt();
// let message = (login =='Employ') ? "Hello" :
// (login == "Director") ? "Greetings" : 
// (login == '') ? 'No Login'  : 'PlZ, Enter Your Post';
// console.log(message);

// Question No 7.......................
// let a = prompt("Enter value");

// if (a=='') alert( 'first' )&&alert( 'second' )||alert( 'Undefined' );



// Question no 8................................

alert( null || 2 || undefined );


// Question no 10..........
// alert( 1 && null && 2 );      //Null

// It shows the "Null" Bcz it is the first falsy value 


// Question no 11................

// alert( alert(1) && alert(2) );

// Answer is 1 and undefined ,Bcz first alert is = 1 and then alert() = undefined,so the undefined && alert (3) == undefined , As the whole ans is undefined


// Question no 12.......

// alert( null || 2 && 3 || 4 );

// the Answer is 3   Bcz and operator run first nd return 3 then firstly tuth value is 3 in or operators


    // Question no 13.....

    // First varient with using Not(!) Operator......
    // let a = Number(prompt("Enter Age"));
// if ((a<14&&a>90)){
//     console.log("its 1s not between 14 and 90");
// }else{console.log("it is eligible")};

// Second Varient without NOt (!) Operator...
// let b = Number(prompt("Enter Age"));
// if (!(b<14&&b>90)){
//     console.log("its 1s not between 14 and 90");
// }else{console.log("it is eligible")};


// Question no 14.....................

// if (-1 || 0) alert( 'first' );    //truth statment
// if (-1 && 0) alert( 'second' );    //falsestatment, 
// if (null || -1 && 1) alert( 'third' );    //truth statment Bcz and operatr run and return 1 then or operator run and return 1

// The first and third alert() statements will execute, but the second one will not.


// Question No 15......

// let browser = prompt("Enter Browser Name")
//   if (browser=='Edge'){
//     alert( "You've got the Edge!" );
//   }else if(browser=='Chrome' || browser=='Firefox' || browser=='Safari' || browser=='Opera'){
//     alert( 'Okay we support these browsers too' );
//   }else{ alert( 'We hope that this page looks ok!' );}


// Queation no 16...............

// let a = +prompt('a?', '');

// switch (a) {
//     case 0:
//         alert(0);
//         break;

//         case 1:
//         alert(1);
//         break;
//         case 2:
//         case 3:
//             alert("2,3");
//         break;
//     default:
//         alert('undefined')
//         break;
// }

