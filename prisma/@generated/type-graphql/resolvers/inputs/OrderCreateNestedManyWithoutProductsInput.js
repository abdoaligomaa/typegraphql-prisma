"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateOrConnectWithoutProductsInput_1 = require("../inputs/OrderCreateOrConnectWithoutProductsInput");
const OrderCreateWithoutProductsInput_1 = require("../inputs/OrderCreateWithoutProductsInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedManyWithoutProductsInput = class OrderCreateNestedManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutProductsInput_1.OrderCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutProductsInput_1.OrderCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutProductsInput.prototype, "connect", void 0);
OrderCreateNestedManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedManyWithoutProductsInput", {
        isAbstract: true
    })
], OrderCreateNestedManyWithoutProductsInput);
exports.OrderCreateNestedManyWithoutProductsInput = OrderCreateNestedManyWithoutProductsInput;
