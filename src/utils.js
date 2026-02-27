import { keysToSnakeCase } from "neetocist";
import { stringify } from "qs";
import { isEmpty, toPairs, pipe, omit } from "ramda";

export const buildUrl = (route, params) => {
  const placeholders = [];

  toPairs(params).forEach(([key, value]) => {
    if (route.includes(`:${key}`)) {
      route = route.replace(`:${key}`, encodeURIComponent(value));
      placeholders.push(key);
    }
  });

  const queryParams = pipe(
    omit(placeholders),
    keysToSnakeCase,
    stringify
  )(params);

  return isEmpty(queryParams) ? route : `${route}?${queryParams}`;
};
