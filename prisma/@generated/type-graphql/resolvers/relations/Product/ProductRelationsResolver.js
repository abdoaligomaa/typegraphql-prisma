"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Category_1 = require("../../../models/Category");
const Order_1 = require("../../../models/Order");
const Product_1 = require("../../../models/Product");
const ProductCategoriesArgs_1 = require("./args/ProductCategoriesArgs");
const ProductOrdersArgs_1 = require("./args/ProductOrdersArgs");
const helpers_1 = require("../../../helpers");
let ProductRelationsResolver = class ProductRelationsResolver {
    async categories(product, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).categories(args);
    }
    async orders(product, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).orders(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Category_1.Category], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product, Object, ProductCategoriesArgs_1.ProductCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "categories", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Order_1.Order], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product, Object, ProductOrdersArgs_1.ProductOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "orders", null);
ProductRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], ProductRelationsResolver);
exports.ProductRelationsResolver = ProductRelationsResolver;
