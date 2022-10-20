"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderOrderByWithAggregationInput_1 = require("../../../inputs/OrderOrderByWithAggregationInput");
const OrderScalarWhereWithAggregatesInput_1 = require("../../../inputs/OrderScalarWhereWithAggregatesInput");
const OrderWhereInput_1 = require("../../../inputs/OrderWhereInput");
const OrderScalarFieldEnum_1 = require("../../../../enums/OrderScalarFieldEnum");
let GroupByOrderArgs = class GroupByOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereInput_1.OrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereInput_1.OrderWhereInput)
], GroupByOrderArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderOrderByWithAggregationInput_1.OrderOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOrderArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarFieldEnum_1.OrderScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOrderArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderScalarWhereWithAggregatesInput_1.OrderScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderScalarWhereWithAggregatesInput_1.OrderScalarWhereWithAggregatesInput)
], GroupByOrderArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOrderArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOrderArgs.prototype, "skip", void 0);
GroupByOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByOrderArgs);
exports.GroupByOrderArgs = GroupByOrderArgs;
