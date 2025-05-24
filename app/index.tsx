import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text className="bg-blue-500 text-white pl-3 h-10 text-2xl">Detalhe do produto</Text>

    <View>
      <Image 
      className="w-32 h-32 rounded-full"
      source={{uri: 'https://static.vecteezy.com/system/resources/previews/022/996/364/non_2x/free-golden-chinese-dragon-ai-generative-free-png.png'}}/>
  
    </View>

  

    </View>
  );
}
