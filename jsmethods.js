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
        newMap[i] = callbackFn(this[i],i, this);
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
Array.prototype.mySome = function(callbackFn) {
    // loop through the array that is passed in
      for(let i = 0; i<this.length; i++) {
        // if any element from the array satisfies the passed in function, return true
          if(this[i] === callbackFn(this[i],i,this)){
              return true;
          }
      }
      // none of the elements satisfies the function,return false
      return false;
  
  };

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    // loop through the array
    for(let i = 0; i<this.length; i++) {
      // if one of the element does not satisfy the passed in function,
      // return false
        if(!callbackFn(this[i],i,this)){
            return false;
        }
    }
    // all of the elements satisfied the function, return true
    return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn, initialValue) {
    // go through the array 
    for (let i = 0; i < this.length; i++) {
      // if the value is not undefined, accumulate all the elements in the array
      if(initialValue != undefined){
        initialValue = callbackFn(initialValue, this[i], i, this);
      }
      // else
      else{
        initialValue = this[i];
      }
  
    }
    // return 
    return initialValue; 
  };
  

// INCLUDES //
Array.prototype.myIncludes = function(...args) {
    for(let i=0; i<this.length; i++)//going thru all the elements in the array/string 
    {
        if (this[i]===args)
        {
            return true; // all of the elements satisfied the function, return true
        }
    }
    // all of the elements satisfied the function, return false 
    return false; 

};

// INDEXOF //
Array.prototype.myIndexOf = function (args) {//args seemed to work below when it was tested, so left as is 
    for (let i = 0; i < this.length; i++) {//loop through this array 
      if (this[i] === args) {
        return i; //return index 
      }
    }
    return -1;
  };

// PUSH //
Array.prototype.myPush = function(...args) {
  let arg_i = 0; 
  let length = this.length; 
  for (let i = length; i < length + args.length; i++) {//loop through this array 
    this[i] = args[arg_i]; 
    arg_i++; 
  }
  return this.length; 

}; 

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(args) {
  for (let i = this.length - 1; i >= 0; i--) {//loop through this array 
    if (this[i] === args) {
      return i;//return index 
    }
  }
  return -1;//last index 

};

// KEYS //
Object.grabKeys = function(obj) {
  var newArray =[]; 
  for (var key in obj) //loop each key in the obj  
  {
    newArray.push(key); //push keys into the new array 
  }
  return newArray; 
};

// VALUES //
Object.grabValues = function(obj) {
  var newArray = []; 
  for (var key in obj)//loop each key in the obj 
  {
    if(obj.hasOwnProperty(key))//this function returns a boolean of whether it has a key or not. 
    {
      newArray.push(obj[key]); //push keys into the new array
    }
  }
  return newArray; 

};