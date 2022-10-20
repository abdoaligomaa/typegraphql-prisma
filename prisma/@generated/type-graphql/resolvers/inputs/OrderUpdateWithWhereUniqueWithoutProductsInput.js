"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateWithoutProductsInput_1 = require("../inputs/OrderUpdateWithoutProductsInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateWithWhereUniqueWithoutProductsInput = class OrderUpdateWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutProductsInput_1.OrderUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutProductsInput_1.OrderUpdateWithoutProductsInput)
], OrderUpdateWithWhereUniqueWithoutProductsInput.prototype, "data", void 0);
OrderUpdateWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], OrderUpdateWithWhereUniqueWithoutProductsInput);
exports.OrderUpdateWithWhereUniqueWithoutProductsInput = OrderUpdateWithWhereUniqueWithoutProductsInput;
