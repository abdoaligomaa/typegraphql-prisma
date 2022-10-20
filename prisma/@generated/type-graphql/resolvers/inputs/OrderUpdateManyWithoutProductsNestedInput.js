"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyWithoutProductsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateOrConnectWithoutProductsInput_1 = require("../inputs/OrderCreateOrConnectWithoutProductsInput");
const OrderCreateWithoutProductsInput_1 = require("../inputs/OrderCreateWithoutProductsInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutProductsInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutProductsInput");
const OrderUpdateWithWhereUniqueWithoutProductsInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutProductsInput");
const OrderUpsertWithWhereUniqueWithoutProductsInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutProductsInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutProductsNestedInput = class OrderUpdateManyWithoutProductsNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutProductsInput_1.OrderCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutProductsInput_1.OrderCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutProductsInput_1.OrderUpsertWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductsNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductsNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductsNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutProductsInput_1.OrderUpdateWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductsNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutProductsInput_1.OrderUpdateManyWithWhereWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductsNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductsNestedInput.prototype, "deleteMany", void 0);
OrderUpdateManyWithoutProductsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyWithoutProductsNestedInput", {
        isAbstract: true
    })
], OrderUpdateManyWithoutProductsNestedInput);
exports.OrderUpdateManyWithoutProductsNestedInput = OrderUpdateManyWithoutProductsNestedInput;
