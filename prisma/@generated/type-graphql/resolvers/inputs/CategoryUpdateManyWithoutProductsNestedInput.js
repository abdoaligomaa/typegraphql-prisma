"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateManyWithoutProductsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutProductsInput_1 = require("../inputs/CategoryCreateOrConnectWithoutProductsInput");
const CategoryCreateWithoutProductsInput_1 = require("../inputs/CategoryCreateWithoutProductsInput");
const CategoryScalarWhereInput_1 = require("../inputs/CategoryScalarWhereInput");
const CategoryUpdateManyWithWhereWithoutProductsInput_1 = require("../inputs/CategoryUpdateManyWithWhereWithoutProductsInput");
const CategoryUpdateWithWhereUniqueWithoutProductsInput_1 = require("../inputs/CategoryUpdateWithWhereUniqueWithoutProductsInput");
const CategoryUpsertWithWhereUniqueWithoutProductsInput_1 = require("../inputs/CategoryUpsertWithWhereUniqueWithoutProductsInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpdateManyWithoutProductsNestedInput = class CategoryUpdateManyWithoutProductsNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryCreateWithoutProductsInput_1.CategoryCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProductsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutProductsInput_1.CategoryCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProductsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutProductsInput_1.CategoryUpsertWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProductsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProductsNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProductsNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProductsNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProductsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutProductsInput_1.CategoryUpdateWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProductsNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereWithoutProductsInput_1.CategoryUpdateManyWithWhereWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProductsNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryScalarWhereInput_1.CategoryScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProductsNestedInput.prototype, "deleteMany", void 0);
CategoryUpdateManyWithoutProductsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateManyWithoutProductsNestedInput", {
        isAbstract: true
    })
], CategoryUpdateManyWithoutProductsNestedInput);
exports.CategoryUpdateManyWithoutProductsNestedInput = CategoryUpdateManyWithoutProductsNestedInput;
