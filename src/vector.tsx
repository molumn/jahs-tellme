import {Route} from "react-router-dom";

import pages from "./pages";


const pair = (first: string, second: JSX.Element) => {
    return { first, second }
}

const root = [
    pair('/', pages.root.index({})),


    pair('/routes/diet', pages.root.routes.diet({}))
]

export default function root_routes() {
    return root.map(pair => {
        return <Route key={"Route_" + pair.second.key} path={pair.first} element={pair.second} />
    })
}
