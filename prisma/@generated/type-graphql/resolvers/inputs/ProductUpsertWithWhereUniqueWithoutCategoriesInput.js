"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutCategoriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutCategoriesInput_1 = require("../inputs/ProductCreateWithoutCategoriesInput");
const ProductUpdateWithoutCategoriesInput_1 = require("../inputs/ProductUpdateWithoutCategoriesInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutCategoriesInput = class ProductUpsertWithWhereUniqueWithoutCategoriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutCategoriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutCategoriesInput_1.ProductUpdateWithoutCategoriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutCategoriesInput_1.ProductUpdateWithoutCategoriesInput)
], ProductUpsertWithWhereUniqueWithoutCategoriesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutCategoriesInput_1.ProductCreateWithoutCategoriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutCategoriesInput_1.ProductCreateWithoutCategoriesInput)
], ProductUpsertWithWhereUniqueWithoutCategoriesInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutCategoriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutCategoriesInput", {
        isAbstract: true
    })
], ProductUpsertWithWhereUniqueWithoutCategoriesInput);
exports.ProductUpsertWithWhereUniqueWithoutCategoriesInput = ProductUpsertWithWhereUniqueWithoutCategoriesInput;
