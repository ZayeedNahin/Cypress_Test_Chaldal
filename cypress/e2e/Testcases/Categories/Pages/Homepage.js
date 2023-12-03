import { homepageElements } from "../../../../PageElements/homepageElements"

const HomepageElements = new homepageElements
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
  
  
  // describe('Homepage Category ', () => {
  //   it('Verify that add to bag button exhibits different state upon hovering', () => {
  //     cy.visit('https://chaldal.com/')
  //     cy.get('[href="/fruits-vegetables"] > .categoryBox').click()
  //     cy.get('.category-links-wrapper > [href="/fresh-vegetable"]').click() 
      
  
  //     cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(3)")
  //     .should('have.css', 'transform', 'none')
  //     .realHover() 
  //     .should('have.css', 'transform','translateY(-1px)')
      
  //   })
  // }) 
  