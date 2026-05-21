import type { MockRegistry } from "relay-mock-directive-plugin";

import CountryCapitalFragmentMocks from "../queries/__graphql_mocks__/CountryCapitalFragment.json";
import CountryPopulationFragmentMocks from "../queries/__graphql_mocks__/CountryPopulationFragment.json";
import GetCountryMocks from "../queries/__graphql_mocks__/GetCountry.json";
import GetCountryAliasMocks from "../queries/__graphql_mocks__/GetCountryAlias.json";
import GetCountryWithCapitalErrorMocks from "../queries/__graphql_mocks__/GetCountryWithCapitalError.json";
import GetCountriesMocks from "../queries/__graphql_mocks__/GetCountries.json";
import GetCountriesListMocks from "../queries/__graphql_mocks__/GetCountriesList.json";
import GetCountriesWithPopulationMocks from "../queries/__graphql_mocks__/GetCountriesWithPopulation.json";
import GetCountryWithPopulationMocks from "../queries/__graphql_mocks__/GetCountryWithPopulation.json";
import GetCountryWithWeatherMocks from "../queries/__graphql_mocks__/GetCountryWithWeather.json";

export const mockRegistry: MockRegistry = {
  CountryCapitalFragment: CountryCapitalFragmentMocks,
  CountryPopulationFragment: CountryPopulationFragmentMocks,
  GetCountry: GetCountryMocks,
  GetCountryWithCapitalError: GetCountryWithCapitalErrorMocks,
  GetCountries: GetCountriesMocks,
  GetCountriesList: GetCountriesListMocks,
  GetCountriesWithPopulation: GetCountriesWithPopulationMocks,
  GetCountryWithPopulation: GetCountryWithPopulationMocks,
  GetCountryAlias: GetCountryAliasMocks,
  GetCountryWithWeather: GetCountryWithWeatherMocks,
};
