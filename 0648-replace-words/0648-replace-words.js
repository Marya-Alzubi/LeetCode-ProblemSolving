/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let trie = new Trie();
    for(dic of dictionary){
        trie.insert(dic)
    }
    //console.log(trie.root);
    sentence=sentence.split(" ");
    let result = [];
    for(word of sentence){
        result.push(trie.search(word))
    }
    return result.join(" ")
};
class Trie{
    constructor(){
        this.root={};
    }
    insert(word){
        let current=this.root;
        for(let char of word){
            if(!current[char])current[char]={}
            current=current[char];
        }
        current.endOfWord=true;
    }
    //here is the idea
    //no need to dfs!!!!!!! it's simpler
    search(word){
        let current= this.root;
        let result="";
        for(let char of word){
            result+=char;
            //word not in dictionary
            if(!current[char]){
                return word;
            }
            //replace all successors words => to root forming
            current=current[char]
            if(current.endOfWord==true){
                return result;
            } 
        }
        //edge case
        return word;
    }
}