import { lazy } from "react";

const Counter = lazy(()=> import("./Counter"))

export{
    Counter
}