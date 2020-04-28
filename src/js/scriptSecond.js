//runs as onclick method for fact button. logs the error if nesessary
async function newFact() {
    try {
        //function uses await to get a response and then continues
        //after that waits that the conversion to json is ready
        const response = await (
            await fetch('https://uselessfacts.jsph.pl/random.json?language=en')).json()
        //gets text element from html
        const faktaTeksti = document.getElementById('faktaTeksti');
        //edits the text element
        faktaTeksti.innerText = response.text;
    } catch (error) {
        console.log(error);
    }
}
//runs as onclick method for joke button. logs the error if nesessary
async function newJoke() {
    try {
        //function uses await to get a response and then continues
        //after that waits that the conversion to json is ready
        const response = await (
            await fetch('http://api.icndb.com/jokes/random')).json();
        //gets text element from html
        const vitsiTeksti = document.getElementById('vitsiTeksti');
        //fixes quote marks in text
        const fixedText = response.value.joke.split('&quot;').join('"');
        //edits the text element
        vitsiTeksti.innerText = fixedText;
    } catch (error) {
        console.log(error);
    }
}
