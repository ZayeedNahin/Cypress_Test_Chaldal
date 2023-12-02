
describe('Homepage Category', () => {
    it('Verify if user can slide to more categories clicking the forward arrow', () => {
      cy.visit('https://chaldal.com/')
      cy.get('.headerContainer > .scrollRight').should('be.enabled')
      for(let n=0; n< 3; n++){
        cy.get('.headerContainer > .scrollRight').click()
      }


      
    
    })
  }) 

  describe('Homepage Category ', () => {
    it('Verify if user can slide back categories clicking the backward arrow', () => {
      cy.visit('https://chaldal.com/')
      cy.get('.headerContainer > .scrollLeft').should('be.enabled')
      for(let n=0; n< 3; n++){
        cy.get('.headerContainer > .scrollLeft').click()
      }
      
    })
  }) 

  describe('Homepage Category ', () => {
    it('Verify if all the items related to the sub category has essential details and picture of the each item', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[href="/fruits-vegetables"] > .categoryBox').click()
      cy.get('.category-links-wrapper > [href="/fresh-vegetable"]').click() 
      cy.get('.productPane').should('be.visible') 

      
    })
  })

  describe('Homepage Category', () => {
    it('Verify if user is able to see the full details of the item', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[href="/fruits-vegetables"] > .categoryBox').click()
      cy.get('.category-links-wrapper > [href="/fresh-vegetable"]').click() 
      

      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').trigger('mouseover')
      cy.contains('Details').click({force:true}) 
      
    })
  }) 

  describe('Homepage Category ', () => {
    it('Verify if user is able to see add to shopping bag on mouse hover', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[href="/fruits-vegetables"] > .categoryBox').click()
      cy.get('.category-links-wrapper > [href="/fresh-vegetable"]').click() 
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').trigger('mouseover')
      
      cy.contains('Add to Shopping Bag').should('exist')

      
    })
  }) 

  describe('Add to Cart', () => {
    it('Check add to cart without adding item!', () => {
      cy.visit('https://chaldal.com/')
      cy.get('.stickyHeader').click()
      // cy.get('.closeCartButtonTop').click()
    })
  })

  describe('Add to Cart', () => {
    it('Verify that user can select desired quantity of an item before adding to the cart', () => {
      cy.visit('https://chaldal.com/')
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
      cy.get("div[class='productPane'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(5)").click({force: true})
      
   
    })
  })

  describe('Add to Cart', () => {
    it('Verify that user can add multiple items on the cart', () => {
      cy.visit('https://chaldal.com/')
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
      cy.get("div[class='productPane'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(5)").click({force: true})
      cy.get('.stickyHeader').click()
      cy.get('.closeCartButtonTop').click() 
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > ol:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click() 
      cy.get(".category[href='/fresh-fruit']").click() 
      cy.get("div:nth-child(5) div:nth-child(1) div:nth-child(1) div:nth-child(5) p:nth-child(1)").click({force: true})
      cy.get('.stickyHeader').click()
      cy.get('.closeCartButtonTop').click()
      
    })
  })

  describe('Add to Cart', () => {
    it('Verify that increasesing the quantity increases on cart ', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[href="/meat-fish"] > .categoryBox').click()
      cy.get(".category[href='/premium-perishables']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(23) > div:nth-child(1)").click()
      cy.get('.stickyHeader').click()
      cy.get("div[class='quantity']").click()
   
    })
  })

  describe('Add to Cart', () => {
    it('Verify that by decreasesing the quantity decreases on cart ', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[href="/meat-fish"] > .categoryBox').click()
      cy.get(".category[href='/premium-perishables']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(23) > div:nth-child(1)").click()
      cy.get('.stickyHeader').click()
      cy.get("div[title='Remove one from bag']").click()
   
    })
  })

   describe('Add to Cart', () => {
    it('Verify that by clicking plus sign increases the quantity on cart ', () => {
      cy.visit('https://chaldal.com/')
      cy.get("a[href='/fruits-vegetables']").click()
      cy.get(".category[href='/fresh-fruit']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5)").realHover().click({force: true})
      cy.get(".add").click({force: true})
      
   
    })
  })

   describe('Add to Cart', () => {
    it('Verify that by clicking minus sign decreases the quantity on cart ', () => {
      cy.visit('https://chaldal.com/')
      cy.get("a[href='/fruits-vegetables']").click()
      cy.get(".category[href='/fresh-fruit']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5)").realHover().click({force: true})
      cy.get(".remove").click({force: true})
      
   
    })
  })


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

    



    


   

  


