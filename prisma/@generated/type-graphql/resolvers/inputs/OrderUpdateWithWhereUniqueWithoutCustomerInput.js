"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithWhereUniqueWithoutCustomerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateWithoutCustomerInput_1 = require("../inputs/OrderUpdateWithoutCustomerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateWithWhereUniqueWithoutCustomerInput = class OrderUpdateWithWhereUniqueWithoutCustomerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateWithWhereUniqueWithoutCustomerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutCustomerInput_1.OrderUpdateWithoutCustomerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutCustomerInput_1.OrderUpdateWithoutCustomerInput)
], OrderUpdateWithWhereUniqueWithoutCustomerInput.prototype, "data", void 0);
OrderUpdateWithWhereUniqueWithoutCustomerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutCustomerInput", {
        isAbstract: true
    })
], OrderUpdateWithWhereUniqueWithoutCustomerInput);
exports.OrderUpdateWithWhereUniqueWithoutCustomerInput = OrderUpdateWithWhereUniqueWithoutCustomerInput;
