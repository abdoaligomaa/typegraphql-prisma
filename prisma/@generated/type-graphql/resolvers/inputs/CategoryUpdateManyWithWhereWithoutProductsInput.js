"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateManyWithWhereWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryScalarWhereInput_1 = require("../inputs/CategoryScalarWhereInput");
const CategoryUpdateManyMutationInput_1 = require("../inputs/CategoryUpdateManyMutationInput");
let CategoryUpdateManyWithWhereWithoutProductsInput = class CategoryUpdateManyWithWhereWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryScalarWhereInput_1.CategoryScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryScalarWhereInput_1.CategoryScalarWhereInput)
], CategoryUpdateManyWithWhereWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateManyMutationInput_1.CategoryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateManyMutationInput_1.CategoryUpdateManyMutationInput)
], CategoryUpdateManyWithWhereWithoutProductsInput.prototype, "data", void 0);
CategoryUpdateManyWithWhereWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateManyWithWhereWithoutProductsInput", {
        isAbstract: true
    })
], CategoryUpdateManyWithWhereWithoutProductsInput);
exports.CategoryUpdateManyWithWhereWithoutProductsInput = CategoryUpdateManyWithWhereWithoutProductsInput;
