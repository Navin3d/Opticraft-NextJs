import Navbar from "../components/Navbar";
import Eyeglass from "../components/Eyeglass";


const Route = () => {
    return (
        <div>
            <Navbar />
            <Eyeglass image={"https://cdn.shopify.com/s/files/1/0015/2879/1092/files/newmenubanner.jpg?v=1583826330"} text="Shop Men" />
            <Eyeglass image={"https://cdn.shopify.com/s/files/1/0015/2879/1092/files/shopWomenMobile.png?v=1583741796"} text="Shop Women" />
            <Eyeglass image={"https://cdn.shopify.com/s/files/1/0015/2879/1092/files/eyeglass_kids.jpg?v=1586839209"} text="Shop kids" />
        </div>
    )
}

export default Route;
