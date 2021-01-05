import React from 'react';

interface QuantityPickerProps {
    id: string,
    type: string,
    quantity: number,
    item: Object,
    onQuantityChange?: Function,
}

type QuantityPickerState = {
    quantity: number,
}

class QuantityPicker extends React.Component<QuantityPickerProps, QuantityPickerState> {
    constructor(props: any) {
        super(props);

        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);

        this.state = {
            quantity: this.props.quantity,
        };
    }

    increaseQuantity() {
        let newQuantity = this.state.quantity;
        newQuantity = newQuantity + 1;
        this.props.onQuantityChange?.(this.props.type, newQuantity);

        this.setState({
            quantity: newQuantity,
        })
    }

    decreaseQuantity() {
        let newQuantity = this.state.quantity;
        // Ensure quantity cannot go into negatives
        if (newQuantity > 0) {
            newQuantity = newQuantity - 1;
            this.props.onQuantityChange?.(this.props.type, newQuantity);
        }

        this.setState({
            quantity: newQuantity,
        })
    }

    render() {
        const { id } = this.props;
        return(
            <div id={id + 'Picker'} className="quantityPicker">
                <div className="quantityPickerText">
                    <p>{this.state.quantity}</p>
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