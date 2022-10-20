"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedManyWithoutOrdersInput_1 = require("../inputs/ProductCreateNestedManyWithoutOrdersInput");
const UserCreateNestedOneWithoutOrdersInput_1 = require("../inputs/UserCreateNestedOneWithoutOrdersInput");
let OrderCreateInput = class OrderCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOrdersInput_1.UserCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutOrdersInput_1.UserCreateNestedOneWithoutOrdersInput)
], OrderCreateInput.prototype, "customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutOrdersInput_1.ProductCreateNestedManyWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutOrdersInput_1.ProductCreateNestedManyWithoutOrdersInput)
], OrderCreateInput.prototype, "products", void 0);
OrderCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateInput", {
        isAbstract: true
    })
], OrderCreateInput);
exports.OrderCreateInput = OrderCreateInput;
