"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutOrdersInput_1 = require("../inputs/ProductCreateOrConnectWithoutOrdersInput");
const ProductCreateWithoutOrdersInput_1 = require("../inputs/ProductCreateWithoutOrdersInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutOrdersInput = class ProductCreateNestedManyWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutOrdersInput_1.ProductCreateWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutOrdersInput_1.ProductCreateOrConnectWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutOrdersInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutOrdersInput", {
        isAbstract: true
    })
], ProductCreateNestedManyWithoutOrdersInput);
exports.ProductCreateNestedManyWithoutOrdersInput = ProductCreateNestedManyWithoutOrdersInput;
