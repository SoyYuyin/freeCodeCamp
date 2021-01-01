
//Intermediate Algorithm Scripting: Steamroller //
//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arg) {
  let res = []
  function flatten(arg){
    console.log('arg:',arg)
    console.log('typeoff:',typeof(arg))
    if(Array.isArray(arg)){
      for(let i = 0; i<arg.length;i++){
        flatten(arg[i])
      }
    }else{
      res.push(arg)
      console.log('result:',res)
    }
    return res
  }
  return flatten(arg)
}


steamrollArray([1, [2], [3, [[4]]]]);
