import { h, Component } from 'preact'
import './RudimentPermutations.css'

const insertValueInMiddleOfList = (list, val) => {
    const halfLen = list.length / 2
    return list.slice(0, halfLen)
        .concat(val)
        .concat(list.slice(halfLen))
}

const permToJSX = (perm) => <li className={'Permutation'}>{perm}</li>

export default class RudimentPermutations extends Component {
    render(props) {
        let jsxPerms = props.permutations.map(permToJSX);

        if (props.isAmbidextrous === true) {
            const separator = <li className='ambidextrous-separator'/>
            jsxPerms = insertValueInMiddleOfList(jsxPerms, separator)
        }

        return (
            <ul className={'RudimentPermutations'}>
                {jsxPerms}
            </ul>
        )
    }
}
