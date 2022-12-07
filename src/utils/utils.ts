export const options = [
    { value: "", text: "--Choose an option--" },
    { value: "Food", text: "Food" },
    { value: "Medicals", text: "Medicals" },
    { value: "Transport", text: "Transport" },
    { value: "Others", text: "Others" },
];

export const classNames = (...classes: any[]) => {
    return classes.filter(Boolean).join(" ");
};