
let createObject= () =>
{
    return {};
}

let printObject = (obj) =>
{
    alert(obj.obj);
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



//excute function
printObject(modifyObject());