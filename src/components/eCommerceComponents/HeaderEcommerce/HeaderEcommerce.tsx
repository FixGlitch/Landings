import BreadcrumbEcommerce from "../BreadCrumbEcommerce/BreadCrumbEcommerce";
import FilterEcommerce from "../FilterEcommerce/FilterEcommerce";
import LabelsEcommerce from "../LabelsEcommerce/LabelsEcommerce";
import PageTitleEcommerce from "../PageTitleEcommerce/PageTitleEcommerce";

interface BreadcrumbEcommerceProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const HeaderEcommerce = ({
  sidebarOpen,
  setSidebarOpen,
}: BreadcrumbEcommerceProps) => {
  return (
    <header className="py-6 lg:mx-auto lg:w-1/2">
      <BreadcrumbEcommerce
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-5">
        <PageTitleEcommerce />
        <FilterEcommerce />
      </div>
      <LabelsEcommerce />
    </header>
  );
};

export default HeaderEcommerce;
