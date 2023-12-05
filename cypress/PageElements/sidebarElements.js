export class sidebarElements{
    SideSubCatVisible(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(6) > div:nth-child(2) > a:nth-child(1)").click()
        cy.get(".bodyWrapper").should('be.visible') 
    }

    SideSubCatSelect(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(6) > div:nth-child(2) > a:nth-child(1)").click()
      cy.get(".category[href='/male-care']").click()
    }

    SideCatRelevantItem(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(6) > div:nth-child(2) > a:nth-child(1)").click()
        cy.get(".category[href='/male-care']").click()
        cy.get(".category[href='/shampoo']").should('exist') 
    }

    SideCatItemDetailPic(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(6) > div:nth-child(2) > a:nth-child(1)").click()
      cy.get(".category[href='/male-care']").click()
      cy.get(".category[href='/shampoo']").click()
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1)").should('be.visible')
    }

    SideCatHoverItemDarken(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(6) > div:nth-child(2) > a:nth-child(1)").click()
        cy.get(".category[href='/male-care']").click()
        cy.get(".category[href='/shampoo']").click()
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1)").should('be.visible')
        cy.get("div[class='productPane'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(5)")
        .realHover()
        .should('have.css', 'background-color', 'rgba(40, 40, 40, 0.75)')
    }

    SideCatHoverDetails(){
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(6) > div:nth-child(2) > a:nth-child(1)").click()
        cy.get(".category[href='/male-care']").click()
        cy.get(".category[href='/shampoo']").click()
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').realHover()
        cy.contains('Details')
    }

    LogoClickHomepage(){
        cy.get("a[href='/fruits-vegetables']").click()
          cy.get(".category[href='/fresh-fruit']").click()
          .wait(2000) 
          cy.get(".logo.hidden-xs").click() 
    } 

    SideBarOpenDefault(){
        cy.get(".menu-container").should('be.visible')
    }

    SidebarCollapsable(){
        cy.get(".hamburgerMenu.hidden-xs").click()
        cy.get(".menu-container").should('be.hidden')
    }

    LoginbtnTranslation(){
        cy.get(".localeRightContainer").click() 
          cy.get(".signInBtn").should('have.text','লগ ইন') 
    }    

    CityLocatorTranslation(){
        cy.get(".localeRightContainer").click()
        cy.get(".metropolitanAreaName").should('have.text','ঢাকা') 
    }

    SearchbarTranslation() {
        cy.get(".localeRightContainer").click()
        cy.get(".searchBarContainer").should('have.text',' গ্রোসারি পৌঁছে দিচ্ছি আপনার দোরগোড়ায় ') 
    }

    SearchPlaceholderTrans(){
        cy.get(".localeRightContainer").click()
          cy.get("input[name=mainSearch]").should('be.visible') 
    }

    CatTranslation(){
        cy.get(".localeRightContainer").click()
        cy.get("a[href='/fruits-vegetables']").contains('ফল ও শাকসবজি')
    }

    ItemNameTrans(){
        cy.get(".localeRightContainer").click()
          cy.get("a[href='/fruits-vegetables']").click()
          cy.get(".category[href='/fresh-fruit']").contains('তাজা ফল').click()
          cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)")
          .should('have.text','সাগর কলা 8 টি') 
    }

    LoginErrMsgTrans(){
        cy.get(".localeRightContainer").click()
        cy.get(".signInBtn").click() 
        cy.get("button[class='loginBtn']").contains('সাইন আপ / লগ ইন').click()
        cy.get(".errorContainer").should('have.text','অনুগ্রহ করে সঠিক বাংলাদেশি ফোন নাম্বার দিন । যেমন +8801672955886')
    }

    MaxQtyErrMsg(){
        cy.get(".localeRightContainer").click()
          cy.get("a[href='/fruits-vegetables']").click()
                cy.get(".category[href='/fresh-fruit']").click()
                cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > section:nth-child(3) > p:nth-child(2)").click({force: true})
                const maxQuantity = 110;
                for (let i = 0; i < maxQuantity; i++) {
                cy.get(".plusQuantity").click()
                }
                cy.get(".maxQtyToolTip").should('be.visible').should('not.contain', 'Your desired quantity is not available for this product' )
    }


    SidebarHiddenOnDevice(){
        cy.get(".menu-container").should('not.be.visible') 
    }

    MenuIconVisibleOnDevice(){
        cy.get('.hamBergerMenuIcon').should('be.visible') 
    }

    RedirectHomepage(){
        cy.get("a[href='/fruits-vegetables']").click()
        cy.get(".category[href='/fresh-fruit']").click()
        cy.get(".logo.hidden-xs").click() 
        cy.get("#page").should('be.visible')
    }


}