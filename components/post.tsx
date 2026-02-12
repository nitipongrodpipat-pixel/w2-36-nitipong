import{View,Text,Image, TouchableOpacity, Share } from "react-native"
import{FontAwesome6} from "@expo/vector-icons"
import {useState} from "react"

type PastProps ={
    username: string,
    caption: string,
    image? : string,
    profile: string,
    
}

export default function Post ({ username, caption, image,profile}:PastProps) {

        const [like, setLike,]=useState (0)
        const [comment, setcomment,]=useState (0)
        const [re,setre]=useState (0)

    return (
        <View style={{backgroundColor:"skyblue",padding:15,borderRadius:40}}>
           <View style={{flexDirection:"row",gap:1,alignItems:"center"}}>
             <Image source={{uri : `${profile}`}} style={{width:40,height:40,borderRadius:100}}/>
            <Text style={{fontSize:18, fontWeight:"600",color:"black",margin:15}}>{username}</Text>
           </View>

           <View>
             <Text style={{color:"black",margin:5}}>{caption}</Text>
            {
                image && <Image source={{uri: image}} style={{width:"100%", height:300}}/>
            }
           </View>
           
            <View style={{flexDirection:"row",margin:10,gap:10}}>
                  <TouchableOpacity onPress={() => setLike(like + 1)}>
                <FontAwesome6 name="heart" size={20} color="red"/>
            </TouchableOpacity>
            <Text>{like}</Text>


            <TouchableOpacity onPress={() => setcomment(comment +1)}>
                <FontAwesome6 name="comment-dots" size={20} Color="black"/>
            </TouchableOpacity>
            <Text>{comment}</Text>


            <TouchableOpacity onPress={() => setre(re + 1)}>
                <FontAwesome6 name="reply" size={20} color="black"/>
            </TouchableOpacity>
            <Text>{re}</Text>
            </View>

            

        </View>
    )
}
    
    
    
