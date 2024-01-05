import assert from 'assert';
import calc from '../../app/calc.js';
const calcullette = new calc();

describe('Mes tests mathématique', () => {
  it(`Test de ma fonction addition`, (done) => {    
    assert.equal(calcullette.addition(1,2), 3);
    done();
  });

  it(`Test de ma fonction addition avec 3 valeurs`, (done) => {    
    assert.equal(calcullette.addition(1,2,3), 6);
    done();
  });

  it(`Test de ma fonction addition avec 5 valeurs`, (done) => {    
    assert.equal(calcullette.addition(1,2,3,4,5), 15);
    done();
  });

  it(`Test de ma fonction soustraction`, (done) => {    
    assert.equal(calcullette.soustraction(20, 5), 15);
    done();
  });

  it(`Test de ma fonction soustraction`, (done) => {    
    assert.equal(calcullette.soustraction(20, 5, 5), 10);
    done();
  });

  it(`Test de ma fonction soustraction`, (done) => {    
    assert.equal(calcullette.soustraction(20, 5, 3, 2, 1), 9);
    done();
  });

  it(`Test de ma fonction multiplication`, (done) => {    
    assert.equal(calcullette.multiplication(2, 5), 10);
    done();
  });

  it(`Test de ma fonction multiplication`, (done) => {    
    assert.equal(calcullette.multiplication(2, 5, 3), 30);
    done();
  });

  it(`Test de ma fonction multiplication`, (done) => {    
    assert.equal(calcullette.multiplication(2, 5, 3, 3), 90);
    done();
  });


  it(`Test de ma fonction division`, (done) => {    
    assert.equal(calcullette.division(180, 2), 90);
    done();
  });

  it(`Test de ma fonction division`, (done) => {    
    assert.equal(calcullette.division(180, 2, 3), 30);
    done();
  });

  it(`Test de ma fonction division`, (done) => {    
    assert.equal(calcullette.division(180, 2, 3, 6), 5);
    done();
  });

  it(`Test de ma fonction division par 0 arg 2`, (done) => {    
    assert.throws(() => calcullette.division(180, 0), Error);
    done();
  });

  it(`Test de ma fonction division par 0 arg 4`, (done) => {    
    assert.throws(() => calcullette.division(180,3, 2, 0), Error);
    done();
  });

});