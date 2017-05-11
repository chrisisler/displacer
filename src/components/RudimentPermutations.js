import { h, Component } from 'preact'
import './RudimentPermutations.css'

const permToJSX = (perm) => <li className={'Permutation'}>{perm}</li>

export default class RudimentPermutations extends Component {
    render({ permutations }) {
        return (
            <ul className={'RudimentPermutations'}>
                {permutations.map(permToJSX)}
            </ul>
        )
    }
}
