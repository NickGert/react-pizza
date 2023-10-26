// import pizzas from "./assets/pizzas.json";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import Sort from "./../components/Sort";
import Categories from "./../components/Categories";
import PizzaBlock from "./../PizzaBlock/PizzaBlock";
import Skeleton from "./../PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { setCategoryId, setCurrentPage } from "../redux/filterSlice";
import { setItems } from "../redux/pizzaSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const items = useSelector((state) => state.pizzaSlice.items);
  const activeIndex = useSelector((state) => state.filterSlice.categoryId);
  const activeSort = useSelector((state) => state.filterSlice.sort);
  const currentPage = useSelector((state) => state.filterSlice.currentPage);

  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  // const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));
  //     console.log(params);
  //   }
  // }, []);
  React.useEffect(() => {
    setIsLoading(true);
    const order = activeSort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = activeSort.sortProperty.replace("-", "");
    const category = activeIndex > 0 ? `category=${activeIndex}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    // fetch(
    //   `https://63dd9a03df83d549cea38e5d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search} `
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //     setIsLoading(false);
    //   });

    axios(
      `https://63dd9a03df83d549cea38e5d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search} `
    )
      .then((res) => {
        dispatch(setItems(res.data));
        setIsLoading(false);
      })

      .catch((err) => {
        setIsLoading(false);
        console.log("axiso error");
      });
  }, [activeIndex, activeSort, searchValue, currentPage]);

  // React.useEffect(() => {
  //   const queryString = qs.stringify({
  //     sortProperty: activeSort.sortProperty,
  //     activeIndex,
  //     currentPage,
  //   });
  //   navigate(`?${queryString}`);
  // }, [activeIndex, activeSort, currentPage]);

  const pizzas = items
    // .filter((obj) => {
    //   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // })
    .map((obj) => (
      <PizzaBlock
        key={obj.id}
        {...obj}
        // title={obj.title}
        // price={obj.price}
        // imageUrl={obj.imageUrl}
        // sizes={obj.sizes}
        // types={obj.types}
      />
    ));

  const skeletons = [...new Array(10)].map((value, index) => (
    <Skeleton key={index} />
  ));
  return (
    <>
      <div className="content__top">
        <Categories
          activeIndex={activeIndex}
          onChangeCategory={onChangeCategory}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas} </div>
      <Pagination onChangePage={onChangePage} />
    </>
  );
};

export default Home;
