import { h, Component } from 'preact'
import './RudimentPermutations.css'

const perms = [
    'RlrrLrll',
    'RllrrLrrll',
    'RllrrllrLrrllrrl'
]

const permToJSX = (perm) => <li className={'Permutation'}>{perm}</li>

export default class RudimentPermutations extends Component {
    render(props, state) {
        return (
            <ul className={'RudimentPermutations'}>
                {perms.map(permToJSX)}
            </ul>
        )
    }
}
