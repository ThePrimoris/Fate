$(document).ready(function() {

function getEnemyHP() {

let enemyHP = {
    minor: 25, major: 50, ultra: 100, boss: 200
 }
    
let n = Math.floor(Math.random() * (100 - 0))
    if (n < 75) {
        enemyHP = 25
    } else if (n < 90) {
        enemyHP = 50
    } else if (n < 98) {
        enemyHP = 100
    }  else {
        enemyHP = 200
    }
        return enemyHP
    }

let enemyHP = getEnemyHP()

let glimmer = 0
glimmerPlus = 1

let clickAttack = 5

let engramRarity = {
    common: 0, uncommon: 0, rare: 0, legendary: 0, exotic: 0
}

$("#testEnemy").click(function() {

    enemyHP -= clickAttack

    document.getElementById("enemyHealthBarValue").innerHTML = enemyHP

    document.getElementById("enemyHealthBar").value = enemyHP

    const engrams = Math.floor(Math.random() * 100)
    
    if (enemyHP < 0) enemyHP = 0


    if (enemyHP === 0) {
        glimmer += glimmerPlus * Math.floor(Math.random() * 50) + 25

        if (engrams > 1 && engrams < 50) {
            engramRarity.common ++
        } else if (engrams >= 51 && engrams < 75) {
            engramRarity.uncommon ++
        } else if (engrams >= 76 && engrams < 89) {
            engramRarity.rare ++
        } else if (engrams >= 90 && engrams < 98) {
            engramRarity.legendary ++
        } else if (engrams >= 99) {
            engramRarity.exotic ++
        }
    }
    
    document.getElementById("output").innerHTML = "Damage: " + clickAttack
    
    
    if (enemyHP === 0) {
        $(".info").text("You have defeated the enemy.\nYou search for a new foe...")
        
        enemyHP = getEnemyHP()
        document.getElementById("enemyHealthBar").max = enemyHP
        
        $("#testEnemy").attr('disabled', true)
        const timeUntilNewEnemyAppears = Math.floor(Math.random() * 10) + 1000
        setTimeout(() => {
        $("#testEnemy").removeAttr("disabled")
        $(".info").text("Continue clicking.")
        }, timeUntilNewEnemyAppears)
        }

    changeInventory()
})

document.getElementById("enemyHealthBar").max = enemyHP

// Inventory Changes

function changeInventory() {
    $("#glimmer").html("Glimmer: " + glimmer)

    if (engramRarity.common > 0) {
        $("#commonEngram").html("You have " + engramRarity.common + " Common Engrams")
    } else {
        $("#commonEngram").html("")
    }

    if (engramRarity.uncommon > 0) {
        $("#uncommonEngram").html("You have " + engramRarity.uncommon + " Uncommon Engrams")
    } else {
        $("#uncommonEngram").html("")
    }

    if (engramRarity.rare > 0) {
        $("#rareEngram").html("You have " + engramRarity.rare + " Rare Engrams")
    } else {
        $("#rareEngram").html("")
    }

    if (engramRarity.legendary > 0) {
        $("#legendaryEngram").html("You have " + engramRarity.legendary + " Legendary Engrams")
    } else {
        $("#legendaryEngram").html("")
    }

    if (engramRarity.exotic > 0) {
        $("#exoticEngram").html("You have " + engramRarity.exotic + " Exotic Engrams")
    } else {
        $("#exoticEngram").html("")
    }
}

//          <----- Rahool ----- Start ----->

function decryptEngram() { //Show Engram Decryption

    if (glimmer >= 10 && engramRarity.common >= 1) { 
        $("#whiteEngram").css("display", "block")
    } else {
        $("#whiteEngram").css("display", "none")
    }

    if (glimmer >= 20 && engramRarity.uncommon >= 1) {
        $("#greenEngram").css("display", "block")
    } else {
        $("#greenEngram").css("display", "none")
    }

    if (glimmer >= 30 && engramRarity.rare >= 1) {
        $("#blueEngram").css("display", "block")
    } else {
        $("#blueEngram").css("display", "none")
    }

    if (glimmer >= 40 && engramRarity.legendary >= 1) {
        $("#purpleEngram").css("display", "block")
    } else {
        $("#purpleEngram").css("display", "none")
    }

    if (glimmer >= 50 && engramRarity.exotic >= 1) {
        $("#orangeEngram").css("display", "block")
    } else {
        $("#orangeEngram").css("display", "none")
    }
}

// Rahool Engram Decryption

$("#whiteEngram").click(function() {
    glimmer -= 10
    engramRarity.common -= 1
    changeInventory()
    decryptEngram()
})

$("#greenEngram").click(function() {
    glimmer -= 20
    engramRarity.uncommon -= 1
    changeInventory()
    decryptEngram()
})

$("#blueEngram").click(function() {
    glimmer -= 30
    engramRarity.rare -= 1
    changeInventory()
    decryptEngram()
})

$("#purpleEngram").click(function() {
    glimmer -= 40
    engramRarity.legendary -= 1
    changeInventory()
    decryptEngram()
})

$("#orangeEngram").click(function() {
    glimmer -= 50
    engramRarity.exotic -= 1
    changeInventory()
    decryptEngram()
})

//          <----- Rahool ----- End ----->

//          <----- Menu Travel ----->

$("#director").click(function() { //Director
    menu = switchMenu("director")
})

$("#tower").click(function() { //Go to Tower
    menu = switchMenu("tower")
    decryptEngram()
})

$("#vault").click(function() { //Visit your Vault
    menu = switchMenu("vault")
})

$(".orbit").click(function() { //Go back to Orbit
    menu = switchMenu("main")
})

function switchMenu(menu) {
    $(".menus").children().css("display", "none")
    $("." + menu).css("display", "block")
    return menu
}

})