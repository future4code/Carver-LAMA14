"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("intro teste 1", () => {
    test("numero é par", () => {
        const valorDaFuncao = (0, src_1.isEven)(2);
        const valorDaFuncao2 = (0, src_1.isEven)(100);
        expect(valorDaFuncao).toBe(true);
        expect(valorDaFuncao2).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map