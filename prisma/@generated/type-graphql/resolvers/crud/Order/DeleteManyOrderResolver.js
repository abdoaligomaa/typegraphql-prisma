"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyOrderArgs_1 = require("./args/DeleteManyOrderArgs");
const Order_1 = require("../../../models/Order");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyOrderResolver = class DeleteManyOrderResolver {
    async deleteManyOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteManyOrderResolver.prototype, "deleteManyOrder", null);
DeleteManyOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], DeleteManyOrderResolver);
exports.DeleteManyOrderResolver = DeleteManyOrderResolver;
