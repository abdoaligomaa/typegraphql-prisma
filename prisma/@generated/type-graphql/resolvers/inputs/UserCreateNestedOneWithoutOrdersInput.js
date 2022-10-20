"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutOrdersInput_1 = require("../inputs/UserCreateOrConnectWithoutOrdersInput");
const UserCreateWithoutOrdersInput_1 = require("../inputs/UserCreateWithoutOrdersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutOrdersInput = class UserCreateNestedOneWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOrdersInput_1.UserCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutOrdersInput_1.UserCreateWithoutOrdersInput)
], UserCreateNestedOneWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOrdersInput_1.UserCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutOrdersInput_1.UserCreateOrConnectWithoutOrdersInput)
], UserCreateNestedOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutOrdersInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutOrdersInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutOrdersInput);
exports.UserCreateNestedOneWithoutOrdersInput = UserCreateNestedOneWithoutOrdersInput;
