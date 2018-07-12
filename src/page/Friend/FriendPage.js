import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import TabTopView from "../../common/TabTopView";

export default class FriendPage extends Component {
    static navigationOptions = {
        tabBarLabel: '好友',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../img/fri_sel.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../../img/fri_nor.png')}/>
            );
        },
    };

    render() {
        return (
            <TabTopView navigate={this.props.navigation.navigate}/>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIcon: {
        width: 21,
        height: 21,
    }
});
