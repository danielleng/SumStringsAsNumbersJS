function sumStringsAsNumbers(a, b) {
    let output = []
    
    let numbersA = a.split("")
    let numbersB = b.split("")
    
    let lengthOfA = numbersA.length
    let lengthOfB = numbersB.length
    
    // Keep track of which digit we're currently processing for both numbers.
    let aIndex = lengthOfA - 1
    let bIndex = lengthOfB - 1
    
    // Keep track of whether we should carry over an addition's tenths.
    let carryOver = false
    
    while (aIndex >= 0 || bIndex >= 0) {
        // Start the additions from the end of the array, e.g. 
        //      12345678
        //          5678
        // Do 8+8 first, then 7+7, 6+6... etc.
        
        let added = (numbersA[aIndex] ? Number(numbersA[aIndex]) : 0) + (numbersB[bIndex] ? Number(numbersB[bIndex]) : 0)
        if (carryOver)
            added+=1
        carryOver = (added >= 10)
        
        // If we're already at the last number, just add it directly to array without modulo-ing.
        if (aIndex <= 0 && bIndex <= 0) {
            if (added != 0)
                output.push(added)
        } else {
            // We're not yet at the last number, add the modulo to get the first digit, e.g. 13 should return 3, then carry over the 1.
            output.push(added % 10)
        }
        
        aIndex--
        bIndex--
    }
    return output.reverse().join("")
}

module.exports = sumStringsAsNumbers