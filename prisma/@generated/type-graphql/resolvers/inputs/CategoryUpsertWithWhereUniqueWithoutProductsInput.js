"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpsertWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateWithoutProductsInput_1 = require("../inputs/CategoryCreateWithoutProductsInput");
const CategoryUpdateWithoutProductsInput_1 = require("../inputs/CategoryUpdateWithoutProductsInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpsertWithWhereUniqueWithoutProductsInput = class CategoryUpsertWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryUpsertWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutProductsInput_1.CategoryUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutProductsInput_1.CategoryUpdateWithoutProductsInput)
], CategoryUpsertWithWhereUniqueWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutProductsInput_1.CategoryCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutProductsInput_1.CategoryCreateWithoutProductsInput)
], CategoryUpsertWithWhereUniqueWithoutProductsInput.prototype, "create", void 0);
CategoryUpsertWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpsertWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], CategoryUpsertWithWhereUniqueWithoutProductsInput);
exports.CategoryUpsertWithWhereUniqueWithoutProductsInput = CategoryUpsertWithWhereUniqueWithoutProductsInput;
