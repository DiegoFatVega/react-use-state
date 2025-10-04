import { useState } from "react";
import languages from "../data/languages"
import card from "./Card"

export default function Buttons() {

    const [currentDescription, setCurrentDescription] = useState(null);

    console.log(currentDescription)

    function handleClick(index) {
        setCurrentDescription(index)
    }

    return (
        <div className="items">
            <div className="item buttons" >
                {

                    languages.map((lang, index) => (
                        <button key={lang.id} onClick={() => handleClick(index)}>{lang.title}</button>
                    ))

                }
            </div>
            {
                currentDescription === null ? <p>NESSUN LINGUAGGIO SELEZIONATO</p> :
                    <div className="item">
                        <h2>{languages[currentDescription].title}</h2>
                        <h3>{languages[currentDescription].description}</h3>
                    </div >

            }

        </div>
    )

}