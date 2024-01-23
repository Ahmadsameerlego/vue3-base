import { defineStore } from "pinia";
import products from '@/data/products';


export const useProductStore =  defineStore('ProductStore', {
    state : ()=>{
        return{
            products : products
        }
    }
})