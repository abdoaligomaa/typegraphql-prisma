"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutOrdersInput_1 = require("../inputs/ProductCreateWithoutOrdersInput");
const ProductUpdateWithoutOrdersInput_1 = require("../inputs/ProductUpdateWithoutOrdersInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutOrdersInput = class ProductUpsertWithWhereUniqueWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutOrdersInput_1.ProductUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutOrdersInput_1.ProductUpdateWithoutOrdersInput)
], ProductUpsertWithWhereUniqueWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrdersInput_1.ProductCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrdersInput_1.ProductCreateWithoutOrdersInput)
], ProductUpsertWithWhereUniqueWithoutOrdersInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutOrdersInput", {
        isAbstract: true
    })
], ProductUpsertWithWhereUniqueWithoutOrdersInput);
exports.ProductUpsertWithWhereUniqueWithoutOrdersInput = ProductUpsertWithWhereUniqueWithoutOrdersInput;
