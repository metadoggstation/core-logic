import { BASE_COST, TARGET_BASE_GAS, WEATHER_MULTIPLIERS } from '../constants';
import type { WeatherState } from '../types';

export { BASE_COST, TARGET_BASE_GAS, WEATHER_MULTIPLIERS } from '../constants';

export const calculateFuelConsumption = (
  diceRoll: number,
  gasPriceGwei: number,
  weather: WeatherState,
): number =>
  BASE_COST *
  diceRoll *
  (gasPriceGwei / TARGET_BASE_GAS) *
  WEATHER_MULTIPLIERS[weather];