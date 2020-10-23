import { BehaviorSubject } from 'rxjs';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

const min = (new Date()).getMinutes();
let ril = 2122.60
let ril$ = new BehaviorSubject({name: "RIL", value: ril, time: min, order: 0});

let infy = 1125.10
let infy$ = new BehaviorSubject({name: "INFY", value: infy, time: min, order: 0});

let hdfc = 1234.30
let hdfc$ = new BehaviorSubject({name: "HDFC", value: hdfc, time: min, order: 0});

let index = 11935.95;

export function getIndex(r: number, i:number, h:number) {
    index = index + 0.5 - Math.random();
    return new BehaviorSubject(index);
}

let si = setInterval(() => {
    ril = emit(ril, 'RIL',ril$);
    infy = emit(infy, 'INFY',infy$);
    hdfc = emit(hdfc, 'HDFC',hdfc$);
}, 500)

function emit(val: number, stock: string, emitter$: BehaviorSubject<any>, order?: number) {
    let temp = 0.5 - Math.random();
    val += Math.round(temp * 100) / 100;
    const new_min = (new Date()).getMinutes();
    emitter$.next({ name: stock, value: val, time: new_min, order: order ? order : 0 });
    return val;    
}

export function getStocks() {
    return { ril$, infy$, hdfc$ };
}
