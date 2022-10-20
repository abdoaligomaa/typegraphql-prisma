"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutCategoriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateNestedManyWithoutProductsInput_1 = require("../inputs/OrderCreateNestedManyWithoutProductsInput");
let ProductCreateWithoutCategoriesInput = class ProductCreateWithoutCategoriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutCategoriesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutCategoriesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutCategoriesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutCategoriesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutCategoriesInput.prototype, "sku", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutCategoriesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutCategoriesInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutProductsInput_1.OrderCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutProductsInput_1.OrderCreateNestedManyWithoutProductsInput)
], ProductCreateWithoutCategoriesInput.prototype, "orders", void 0);
ProductCreateWithoutCategoriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutCategoriesInput", {
        isAbstract: true
    })
], ProductCreateWithoutCategoriesInput);
exports.ProductCreateWithoutCategoriesInput = ProductCreateWithoutCategoriesInput;
