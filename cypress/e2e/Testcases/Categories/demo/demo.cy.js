import { pageElements } from "./pageElements"

const PageElements = new pageElements
describe('Homepage Sub-category', () => {

    it('Verify if the sub categories are displayed when a category is clicked on homepage', () => {
      cy.visit('https://chaldal.com/')
      PageElements.category()
      PageElements.subCategory()
      
    })
})  