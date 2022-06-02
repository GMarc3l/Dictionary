let dictionary = [];

function addWord() {
    dictionary.push(document.getElementById("word").value);
    document.getElementById("word").value = '';
    setTimeout(() => {
        const resultText = document.getElementById('result');
        resultText.innerHTML = '';
    }, 2000);
    return document.getElementById("result").innerHTML = "Cuvantul a fost adaugat!";
}


function wordSearching() {
    var searchedWord = document.getElementById("search").value;
    document.getElementById("search").value='';
    setTimeout(() => {
        const resultText = document.getElementById('result');
        resultText.innerHTML = '';
    }, 2000);
    if (dictionary.indexOf(searchedWord) >= 0) {
        return document.getElementById("result").innerHTML = "Cuvantul este in dictionar!";
    }
    return document.getElementById("result").innerHTML = "Cuvantul nu este in dictionar!";
}
