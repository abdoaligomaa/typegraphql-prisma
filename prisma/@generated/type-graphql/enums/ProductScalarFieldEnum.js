"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProductScalarFieldEnum;
(function (ProductScalarFieldEnum) {
    ProductScalarFieldEnum["id"] = "id";
    ProductScalarFieldEnum["createdAt"] = "createdAt";
    ProductScalarFieldEnum["updatedAt"] = "updatedAt";
    ProductScalarFieldEnum["name"] = "name";
    ProductScalarFieldEnum["sku"] = "sku";
    ProductScalarFieldEnum["description"] = "description";
    ProductScalarFieldEnum["quantity"] = "quantity";
})(ProductScalarFieldEnum = exports.ProductScalarFieldEnum || (exports.ProductScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
    name: "ProductScalarFieldEnum",
    description: undefined,
});
