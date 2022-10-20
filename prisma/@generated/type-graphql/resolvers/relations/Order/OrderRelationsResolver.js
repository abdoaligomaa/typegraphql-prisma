"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Order_1 = require("../../../models/Order");
const Product_1 = require("../../../models/Product");
const User_1 = require("../../../models/User");
const OrderProductsArgs_1 = require("./args/OrderProductsArgs");
const helpers_1 = require("../../../helpers");
let OrderRelationsResolver = class OrderRelationsResolver {
    async customer(order, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).customer({});
    }
    async products(order, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).products(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "customer", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order, Object, OrderProductsArgs_1.OrderProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "products", null);
OrderRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], OrderRelationsResolver);
exports.OrderRelationsResolver = OrderRelationsResolver;
