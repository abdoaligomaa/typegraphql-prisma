"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderAvgAggregate = class OrderAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderAvgAggregate.prototype, "userId", void 0);
OrderAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderAvgAggregate", {
        isAbstract: true
    })
], OrderAvgAggregate);
exports.OrderAvgAggregate = OrderAvgAggregate;
