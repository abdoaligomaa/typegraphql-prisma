"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateManyMutationInput_1 = require("../../../inputs/OrderUpdateManyMutationInput");
const OrderWhereInput_1 = require("../../../inputs/OrderWhereInput");
let UpdateManyOrderArgs = class UpdateManyOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateManyMutationInput_1.OrderUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateManyMutationInput_1.OrderUpdateManyMutationInput)
], UpdateManyOrderArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereInput_1.OrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereInput_1.OrderWhereInput)
], UpdateManyOrderArgs.prototype, "where", void 0);
UpdateManyOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyOrderArgs);
exports.UpdateManyOrderArgs = UpdateManyOrderArgs;
