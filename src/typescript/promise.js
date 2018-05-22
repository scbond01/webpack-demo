<<<<<<< HEAD
"use strict";
// import Rx from 'rxjs/Rx';
//
// let obs = Rx.Observable.of(1,2,3);
Object.defineProperty(exports, "__esModule", { value: true });
// let Observable = require('rxjs/Observable').Observable;
// patch Observable with appropriate methods
// require('rxjs/add/observable/of');
// require('rxjs/add/operator/map');
//const { Observable } = require('rxjs');
// import { of } from 'rxjs';
// const { of } = require('rxjs');
// import { Observable } from "rxjs/Rx";
// const { Observable, Subject, ReplaySubject, from, of, range } = require('rxjs');
var Rx_1 = require("rxjs/Rx");
var obs = Rx_1.Observable.of(1, 2, 3);
console.log("Yee:" + obs);
// const { Observable } = require('rxjs');
//import { Observable } from "rxjs/Observable";
// import { Observer } from "rxjs/internal/types";
// import { of } from 'rxjs/observable/of';
// import { of as observableOf } from "rxjs/observable/of";
// import { of as observableOf } from "rxjs-compat/observable/of";
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// }).then(function(resolve){
//     console.log("success1: " + resolve); //foo
// }).then(function () {
//     console.log("success2");
// }).catch(function (reject) {
//     console.log("Failure: " + reject)
// });
// expected output: [object Promise]
// console.log(promise1);
console.log("Here!");
var arr = [1, 2, 3, 4];
// let obs = Observable.create((observer: Observer<any> ) => {
//     observer.next(console.log("next: "));
// });
// console.log("obs: " + JSON.stringify(obs));
// // let my_arr = obs.array(arr);
// // observableOf(arr);
Rx_1.Observable.of(arr);
//
// obs.subscribe(
//     (value : any) => console.log(value),
//     (err : any) => console.log(err),
//     () => console.log('this is the end')
// );
// function myAsyncFunction(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.onload = () => resolve(xhr.responseText);
//         xhr.onerror = () => reject(xhr.statusText);
//         xhr.send();
//     });
// }
=======
"use strict";
// import Rx from 'rxjs/Rx';
//
// let obs = Rx.Observable.of(1,2,3);
Object.defineProperty(exports, "__esModule", { value: true });
// let Observable = require('rxjs/Observable').Observable;
// patch Observable with appropriate methods
// require('rxjs/add/observable/of');
// require('rxjs/add/operator/map');
//const { Observable } = require('rxjs');
// import { of } from 'rxjs';
// const { of } = require('rxjs');
// import { Observable } from "rxjs/Rx";
// const { Observable, Subject, ReplaySubject, from, of, range } = require('rxjs');
var Rx_1 = require("rxjs/Rx");
var obs = Rx_1.Observable.of(1, 2, 3);
console.log("Yee:" + obs);
// const { Observable } = require('rxjs');
//import { Observable } from "rxjs/Observable";
// import { Observer } from "rxjs/internal/types";
// import { of } from 'rxjs/observable/of';
// import { of as observableOf } from "rxjs/observable/of";
// import { of as observableOf } from "rxjs-compat/observable/of";
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// }).then(function(resolve){
//     console.log("success1: " + resolve); //foo
// }).then(function () {
//     console.log("success2");
// }).catch(function (reject) {
//     console.log("Failure: " + reject)
// });
// expected output: [object Promise]
// console.log(promise1);
console.log("Here!");
var arr = [1, 2, 3, 4];
// let obs = Observable.create((observer: Observer<any> ) => {
//     observer.next(console.log("next: "));
// });
// console.log("obs: " + JSON.stringify(obs));
// // let my_arr = obs.array(arr);
// // observableOf(arr);
Rx_1.Observable.of(arr);
//
// obs.subscribe(
//     (value : any) => console.log(value),
//     (err : any) => console.log(err),
//     () => console.log('this is the end')
// );
// function myAsyncFunction(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.onload = () => resolve(xhr.responseText);
//         xhr.onerror = () => reject(xhr.statusText);
//         xhr.send();
//     });
// }
>>>>>>> 	new file:   data/my_data.json
