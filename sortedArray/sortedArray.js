// Para ordenar de forma mais detalhada, aqui utilizei o método bubbleSort onde é seguida a técnica de recursão
// Referência: https://www.section.io/engineering-education/sorting-algorithms-in-js/


function newSortedArray(array){
  //Looping array
  for(let i = 0, j = array.length; i < j; i++){
    //Looping array starting of current position
   	for(let k = 0; k < j - i - 1; k++){
      //Value verification
			if(array[k + 1] < array[k]){
        //Exchange of values with each other
        [array[k + 1],array[k]] = [array[k],array[k + 1]];
      }
    }
  };
  return array;
};

console.log(newSortedArray([ 3, 4, 9, 2, 5, 8, 2]));

// ---------------------------------------------------------------------------

// Uma alternativa que normalmente uso em meus projetos, seria o método
// sort() do JS que ordena os elementos do próprio array e retorna o array.
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const newArray = [ 3, 4, 9, 2, 5, 8, 2];

const sortedArray = newArray.sort((a, b) => a - b);

console.log(sortedArray);



