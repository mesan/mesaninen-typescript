((): void => {

    "use strict";


    angular.module("app",
    [
        "currentUserName",
        "githubUserDataFetcherService",
        "githubUserDataModule",
        "templates-app",
        "templates-common"
    ]);

})();
