"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OrderAvgOrderByAggregateInput = class OrderAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderAvgOrderByAggregateInput.prototype, "userId", void 0);
OrderAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderAvgOrderByAggregateInput", {
        isAbstract: true
    })
], OrderAvgOrderByAggregateInput);
exports.OrderAvgOrderByAggregateInput = OrderAvgOrderByAggregateInput;
