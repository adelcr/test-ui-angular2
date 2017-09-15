import {UrlMatcherFactory} from "ui-router-ng2";


export function registerSlugType(urlMatcherFactory: UrlMatcherFactory) {
  let builtInStringType = urlMatcherFactory.type('string');
  let slugType = Object.assign({}, builtInStringType, { encode: (str) => str, decode: (str) => str });
  urlMatcherFactory.type('slug', slugType);
}