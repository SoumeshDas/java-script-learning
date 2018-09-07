let user ={
    name:"pete"
};

let descriptor=Object.getOwnPropertyDescriptor(user,"name");

alert (JSON.stringify(descriptor));


Object.defineProperty(user,"name",{
    writable:false
});

descriptor=Object.getOwnPropertyDescriptor(user,"name");

alert(JSON.stringify(descriptor));
console.log(descriptor);

//writable code end here


let user1={
    name: "jhon",
    toString(){
        return this.name;
    }

};


for(let key in user1){
    alert (key);
}

Object.defineProperty(user1,"toString",{enumerable:false});

for(let key in user1){
    alert (key);
}

//enumerable end here

//non configurable means not able delete the property.



