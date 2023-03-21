/**
 * @param {number} n
 * @return {string[]}
 */
 /**
                                        []
                        /                             \
                      ["("]                           [")"]
                        |                                \
                      ["(("]                             ["()"]
                    /       \                               |   lc==rc
               ["((("]      ["(()"]                       ["()("]  
                 | lc==n   /       \                   /           \
            ["((()"]   ["(()("]   ["(())"]       ["()(("]         ["()()"]
                |          |lc==n     |lc==n          |lc==n          |  lc==nc
           ["((())"]   ["(()()"]  ["(())("]      ["()(()"]        ["()()("] 
                |          |          |              |                |
           ["((()))"]  ["(()())"] ["(())()"]     ["()(())"]       ["()()()"]
  */
var generateParenthesis = function(n) {
    let result =[];
    let lc=0;
    let rc=0;

    backTracking("",n,result,lc,rc);

    return result;
};

const backTracking = (string,n,result,lc,rc) =>{
    //base case
    if(lc==n && rc==n){
        result.push(string);
        // string="";
        // lc=0;
        // rc=0;
        return;
    }
    if(lc<n){
        lc++;
        backTracking(string+="(",n,result,lc,rc);
        //cleanup function
        string=string.substring(0,string.length-1);
        lc--;
    }
    if(rc<lc){
        rc++;
        backTracking(string+=")",n,result,lc,rc);
        //cleanup function
        string=string.substring(0,string.length-1);
        rc--;
    }
}