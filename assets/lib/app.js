$(document).ready(function () {
  let glimmer = 10;
  glimmerPlus = 1;

  let engramRarity = {
    common: 0,
    uncommon: 0,
    rare: 0,
    legendary: 0,
    exotic: 0,
  };

  let clickAttack = 5;

  function getEnemyHP() {
    const enemyHP = {
      1: ["minor", 25],
      2: ["major", 50],
      3: ["ultra", 100],
      4: ["boss", 200],
    };

    let n = Math.floor(Math.random() * 100);
    if (n < 75) {
      return enemyHP[1];
    } else if (n < 90) {
      return enemyHP[2];
    } else if (n < 98) {
      return enemyHP[3];
    } else {
      return enemyHP[4];
    }
  }

  let r = Math.floor(Math.random() * (11 - 0));
  if (r < 3) {
    document.getElementById("testEnemy").src = "assets/img/Dreg.jpg";
  } else if (r >= 8) {
    document.getElementById("testEnemy").src = "assets/img/Vandal.jpg";
  } else {
    document.getElementById("testEnemy").src = "assets/img/Captain.jpg";
  }

  let enemy = getEnemyHP();
  let enemyHP = enemy[1];

  const enemyHPBar = document.getElementById("enemyHealthBar");

  enemyHPBar.max = enemyHP;
  enemyHPBar.value = enemyHP;

  const enemyHPBarValue = document.getElementById("enemyHealthBarValue");

  enemyHPBarValue.innerHTML = enemyHP;
  enemyHPBarValue.max = enemyHP;

  const output = document.getElementById("output");
  output.innerHTML = "Damage: " + clickAttack;

  $("#testEnemy").click(function () {
    enemyHP -= clickAttack;

    enemyHPBar.innerHTML = enemyHP;
    enemyHPBarValue.innerHTML = enemyHP;

    document.getElementById("enemyHealthBar").value = enemyHP;

    const engrams = Math.floor(Math.random() * 100);

    if (enemyHP < 0) enemyHP = 0;

    if (enemyHP === 0) {
      glimmer += glimmerPlus * Math.floor(Math.random() * 50) + 25;

      if (engrams >= 1 && engrams <= 50) {
        engramRarity.common++;
      } else if (engrams >= 51 && engrams <= 75) {
        engramRarity.uncommon++;
      } else if (engrams >= 76 && engrams <= 89) {
        engramRarity.rare++;
      } else if (engrams >= 90 && engrams <= 98) {
        engramRarity.legendary++;
      } else if (engrams >= 99) {
        engramRarity.exotic++;
      }
    }

    document.getElementById("output").innerHTML = "Damage: " + clickAttack;

    if (enemyHP === 0) {
      $(".info").text(
        "You have defeated the enemy.\nYou search for a new foe..."
      );

      enemy = getEnemyHP();
      enemyHP = enemy[1];

      $("#testEnemy").attr("disabled", true);
      const timeUntilNewEnemyAppears = Math.floor(Math.random() * 500) + 1000;
      setTimeout(() => {
        $("#testEnemy").removeAttr("disabled");
        $(".info").text("A new Enemy appears. \nFight them");
        enemyHPBar.max = enemyHP;
        enemyHPBar.value = enemyHP;
        enemyHPBarValue.innerHTML = enemyHP;
        enemyHPBarValue.max = enemyHP;

        let r = Math.floor(Math.random() * (11 - 0));
  if (r < 3) {
    document.getElementById("testEnemy").src = "assets/img/Dreg.jpg";
  } else if (r >= 8) {
    document.getElementById("testEnemy").src = "assets/img/Vandal.jpg";
  } else {
    document.getElementById("testEnemy").src = "assets/img/Captain.jpg";
  }
      }, timeUntilNewEnemyAppears);
    }

    changeInventory();
  });

  // Inventory Changes

  function changeInventory() {
    $("#glimmer").html("Glimmer: " + glimmer);

    if (engramRarity.common > 0) {
      $("#commonEngram").html(
        "You have " + engramRarity.common + " Common Engrams"
      );
    } else {
      $("#commonEngram").html("");
    }

    if (engramRarity.uncommon > 0) {
      $("#uncommonEngram").html(
        "You have " + engramRarity.uncommon + " Uncommon Engrams"
      );
    } else {
      $("#uncommonEngram").html("");
    }

    if (engramRarity.rare > 0) {
      $("#rareEngram").html("You have " + engramRarity.rare + " Rare Engrams");
    } else {
      $("#rareEngram").html("");
    }

    if (engramRarity.legendary > 0) {
      $("#legendaryEngram").html(
        "You have " + engramRarity.legendary + " Legendary Engrams"
      );
    } else {
      $("#legendaryEngram").html("");
    }

    if (engramRarity.exotic > 0) {
      $("#exoticEngram").html(
        "You have " + engramRarity.exotic + " Exotic Engrams"
      );
    } else {
      $("#exoticEngram").html("");
    }
  }

  //          <----- Rahool ----- Start ----->

  function decryptEngram() {
    //Show Engram Decryption

    if (glimmer >= 10 && engramRarity.common >= 1) {
      $("#whiteEngram").css("display", "block");
    } else {
      $("#whiteEngram").css("display", "none");
    }

    if (glimmer >= 20 && engramRarity.uncommon >= 1) {
      $("#greenEngram").css("display", "block");
    } else {
      $("#greenEngram").css("display", "none");
    }

    if (glimmer >= 30 && engramRarity.rare >= 1) {
      $("#blueEngram").css("display", "block");
    } else {
      $("#blueEngram").css("display", "none");
    }

    if (glimmer >= 40 && engramRarity.legendary >= 1) {
      $("#purpleEngram").css("display", "block");
    } else {
      $("#purpleEngram").css("display", "none");
    }

    if (glimmer >= 50 && engramRarity.exotic >= 1) {
      $("#orangeEngram").css("display", "block");
    } else {
      $("#orangeEngram").css("display", "none");
    }

    document.querySelectorAll(".engNum").forEach((element) => {
      let id = element.dataset.id;
      console.log("HERE", id);
      let value = engramRarity[id];
      if (value > 0) {
        element.innerText = value;
      } else {
        element.innerText = "";
      }
    });
  }

  // Rahool Engram Decryption

  $("#whiteEngram").click(function () {
    glimmer -= 10;
    engramRarity.common -= 1;
    changeInventory();
    decryptEngram();
  });

  $("#greenEngram").click(function () {
    glimmer -= 20;
    engramRarity.uncommon -= 1;
    changeInventory();
    decryptEngram();
  });

  $("#blueEngram").click(function () {
    glimmer -= 30;
    engramRarity.rare -= 1;
    changeInventory();
    decryptEngram();
  });

  $("#purpleEngram").click(function () {
    glimmer -= 40;
    engramRarity.legendary -= 1;
    changeInventory();
    decryptEngram();
  });

  $("#orangeEngram").click(function () {
    glimmer -= 50;
    engramRarity.exotic -= 1;
    changeInventory();
    decryptEngram();
  });

  //          <----- Rahool ----- End ----->

  //          <----- Menu Travel ----->

  $("#director").click(function () {
    //Director
    menu = switchMenu("director");
  });

  $("#tower").click(function () {
    //Go to Tower
    menu = switchMenu("tower");
    decryptEngram();
  });

  $("#vault").click(function () {
    //Visit your Vault
    menu = switchMenu("vault");
  });

  $(".orbit").click(function () {
    //Go back to Orbit
    menu = switchMenu("main");
  });

  function switchMenu(menu) {
    $(".menus").children().css("display", "none");
    $("." + menu).css("display", "block");
    return menu;
  }
});
