"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByProductArgs_1 = require("./args/GroupByProductArgs");
const Product_1 = require("../../../models/Product");
const ProductGroupBy_1 = require("../../outputs/ProductGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProductResolver = class GroupByProductResolver {
    async groupByProduct(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProductGroupBy_1.ProductGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProductArgs_1.GroupByProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByProductResolver.prototype, "groupByProduct", null);
GroupByProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], GroupByProductResolver);
exports.GroupByProductResolver = GroupByProductResolver;
