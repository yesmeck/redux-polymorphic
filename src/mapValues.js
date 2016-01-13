export default function mapValues(obj, fn) {
  return Object.keys(obj).reduce((acc, key) => ({
    ...acc,
    [key]: fn(obj[key], key)
  }), {});
}
