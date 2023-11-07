// Do the below programs in arrow functions.

// a.Print odd numbers in an array
const arr1=[4,3,6,20,7,9];
const odd=()=>{

    for(let i=0;i<arr1.length;i++)
{
    if (arr1[i]%2!==0)
    {
        console.log(arr1[i]);
    }
}
}
odd();
// b.Convert all the strings to title caps in a string array.
const titleCase=()=> {
    let str=("hello world ".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
};
titleCase();
// c.Sum of all numbers in an array
const sum=()=>{
    let result=0;
    for(let i=0;i<arr1.length;i++){
        result+=arr1[i];
    }
    console.log(result);
}
sum();
// d.Return all the prime numbers in an array.
const array=[2,3,4,5,6,7,7,9];
const isPrime=()=>{
    for(let i=0; i<array.length; i++){
        let Prime = true;
        
        for (let j=2; j<array[i]; j++){
            
            if(array[i]%j==0){
                Prime = false;
                break;
            }
        }
        if(Prime===true){
            console.log(array[i]);
        }
        
}

}
isPrime();
// Return all the palindromes in an array.
const arr2=("welcome to mern stack development course thorough malayalam".split(" "));
const isPalindrome=()=>{
    let palindrome;
    for(let i=0;i<arr2.length;i++){
        palindrome=arr2[i].split("").reverse().join("");
        if (arr2[i]===palindrome){
            console.log(palindrome);
        }
    }
}
isPalindrome();
