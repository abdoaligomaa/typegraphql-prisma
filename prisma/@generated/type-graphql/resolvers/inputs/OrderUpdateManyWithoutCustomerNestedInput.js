"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyWithoutCustomerNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyCustomerInputEnvelope_1 = require("../inputs/OrderCreateManyCustomerInputEnvelope");
const OrderCreateOrConnectWithoutCustomerInput_1 = require("../inputs/OrderCreateOrConnectWithoutCustomerInput");
const OrderCreateWithoutCustomerInput_1 = require("../inputs/OrderCreateWithoutCustomerInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutCustomerInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutCustomerInput");
const OrderUpdateWithWhereUniqueWithoutCustomerInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutCustomerInput");
const OrderUpsertWithWhereUniqueWithoutCustomerInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutCustomerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutCustomerNestedInput = class OrderUpdateManyWithoutCustomerNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutCustomerInput_1.OrderCreateWithoutCustomerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutCustomerInput_1.OrderCreateOrConnectWithoutCustomerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutCustomerInput_1.OrderUpsertWithWhereUniqueWithoutCustomerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyCustomerInputEnvelope_1.OrderCreateManyCustomerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyCustomerInputEnvelope_1.OrderCreateManyCustomerInputEnvelope)
], OrderUpdateManyWithoutCustomerNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutCustomerInput_1.OrderUpdateWithWhereUniqueWithoutCustomerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutCustomerInput_1.OrderUpdateManyWithWhereWithoutCustomerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerNestedInput.prototype, "deleteMany", void 0);
OrderUpdateManyWithoutCustomerNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyWithoutCustomerNestedInput", {
        isAbstract: true
    })
], OrderUpdateManyWithoutCustomerNestedInput);
exports.OrderUpdateManyWithoutCustomerNestedInput = OrderUpdateManyWithoutCustomerNestedInput;
