import listedEntries from "./helpers/listedEntries";

export default ({
  types = ["article"],
  offset = 0,
  limit = 100,
  role = null,
  lastId = null,
} = {}) => {
  const sliceString =
    isNaN(limit) || limit === 1
      ? `${offset}...${offset + 1}`
      : `${offset}...${limit + offset}`;
  const typeString = '["' + types.join('","') + '"]';

  const filterString = `[_type in ${typeString}${
    lastId ? " && _id > " + lastId : ""
  }][${sliceString}] | order(_createdAt desc)`;
  return groq`*${filterString} {
        ${listedEntries()}
    }`;
};
