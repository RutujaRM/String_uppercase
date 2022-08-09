/*
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox

*/

const str=prompt("Enter String");

function string_uppercase(str)
{
    let arr =str.split(' ');   //first array
    let arr2 = [];             //second array to store uppercase letter string

    for(let i=0 ; i<arr.length ; i++)
    {
        arr2.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    return arr2.join(' ');
}
console.log(string_uppercase(str));

