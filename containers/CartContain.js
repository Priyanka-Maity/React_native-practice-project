import React, { useContext, } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { lightThemes, fontColor } from '../constants/Color';
export default class CartContain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectAll: false,
            cartItemsIsLoading: false,
            cartItems: [
                { productimage: 'https://5.imimg.com/data5/ZJ/OG/YE/ANDROID-38860140/product-jpeg-500x500.jpg', salePrice: ' 3499', productname: 'Blue Denim Shirt', qty: 1, checked: 1 },
                { productimage: 'https://modaproduct.com/uploads/3/4/9/4/34940832/2492-custom-suits-moda-product-photography_orig.png', salePrice: '2299', productname: 'Blue Denim Shirt', qty: 1, checked: 0 },
                { productimage: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/watch-of-the-week_breitling-transocean-day-date-u.s.-limited-edition_2000x1333.jpg?itok=NgVnWt_K', salePrice: ' 200', productname: 'Blue Denim Shirt', qty: 1, checked: 1 },
                { productimage: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/watch-of-the-week_breitling-transocean-day-date-u.s.-limited-edition_2000x1333.jpg?itok=NgVnWt_K', salePrice: ' 599', productname: 'Blue Denim Shirt', qty: 1, checked: 1 }
            ]
        }
    }
    selectHandler = (index, value) => {
        const newItems = [...this.state.cartItems];
        newItems[index]['checked'] = value == 1 ? 0 : 1;
        this.setState({ cartItems: newItems });
    }
    quantityHandler = (action, index) => {
        const newItems = [...this.state.cartItems];

        let currentQty = newItems[index]['qty'];

        if (action == 'more') {
            newItems[index]['qty'] = currentQty + 1;
        } else if (action == 'less') {
            newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
        }

        this.setState({ cartItems: newItems });
    }

    render() {
        const styles = StyleSheet.create({
            centerElement: { justifyContent: 'center', alignItems: 'center' },
        });

        const { cartItems, cartItemsIsLoading, selectAll } = this.state;


        return (
            <View style={{ flex: 2, margin: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Product</Text>
                    <Text>Quantity</Text>
                </View>
                <View>

                    {
                        cartItems && cartItems.map((item, i,) => (


                            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 2, borderBottomColor: fontColor.mediumFont }}>
                                <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => this.selectHandler(i, item.checked)}>
                                        <Image source={{ uri: item.productimage }} style={{ marginVertical: 10, height: 83, width: 70, borderRadius: 4 }} />
                                    </TouchableOpacity>
                                    <View style={{ flex: 2, paddingHorizontal: 5 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.productname}</Text>
                                        <Text> price: {item.salePrice}</Text>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#370617' }}>Total price</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', marginBottom: 6, }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <TouchableOpacity onPress={() => this.quantityHandler('less', i)}>
                                            <Text style={{ paddingHorizontal: 8, fontSize: 15, borderWidth: 1, borderColor: 'gray', borderRadius: 5, textAlign: 'center', backgroundColor: '#d3d3d3' }}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={{ paddingHorizontal: 10 }}>{item.qty}</Text>
                                        <TouchableOpacity onPress={() => this.quantityHandler('more', i)}>
                                            <Text style={{ paddingHorizontal: 8, fontSize: 15, borderWidth: 1, borderColor: 'gray', borderRadius: 5, textAlign: 'center', backgroundColor: '#d3d3d3' }}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ paddingTop: 6 }}>
                                        <Text style={{ fontWeight: 'bold' }}> ₹{item.qty * item.salePrice}</Text>

                                    </View>
                                </View>
                            </View>

                        ))
                    }
                </View>
            </View>
        )
    }
}
