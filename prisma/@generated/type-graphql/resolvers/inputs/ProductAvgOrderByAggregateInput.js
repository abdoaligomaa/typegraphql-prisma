"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProductAvgOrderByAggregateInput = class ProductAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductAvgOrderByAggregateInput.prototype, "quantity", void 0);
ProductAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ProductAvgOrderByAggregateInput);
exports.ProductAvgOrderByAggregateInput = ProductAvgOrderByAggregateInput;
