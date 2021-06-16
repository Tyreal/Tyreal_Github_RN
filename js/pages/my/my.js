import * as React from 'react';
import { Button, StyleSheet, Text, View } from "react-native";
import actions from "../../action";
import { connect } from "react-redux";

class My extends React.Component{
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>my</Text>
                <Button
                    title={'改变颜色'}
                    onPress={() => {
                        this.props.onThemeChange('red');
                    }}
                />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onThemeChange: theme => dispatch(actions.onThemeChange(theme))
});

export default connect(null, mapDispatchToProps)(My);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
