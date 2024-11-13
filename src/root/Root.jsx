import { Outlet } from "react-router-dom";
import Header from "../layouts/Header/Header";

const Root = () => {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <Outlet />
                </section>
            </main>
        </div>
    );
};

export default Root;