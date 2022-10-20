"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutCategoriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutCategoriesInput_1 = require("../inputs/ProductCreateWithoutCategoriesInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutCategoriesInput = class ProductCreateOrConnectWithoutCategoriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutCategoriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutCategoriesInput_1.ProductCreateWithoutCategoriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutCategoriesInput_1.ProductCreateWithoutCategoriesInput)
], ProductCreateOrConnectWithoutCategoriesInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutCategoriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutCategoriesInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutCategoriesInput);
exports.ProductCreateOrConnectWithoutCategoriesInput = ProductCreateOrConnectWithoutCategoriesInput;
