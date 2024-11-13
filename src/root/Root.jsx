import { Outlet } from "react-router-dom";
import Header from "../layouts/Header/Header";

const Root = () => {
    return (
        <div>
            <Header />
            <main>
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Root;