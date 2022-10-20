"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutOrdersNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutOrdersInput_1 = require("../inputs/UserCreateOrConnectWithoutOrdersInput");
const UserCreateWithoutOrdersInput_1 = require("../inputs/UserCreateWithoutOrdersInput");
const UserUpdateWithoutOrdersInput_1 = require("../inputs/UserUpdateWithoutOrdersInput");
const UserUpsertWithoutOrdersInput_1 = require("../inputs/UserUpsertWithoutOrdersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutOrdersNestedInput = class UserUpdateOneWithoutOrdersNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOrdersInput_1.UserCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutOrdersInput_1.UserCreateWithoutOrdersInput)
], UserUpdateOneWithoutOrdersNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOrdersInput_1.UserCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutOrdersInput_1.UserCreateOrConnectWithoutOrdersInput)
], UserUpdateOneWithoutOrdersNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutOrdersInput_1.UserUpsertWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutOrdersInput_1.UserUpsertWithoutOrdersInput)
], UserUpdateOneWithoutOrdersNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutOrdersNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserUpdateOneWithoutOrdersNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutOrdersNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutOrdersInput_1.UserUpdateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutOrdersInput_1.UserUpdateWithoutOrdersInput)
], UserUpdateOneWithoutOrdersNestedInput.prototype, "update", void 0);
UserUpdateOneWithoutOrdersNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutOrdersNestedInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutOrdersNestedInput);
exports.UserUpdateOneWithoutOrdersNestedInput = UserUpdateOneWithoutOrdersNestedInput;
