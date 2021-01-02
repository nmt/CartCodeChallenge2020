// TODO: Pad out to two decimal places
function formatPrice(cents: number) {
    return '$' + cents / 100;
}

export {formatPrice};