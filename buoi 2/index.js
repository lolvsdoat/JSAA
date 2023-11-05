// var x = 1
// while (x < 5) {
//     console.log(x)
//     x++
// }
var fruits = [
    {
        type: 'Grapes',
        amount: 15
    },
    {
        type: 'Mangos',
        amount: 15
    },
    {
        type: 'Apples',
        amount: 15
    }
]
for (var input = 0; input < 3; input++) {
    var typeoffruit = fruits[input].type
    var amountoffruit = fruits[input].amount
    console.log('I have' + amountoffruit + typeoffruit)
}