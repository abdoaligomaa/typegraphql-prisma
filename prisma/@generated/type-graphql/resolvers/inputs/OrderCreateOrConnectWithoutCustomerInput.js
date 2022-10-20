"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutCustomerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutCustomerInput_1 = require("../inputs/OrderCreateWithoutCustomerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutCustomerInput = class OrderCreateOrConnectWithoutCustomerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutCustomerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutCustomerInput_1.OrderCreateWithoutCustomerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutCustomerInput_1.OrderCreateWithoutCustomerInput)
], OrderCreateOrConnectWithoutCustomerInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutCustomerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutCustomerInput", {
        isAbstract: true
    })
], OrderCreateOrConnectWithoutCustomerInput);
exports.OrderCreateOrConnectWithoutCustomerInput = OrderCreateOrConnectWithoutCustomerInput;
