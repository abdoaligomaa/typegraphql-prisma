"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithWhereWithoutCategoriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyMutationInput_1 = require("../inputs/ProductUpdateManyMutationInput");
let ProductUpdateManyWithWhereWithoutCategoriesInput = class ProductUpdateManyWithWhereWithoutCategoriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductScalarWhereInput_1.ProductScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductScalarWhereInput_1.ProductScalarWhereInput)
], ProductUpdateManyWithWhereWithoutCategoriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyMutationInput_1.ProductUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyMutationInput_1.ProductUpdateManyMutationInput)
], ProductUpdateManyWithWhereWithoutCategoriesInput.prototype, "data", void 0);
ProductUpdateManyWithWhereWithoutCategoriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateManyWithWhereWithoutCategoriesInput", {
        isAbstract: true
    })
], ProductUpdateManyWithWhereWithoutCategoriesInput);
exports.ProductUpdateManyWithWhereWithoutCategoriesInput = ProductUpdateManyWithWhereWithoutCategoriesInput;
