export default function TernaryOperator() {
    const loggedIn = true;
    return(
        <div id="wd-ternary-operator">
            <h3>Ternary-Operator</h3>
            <h4>Logged In</h4>
            { loggedIn ? <p>Welcome</p> : <p>Please login</p> } <hr/>
        </div>
    )

}