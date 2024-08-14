const adhan = require('adhan');
const moment = require('moment-timezone');
// import { Coordinates, CalculationMethod, PrayerTimes } from 'adhan';
// Dhaka
// const coordinates = new adhan.Coordinates(23.777176, 90.399452);
const coordinates = new adhan.Coordinates(-33.865143, 151.209900);
const params = adhan.CalculationMethod.MuslimWorldLeague();

// In JS date, month start from 0. O mean jan, so if we calculating aug, the number will be 7 not 8
const date = new Date(2024, 7, 14, 10, 32, 59, 900);
const prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
// console.log(new Date(), new Date(2024, 7, 14, 10, 59, 59, 900))
// However, when passing default date it return accurate dates
// const prayerTimes = new adhan.PrayerTimes(coordinates, new Date(), params);
console.log(prayerTimes)
console.log('Fajr ', moment(prayerTimes.fajr).tz('Australia/Sydney').format('h:mm A'))
console.log('Sunrise ', moment(prayerTimes.sunrise).tz('Australia/Sydney').format('h:mm A'))
console.log('Zuhr ', moment(prayerTimes.dhuhr).tz('Australia/Sydney').format('h:mm A'))
console.log('Asr ', moment(prayerTimes.asr).tz('Australia/Sydney').format('h:mm A'))
console.log('Magrib ', moment(prayerTimes.maghrib).tz('Australia/Sydney').format('h:mm A'))
console.log('Isha ', moment(prayerTimes.isha).tz('Australia/Sydney').format('h:mm A'))

// console.log('Fajr ', moment(prayerTimes.fajr).tz('Asia/Dhaka').format('h:mm A'))
// console.log('Sunrise ', moment(prayerTimes.sunrise).tz('Asia/Dhaka').format('h:mm A'))
// console.log('Zuhr ', moment(prayerTimes.dhuhr).tz('Asia/Dhaka').format('h:mm A'))
// console.log('Asr ', moment(prayerTimes.asr).tz('Asia/Dhaka').format('h:mm A'))
// console.log('Magrib ', moment(prayerTimes.maghrib).tz('Asia/Dhaka').format('h:mm A'))
// console.log('Isha ', moment(prayerTimes.isha).tz('Asia/Dhaka').format('h:mm A'))