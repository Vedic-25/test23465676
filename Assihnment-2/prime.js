function Prime(a,b)
{
    for(let i=a;i<=b;i++)
            {
                if(checkPrime(i))
                {
                    let num=i;
                    let fac=1;
                    for(let j=num;j>1;j--)
                    {
                        fac=fac*j;
                    }
                    console.log(i +" is a prime and  factorial is "+fac+" " );
                }
            }
}
function checkPrime(num)
{
	if(num<2)
    {
	        return false;
	}
	else
    {
	    let x= num/2;
	        for(let i=2;i<x;i++){
	            if(num%i==0){
	                return false;
	            }
	        }
	    }
	    // the number would be prime if we reach here
	    return true;
}
const min=prompt("enter a min value= ");
const max=prompt("enter a max value= ");
Prime(min,max);