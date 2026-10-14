import type { WeatherState } from './diceMechanics';

export const BASE_COST = 1;
export const TARGET_BASE_GAS = 30;

const WEATHER_MULTIPLIERS: Record<WeatherState, number> = {
  TURBULENCE: 1.8,
  STAGNANT: 1.2,
  CLEAR: 1.0,
};

export const calculateFuelConsumption = (
  diceRoll: number,
  gasPriceGwei: number,
  weather: WeatherState,
): number =>
  BASE_COST *
  diceRoll *
  (gasPriceGwei / TARGET_BASE_GAS) *
  WEATHER_MULTIPLIERS[weather];