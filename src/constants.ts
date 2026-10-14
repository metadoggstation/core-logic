import type { WeatherState } from './types';

export const BASE_COST = 1;
export const TARGET_BASE_GAS = 30;

export const WEATHER_MULTIPLIERS: Record<WeatherState, number> = {
  CLEAR: 1.0,
  STAGNANT: 1.2,
  TURBULENCE: 1.8,
};
