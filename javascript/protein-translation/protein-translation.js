//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (RNA) => {
  let c = []
  let p = []
  if (RNA !== undefined){
    for (let i = 0; i < RNA.length; i = i + 3){
      c.push(RNA.slice(i, i+3))
    }
  } else return p

  for (let i of c){
    if (i === 'AUG'){
      p.push['Methionine']
    } else if ((i === 'UUU') || (i === 'UUC')){
      p.push['Phenylalanine']
    } else if ((i === 'UUA') || (i === 'UUG')){
      p.push['Leucine']
    } else if ((i === 'UCU') || (i === 'UCC') || (i === 'UCA') || (i === 'UCG')){
      p.push['Serine']
    } else if ((i === 'UAU') ||(i === 'UAC') ){
      p.push['Tyrosine']
    } else if ((i === 'UGU') || (i === 'UGC')){
      p.push['Cysteine']
    } else if (i === 'UGG'){
      p.push['Tryptophan']
    } else if ((i === 'UAA') || (i === 'UAG') || (i === 'UGA')){
      break
    }
  }
  return p
};
