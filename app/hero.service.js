System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeroService;
    return {
        setters:[],
        execute: function() {
            HeroService = (function () {
                function HeroService(_backend, _logger) {
                    this._backend = _backend;
                    this._logger = _logger;
                    this._heroes = [];
                }
                HeroService.prototype.getHeroes = function () {
                    var _this = this;
                    this._backend.getAll(Hero).then(function (heroes) {
                        _this._logger.log("Fetched");
                        (_a = _this._heroes).push.apply(_a, heroes);
                        var _a;
                    });
                    return this._heroes;
                };
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map