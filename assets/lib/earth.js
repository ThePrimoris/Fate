// Array Example

  function createLevelArray(dreg, vandal, captain) {
    let enemyArray = []
    for (let i = 0; i < dreg; i++) {
      enemyArray.push(new Enemy(10))
    }
    for (let i = 0; i < vandal; i++) {
      enemyArray.push(new Enemy(15))
    }
    for (let i = 0; i < captain; i++) {
      enemyArray.push(new Enemy(20))
    }
    return enemyArray
  }