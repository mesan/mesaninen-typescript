# mesaninen-typescript

TypeScript og AngularJS.

### Oppsett

Prosjektet tar utgangspunkt i ng-boilerplate, og er satt opp med tslint.

Installer [node.js](https://nodejs.org/) hvis det ikke allerede finnes på maskinen, deretter kjør:

```sh
$ git clone https://github.com/mesan/mesaninen-typescript.git
$ cd mesaninen-typescript/mesaninen-typescript
$ sudo npm -g install grunt-cli karma bower tslint
$ npm install
$ bower install
$ grunt watch
```

Åpne filen `file:/build/index.html` i browseren din.

### Valg av editor/IDE

Nyeste versjon av TypeScript er 1.5.

Du står fritt til å bruke det du vil, men TypeScript håndteres meget bra av Visual Studio da man får kompileringsfeil etc direkte i IDE'et. Visual Studio vil automatisk kompilere .ts filen til .js når man lagrer og kompilere samtlige .ts filer til .js ved bygg (Ctrl-shift-b). Hvis du velger å bruke noe annet enn Visual Studio kan grunt konfigureres til å generere JavaScript filer. 

Hvis du har **Visual Studio 2013** må det lastes ned et tillegg for å få støtte TypeScript 1.5. Denne finnes på http://www.typescriptlang.org/.
Hvis du har **Visual Studio 2015** trengs det ikke gjøre noe, da den kommer fiks ferdig med TypeScript 1.5 rett ut fra fabrikken!

