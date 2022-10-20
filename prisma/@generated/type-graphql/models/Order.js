"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCount_1 = require("../resolvers/outputs/OrderCount");
let Order = class Order {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Order.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCount_1.OrderCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCount_1.OrderCount)
], Order.prototype, "_count", void 0);
Order = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Order", {
        isAbstract: true
    })
], Order);
exports.Order = Order;
