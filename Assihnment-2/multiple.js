var sum=0;
for(let i=0;i<1000;i++)
{
    if(i%3==0 && i%5==0)
    {
        sum=sum+i;
        console.log(`${i} is multiple of 3 and 5`);
    }
    console.log(sum);
}
document.write(sum);