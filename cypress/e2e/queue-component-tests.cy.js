import { CIRCLE_CIRCLE, CIRCLE_CONTENT, INPUT, BUTTON__ADD, BUTTON__DELETE, BUTTON__CLEAR, BORDER, COLOR_DEFAULT, COLOR_PROCC } from "../../src/constants/test";
import { SHORT_DELAY_IN_MS } from "../../src/constants/delays";

describe("queue component works correctly", () => {
  beforeEach(() => {
    cy.visit("/queue");
  });

  describe("check the button's status", () => {
    it("If the input is empty, then the add button is not available", () => {
      cy.get(INPUT).should("have.value", "");
      cy.contains(BUTTON__ADD).should("be.disabled");
    });

    it("If the input is not empty, then the add button is available", () => {
      cy.get(INPUT).type("239");
      cy.contains(BUTTON__ADD).should("not.be.disabled");
      cy.contains(BUTTON__DELETE).should("be.disabled");
      cy.contains(BUTTON__CLEAR).should("be.disabled");
    });

    it("After adding the element, then the clear and del buttons is available", () => {
      cy.get(INPUT).type("239");
      cy.contains(BUTTON__ADD).click();
      cy.contains(BUTTON__ADD).should("be.disabled");
      cy.contains(BUTTON__DELETE).should("not.be.disabled");
      cy.contains(BUTTON__CLEAR).should("not.be.disabled");
    });

    it("After clear the queue, then all buttons is not available", () => {
      cy.get(INPUT).type("239");
      cy.contains(BUTTON__ADD).click();
      cy.get(INPUT).type("fml");
      cy.contains(BUTTON__ADD).click();
      cy.get(INPUT).clear();
      cy.contains(BUTTON__CLEAR).click();
      cy.contains(BUTTON__ADD).should("be.disabled");
      cy.contains(BUTTON__DELETE).should("be.disabled");
      cy.contains(BUTTON__CLEAR).should("be.disabled");
    });
  });

  describe("check the queue algo and render works correctly", () => {
    it("Check add elements", () => {
      //add an element
      cy.get(INPUT).type("Y");
      cy.contains(BUTTON__ADD).click();

      //checking content
      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          expect($item).to.contain("Y");
          expect($item).to.contain("0");
          expect($item).to.contain("head");
          expect($item).to.contain("tail");
        }
      });

      //checking rendering
      cy.get(CIRCLE_CIRCLE)
        .should("have.length", 7)
        .each(($item, index) => {
          if (index === 0) {
            cy.wrap($item).should(
              "have.css",
              BORDER,
              COLOR_PROCC
            );
          }
        });

      cy.wait(SHORT_DELAY_IN_MS);

      //checking rendering
      cy.get(CIRCLE_CIRCLE)
        .should("have.length", 7)
        .each(($item, index) => {
          if (index === 0) {
            cy.wrap($item).should(
              "have.css",
              BORDER,
              COLOR_DEFAULT
            );
          }
        });

      //add an element
      cy.get(INPUT).type("E");
      cy.contains(BUTTON__ADD).click();

      //checking content
      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          expect($item).to.contain("Y");
          expect($item).to.contain("0");
          expect($item).to.contain("head");
        }
        if (index === 1) {
          expect($item).to.contain("E");
          expect($item).to.contain("1");
          expect($item).to.contain("tail");
        }
      });

      //checking rendering
      cy.get(CIRCLE_CIRCLE)
        .should("have.length", 7)
        .each(($item, index) => {
          if (index === 1) {
            cy.wrap($item).should(
              "have.css",
              BORDER,
              COLOR_PROCC
            );
          }
        });

      cy.wait(SHORT_DELAY_IN_MS);

      //checking rendering
      cy.get(CIRCLE_CIRCLE)
        .should("have.length", 7)
        .each(($item, index) => {
          if (index === 1) {
            cy.wrap($item).should(
              "have.css",
              BORDER,
              COLOR_DEFAULT
            );
          }
        });

      //add an element
      cy.get(INPUT).type("S");
      cy.contains(BUTTON__ADD).click();

      //checking content
      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          expect($item).to.contain("Y");
          expect($item).to.contain("0");
          expect($item).to.contain("head");
        }
        if (index === 1) {
          expect($item).to.contain("E");
          expect($item).to.contain("1");
        }
        if (index === 2) {
          expect($item).to.contain("S");
          expect($item).to.contain("2");
          expect($item).to.contain("tail");
        }
      });

      //checking rendering
      cy.get(CIRCLE_CIRCLE)
        .should("have.length", 7)
        .each(($item, index) => {
          if (index === 2) {
            cy.wrap($item).should(
              "have.css",
              BORDER,
              COLOR_PROCC
            );
          }
        });

      cy.wait(SHORT_DELAY_IN_MS);

      //checking rendering
      cy.get(CIRCLE_CIRCLE)
        .should("have.length", 7)
        .each(($item, index) => {
          if (index === 2) {
            cy.wrap($item).should(
              "have.css",
              BORDER,
              COLOR_DEFAULT
            );
          }
        });
    });

    it("Check remove elements", () => {
      // first add some elements
      cy.get(INPUT).type("2");
      cy.contains(BUTTON__ADD).click();
      cy.wait(SHORT_DELAY_IN_MS);
      cy.get(INPUT).type("3");
      cy.contains(BUTTON__ADD).click();
      cy.wait(SHORT_DELAY_IN_MS);
      cy.get(INPUT).type("9");
      cy.contains(BUTTON__ADD).click();
      cy.wait(SHORT_DELAY_IN_MS);

      //checking content
      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          expect($item).to.contain("2");
          expect($item).to.contain("0");
          expect($item).to.contain("head");
        }
        if (index === 1) {
          expect($item).to.contain("3");
          expect($item).to.contain("1");
        }
        if (index === 2) {
          expect($item).to.contain("9");
          expect($item).to.contain("2");
          expect($item).to.contain("tail");
        }
      });

      //delete an element
      cy.contains(BUTTON__DELETE).click();

      cy.get(CIRCLE_CIRCLE)
        .should("have.length", 7)
        .each(($item, index) => {
          if (index === 0)
            cy.wrap($item).should(
              "have.css",
              BORDER,
              COLOR_PROCC
            );
        });

      cy.wait(SHORT_DELAY_IN_MS);

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          expect($item).to.not.contain("2");
          expect($item).to.not.contain("head");
          expect($item).to.not.contain("tail");
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT);
        }
        if (index === 1) {
          expect($item).contain("3");
          expect($item).contain("head");
          expect($item).to.not.contain("tail");
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT);
        }
        if (index === 2) {
          expect($item).contain("9");
          expect($item).to.not.contain("head");
          expect($item).contain("tail");
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT);
        }
      });

      //delete an element
      cy.contains(BUTTON__DELETE).click();

      cy.get(CIRCLE_CIRCLE)
        .should("have.length", 7)
        .each(($item, index) => {
          if (index === 1)
            cy.wrap($item).should(
              "have.css",
              BORDER,
              COLOR_PROCC
            );
        });

      cy.wait(SHORT_DELAY_IN_MS);

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          expect($item).to.not.contain("2");
          expect($item).to.not.contain("head");
          expect($item).to.not.contain("tail");
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT);
        }
        if (index === 1) {
          expect($item).to.not.contain("3");
          expect($item).to.not.contain("head");
          expect($item).to.not.contain("tail");
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT);
        }
        if (index === 2) {
          expect($item).contain("9");
          expect($item).contain("head");
          expect($item).contain("tail");
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT);
        }
      });

      //delete an element
      cy.contains(BUTTON__DELETE).click();

      cy.wait(SHORT_DELAY_IN_MS);

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          expect($item).to.not.contain("2");
          expect($item).to.not.contain("head");
          expect($item).to.not.contain("tail");
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT);
        }
        if (index === 1) {
          expect($item).to.not.contain("3");
          expect($item).to.not.contain("head");
          expect($item).to.not.contain("tail");
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT);
        }
        if (index === 2) {
          expect($item).to.not.contain("9");
          expect($item).to.not.contain("head");
          expect($item).to.not.contain("tail");
          cy.wrap($item)
            .find(CIRCLE_CIRCLE)
            .should("have.css", BORDER, COLOR_DEFAULT);
        }
      });
    });

    it("Check clear queue", () => {
      cy.get(INPUT).type("2");
      cy.contains(BUTTON__ADD).click();
      cy.wait(SHORT_DELAY_IN_MS);
      cy.get(INPUT).type("3");
      cy.contains(BUTTON__ADD).click();
      cy.wait(SHORT_DELAY_IN_MS);
      cy.get(INPUT).type("9");
      cy.contains(BUTTON__ADD).click();
      cy.wait(SHORT_DELAY_IN_MS);

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          expect($item).to.contain("2");
          expect($item).to.contain("head");
          expect($item).to.contain("0");
        }
        if (index === 1) {
          expect($item).to.contain("3");
          expect($item).to.contain("1");
        }
        if (index === 2) {
          expect($item).to.contain("9");
          expect($item).to.contain("2");
          expect($item).to.contain("tail");
        }
      });

      cy.contains(BUTTON__CLEAR).click();
      cy.wait(SHORT_DELAY_IN_MS * 3);

      cy.get(CIRCLE_CONTENT).each(($item, index) => {
        if (index === 0) {
          expect($item).to.not.contain("2");
          expect($item).to.not.contain("head");
          expect($item).to.contain("0");
        }
        if (index === 1) {
          expect($item).to.not.contain("3");
          expect($item).to.contain("1");
        }
        if (index === 2) {
          expect($item).to.not.contain("9");
          expect($item).to.contain("2");
          expect($item).to.not.contain("tail");
        }
      });
    });
  });
});

/*
Очередь
    Проверьте, что если в инпуте пусто, то кнопка добавления недоступна.
    Проверьте, правильность добавления элемента в очередь. Необходимо убедиться,
     что цвета элементов меняются и каждый шаг анимации отрабатывает корректно.
      Не забудьте проверить, что курсоры head и tail отрисовываются корректно.
    Проверить правильность удаления элемента из очереди.
    Проверьте поведение кнопки «Очистить».
     Добавьте в очередь несколько элементов, по нажатию на кнопку «Очистить» длина очереди должна быть равна 0.
*/