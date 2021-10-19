import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

const ListingDetail = ({ route, navigation }) => {
    const { params = {} } = route,
        { imgDetails = {} } = params;
    const { largeImageURL = '', user = '', tags = '', type = '', imageHeight = '', imageWidth = '', views = '', downloads = '' } = imgDetails;

    return (
        <SafeAreaView style={styles.sectionContainer}>
            <ScrollView style={styles.detailWrap}>
                <Image
                    source={{ uri: largeImageURL }}
                    style={styles.image}
                />
                <Text style={styles.simpleTxt}>User : {user}</Text>
                <Text style={styles.simpleTxt}>Tags : {tags}</Text>
                <Text style={styles.simpleTxt}>Type : {type}</Text>
                <Text style={styles.simpleTxt}>Resolution : {imageWidth}x{imageHeight}</Text>
                <Text style={styles.simpleTxt}>Total Views : {views}</Text>
                <Text style={styles.simpleTxt}>Total Downloads : {downloads}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        paddingHorizontal: 16,
        backgroundColor: '#02040A',
        height: '100%'
    },
    simpleTxt: {
        fontSize: 18,
        color: '#333',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontWeight: '500'
    },
    detailWrap: {
        backgroundColor: '#fff',
        borderRadius: 6,
    },
    image: {
        marginBottom: 16,
        height: 250,
        width: '100%'
    }
});


export default ListingDetail
