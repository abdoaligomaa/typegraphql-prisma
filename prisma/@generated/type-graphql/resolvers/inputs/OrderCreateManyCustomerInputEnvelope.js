"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManyCustomerInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyCustomerInput_1 = require("../inputs/OrderCreateManyCustomerInput");
let OrderCreateManyCustomerInputEnvelope = class OrderCreateManyCustomerInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateManyCustomerInput_1.OrderCreateManyCustomerInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateManyCustomerInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrderCreateManyCustomerInputEnvelope.prototype, "skipDuplicates", void 0);
OrderCreateManyCustomerInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManyCustomerInputEnvelope", {
        isAbstract: true
    })
], OrderCreateManyCustomerInputEnvelope);
exports.OrderCreateManyCustomerInputEnvelope = OrderCreateManyCustomerInputEnvelope;
