((): void => {
    angular.module("githubUserDataFetcherService", []);
})();

module app.Services {
    "use strict";

    export interface IGithubUserDataFetcher {
        getUserInfo(): ng.IPromise<IGithubUser>;
        getUserRepos(): ng.IPromise<IGithubUserRepos>;
    }

    // the properties reflect what we get from the api
    export interface IGithubUser {
        login: string;
        name: string;
        avatar_url: string;
        created_at: string;
        html_url: string;
        public_repos: number;
    }

    export interface IGithubUserRepos {
        repos: IUserRepo[];
    }

    export interface IUserRepo {
        name: string;
        html_url: string;
        language: string;
    }

    class GithubUserDataFetcher implements IGithubUserDataFetcher {

        static $inject = ["$http", "currentUserName"];
        constructor(private $http: ng.IHttpService, private currentUserName: ICurrentUserName) {
        }

        getUserInfo(): ng.IPromise<IGithubUser> {
            return this.$http.get("https://api.github.com/users/" + this.currentUserName.name)
                .then((response: ng.IHttpPromiseCallbackArg<IGithubUser> ): IGithubUser => {
                    return response.data;
                }, (): any => {
                    return null;
                });
        }

        getUserRepos(): ng.IPromise<IGithubUserRepos> {
            console.log(`fetching for name: ${this.currentUserName.name}`);
            return this.$http.get("https://api.github.com/users/" + this.currentUserName.name + "/repos")
                .then((response: ng.IHttpPromiseCallbackArg<IGithubUserRepos>): IGithubUserRepos => {
                    return response.data;
                }, (): any => {
                    return null;
                });
        }
    }

     angular
        .module("githubUserDataFetcherService")
        .service("app.services.GithubUserDataFetcher", GithubUserDataFetcher);
}
