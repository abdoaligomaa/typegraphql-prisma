"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutOrdersInput_1 = require("../inputs/ProductCreateWithoutOrdersInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutOrdersInput = class ProductCreateOrConnectWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrdersInput_1.ProductCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrdersInput_1.ProductCreateWithoutOrdersInput)
], ProductCreateOrConnectWithoutOrdersInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutOrdersInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutOrdersInput);
exports.ProductCreateOrConnectWithoutOrdersInput = ProductCreateOrConnectWithoutOrdersInput;
