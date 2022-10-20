"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateWithoutProductsInput_1 = require("../inputs/CategoryUpdateWithoutProductsInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpdateWithWhereUniqueWithoutProductsInput = class CategoryUpdateWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryUpdateWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutProductsInput_1.CategoryUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutProductsInput_1.CategoryUpdateWithoutProductsInput)
], CategoryUpdateWithWhereUniqueWithoutProductsInput.prototype, "data", void 0);
CategoryUpdateWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], CategoryUpdateWithWhereUniqueWithoutProductsInput);
exports.CategoryUpdateWithWhereUniqueWithoutProductsInput = CategoryUpdateWithWhereUniqueWithoutProductsInput;
