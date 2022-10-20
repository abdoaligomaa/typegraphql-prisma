"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoryMaxAggregate = class CategoryMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CategoryMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryMaxAggregate.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryMaxAggregate.prototype, "name", void 0);
CategoryMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategoryMaxAggregate", {
        isAbstract: true
    })
], CategoryMaxAggregate);
exports.CategoryMaxAggregate = CategoryMaxAggregate;
