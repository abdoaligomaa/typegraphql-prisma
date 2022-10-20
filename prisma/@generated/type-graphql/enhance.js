"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Product: crudResolvers.ProductCrudResolver,
    Category: crudResolvers.CategoryCrudResolver,
    Order: crudResolvers.OrderCrudResolver,
    User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
    Product: {
        aggregateProduct: actionResolvers.AggregateProductResolver,
        createManyProduct: actionResolvers.CreateManyProductResolver,
        createOneProduct: actionResolvers.CreateOneProductResolver,
        deleteManyProduct: actionResolvers.DeleteManyProductResolver,
        deleteOneProduct: actionResolvers.DeleteOneProductResolver,
        findFirstProduct: actionResolvers.FindFirstProductResolver,
        products: actionResolvers.FindManyProductResolver,
        product: actionResolvers.FindUniqueProductResolver,
        groupByProduct: actionResolvers.GroupByProductResolver,
        updateManyProduct: actionResolvers.UpdateManyProductResolver,
        updateOneProduct: actionResolvers.UpdateOneProductResolver,
        upsertOneProduct: actionResolvers.UpsertOneProductResolver
    },
    Category: {
        aggregateCategory: actionResolvers.AggregateCategoryResolver,
        createManyCategory: actionResolvers.CreateManyCategoryResolver,
        createOneCategory: actionResolvers.CreateOneCategoryResolver,
        deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
        deleteOneCategory: actionResolvers.DeleteOneCategoryResolver,
        findFirstCategory: actionResolvers.FindFirstCategoryResolver,
        categories: actionResolvers.FindManyCategoryResolver,
        category: actionResolvers.FindUniqueCategoryResolver,
        groupByCategory: actionResolvers.GroupByCategoryResolver,
        updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
        updateOneCategory: actionResolvers.UpdateOneCategoryResolver,
        upsertOneCategory: actionResolvers.UpsertOneCategoryResolver
    },
    Order: {
        aggregateOrder: actionResolvers.AggregateOrderResolver,
        createManyOrder: actionResolvers.CreateManyOrderResolver,
        createOneOrder: actionResolvers.CreateOneOrderResolver,
        deleteManyOrder: actionResolvers.DeleteManyOrderResolver,
        deleteOneOrder: actionResolvers.DeleteOneOrderResolver,
        findFirstOrder: actionResolvers.FindFirstOrderResolver,
        orders: actionResolvers.FindManyOrderResolver,
        order: actionResolvers.FindUniqueOrderResolver,
        groupByOrder: actionResolvers.GroupByOrderResolver,
        updateManyOrder: actionResolvers.UpdateManyOrderResolver,
        updateOneOrder: actionResolvers.UpdateOneOrderResolver,
        upsertOneOrder: actionResolvers.UpsertOneOrderResolver
    },
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    }
};
const crudResolversInfo = {
    Product: ["aggregateProduct", "createManyProduct", "createOneProduct", "deleteManyProduct", "deleteOneProduct", "findFirstProduct", "products", "product", "groupByProduct", "updateManyProduct", "updateOneProduct", "upsertOneProduct"],
    Category: ["aggregateCategory", "createManyCategory", "createOneCategory", "deleteManyCategory", "deleteOneCategory", "findFirstCategory", "categories", "category", "groupByCategory", "updateManyCategory", "updateOneCategory", "upsertOneCategory"],
    Order: ["aggregateOrder", "createManyOrder", "createOneOrder", "deleteManyOrder", "deleteOneOrder", "findFirstOrder", "orders", "order", "groupByOrder", "updateManyOrder", "updateOneOrder", "upsertOneOrder"],
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "users", "user", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"]
};
const argsInfo = {
    AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyProductArgs: ["data", "skipDuplicates"],
    CreateOneProductArgs: ["data"],
    DeleteManyProductArgs: ["where"],
    DeleteOneProductArgs: ["where"],
    FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueProductArgs: ["where"],
    GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyProductArgs: ["data", "where"],
    UpdateOneProductArgs: ["data", "where"],
    UpsertOneProductArgs: ["where", "create", "update"],
    AggregateCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyCategoryArgs: ["data", "skipDuplicates"],
    CreateOneCategoryArgs: ["data"],
    DeleteManyCategoryArgs: ["where"],
    DeleteOneCategoryArgs: ["where"],
    FindFirstCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCategoryArgs: ["where"],
    GroupByCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCategoryArgs: ["data", "where"],
    UpdateOneCategoryArgs: ["data", "where"],
    UpsertOneCategoryArgs: ["where", "create", "update"],
    AggregateOrderArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyOrderArgs: ["data", "skipDuplicates"],
    CreateOneOrderArgs: ["data"],
    DeleteManyOrderArgs: ["where"],
    DeleteOneOrderArgs: ["where"],
    FindFirstOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueOrderArgs: ["where"],
    GroupByOrderArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyOrderArgs: ["data", "where"],
    UpdateOneOrderArgs: ["data", "where"],
    UpsertOneOrderArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Product: relationResolvers.ProductRelationsResolver,
    Category: relationResolvers.CategoryRelationsResolver,
    Order: relationResolvers.OrderRelationsResolver,
    User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
    Product: ["categories", "orders"],
    Category: ["products"],
    Order: ["customer", "products"],
    User: ["orders"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Product: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    Category: ["id", "createdAt", "updatedAt", "name"],
    Order: ["id", "createdAt", "updatedAt", "userId"],
    User: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateProduct: ["_count", "_avg", "_sum", "_min", "_max"],
    ProductGroupBy: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateCategory: ["_count", "_avg", "_sum", "_min", "_max"],
    CategoryGroupBy: ["id", "createdAt", "updatedAt", "name", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateOrder: ["_count", "_avg", "_sum", "_min", "_max"],
    OrderGroupBy: ["id", "createdAt", "updatedAt", "userId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    ProductCount: ["categories", "orders"],
    ProductCountAggregate: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "_all"],
    ProductAvgAggregate: ["quantity"],
    ProductSumAggregate: ["quantity"],
    ProductMinAggregate: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    ProductMaxAggregate: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    CategoryCount: ["products"],
    CategoryCountAggregate: ["id", "createdAt", "updatedAt", "name", "_all"],
    CategoryAvgAggregate: ["id"],
    CategorySumAggregate: ["id"],
    CategoryMinAggregate: ["id", "createdAt", "updatedAt", "name"],
    CategoryMaxAggregate: ["id", "createdAt", "updatedAt", "name"],
    OrderCount: ["products"],
    OrderCountAggregate: ["id", "createdAt", "updatedAt", "userId", "_all"],
    OrderAvgAggregate: ["userId"],
    OrderSumAggregate: ["userId"],
    OrderMinAggregate: ["id", "createdAt", "updatedAt", "userId"],
    OrderMaxAggregate: ["id", "createdAt", "updatedAt", "userId"],
    UserCount: ["orders"],
    UserCountAggregate: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    UserMaxAggregate: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    ProductWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories", "orders"],
    ProductOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories", "orders"],
    ProductWhereUniqueInput: ["id", "sku"],
    ProductOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "_count", "_avg", "_max", "_min", "_sum"],
    ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    CategoryWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "products"],
    CategoryOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "products"],
    CategoryWhereUniqueInput: ["id"],
    CategoryOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "_count", "_avg", "_max", "_min", "_sum"],
    CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name"],
    OrderWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "userId", "customer", "products"],
    OrderOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "userId", "customer", "products"],
    OrderWhereUniqueInput: ["id"],
    OrderOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "userId", "_count", "_avg", "_max", "_min", "_sum"],
    OrderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "userId"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
    UserOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    ProductCreateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories", "orders"],
    ProductUpdateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories", "orders"],
    ProductCreateManyInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    ProductUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    CategoryCreateInput: ["createdAt", "updatedAt", "name", "products"],
    CategoryUpdateInput: ["createdAt", "updatedAt", "name", "products"],
    CategoryCreateManyInput: ["id", "createdAt", "updatedAt", "name"],
    CategoryUpdateManyMutationInput: ["createdAt", "updatedAt", "name"],
    OrderCreateInput: ["id", "createdAt", "updatedAt", "customer", "products"],
    OrderUpdateInput: ["id", "createdAt", "updatedAt", "customer", "products"],
    OrderCreateManyInput: ["id", "createdAt", "updatedAt", "userId"],
    OrderUpdateManyMutationInput: ["id", "createdAt", "updatedAt"],
    UserCreateInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
    UserUpdateInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
    UserCreateManyInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    UserUpdateManyMutationInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    CategoryListRelationFilter: ["every", "some", "none"],
    OrderListRelationFilter: ["every", "some", "none"],
    CategoryOrderByRelationAggregateInput: ["_count"],
    OrderOrderByRelationAggregateInput: ["_count"],
    ProductCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    ProductAvgOrderByAggregateInput: ["quantity"],
    ProductMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    ProductMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    ProductSumOrderByAggregateInput: ["quantity"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    ProductListRelationFilter: ["every", "some", "none"],
    ProductOrderByRelationAggregateInput: ["_count"],
    CategoryCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
    CategoryAvgOrderByAggregateInput: ["id"],
    CategoryMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
    CategoryMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
    CategorySumOrderByAggregateInput: ["id"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    OrderCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "userId"],
    OrderAvgOrderByAggregateInput: ["userId"],
    OrderMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "userId"],
    OrderMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "userId"],
    OrderSumOrderByAggregateInput: ["userId"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    UserCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    UserMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    UserSumOrderByAggregateInput: ["id"],
    CategoryCreateNestedManyWithoutProductsInput: ["create", "connectOrCreate", "connect"],
    OrderCreateNestedManyWithoutProductsInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    CategoryUpdateManyWithoutProductsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    OrderUpdateManyWithoutProductsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProductCreateNestedManyWithoutCategoriesInput: ["create", "connectOrCreate", "connect"],
    ProductUpdateManyWithoutCategoriesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
    ProductCreateNestedManyWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneWithoutOrdersNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    ProductUpdateManyWithoutOrdersNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    OrderCreateNestedManyWithoutCustomerInput: ["create", "connectOrCreate", "createMany", "connect"],
    OrderUpdateManyWithoutCustomerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    CategoryCreateWithoutProductsInput: ["createdAt", "updatedAt", "name"],
    CategoryCreateOrConnectWithoutProductsInput: ["where", "create"],
    OrderCreateWithoutProductsInput: ["id", "createdAt", "updatedAt", "customer"],
    OrderCreateOrConnectWithoutProductsInput: ["where", "create"],
    CategoryUpsertWithWhereUniqueWithoutProductsInput: ["where", "update", "create"],
    CategoryUpdateWithWhereUniqueWithoutProductsInput: ["where", "data"],
    CategoryUpdateManyWithWhereWithoutProductsInput: ["where", "data"],
    CategoryScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name"],
    OrderUpsertWithWhereUniqueWithoutProductsInput: ["where", "update", "create"],
    OrderUpdateWithWhereUniqueWithoutProductsInput: ["where", "data"],
    OrderUpdateManyWithWhereWithoutProductsInput: ["where", "data"],
    OrderScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "userId"],
    ProductCreateWithoutCategoriesInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "orders"],
    ProductCreateOrConnectWithoutCategoriesInput: ["where", "create"],
    ProductUpsertWithWhereUniqueWithoutCategoriesInput: ["where", "update", "create"],
    ProductUpdateWithWhereUniqueWithoutCategoriesInput: ["where", "data"],
    ProductUpdateManyWithWhereWithoutCategoriesInput: ["where", "data"],
    ProductScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    UserCreateWithoutOrdersInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    UserCreateOrConnectWithoutOrdersInput: ["where", "create"],
    ProductCreateWithoutOrdersInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories"],
    ProductCreateOrConnectWithoutOrdersInput: ["where", "create"],
    UserUpsertWithoutOrdersInput: ["update", "create"],
    UserUpdateWithoutOrdersInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    ProductUpsertWithWhereUniqueWithoutOrdersInput: ["where", "update", "create"],
    ProductUpdateWithWhereUniqueWithoutOrdersInput: ["where", "data"],
    ProductUpdateManyWithWhereWithoutOrdersInput: ["where", "data"],
    OrderCreateWithoutCustomerInput: ["id", "createdAt", "updatedAt", "products"],
    OrderCreateOrConnectWithoutCustomerInput: ["where", "create"],
    OrderCreateManyCustomerInputEnvelope: ["data", "skipDuplicates"],
    OrderUpsertWithWhereUniqueWithoutCustomerInput: ["where", "update", "create"],
    OrderUpdateWithWhereUniqueWithoutCustomerInput: ["where", "data"],
    OrderUpdateManyWithWhereWithoutCustomerInput: ["where", "data"],
    CategoryUpdateWithoutProductsInput: ["createdAt", "updatedAt", "name"],
    OrderUpdateWithoutProductsInput: ["id", "createdAt", "updatedAt", "customer"],
    ProductUpdateWithoutCategoriesInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "orders"],
    ProductUpdateWithoutOrdersInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories"],
    OrderCreateManyCustomerInput: ["id", "createdAt", "updatedAt"],
    OrderUpdateWithoutCustomerInput: ["id", "createdAt", "updatedAt", "products"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
