import "./style.scss";

export function Title(props) {
    return (
        <div className="title">
            <h1>{props.children}</h1>
        </div>
    );
}