"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoryAvgAggregate = class CategoryAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CategoryAvgAggregate.prototype, "id", void 0);
CategoryAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategoryAvgAggregate", {
        isAbstract: true
    })
], CategoryAvgAggregate);
exports.CategoryAvgAggregate = CategoryAvgAggregate;
