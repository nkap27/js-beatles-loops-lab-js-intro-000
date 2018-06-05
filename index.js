function theBeatlesPlay(musicians, instruments){
  var array = [];
  // musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  // instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts){
  var facts2 = []

  while(facts.length > 0) {
    facts2.push(facts[0] + "!!!");
    facts.shift();
  }
  return facts2;
}

function iLoveTheBeatles(n){
  var stringArr = [];
  do {
    stringArr.push("I love the Beatles!");
    n++;
  } while (n < 15)

  return stringArr;

}
