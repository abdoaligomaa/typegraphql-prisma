"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneOrderArgs_1 = require("./args/DeleteOneOrderArgs");
const Order_1 = require("../../../models/Order");
const helpers_1 = require("../../../helpers");
let DeleteOneOrderResolver = class DeleteOneOrderResolver {
    async deleteOneOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteOneOrderResolver.prototype, "deleteOneOrder", null);
DeleteOneOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], DeleteOneOrderResolver);
exports.DeleteOneOrderResolver = DeleteOneOrderResolver;
