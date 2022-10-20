"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductWhereUniqueInput = class ProductWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductWhereUniqueInput.prototype, "sku", void 0);
ProductWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductWhereUniqueInput", {
        isAbstract: true
    })
], ProductWhereUniqueInput);
exports.ProductWhereUniqueInput = ProductWhereUniqueInput;
