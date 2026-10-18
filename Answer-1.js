function describeValue(value){
    return `${typeof value} | ${value ? "truthy" : "falsy"}`;
}

console.log(describeValue("Hello"))
console.log(describeValue(""))
console.log(describeValue(25))
console.log(describeValue(0))
console.log(describeValue(true))
console.log(describeValue(null))
console.log(describeValue(undefined))

