"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoryCount = class CategoryCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CategoryCount.prototype, "products", void 0);
CategoryCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategoryCount", {
        isAbstract: true
    })
], CategoryCount);
exports.CategoryCount = CategoryCount;
