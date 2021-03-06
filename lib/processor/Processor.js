"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var Processor = (function () {
    function Processor(results, config) {
        if (!fs.existsSync("./report")) {
            fs.mkdirSync("./report");
        }
        this.createReportJSON(results);
        this.createReportHTML();
        this.createReportJS();
        this.createAssets();
        console.log("Report generated.");
    }
    Processor.run = function (results, config) {
        return new Processor(results, config);
    };
    Processor.prototype.createReportJSON = function (results) {
        fs.writeFileSync("./report/report.json", JSON.stringify(__assign({}, results), null, 2));
    };
    Processor.prototype.createReportHTML = function () {
        var html = fs.readFileSync(path.resolve(__dirname, "../renderer/index.html"));
        fs.writeFileSync("./report/index.html", html);
    };
    Processor.prototype.createReportJS = function () {
        var js = fs.readFileSync(path.resolve(__dirname, "../renderer/main.js"));
        fs.writeFileSync("./report/main.js", js);
    };
    Processor.prototype.createAssets = function () {
        var favicon = fs.readFileSync(path.resolve(__dirname, "../renderer/favicon.ico"));
        fs.writeFileSync("./report/favicon.ico", favicon);
    };
    return Processor;
}());
exports.Processor = Processor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Byb2Nlc3Nvci9Qcm9jZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUEwQjtBQUMxQiwyQkFBOEI7QUFFOUI7SUFLRSxtQkFBWSxPQUE4QixFQUFFLE1BQVU7UUFDcEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDOUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxQjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBZmEsYUFBRyxHQUFqQixVQUFrQixPQUE4QixFQUFFLE1BQVU7UUFDMUQsT0FBTyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQWVNLG9DQUFnQixHQUF2QixVQUF3QixPQUE4QjtRQUNwRCxFQUFFLENBQUMsYUFBYSxDQUNkLHNCQUFzQixFQUN0QixJQUFJLENBQUMsU0FBUyxjQUFNLE9BQU8sR0FBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQ3hDLENBQUM7SUFDSixDQUFDO0lBRU0sb0NBQWdCLEdBQXZCO1FBQ0UsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLENBQUMsQ0FDbEQsQ0FBQztRQUNGLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLGtDQUFjLEdBQXJCO1FBQ0UsSUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sZ0NBQVksR0FBbkI7UUFDRSxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSx5QkFBeUIsQ0FBQyxDQUNuRCxDQUFDO1FBRUYsRUFBRSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLDhCQUFTIn0=