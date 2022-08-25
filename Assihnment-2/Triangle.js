
function Triangle()
{
    let a=prompt("enter first side of triangle= ");
    let b=prompt("enter second side of triangle= ");
    let c=prompt("enter third side of triangle= ");
    if(a==b&&b==c&&c==a)
    {
        console.log("equlateral triangle");
    }
    else if(a==b||b==c)
    {
        console.log("isoceles triangle");
    }
    else if(a!=b&&a!=c&&b!=c)
    {
        console.log("Scalene triangle");
    }
    
}
Triangle();