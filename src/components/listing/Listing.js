import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getList, emptyList } from '../../actions/index';
import {
    FlatList,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    ImageBackground,
    View,
    ScrollView
} from 'react-native';

const Listing = ({ navigation }) => {
    const [text, onChangeText] = useState('');
    const [imgLoading, setImgLoading] = useState(true);
    const [textCall, setTxtCall] = useState(false)
    const { listData = {}, listLoadiing } = useSelector((state) => {
        const { listReducer = {} } = state;
        return listReducer
    });
    const { hits = [] } = listData;
    const dispatch = useDispatch();

    useEffect(() => {
        if (text) {
            setTxtCall(true)
            dispatch(getList(text));
        }
        else {
            dispatch(emptyList())
        }
    }, [text])

    const handleImageClick = (payload) => {
        navigation.navigate('Details', {
            imgDetails: payload
        });
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity activeOpacity={.5} onPress={() => handleImageClick(item)}>
            {/* {imgLoading && < ActivityIndicator color="#fff" />} */}
            <Image
                source={{ uri: item.largeImageURL }}
                style={styles.image}
                onLoadStart={() => setImgLoading(true)}
                onLoadEnd={() => setImgLoading(false)}
            />
        </TouchableOpacity >
    );

    return (
        <ImageBackground source={require('../../assets/images/bg.png')} resizeMode="cover" style={styles.bgImage}>
            <SafeAreaView style={styles.sectionContainer}>
                <Text style={styles.heading}>Stunning free images & royalty free stock </Text>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={'Start typing to search images'}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoFocus={true}
                    clearButtonMode="always"
                />
                {listLoadiing ?
                    < ActivityIndicator />
                    :
                    <Fragment>
                        <FlatList
                            data={hits}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        {/* <ScrollView>
                            {hits.map((data, index) => {
                                return <TouchableOpacity activeOpacity={.5} onPress={() => handleImageClick(data)} key={index}>
                                    {imgLoading && < ActivityIndicator color="#fff" />}
                                    <Image
                                        source={{ uri: data.largeImageURL }}
                                        style={styles.image}
                                        onLoadStart={() => setImgLoading(true)}
                                        onLoadEnd={() => setImgLoading(false)}
                                    />
                                </TouchableOpacity >
                            })}
                        </ScrollView> */}
                    </Fragment>
                }
                {(textCall && text.length > 0 && hits.length == 0) ?
                    <View style={styles.noImgWrap}>
                        <Image source={require('../../assets/images/noDataWh.png')} />
                        <Text style={styles.heading}>No image found</Text>
                    </View>
                    :
                    <Text style={styles.simpleTxt}>Search Popular Images: halloween, wallpaper, nature, background, dog, christmas, cat, autumn, food, flower, sky, money, coronavirus</Text>
                }
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        paddingHorizontal: 16
    },
    heading: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 30,
        color: '#fff'
    },
    simpleTxt: {
        fontSize: 12,
        textAlign: 'center',
        color: '#e3e3e3',
        marginBottom: 30,
    },
    image: {
        marginBottom: 16,
        height: 250,
        width: '100%',
        borderRadius: 6,
    },
    noImgWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    inputBox: {
        padding: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        fontSize: 18,
        marginBottom: 20,
        backgroundColor: '#fff',
        width: '100%'
    },
    bgImage: {
        height: '100%'
    }
});

export default Listing
