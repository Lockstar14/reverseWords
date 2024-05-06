function reverseWords(str) {
let words = str.split(" ")
let arr = []

for (word of words){
    word = [...word].reverse().join("")
    arr.push([word])
    
}

return arr.join(" ")
  }

  console.log(reverseWords("sihT si na !elpmaxe"))

//   let строка = "Это строка с несколькими словами";
// let слова = строка.split(" "); // разделить строку на слова по пробелам
// let массив_слов = [];

// for (let слово of слова) {
//     массив_слов.push([слово]); // добавить каждое слово в отдельный массив в массиве
// }

// console.log(массив_слов);