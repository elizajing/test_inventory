const inventory = require('./inventory.json')
const products = require('./products.json')

const showAvailableProducts = () => {
  let allProductsChecked = false
  let warehouseInventory = JSON.parse(JSON.stringify(inventory))

  let amount = {}
  // Initiate result dict
  products.products.forEach((product) => {
    const name = product.name
    amount[name] = 0
  })
  // Check all products
  while (!allProductsChecked) {
    products.products.forEach((product) => {
      product.contain_articles.forEach((art) => {
        const id = art['art_id']
        const amount = Number(art['amount_of'])
        // check for availability in inventory
        warehouseInventory.inventory.map((item) => {
          const invAmount = Number(item['stock'])
          const art_id = item['art_id']
          if (art_id === id) {
            if (invAmount >= amount) {
              if(invAmount - amount >= 0){
                item['stock'] = invAmount - amount
              }
            } else {
              allProductsChecked = true
            }
          }
        })
      })
      amount[product.name] += 1
    })
  }
  console.log('Available products: ')
  console.log(amount)
}

const updateInventory = (productName, number) => {
  let localInventory = JSON.parse(JSON.stringify(inventory))

  products.products.forEach((product) => {
    if(product.name === productName){
      product.contain_articles.forEach((art) => {
        const id = art['art_id']
        const amount = Number(art['amount_of'])
        // check for availability in inventory
        localInventory.inventory.map((item) => {
          const invAmount = Number(item['stock'])
          const art_id = item['art_id']
          if (art_id === id) {
            if (invAmount >= amount) {
              if(invAmount - amount >= 0){
                item['stock'] = invAmount - number * amount
              }
            }
          }
        })
      })
    }
  })
  console.log('Remaining inventory:')
  console.log(localInventory)
}

showAvailableProducts()
updateInventory('Dining Chair', 2)
