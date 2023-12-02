describe('Navbar', () => {
    it('Verify that user is displayed available locations or cities of delivery ', () => {
      cy.visit('https://chaldal.com/')
      cy.get(".area.citySelectionArea").click()
       cy.get(".change-city").click()
       cy.get(".citySelectionPage").should('be.visible') 
      
   
    })
  })

  describe('Navbar', () => {
    it('Verify that selected city is visible to the user ', () => {
      cy.visit('https://chaldal.com/')
      cy.get(".area.citySelectionArea").click()
       cy.get(".change-city").click()
       cy.get(".citySelectionPage")
       cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)").click()
       cy.get("#citySelectionLink").should('be.visible') 
   
    })
  })

  describe('Navbar', () => {
    it('Verify if clicking on the three line menu icon in the navbar collapses the sidebar ', () => {
      cy.visit('https://chaldal.com/')
      cy.get(".hamburgerMenu.hidden-xs").click() 
      cy.get(".topMenu.vertical").should('not.be.visible')

      
   
    })
  })