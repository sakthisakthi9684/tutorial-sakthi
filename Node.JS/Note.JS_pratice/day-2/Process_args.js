//
console.log(process.argv[0]);//node file  path print pannum
console.log(process.argv[1]);//program path print pannum
console.log(process.argv[2]);//2->3,4,5,.....    ine  vara yaillam commant promptla  run panum pothu  ( node filename argv[2] argv[3] argv[4] ....) pass pandra agument print pannum

let arg=process.argv[2] || "World";

console.log(`\nHello ${arg} \n`)
 
function capital(arg){
    let arg1=arg.split("")
    
    arg1[0]=arg1[0].toUpperCase()
    console.log(arg1[0])
    let arg2=arg1.join("");
    return arg2
}

arg=capital(arg)


console.log(`\nHello ${arg} \n`)

