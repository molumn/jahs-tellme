import {Route} from "react-router-dom";

import pages from "./pages";


const pair = (first: string, second: JSX.Element) => {
    return { first, second }
}

export const root_pages = [
    pair('/', pages.root.index({})),


    pair('/routes/diet', pages.root.routes.diet({})),
    pair('/routes/diet/tomorrow', pages.root.routes.diet({delay: 1}))
]

export default function root_routes() {
    return root_pages.map(pair => {
        return <Route key={"Route_" + pair.second.key} path={pair.first} element={pair.second} />
    })
}
