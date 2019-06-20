class ProblemSolver {
    alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    letterBetween(words){
        let pairs = {
            number:0,
            pairs:[],
        };
        words = (words.toLowerCase()).split('');
        words.forEach((word,index) => {
            const indexInAlphabets = this.alphabets.indexOf(word);
            
            /* 1, 0 */
            words.forEach((word2, index2) => {
                if(index < index2) // 0 < 1
                {
                    /*2, 1*/
                    const indexOfCheckerInAlphabets = this.alphabets.indexOf(word2);
                    
                    const statement = Math.abs((index2 - index)) 
                    == 
                    Math.abs((indexInAlphabets - indexOfCheckerInAlphabets));
                    
                    if(statement)
                    {
                        pairs.number++;
                        pairs.pairs.push(`${word}${word2}`);
                    }
                }
            })
        })
        return pairs;
    }
    async getMeaning(word){
        const url = 
            "https://raw.githubusercontent.com/matthewreagan/WebstersEnglishDictionary/master/dictionary.json";
        let words = [];
        const response = await fetch(url);
        const json = await response.json();
        const data = await json;
        return data[word.toLowerCase()];
    }
}
const solver = new ProblemSolver();
