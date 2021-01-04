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
        // Ensure quantity cannot go into negatives
        if (this.props.quantity > 0) {
            const newQuantity = this.props.quantity - 1;
            this.props.onQuantityChange(this.props.type, newQuantity);
        }
    }

    render() {
        const { id, quantity } = this.props;
        return(
            <div id={id + 'Picker'} className="quantityPicker">
                <div className="quantityPickerText">
                    <p>{quantity}</p>
                </div>
                <div className="quantityPickerButtonHolder">
                    <button onClick={this.increaseQuantity}>+</button>
                    <button onClick={this.decreaseQuantity}>-</button>
                </div>
            </div>
        );
    }
}

export default QuantityPicker;