"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderWhereUniqueInput = class OrderWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderWhereUniqueInput.prototype, "id", void 0);
OrderWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderWhereUniqueInput", {
        isAbstract: true
    })
], OrderWhereUniqueInput);
exports.OrderWhereUniqueInput = OrderWhereUniqueInput;
