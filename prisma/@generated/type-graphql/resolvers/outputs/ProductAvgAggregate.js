"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductAvgAggregate = class ProductAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductAvgAggregate.prototype, "quantity", void 0);
ProductAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProductAvgAggregate", {
        isAbstract: true
    })
], ProductAvgAggregate);
exports.ProductAvgAggregate = ProductAvgAggregate;
