"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCount_1 = require("../resolvers/outputs/CategoryCount");
let Category = class Category {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Category.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Category.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Category.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCount_1.CategoryCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCount_1.CategoryCount)
], Category.prototype, "_count", void 0);
Category = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Category", {
        isAbstract: true
    })
], Category);
exports.Category = Category;
