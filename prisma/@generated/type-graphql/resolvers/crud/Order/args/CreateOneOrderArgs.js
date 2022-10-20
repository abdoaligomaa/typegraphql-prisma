"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateInput_1 = require("../../../inputs/OrderCreateInput");
let CreateOneOrderArgs = class CreateOneOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateInput_1.OrderCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateInput_1.OrderCreateInput)
], CreateOneOrderArgs.prototype, "data", void 0);
CreateOneOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneOrderArgs);
exports.CreateOneOrderArgs = CreateOneOrderArgs;
