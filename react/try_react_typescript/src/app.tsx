import * as React from "react"
import './css/site.css'

import {Header,About} from './components'
export const App: React.StatelessComponent<{}>=()=>{
    return (
        <div>
            <Header/>
            <About/>
        </div>
    )
}