// https://api.openweathermap.org/data/2.5/forecast?q=Itu&appid=33cf0eef456f1664e3984e0cef1659af

require('dotenv').config()

const axios = require ('axios')

console.log(process.env.APP_KEY)

const {APP_KEY, KEY1, KEY2, KEY3} = process.env

console.log(APP_KEY, KEY1, KEY2, KEY3)