import List from "./List";
import Set from "./Set";
import {ConfirmProvider} from "material-ui-confirm";
import React, {useState} from "react";

const App = () => {
    const [showEdit, setShowEdit] = useState(false);
    const [edit, setEdit] = useState({});

    return (
        <ConfirmProvider>
            <List setShowEdit={setShowEdit} setEdit={setEdit}/>
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
        </ConfirmProvider>
    );
}

export default App
