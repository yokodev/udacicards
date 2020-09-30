import React from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';

//import {  } from '@react-native-community/async-storage'\

import { persistData } from '../storage/index';
import { List, ListItem, Badge } from 'react-native-elements';
import * as MyColors from '../utils/colors';

import { connect } from 'react-redux';
//import { getDeckItem } from '../actions';
//import MyIModal from './InitModal';

const renderItem = ({ item }) => {
  const questions = item.questions ? item.questions.length : 0;
  return (
    <ListItem
      containerStyle={{ borderBottomColor: MyColors.dividerColor }}
      onPress={() => this.goToDeckItem({ item })}>
      <ListItem.Content>
        <ListItem.Title style={{ color: MyColors.primaryTextColor }}>{item.title}</ListItem.Title>
        <Badge
          value={questions}
          textStyle={{ color: MyColors.textPrimaryColor }}
          containerStyle={{ backgroundColor: MyColors.accentColor }}
        />
      </ListItem.Content>
      <ListItem.Chevron color={MyColors.secondaryTextColor} />
    </ListItem>
  );
};

class ListDeck extends React.Component {
  state = {
    showModal: true,
  };

  setInitialData = () => {
    persistData().then((data) => console.log(`The Data: ${data}`));
  };

  goToDeckItem = ({ item }) => {
    //this.props.dispatch(getDeckItem({ deckItem: item }));
    //this.props.navigation.navigate('Deck', { item });
    console.log(item);
  };

  toggleModal = () => {
    this.setState({ showModal: false });
    this.props.navigation.navigate('AddDeck');
  };

  render() {
    //this.setInitialData();
    //showAsyncStorageContentInDev()
    const { deckList } = this.props;
    console.log(`Hey que ondas ${JSON.stringify(deckList)}`);
    const isEmpty = Object.keys(deckList).length < 1 ? true : false;
    console.log(`isEmpty : ${isEmpty}`);
    let listToRender = <ActivityIndicator size={'large'} color={MyColors.accentColor} />;
    if (!isEmpty) {
      const list = Object.values(deckList);
      console.log('LISTA ', list);
      listToRender = (
        <FlatList data={list} renderItem={renderItem} keyExtractor={(item) => item.title} />
      );
    }
    return (
      <View style={{ flex: 1, backgroundColor: MyColors.textPrimaryColor }}>
        {listToRender}
        {/*{isEmpty && this.state.showModal && (*/}
        {/*<MyIModal modalState={this.state.showModal} toggleModal={this.toggleModal} />*/}
        {/*)}*/}
      </View>
    );
  }
}

function mapStateToProps({ deckList }) {
  return {
    deckList,
  };
}

//export default ListDeck;
export default connect(mapStateToProps)(ListDeck);
