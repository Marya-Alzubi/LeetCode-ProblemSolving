/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {

    products.sort();
    //console.log("products",products)
    let trie = new Trie();
    //trie.insert(searchWord)

    for(let word of products)trie.insert(word)

    //trie.print()
    let result =[];
    let prefix="";
    //trie.search("m")
    for(let i=0;i<searchWord.length; i++){
        let char=searchWord[i]
        prefix +=char
        result.push(trie.search(prefix))
    }
    return result
};

class Trie {
    constructor() {
        this.root = {};
        //this.endOfWord = false;
    }
    print() {
        for (const key in this.root) {
        console.log(key,JSON.stringify(this.root[key]))
        //console.log(count++, key, this.root[key]);
        }
    }
    insert(word){
        let current = this.root;
        for(let i=0;i<word.length;i++){
            if(!current[word[i]])current[word[i]]={}
            current=current[word[i]];
        }
        current.endOfWord=true;
    }
    startsWith(prefix){
        let result =[]
        let current = this.root;
        for(let char of prefix){
            if(!current[char])return false
            current=current[char];
            result.push(current)
        }
        return result;
    }
    search(word){
        let current = this.root;
        let result=[];
        for(let char of word){
            if(!current[char])return result;
            current=current[char]
        }
        const recursive =(current,word)=>{
            if (result.length===3)return;
            if(current.endOfWord)result.push(word)
            //console.log("current",current)
            for(let node in current){
                //console.log("node",node)
                //console.log("current[node]",current[node])
                recursive(current[node], word+node);
            }
            
            //else return result;
        }
        recursive(current,word);
        //console.log(result)
        return result;
    }

}