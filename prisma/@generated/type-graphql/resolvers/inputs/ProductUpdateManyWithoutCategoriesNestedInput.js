"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithoutCategoriesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutCategoriesInput_1 = require("../inputs/ProductCreateOrConnectWithoutCategoriesInput");
const ProductCreateWithoutCategoriesInput_1 = require("../inputs/ProductCreateWithoutCategoriesInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutCategoriesInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutCategoriesInput");
const ProductUpdateWithWhereUniqueWithoutCategoriesInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutCategoriesInput");
const ProductUpsertWithWhereUniqueWithoutCategoriesInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutCategoriesInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutCategoriesNestedInput = class ProductUpdateManyWithoutCategoriesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutCategoriesInput_1.ProductCreateWithoutCategoriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoriesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutCategoriesInput_1.ProductCreateOrConnectWithoutCategoriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoriesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutCategoriesInput_1.ProductUpsertWithWhereUniqueWithoutCategoriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoriesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoriesNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoriesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoriesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoriesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutCategoriesInput_1.ProductUpdateWithWhereUniqueWithoutCategoriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoriesNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutCategoriesInput_1.ProductUpdateManyWithWhereWithoutCategoriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoriesNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCategoriesNestedInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutCategoriesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateManyWithoutCategoriesNestedInput", {
        isAbstract: true
    })
], ProductUpdateManyWithoutCategoriesNestedInput);
exports.ProductUpdateManyWithoutCategoriesNestedInput = ProductUpdateManyWithoutCategoriesNestedInput;
