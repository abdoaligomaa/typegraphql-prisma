"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CategoryAvgOrderByAggregateInput = class CategoryAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryAvgOrderByAggregateInput.prototype, "id", void 0);
CategoryAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CategoryAvgOrderByAggregateInput);
exports.CategoryAvgOrderByAggregateInput = CategoryAvgOrderByAggregateInput;
