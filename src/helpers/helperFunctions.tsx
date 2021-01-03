function formatPrice(cents: number) {
    return (cents/100).toLocaleString("en-AU", {style: "currency", currency: "AUD", maximumFractionDigits: 2});
}

export {formatPrice};