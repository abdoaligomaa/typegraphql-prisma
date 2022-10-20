"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateNestedManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutProductsInput_1 = require("../inputs/CategoryCreateOrConnectWithoutProductsInput");
const CategoryCreateWithoutProductsInput_1 = require("../inputs/CategoryCreateWithoutProductsInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryCreateNestedManyWithoutProductsInput = class CategoryCreateNestedManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryCreateWithoutProductsInput_1.CategoryCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryCreateNestedManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutProductsInput_1.CategoryCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryCreateNestedManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryCreateNestedManyWithoutProductsInput.prototype, "connect", void 0);
CategoryCreateNestedManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateNestedManyWithoutProductsInput", {
        isAbstract: true
    })
], CategoryCreateNestedManyWithoutProductsInput);
exports.CategoryCreateNestedManyWithoutProductsInput = CategoryCreateNestedManyWithoutProductsInput;
