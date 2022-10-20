"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateInput_1 = require("../../../inputs/OrderUpdateInput");
const OrderWhereUniqueInput_1 = require("../../../inputs/OrderWhereUniqueInput");
let UpdateOneOrderArgs = class UpdateOneOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateInput_1.OrderUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateInput_1.OrderUpdateInput)
], UpdateOneOrderArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], UpdateOneOrderArgs.prototype, "where", void 0);
UpdateOneOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneOrderArgs);
exports.UpdateOneOrderArgs = UpdateOneOrderArgs;
