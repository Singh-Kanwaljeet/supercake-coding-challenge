import { Toaster } from "react-hot-toast";
import CustomerList from "./pages/customer-list/page";

export default function Home() {
  return (
    <div className="font-poppins">
      <Toaster position="top-center" />
      <CustomerList />
    </div>
  );
}
