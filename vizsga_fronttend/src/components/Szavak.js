
export default function Szavak(props){
    return <div>
        {props.temaSzavak.map((element, key) => {
            return(
            <div className='sor' key={key}>
                <div className='angolSzo'>{element.angol}</div>
                <div className='magyarSzo'>{element.magyar}</div>
                <div className='visszajelzes'></div>
            </div>
            )
        })}
    </div>
}
