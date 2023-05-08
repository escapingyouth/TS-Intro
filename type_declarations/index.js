"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const getData = async () => {
    try {
        const response = await axios_1.default.get('https://jsonplaceholder.typicode.com/users/1');
        console.log('Wooo');
        console.log(response.data);
    }
    catch (e) {
        console.log('Error', e);
    }
};
getData();
