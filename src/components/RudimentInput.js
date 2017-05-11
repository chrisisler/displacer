import { h, Component } from 'preact';
import './RudimentInput.css';

const acceptableChars = [ 'L', 'R' ];

export default class RudimentInput extends Component {
    state = { value: '' };

    onChange = (event) => {
        console.log('in onChange()');
        const value  = event.target.value;
        const lastChar = value[value.length - 1].topUpperCase();

        if (acceptableChars.contains(lastChar)) {
            this.setState({ value });
        } else {
            // Show error: 'L and R only'.
            // TODO: Add K for kick.
            console.log('Err: "L and R only [ TODO ]"');
        }
    }

    render(props, state) {
        return (
            <input
                type={'text'}
                value={state.value}
                onChange={this.onChange}
                placeholder={'Enter rudiment'}
                className={'RudimentInput'}
            />
        );
    }
}
