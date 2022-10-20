"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithoutOrdersNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutOrdersInput_1 = require("../inputs/ProductCreateOrConnectWithoutOrdersInput");
const ProductCreateWithoutOrdersInput_1 = require("../inputs/ProductCreateWithoutOrdersInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutOrdersInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutOrdersInput");
const ProductUpdateWithWhereUniqueWithoutOrdersInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutOrdersInput");
const ProductUpsertWithWhereUniqueWithoutOrdersInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutOrdersInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutOrdersNestedInput = class ProductUpdateManyWithoutOrdersNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutOrdersInput_1.ProductCreateWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutOrdersNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutOrdersInput_1.ProductCreateOrConnectWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutOrdersNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutOrdersInput_1.ProductUpsertWithWhereUniqueWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutOrdersNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutOrdersNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutOrdersNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutOrdersNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutOrdersNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutOrdersInput_1.ProductUpdateWithWhereUniqueWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutOrdersNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutOrdersInput_1.ProductUpdateManyWithWhereWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutOrdersNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutOrdersNestedInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutOrdersNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateManyWithoutOrdersNestedInput", {
        isAbstract: true
    })
], ProductUpdateManyWithoutOrdersNestedInput);
exports.ProductUpdateManyWithoutOrdersNestedInput = ProductUpdateManyWithoutOrdersNestedInput;
