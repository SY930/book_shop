/**
 * Created by SONG on 2017/11/26.
 */
import * as Types from './mutations-types'
const mutations = {
    [Types.ADD_CART](state,book){
        //book是添加的一本书，如果有这本书累加的是数量，如果没有数量为1 放到cartList
        let product = state.cartList.find(item=>item.bookId===book.bookId);
        if(product){
            product.bookCount+=1;
            state.cartList =[...state.cartList];
        }else {
            book.bookCount = 1;
            //将原有数据改变  或者可以替换
            state.cartList =[...state.cartList,book];//用新数组替换掉老数组
            // state.cartList.push(book) 改变原有数据
        }

    }
};
export default mutations