import fs from 'fs';

let state;

state = {
    order: JSON.parse(fs.readFileSync('./data.json').toString())
}

let updateOrder = Object.assign({}, state.order, {
    receive: '서울시 강남구 논현동....'
});

updateOrder.payment.method = "Mobile";

console.log(state.order, updateOrder, updateOrder === state.order );
//====================================================================