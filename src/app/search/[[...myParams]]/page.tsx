import { log } from "console";
import React from "react";

export default function DynamicSearch(props: any) {
    const myParams:String[] = props.params.myParams;
    const category = myParams[0];
    const product = myParams[1];
    const group = myParams[2];
    const brand = myParams[3];
    const modelNo = myParams[4];
    return <div>DynamicSearch:{category}</div>
}