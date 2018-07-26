describe("power",function (){
	
	describe("power is muliplining the number with itself till nth time",function(){
		
		function makeTest(x)
		{
			let expected=x*x*x;
			it(`${x} power of 3 will give you  ${expected}`, function (){
				assert.equal(power(x,3),expected);
			});
		}
		
		for(let i=0;i<=5;i++)
		{
			makeTest(i);
		}
		
	});
	
	
});

describe("Test object example " ,function(){
	
	describe("Object solution 1",function(){
		
		it("create object",function(){
			assert.equal(testObject(),undefined);
		});
	});
});