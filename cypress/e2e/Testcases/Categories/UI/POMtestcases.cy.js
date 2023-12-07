import { cartElements } from "../../../../PageElements/cartElements"
import { homepageElements } from "../../../../PageElements/homepageElements"
import { sidebarElements } from "../../../../PageElements/sidebarElements"

const HomepageElements = new homepageElements
const CartElements = new cartElements
const SideBarElements = new sidebarElements 

describe('Homepage Category', () => {
    it('Verify hovering on the items darkens the item picture', () => {
      cy.visit('https://chaldal.com/')
      HomepageElements.ItemDarkenOnHover() 
   
    })
  })

  describe('Homepage Category ', () => {
    it('Verify hovering on the items displays the details option', () => {
      cy.visit('https://chaldal.com/')
      HomepageElements.DetailsOnHover() 
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

  describe('Sidebar', () => {
    it('Verify that sidebar is open by default  ', () => {
      cy.visit('https://chaldal.com/')
     SideBarElements.SideBarOpenDefault()
    })
  })

  describe('Sidebar', () => {
    it('Verify that sidebar is collapsable  ', () => {
      cy.visit('https://chaldal.com/')
     SideBarElements.SidebarCollapsable() 

    })
  })

  describe('Sidebar (Localization)', () => {
    it('Verify that log in button is translated into targeted language  ', () => {
      cy.visit('https://chaldal.com/')
      SideBarElements.LoginbtnTranslation() 
    })

    it('Verify that city locator has translated into targeted language ', () => {
        cy.visit('https://chaldal.com/')
        SideBarElements.CityLocatorTranslation() 
        
      })

      it('Verify search bar container has translated into targeted language  ', () => {
        cy.visit('https://chaldal.com/')
        SideBarElements.SearchbarTranslation() 
        
      })

      it('Verify search bar placeholder has translated into targeted language  ', () => {
        cy.visit('https://chaldal.com/')
        SideBarElements.SearchPlaceholderTrans() 
       
        
      })

      it('Verify category name has translated into targeted language  ', () => {
        cy.visit('https://chaldal.com/')
        SideBarElements.CatTranslation()
       
      })

      it('Verify category items name has translated into targeted language  ', () => {
        cy.visit('https://chaldal.com/')
        SideBarElements.ItemNameTrans()
      })

      it('Verify login error message has translated into targeted language  ', () => {
        cy.visit('https://chaldal.com/')
       SideBarElements.LoginErrMsgTrans() 
  
      })

      it('Verify quantity error message has translated into targeted language  ', () => {
        cy.visit('https://chaldal.com/')
        SideBarElements.MaxQtyErrMsg()
      })
    })

    describe('Sidebar (Responsiveness)', 
    {
      viewportHeight: 896,
     viewportWidth: 414
    }, () => {
     
it('Verify that sidebar is not visible  ', () => {
      cy.visit('https://chaldal.com/')
     
      SideBarElements.SidebarHiddenOnDevice()

    })

    it('Verify that menu icon is visible  ', () => {
      cy.visit('https://chaldal.com/')
     
     SideBarElements.MenuIconVisibleOnDevice
      

    })

  })