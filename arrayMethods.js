

function arrayMethodTask1(){
let str1=camelsize("background-color");
let str2=camelsize("list-style-image");
let str3=camelsize("-webkit-transition");
alert(str1);
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

arrayMethodTask1();