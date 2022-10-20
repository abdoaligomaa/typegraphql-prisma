"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderOrderByWithRelationInput_1 = require("../../../inputs/OrderOrderByWithRelationInput");
const OrderWhereInput_1 = require("../../../inputs/OrderWhereInput");
const OrderWhereUniqueInput_1 = require("../../../inputs/OrderWhereUniqueInput");
const OrderScalarFieldEnum_1 = require("../../../../enums/OrderScalarFieldEnum");
let FindManyOrderArgs = class FindManyOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereInput_1.OrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereInput_1.OrderWhereInput)
], FindManyOrderArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderOrderByWithRelationInput_1.OrderOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyOrderArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], FindManyOrderArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyOrderArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyOrderArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarFieldEnum_1.OrderScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyOrderArgs.prototype, "distinct", void 0);
FindManyOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyOrderArgs);
exports.FindManyOrderArgs = FindManyOrderArgs;
