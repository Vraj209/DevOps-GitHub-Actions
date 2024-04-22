function add(a, b){
    return a + b
}


function test(a,b){
    let c = add (a,b)
    if(c== 30){
        return true
    }
    else {
        return false
    }
}

let a= test(10,20)

console.log(`Your addition function is ${a}`)