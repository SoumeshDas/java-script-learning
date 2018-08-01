
let createObject= () =>
{
    return {};
}

let printObject = (obj) =>
{
    //alert(obj.obj);
    alert(obj);
}

let convertToDesiredType = (obj) =>
{
    let number =Number(obj.Obj)
    return number;
}

let modifyObject = () =>
{
    let obj = createObject();
    let anotherObj=createObject();
    anotherObj[obj]=123;
    let num=convertToDesiredType(anotherObj);
    return num;
}

let increamentOfNumber = () =>
{
    let car1=createObject();
    let car2=createObject();
    car1=1234;
    car2=3241;
    let total=car1+car2;
    return total;
}

function testToPrimitive()
{
    let user = {
        name:"Jhon",
        money:1000,
        [Symbol.toPrimitive](hint)
        {
            alert(`hint is ${hint}`);
            return hint=="string"? `name : ${this.name}` : 'money :'+ this.money;
        }
    };

    alert(user);
    alert(+user);
    alert(user++);
}

//excute function
//printObject(increamentOfNumber());

//testToPrimitive();
