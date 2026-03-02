function SplitWords(docs){
    let word_docs = [];

    for(let i= 0;i<docs.length;i++){
     let sentence_clean = docs[i].replace(/[.,!?]/g,"");
      word_docs.push(sentence_clean.split(" "));
    }

    console.log(word_docs);
}

let docs = ["Ola tudo bem!","tudo"];

SplitWords(docs);

