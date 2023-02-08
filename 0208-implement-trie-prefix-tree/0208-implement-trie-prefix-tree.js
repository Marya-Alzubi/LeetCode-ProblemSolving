/**
search:                 insert:    "a p p l e"    

"amx"         "apple"                  root
                                       | \
a   ->        a   ->                   a  m
                                       |\  \
m   ->        p   ->                   p m  a
                                       |  \  \
x   ->        p   ->                   p   m  n
                                       |    \  \
              l   ->                   l     a  a
                                       |      \  \
              e   ->                   e       r  l

false         true

 */
 
//create a Node
class Node {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

// create the root
var Trie = function() {
    this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
 //the idea here => how to traverse the next child? => by creating a pointer outside the loop then change its value based on child value
Trie.prototype.insert = function(word) {
    let current= this.root;
    for(let i=0;i<word.length;i++){
        if(!current.children[word[i]]){
            //create new node!!!
            current.children[word[i]]= new Node();
        }
        // traverse to the next child EVERYTIME!!!!
        current=current.children[word[i]];
    }
    //trick=> flag for the last char of the word
    current.endOfWord=true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current= this.root;
    for(let char of word){
        //if I can not complete the search 
        if(!current.children[char])return false;
        //traverse to the next node
        current=current.children[char]
    }
    //apple & app => it will return false because app is part of apple
    return current.endOfWord;
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current= this.root;
    for(let char of prefix){
        if(!current.children[char])return false;
        current=current.children[char]
    }
    // never mind the if it is part of a word or not!
    return true;
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */