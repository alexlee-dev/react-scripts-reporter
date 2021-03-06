"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reporter_1 = require("./reporter/Reporter");
var Processor_1 = require("./processor/Processor");
function entry(parm0, parm1) {
    if (this instanceof entry) {
        return new Reporter_1.Reporter(parm0, parm1);
    }
    else {
        return Processor_1.Processor.run(parm0, parm1);
    }
}
exports.entry = entry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBK0M7QUFDL0MsbURBQWtEO0FBRWxELFNBQWdCLEtBQUssQ0FBWSxLQUFVLEVBQUUsS0FBVztJQUN0RCxJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7UUFDekIsT0FBTyxJQUFJLG1CQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ25DO1NBQU07UUFDTCxPQUFPLHFCQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNwQztBQUNILENBQUM7QUFORCxzQkFNQyJ9