export default function Eyeglass({ image, text }) {
    return (
        <div>
            <div class="container-fluid">
                <img src={ image } width="100%" />
                <h1>{ text }</h1>
            </div>
        </div>
    );
}
