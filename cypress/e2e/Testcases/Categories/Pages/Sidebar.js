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

      describe('Sidebar', () => {
        it('Verify that sidebar is open by default  ', () => {
          cy.visit('https://chaldal.com/')
         
          cy.get(".menu-container").should('be.visible')
          
    
        })
      })
    
      describe('Sidebar', () => {
        it('Verify that sidebar is collapsable  ', () => {
          cy.visit('https://chaldal.com/')
         
          cy.get(".hamburgerMenu.hidden-xs").click()
          cy.get(".menu-container").should('be.hidden')
    
        })
      })
    
      describe('Sidebar (Localization)', () => {
        it('Verify that log in button is translated into targeted language  ', () => {
          cy.visit('https://chaldal.com/')
          cy.get(".localeRightContainer").click() 
          cy.get(".signInBtn").contains('লগ ইন') 
        })
        
        it('Verify that city locator has translated into targeted language ', () => {
          cy.visit('https://chaldal.com/')
          cy.get(".localeRightContainer").click()
          cy.get(".metropolitanAreaName").contains('ঢাকা') 
          
        })
    
        it('Verify search bar container has translated into targeted language  ', () => {
          cy.visit('https://chaldal.com/')
          cy.get(".localeRightContainer").click()
          cy.get(".searchBarContainer").contains('গ্রোসারি পৌঁছে দিচ্ছি আপনার দোরগোড়ায়') 
          
        })
    
        it('Verify search bar placeholder has translated into targeted language  ', () => {
          cy.visit('https://chaldal.com/')
          cy.get(".localeRightContainer").click()
          cy.get("input[placeholder='পণ্য খুঁজুন (যেমন, ডিম, দুধ, আলু)'][name='mainSearch']").should('be.visible')
         
          
        })
    
        it('Verify category name has translated into targeted language  ', () => {
          cy.visit('https://chaldal.com/')
          cy.get(".localeRightContainer").click()
          cy.get("a[href='/fruits-vegetables']").contains('ফল ও শাকসবজি')
         
          
        })
    
        it('Verify category items name has translated into targeted language  ', () => {
          cy.visit('https://chaldal.com/')
          cy.get(".localeRightContainer").click()
          cy.get("a[href='/fruits-vegetables']").click()
          cy.get(".category[href='/fresh-fruit']").contains('তাজা ফল').click()
          cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)")
          .contains('সাগর কলা 8 টি')
         
          
        })
    
        it('Verify login error message has translated into targeted language  ', () => {
          cy.visit('https://chaldal.com/')
          cy.get(".localeRightContainer").click()
          cy.get(".signInBtn").click() 
          cy.get("button[class='loginBtn']").contains('সাইন আপ / লগ ইন').click()
          cy.get(".errorContainer").contains('অনুগ্রহ করে সঠিক বাংলাদেশি ফোন নাম্বার দিন । যেমন +8801672955886')
    
          
        })
    
        it('Verify quantity error message has translated into targeted language  ', () => {
          cy.visit('https://chaldal.com/')
          cy.get(".localeRightContainer").click()
          cy.get("a[href='/fruits-vegetables']").click()
                cy.get(".category[href='/fresh-fruit']").click()
                cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3) > p:nth-child(2)").click({force: true})
                const maxQuantity = 110;
                for (let i = 0; i < maxQuantity; i++) {
                cy.get(".plusQuantity").click()
                }
                cy.get(".maxQtyToolTip").should('be.visible').contains('আপনার পছন্দসই পরিমাণ এই পণ্যের জন্য উপলব্ধ নয়')
    
        })
    
        
      })
        
    
      describe('Sidebar (Responsiveness)', 
            {
              viewportHeight: 896,
             viewportWidth: 414
            }, () => {
             
        it('Verify that sidebar is not visible  ', () => {
              cy.visit('https://chaldal.com/')
             
              cy.get(".menu-container").should('not.be.visible') 
        
            })
    
            it('Verify that menu icon is visible  ', () => {
              cy.visit('https://chaldal.com/')
             
              cy.get('.hamBergerMenuIcon').should('be.visible') 
              
        
            })
    
          })
    
    
