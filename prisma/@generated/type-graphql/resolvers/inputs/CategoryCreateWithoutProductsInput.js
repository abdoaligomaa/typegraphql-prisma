"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoryCreateWithoutProductsInput = class CategoryCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryCreateWithoutProductsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryCreateWithoutProductsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutProductsInput.prototype, "name", void 0);
CategoryCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateWithoutProductsInput", {
        isAbstract: true
    })
], CategoryCreateWithoutProductsInput);
exports.CategoryCreateWithoutProductsInput = CategoryCreateWithoutProductsInput;
