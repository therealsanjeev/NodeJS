console.log("Hello Node.JS!")

// call back function

const add=(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },2000)
}

add(4,6,(sum)=>{
    console.log(sum);
})