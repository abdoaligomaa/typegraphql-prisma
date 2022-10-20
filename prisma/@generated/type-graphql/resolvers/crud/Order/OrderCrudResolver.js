"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateOrderArgs_1 = require("./args/AggregateOrderArgs");
const CreateManyOrderArgs_1 = require("./args/CreateManyOrderArgs");
const CreateOneOrderArgs_1 = require("./args/CreateOneOrderArgs");
const DeleteManyOrderArgs_1 = require("./args/DeleteManyOrderArgs");
const DeleteOneOrderArgs_1 = require("./args/DeleteOneOrderArgs");
const FindFirstOrderArgs_1 = require("./args/FindFirstOrderArgs");
const FindManyOrderArgs_1 = require("./args/FindManyOrderArgs");
const FindUniqueOrderArgs_1 = require("./args/FindUniqueOrderArgs");
const GroupByOrderArgs_1 = require("./args/GroupByOrderArgs");
const UpdateManyOrderArgs_1 = require("./args/UpdateManyOrderArgs");
const UpdateOneOrderArgs_1 = require("./args/UpdateOneOrderArgs");
const UpsertOneOrderArgs_1 = require("./args/UpsertOneOrderArgs");
const helpers_1 = require("../../../helpers");
const Order_1 = require("../../../models/Order");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOrder_1 = require("../../outputs/AggregateOrder");
const OrderGroupBy_1 = require("../../outputs/OrderGroupBy");
let OrderCrudResolver = class OrderCrudResolver {
    async aggregateOrder(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).order.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async orders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async order(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByOrder(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], OrderCrudResolver.prototype, "aggregateOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyOrderArgs_1.CreateManyOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "createManyOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Order_1.Order, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneOrderArgs_1.CreateOneOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "createOneOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyOrderArgs_1.DeleteManyOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "deleteManyOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Order_1.Order, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneOrderArgs_1.DeleteOneOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "deleteOneOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Order_1.Order, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOrderArgs_1.FindFirstOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "findFirstOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Order_1.Order], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyOrderArgs_1.FindManyOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "orders", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Order_1.Order, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOrderArgs_1.FindUniqueOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "order", null);
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
], OrderCrudResolver.prototype, "groupByOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyOrderArgs_1.UpdateManyOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "updateManyOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Order_1.Order, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneOrderArgs_1.UpdateOneOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "updateOneOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Order_1.Order, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneOrderArgs_1.UpsertOneOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "upsertOneOrder", null);
OrderCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], OrderCrudResolver);
exports.OrderCrudResolver = OrderCrudResolver;
