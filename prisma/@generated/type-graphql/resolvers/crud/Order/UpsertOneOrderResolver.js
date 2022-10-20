"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneOrderArgs_1 = require("./args/UpsertOneOrderArgs");
const Order_1 = require("../../../models/Order");
const helpers_1 = require("../../../helpers");
let UpsertOneOrderResolver = class UpsertOneOrderResolver {
    async upsertOneOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertOneOrderResolver.prototype, "upsertOneOrder", null);
UpsertOneOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], UpsertOneOrderResolver);
exports.UpsertOneOrderResolver = UpsertOneOrderResolver;
