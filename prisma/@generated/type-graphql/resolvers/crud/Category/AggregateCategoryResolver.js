"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCategoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCategoryArgs_1 = require("./args/AggregateCategoryArgs");
const Category_1 = require("../../../models/Category");
const AggregateCategory_1 = require("../../outputs/AggregateCategory");
const helpers_1 = require("../../../helpers");
let AggregateCategoryResolver = class AggregateCategoryResolver {
    async aggregateCategory(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).category.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCategory_1.AggregateCategory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCategoryArgs_1.AggregateCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCategoryResolver.prototype, "aggregateCategory", null);
AggregateCategoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], AggregateCategoryResolver);
exports.AggregateCategoryResolver = AggregateCategoryResolver;
