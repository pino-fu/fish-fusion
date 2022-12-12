const { mongerInventory } = require("./fishMonger.js")

const invMong = mongerInventory(5) 

//console.log(invMong)




const fishMenu = () => {
    for (const feesh of invMong) {
        console.log(`<h1>Menu</h1>
        <article class="menu">
            <h2>${feesh.species}</h2>
            <section class="menu__item">${feesh.species} Soup</section>
            <section class="menu__item">${feesh.species} Sandwich</section>
            <section class="menu__item">Grilled ${feesh.species}</section>
        </article>`)
    }
}
    

//console.log(fishMenu(invMong))


module.exports = { fishMenu }