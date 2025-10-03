import { useState } from "react";
import Card from "./Card";
import languages from "../data/languages"

export default function Buttons() {

    const [currentDescription, setCurrentDescription] = useState(1);

    function handleClick(e) {
        const currentItemId = Number(e.target.getAttribute(``))
    }

    return (
        <div className="items">
            <div className="item buttons" >
                {

                    languages.map(lang => (

                        <button key={lang.id}>{lang.title}</button>

                    ))

                }
            </div>
            {
                languages.map(lang => (
                    <div className="item" key={lang.id}>
                        <h2>{lang.title}</h2>
                        <h3>{lang.description}</h3>
                    </div>
                ))
            }

        </div >

    )


}