"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategorySumAggregate = class CategorySumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CategorySumAggregate.prototype, "id", void 0);
CategorySumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategorySumAggregate", {
        isAbstract: true
    })
], CategorySumAggregate);
exports.CategorySumAggregate = CategorySumAggregate;
