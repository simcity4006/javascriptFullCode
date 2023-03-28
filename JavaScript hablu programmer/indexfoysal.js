function square(){
    console.log(`square of ${x}:${x*x}`)
}
function higherOrderFunctionFoysla(num, foysalkhan){
    foysalkhan(num)
}
higherOrderFunctionFoysla(6, square)