import { GraphQLResolveInfo } from "graphql";
import { AggregateCategoryArgs } from "./args/AggregateCategoryArgs";
import { CreateManyCategoryArgs } from "./args/CreateManyCategoryArgs";
import { CreateOneCategoryArgs } from "./args/CreateOneCategoryArgs";
import { DeleteManyCategoryArgs } from "./args/DeleteManyCategoryArgs";
import { DeleteOneCategoryArgs } from "./args/DeleteOneCategoryArgs";
import { FindFirstCategoryArgs } from "./args/FindFirstCategoryArgs";
import { FindManyCategoryArgs } from "./args/FindManyCategoryArgs";
import { FindUniqueCategoryArgs } from "./args/FindUniqueCategoryArgs";
import { GroupByCategoryArgs } from "./args/GroupByCategoryArgs";
import { UpdateManyCategoryArgs } from "./args/UpdateManyCategoryArgs";
import { UpdateOneCategoryArgs } from "./args/UpdateOneCategoryArgs";
import { UpsertOneCategoryArgs } from "./args/UpsertOneCategoryArgs";
import { Category } from "../../../models/Category";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCategory } from "../../outputs/AggregateCategory";
import { CategoryGroupBy } from "../../outputs/CategoryGroupBy";
export declare class CategoryCrudResolver {
    aggregateCategory(ctx: any, info: GraphQLResolveInfo, args: AggregateCategoryArgs): Promise<AggregateCategory>;
    createManyCategory(ctx: any, info: GraphQLResolveInfo, args: CreateManyCategoryArgs): Promise<AffectedRowsOutput>;
    createOneCategory(ctx: any, info: GraphQLResolveInfo, args: CreateOneCategoryArgs): Promise<Category>;
    deleteManyCategory(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCategoryArgs): Promise<AffectedRowsOutput>;
    deleteOneCategory(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCategoryArgs): Promise<Category | null>;
    findFirstCategory(ctx: any, info: GraphQLResolveInfo, args: FindFirstCategoryArgs): Promise<Category | null>;
    categories(ctx: any, info: GraphQLResolveInfo, args: FindManyCategoryArgs): Promise<Category[]>;
    category(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCategoryArgs): Promise<Category | null>;
    groupByCategory(ctx: any, info: GraphQLResolveInfo, args: GroupByCategoryArgs): Promise<CategoryGroupBy[]>;
    updateManyCategory(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCategoryArgs): Promise<AffectedRowsOutput>;
    updateOneCategory(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCategoryArgs): Promise<Category | null>;
    upsertOneCategory(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCategoryArgs): Promise<Category>;
}