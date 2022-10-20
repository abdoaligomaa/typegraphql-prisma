"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyInput_1 = require("../../../inputs/OrderCreateManyInput");
let CreateManyOrderArgs = class CreateManyOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateManyInput_1.OrderCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyOrderArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyOrderArgs.prototype, "skipDuplicates", void 0);
CreateManyOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyOrderArgs);
exports.CreateManyOrderArgs = CreateManyOrderArgs;
