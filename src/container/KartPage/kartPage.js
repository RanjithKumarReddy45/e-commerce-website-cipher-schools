import react from "react";
import "./KartPage.css";
import NavBar from "../../components/NavBar/NavBar";
import KartPageBody from "../../components/KartPageBody/KartPageBody";

function KartPage() {
    return(
        <>
        <NavBar ShowSignInButton={false} ShowHomeButton={true} />
        <KartPageBody />
        </>
    )
}

export default KartPage;