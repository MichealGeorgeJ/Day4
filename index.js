// 1.Do the below programs in anonymous function & IIFE.
// a.Print odd numbers in an array 
// Anonymous function
const arr1=[4,3,6,20,7,9];
const odd=function(){
    
    for(let i=0;i<arr1.length;i++)
    {
        if (arr1[i]%2!==0)
        {
            console.log(arr1[i]);
        }
    }
}
odd();

// IIFE function()
const odd2=(function(){
    for(let i=0;i<arr1.length;i++)
{
    if (arr1[i]%2!==0)
    {
        console.log(arr1[i]);
    }
}
})();
// --------------------------------
//b.Convert all the strings to title caps in a string array.
function titleCase() {
    let str=("hello world ".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
}
titleCase();
// IIFE
(function titleCase() {
    let str=("hello world ".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
})();
// ---------------------------------
// c.Sum of all numbers in an array
const sum=()=>{
    let result=0;
    for(let i=0;i<arr1.length;i++){
        result+=arr1[i];
    }
    console.log(result);
}
sum();
// IIFE
(()=>{
    let result=0;
    for(let i=0;i<arr1.length;i++){
        result+=arr1[i];
    }
    console.log(result);
})();
// d.Return all the prime numbers in an array.
const array=[2,3,4,5,6,7,7,9];
const isPrime=function(){
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
(()=>{
    for(let i=0; i<array.length; i++)
    {
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
    
}})();
// -----------------------------------
// e.Return all the palindromes in an array.
const arr2=("welcome to mern stack development course thorough malayalam".split(" "));
const isPalindrome=function(){
    let palindrome;
    for(let i=0;i<arr2.length;i++){
        palindrome=arr2[i].split("").reverse().join("");
        if (arr2[i]===palindrome){
            console.log(palindrome);
        }
    }
}
isPalindrome();

// IIFE
(()=>{
    let palindrome;
    for(let i=0;i<arr2.length;i++){
        palindrome=arr2[i].split("").reverse().join("");
        if (arr2[i]===palindrome){
            console.log(palindrome);
        }
    }
})();
// -----------------------------------
// f.Return median of two sorted arrays of the same size.
const isMedian=()=>{
    const ar1=[1,12,15,26,38].sort();
    const ar2=[21,13,17,30,45].sort();
    let median1=0;
    let median2=0;
    let median=0;
    let newArray=[...ar1,...ar2];
    console.log(newArray);
    let len=newArray.length;
    if(len%2==0){
        median1=newArray[(len/2)-1];
        median2=newArray[(len/2)];
        median=(median1+median2)/2;
        console.log(median);
    }else{
        median=newArray[Math.ceil(len/2-1)];
        console.log(median);
    }
}
isMedian();
// IIFE
(()=>{
    const ar1=[1,12,15,26,38].sort();
const ar2=[21,13,17,30].sort();
let median1=0;
let median2=0;
let median=0;
let newArray=[...ar1,...ar2];
console.log(newArray);
let len=newArray.length;
if(len%2==0){
    median1=newArray[(len/2)-1];
    median2=newArray[(len/2)];
    median=(median1+median2)/2;
    console.log(median);
}else{
    median=newArray[Math.ceil(len/2-1)];
    console.log(median);
}
})();
// -------------------------------
// g.Remove duplicates from an array.
const ar3=[1,2,2,4,7,7,2,3,4,7,8];
const removeDublicate=()=> [...new Set(ar3)];
console.log(removeDublicate());

// IIFE
(()=>{
    console.log([...new Set(ar3)]);
}
    
)();
 
// h.Rotate an array by k times

const ar4=[2,3,4,5,6];
const k=3;
const arrayRotation=()=>{
    let temb=0;
    const len=ar4.length;
    for(let i=0;i<k;i++){
        temb=ar4[0];
        for(let j=0;j<len-1;j++){
            
            ar4[j]=ar4[j+1];
            
                
             }
             ar4[len-1]=temb;
             
    }
    console.log(ar4);
}
arrayRotation();
// IIFE
(()=>{
    let temb=0;
    const len=ar4.length;
    for(let i=0;i<k;i++){
        temb=ar4[0];
        for(let j=0;j<len-1;j++){
            
            ar4[j]=ar4[j+1];
            
                
             }
             ar4[len-1]=temb;
             
    }
    console.log(ar4);
})();
