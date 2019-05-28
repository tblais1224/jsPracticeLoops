onLoad = () => {
    const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

    // 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
    // Using a for loop:
    let AlphabetFor = document.getElementById("1").innerHTML + " "
    for (let i = 0; i < numbers.length; i++) {
        AlphabetFor += (String.fromCharCode(numbers[i]) + ", ")
    }
    document.getElementById("1").innerHTML = AlphabetFor

    
    // Using the forEach method:
    let AlphabetForEach = document.getElementById("2").innerHTML + " "
    numbers.forEach(number => {
        AlphabetForEach += (String.fromCharCode(number) + ", ")
    });
    document.getElementById("2").innerHTML = AlphabetForEach


    // Using the map method:

    numbers.map(number => {
        document.getElementById("3").innerHTML += (" " + String.fromCharCode(number) + ", ")
    })

    // 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
    // Answer:
    document.getElementById("4").innerHTML += " " + numbers.filter(number => number > 72 && number < 88)
    
    // 3. Display the product of all numbers using reduce
    // Answer:
    document.getElementById("5").innerHTML += " " + numbers.reduce((number, sum) => sum *= number)
}