import { cartElements } from "../../../../PageElements/cartElements"

const CartElements = new cartElements
describe('Add to Cart ', () => {
    it('Verify that user can select desired quantity of an item before adding to the cart', () => {
      cy.visit('https://chaldal.com/')
      CartElements.quantity()
      
    })
  })
  
  describe('Add to Cart ', () => {
    it('Verify that user can add multiple items on the cart', () => {
      cy.visit('https://chaldal.com/')
      CartElements.multipleQty()
      
    })
  })
  
  
  describe('Add to Cart', () => {
      it('Verify if adding product to the cart and changing location has impact on the cart', () => {
        cy.visit('https://chaldal.com/')
        CartElements.addChngLoc() 
     
      })
    })
  
    describe('Add to Cart', () => {
      it('Verify if there are variations in product in different cities', () => {
        cy.visit('https://chaldal.com/')
      CartElements.varProCity() 
     
      })
    })
  
    describe('Add to Cart', () => {
      it('Verify removing items from the cart eliminates the item ', () => {
        cy.visit('https://chaldal.com/')
        CartElements.rmvPro() 
     
      })
    })
  
    describe('Add to Cart', () => {
      it('Verify maximum number of quantity of item that can be added to cart ', () => {
        cy.visit('https://chaldal.com/')
        CartElements.maxQty()
     
      })
    })
  
    describe('Add to Cart', () => {
      it('Verify adding multiple item to the cart updates the price accordingly ', () => {
        cy.visit('https://chaldal.com/')
        CartElements.multPriceUpdate()
  
     
      })
    })
  
    describe('Add to Cart', () => {
      it('Verify increasing item to the cart updates the price ', () => {
        cy.visit('https://chaldal.com/')
        CartElements.autoPriceUpdate()
  
      })
    })
  
    describe('Add to Cart', () => {
      it('Verify that reducing the quantity from the cart dynamically updates the total price on the cart ', () => {
        cy.visit('https://chaldal.com/')
        CartElements.reducingItemPrice() 
  
      })
    })
  
    describe('Add to Cart', () => {
      it('Verify that user cannot add expired discount code  ', () => {
        cy.visit('https://chaldal.com/')
        CartElements.expDiscode() 
        
      })
    })
  
    describe('Add to Cart', () => {
      it('Verify that add to cart icon is updated with number of item and total price  ', () => {
        cy.visit('https://chaldal.com/')
        CartElements.cartIconUpdate() 
        
      })
    })
  
    describe('Sidebar', () => {
      it('Verify if user can select the categories from sidebar ', () => {
        cy.visit('https://chaldal.com/')
        CartElements.SideCate()
         
  
      })
    })

    describe('Add to Cart', () => {
        it('Check add to cart without adding item!', () => {
          cy.visit('https://chaldal.com/')
          CartElements.CartNoItem()
        })
      })
    
      describe('Add to Cart', () => {
        it('Verify that user can select desired quantity of an item before adding to the cart', () => {
          cy.visit('https://chaldal.com/')
          CartElements.QtyBeforeCart() 
          
        })
      })
    
      describe('Add to Cart', () => {
        it('Verify that user can add multiple items on the cart', () => {
          cy.visit('https://chaldal.com/')
          CartElements.SideMultiQty()
          
        })
      })
    
      describe('Add to Cart', () => {
        it('Verify that increasesing the quantity increases on cart ', () => {
          cy.visit('https://chaldal.com/')
          CartElements.CartQtyIncrease()
        })
      })
    
      describe('Add to Cart', () => {
        it('Verify that by decreasesing the quantity decreases on cart ', () => {
          cy.visit('https://chaldal.com/')
          CartElements.CartQtyDecrease() 
        })
      })
    
       describe('Add to Cart', () => {
        it('Verify that by clicking plus sign increases the quantity on cart ', () => {
          cy.visit('https://chaldal.com/')
          CartElements.PlusSignQtyIncr() 
          
        })
      })
    
       describe('Add to Cart', () => {
        it('Verify that by clicking minus sign decreases the quantity on cart ', () => {
          cy.visit('https://chaldal.com/')
          CartElements.MinusSignQtyDecr() 
          
        })
      })

      describe('Add to Cart ', () => {
        it('Verify that shopping bag is empty message is displayed when add to cart icon is clicked without adding any item', () => {
          cy.visit('https://chaldal.com/')
          CartElements.EmptyMsgVisible()
          
        })
      })
      
       describe('Add to Cart', () => {
          it('Verify that user is displayed an alert message if maximum quantity is selected ', () => {
            cy.visit('https://chaldal.com/')
            CartElements.MaxQtyMsg() 
          })
        })
      
        describe('Add to Cart', () => {
          it('Verify that add to cart icon button exhibits different state upon hovering. For example: reduced opacity gets brighter on hover', () => {
            cy.visit('https://chaldal.com/')
            CartElements.CartIconHover()
          })
        })
      
        describe('Add to Cart', () => {
          it('Verify that add to cart icon is updated with number of item and total price  ', () => {
            cy.visit('https://chaldal.com/')
            CartElements.CartIconUpdate()
          })
        })