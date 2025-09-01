// 13 . enum (Custom Type)

// 13.1 number enum
enum Role {
  ADMIN,
  AUTHOR,
  EDITOR,
  GENERAL,
}

// 13.2 string enum
enum Types {
  ADMIN = "Admin",
  AUTHOR = "Author",
  EDITOR = "Editor",
  GENERAL = "General",
}

// 13.3 Heterogeneous enum
enum HeterogeneousEnum {
  No = 0,
  Yes = "Yes",
}

type Human = {
  name: string;
  role: Role;
  type: Types;
  isEmployee: HeterogeneousEnum;
};

let person1: Human = {
  name: "munna",
  role: Role.ADMIN,
  type: Types.EDITOR,
  isEmployee: HeterogeneousEnum.Yes,
};

let person2: Human = {
  name: "munna islam",
  role: Role.AUTHOR,
  type: Types.GENERAL,
  isEmployee: HeterogeneousEnum.No,
};

console.log("person1 ::", person1);

console.log("person2 ::", person2);
