/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React, {lazy, Suspense} from 'react'
import 'assets/app.css'
import ThemeProvider from '@go-prime/ui/ThemeProvider'
import {Route, Router, Switch} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()
const Home = lazy(() => import('pages/Home'))

const App = ({children}) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router history={history}>
                <Switch>
                    <ThemeProvider>
                        <Route path="/" exact component={Home}/>
                    </ThemeProvider>
                </Switch>
            </Router>
        </Suspense>
    )
}

export default App
