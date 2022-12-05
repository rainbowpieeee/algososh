import { CIRCLE_CIRCLE, CIRCLE_CONTENT, CIRCLE_SMALL, INPUT, INPUT_INDEX, INPUT_VALUE, INPUT_ADD_HEAD, 
  INPUT_ADD_INDEX, INPUT_ADD_TAIL, INPUT_DEL_HEAD, INPUT_DEL_INDEX, INPUT_DEL_TAIL, BORDER, COLOR_DEFAULT, COLOR_PROCC, COLOR_READY } from "../../src/constants/test";
import { SHORT_DELAY_IN_MS } from "../../src/constants/delays";

describe("list component works correctly", () => {
  beforeEach(() => {
    cy.visit("/list");
  });

  describe("check the button's status", () => {
    it("If the input is empty, then the add buttons are not available", () => {
      cy.get(INPUT).should("have.value", "");
      cy.contains(INPUT_ADD_HEAD).should("be.disabled");
      cy.contains(INPUT_ADD_TAIL).should("be.disabled");
      cy.contains(INPUT_DEL_HEAD).should("not.be.disabled");
      cy.contains(INPUT_DEL_TAIL).should("not.be.disabled");
      cy.contains(INPUT_ADD_INDEX).should("be.disabled");
      cy.contains(INPUT_DEL_INDEX).should("be.disabled");
    });

    it("If the value input is not empty, then the add button is available", () => {
      cy.get(INPUT_VALUE).type("239");
      cy.contains(INPUT_ADD_HEAD).should("not.be.disabled");
      cy.contains(INPUT_ADD_TAIL).should("not.be.disabled");
      cy.contains(INPUT_DEL_HEAD).should("not.be.disabled");
      cy.contains(INPUT_DEL_TAIL).should("not.be.disabled");
      cy.contains(INPUT_ADD_INDEX).should("be.disabled");
      cy.contains(INPUT_DEL_INDEX).should("be.disabled");
    });

    it("If the value and index inputs are not empty, then the add by index button is available", () => {
      cy.get(INPUT_VALUE).type("239");
      cy.get(INPUT_INDEX).type("2");
      cy.contains(INPUT_ADD_HEAD).should("not.be.disabled");
      cy.contains(INPUT_ADD_TAIL).should("not.be.disabled");
      cy.contains(INPUT_DEL_HEAD).should("not.be.disabled");
      cy.contains(INPUT_DEL_TAIL).should("not.be.disabled");
      cy.contains(INPUT_ADD_INDEX).should("not.be.disabled");
      cy.contains(INPUT_DEL_INDEX).should("not.be.disabled");
    });

    it("If the index input is not empty, then the delete by index button is available", () => {
      cy.get(INPUT_INDEX).type("2");
      cy.contains(INPUT_ADD_HEAD).should("be.disabled");
      cy.contains(INPUT_ADD_TAIL).should("be.disabled");
      cy.contains(INPUT_DEL_HEAD).should("not.be.disabled");
      cy.contains(INPUT_DEL_TAIL).should("not.be.disabled");
      cy.contains(INPUT_ADD_INDEX).should("be.disabled");
      cy.contains(INPUT_DEL_INDEX).should("not.be.disabled");
    });
  });

  describe("check the linked list algo and render works correctly", () => {
    it("Check render a default linked list", () => {
      cy.get(CIRCLE_CONTENT)
        .should("have.length", 4)
        .each(($item, index) => {
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT);
          if (index === 0) {
            expect($item).to.contain("head");
          }
          if (index === 5) {
            expect($item).to.contain("tail");
          }
        });
    });

    it("Check add node to the head of the linked list", () => {
      cy.get(INPUT_VALUE).type("239");
      cy.contains(INPUT_ADD_HEAD).click();

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          cy.wrap($item)
            .siblings()
            .find(CIRCLE_SMALL)
            .should("have.css", BORDER, COLOR_PROCC)
            .should("have.text", "239");
        }
      });

      cy.wait(SHORT_DELAY_IN_MS);

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_READY)
            .should("have.text", "239");
        }
      });

      cy.wait(SHORT_DELAY_IN_MS);

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          expect($item).to.contain("head");
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT)
            .should("have.text", "239");
        }
      });
    });

    it("Check add node to the tail of the linked list", () => {
      cy.get(INPUT_VALUE).type("239");
      cy.contains(INPUT_ADD_TAIL).click();

      for (let i = 0; i <= 6; i++) {
        cy.get(CIRCLE_CONTENT).each(($item, index) => {
          let currentIdx = i;
          if (index < currentIdx)
            cy.wrap($item)
              .find(CIRCLE_CIRCLE)
              .should("have.css", BORDER, COLOR_DEFAULT);
          if (index === currentIdx) {
            cy.wrap($item)
              .siblings()
              .find(CIRCLE_SMALL)
              .should("have.css", BORDER, COLOR_PROCC)
              .should("have.text", "239");
          }
        });

        cy.wait(SHORT_DELAY_IN_MS);
      }

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 6) {
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_READY)
            .should("have.text", "239");
        }
      });

      cy.wait(SHORT_DELAY_IN_MS);

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 6) {
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT)
            .should("have.text", "239");
          expect($item).to.contain("tail");
        }
      });
    });

    it("Check add node by index to the linked list", () => {
      cy.get(INPUT_VALUE).type("239");
      cy.get(INPUT_INDEX).type("3");
      cy.contains(INPUT_ADD_INDEX).click();

      for (let i = 0; i <= 3; i++) {
        cy.get(CIRCLE_CONTENT).each(($item, index) => {
          let currentIdx = i;
          if (index < currentIdx)
            cy.wrap($item)
              .find(CIRCLE_CIRCLE)
              .should("have.css", BORDER, COLOR_DEFAULT);
          if (index === currentIdx) {
            cy.wrap($item)
              .siblings()
              .find(CIRCLE_SMALL)
              .should("have.css", BORDER, COLOR_PROCC)
              .should("have.text", "239");
          }
        });

        cy.wait(SHORT_DELAY_IN_MS);
      }

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 3) {
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_READY)
            .should("have.text", "239");
        }
      });

      cy.wait(SHORT_DELAY_IN_MS);

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 3) {
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT)
            .should("have.text", "239");
          expect($item).to.contain("3");
        }
      });
    });

    it("Check remove node from the head of the linked list", () => {
      cy.contains(INPUT_DEL_HEAD).click();

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          cy.wrap($item)
            .siblings()
            .find(CIRCLE_SMALL)
            .should("have.css", BORDER, COLOR_PROCC)
            .should("not.have.text", "");
        }
      });

      cy.wait(SHORT_DELAY_IN_MS);

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT);
        }
      });

      cy.wait(SHORT_DELAY_IN_MS);

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          expect($item).to.contain("head");
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT);
        }
      });
    });

    it("Check remove node from the tail of the linked list", () => {
      cy.contains(INPUT_DEL_TAIL).click();

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 5) {
          cy.wrap($item)
            .siblings()
            .find(CIRCLE_SMALL)
            .should("have.css", BORDER, COLOR_PROCC)
            .should("not.have.text", "");
        }
      });

      cy.wait(SHORT_DELAY_IN_MS);

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 5) {
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_READY);
        }
      });

      cy.wait(SHORT_DELAY_IN_MS);

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 5) {
          expect($item).to.contain("tail");
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT);
        }
      });
    });

    it("Check remove node by index", () => {
      cy.get(INPUT_VALUE).type("239");
      cy.get(INPUT_INDEX).type("3");
      cy.contains(INPUT_DEL_INDEX).click();

      for (let i = 0; i <= 3; i++) {
        cy.get(CIRCLE_CONTENT).each(($item, index) => {
          let currentIdx = i;
          if (index <= currentIdx)
            cy.wrap($item)
              .find(CIRCLE_CIRCLE)
              .should("have.css", BORDER, COLOR_DEFAULT);
        });
        cy.wait(SHORT_DELAY_IN_MS);
      }
      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 3) {
          cy.wrap($item)
            .siblings()
            .find(CIRCLE_SMALL)
            .should("have.css", BORDER, COLOR_PROCC)
            .should("not.have.text", "");
        }
      });

      cy.wait(SHORT_DELAY_IN_MS);

      cy.get(CIRCLE_CONTENT).each(($item) => {
        cy.wrap($item)
          .find(CIRCLE_CIRCLE)
          .should("have.css", BORDER, COLOR_DEFAULT);
      });
    });
  });
});

/*
Список

    Проверьте, что если в инпуте пусто,
    то кнопка добавления недоступна,
    кнопки добавления по индексу и удаления по индексу недоступны тоже.
      
    Проверьте корректность:
        отрисовки дефолтного списка.
        добавления элемента в head.
        добавления элемента в tail.
        добавления элемента по индексу.
        удаления элемента из head.
        удаления элемента из tail.
        удаления элемента по индексу.
*/