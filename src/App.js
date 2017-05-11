import { h, Component } from 'preact'
import RudimentInput from './components/RudimentInput'
import RudimentPermutations from './components/RudimentPermutations'
import './App.css'
import getRudimentDisplacements from './displacer'

export default class App extends Component {
    state = { permutations: [] }

    handleRudimentInput = (e) => {
        const val = e.target.value.toLowerCase()
        this.setState({ permutations: getRudimentDisplacements(val) })
    }

    render(props, state) {
        return (
            <div className={'App'}>
                <h1 className={'title'}>Displacer</h1>
                <RudimentInput onInput={this.handleRudimentInput}/>
                <RudimentPermutations permutations={state.permutations}/>
            </div>
        )
    }
}
