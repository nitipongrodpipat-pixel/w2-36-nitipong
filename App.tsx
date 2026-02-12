import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Post from './components/post';
import PostData from './post-data.json';
export default function App() {
  return (
    <SafeAreaView style={{paddingHorizontal:20,backgroundColor:"gray"}}>
      
   <FlatList
      data={PostData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => 
      <Post
      username={item.username}
      profile={item.profile}  
      caption={item.caption} 
      image={item.image}
      />}
      contentContainerStyle={{gap:10}}
   />
      
    </SafeAreaView>
  );
}