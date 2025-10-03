
import languages from "../data/languages"

export default function Card() {


    return (
        <div className="Card">
            {languages.map(item => (
                <div className="item" key={item.id}>
                    <h2>{item.title}</h2>
                    <h3>{item.description}</h3>
                </div>
            ))}
        </div>
    )
}