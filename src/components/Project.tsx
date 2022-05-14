import React from 'react'
import { AppContext, AppProvider } from '../store/Context'
import { Main } from './Main'

const Project = () => {
    return (
        <AppProvider>
            <Main />
        </AppProvider>
    )
}

export { Project }
