import SellerListings from "./SellerListings";
import SellerNotificationCard from "./SellerNotificationCard";
function SellerPage() {
  return (
    <div className="min-h-lvh flex w-full justify-center">
      <div className=" p-3 max-w-screen-xl w-full gap-8 flex flex-col justify-center items-center">
        <SellerNotificationCard />
        <h1 className="font-bold text-3xl self-start">Your listings</h1>
        <SellerListings />
        <button className="bg-first-primary hover:bg-first-primary-light transition-all duration-150 p-4 text-white rounded-md">
          Create new listing
        </button>
      </div>
    </div>
  );
}

export default SellerPage;
