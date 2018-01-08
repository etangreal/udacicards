
export const omit = (omitKey, obj) => Object.keys(obj)
  .filter((key) => key !== omitKey)
  .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {})
