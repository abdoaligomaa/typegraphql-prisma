"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutOrdersInput_1 = require("../inputs/ProductUpdateWithoutOrdersInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutOrdersInput = class ProductUpdateWithWhereUniqueWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutOrdersInput_1.ProductUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutOrdersInput_1.ProductUpdateWithoutOrdersInput)
], ProductUpdateWithWhereUniqueWithoutOrdersInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutOrdersInput", {
        isAbstract: true
    })
], ProductUpdateWithWhereUniqueWithoutOrdersInput);
exports.ProductUpdateWithWhereUniqueWithoutOrdersInput = ProductUpdateWithWhereUniqueWithoutOrdersInput;
