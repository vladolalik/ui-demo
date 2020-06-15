/*

 Takes object and list of properties that are a path to required value

 if such value doesn't exist, undefined is returned

 */

export const pickDeep = (obj, fieldList, otherwise) =>
  fieldList.reduce((res, field) => res && res[field], obj) || otherwise;
