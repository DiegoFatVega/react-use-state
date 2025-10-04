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
                        <button className={`btn btn-${index == currentDescription ? 'primary' : 'light'} mx-2`} key={lang.id} onClick={() => handleClick(index)}>
                            {lang.title}
                        </button>
                    ))

                }
            </div>
            {
                currentDescription === null ? <p className="my-5 mx-5">NESSUN LINGUAGGIO SELEZIONATO</p> :
                    <div className="card my-4">
                        <div className="card-body">
                            <h2>{languages[currentDescription].title}</h2>
                            <h3>{languages[currentDescription].description}</h3>
                        </div>
                    </div >

            }

        </div>
    )

}