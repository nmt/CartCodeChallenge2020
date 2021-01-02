import React from 'react';

interface QuantityPickerProps {
    id: string,
    type: string,
    quantity: number,
    item: Object,
    onQuantityChange: Function,
}

class QuantityPicker extends React.Component<QuantityPickerProps, {}> {
    constructor(props: any) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const test = this.props.quantity + 1;
        this.props.onQuantityChange(this.props.type, test);
    }

    render() {
        return(
            <div id={this.props.id + 'Picker'} className="quantityPicker">
                <button onClick={this.handleClick}>+</button>
                <p>{this.props.quantity}</p>
                <button>-</button>
            </div>
        );
    }
}

export default QuantityPicker;