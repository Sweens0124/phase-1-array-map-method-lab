const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//1) how to get first letter of each word in each element of array: split()
//2) split will return a new array with each word seperated from orinal elmnt
//3) how to capitalize each letter of each word in new arrays: charAt(index)and toUpperCase? .charAt(0).toUpperCase()??


// const newTutorials = tutorials.map(function (word) {
//   return word.split(' ')
// })
// console.log(newTutorials);
// const capitalWords = newTutorials.map(word => word.charAt(0).toUpperCase() + word.slice(1)
// )
// console.log(capitalWords);
//how do we JOIN all the string elements into one string: join()/??? 
//join with (' ') ??




const titleCased = () => {
  return tutorials.map(tutorial => {
    const newTutorials = tutorial.split(' ')
    const capitalWords = newTutorials.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return capitalWords.join(' ')
  })

}

console.log(titleCased())