"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateInput_1 = require("../../../inputs/OrderCreateInput");
const OrderUpdateInput_1 = require("../../../inputs/OrderUpdateInput");
const OrderWhereUniqueInput_1 = require("../../../inputs/OrderWhereUniqueInput");
let UpsertOneOrderArgs = class UpsertOneOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], UpsertOneOrderArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateInput_1.OrderCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateInput_1.OrderCreateInput)
], UpsertOneOrderArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateInput_1.OrderUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateInput_1.OrderUpdateInput)
], UpsertOneOrderArgs.prototype, "update", void 0);
UpsertOneOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneOrderArgs);
exports.UpsertOneOrderArgs = UpsertOneOrderArgs;
