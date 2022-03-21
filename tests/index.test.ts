import { isEven } from "../src"

describe("intro teste 1", () => {

    test("numero é par", () => {

        const valorDaFuncao = isEven(2)
        const valorDaFuncao2 = isEven(100)

        expect(valorDaFuncao).toBe(true)
        expect(valorDaFuncao2).toBe(true)
    })

})