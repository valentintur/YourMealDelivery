import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [
      { title: 'burger', image: '/img/burger.png' },
      { title: 'snack', image: '/img/snack.png' },
      { title: 'hot-dog', image: '/img/hot-dog.png' },
      { title: 'combo', image: '/img/combo.png' },
      { title: 'shawarma', image: '/img/shawarma.png' },
      { title: 'pizza', image: '/img/pizza.png' },
      { title: 'wok', image: '/img/wok.png' },
      { title: 'dessert', image: '/img/dessert.png' },
      { title: 'sauce', image: '/img/sauce.png' },
    ],
    error: '',
    activeCategory: 0,
  };

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory()
    }
})

export default categorySlice.reducer;