import React, {useState} from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';

//import {  } from '@react-native-community/async-storage'\
//import { persistData } from '../../storage/index';
import { ListItem, Badge } from 'react-native-elements';
import * as MyColors from '../../utils/colors';

//import { getDeckItem } from '../actions';
import MyIModal  from '../../components/InitModal.js'

import { useSelector } from 'react-redux'
//import { useNavigation } from '@react-navigation/native';


const renderItem = ({item}, navigation) => {
  const questions = item.questions ? item.questions.length : 0;

  const goToDeckItem = ({item}) => {
    //this.props.dispatch(getDeckItem({ deckItem: item }));
    console.log(`goToDeckItem:  ${JSON.stringify(item)}`);
    navigation.navigate('DeckItem', {item});
  };
  return (
    <ListItem
      containerStyle={{borderBottomColor: MyColors.dividerColor}}
      onPress={() => goToDeckItem({item})}>
      <ListItem.Content>
        <ListItem.Title style={{color: MyColors.primaryTextColor}}>{item.title}</ListItem.Title>
        <Badge
          value={questions}
          textStyle={{color: MyColors.textPrimaryColor}}
          containerStyle={{backgroundColor: MyColors.accentColor}}
        />
      </ListItem.Content>
      <ListItem.Chevron color={MyColors.secondaryTextColor} />
    </ListItem>
  );
};

const ListDeck = ({navigation}) => {
  const [showModal, setShowModal] = useState(true)
  //setInitialData = () => {
  //persistData().then((data) => console.log(`The Data: ${data}`));
  //};


  const toggleModal = () => {
    //this.setState({showModal: false});
    setShowModal(!showModal)
    //this.props.navigation.navigate('AddDeck');
    //navigation.navigate('AddDeck')
  };
  const decks = useSelector(state => state.decks)
  const isEmpty = Object.keys(decks).length < 1 ? true : false;
  let listToRender = <ActivityIndicator size={'large'} color={MyColors.accentColor} />;
  if (!isEmpty) {
    const list = Object.values(decks);
    listToRender = (
      <FlatList data={list} 
        keyExtractor={(item) => item.title} 
        //renderItem={(item)=>{renderItem(item,goToDeckItem)}} 
        renderItem={(props)=>renderItem(props,navigation)} 
      />
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: MyColors.textPrimaryColor}}>
      {listToRender}
      { isEmpty && showModal &&
        (<MyIModal modalState={showModal} toggleModal={toggleModal} />)}
    </View>
  );

}

export default ListDeck;
