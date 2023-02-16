import Navin from "react";

const Navbar = () => {
    return (
        <nav class="navbar bg-dark navbar-dark">
            <a class="navbar-brand"><img src="https://sgp1.digitaloceanspaces.com/quickcompany/trademark/8f07f6f077098875.jpg"
                alt="logo" style={{ width: "50px" }} />OptiKraft!-Krafter for your eye!</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="collapsibleNavbar">

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="signup1.html"><i class="fas fa-user"></i> SIGN-IN</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="eyeglass"><i class="fas fa-glasses"></i> EYEGLASSES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdtSJmtneS4LOvZZjUIET1vNIzD35-udctTXUWrHxFs3COZiA/viewform?usp=sf_link"><i
                                class="fas fa-stethoscope"></i> BOOK AN APPOINTMENT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html"><i class="far fa-address-book"></i> CONTACT US</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;
