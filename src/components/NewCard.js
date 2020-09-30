import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
// import { FontAwesome, Ionicons } from '@expo/vector-icons'
//import { FontAwesome, Ionicons } from 'react-native-elements';
// import styled from 'styled-components/native'
import * as MyColors from '../utils/colors';
import { FormInput, Button } from 'react-native-elements';
import { addNewCard } from '../actions';
import { connect } from 'react-redux';
import FormValidationMessage from './FormValidationMessage';
import ElevatedView from 'react-native-elevated-view';

//const SCREEN_WIDTH = Dimensions.get('window').width;
//const SCREEN_HEIGHT = Dimensions.get('window').height;

class NewCard extends React.Component {
  // componentDidMount(){
  //   console.log('this.props en CDM', this.props);
  // }

  state = {
    question: '',
    answer: '',
    showError: false,
  };

  saveNewCard = () => {
    const { question, answer } = this.state;

    if (question.trim().length > 0 && answer.trim().length > 0) {
      const {
        item: { title },
      } = this.props.navigation.state.params;
      const card = { question: question, answer: answer };
      this.props.dispatch(addNewCard({ card, title }));
      this.props.navigation.goBack();
      this.setState({ showError: false, question: '', answer: '' });
    } else {
      this.setState({ showError: true });
    }
  };

  render() {
    // console.log('props en NewCard ',this.props);
    return (
      <View style={{ flex: 1, backgroundColor: MyColors.textPrimaryColor }}>
        <ElevatedView style={styles.elevatedContainer} elevation={15}>
          <View style={{ marginTop: 20, marginBottom: 20, margin: 20 }}>
            <FormInput
              placeholder="Question"
              placeholderTextColor={MyColors.textPrimaryColor}
              shake={this.state.showError}
              onChangeText={(text) => this.setState({ question: text })}
              ref={(input) => (this.textInput = input)}
              inputStyle={{ color: MyColors.textPrimaryColor }}
              selectionColor={MyColors.textPrimaryColor}
              underlineColorAndroid={MyColors.lightPrimaryColor}
            />
            {this.state.showError && <FormValidationMessage validationText={'Question Required'} />}
            <FormInput
              placeholder="Answer"
              placeholderTextColor={MyColors.textPrimaryColor}
              shake={this.state.showError}
              onChangeText={(text) => this.setState({ answer: text })}
              ref={(input) => (this.textInput = input)}
              inputStyle={{ color: MyColors.textPrimaryColor }}
              selectionColor={MyColors.textPrimaryColor}
              underlineColorAndroid={MyColors.lightPrimaryColor}
            />
            {this.state.showError && <FormValidationMessage validationText={'Answer Required'} />}
          </View>
          <View style={styles.btnContainer}>
            <Button
              Component={TouchableOpacity}
              borderRadius={10}
              leftIcon={{ name: 'add-box' }}
              title="Submit"
              backgroundColor={MyColors.accentColor}
              onPress={this.saveNewCard}
              buttonStyle={styles.btn}
              raised
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
    // height:200,
    backgroundColor: MyColors.defaultPrimaryColor,
    borderRadius: 5,
  },
  btnContainer: {
    height: 60,
    // marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyColors.textPrimaryColor,
  },
  btn: {
    width: 200,
  },
});

//export default connect()(NewCard);
export default NewCard;
