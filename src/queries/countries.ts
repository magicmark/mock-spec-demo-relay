import type { RequestParameters, OperationType } from "relay-runtime";

type QueryDef = RequestParameters & { __brand: "query" };

function makeQuery(name: string, text: string): QueryDef {
  return {
    name,
    id: null,
    text,
    operationKind: "query",
    metadata: {},
    cacheID: name,
  } as unknown as QueryDef;
}

export const GET_COUNTRY_WITH_MOCK = makeQuery(
  "GetCountry",
  `query GetCountry($code: ID!) {
  country(code: $code) {
    code
    name
    capital @mock(variant: "fictional-capital")
    emoji
  }
}`
);

export const GET_COUNTRY_WITH_FRAGMENT_MOCK = makeQuery(
  "GetCountryWithCapitalFragment",
  `query GetCountryWithCapitalFragment($code: ID!) {
  country(code: $code) {
    code
    name
    emoji
    ...CountryCapitalFragment
  }
}

fragment CountryCapitalFragment on Country {
  capital @mock(variant: "fictional-capital")
}`
);

export const GET_COUNTRY_ALIAS_MOCK = makeQuery(
  "GetCountryAlias",
  `query GetCountryAlias($code: ID!) {
  country(code: $code) {
    code
    name
    capital @mock(variant: "fictional-capital")
    home: capital @mock(variant: "fictional-home")
    emoji
  }
}`
);

export const GET_COUNTRIES_LIST_MOCK = makeQuery(
  "GetCountriesList",
  `query GetCountriesList {
  continent(code: "AN") {
    code
    countries @mock(variant: "antarctic-countries") {
      code
      name
    }
  }
}`
);

export const GET_COUNTRIES_WITH_POPULATION_MOCK = makeQuery(
  "GetCountriesWithPopulation",
  `query GetCountriesWithPopulation {
  continent(code: "AN") {
    code
    countries {
      code
      name
      population @mock(variant: "estimated-population")
    }
  }
}`
);

export const GET_COUNTRIES_WITH_POPULATION_FRAGMENT_MOCK = makeQuery(
  "GetCountriesWithPopulationFragment",
  `query GetCountriesWithPopulationFragment {
  continent(code: "AN") {
    code
    countries {
      code
      name
      ...CountryPopulationFragment
    }
  }
}

fragment CountryPopulationFragment on Country {
  population @mock(variant: "estimated-population")
}`
);

export const GET_COUNTRY_CAPITAL_ERROR = makeQuery(
  "GetCountryWithCapitalError",
  `query GetCountryWithCapitalError($code: ID!) {
  country(code: $code) {
    code
    name
    capital @mock(variant: "capital-with-error")
    emoji
  }
}`
);

export const GET_COUNTRIES_MOCK = makeQuery(
  "GetCountries",
  `query GetCountries @mock(variant: "top-three") {
  countries {
    code
    name
    capital
    emoji
  }
}`
);

export const GET_COUNTRY_NEW_FIELD = makeQuery(
  "GetCountryWithPopulation",
  `query GetCountryWithPopulation($code: ID!) {
  country(code: $code) {
    code
    name
    capital
    emoji
    population @mock(variant: "estimated-population")
  }
}`
);

export const GET_COUNTRY_NESTED_NEW = makeQuery(
  "GetCountryWithWeather",
  `query GetCountryWithWeather($code: ID!) {
  country(code: $code) {
    code
    name
    emoji
    weather @mock(variant: "current-weather") {
      temperature
      condition
      forecast {
        day
        high
        low
        precipitation
      }
    }
  }
}`
);

export const GET_COUNTRY_INLINE_VALUE = makeQuery(
  "GetCountryInlineValue",
  `query GetCountryInlineValue($code: ID!) {
  country(code: $code) {
    code
    name
    emoji
    capital @mock(value: "Wakanda City")
    population @mock(value: "331900000")
  }
}`
);

export type CountryQuery = OperationType;
