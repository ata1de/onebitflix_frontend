import useSWR from "swr";
import categoriesService, { CategoryType } from "../../../services/categoriesService";
import styles from "../../../../styles/slideSection.module.scss";
import ListCategoriesSlide from "../ListCategoriesSlide";

// import SwrSpinner from "../../common/swrSpinner";

const ListCategories =  () => {
    const { data, error } = useSWR("/listCategories", categoriesService.getCategories);
    console.log(data)

    if (error) return error;
    if (!data) return <p>Loading...</p>;
    
    return (
    <div>
        {data.data.categories?.map((category: CategoryType) => (
	    <ListCategoriesSlide
            key={category.id}
            categoryId={category.id}
            categoryName={category.name}
            />
		))}
    </div>
  )
}

export default ListCategories