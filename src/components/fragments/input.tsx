export const InputForm = ({label, placeholder, type, id, className}) => {
    return (
        <>
            <label htmlFor={id} className={className}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} />

        </>
    )
}
