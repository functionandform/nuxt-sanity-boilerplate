export function useTitleCase(str) => {
  return str?.length ? str.replace(/([A-Z])/g, ' $1').replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase()) : null
}
