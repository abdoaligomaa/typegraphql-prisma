"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoryWhereUniqueInput = class CategoryWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CategoryWhereUniqueInput.prototype, "id", void 0);
CategoryWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryWhereUniqueInput", {
        isAbstract: true
    })
], CategoryWhereUniqueInput);
exports.CategoryWhereUniqueInput = CategoryWhereUniqueInput;
