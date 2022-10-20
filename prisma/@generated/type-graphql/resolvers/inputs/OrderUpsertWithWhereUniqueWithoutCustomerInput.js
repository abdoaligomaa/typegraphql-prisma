"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithWhereUniqueWithoutCustomerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutCustomerInput_1 = require("../inputs/OrderCreateWithoutCustomerInput");
const OrderUpdateWithoutCustomerInput_1 = require("../inputs/OrderUpdateWithoutCustomerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpsertWithWhereUniqueWithoutCustomerInput = class OrderUpsertWithWhereUniqueWithoutCustomerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpsertWithWhereUniqueWithoutCustomerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutCustomerInput_1.OrderUpdateWithoutCustomerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutCustomerInput_1.OrderUpdateWithoutCustomerInput)
], OrderUpsertWithWhereUniqueWithoutCustomerInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutCustomerInput_1.OrderCreateWithoutCustomerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutCustomerInput_1.OrderCreateWithoutCustomerInput)
], OrderUpsertWithWhereUniqueWithoutCustomerInput.prototype, "create", void 0);
OrderUpsertWithWhereUniqueWithoutCustomerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutCustomerInput", {
        isAbstract: true
    })
], OrderUpsertWithWhereUniqueWithoutCustomerInput);
exports.OrderUpsertWithWhereUniqueWithoutCustomerInput = OrderUpsertWithWhereUniqueWithoutCustomerInput;
