describe('Homepage Category', () => {

    it('Verify if user can select the categories on homepage', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[href="/meat-fish"] > .categoryBox').click()
    })
})  

describe('Homepage Sub-category', () => {

    it('Verify if the sub categories are displayed when a category is clicked on homepage', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[href="/meat-fish"] > .categoryBox').click()
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)').click()
    })
})  

describe('Homepage Sub-category Relevancy', () => {

    it('Verify if all relevant items are displayed when sub category is selected', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[href="/meat-fish"] > .categoryBox').click()
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)').click()
      cy.get('.productPane').should('be.visible') 
    })
})  

describe('Add to Cart Suite', () => {
  it('Verify that user can select desired quantity of an item before adding to the cart', () => {
    cy.visit('https://chaldal.com/')
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").click()
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
    cy.get("div[class='productPane'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(5)").click({force: true})
    cy.get('.stickyHeader').click()
    
  })
})

describe('Add to Cart Suite', () => {
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
    
  })
})




describe('Add to Cart', () => {
    it('Verify if adding product to the cart and changing location has impact on the cart', () => {
      cy.visit('https://chaldal.com/')
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1)").click()
    cy.get(".category[href='/tofu-meat-alternatives']").click()
    cy.get("div:nth-child(4) div:nth-child(1) div:nth-child(1) div:nth-child(5) p:nth-child(1)").click({force: true})
    cy.get(".area.citySelectionArea").click()
    cy.get(".change-city").click()
    .wait(2000)
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)").click()
    cy.get(".stickyHeader").click()
   
    })
  })

  describe('Add to Cart', () => {
    it('Verify if there are variations in product in different cities', () => {
      cy.visit('https://chaldal.com/')
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1)").click()
    cy.get(".category[href='/premium-perishables']").click().should('have.length.gt', 0)
    cy.get('.productPane > div').its('length').then((itemCount) => {
    cy.log(`Number of items displayed: ${itemCount}`);
    })
    
    cy.get(".area.citySelectionArea").click()
    cy.get(".change-city").click()
    .wait(2000)
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)").click()
    cy.get('.productPane > div').its('length').then((itemCount) => {
    cy.log(`Number of items displayed: ${itemCount}`)
      })
   
    })
  })

  describe('Add to Cart', () => {
    it('Verify removing items from the cart eliminates the item ', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[href="/meat-fish"] > .categoryBox').click()
      cy.get(".category[href='/premium-perishables']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(23) > div:nth-child(1)").click()
      cy.get('.stickyHeader').click()
      cy.get("div[title='Remove from bag']").click()
   
    })
  })

  describe('Add to Cart', () => {
    it('Verify maximum number of quantity of item that can be added to cart ', () => {
      cy.visit('https://chaldal.com/')
      cy.get("a[href='/fruits-vegetables']").click()
      cy.get(".category[href='/fresh-fruit']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3) > p:nth-child(2)").click({force: true})
      const maxQuantity = 106;
      for (let i = 0; i < maxQuantity; i++) {
      cy.get(".plusQuantity").click()
      }
   
    })
  })

  describe('Add to Cart', () => {
    it('Verify adding multiple item to the cart updates the price accordingly ', () => {
      cy.visit('https://chaldal.com/')
      cy.get("a[href='/fruits-vegetables']").click()
      cy.get(".category[href='/fresh-fruit']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3) > p:nth-child(2)").click({force: true})
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > section:nth-child(3)").click({force: true})
      cy.get('.stickyHeader').click()
      cy.get(".totalMoneyCount").should('be.visible')
      // cy.get(".totalMoneyCount").should('contain', '378')

   
    })
  })

  describe('Add to Cart', () => {
    it('Verify increasing item to the cart updates the price ', () => {
      cy.visit('https://chaldal.com/')
      cy.get("a[href='/fruits-vegetables']").click()
      cy.get(".category[href='/fresh-fruit']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3) > p:nth-child(2)").click({force: true})
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > section:nth-child(3)").click({force: true})
      cy.get('.stickyHeader').click()
      cy.get(".totalMoneyCount").should('be.visible')
      cy.get('.plusQuantity').first().click()
      .wait(1000)
      cy.get(".totalMoneyCount").should('be.visible')

    })
  })

  describe('Add to Cart', () => {
    it('Verify that reducing the quantity from the cart dynamically updates the total price on the cart ', () => {
      cy.visit('https://chaldal.com/')
      cy.get("a[href='/fruits-vegetables']").click()
      cy.get(".category[href='/fresh-fruit']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3)").click({force: true})
      for (let i=0; i<=3; i++){
        cy.get(".plusQuantity").click()
      }
      
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > section:nth-child(3)").click({force: true})
      cy.get('.stickyHeader').click()
      cy.get(".totalMoneyCount").should('be.visible')
      cy.get('.minusQuantity').first().click()
      .wait(1000)
      cy.get(".totalMoneyCount").should('be.visible')

    })
  })

  describe('Add to Cart', () => {
    it('Verify that user cannot add expired discount code  ', () => {
      cy.visit('https://chaldal.com/')
      cy.get("a[href='/fruits-vegetables']").click()
      cy.get(".category[href='/fresh-fruit']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3)").click({force: true})
      cy.get('.stickyHeader').click()
      cy.get(".btnDiscount").click()
      cy.get("input[placeholder='Referral/Discount Code']").type('C1F57CC0')
      cy.get(".discountSubmitBtn").click() 
      cy.get(".error").should('be.visible') 
      

    })
  })

  describe('Add to Cart', () => {
    it('Verify that add to cart icon is updated with number of item and total price  ', () => {
      cy.visit('https://chaldal.com/')
      cy.get("a[href='/fruits-vegetables']").click()
      cy.get(".category[href='/fresh-fruit']").click()
      cy.get(".total").contains(0)
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3)").click({force: true})
      cy.get(".stickyHeader > .itemCount").contains(1)
      cy.get(".total").contains(299)
      

    })
  })

  describe('Sidebar', () => {
    it('Verify if user can select the categories from sidebar ', () => {
      cy.visit('https://chaldal.com/')
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(6) > div:nth-child(2) > a:nth-child(1)").click()
       

    })
  })

  describe('Sidebar', () => {
    it('Verify the presence of sub-categories when category is selected ', () => {
      cy.visit('https://chaldal.com/')
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(6) > div:nth-child(2) > a:nth-child(1)").click()
      cy.get(".bodyWrapper").should('be.visible') 

    })
  })

  describe('Sidebar', () => {
    it('Verify if user can select the sub-categories ', () => {
      cy.visit('https://chaldal.com/')
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(6) > div:nth-child(2) > a:nth-child(1)").click()
      cy.get(".category[href='/male-care']").click()

    })
  })

  describe('Sidebar', () => {
    it('Verify if user can view relevant items of the category ', () => {
      cy.visit('https://chaldal.com/')
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(6) > div:nth-child(2) > a:nth-child(1)").click()
      cy.get(".category[href='/male-care']").click()
      cy.get(".category[href='/shampoo']").click()

    })
  })

  describe('Sidebar', () => {
    it('Verify if all the items category has essential details and picture of the each item', () => {
      cy.visit('https://chaldal.com/')
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(6) > div:nth-child(2) > a:nth-child(1)").click()
      cy.get(".category[href='/male-care']").click()
      cy.get(".category[href='/shampoo']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1)").should('be.visible')

    })
  })

  describe('Sidebar', () => {
    it('Verify on hovering the mouse over the item shows the details option', () => {
      cy.visit('https://chaldal.com/')
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(6) > div:nth-child(2) > a:nth-child(1)").click()
      cy.get(".category[href='/male-care']").click()
      cy.get(".category[href='/shampoo']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1)").should('be.visible')
      cy.get("div[class='productPane'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(5)")
      .realHover()
      .should('have.css', 'background-color', 'rgba(40, 40, 40, 0.75)')
    })
  })

  

      describe('Sidebar', () => {
        it('Verify on hovering the mouse over the item shows the details option', () => {
          cy.visit('https://chaldal.com/')
          cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(6) > div:nth-child(2) > a:nth-child(1)").click()
          cy.get(".category[href='/male-care']").click()
          cy.get(".category[href='/shampoo']").click()
          cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').realHover()
          cy.contains('Details')
        })
      })

      describe('Sidebar', () => {
        it('Verify on hovering the mouse over the item shows the details option', () => {
          cy.visit('https://chaldal.com/')
          cy.get("a[href='/fruits-vegetables']").click()
          cy.get(".category[href='/fresh-fruit']").click()
          .wait(2000) 
          cy.get(".logo.hidden-xs").click() 
         
        })
      })





      

