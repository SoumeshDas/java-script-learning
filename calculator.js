let calculator = {
    firstnumber:0,
    secondnumber:1,
    read :(numbetr1,number2) => {
        this.firstnumber=prompt("enter first number");
        this.secondnumber=prompt("enter second number");
    },
    sum :() => {
        return this.firstnumber+this.secondnumber;
    },
    mul :() =>{
        return this.firstnumber*this.secondnumber;
    }
}

function main()
{
    let cal = calculator;
    cal.read();
    alert('calculator of sumation '+cal.sum());
    alert('calculator of multiplication'+cal.mul());
}


main();

