/**
 * Created by SONG on 2017/11/26.
 */
let getters = {
    count:(state)=>state.cartList.reduce((prev,next)=>prev+next.bookCount,0)
};
export default getters