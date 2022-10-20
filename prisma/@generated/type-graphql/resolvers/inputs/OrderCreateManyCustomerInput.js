"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManyCustomerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderCreateManyCustomerInput = class OrderCreateManyCustomerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManyCustomerInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateManyCustomerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateManyCustomerInput.prototype, "updatedAt", void 0);
OrderCreateManyCustomerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManyCustomerInput", {
        isAbstract: true
    })
], OrderCreateManyCustomerInput);
exports.OrderCreateManyCustomerInput = OrderCreateManyCustomerInput;
