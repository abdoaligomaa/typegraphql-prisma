"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductCount = class ProductCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCount.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCount.prototype, "orders", void 0);
ProductCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProductCount", {
        isAbstract: true
    })
], ProductCount);
exports.ProductCount = ProductCount;
