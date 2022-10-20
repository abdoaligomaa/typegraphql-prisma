"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderAvgOrderByAggregateInput_1 = require("../inputs/OrderAvgOrderByAggregateInput");
const OrderCountOrderByAggregateInput_1 = require("../inputs/OrderCountOrderByAggregateInput");
const OrderMaxOrderByAggregateInput_1 = require("../inputs/OrderMaxOrderByAggregateInput");
const OrderMinOrderByAggregateInput_1 = require("../inputs/OrderMinOrderByAggregateInput");
const OrderSumOrderByAggregateInput_1 = require("../inputs/OrderSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrderOrderByWithAggregationInput = class OrderOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCountOrderByAggregateInput_1.OrderCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCountOrderByAggregateInput_1.OrderCountOrderByAggregateInput)
], OrderOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderAvgOrderByAggregateInput_1.OrderAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderAvgOrderByAggregateInput_1.OrderAvgOrderByAggregateInput)
], OrderOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderMaxOrderByAggregateInput_1.OrderMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderMaxOrderByAggregateInput_1.OrderMaxOrderByAggregateInput)
], OrderOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderMinOrderByAggregateInput_1.OrderMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderMinOrderByAggregateInput_1.OrderMinOrderByAggregateInput)
], OrderOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderSumOrderByAggregateInput_1.OrderSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderSumOrderByAggregateInput_1.OrderSumOrderByAggregateInput)
], OrderOrderByWithAggregationInput.prototype, "_sum", void 0);
OrderOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderOrderByWithAggregationInput", {
        isAbstract: true
    })
], OrderOrderByWithAggregationInput);
exports.OrderOrderByWithAggregationInput = OrderOrderByWithAggregationInput;
