import * as _ from "lodash";
import './style.css';
import printMe from './print';
import Person from './typescript/person';
import MyObservable from './typescript/promise';

function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    element.classList.add('hello');

    let person = new Person();
    console.log("Hello: " + person.name);

    let obs = new MyObservable();
    obs.myPromise();

    let deferred = obs.httpCall(new URL("http://localhost:3000/data/my_data.json"));
    deferred.then(value => console.log("Fulfilled: " + value));

    return element;
}

document.body.appendChild(component());

// if (module.hot) {
//     module.hot.accept('./print.ts', function() {
//     console.log('Accepting the updated printMe module!');
//         printMe();
//     });
// }