/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

 /**                 
                           TRIE
                             m
                             |
                             o
                           / | \
                         u   b   n - i - t - o - r *
                        /    |    \
                       s     i     e
                      /      |      \
                    e *     e *      y 
                    /                 \
                   p                   p
                  /                     \
                 a                       o
                /                         \
               d *                         t *
////////////////////////////////////////////////////////////////////
"m" && "mo":
                             m
                             |
                             o
                           / | \
                         u   b   n - i - t - o - r *
                        /    |    \
                       s     i     e
                      /      |      \
                    e *     e *      y 
                    /                 \
                   p                   p
                  /                     \
                 a                       o
                /                         \
               d *                        t *
                                       
"mou" & "mous" & "mouse":   
                             m
                             |
                             o
                           / 
                         u   
                        /    
                       s    
                      /     
                    e *     
                    /                 
                   p                   
                  /                     
                 a                       
                /                         
               d * 
////////////////////////////////////////////////////////////////////          
  */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    let trie = new Trie();
    for(let product of products){
        trie.insert(product)
    }

    let result =[];
    let searchingFor=""
    for(let char of searchWord){
        searchingFor+=char;
        result.push(trie.search(searchingFor))
    }
    return result;

};
class Trie{
    constructor(){
        this.root={}
    }
    insert(word){
        let current=this.root;
        for(let char of word){
            if(!current[char])current[char]={}
            current=current[char];
        }
        current.endOfWord=true;
    }
    search(searchingFor){
        let suggestions = [];
        let current=this.root;

        //loop through every char until I reached the last char => edge: if one of the char is missing so I have to stop the searching
        for(let char of searchingFor){
            if(!current[char]) return suggestions;
            current=current[char]
        }

        const dfs =(current,searchingFor)=>{
            //base case
            if(suggestions.length ==3) return;
            //pre-order traversing
            if(current.endOfWord==true){
                suggestions.push(searchingFor)
            }
            for(let char in current){
                //TRICK => how to build up the words 
                dfs(current[char],searchingFor+char);
            }
        }

        dfs(current,searchingFor)
        return suggestions;
    }
}