//arrayMethodTask2();
//sortToReverse([5,2,1,-10,8]);
//copySorted(["HTML","CSS","JAVASCRIPT"]);
mapNames();

function arrayMethodTask1(){
let str1=camelsize("background-color");
let str2=camelsize("list-style-image");
let str3=camelsize("-webkit-transition");
alert(str1);
}


function arrayMethodTask2(){
let arr=[5,4,6,8,9];
//let arr1= filteRange(arr,4,8);
let arr2=filterRangeAnother(arr,4,8);
}

function filteRange(arr,limlow,limhigh){
    let arr1=arr.map((item)=>
    {
        let arrnew=[];
        if(item>=limlow && item<=limhigh)
        {
            arrnew.push(item);
        }
        return arrnew;
    });
    return arr1;
}


function filterRangeAnother(arr,limlow,limhigh){
    return arr.filter(item => (item>=limlow && item <=limhigh));
}

function camelsize(expression){

/*let arr=expression.split("-");
let delimtercount=arr.length;
for (let i=1;i<delimtercount;i++){
    arr[i].charAt(0).toUpperCase();
}

return arr.join("");*/

let arr1=expression.split("-");
let str=arr1.reduce((prevresult,item)=>prevresult+(item.charAt(0).toUpperCase()+item.substring(1)));
return str;
}


function sortToReverse(arr){
    let revarr = arr.reverse().sort().reverse();
    alert(revarr);
}

function copySorted(arr){
    let tempArr= arr.slice();
    alert(tempArr.sort());
}


function mapNames(){
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary
}

//arrayMethodTask1();