const CREATE_PIC_SCHEMA = {
    url: ["min", 10],
    alt: ["min", 2],
    credits: ["min", 2],
    price: "required",
}

export default CREATE_PIC_SCHEMA;