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

        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
    }

    increaseQuantity() {
        const newQuantity = this.props.quantity + 1;
        this.props.onQuantityChange(this.props.type, newQuantity);
    }

    decreaseQuantity() {
        if (this.props.quantity > 0) {
            const newQuantity = this.props.quantity - 1;
            this.props.onQuantityChange(this.props.type, newQuantity);
        }
    }

    render() {
        return(
            <div id={this.props.id + 'Picker'} className="quantityPicker">
                <button onClick={this.increaseQuantity}>+</button>
                <p>{this.props.quantity}</p>
                <button onClick={this.decreaseQuantity}>-</button>
            </div>
        );
    }
}

export default QuantityPicker;