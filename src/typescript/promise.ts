import { Observable } from "rxjs/Rx";
import { Promise } from 'es6-promise';

export default class MyObservable {
    obs : Observable<any>  = Observable.of(1, 2, 3);

    constructor() {
        console.log("Yee:" + this.obs);
    }

    myPromise() {
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
        let arr = [1, 2, 3, 4];
        // let obs = Observable.create((observer: Observer<any> ) => {
        //     observer.next(console.log("next: "));
        // });

        let obs = Observable.of(arr);
        obs.subscribe(
            (value : any) => console.log("value: " + value),
            (err : any) => console.log("error: " + err),
            () => console.log('this is the end')
        );
    }

    //need to install npm i --save-dev  @types/es6-promise
    httpCall(url : URL) {
        let response = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url.toString());
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
        return response;
    }
}


