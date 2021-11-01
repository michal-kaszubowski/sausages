import List from "./List";
import Set from "./Set";
import React, {useState} from "react";
import {ConfirmProvider} from "material-ui-confirm";

const App = () => {
    /** Function
     * This is the main function of the React
     * App. It handles every other component
     * for this project.
     */

    const [showEdit, setShowEdit] = useState(false);
    const [edit, setEdit] = useState({});

    return (
        <div className="App">
            <ConfirmProvider>
                <List setShowEdit={setShowEdit} setEdit={setEdit}/>
            </ConfirmProvider>
            <Set
                type="POST"
                title="Product name"
                price={0}
                description="Description of the product"
                image=""
                category="Category name"
            />
            {showEdit === true
                ? <Set
                    type="PUT"
                    title={edit.title}
                    price={edit.price}
                    description={edit.description}
                    image={edit.image}
                    category={edit.category}
                    setShowEdit={setShowEdit}
                />
                : null}
        </div>
    );
}

export default App
