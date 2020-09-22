import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import { FontAwesome, Ionicons } from 'react-native-elements';
import * as MyColors from '../utils/colors';
//import TextButton from './TextButton';
import { FormInput, Button } from 'react-native-elements';
//import { saveDeckTitle, persistData } from '../storage';
import { addDeckItem, getDeckItem } from '../actions';
import { connect } from 'react-redux';
import FormValidationMessage from './FormValidationMessage';
import ElevatedView from 'react-native-elevated-view';
import startCase from 'lodash.startcase';

class NewDeck extends React.Component {
  state = {
    title: '',
    showError: false,
  };

  saveTitle = () => {
    const { title } = this.state;

    if (title.trim().length > 0) {
      const preparedTitle = startCase(title.toLowerCase()).replace(/\s+/g, '');
      const item = { title: preparedTitle, questions: [] };
      this.props.dispatch(addDeckItem({ title }));
      this.props.dispatch(getDeckItem({ deckItem: item }));
      this.props.navigation.navigate('Deck', { item });

      // this.props.navigation.goBack()
      // this.props.navigation.navigate('Deck')
      this.textInput.clearText();
      this.setState({ showError: false, title: '' });
    } else {
      this.setState({ showError: true });
    }
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: MyColors.textPrimaryColor }}>
        <ElevatedView elevation={15} style={styles.elevatedContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>What is the title of your new deck?</Text>
          </View>
          <View style={styles.txtInputContainer}>
            <FormInput
              placeholder="Deck Title"
              shake={this.state.showError}
              onChangeText={(text) => this.setState({ title: text })}
              ref={(input) => (this.textInput = input)}
              selectionColor={MyColors.primaryTextColor}
              underlineColorAndroid={MyColors.secondaryTextColor}
            />
            {this.state.showError && (
              <FormValidationMessage
                validationText={'Title Required'}
                txtColor={MyColors.accentColor}
              />
            )}
          </View>
          <View style={styles.btnContainer}>
            <Button
              Component={TouchableOpacity}
              borderRadius={10}
              icon={{ name: 'add-box' }}
              title="Create Deck"
              backgroundColor={MyColors.accentColor}
              onPress={this.saveTitle}
              buttonStyle={[styles.btn, { marginBottom: 10 }]}
            />
          </View>
        </ElevatedView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  elevatedContainer: {
    marginTop: 30,
    margin: 20,
    // width:350,
    backgroundColor: MyColors.textPrimaryColor,
    borderRadius: 5,
  },
  titleContainer: {
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    // fontWeight: 'bold'
  },
  txtInputContainer: {
    // flex:1,
    marginTop: 20,
    // marginBottom: 20,
    justifyContent: 'center',
    // borderTopColor: 'black'
  },
  txt: {
    // borderBottomColor: 'black'
    // borderTopColor:'black'
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 200,
  },
});

export default connect()(NewDeck);
