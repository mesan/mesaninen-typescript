// defining an Angular value in TypeScript
interface ICurrentUserName {
    name: string;
}

((): void => {
    "use strict";
    const currentUserName: ICurrentUserName = {
        name: ""
    };
    angular
        .module("currentUserName", [])
        .value("currentUserName", currentUserName);
})();
