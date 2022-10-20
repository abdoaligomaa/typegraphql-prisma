"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderWhereInput_1 = require("../inputs/OrderWhereInput");
let OrderListRelationFilter = class OrderListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereInput_1.OrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereInput_1.OrderWhereInput)
], OrderListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereInput_1.OrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereInput_1.OrderWhereInput)
], OrderListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereInput_1.OrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereInput_1.OrderWhereInput)
], OrderListRelationFilter.prototype, "none", void 0);
OrderListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderListRelationFilter", {
        isAbstract: true
    })
], OrderListRelationFilter);
exports.OrderListRelationFilter = OrderListRelationFilter;
