let sum = 0;

const number = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;
    let ans=1;
    for(let i=remainder;i>1;i--)
    {
        ans=i*ans;
    }
    sum=sum+ans;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an special factorial number`);
}
else {
    console.log(`${number} is not an special factorial number.`);
}