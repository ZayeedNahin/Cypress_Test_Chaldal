export class navbarElements{
    AvailableLocation(){
        cy.get(".area.citySelectionArea").click()
       cy.get(".change-city").click()
       cy.get(".citySelectionPage").should('be.visible') 
      
    }

    ChosenCityVisible(){
        cy.get(".area.citySelectionArea").click()
       cy.get(".change-city").click()
       cy.get(".citySelectionPage")
       cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)").click()
       cy.get("#citySelectionLink").should('be.visible') 
    }

    MenuCollapse(){
        cy.get(".hamburgerMenu.hidden-xs").click() 
      cy.get(".topMenu.vertical").should('not.be.visible')
    }
}