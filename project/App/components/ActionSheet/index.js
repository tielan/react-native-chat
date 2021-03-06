'use strict';

var React = require('react');var ReactNative = require('react-native');
var {
    StyleSheet,
    TouchableOpacity,
    View,
} = ReactNative;

var Button = require('./button.js');
var Overlay = require('./overlay.js');
var Sheet = require('./sheet.js');

module.exports =  React.createClass({
    getDefaultProps() {
        return {
            cancelText: 'Cancel',
        };
    },
    render() {
        return (
            <Overlay visible={this.props.visible}>
                <View style={styles.actionSheetContainer}>
                    <TouchableOpacity
                        style={{flex:1}}
                        onPress={this.props.onCancel}>
                    </TouchableOpacity>
                    <Sheet visible={this.props.visible}>
                        <View style={styles.buttonContainer}>
                            {this.props.children}
                        </View>
                        <Button
                            buttonStyle={styles.cancelButton}
                            textStyle={styles.cancelText}
                            onPress={this.props.onCancel}>{this.props.cancelText}</Button>
                    </Sheet>
                </View>
            </Overlay>
        );
    },
});
module.exports.Button = Button;

var styles = StyleSheet.create({
    actionSheetContainer: {
        flex: 1,
        padding: 10,
        paddingBottom: 6,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    buttonContainer: {
        borderRadius:6,
        overflow: 'hidden',
    },
    cancelButton: {
        marginTop:6,
        marginBottom:6,
        borderRadius:6,
        backgroundColor: '#A0D26F',
        borderBottomWidth: 0,
    },
    cancelText: {
        color:'#FFFFFF',
    }
});
