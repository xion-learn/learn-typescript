type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";
// 会使用类似笛卡儿积的方式，将每种情况联合在一起作为最终类型
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
let localeMessageIDs: LocaleMessageIDs


// 类型中获取 key 的文字类型，通过模板字符串组成新的文字类型
type PropEventSource<Type> = {
  on<Key extends string & keyof Type>
  (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
};
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});
person.on("firstNameChanged", newName => {
  console.log(`new name is ${newName.toUpperCase()}`);
});
person.on("ageChanged", newAge => {
  if (newAge < 0) {
    console.warn("warning! negative age");
  }
})
