import { FC } from "react";
import { useParams } from "react-router";
import OrderPreview from "./components/OrderPreview/OrderPreview";
import AccountNavigation from "./components/AccountNavigation";
import { testOrder } from "./temporaryOrderData";
import ProfileMenu from "./components/ProfileMenu/ProfileMenu";
import { ACCOUNT_PAGE } from "./data";

const Account: FC = () => {
  const params = useParams<{ accountPage: ACCOUNT_PAGE }>();

  const filteredOrders = testOrder.filter((order) => {
    if (params.accountPage === ACCOUNT_PAGE.Orders) {
      return order.status !== "Returned";
    }
    if (params.accountPage === ACCOUNT_PAGE.Returns) {
      return order.status === "Returned";
    }
    return false;
  });

  return (
    <div className="w-[1032px] flex items-center justify-center overflow-hidden mt-[168px]">
      <div className="w-full flex justify-between gap-6">
        <div className="w-[328px] flex flex-col gap-8">
          <p className="font-inter text-[16px] leading-[19px]">
            Welcome! This is your Shade. profile
          </p>
          <AccountNavigation />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          {params.accountPage === ACCOUNT_PAGE.Profile ? (
            <ProfileMenu />
          ) : (
            <>
              {filteredOrders.map((order) => (
                <OrderPreview
                  key={order.id}
                  id={order.id}
                  status={order.status}
                  price={order.price}
                  items={order.items}
                  date={order.date}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
