/// <reference path="../../Scripts/typings/jasmine/jasmine.d.ts" />

describe("Testing the main module", (): void => {

    beforeEach(module("app"));

    it("should pass a dummy test", (): void => {
        expect("Hello TypeScript").toBe("Hello TypeScript");
    });
});
