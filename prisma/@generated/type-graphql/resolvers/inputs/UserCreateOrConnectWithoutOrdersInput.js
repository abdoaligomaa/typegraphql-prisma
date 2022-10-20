"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutOrdersInput_1 = require("../inputs/UserCreateWithoutOrdersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutOrdersInput = class UserCreateOrConnectWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOrdersInput_1.UserCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutOrdersInput_1.UserCreateWithoutOrdersInput)
], UserCreateOrConnectWithoutOrdersInput.prototype, "create", void 0);
UserCreateOrConnectWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutOrdersInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutOrdersInput);
exports.UserCreateOrConnectWithoutOrdersInput = UserCreateOrConnectWithoutOrdersInput;
