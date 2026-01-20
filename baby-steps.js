

let sum =0
let argLength=process.argv.length;

for(let i=2;i < argLength;i++){

    sum=sum + Number(process.argv[i]);
}
console.log(sum);