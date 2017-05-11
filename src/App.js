import { h, Component } from 'preact'
import RudimentInput from './components/RudimentInput'
import RudimentPermutations from './components/RudimentPermutations'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <h1 className={'title'}>Displacer</h1>
                <RudimentInput />
                <RudimentPermutations />
            </div>
        )
    }
}
