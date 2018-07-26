//main();
//testEmpty();
testConstFunc();


function main(){
	let fisrtnumber=prompt("first number");
	let secondnumber=prompt("second number");
	
	if(Number(fisrtnumber) === NaN || Number(secondnumber) === NaN)
		{
			alert("i am here");
			return;
		}
	let mininum =getMinimum(fisrtnumber,secondnumber);
	
	alert(mininum);
}

function getMinimum(firstnum,secondnum)
{
	let minnum;
	minnum=firstnum>secondnum?secondnum:firstnum;
	return minnum;
}


function power(firstnum,secondnum)
{
	let powervalue;
	
	for(let i=1;i<secondnum;i++)
	{
		powervalue=(i==1)? firstnum*firstnum : firstnum*powervalue;
	}
	return powervalue;
}


// function excerise for function

let createObject=() => {
	let obj={};
	return obj;
};

//add property
let addPropToObj= (prop,obj,value) => {
	
	obj[prop]=value;
}


//update property
let updateObj=(prop,obj,value) => {
	if( prop in obj)
	{
		obj[prop]=value;
	}
}

//delte property from the object
let deltePropObj=(prop,obj) => delete obj[prop];

//cal the test object function
function testObject()
{
	let obj1=createObject();
	addPropToObj("name",obj1,"jhon");
	addPropToObj("surname",obj1,"smith");
	updateObj("name",obj1,"pete");
	deltePropObj("name",obj1);
	
}

function isEmpty(obj)
{
	let _count=0;
	for(key in obj)
	{
		_count++;
		if(_count>0)
		{
			break;
		}
	}
	
	return _count===0?true:false;
}

function testEmpty()
{
	let schedule={};
	alert(isEmpty(schedule));
	schedule["8.30"]="get up";
	alert(isEmpty(schedule));
}

function testConstFunc()
{
	const user={
		name:"kushan"
	};
	
	user.name="pete";
	
	user.surname="das";
}



