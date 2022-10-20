"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryOrderByRelationAggregateInput_1 = require("../inputs/CategoryOrderByRelationAggregateInput");
const OrderOrderByRelationAggregateInput_1 = require("../inputs/OrderOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProductOrderByWithRelationInput = class ProductOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "sku", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryOrderByRelationAggregateInput_1.CategoryOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryOrderByRelationAggregateInput_1.CategoryOrderByRelationAggregateInput)
], ProductOrderByWithRelationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderOrderByRelationAggregateInput_1.OrderOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderOrderByRelationAggregateInput_1.OrderOrderByRelationAggregateInput)
], ProductOrderByWithRelationInput.prototype, "orders", void 0);
ProductOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductOrderByWithRelationInput", {
        isAbstract: true
    })
], ProductOrderByWithRelationInput);
exports.ProductOrderByWithRelationInput = ProductOrderByWithRelationInput;
