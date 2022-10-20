"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProductUpdateManyWithoutOrdersNestedInput_1 = require("../inputs/ProductUpdateManyWithoutOrdersNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneWithoutOrdersNestedInput_1 = require("../inputs/UserUpdateOneWithoutOrdersNestedInput");
let OrderUpdateInput = class OrderUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OrderUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutOrdersNestedInput_1.UserUpdateOneWithoutOrdersNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutOrdersNestedInput_1.UserUpdateOneWithoutOrdersNestedInput)
], OrderUpdateInput.prototype, "customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutOrdersNestedInput_1.ProductUpdateManyWithoutOrdersNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutOrdersNestedInput_1.ProductUpdateManyWithoutOrdersNestedInput)
], OrderUpdateInput.prototype, "products", void 0);
OrderUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateInput", {
        isAbstract: true
    })
], OrderUpdateInput);
exports.OrderUpdateInput = OrderUpdateInput;
