const gridTraveler = (m, n, memo = {}) => {

    const key = m + ',' + n

    if(key in memo)
        return memo[key]
    if(m === 1 && n === 1)
        return 1
    if(m === 0 || n === 0)
        return 0

    memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo)

    return memo[key]
}

console.log(gridTraveler(1,1))
console.log(gridTraveler(2,3))
console.log(gridTraveler(3,2))
console.log(gridTraveler(3,3))

let startTime = Date.now()
console.log(gridTraveler(18,18))
let endTime = Date.now() 

console.log("Time Taken: ", endTime - startTime)


/* 
* 2333606220
* Time Taken:  1
*/