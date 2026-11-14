// let arr=[22,3,1,55,78,7,4,3,54]

// let i=0;
// let j=arr.length-1

// while(i<=j){
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp

//     i++
//     j--
// }

// console.log(arr);


//Array is Sorted Or note

let arr=[22,3,1,55,78,7,4,3,54]

for(let i=0;i<arr.length;i++){
    if(arr[i+1]<arr[i]){
        console.log("Array is Sorted");
        
    }
}

