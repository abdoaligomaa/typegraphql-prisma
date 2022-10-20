"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByOrderArgs_1 = require("./args/GroupByOrderArgs");
const Order_1 = require("../../../models/Order");
const OrderGroupBy_1 = require("../../outputs/OrderGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByOrderResolver = class GroupByOrderResolver {
    async groupByOrder(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OrderGroupBy_1.OrderGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOrderArgs_1.GroupByOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByOrderResolver.prototype, "groupByOrder", null);
GroupByOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], GroupByOrderResolver);
exports.GroupByOrderResolver = GroupByOrderResolver;
