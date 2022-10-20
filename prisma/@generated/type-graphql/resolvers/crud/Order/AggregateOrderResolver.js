"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateOrderArgs_1 = require("./args/AggregateOrderArgs");
const Order_1 = require("../../../models/Order");
const AggregateOrder_1 = require("../../outputs/AggregateOrder");
const helpers_1 = require("../../../helpers");
let AggregateOrderResolver = class AggregateOrderResolver {
    async aggregateOrder(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).order.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOrder_1.AggregateOrder, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOrderArgs_1.AggregateOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateOrderResolver.prototype, "aggregateOrder", null);
AggregateOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], AggregateOrderResolver);
exports.AggregateOrderResolver = AggregateOrderResolver;
