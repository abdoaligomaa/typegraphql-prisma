"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutOrdersInput_1 = require("../inputs/UserCreateWithoutOrdersInput");
const UserUpdateWithoutOrdersInput_1 = require("../inputs/UserUpdateWithoutOrdersInput");
let UserUpsertWithoutOrdersInput = class UserUpsertWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutOrdersInput_1.UserUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutOrdersInput_1.UserUpdateWithoutOrdersInput)
], UserUpsertWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOrdersInput_1.UserCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutOrdersInput_1.UserCreateWithoutOrdersInput)
], UserUpsertWithoutOrdersInput.prototype, "create", void 0);
UserUpsertWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutOrdersInput", {
        isAbstract: true
    })
], UserUpsertWithoutOrdersInput);
exports.UserUpsertWithoutOrdersInput = UserUpsertWithoutOrdersInput;
