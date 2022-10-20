"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutProductsInput_1 = require("../inputs/OrderCreateWithoutProductsInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutProductsInput = class OrderCreateOrConnectWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutProductsInput_1.OrderCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutProductsInput_1.OrderCreateWithoutProductsInput)
], OrderCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutProductsInput", {
        isAbstract: true
    })
], OrderCreateOrConnectWithoutProductsInput);
exports.OrderCreateOrConnectWithoutProductsInput = OrderCreateOrConnectWithoutProductsInput;
