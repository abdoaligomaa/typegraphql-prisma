"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryAvgOrderByAggregateInput_1 = require("../inputs/CategoryAvgOrderByAggregateInput");
const CategoryCountOrderByAggregateInput_1 = require("../inputs/CategoryCountOrderByAggregateInput");
const CategoryMaxOrderByAggregateInput_1 = require("../inputs/CategoryMaxOrderByAggregateInput");
const CategoryMinOrderByAggregateInput_1 = require("../inputs/CategoryMinOrderByAggregateInput");
const CategorySumOrderByAggregateInput_1 = require("../inputs/CategorySumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CategoryOrderByWithAggregationInput = class CategoryOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCountOrderByAggregateInput_1.CategoryCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCountOrderByAggregateInput_1.CategoryCountOrderByAggregateInput)
], CategoryOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryAvgOrderByAggregateInput_1.CategoryAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryAvgOrderByAggregateInput_1.CategoryAvgOrderByAggregateInput)
], CategoryOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryMaxOrderByAggregateInput_1.CategoryMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryMaxOrderByAggregateInput_1.CategoryMaxOrderByAggregateInput)
], CategoryOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryMinOrderByAggregateInput_1.CategoryMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryMinOrderByAggregateInput_1.CategoryMinOrderByAggregateInput)
], CategoryOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategorySumOrderByAggregateInput_1.CategorySumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategorySumOrderByAggregateInput_1.CategorySumOrderByAggregateInput)
], CategoryOrderByWithAggregationInput.prototype, "_sum", void 0);
CategoryOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryOrderByWithAggregationInput", {
        isAbstract: true
    })
], CategoryOrderByWithAggregationInput);
exports.CategoryOrderByWithAggregationInput = CategoryOrderByWithAggregationInput;
