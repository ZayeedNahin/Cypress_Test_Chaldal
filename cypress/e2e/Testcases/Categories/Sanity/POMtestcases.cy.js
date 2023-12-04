import { cartElements } from "../../../../PageElements/cartElements"
import { homepageElements } from "../../../../PageElements/homepageElements"
import { navbarElements } from "../../../../PageElements/navbarElements"


const HomepageElements = new homepageElements
const CartElements = new cartElements
const NavBarElements = new navbarElements 


describe('Homepage Category', () => {
    it('Verify if user can slide to more categories clicking the forward arrow', () => {
      cy.visit('https://chaldal.com/')
      HomepageElements.SlideCatForward() 
    
    })
  }) 

  describe('Homepage Category ', () => {
    it('Verify if user can slide back categories clicking the backward arrow', () => {
      cy.visit('https://chaldal.com/')
     HomepageElements.SlideCatBackward() 
      
    })
  }) 

  describe('Homepage Category ', () => {
    it('Verify if all the items related to the sub category has essential details and picture of the each item', () => {
      cy.visit('https://chaldal.com/')
      HomepageElements.ItemDetailPic() 

    })
  })

  describe('Homepage Category', () => {
    it('Verify if user is able to see the full details of the item', () => {
      cy.visit('https://chaldal.com/')
      HomepageElements.FullDetailsItem()  
      
    })
  }) 

  describe('Homepage Category ', () => {
    it('Verify if user is able to see add to shopping bag on mouse hover', () => {
      cy.visit('https://chaldal.com/')
      HomepageElements.ItemHoverAddtoBag() 
      
    })
  }) 

  describe('Add to Cart', () => {
    it('Check add to cart without adding item!', () => {
      cy.visit('https://chaldal.com/')
      CartElements.CartNoItem()
    })
  })

  // describe('Add to Cart', () => {
  //   it('Verify that user can select desired quantity of an item before adding to the cart', () => {
  //     cy.visit('https://chaldal.com/')
  //     CartElements.QtyBeforeCart() 
      
  //   })
  // })

  describe('Add to Cart', () => {
    it('Verify that user can add multiple items on the cart from sidebar category', () => {
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

  describe('Navbar', () => {
    it('Verify that user is displayed available locations or cities of delivery ', () => {
      cy.visit('https://chaldal.com/')
      NavBarElements.AvailableLocation()
   
    })
  })

  describe('Navbar', () => {
    it('Verify that selected city is visible to the user ', () => {
      cy.visit('https://chaldal.com/')
      NavBarElements.ChosenCityVisible()
   
    })
  })

  describe('Navbar', () => {
    it('Verify if clicking on the three line menu icon in the navbar collapses the sidebar ', () => {
      cy.visit('https://chaldal.com/')
      NavBarElements.MenuCollapse() 
    })
  })