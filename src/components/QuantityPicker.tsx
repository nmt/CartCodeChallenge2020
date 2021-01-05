import React from 'react';

interface QuantityPickerProps {
    id: string,
    type: string,
    quantity: number,
    item: Object,
    onQuantityChange?: Function,
}

class QuantityPicker extends React.Component<QuantityPickerProps, {}> {
    constructor(props: any) {
        super(props);

        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
    }

    increaseQuantity() {
        let newQuantity = this.props.quantity;
        newQuantity = newQuantity + 1;
        this.props.onQuantityChange?.(this.props.type, newQuantity);
    }

    decreaseQuantity() {
        let newQuantity = this.props.quantity;
        // Ensure quantity cannot go into negatives
        if (newQuantity > 0) {
            newQuantity = newQuantity - 1;
            this.props.onQuantityChange?.(this.props.type, newQuantity);
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
                    <button className="increaseButton" onClick={this.increaseQuantity}>+</button>
                    <button className="decreaseButton" onClick={this.decreaseQuantity}>-</button>
                </div>
            </div>
        );
    }
}

export default QuantityPicker;