"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstProductArgs_1 = require("./args/FindFirstProductArgs");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let FindFirstProductResolver = class FindFirstProductResolver {
    async findFirstProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_1.Product, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProductArgs_1.FindFirstProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstProductResolver.prototype, "findFirstProduct", null);
FindFirstProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], FindFirstProductResolver);
exports.FindFirstProductResolver = FindFirstProductResolver;
