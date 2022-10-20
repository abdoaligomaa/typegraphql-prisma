"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedManyWithoutCustomerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyCustomerInputEnvelope_1 = require("../inputs/OrderCreateManyCustomerInputEnvelope");
const OrderCreateOrConnectWithoutCustomerInput_1 = require("../inputs/OrderCreateOrConnectWithoutCustomerInput");
const OrderCreateWithoutCustomerInput_1 = require("../inputs/OrderCreateWithoutCustomerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedManyWithoutCustomerInput = class OrderCreateNestedManyWithoutCustomerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutCustomerInput_1.OrderCreateWithoutCustomerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutCustomerInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutCustomerInput_1.OrderCreateOrConnectWithoutCustomerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutCustomerInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyCustomerInputEnvelope_1.OrderCreateManyCustomerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyCustomerInputEnvelope_1.OrderCreateManyCustomerInputEnvelope)
], OrderCreateNestedManyWithoutCustomerInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutCustomerInput.prototype, "connect", void 0);
OrderCreateNestedManyWithoutCustomerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedManyWithoutCustomerInput", {
        isAbstract: true
    })
], OrderCreateNestedManyWithoutCustomerInput);
exports.OrderCreateNestedManyWithoutCustomerInput = OrderCreateNestedManyWithoutCustomerInput;
