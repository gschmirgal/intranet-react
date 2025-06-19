/**
 * CheckBox component renders a customizable checkbox input with a label.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {boolean} props.checked - Determines whether the checkbox is checked.
 * @param {function} props.onChange - Callback function called when the checkbox state changes. Receives the new checked state as a boolean.
 * @param {string} props.label - The label text displayed next to the checkbox.
 * @param {string} props.id - The unique id for the checkbox input and its label.
 * @returns {JSX.Element} The rendered checkbox component.
 */
export default function Filter({value, onChange, label, id}){
    return <div>
        <input
            type="text"
            value={value}
            id={id}
            onChange={onChange}
            placeholder={label}
        />
    </div>

}