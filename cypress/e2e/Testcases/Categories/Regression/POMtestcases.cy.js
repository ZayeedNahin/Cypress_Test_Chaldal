import { cartElements } from "../../../../PageElements/cartElements"
import { homepageElements } from "../../../../PageElements/homepageElements"
import { sidebarElements } from "../../../../PageElements/sidebarElements"


const HomepageElements = new homepageElements
const SideBarElements = new sidebarElements
const CartElements = new cartElements

describe('Homepage Category', () => {

    it('Verify if user can select the categories on homepage', () => {
      cy.visit('https://chaldal.com/')
      HomepageElements.SelectCatHomepage() 
    })
})  

describe('Homepage Sub-category', () => {

    it('Verify if the sub categories are displayed when a category is clicked on homepage', () => {
      cy.visit('https://chaldal.com/')
      HomepageElements.SubCatVisible() 
    })
})  

describe('Homepage Sub-category Relevancy', () => {

    it('Verify if all relevant items are displayed when sub category is selected', () => {
      cy.visit('https://chaldal.com/')
      HomepageElements.RelevantSubCat() 
    })
})  

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

  describe('Sidebar', () => {
    it('Verify the presence of sub-categories when category is selected ', () => {
      cy.visit('https://chaldal.com/')
     SideBarElements.SideSubCatVisible()

    })
  })

  describe('Sidebar', () => {
    it('Verify if user can select the sub-categories ', () => {
      cy.visit('https://chaldal.com/')
      SideBarElements.SideSubCatSelect() 

    })
  })

  describe('Sidebar', () => {
    it('Verify if user can view relevant items of the category ', () => {
      cy.visit('https://chaldal.com/')
     SideBarElements.SideCatRelevantItem()
    })
  })

  describe('Sidebar', () => {
    it('Verify if all the items category has essential details and picture of the each item', () => {
      cy.visit('https://chaldal.com/') 
      SideBarElements.SideCatItemDetailPic() 

    })
  })

  describe('Sidebar', () => {
    it('Verify on hovering the mouse over the item shows the details option', () => {
      cy.visit('https://chaldal.com/')
     SideBarElements.SideCatHoverDetails() 
    })
  })

  describe('Sidebar', () => {
    it('Verify on hovering the mouse over the item shows the details option', () => {
      cy.visit('https://chaldal.com/')
     SideBarElements.SideCatHoverDetails() 
    })
  })

  describe('Sidebar', () => {
    it('Verify on hovering the mouse over the item shows the details option', () => {
      cy.visit('https://chaldal.com/')
     SideBarElements.SideCatHoverDetails() 
    })
  }) 