"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutCategoriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutCategoriesInput_1 = require("../inputs/ProductUpdateWithoutCategoriesInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutCategoriesInput = class ProductUpdateWithWhereUniqueWithoutCategoriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutCategoriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutCategoriesInput_1.ProductUpdateWithoutCategoriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutCategoriesInput_1.ProductUpdateWithoutCategoriesInput)
], ProductUpdateWithWhereUniqueWithoutCategoriesInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutCategoriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutCategoriesInput", {
        isAbstract: true
    })
], ProductUpdateWithWhereUniqueWithoutCategoriesInput);
exports.ProductUpdateWithWhereUniqueWithoutCategoriesInput = ProductUpdateWithWhereUniqueWithoutCategoriesInput;
