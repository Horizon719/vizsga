
export default function SelectInput(props){
    return <select onChange={props.handleChange}>
    {props.temak.map((element, key) => {
        return(
            <option key={key}>
                {element.temanev}
            </option>
        )
    })}
    </select>
}
