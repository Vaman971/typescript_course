export {};

type Profile = {
  name: string;
  age: number;
  email?: string;
};

type ProfileKeys = keyof Profile;
type NameType = Profile["name"];
type PublicProfile = Pick<Profile, "name" | "age">;
type ReadonlyProfile = Readonly<Profile>;
type PartialProfile = Partial<Profile>;
type EventName = `profile:${ProfileKeys}`;

function getProfileValue<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const profile: Profile = { name: "Ada", age: 30 };
const nameValue: NameType = getProfileValue(profile, "name");
const event: EventName = "profile:name";

console.log(nameValue, event);

