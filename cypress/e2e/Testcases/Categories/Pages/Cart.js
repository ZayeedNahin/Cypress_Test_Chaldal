describe('Add to Cart ', () => {
    it('Verify that user can select desired quantity of an item before adding to the cart', () => {
      cy.visit('https://chaldal.com/')
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
      cy.get("div[class='productPane'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(5)").click({force: true})
      cy.get('.stickyHeader').click()
      
    })
  })
  
  describe('Add to Cart ', () => {
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

      describe('Add to Cart ', () => {
        it('Verify that shopping bag is empty message is displayed when add to cart icon is clicked without adding any item', () => {
          cy.visit('https://chaldal.com/')
          cy.get('.stickyHeader').click()
          cy.get(".shoppingCart div.emptyCart .nothingToSeeHereMoveOn ").contains('Your shopping bag is empty. Start shopping').should('exist')
          
        })
      })
      
       describe('Add to Cart', () => {
          it('Verify that user is displayed an alert message if maximum quantity is selected ', () => {
            cy.visit('https://chaldal.com/')
            cy.get("a[href='/fruits-vegetables']").click()
            cy.get(".category[href='/fresh-fruit']").click()
            cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3) > p:nth-child(2)").click({force: true})
            const maxQuantity = 110;
            for (let i = 0; i < maxQuantity; i++) {
            cy.get(".plusQuantity").click()
            }
            cy.get(".maxQtyToolTip").should('be.visible')
         
          })
        })
      
        describe('Add to Cart', () => {
          it('Verify that add to cart icon button exhibits different state upon hovering. For example: reduced opacity gets brighter on hover', () => {
            cy.visit('https://chaldal.com/')
       cy.get('.stickyHeader > .itemCount').realHover()
         
          })
        })
      
        describe('Add to Cart', () => {
          it('Verify that add to cart icon is updated with number of item and total price  ', () => {
            cy.visit('https://chaldal.com/')
            cy.get("a[href='/fruits-vegetables']").click()
            cy.get(".category[href='/fresh-fruit']").click()
            cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3)").click({force: true})
            cy.get('.stickyHeader').click()
            cy.get(".text1").should('be.visible')
            
      
          })
        })