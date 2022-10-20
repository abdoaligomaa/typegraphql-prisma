"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutOrdersInput_1 = require("../inputs/UserCreateNestedOneWithoutOrdersInput");
let OrderCreateWithoutProductsInput = class OrderCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutProductsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutProductsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOrdersInput_1.UserCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutOrdersInput_1.UserCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutProductsInput.prototype, "customer", void 0);
OrderCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutProductsInput", {
        isAbstract: true
    })
], OrderCreateWithoutProductsInput);
exports.OrderCreateWithoutProductsInput = OrderCreateWithoutProductsInput;
