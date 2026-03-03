// function to return the documents in a list, separating the words
function SplitWords(docs){
  
    //vector with separate words
    let word_docs = [];
    
    //remove punctuations and stores only words in vector in the word list
    for( let i= 0; i<docs.length; i++ ){
      let sentence_clean = docs[i].replace(/[.,!?]/g,"");
      word_docs.push(sentence_clean.split(" "));
    }
    
    return word_docs;
}


//build the matrix for boolean comparizon
function makeMatriz(splitWords){
  
  //different words
  let differentWords = [];
  
  //add the words to the unique words list
  for (let i = 0; i< splitWords.length;i++){
    for(let j = 0; j< splitWords[i].length;j++){
      if(!differentWords.includes(splitWords[i][j])){
        differentWords.push(splitWords[i][j]);
      }
    }
  }
  
  let numberOfDifferentWords = differentWords.length;
  
  let string = `Documents count: ${splitWords.length} \nDifferent Words: ${numberOfDifferentWords}\n\nMatrix with ${numberOfDifferentWords} rows and ${splitWords.length} columns:\n`;
  
  console.log(string);
  
  let matrix = Array.from({length: numberOfDifferentWords}, () => Array(splitWords.length).fill(0));
  
  //show matrix
  for(let i = 0; i< numberOfDifferentWords; i++){
    let line = `| ${matrix[i].join("  ")} |`;
    console.log(line);
  }
  
}

let docs = ["Ola","tudo", " teste teste teste"];

//test to spplit words of the docs
let vectorDocsWords = SplitWords(docs);

makeMatriz(vectorDocsWords);
