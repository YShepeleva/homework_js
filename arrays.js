// __________максимальное и минимальное__________

const numbers = [100, 200, 500, 1, -60, 38, 3434]

let maxNum = numbers[0]
let minNum = numbers[0]

for(let i = 0; i<numbers.length; i++) {
    if(numbers[i]>maxNum){
        maxNum = numbers[i]
    } else if(numbers[i]<minNum){
        minNum = numbers[i]
    }
}
console.log(`${'Минимальное число'}${':'} ${minNum}`)
console.log(`${'Максимальное число'}${':'} ${maxNum}`)

// __________среднее арифметическое__________

// const numbers = [100, 200, 500, 1, -60, 38, 3434]

// let summNumbers = 0
// let averageNum = 0

// for(let i = 0; i<numbers.length; i++) {
//     summNumbers = summNumbers + numbers[i]
//     averageNum = summNumbers/numbers.length
// }

// console.log(`${'Сумма всех чисел'}${':'} ${summNumbers}`)
// console.log(`${'Среднее арифметическое'}${':'} ${averageNum}`)

// __________сортировка по возрастанию__________

// const numbers = [100, 200, 500, 1, -60, 38, 3434]
// let maxNum = numbers[0]
// let minNum = numbers[0]

// function compareNumbers(maxNum, minNum) {
//     if (maxNum > minNum) return 1
//     if (maxNum == minNum) return 0
//     if (maxNum < minNum) return -1
// }
// numbers.sort(compareNumbers);
// console.log(`${'Сортировка по возрастанию'}${':'} ${numbers}`)

// __________сортировка по убыванию_____________

// const numbers = [100, 200, 500, 1, -60, 38, 3434]
// let maxNum = numbers[0]
// let minNum = numbers[0]

// function compareNumbers(maxNum, minNum) {
//     if (minNum > maxNum) return 1
//     if (minNum == maxNum) return 0
//     if (minNum < maxNum) return -1
// }
// numbers.sort(compareNumbers);
// console.log(`${'Сортировка по убыванию'}${':'} ${numbers}`)

// __________удаление любого числа по индексу___________

// const numbers = [100, 200, 500, 1, -60, 38, 3434]
// numbers.splice (-1,1,'элемент удален')

// console.log(numbers)