// 13 . enum (Custom Type)
// 13.1 number enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["EDITOR"] = 2] = "EDITOR";
    Role[Role["GENERAL"] = 3] = "GENERAL";
})(Role || (Role = {}));
// 13.2 string enum
var Types;
(function (Types) {
    Types["ADMIN"] = "Admin";
    Types["AUTHOR"] = "Author";
    Types["EDITOR"] = "Editor";
    Types["GENERAL"] = "General";
})(Types || (Types = {}));
// 13.3 Heterogeneous enum
var HeterogeneousEnum;
(function (HeterogeneousEnum) {
    HeterogeneousEnum[HeterogeneousEnum["No"] = 0] = "No";
    HeterogeneousEnum["Yes"] = "Yes";
})(HeterogeneousEnum || (HeterogeneousEnum = {}));
var person1 = {
    name: "munna",
    role: Role.ADMIN,
    type: Types.EDITOR,
    isEmployee: HeterogeneousEnum.Yes
};
var person2 = {
    name: "munna islam",
    role: Role.AUTHOR,
    type: Types.GENERAL,
    isEmployee: HeterogeneousEnum.No
};
console.log("person1 ::", person1);
console.log("person2 ::", person2);
