import data from "../../submissionData.json"; // do not create this file

// const data = [
//   {
//     submission_link: "http://127.0.0.1:8080",
//     id: "manish-local",
//   },
// ];


// let data = [{ submission_link: "http://localhost:5500/", id: 67890 }]

data.forEach(({ submission_link: url, id,  json_server_link: server_url}) => {
  describe("Tic Tac Toe Assignment", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it("Check Basic Structure is present on the DOM", function () {
      //for 1 marks
      cy.visit(url);
      cy.get(".grid-cell").eq(0).should("have.text", "")
      cy.get(".grid-cell").eq(1).should("have.text", "")
      cy.get(".grid-cell").eq(2).should("have.text", "")
      cy.get(".grid-cell").eq(3).should("have.text", "")
      cy.get(".grid-cell").eq(4).should("have.text", "")
      cy.get(".grid-cell").eq(5).should("have.text", "")
      cy.get(".grid-cell").eq(6).should("have.text", "")
      cy.get(".grid-cell").eq(7).should("have.text", "")
      cy.get(".grid-cell").eq(8).should("have.text", "")

      cy.get(".current-player").should("contain", "Its X turn")
      cy.get(".restart").should("be.visible");
      cy.then(() => {
        acc_score += 1;
      })
    });

    it("check if X as winner works correctly", function () {
      cy.visit(url);
    
      cy.get(".grid-cell").eq(0).click({force:true});
      cy.get(".grid-cell").eq(1).click({force:true});
      cy.get(".grid-cell").eq(4).click({force:true});
      cy.get(".grid-cell").eq(2).click({force:true});
      cy.get(".grid-cell").eq(8).click({force:true});
    
      cy.get(".game-over-text").should("contain", "X wins!");
    
      cy.then(() => {
        acc_score += 2;
      });
    });
    
    it("check if O as winner works correctly", function () {
      cy.visit(url);
    
      cy.get(".grid-cell").eq(0).click();
      cy.get(".grid-cell").eq(3).click();
      cy.get(".grid-cell").eq(6).click();
      cy.get(".grid-cell").eq(4).click();
      cy.get(".grid-cell").eq(7).click();
      cy.get(".grid-cell").eq(5).click();
    
      cy.get(".game-over-text").should("contain", "O wins!");
    
      cy.then(() => {
        acc_score += 2;
      });
    });
    
    it("Check if the draw works correctly", function () {
      cy.visit(url);    
      cy.get(".grid-cell").eq(0).click();
      cy.get(".grid-cell").eq(4).click();
      cy.get(".grid-cell").eq(8).click();
      cy.get(".grid-cell").eq(6).click();
      cy.get(".grid-cell").eq(2).click();
      cy.get(".grid-cell").eq(5).click();
      cy.get(".grid-cell").eq(3).click();
      cy.get(".grid-cell").eq(1).click();
      cy.get(".grid-cell").eq(7).click();
    
      cy.get(".game-over-text").should("contain", "Draw!");
    
      cy.then(() => {
        acc_score += 2;
      });
    });
    
    it("Toggling of player works correctly", () => {
      cy.visit(url);
    
      cy.get(".current-player").should("contain", "Its X turn");
    
      cy.get(".grid-cell").eq(0).click();
      cy.get(".current-player").should("contain", "Its O turn");
    
      cy.get(".grid-cell").eq(4).click();
      cy.get(".current-player").should("contain", "Its X turn");
    
      cy.get(".grid-cell").eq(8).click();
      cy.get(".current-player").should("contain", "Its O turn");
    
      cy.then(() => {
        acc_score += 2;
      });
    });
    it("Check grid-cells are getting updated with correct textContent after clicking on respective div", () => {
      cy.visit(url);
    
      cy.get(".current-player").should("contain", "Its X turn");
    
      cy.get(".grid-cell").eq(0).should("not.have.class", "x");
      cy.get(".grid-cell").eq(0).click();
      cy.get(".grid-cell").eq(0).should("have.class", "x");
    
      cy.get(".current-player").should("contain", "Its O turn");
    
      cy.get(".grid-cell").eq(4).should("not.have.class", "o");
      cy.get(".grid-cell").eq(4).click();
      cy.get(".grid-cell").eq(4).should("have.class", "o");
    
      cy.get(".current-player").should("contain", "Its X turn");
    
      cy.get(".grid-cell").eq(1).should("not.have.class", "x");
      cy.get(".grid-cell").eq(1).click();
      cy.get(".grid-cell").eq(1).should("have.class", "x");
    
      cy.get(".current-player").should("contain", "Its O turn");
    
      cy.get(".grid-cell").eq(8).should("not.have.class", "o");
      cy.get(".grid-cell").eq(8).click();
      cy.get(".grid-cell").eq(8).should("have.class", "o");
    
      cy.get(".current-player").should("contain", "Its X turn");
    
      cy.get(".grid-cell").eq(5).should("not.have.class", "x");
      cy.get(".grid-cell").eq(5).click();
      cy.get(".grid-cell").eq(5).should("have.class", "x");    
     
    
      cy.then(() => {
        acc_score += 2;
      });
    });
    
    
    
    
    it("Check if the click is not allowed on the filled square ", () => {
      cy.visit(url);
    
      cy.get(".grid-cell").eq(0).should("not.have.class", "x");
      cy.get(".grid-cell").eq(0).click({force:true});
      cy.get(".grid-cell").eq(0).should("have.class", "x");
      cy.get(".grid-cell").eq(0).click({force:true});
      cy.get(".grid-cell").eq(0).should("not.have.class", "o");

      cy.get(".grid-cell").eq(1).should("not.have.class", "o");
      cy.get(".grid-cell").eq(1).click({force:true});
      cy.get(".grid-cell").eq(1).should("have.class", "o");
      cy.get(".grid-cell").eq(1).click({force:true});
      cy.get(".grid-cell").eq(1).should("not.have.class", "x");
      
    
      cy.get(".grid-cell").eq(8).should("not.have.class", "x");
      cy.get(".grid-cell").eq(8).click({force:true});
      cy.get(".grid-cell").eq(8).should("have.class", "x");
      cy.get(".grid-cell").eq(8).click({force:true});
      cy.get(".grid-cell").eq(8).should("not.have.class", "o");



      cy.then(() => {
        acc_score += 2;
      });
    });
    
    it("check if click is not allowed after win(not replacing the existing cells textContent or classes)", () => {
      cy.visit(url);
    
      cy.get(".grid-cell").eq(0).click({force:true});
      cy.get(".grid-cell").eq(0).should("have.class", "x");
      cy.get(".grid-cell").eq(1).click({force:true});
      cy.get(".grid-cell").eq(1).should("have.class", "o");
      cy.get(".grid-cell").eq(4).click({force:true});
      cy.get(".grid-cell").eq(4).should("have.class", "x");
      cy.get(".grid-cell").eq(2).click({force:true});
      cy.get(".grid-cell").eq(2).should("have.class", "o");
      cy.get(".grid-cell").eq(8).click({force:true});
      cy.get(".grid-cell").eq(8).should("have.class", "x");    
      cy.get(".grid-cell").eq(5).click({force:true});
      cy.get(".grid-cell").eq(5).should("not.have.class", "x");
      cy.get(".grid-cell").eq(5).should("not.have.class", "o");
    
      cy.then(() => {
        acc_score += 1;
      });
    });
    
    it("Check if the click is not allowed after draw", () => {
      cy.visit(url);    
      cy.get(".grid-cell").eq(0).click({force:true});
      cy.get(".grid-cell").eq(0).should("have.class", "x");
      cy.get(".grid-cell").eq(4).click({force:true});
      cy.get(".grid-cell").eq(4).should("have.class", "o");
      cy.get(".grid-cell").eq(8).click({force:true});
      cy.get(".grid-cell").eq(8).should("have.class", "x");
      cy.get(".grid-cell").eq(6).click({force:true});
      cy.get(".grid-cell").eq(6).should("have.class", "o");
      cy.get(".grid-cell").eq(2).click({force:true});
      cy.get(".grid-cell").eq(5).click({force:true});
      cy.get(".grid-cell").eq(3).click({force:true});
      cy.get(".grid-cell").eq(1).click({force:true});
      cy.get(".grid-cell").eq(7).click({force:true});
      cy.get(".grid-cell").eq(0).click({force:true});
      cy.get(".grid-cell").eq(0).should("not.have.class", "o");
      cy.get(".grid-cell").eq(4).click({force:true});
      cy.get(".grid-cell").eq(4).should("not.have.class", "x");   
      cy.then(() => {
        acc_score += 1;
      });
    });
    
    it("Restart button working as per the expectation", () => {
      cy.visit(url);  
    cy.get(".grid-cell").eq(0).click();
      cy.get(".grid-cell").eq(4).click();
      cy.get(".grid-cell").eq(8).click();
      cy.get(".grid-cell").eq(6).click();
      cy.get(".grid-cell").eq(2).click();
      cy.get(".grid-cell").eq(5).click();
      cy.get(".grid-cell").eq(3).click();
      cy.get(".grid-cell").eq(1).click();
      cy.get(".grid-cell").eq(7).click();    
      cy.get(".game-over-text").should("contain", "Draw!");    
      
      cy.get(".restart").should("be.visible");   
     
      cy.get(".restart").click();
    
      
      cy.get(".grid-cell").should("not.have.class", "disabled");
      cy.get(".grid-cell").should("not.have.class", "x");
      cy.get(".grid-cell").should("not.have.class", "o");
    
     
      cy.get(".current-player").should("contain", "Its X turn");
    
     
   
      cy.then(() => {
        acc_score += 2;
      });
    });
    

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be changed
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});