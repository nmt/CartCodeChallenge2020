import React from 'react';

interface QuantityPickerProps {
    id: string,
    type: string,
    items: Array<Object>,
}

class QuantityPicker extends React.Component<QuantityPickerProps, {}> {
    handleClick() {
    }

    render() {
        const items = this.props.items;
        const type = this.props.type;
        const item: any = items.filter(function(item: any) { return (item.name === type) });
        const quantity = item[0] ? item[0].quantity : '';

        return(
            <div id={this.props.id + 'Picker'} className="quantityPicker">
                <button onClick={this.handleClick}>+</button>
                <p>{quantity}</p>
                <button>-</button>
            </div>
        );
    }
}

export default QuantityPicker;