import { useState } from "react";
import languages from "../data/languages";
import Card from "./Card";
export default function Buttons() {

    const [currentDescription, setCurrentDescription] = useState(null);


    function handleClick(index) {
        setCurrentDescription(index)
    }

    return (
        <div className="items">
            <div className="item buttons" >
                {
                    languages.map((lang, index) => (
                        <button className={`btn btn-${index == currentDescription ? 'primary' : 'light'} mx-2`} key={lang.id} onClick={() => handleClick(index)}>
                            {lang.title}
                        </button>
                    ))

                }
            </div>

            {

                currentDescription === null ? <p className="my-5 mx-5">NESSUN LINGUAGGIO SELEZIONATO</p> :
                    <Card title={languages[currentDescription].title} description={languages[currentDescription].description}></Card>
            }
        </div>
    )

} 