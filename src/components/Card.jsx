
export default function Card({ title, description }) {

    return (
        < div className="card my-4" >
            <div className="card-body">
                <h2>{title}</h2>
                <h3>{description}</h3>
            </div>
        </div >

    )
}