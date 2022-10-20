"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutProductsInput_1 = require("../inputs/OrderCreateWithoutProductsInput");
const OrderUpdateWithoutProductsInput_1 = require("../inputs/OrderUpdateWithoutProductsInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpsertWithWhereUniqueWithoutProductsInput = class OrderUpsertWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpsertWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutProductsInput_1.OrderUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutProductsInput_1.OrderUpdateWithoutProductsInput)
], OrderUpsertWithWhereUniqueWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutProductsInput_1.OrderCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutProductsInput_1.OrderCreateWithoutProductsInput)
], OrderUpsertWithWhereUniqueWithoutProductsInput.prototype, "create", void 0);
OrderUpsertWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], OrderUpsertWithWhereUniqueWithoutProductsInput);
exports.OrderUpsertWithWhereUniqueWithoutProductsInput = OrderUpsertWithWhereUniqueWithoutProductsInput;
