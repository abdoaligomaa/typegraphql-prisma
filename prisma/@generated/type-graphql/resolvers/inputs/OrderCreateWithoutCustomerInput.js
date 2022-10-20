"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutCustomerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedManyWithoutOrdersInput_1 = require("../inputs/ProductCreateNestedManyWithoutOrdersInput");
let OrderCreateWithoutCustomerInput = class OrderCreateWithoutCustomerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutCustomerInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutCustomerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutCustomerInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutOrdersInput_1.ProductCreateNestedManyWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutOrdersInput_1.ProductCreateNestedManyWithoutOrdersInput)
], OrderCreateWithoutCustomerInput.prototype, "products", void 0);
OrderCreateWithoutCustomerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutCustomerInput", {
        isAbstract: true
    })
], OrderCreateWithoutCustomerInput);
exports.OrderCreateWithoutCustomerInput = OrderCreateWithoutCustomerInput;
