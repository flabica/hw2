// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    let newMap = [] //new array to store
  
    for(let i = 0; i<this.length; i++){
        newMap[i] = callbackFn(this[i]);
    }
    // return the new mapped array
    return newMap;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    let filteredArray = [] //new array to store
    // loop through the array given
    for(let i = 0; i< this.length; i++){
        // if the element matches with the function parameter,
        // push the element into the new array
        if(callbackFn(this[i],i,this)){
            filteredArray.push(this[i]);
        }
    }
    // return the new filtered Array
    return filteredArray;
  };

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
    Array.prototype.myPush = function(...args) {
        let arg_i = 0; 
        let length = this.length; 
        for (let i = length; i < length + args.length; i++) {
            this[i] = args[arg_i]; 
            arg_i++; 
        }
        return this.length; 

}

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};