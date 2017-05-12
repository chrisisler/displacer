import { h, Component } from 'preact'
import './RudimentInput.css'

export default class RudimentInput extends Component {
    render({ onInput }) {
        return (
            <input
                type={'text'}
                onInput={onInput}
                onChange={this.linkState('text')}
                placeholder={'Enter L\'s and R\'s'}
                className={'RudimentInput'}
            />
        )
    }
}
