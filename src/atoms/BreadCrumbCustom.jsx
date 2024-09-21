import { Breadcrumb } from "flowbite-react";
import { LuBox } from "react-icons/lu";

const BreadCrumbCustom = () => {
    return (
        <div>
            <Breadcrumb aria-label="Default breadcrumb example" className="w-auto">
                <Breadcrumb.Item href="#" icon={LuBox}>
                    Dashboard
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">Form</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default BreadCrumbCustom