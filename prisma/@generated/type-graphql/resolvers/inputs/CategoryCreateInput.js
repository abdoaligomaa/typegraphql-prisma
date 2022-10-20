"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedManyWithoutCategoriesInput_1 = require("../inputs/ProductCreateNestedManyWithoutCategoriesInput");
let CategoryCreateInput = class CategoryCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutCategoriesInput_1.ProductCreateNestedManyWithoutCategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutCategoriesInput_1.ProductCreateNestedManyWithoutCategoriesInput)
], CategoryCreateInput.prototype, "products", void 0);
CategoryCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateInput", {
        isAbstract: true
    })
], CategoryCreateInput);
exports.CategoryCreateInput = CategoryCreateInput;
