import List from "./List";
import Set from "./Set";
import React, {useState} from "react";
import {ConfirmProvider} from "material-ui-confirm";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
            <div className="Router">
                <Router>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/products/new">New</Link>
                    </nav>
                    <Switch>
                        <Route path="/products" exact={true}>
                            <ConfirmProvider>
                                <List setShowEdit={setShowEdit} setEdit={setEdit}/>
                            </ConfirmProvider>
                        </Route>
                        <Route path="/products/new">
                            <Set
                                type="POST"
                                title="Product name"
                                price={0}
                                description="Description of the product"
                                image=""
                                category="Category name"
                            />
                        </Route>
                    </Switch>
                </Router>
            </div>
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
