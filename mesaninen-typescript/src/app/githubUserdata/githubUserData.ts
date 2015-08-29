((): void => {
    "use strict";
    angular.module("githubUserDataModule", []);
})();

module app.GithubUserData {
    "use strict";

    // in TypeScript, we define an interface for our scope
    interface IGithubUserDataScope {
        repos: Services.IGithubUserRepos;
        user: Services.IGithubUser;
        userName: string;
        fetch(): void;
        isAvailable(): boolean;
    }

    class GithubUserDataCtrl implements IGithubUserDataScope {
        static $inject = ["app.services.GithubUserDataFetcher", "currentUserName"];

        user: Services.IGithubUser;
        repos: Services.IGithubUserRepos;
        userName: string;

        constructor(private githubUserDataServiceFetcher: Services.IGithubUserDataFetcher,
            private currentUserName: ICurrentUserName) {
            const vm = this;
            vm.userName = "";
            vm.user = null;
            vm.repos = null;
        }

        fetch(): void {
            this.currentUserName.name = this.userName;
            this.getUserData();
            this.getUserRepos();
        }

        isAvailable(): boolean {
            return this.userName !== "" && this.user !== null && this.repos !== null;
        }

        private getUserData(): void {
            this.githubUserDataServiceFetcher.getUserInfo()
                .then((userData: Services.IGithubUser): void => { this.user = userData || null; });
        }

        private getUserRepos(): void {
            this.githubUserDataServiceFetcher.getUserRepos()
                .then((userRepos: Services.IGithubUserRepos): void => { this.repos = userRepos || null; });
        }
    }

    angular
        .module("githubUserDataModule")
        .controller("app.GithubUserData.GithubUserDataCtrl", GithubUserDataCtrl);
}

((): void => {
    "use strict";

    function githubUserDataDir(): ng.IDirective {
        return <ng.IDirective> {
            controller: "app.GithubUserData.GithubUserDataCtrl",
            controllerAs: "currentUser",
            restrict: "A",
            templateUrl: "githubUserdata/githubUserData.tpl.html"
        };
    }

    function githubUserDataInfoDir(): ng.IDirective {
        return <ng.IDirective> {
            restrict: "A",
            templateUrl: "githubUserdata/githubUserDataInfo.tpl.html"
        };
    }

    function githubUserDataReposDir(): ng.IDirective {
        return <ng.IDirective> {
            restrict: "A",
            templateUrl: "githubUserdata/githubUserDataRepos.tpl.html"
        };
    }

    angular
        .module("githubUserDataModule")
        .directive("ngcGithubUserData", githubUserDataDir)
        .directive("ngcGithubUserDataInfo", githubUserDataInfoDir)
        .directive("ngcGithubUserDataRepos", githubUserDataReposDir);
})();
