enum Alphabet {
  A, // By default, A is 0
  B, // Implicitly, B is 1
  C  // And C is 2, but we'll override it to 0
}

// We override the value of C to be 0
Alphabet.C = 0;

console.log(Alphabet.C); // This will log 0
