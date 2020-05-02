const location = 'Santiago, cl';
const api_key = '6a7f97e1b94de709c71893d611d990e1';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
