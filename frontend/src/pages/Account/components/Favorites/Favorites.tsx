import ProductCard from "@/components/ProductCard/ProductCard";
import { ProductCardSize } from "@/components/ProductCard/types";
import { NEW_COLLECTION } from "@/pages/Home/data";
import { useAppSelector } from "@/redux/hooks";
import { selectFavoriteItems } from "@/redux/slices/userFavorites";

const Favorites = () => {
  const favoriteItems = useAppSelector(selectFavoriteItems);

  const filteredCollection = NEW_COLLECTION.filter((item) =>
    favoriteItems.includes(item.id),
  );

  return (
    <div className="pt-[50px] w-full xl:max-w-[684px] 2xl:max-w-[1032px]">
      {filteredCollection.length ? (
        <div className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-6 justify-items-center">
          {filteredCollection.map((favorite) => (
            <ProductCard
              key={favorite.id}
              size={ProductCardSize.Small}
              title={favorite.title}
              price={favorite.price}
              backgroundImage={favorite.backgroundImage}
              id={favorite.id}
            />
          ))}
        </div>
      ) : (
        <p className="text-xs text-black-000 text-center font-montserrat uppercase">
          You have no Favorites
        </p>
      )}
    </div>
  );
};

export default Favorites;
