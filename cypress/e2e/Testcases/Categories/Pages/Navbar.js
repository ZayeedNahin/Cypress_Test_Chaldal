import { navbarElements } from "../../../../PageElements/navbarElements"

const NavBarElements = new navbarElements
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