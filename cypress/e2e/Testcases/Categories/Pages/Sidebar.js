import { sidebarElements } from "../../../../PageElements/sidebarElements"

const SideBarElements = new sidebarElements
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
    it('Verify on hovering the mouse over the item darkens', () => {
      cy.visit('https://chaldal.com/')
       SideBarElements.SideCatHoverItemDarken() 
    })
  })

  

      describe('Sidebar', () => {
        it('Verify on hovering the mouse over the item shows the details option', () => {
          cy.visit('https://chaldal.com/')
         SideBarElements.SideCatHoverDetails() 
        })
      })

      describe('Sidebar', () => {
        it('Verify clicking on icon takes to homepage ', () => {
          cy.visit('https://chaldal.com/')
          SideBarElements.LogoClickHomepage()
         
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
    
    
