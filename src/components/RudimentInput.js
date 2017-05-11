import { h, Component } from 'preact'
import './RudimentInput.css'

export default class RudimentInput extends Component {
    render({ onInput }) {
        return (
            <input
                type={'text'}
                onInput={onInput}
                placeholder={'Enter rudiment'}
                className={'RudimentInput'}
            />
        )
    }
}
