
var arrayErrorMessage = "Argument is not an array";

//************************ PROBLEM 1 ******************************/
function subArray(arr){
    if(Array.isArray(arr)){
        if(arr.length == 0 || arr.length == 1){
            return arr;
        }
        let tmpArr = [];
        let max = Number.NEGATIVE_INFINITY;
        let result = [];
        for(let i = 0; i < arr.length; i++){
            if(max < arr[i]){
                max = arr[i];
                tmpArr.push(arr[i]);
            }else{
                tmpArr = [];
                max = arr[i];
                tmpArr.push(max);
            }

            if(tmpArr.length > result.length){
                result = tmpArr;
            }
        }
        return result;
    }

    return arrayErrorMessage;
}

let sumVar = [3, 2, 5, 9, 1, 3];
console.log("Printing example result of problem 1: " + subArray(sumVar));
console.log("Running unit test of problem 1....");
sumVar = [];
console.assert(subArray(sumVar).length == [].length);
sumVar = [3, 2, 5, 9, 1, 3];
console.assert(JSON.stringify(subArray(sumVar)) == JSON.stringify([2, 5, 9]));
sumVar = "1";
console.assert(subArray(sumVar) == arrayErrorMessage);
console.log("Finished unit test of problem 1");


//************************ PROBLEM 2 ******************************/
function recursiveSum(n, m){
    
    if(n == m){
        return n;
    }
    
  return n + recursiveSum(n + 1, m);
}

function iterativeSum(n, m){

    if(m < 0 || n < 0){
        return "m and n must be a positive numbers";
    }

    if(m < n){
        return "M must be greater or equal than n";
    }

    let sum = 0;
    if(n == m){
        return n + m;
    }
    
    sum = n;
    for(var i = n + 1; i <= m; i++){
        sum += i;
    }

    return sum;
}

console.log("Problem 2 result recursive: " + recursiveSum(1, 10));
console.log("Problem 2 result iterative: " + iterativeSum(1, 10));
console.log("Running test of problem 2 recursive");
console.assert(55 == recursiveSum(1, 10));
console.log("Finished test of problem 2 recursive");
console.log("Running test of problem 2 iterative");
console.assert("m and n must be a positive numbers" == iterativeSum(-1, 0));
console.assert("m and n must be a positive numbers" == iterativeSum(0, -1));
console.assert("M must be greater or equal than n" == iterativeSum(5, 4));
console.assert(55 == iterativeSum(1, 10));
console.assert(55 == recursiveSum(1, 10));
console.log("Finished test of problem 2 iterative");


//************************ PROBLEM 3 ******************************/

var kPositiveError = "K must be a positive number";
var kZeroError = "K must be greater than zero";
function greaterNum(arr, k){

    if(Array.isArray(arr) && !arr.some(isNaN)){
        
        if(k < 0){
            return kPositiveError;
        }

        if(k == 0){
            return kZeroError;
        }

        if(arr.length == 1){
            return arr[0];
        }

        arr.sort();
        let count = 1;
        let duplicated = -1;
        for(let i = 0; i < arr.length; i++){
            if(count == k){
                return arr[i];
            }else{
                if(arr[i] == duplicated){
                    duplicated = arr[i];
                }else{
                    count++;
                }
            }
        }

        //Case when the last number of the array is equals to the number of the position before that number, ej: [......5, 5];
        return arr[i];
    }

    return "Arr must be an array of numbers";
}
var p3 = [4, 8, -1, 4, 3, 7, 8];
console.log("Running problem 3: " + greaterNum(p3, 2));
console.log("Starting tests problem 3...");
p3 = "a";
console.assert("Arr must be an array of numbers" == greaterNum(p3, 1));
p3 = [1]
console.assert(kPositiveError == greaterNum(p3, -1));
console.assert(kZeroError == greaterNum(p3, 0));
p3 = [3, 2, 1, 4, 5, 5];
console.assert(5 == greaterNum(p3, 5));
console.assert(5 == greaterNum(p3, 6));
console.log("Finished tests problem 3...");


//************************ PROBLEM 4 ******************************/
var p4NumericArrayError = "arr must be a numeric array";
function duplicatedItems(arr){

    if(Array.isArray(arr) && !arr.some(isNaN)){
        let result = [...new Set(arr)];
        return result;
    }

    return p4NumericArrayError;
}

var p4 = [1, 1, 2, 3, 4];
console.log("Running problem 4: " + duplicatedItems(p4));
console.log("Running tests problem 4...");
console.assert(JSON.stringify(p4) == JSON.stringify([1, 1, 2, 3, 4]));
p4 = "a";
console.assert(p4NumericArrayError == duplicatedItems(p4));
p4 = ['a', 'b'];
console.assert(p4NumericArrayError == duplicatedItems(p4));
console.log("Finished tests problem 4");

//************************ PROBLEM 5 ******************************/
var p5ErrorMessage = "Argument must be an string";
function balancedArray(str){
    
    if(typeof str == 'string'){

        let strArr = Array.from(str);        
        let stack = [];

        for(let i = 0; i < strArr.length; i++){
            let tmpChar = strArr[i];

            if(tmpChar == ')' || tmpChar == ']'){
                let tmpStack = stack.pop();
                if(tmpStack != '(' && tmpChar == ')'){
                    return false;
                }else if(tmpStack != '[' && tmpChar == ']'){
                    return false;
                }
                
            }else{
                stack.push(strArr[i]);
            }
        }

        return stack.length == 0;
        
    }

    return p5ErrorMessage;
}
var p5 = ("([])");
console.log("Running problem 5: " + balancedArray(p5));
console.log("Starting tests problem 5...");
p5 = 1;
console.assert(p5ErrorMessage == balancedArray(p5));
p5 = "((((([[[[[]]]]])))))";
console.assert(true == balancedArray(p5));
p5 = "()[]()[]()";
console.assert(true == balancedArray(p5));
p5 = "[[[[[((((()))))]]]]]";
console.assert(true == balancedArray(p5));
p5 = "((((())))";
console.assert(false == balancedArray(p5));
p5 = "([)]";
console.assert(false == balancedArray(p5));
console.log("Finished tests problem 5...");
