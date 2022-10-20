"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithoutCustomerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProductUpdateManyWithoutOrdersNestedInput_1 = require("../inputs/ProductUpdateManyWithoutOrdersNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let OrderUpdateWithoutCustomerInput = class OrderUpdateWithoutCustomerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OrderUpdateWithoutCustomerInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateWithoutCustomerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateWithoutCustomerInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutOrdersNestedInput_1.ProductUpdateManyWithoutOrdersNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutOrdersNestedInput_1.ProductUpdateManyWithoutOrdersNestedInput)
], OrderUpdateWithoutCustomerInput.prototype, "products", void 0);
OrderUpdateWithoutCustomerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithoutCustomerInput", {
        isAbstract: true
    })
], OrderUpdateWithoutCustomerInput);
exports.OrderUpdateWithoutCustomerInput = OrderUpdateWithoutCustomerInput;
