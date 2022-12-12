const { boatInventory } = require("./fishingBoat.js")

const invBoat = boatInventory()



const mongerInventory = (chefBudget) => {
    const inv = []
    for (const feesh of invBoat) {
        if (feesh.price <= 7.5 && feesh.amount > 10 && feesh.price < chefBudget) {
            feesh.amount = 10
            inv.push(feesh)
        }    }
        return inv
    }
    
    
    
 module.exports = { mongerInventory }
    
